# Telnet

### Available Operations

* [ProtocolTelnetConnectionLogon](#protocoltelnetconnectionlogon) - Changes the connection's current logon.
* [ProtocolTelnetConnectionRequest](#protocoltelnetconnectionrequest) - Executes the command asynchronously .
* [ProtocolTelnetConnectionSignal](#protocoltelnetconnectionsignal) - Triggers the asynchronous signal event with the specified signal name
* [ProtocolTelnetGetArgs](#protocoltelnetgetargs) - Show the agent's TELNET argument structure
* [ProtocolTelnetGetConfig](#protocoltelnetgetconfig) - Show the agent's TELNET configuration
* [ProtocolTelnetGetStatistics](#protocoltelnetgetstatistics) - Show the agent's TELNET statistics
* [ProtocolTelnetGetStatsHdr](#protocoltelnetgetstatshdr) - Show the TELNET statistics headers
* [ProtocolTelnetGetTrace](#protocoltelnetgettrace) - Show the agent's TELNET traffic tracing
* [ProtocolTelnetIpaliasDisable](#protocoltelnetipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasEnable](#protocoltelnetipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasIsenabled](#protocoltelnetipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasList](#protocoltelnetipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolTelnetServerGetConnections](#protocoltelnetservergetconnections) - Show the agent's TELNET connections
* [ProtocolTelnetServerGetKeymap](#protocoltelnetservergetkeymap) - Show the agent's TELNET keymap file name
* [ProtocolTelnetServerGetRulesdb](#protocoltelnetservergetrulesdb) - Show the agent's TELNET rules db file name
* [ProtocolTelnetServerGetState](#protocoltelnetservergetstate) - Show the agent's TELNET server state
* [ProtocolTelnetServerGetUserdb](#protocoltelnetservergetuserdb) - Show the agent's TELNET user db file name
* [ProtocolTelnetServerGetUsers](#protocoltelnetservergetusers) - Show the agent's TELNET users
* [ProtocolTelnetSetConfig](#protocoltelnetsetconfig) - Set the agent's TELNET configuration
* [ProtocolTelnetSetTrace](#protocoltelnetsettrace) - Set the agent's TELNET traffic tracing

## ProtocolTelnetConnectionLogon

Logon change allows (hidden) commands for a different access mode to run.

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
    res, err := s.Telnet.ProtocolTelnetConnectionLogon(ctx, operations.ProtocolTelnetConnectionLogonRequest{
        AgentNum: 646265,
        ConnectionID: 463575,
        Password: "ipsum",
        User: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetConnectionLogon200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetConnectionRequest

Equivalent of the command typed in by the user.

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
    res, err := s.Telnet.ProtocolTelnetConnectionRequest(ctx, operations.ProtocolTelnetConnectionRequestRequest{
        AgentNum: 186458,
        Command: "cupiditate",
        ConnectionID: 807581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetConnectionRequest200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetConnectionSignal

Signal name is either connect or idle

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
    res, err := s.Telnet.ProtocolTelnetConnectionSignal(ctx, operations.ProtocolTelnetConnectionSignalRequest{
        AgentNum: 863856,
        ConnectionID: 747080,
        SignalName: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetConnectionSignal200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetGetArgs

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Telnet.ProtocolTelnetGetArgs(ctx, operations.ProtocolTelnetGetArgsRequest{
        AgentNum: 674848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolTelnetGetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Telnet.ProtocolTelnetGetConfig(ctx, operations.ProtocolTelnetGetConfigRequest{
        AgentNum: 517379,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTELNET != nil {
        // handle response
    }
}
```

## ProtocolTelnetGetStatistics

Statistics of fields indicated in the headers

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
    res, err := s.Telnet.ProtocolTelnetGetStatistics(ctx, operations.ProtocolTelnetGetStatisticsRequest{
        AgentNum: 276894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTelnetGetStatsHdr

The headers of statistics fields

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
    res, err := s.Telnet.ProtocolTelnetGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetGetTrace

Trace 1 means enabled, 0 means not

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
    res, err := s.Telnet.ProtocolTelnetGetTrace(ctx, operations.ProtocolTelnetGetTraceRequest{
        AgentNum: 132068,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTELNET != nil {
        // handle response
    }
}
```

## ProtocolTelnetIpaliasDisable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Telnet.ProtocolTelnetIpaliasDisable(ctx, operations.ProtocolTelnetIpaliasDisableRequest{
        AgentNum: 174909,
        Ipaddress: "distinctio",
        Port: 704474,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetIpaliasDisable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTelnetIpaliasEnable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Telnet.ProtocolTelnetIpaliasEnable(ctx, operations.ProtocolTelnetIpaliasEnableRequest{
        AgentNum: 396060,
        Ipaddress: "quam",
        Port: 565421,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetIpaliasEnable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTelnetIpaliasIsenabled

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Telnet.ProtocolTelnetIpaliasIsenabled(ctx, operations.ProtocolTelnetIpaliasIsenabledRequest{
        AgentNum: 840429,
        Ipaddress: "qui",
        Port: 204865,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetIpaliasIsenabled200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTelnetIpaliasList

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Telnet.ProtocolTelnetIpaliasList(ctx, operations.ProtocolTelnetIpaliasListRequest{
        AgentNum: 144847,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAliases != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetConnections

IDs of all connected connections

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
    res, err := s.Telnet.ProtocolTelnetServerGetConnections(ctx, operations.ProtocolTelnetServerGetConnectionsRequest{
        AgentNum: 164959,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetServerGetConnections200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetKeymap

Keymap file name

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
    res, err := s.Telnet.ProtocolTelnetServerGetKeymap(ctx, operations.ProtocolTelnetServerGetKeymapRequest{
        AgentNum: 488056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetServerGetKeymap200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetRulesdb

Rules db file name

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
    res, err := s.Telnet.ProtocolTelnetServerGetRulesdb(ctx, operations.ProtocolTelnetServerGetRulesdbRequest{
        AgentNum: 124833,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetServerGetRulesdb200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetState

Return 1 means accepting connections, 0 not

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
    res, err := s.Telnet.ProtocolTelnetServerGetState(ctx, operations.ProtocolTelnetServerGetStateRequest{
        AgentNum: 355613,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetServerGetState200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetUserdb

User db file name

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
    res, err := s.Telnet.ProtocolTelnetServerGetUserdb(ctx, operations.ProtocolTelnetServerGetUserdbRequest{
        AgentNum: 722081,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetServerGetUserdb200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTelnetServerGetUsers

List of users

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
    res, err := s.Telnet.ProtocolTelnetServerGetUsers(ctx, operations.ProtocolTelnetServerGetUsersRequest{
        AgentNum: 940432,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TelnetUsers != nil {
        // handle response
    }
}
```

## ProtocolTelnetSetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Telnet.ProtocolTelnetSetConfig(ctx, operations.ProtocolTelnetSetConfigRequest{
        AgentNum: 30452,
        Argument: "cumque",
        Value: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTelnetSetTrace

1 to enable, 0 to disable

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
    res, err := s.Telnet.ProtocolTelnetSetTrace(ctx, operations.ProtocolTelnetSetTraceRequest{
        AgentNum: 748664,
        EnableOrNot: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTelnetSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
