# Snmptcp

### Available Operations

* [ProtocolSnmptcpGetArgs](#protocolsnmptcpgetargs) - Show the agent's SNMPTCP argument structure
* [ProtocolSnmptcpGetConfig](#protocolsnmptcpgetconfig) - Show the agent's SNMPTCP configuration
* [ProtocolSnmptcpGetStatistics](#protocolsnmptcpgetstatistics) - Show the agent's SNMPTCP statistics
* [ProtocolSnmptcpGetStatsHdr](#protocolsnmptcpgetstatshdr) - Show the SNMPTCP statistics headers
* [ProtocolSnmptcpGetTrace](#protocolsnmptcpgettrace) - Show the agent's SNMPTCP traffic tracing
* [ProtocolSnmptcpIpaliasDisable](#protocolsnmptcpipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasEnable](#protocolsnmptcpipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasIsenabled](#protocolsnmptcpipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasList](#protocolsnmptcpipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolSnmptcpSetConfig](#protocolsnmptcpsetconfig) - Set the agent's SNMPTCP configuration
* [ProtocolSnmptcpSetTrace](#protocolsnmptcpsettrace) - Set the agent's SNMPTCP traffic tracing

## ProtocolSnmptcpGetArgs

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Snmptcp.ProtocolSnmptcpGetArgs(ctx, operations.ProtocolSnmptcpGetArgsRequest{
        AgentNum: 874573,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpGetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Snmptcp.ProtocolSnmptcpGetConfig(ctx, operations.ProtocolSnmptcpGetConfigRequest{
        AgentNum: 345352,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSNMPTCP != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpGetStatistics

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
    res, err := s.Snmptcp.ProtocolSnmptcpGetStatistics(ctx, operations.ProtocolSnmptcpGetStatisticsRequest{
        AgentNum: 944120,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpGetStatsHdr

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
    res, err := s.Snmptcp.ProtocolSnmptcpGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpGetTrace

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
    res, err := s.Snmptcp.ProtocolSnmptcpGetTrace(ctx, operations.ProtocolSnmptcpGetTraceRequest{
        AgentNum: 928082,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSNMPTCP != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpIpaliasDisable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Snmptcp.ProtocolSnmptcpIpaliasDisable(ctx, operations.ProtocolSnmptcpIpaliasDisableRequest{
        AgentNum: 608253,
        Ipaddress: "facilis",
        Port: 596656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpIpaliasDisable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpIpaliasEnable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Snmptcp.ProtocolSnmptcpIpaliasEnable(ctx, operations.ProtocolSnmptcpIpaliasEnableRequest{
        AgentNum: 31838,
        Ipaddress: "porro",
        Port: 164694,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpIpaliasEnable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpIpaliasIsenabled

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Snmptcp.ProtocolSnmptcpIpaliasIsenabled(ctx, operations.ProtocolSnmptcpIpaliasIsenabledRequest{
        AgentNum: 500026,
        Ipaddress: "error",
        Port: 50370,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpIpaliasIsenabled200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpIpaliasList

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.Snmptcp.ProtocolSnmptcpIpaliasList(ctx, operations.ProtocolSnmptcpIpaliasListRequest{
        AgentNum: 577229,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAliases != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpSetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Snmptcp.ProtocolSnmptcpSetConfig(ctx, operations.ProtocolSnmptcpSetConfigRequest{
        AgentNum: 699098,
        Argument: "adipisci",
        Value: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmptcpSetTrace

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
    res, err := s.Snmptcp.ProtocolSnmptcpSetTrace(ctx, operations.ProtocolSnmptcpSetTraceRequest{
        AgentNum: 934214,
        EnableOrNot: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmptcpSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
