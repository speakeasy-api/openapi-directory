# Coap

### Available Operations

* [ProtocolCoapGetArgs](#protocolcoapgetargs) - Show the agent's COAP argument structure
* [ProtocolCoapGetConfig](#protocolcoapgetconfig) - Show the agent's COAP configuration
* [ProtocolCoapGetStatistics](#protocolcoapgetstatistics) - Show the agent's COAP statistics
* [ProtocolCoapGetStatsHdr](#protocolcoapgetstatshdr) - Show the COAP statistics headers
* [ProtocolCoapGetTrace](#protocolcoapgettrace) - Show the agent's COAP traffic tracing
* [ProtocolCoapSetConfig](#protocolcoapsetconfig) - Set the agent's COAP configuration
* [ProtocolCoapSetTrace](#protocolcoapsettrace) - Set the agent's COAP traffic tracing

## ProtocolCoapGetArgs

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Coap.ProtocolCoapGetArgs(ctx, operations.ProtocolCoapGetArgsRequest{
        AgentNum: 692472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolCoapGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolCoapGetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Coap.ProtocolCoapGetConfig(ctx, operations.ProtocolCoapGetConfigRequest{
        AgentNum: 565189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigCOAP != nil {
        // handle response
    }
}
```

## ProtocolCoapGetStatistics

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
    res, err := s.Coap.ProtocolCoapGetStatistics(ctx, operations.ProtocolCoapGetStatisticsRequest{
        AgentNum: 566602,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolCoapGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolCoapGetStatsHdr

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
    res, err := s.Coap.ProtocolCoapGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolCoapGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolCoapGetTrace

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
    res, err := s.Coap.ProtocolCoapGetTrace(ctx, operations.ProtocolCoapGetTraceRequest{
        AgentNum: 865103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigCOAP != nil {
        // handle response
    }
}
```

## ProtocolCoapSetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Coap.ProtocolCoapSetConfig(ctx, operations.ProtocolCoapSetConfigRequest{
        AgentNum: 265389,
        Argument: "praesentium",
        Value: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolCoapSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolCoapSetTrace

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
    res, err := s.Coap.ProtocolCoapSetTrace(ctx, operations.ProtocolCoapSetTraceRequest{
        AgentNum: 916723,
        EnableOrNot: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolCoapSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
