# Agent

### Available Operations

* [AddIpalias](#addipalias) - Adds a new ipalias for the agent.
* [AddTimerScript](#addtimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [AgentRemove](#agentremove) - Remove the current agent.
* [AgentStoreCopy](#agentstorecopy) - This command copies the variable store from the other agent to this agent.
* [AgentStoreExists](#agentstoreexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [AgentStoreGet](#agentstoreget) - Fetches the value associated with a variable.
* [AgentStoreList](#agentstorelist) - This command will return the list of variables in the said scope.
* [AgentStoreLreplace](#agentstorelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [AgentStorePersists](#agentstorepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [AgentStoreSet](#agentstoreset) - These commands allow the creation of a new variable, or changing an existing value.
* [AgentStoreUnset](#agentstoreunset) - Deletes a variable which is currently defined.
* [DelIpalias](#delipalias) - Deletes an existing ipalias from the agent.
* [DelTimerScript](#deltimerscript) - Remove a timer script from the execution list.
* [FromAdd](#fromadd) - Add a source address that the agent will accept messages from.
* [FromDel](#fromdel) - delete a source address that the agent will accept messages from.
* [FromList](#fromlist) - List the source addresses that the agent will accept messages from.
* [GetAgentState](#getagentstate) - current running state of the agent
* [GetChanged](#getchanged) - has the agent value space changed?
* [GetConfigChanged](#getconfigchanged) - has the lab configuration changed?
* [GetDelay](#getdelay) - one-way transit delay in msec.
* [GetDrops](#getdrops) - drop rate (every N-th PDU). 0 means no drops.
* [GetHost](#gethost) - host address of the agent.
* [GetInformTimeout](#getinformtimeout) - timeout in seconds for retransmitting INFORM PDUs.
* [GetInterface](#getinterface) - network interface card for the agent.
* [GetMask](#getmask) - subnet mask of the agent.
* [GetMibs](#getmibs) - set of MIBs, simulations and scenarios
* [GetNumberStarts](#getnumberstarts) - number of starts for the agent.
* [GetOiddir](#getoiddir) - MIB directory of the agent.
* [GetOwner](#getowner) - owner of the agent.
* [GetPdusize](#getpdusize) - maximum PDU size.
* [GetPort](#getport) - port number
* [GetPrivdir](#getprivdir) - private directory of the agent.
* [GetProtocols](#getprotocols) - protocols supported by agent
* [GetReadCommunity](#getreadcommunity) - read community string
* [GetScen](#getscen) - first scenario name
* [GetSim](#getsim) - first simulation name
* [GetStarttime](#getstarttime) - relative start time
* [GetStateChanged](#getstatechanged) - has the agent state changed?
* [GetStatistics](#getstatistics) - current statistics of the agent instance
* [GetTrace](#gettrace) - SNMP PDU tracing
* [GetValidate](#getvalidate) - SNMP SET validation policy.
* [GetWriteCommunity](#getwritecommunity) - write community string
* [Halt](#halt) - Halt the current agent.
* [ListIpaliases](#listipaliases) - Lists all the additional ipaliases configured for the agent.
* [ListTimerScripts](#listtimerscripts) - List the timer scripts currently running along with the their intervals.
* [New](#new) - Add an agent.
* [PauseNow](#pausenow) - Pause the current agent.
* [ProtocolGetConfig](#protocolgetconfig) - Returns the protocol's configuration.
* [Reload](#reload) - Reload the current agent.
* [Resume](#resume) - Resume the current agent.
* [Save](#save) - Save agent MIB values.
* [SetDelay](#setdelay) - one-way transit delay in msec
* [SetDrops](#setdrops) - drop rate (every N-th PDU)
* [SetHost](#sethost) - host address of the agent.
* [SetInformTimeout](#setinformtimeout) - timeout in seconds for retransmitting INFORM PDUs
* [SetInterface](#setinterface) - network interface card for the agent
* [SetMask](#setmask) - subnet mask of the agent.
* [SetMibs](#setmibs) - set of MIBs, simulations and scenarios
* [SetOiddir](#setoiddir) - MIB directory of the agent.
* [SetOwner](#setowner) - owner of the agent
* [SetPdusize](#setpdusize) - maximum PDU size
* [SetPort](#setport) - port number
* [SetPrivdir](#setprivdir) - private directory of the agent.
* [SetProtocols](#setprotocols) - protocols supported by agent as a comma-separated list
* [SetReadCommunity](#setreadcommunity) - read community string
* [SetStarttime](#setstarttime) - relative start time
* [SetTrace](#settrace) - SNMP PDU tracing
* [SetValidate](#setvalidate) - SNMP SET validation policy
* [SetWriteCommunity](#setwritecommunity) - write community string
* [Start](#start) - Start the current agent.
* [StartIpalias](#startipalias) - Starts an existing ipalias for the agent.
* [StatusIpalias](#statusipalias) - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* [Stop](#stop) - Show the agent's primary IP address
* [StopIpalias](#stopipalias) - Stops an existing ipalias for the agent.
* [TrapConfigAdd](#trapconfigadd) - Add a trap destination to the set of destinations.
* [TrapConfigDel](#trapconfigdel) - Remove a trap destination from the set of destinations.
* [TrapConfigList](#trapconfiglist) - List the set of trap destinations for this agent instance.
* [TrapList](#traplist) - List the outstanding asynchronous traps for this agent instance.

## AddIpalias

port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.

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
    res, err := s.Agent.AddIpalias(ctx, operations.AddIpaliasRequest{
        IP: "suscipit",
        AgentNum: 437587,
        Interface: "magnam",
        Mask: "debitis",
        Port: 56713,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddIpalias200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AddTimerScript

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
    res, err := s.Agent.AddTimerScript(ctx, operations.AddTimerScriptRequest{
        AgentNum: 963663,
        Arg: "tempora",
        Interval: 383441,
        Script: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTimerScript200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentRemove

For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.

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
    res, err := s.Agent.AgentRemove(ctx, operations.AgentRemoveRequest{
        AgentNum: 791725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentRemove200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreCopy

This command copies the variable store from the other agent to this agent.

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
    res, err := s.Agent.AgentStoreCopy(ctx, operations.AgentStoreCopyRequest{
        AgentNum: 812169,
        OtherAgent: 528895,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreCopy200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreExists

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
    res, err := s.Agent.AgentStoreExists(ctx, operations.AgentStoreExistsRequest{
        AgentNum: 479977,
        Var: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreExists200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreGet

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
    res, err := s.Agent.AgentStoreGet(ctx, operations.AgentStoreGetRequest{
        AgentNum: 392785,
        Var: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreGet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

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
    res, err := s.Agent.AgentStoreList(ctx, operations.AgentStoreListRequest{
        AgentNum: 836079,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## AgentStoreLreplace

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
    res, err := s.Agent.AgentStoreLreplace(ctx, operations.AgentStoreLreplaceRequest{
        RequestBody: sdk.String("ab"),
        AgentNum: 337396,
        Index: 87129,
        Var: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreLreplace200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStorePersists

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
    res, err := s.Agent.AgentStorePersists(ctx, operations.AgentStorePersistsRequest{
        AgentNum: 20218,
        Var: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStorePersists200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreSet

The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.

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
    res, err := s.Agent.AgentStoreSet(ctx, operations.AgentStoreSetRequest{
        RequestBody: sdk.String("repellendus"),
        AgentNum: 957156,
        Persist: 778157,
        Var: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreSet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AgentStoreUnset

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
    res, err := s.Agent.AgentStoreUnset(ctx, operations.AgentStoreUnsetRequest{
        AgentNum: 870013,
        Var: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AgentStoreUnset200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DelIpalias

port defaults to 161 if not specified.

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
    res, err := s.Agent.DelIpalias(ctx, operations.DelIpaliasRequest{
        IP: "maiores",
        AgentNum: 473608,
        Port: 799159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DelIpalias200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DelTimerScript

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
    res, err := s.Agent.DelTimerScript(ctx, operations.DelTimerScriptRequest{
        AgentNum: 800911,
        Arg: "esse",
        Interval: 520478,
        Script: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DelTimerScript200ApplicationJSONString != nil {
        // handle response
    }
}
```

## FromAdd

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

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
    res, err := s.Agent.FromAdd(ctx, operations.FromAddRequest{
        IP: "dolorum",
        AgentNum: 118274,
        Port: 720633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FromAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## FromDel

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

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
    res, err := s.Agent.FromDel(ctx, operations.FromDelRequest{
        IP: "officia",
        AgentNum: 582020,
        Port: 143353,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FromDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## FromList

This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.

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
    res, err := s.Agent.FromList(ctx, operations.FromListRequest{
        AgentNum: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPSources != nil {
        // handle response
    }
}
```

## GetAgentState

0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping

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
    res, err := s.Agent.GetAgentState(ctx, operations.GetAgentStateRequest{
        AgentNum: 944669,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAgentState200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetChanged

has the agent value space changed?

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
    res, err := s.Agent.GetChanged(ctx, operations.GetChangedRequest{
        AgentNum: 758616,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChanged200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetConfigChanged

has the lab configuration changed?

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
    res, err := s.Agent.GetConfigChanged(ctx, operations.GetConfigChangedRequest{
        AgentNum: 521848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigChanged200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetDelay

The minimum granularity is 10 msec.

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
    res, err := s.Agent.GetDelay(ctx, operations.GetDelayRequest{
        AgentNum: 105907,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDelay200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetDrops

drop rate (every N-th PDU). 0 means no drops.

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
    res, err := s.Agent.GetDrops(ctx, operations.GetDropsRequest{
        AgentNum: 414662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDrops200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

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
    res, err := s.Agent.GetHost(ctx, operations.GetHostRequest{
        AgentNum: 473600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHost200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

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
    res, err := s.Agent.GetInformTimeout(ctx, operations.GetInformTimeoutRequest{
        AgentNum: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInformTimeout200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetInterface

network interface card for the agent.

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
    res, err := s.Agent.GetInterface(ctx, operations.GetInterfaceRequest{
        AgentNum: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInterface200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetMask

subnet mask of the agent.

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
    res, err := s.Agent.GetMask(ctx, operations.GetMaskRequest{
        AgentNum: 774234,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMask200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetMibs

set of MIBs, simulations and scenarios

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
    res, err := s.Agent.GetMibs(ctx, operations.GetMibsRequest{
        AgentNum: 736918,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Triplets != nil {
        // handle response
    }
}
```

## GetNumberStarts

This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.

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
    res, err := s.Agent.GetNumberStarts(ctx, operations.GetNumberStartsRequest{
        AgentNum: 456150,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNumberStarts200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetOiddir

MIB directory of the agent.

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
    res, err := s.Agent.GetOiddir(ctx, operations.GetOiddirRequest{
        AgentNum: 216550,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOiddir200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetOwner

owner of the agent.

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
    res, err := s.Agent.GetOwner(ctx, operations.GetOwnerRequest{
        AgentNum: 568434,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOwner200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetPdusize

The limit for this configurable is 65536.

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
    res, err := s.Agent.GetPdusize(ctx, operations.GetPdusizeRequest{
        AgentNum: 135218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPdusize200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetPort

port number

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
    res, err := s.Agent.GetPort(ctx, operations.GetPortRequest{
        AgentNum: 18789,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPort200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetPrivdir

private directory of the agent.

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
    res, err := s.Agent.GetPrivdir(ctx, operations.GetPrivdirRequest{
        AgentNum: 324141,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPrivdir200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProtocols

protocols supported by agent as an array of strings

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
    res, err := s.Agent.GetProtocols(ctx, operations.GetProtocolsRequest{
        AgentNum: 617636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProtocols200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetReadCommunity

read community string

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
    res, err := s.Agent.GetReadCommunity(ctx, operations.GetReadCommunityRequest{
        AgentNum: 149675,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadCommunity200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetScen

first scenario name

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
    res, err := s.Agent.GetScen(ctx, operations.GetScenRequest{
        AgentNum: 612096,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScen200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetSim

first simulation name

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
    res, err := s.Agent.GetSim(ctx, operations.GetSimRequest{
        AgentNum: 222321,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSim200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetStarttime

relative start time

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
    res, err := s.Agent.GetStarttime(ctx, operations.GetStarttimeRequest{
        AgentNum: 616934,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStarttime200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetStateChanged

has the agent state changed?

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
    res, err := s.Agent.GetStateChanged(ctx, operations.GetStateChangedRequest{
        AgentNum: 386489,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStateChanged200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetStatistics

The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT

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
    res, err := s.Agent.GetStatistics(ctx, operations.GetStatisticsRequest{
        AgentNum: 943749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## GetTrace

SNMP PDU tracing

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
    res, err := s.Agent.GetTrace(ctx, operations.GetTraceRequest{
        AgentNum: 902599,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrace200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access

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
    res, err := s.Agent.GetValidate(ctx, operations.GetValidateRequest{
        AgentNum: 681820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetValidate200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## GetWriteCommunity

write community string

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
    res, err := s.Agent.GetWriteCommunity(ctx, operations.GetWriteCommunityRequest{
        AgentNum: 449950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWriteCommunity200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Halt

Halt the current agent.

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
    res, err := s.Agent.Halt(ctx, operations.HaltRequest{
        AgentNum: 359508,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Halt200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ListIpaliases

The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.

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
    res, err := s.Agent.ListIpaliases(ctx, operations.ListIpaliasesRequest{
        AgentNum: 613064,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAliases != nil {
        // handle response
    }
}
```

## ListTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

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
    res, err := s.Agent.ListTimerScripts(ctx, operations.ListTimerScriptsRequest{
        AgentNum: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimerScripts != nil {
        // handle response
    }
}
```

## New

Add an agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agent.New(ctx, operations.NewRequest{
        IP: "saepe",
        RequestBody: []shared.Triplet{
            shared.Triplet{
                Device: sdk.String("architecto"),
                Mib: sdk.String("ipsa"),
                Scenario: sdk.Int(969810),
            },
            shared.Triplet{
                Device: sdk.String("est"),
                Mib: sdk.String("mollitia"),
                Scenario: sdk.Int(670638),
            },
            shared.Triplet{
                Device: sdk.String("dolores"),
                Mib: sdk.String("dolorem"),
                Scenario: sdk.Int(358152),
            },
        },
        AgentNum: 128926,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.New200ApplicationJSONString != nil {
        // handle response
    }
}
```

## PauseNow

Pause the current agent.

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
    res, err := s.Agent.PauseNow(ctx, operations.PauseNowRequest{
        AgentNum: 750686,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PauseNow200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolGetConfig

Returns the protocol's configuration.

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
    res, err := s.Agent.ProtocolGetConfig(ctx, operations.ProtocolGetConfigRequest{
        AgentNum: 315428,
        Prot: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolGetConfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Reload

This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).

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
    res, err := s.Agent.Reload(ctx, operations.ReloadRequest{
        AgentNum: 363711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reload200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Resume

Resume the current agent.

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
    res, err := s.Agent.Resume(ctx, operations.ResumeRequest{
        AgentNum: 325047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resume200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Save

Save agent MIB values.

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
    res, err := s.Agent.Save(ctx, operations.SaveRequest{
        AgentNum: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Save200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetDelay

The minimum granularity is 10 msec.

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
    res, err := s.Agent.SetDelay(ctx, operations.SetDelayRequest{
        AgentNum: 38425,
        Delay: 438601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDelay200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetDrops

0 means no drops

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
    res, err := s.Agent.SetDrops(ctx, operations.SetDropsRequest{
        AgentNum: 634274,
        Drops: 988374,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDrops200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

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
    res, err := s.Agent.SetHost(ctx, operations.SetHostRequest{
        AgentNum: 958950,
        Host: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetHost200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

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
    res, err := s.Agent.SetInformTimeout(ctx, operations.SetInformTimeoutRequest{
        AgentNum: 652790,
        InformTimeout: 208876,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetInformTimeout200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetInterface

network interface card for the agent

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
    res, err := s.Agent.SetInterface(ctx, operations.SetInterfaceRequest{
        AgentNum: 635059,
        Interface: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetInterface200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetMask

subnet mask of the agent.

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
    res, err := s.Agent.SetMask(ctx, operations.SetMaskRequest{
        AgentNum: 995300,
        Mask: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetMask200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetMibs

set of MIBs, simulations and scenarios

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agent.SetMibs(ctx, operations.SetMibsRequest{
        RequestBody: []shared.Triplet{
            shared.Triplet{
                Device: sdk.String("numquam"),
                Mib: sdk.String("commodi"),
                Scenario: sdk.Int(466311),
            },
            shared.Triplet{
                Device: sdk.String("molestiae"),
                Mib: sdk.String("velit"),
                Scenario: sdk.Int(623510),
            },
            shared.Triplet{
                Device: sdk.String("quia"),
                Mib: sdk.String("quis"),
                Scenario: sdk.Int(110375),
            },
        },
        AgentNum: 674752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetMibs200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetOiddir

MIB directory of the agent.

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
    res, err := s.Agent.SetOiddir(ctx, operations.SetOiddirRequest{
        AgentNum: 656330,
        Oiddir: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetOiddir200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetOwner

owner of the agent

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
    res, err := s.Agent.SetOwner(ctx, operations.SetOwnerRequest{
        AgentNum: 138183,
        Owner: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetOwner200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetPdusize

The limit for this configurable is 65536

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
    res, err := s.Agent.SetPdusize(ctx, operations.SetPdusizeRequest{
        AgentNum: 196582,
        Pdusize: 949572,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPdusize200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetPort

port number

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
    res, err := s.Agent.SetPort(ctx, operations.SetPortRequest{
        AgentNum: 368725,
        Port: 662527,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPort200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetPrivdir

private directory of the agent.

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
    res, err := s.Agent.SetPrivdir(ctx, operations.SetPrivdirRequest{
        AgentNum: 820994,
        Privdir: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPrivdir200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetProtocols

protocols supported by agent as a comma-separated list

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
    res, err := s.Agent.SetProtocols(ctx, operations.SetProtocolsRequest{
        RequestBody: []string{
            "error",
        },
        AgentNum: 837945,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetProtocols200ApplicationJSONStringIntegers != nil {
        // handle response
    }
}
```

## SetReadCommunity

read community string

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
    res, err := s.Agent.SetReadCommunity(ctx, operations.SetReadCommunityRequest{
        AgentNum: 673660,
        Read: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetReadCommunity200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetStarttime

relative start time

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
    res, err := s.Agent.SetStarttime(ctx, operations.SetStarttimeRequest{
        AgentNum: 971945,
        Start: 976460,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetStarttime200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetTrace

SNMP PDU tracing

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
    res, err := s.Agent.SetTrace(ctx, operations.SetTraceRequest{
        AgentNum: 878194,
        Trace: 468651,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetTrace200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.

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
    res, err := s.Agent.SetValidate(ctx, operations.SetValidateRequest{
        AgentNum: 509624,
        Validate: 976762,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetValidate200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## SetWriteCommunity

write community string

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
    res, err := s.Agent.SetWriteCommunity(ctx, operations.SetWriteCommunityRequest{
        AgentNum: 55714,
        Write: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetWriteCommunity200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Start

For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.

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
    res, err := s.Agent.Start(ctx, operations.StartRequest{
        AgentNum: 451159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Start200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StartIpalias

port defaults to 161 if not specified.

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
    res, err := s.Agent.StartIpalias(ctx, operations.StartIpaliasRequest{
        IP: "cum",
        AgentNum: 19987,
        Port: 39187,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartIpalias200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StatusIpalias

port defaults to 161 if not specified.

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
    res, err := s.Agent.StatusIpalias(ctx, operations.StatusIpaliasRequest{
        IP: "reprehenderit",
        AgentNum: 282807,
        Port: 979587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusIpalias200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Stop

Agent primary IP address

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
    res, err := s.Agent.Stop(ctx, operations.StopRequest{
        AgentNum: 120196,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stop200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StopIpalias

port defaults to 161 if not specified.

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
    res, err := s.Agent.StopIpalias(ctx, operations.StopIpaliasRequest{
        IP: "corporis",
        AgentNum: 296140,
        Port: 480894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopIpalias200ApplicationJSONString != nil {
        // handle response
    }
}
```

## TrapConfigAdd

Add a trap destination to the set of destinations.

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
    res, err := s.Agent.TrapConfigAdd(ctx, operations.TrapConfigAddRequest{
        IP: "dicta",
        AgentNum: 688661,
        Port: 317983,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrapConfigAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## TrapConfigDel

Remove a trap destination from the set of destinations.

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
    res, err := s.Agent.TrapConfigDel(ctx, operations.TrapConfigDelRequest{
        IP: "accusamus",
        AgentNum: 414263,
        Port: 918236,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrapConfigDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## TrapConfigList

Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.

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
    res, err := s.Agent.TrapConfigList(ctx, operations.TrapConfigListRequest{
        AgentNum: 64147,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrapDests != nil {
        // handle response
    }
}
```

## TrapList

List the outstanding asynchronous traps for this agent instance.

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
    res, err := s.Agent.TrapList(ctx, operations.TrapListRequest{
        AgentNum: 216822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrapList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
