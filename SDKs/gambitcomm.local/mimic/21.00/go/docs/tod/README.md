# Tod

### Available Operations

* [ProtocolTodGetArgs](#protocoltodgetargs) - Show the agent's TOD argument structure
* [ProtocolTodGetConfig](#protocoltodgetconfig) - Show the agent's TOD configuration
* [ProtocolTodGetStatistics](#protocoltodgetstatistics) - Show the agent's TOD statistics
* [ProtocolTodGetStatsHdr](#protocoltodgetstatshdr) - Show the TOD statistics headers
* [ProtocolTodGetTrace](#protocoltodgettrace) - Show the agent's TOD traffic tracing
* [ProtocolTodGettime](#protocoltodgettime) - Retrieve TOD time
* [ProtocolTodSetConfig](#protocoltodsetconfig) - Set the agent's TOD configuration
* [ProtocolTodSetTrace](#protocoltodsettrace) - Set the agent's TOD traffic tracing

## ProtocolTodGetArgs

Agent's TOD configuration

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
    res, err := s.Tod.ProtocolTodGetArgs(ctx, operations.ProtocolTodGetArgsRequest{
        AgentNum: 586410,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolTodGetConfig

Agent's TOD configuration

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
    res, err := s.Tod.ProtocolTodGetConfig(ctx, operations.ProtocolTodGetConfigRequest{
        AgentNum: 181631,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTOD != nil {
        // handle response
    }
}
```

## ProtocolTodGetStatistics

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
    res, err := s.Tod.ProtocolTodGetStatistics(ctx, operations.ProtocolTodGetStatisticsRequest{
        AgentNum: 63955,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTodGetStatsHdr

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
    res, err := s.Tod.ProtocolTodGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTodGetTrace

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
    res, err := s.Tod.ProtocolTodGetTrace(ctx, operations.ProtocolTodGetTraceRequest{
        AgentNum: 512393,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTOD != nil {
        // handle response
    }
}
```

## ProtocolTodGettime

Retrive time from server

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
    res, err := s.Tod.ProtocolTodGettime(ctx, operations.ProtocolTodGettimeRequest{
        AgentNum: 485628,
        NumRetries: 580447,
        PortNum: 977496,
        ScriptName: "quisquam",
        ServerAddr: "vero",
        TimeSec: 606476,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodGettime200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTodSetConfig

Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Tod.ProtocolTodSetConfig(ctx, operations.ProtocolTodSetConfigRequest{
        AgentNum: 338159,
        Argument: "ipsum",
        Value: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTodSetTrace

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
    res, err := s.Tod.ProtocolTodSetTrace(ctx, operations.ProtocolTodSetTraceRequest{
        AgentNum: 455169,
        EnableOrNot: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTodSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
