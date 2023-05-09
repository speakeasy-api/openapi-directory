# Sflow

### Available Operations

* [ProtocolSflowGetArgs](#protocolsflowgetargs) - Show the agent's SFLOW argument structure
* [ProtocolSflowGetConfig](#protocolsflowgetconfig) - Show the agent's SFLOW configuration
* [ProtocolSflowGetStatistics](#protocolsflowgetstatistics) - Show the agent's SFLOW statistics
* [ProtocolSflowGetStatsHdr](#protocolsflowgetstatshdr) - Show the SFLOW statistics headers
* [ProtocolSflowGetTrace](#protocolsflowgettrace) - Show the agent's SFLOW traffic tracing
* [ProtocolSflowHalt](#protocolsflowhalt) - Halt SFLOW traffic
* [ProtocolSflowReload](#protocolsflowreload) - Reload SFLOW configuration before resuming traffic
* [ProtocolSflowResume](#protocolsflowresume) - Resuming traffic
* [ProtocolSflowSetConfig](#protocolsflowsetconfig) - Set the agent's SFLOW configuration
* [ProtocolSflowSetTrace](#protocolsflowsettrace) - Set the agent's SFLOW traffic tracing

## ProtocolSflowGetArgs

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Sflow.ProtocolSflowGetArgs(ctx, operations.ProtocolSflowGetArgsRequest{
        AgentNum: 339404,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolSflowGetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Sflow.ProtocolSflowGetConfig(ctx, operations.ProtocolSflowGetConfigRequest{
        AgentNum: 521037,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSFLOW != nil {
        // handle response
    }
}
```

## ProtocolSflowGetStatistics

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
    res, err := s.Sflow.ProtocolSflowGetStatistics(ctx, operations.ProtocolSflowGetStatisticsRequest{
        AgentNum: 489549,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolSflowGetStatsHdr

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
    res, err := s.Sflow.ProtocolSflowGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSflowGetTrace

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
    res, err := s.Sflow.ProtocolSflowGetTrace(ctx, operations.ProtocolSflowGetTraceRequest{
        AgentNum: 54338,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSFLOW != nil {
        // handle response
    }
}
```

## ProtocolSflowHalt

Halt SFLOW traffic

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
    res, err := s.Sflow.ProtocolSflowHalt(ctx, operations.ProtocolSflowHaltRequest{
        AgentNum: 338985,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowHalt200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSflowReload

Reload SFLOW configuration before resuming traffic

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
    res, err := s.Sflow.ProtocolSflowReload(ctx, operations.ProtocolSflowReloadRequest{
        AgentNum: 199996,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowReload200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSflowResume

Resuming traffic

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
    res, err := s.Sflow.ProtocolSflowResume(ctx, operations.ProtocolSflowResumeRequest{
        AgentNum: 179490,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowResume200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSflowSetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Sflow.ProtocolSflowSetConfig(ctx, operations.ProtocolSflowSetConfigRequest{
        AgentNum: 18521,
        Argument: "dolores",
        Value: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSflowSetTrace

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
    res, err := s.Sflow.ProtocolSflowSetTrace(ctx, operations.ProtocolSflowSetTraceRequest{
        AgentNum: 463451,
        EnableOrNot: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSflowSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
