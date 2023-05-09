# Dhcp

### Available Operations

* [ProtocolDhcpGetArgs](#protocoldhcpgetargs) - Show the agent's DHCP argument structure
* [ProtocolDhcpGetConfig](#protocoldhcpgetconfig) - Show the agent's DHCP configuration
* [ProtocolDhcpGetStatistics](#protocoldhcpgetstatistics) - Show the agent's DHCP statistics
* [ProtocolDhcpGetStatsHdr](#protocoldhcpgetstatshdr) - Show the DHCP statistics headers
* [ProtocolDhcpGetTrace](#protocoldhcpgettrace) - Show the agent's DHCP traffic tracing
* [ProtocolDhcpParams](#protocoldhcpparams) - Show the parameters configured by the server in its DHCP-OFFER message
* [ProtocolDhcpSetConfig](#protocoldhcpsetconfig) - Set the agent's DHCP configuration
* [ProtocolDhcpSetTrace](#protocoldhcpsettrace) - Set the agent's DHCP traffic tracing

## ProtocolDhcpGetArgs

Agent's DHCP configuration particulars

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
    res, err := s.Dhcp.ProtocolDhcpGetArgs(ctx, operations.ProtocolDhcpGetArgsRequest{
        AgentNum: 921158,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolDhcpGetConfig

Agent's DHCP configuration hwaddr,classid,add_options,script

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
    res, err := s.Dhcp.ProtocolDhcpGetConfig(ctx, operations.ProtocolDhcpGetConfigRequest{
        AgentNum: 575947,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigDHCP != nil {
        // handle response
    }
}
```

## ProtocolDhcpGetStatistics

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
    res, err := s.Dhcp.ProtocolDhcpGetStatistics(ctx, operations.ProtocolDhcpGetStatisticsRequest{
        AgentNum: 83112,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolDhcpGetStatsHdr

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
    res, err := s.Dhcp.ProtocolDhcpGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolDhcpGetTrace

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
    res, err := s.Dhcp.ProtocolDhcpGetTrace(ctx, operations.ProtocolDhcpGetTraceRequest{
        AgentNum: 929297,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigDHCP != nil {
        // handle response
    }
}
```

## ProtocolDhcpParams

DHCP-OFFER message parameters

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
    res, err := s.Dhcp.ProtocolDhcpParams(ctx, operations.ProtocolDhcpParamsRequest{
        AgentNum: 277718,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpParams200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProtocolDhcpSetConfig

Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Dhcp.ProtocolDhcpSetConfig(ctx, operations.ProtocolDhcpSetConfigRequest{
        AgentNum: 318569,
        Argument: "consequatur",
        Value: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolDhcpSetTrace

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
    res, err := s.Dhcp.ProtocolDhcpSetTrace(ctx, operations.ProtocolDhcpSetTraceRequest{
        AgentNum: 842342,
        EnableOrNot: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolDhcpSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
