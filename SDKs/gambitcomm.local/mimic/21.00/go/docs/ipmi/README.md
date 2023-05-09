# Ipmi

### Available Operations

* [ProtocolIpmiGetArgs](#protocolipmigetargs) - Show the agent's IPMI argument structure
* [ProtocolIpmiGetAttr](#protocolipmigetattr) - Show the outgoing message's attributes
* [ProtocolIpmiGetConfig](#protocolipmigetconfig) - Show the agent's IPMI configuration
* [ProtocolIpmiGetStatistics](#protocolipmigetstatistics) - Show the agent's IPMI statistics
* [ProtocolIpmiGetStatsHdr](#protocolipmigetstatshdr) - Show the IPMI statistics headers
* [ProtocolIpmiGetTrace](#protocolipmigettrace) - Show the agent's IPMI traffic tracing
* [ProtocolIpmiSetAttr](#protocolipmisetattr) - Set the outgoing message's attributes
* [ProtocolIpmiSetConfig](#protocolipmisetconfig) - Set the agent's IPMI configuration
* [ProtocolIpmiSetTrace](#protocolipmisettrace) - Set the agent's IPMI traffic tracing

## ProtocolIpmiGetArgs

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Ipmi.ProtocolIpmiGetArgs(ctx, operations.ProtocolIpmiGetArgsRequest{
        AgentNum: 638921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolIpmiGetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

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
    res, err := s.Ipmi.ProtocolIpmiGetAttr(ctx, operations.ProtocolIpmiGetAttrRequest{
        AgentNum: 223081,
        Attr: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiGetAttr200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolIpmiGetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Ipmi.ProtocolIpmiGetConfig(ctx, operations.ProtocolIpmiGetConfigRequest{
        AgentNum: 952749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIPMI != nil {
        // handle response
    }
}
```

## ProtocolIpmiGetStatistics

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
    res, err := s.Ipmi.ProtocolIpmiGetStatistics(ctx, operations.ProtocolIpmiGetStatisticsRequest{
        AgentNum: 680056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolIpmiGetStatsHdr

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
    res, err := s.Ipmi.ProtocolIpmiGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolIpmiGetTrace

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
    res, err := s.Ipmi.ProtocolIpmiGetTrace(ctx, operations.ProtocolIpmiGetTraceRequest{
        AgentNum: 447125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIPMI != nil {
        // handle response
    }
}
```

## ProtocolIpmiSetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

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
    res, err := s.Ipmi.ProtocolIpmiSetAttr(ctx, operations.ProtocolIpmiSetAttrRequest{
        AgentNum: 449198,
        Attr: "illum",
        Value: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiSetAttr200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolIpmiSetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Ipmi.ProtocolIpmiSetConfig(ctx, operations.ProtocolIpmiSetConfigRequest{
        AgentNum: 699479,
        Argument: "dicta",
        Value: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolIpmiSetTrace

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
    res, err := s.Ipmi.ProtocolIpmiSetTrace(ctx, operations.ProtocolIpmiSetTraceRequest{
        AgentNum: 767024,
        EnableOrNot: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolIpmiSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
