# Daemon

### Available Operations

* [AddDaemonTimerScript](#adddaemontimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [CfgLoad](#cfgload) - Load the lab configuration file file.
* [CfgNew](#cfgnew) - Clear the lab configuration.
* [CfgSave](#cfgsave) - Save the lab configuration.
* [CfgSaveas](#cfgsaveas) - Save the lab configuration in file.
* [DelDaemonTimerScript](#deldaemontimerscript) - Remove a timer script from the execution list.
* [GetActiveDataList](#getactivedatalist) - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* [GetActiveList](#getactivelist) - The list of {agentnum} that are currently active (running or paused).
* [GetCfgFileChanged](#getcfgfilechanged) - This predicate indicates if the currently loaded agent configuration file has changed.
* [GetCfgfile](#getcfgfile) - The currently loaded lab configuration file for the particular user.
* [GetChangedConfigList](#getchangedconfiglist) - The list of {agentnum} for which a configurable parameter changed.
* [GetChangedStateList](#getchangedstatelist) - The list of {agentnum state} for which the state changed.
* [GetClients](#getclients) - The number of clients currently connected to the daemon.
* [GetConfiguredList](#getconfiguredlist) - The list of {agentnum} that are currently configured.
* [GetDaemonProtocols](#getdaemonprotocols) - The set of protocols supported by the Simulator.
* [GetInterfaces](#getinterfaces) - The set of network interfaces that can be used for simulations.
* [GetLast](#getlast) - The last configured agent instance.
* [GetLog](#getlog) - The current log file for the Simulator.
* [GetMax](#getmax) - The maximum number of agent instances.
* [GetNetaddr](#getnetaddr) - The network address of the host where the MIMIC simulator is running.
* [GetNetdev](#getnetdev) - The default network device to be used for agent addresses.
* [GetProduct](#getproduct) - The product number that is licensed.
* [GetReturn](#getreturn) - The return mode.
* [GetVersion](#getversion) - The version of the MIMIC command interface.
* [ListDaemonTimerScripts](#listdaemontimerscripts) - List the timer scripts currently running along with the their intervals.
* [MgetInfo](#mgetinfo) - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* [SetLog](#setlog) - The current log file for the Simulator.
* [SetNetdev](#setnetdev) - The network address of the host where the MIMIC simulator is running.
* [StartAllAgents](#startallagents) - Start MIMIC.
* [StopAllAgents](#stopallagents) - Stop MIMIC.
* [StoreExists](#storeexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [StoreGet](#storeget) - Fetches the value associated with a variable.
* [StoreList](#storelist) - This command will return the list of variables in the said scope.
* [StoreLreplace](#storelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [StorePersists](#storepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [StoreSave](#storesave) - This operation flushes all global objects which need to be made persistent to disk.
* [StoreSet](#storeset) - Set the variable store for the global storage
* [StoreUnset](#storeunset) - Deletes a variable which is currently defined.
* [Terminate](#terminate) - Terminate the MIMIC daemon.

## AddDaemonTimerScript

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.AddDaemonTimerScript(ctx, operations.AddDaemonTimerScriptRequest{
        Arg: "deserunt",
        Interval: 716327,
        Script: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDaemonTimerScript200ApplicationJSONString != nil {
        // handle response
    }
}
```

## CfgLoad

Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.CfgLoad(ctx, operations.CfgLoadRequest{
        CfgFile: "labore",
        FirstAgentNum: 264730,
        LastAgentNum: 183191,
        StartAgentNum: 397821,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CfgLoad200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CfgNew

Clear the lab configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.CfgNew(ctx, operations.CfgNewRequest{
        FirstAgentNum: 586513,
        LastAgentNum: 552822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CfgNew200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CfgSave

Save the lab configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.CfgSave(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CfgSave200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CfgSaveas

Save the lab configuration in file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.CfgSaveas(ctx, operations.CfgSaveasRequest{
        CfgFile: "perferendis",
        FirstAgentNum: 164940,
        LastAgentNum: 828940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CfgSaveas200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DelDaemonTimerScript

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.DelDaemonTimerScript(ctx, operations.DelDaemonTimerScriptRequest{
        Arg: "ipsam",
        Interval: 4695,
        Script: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DelDaemonTimerScript200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetActiveDataList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetActiveDataList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActiveDataList200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## GetActiveList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetActiveList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActiveList200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## GetCfgFileChanged

Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetCfgFileChanged(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCfgFileChanged200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCfgfile

In the case of multi-user access this command returns a different configuration file loaded for each user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetCfgfile(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCfgfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetChangedConfigList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetChangedConfigList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChangedConfigList200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## GetChangedStateList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetChangedStateList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStates != nil {
        // handle response
    }
}
```

## GetClients

The number of clients currently connected to the daemon.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetClients(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClients200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConfiguredList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetConfiguredList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredList200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## GetDaemonProtocols

The set of protocols supported by the Simulator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetDaemonProtocols(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDaemonProtocols200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetInterfaces

The set of network interfaces that can be used for simulations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetInterfaces(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInterfaces200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLast

The last configured agent instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetLast(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLast200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetLog

The current log file for the Simulator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetLog(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLog200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMax

The maximum number of agent instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetMax(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMax200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetNetaddr

The network address of the host where the MIMIC simulator is running.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetNetaddr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetaddr200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetdev

The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetNetdev(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetdev200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProduct

The product number that is licensed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetProduct(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProduct200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetReturn

The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetReturn(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReturn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVersion

The version of the MIMIC command interface.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.GetVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVersion200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ListDaemonTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.ListDaemonTimerScripts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TimerScripts != nil {
        // handle response
    }
}
```

## MgetInfo

Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.MgetInfo(ctx, operations.MgetInfoRequest{
        InfoArray: []string{
            "excepturi",
            "tempora",
            "facilis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MgetInfo200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SetLog

The current log file for the Simulator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.SetLog(ctx, "tempore")
    if err != nil {
        log.Fatal(err)
    }

    if res.SetLog200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetNetdev

The network address of the host where the MIMIC simulator is running.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.SetNetdev(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SetNetdev200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StartAllAgents

Start MIMIC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StartAllAgents(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAllAgents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StopAllAgents

Stop MIMIC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StopAllAgents(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StopAllAgents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreExists

It returns "1" if the variable exists, else "0".

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreExists(ctx, operations.StoreExistsRequest{
        Var: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreExists200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StoreGet

The value will be returned as a string (like all Tcl values).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreGet(ctx, operations.StoreGetRequest{
        Var: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreGet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StoreList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## StoreLreplace

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreLreplace(ctx, operations.StoreLreplaceRequest{
        RequestBody: sdk.String("eum"),
        Index: 248753,
        Var: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreLreplace200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StorePersists

It returns "1" if the variable is persistent, else "0".

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StorePersists(ctx, operations.StorePersistsRequest{
        Var: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StorePersists200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StoreSave

The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreSave(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreSave200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreSet

Persist 1 means persistent , 0 means non-persistent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreSet(ctx, operations.StoreSetRequest{
        RequestBody: sdk.String("aliquid"),
        Persist: 592042,
        Var: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreSet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StoreUnset

This will cleanup persistent variables if needed

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.StoreUnset(ctx, operations.StoreUnsetRequest{
        Var: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreUnset200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Terminate

Terminate the MIMIC daemon.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Daemon.Terminate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Terminate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
