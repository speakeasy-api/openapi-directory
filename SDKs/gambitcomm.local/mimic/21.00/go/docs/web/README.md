# Web

### Available Operations

* [ProtocolWebGetArgs](#protocolwebgetargs) - Show the agent's WEB argument structure
* [ProtocolWebGetConfig](#protocolwebgetconfig) - Show the agent's WEB configuration
* [ProtocolWebGetStatistics](#protocolwebgetstatistics) - Show the agent's WEB statistics
* [ProtocolWebGetStatsHdr](#protocolwebgetstatshdr) - Show the WEB statistics headers
* [ProtocolWebGetTrace](#protocolwebgettrace) - Show the agent's WEB traffic tracing
* [ProtocolWebPortAdd](#protocolwebportadd) - Add the agent's WEB port
* [ProtocolWebPortExists](#protocolwebportexists) - Show the agent's WEB port
* [ProtocolWebPortRemove](#protocolwebportremove) - Remove the agent's WEB port
* [ProtocolWebPortSet](#protocolwebportset) - Set the agent's WEB port attribute
* [ProtocolWebPortStart](#protocolwebportstart) - Start the agent's WEB port
* [ProtocolWebPortStop](#protocolwebportstop) - Stop the agent's WEB port
* [ProtocolWebSetConfig](#protocolwebsetconfig) - Set the agent's WEB configuration
* [ProtocolWebSetTrace](#protocolwebsettrace) - Set the agent's WEB traffic tracing

## ProtocolWebGetArgs

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Web.ProtocolWebGetArgs(ctx, operations.ProtocolWebGetArgsRequest{
        AgentNum: 775220,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolWebGetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Web.ProtocolWebGetConfig(ctx, operations.ProtocolWebGetConfigRequest{
        AgentNum: 232234,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigWEB != nil {
        // handle response
    }
}
```

## ProtocolWebGetStatistics

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
    res, err := s.Web.ProtocolWebGetStatistics(ctx, operations.ProtocolWebGetStatisticsRequest{
        AgentNum: 926213,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolWebGetStatsHdr

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
    res, err := s.Web.ProtocolWebGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolWebGetTrace

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
    res, err := s.Web.ProtocolWebGetTrace(ctx, operations.ProtocolWebGetTraceRequest{
        AgentNum: 132487,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigWEB != nil {
        // handle response
    }
}
```

## ProtocolWebPortAdd

Add port

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
    res, err := s.Web.ProtocolWebPortAdd(ctx, operations.ProtocolWebPortAddRequest{
        AgentNum: 325310,
        Port: 53427,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebPortExists

Check the port. 1 means existing, 0 means not

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
    res, err := s.Web.ProtocolWebPortExists(ctx, operations.ProtocolWebPortExistsRequest{
        AgentNum: 952871,
        Port: 725595,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortExists200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolWebPortRemove

Remove port

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
    res, err := s.Web.ProtocolWebPortRemove(ctx, operations.ProtocolWebPortRemoveRequest{
        AgentNum: 13948,
        Port: 11427,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortRemove200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebPortSet

Set port

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
    res, err := s.Web.ProtocolWebPortSet(ctx, operations.ProtocolWebPortSetRequest{
        AgentNum: 533466,
        Port: 770581,
        Protocol: "aliquam",
        Version: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortSet200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebPortStart

Start port

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
    res, err := s.Web.ProtocolWebPortStart(ctx, operations.ProtocolWebPortStartRequest{
        AgentNum: 882860,
        Port: 79522,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortStart200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebPortStop

Stop port

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
    res, err := s.Web.ProtocolWebPortStop(ctx, operations.ProtocolWebPortStopRequest{
        AgentNum: 250622,
        Port: 89603,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebPortStop200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebSetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Web.ProtocolWebSetConfig(ctx, operations.ProtocolWebSetConfigRequest{
        AgentNum: 677412,
        Argument: "laborum",
        Value: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolWebSetTrace

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
    res, err := s.Web.ProtocolWebSetTrace(ctx, operations.ProtocolWebSetTraceRequest{
        AgentNum: 245367,
        EnableOrNot: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolWebSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
