# Proxy

### Available Operations

* [ProtocolProxyGetArgs](#protocolproxygetargs) - Show the agent's PROXY argument structure
* [ProtocolProxyGetConfig](#protocolproxygetconfig) - Show the agent's PROXY configuration
* [ProtocolProxyGetStatistics](#protocolproxygetstatistics) - Show the agent's PROXY statistics
* [ProtocolProxyGetStatsHdr](#protocolproxygetstatshdr) - Show the PROXY statistics headers
* [ProtocolProxyGetTrace](#protocolproxygettrace) - Show the agent's PROXY traffic tracing
* [ProtocolProxyPortAdd](#protocolproxyportadd) - Add individual proxy target on the agent and the simulator host
* [ProtocolProxyPortIsstarted](#protocolproxyportisstarted) - Check individual target
* [ProtocolProxyPortList](#protocolproxyportlist) - List all proxy targets
* [ProtocolProxyPortRemove](#protocolproxyportremove) - Remove individual proxy target on the agent and the simulator host
* [ProtocolProxyPortStart](#protocolproxyportstart) - Start additional target
* [ProtocolProxyPortStop](#protocolproxyportstop) - Stop additional target
* [ProtocolProxySetConfig](#protocolproxysetconfig) - Set the agent's PROXY configuration
* [ProtocolProxySetTrace](#protocolproxysettrace) - Set the agent's PROXY traffic tracing

## ProtocolProxyGetArgs

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Proxy.ProtocolProxyGetArgs(ctx, operations.ProtocolProxyGetArgsRequest{
        AgentNum: 33222,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolProxyGetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Proxy.ProtocolProxyGetConfig(ctx, operations.ProtocolProxyGetConfigRequest{
        AgentNum: 69167,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigPROXY != nil {
        // handle response
    }
}
```

## ProtocolProxyGetStatistics

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
    res, err := s.Proxy.ProtocolProxyGetStatistics(ctx, operations.ProtocolProxyGetStatisticsRequest{
        AgentNum: 982575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolProxyGetStatsHdr

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
    res, err := s.Proxy.ProtocolProxyGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolProxyGetTrace

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
    res, err := s.Proxy.ProtocolProxyGetTrace(ctx, operations.ProtocolProxyGetTraceRequest{
        AgentNum: 697429,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigPROXY != nil {
        // handle response
    }
}
```

## ProtocolProxyPortAdd

Additional proxy target

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
    res, err := s.Proxy.ProtocolProxyPortAdd(ctx, operations.ProtocolProxyPortAddRequest{
        AgentNum: 373291,
        Port: 453543,
        Target: "autem",
        TargetPort: 722056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxyPortIsstarted

Check individual target

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
    res, err := s.Proxy.ProtocolProxyPortIsstarted(ctx, operations.ProtocolProxyPortIsstartedRequest{
        AgentNum: 50588,
        Port: 866383,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortIsstarted200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxyPortList

List all proxy targets

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
    res, err := s.Proxy.ProtocolProxyPortList(ctx, operations.ProtocolProxyPortListRequest{
        AgentNum: 365496,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortList200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolProxyPortRemove

Remove proxy target

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
    res, err := s.Proxy.ProtocolProxyPortRemove(ctx, operations.ProtocolProxyPortRemoveRequest{
        AgentNum: 975522,
        Port: 16627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortRemove200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxyPortStart

Start additional target

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
    res, err := s.Proxy.ProtocolProxyPortStart(ctx, operations.ProtocolProxyPortStartRequest{
        AgentNum: 855804,
        Port: 230742,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortStart200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxyPortStop

Stop additional target

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
    res, err := s.Proxy.ProtocolProxyPortStop(ctx, operations.ProtocolProxyPortStopRequest{
        AgentNum: 11714,
        Port: 764912,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxyPortStop200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxySetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Proxy.ProtocolProxySetConfig(ctx, operations.ProtocolProxySetConfigRequest{
        AgentNum: 359978,
        Argument: "hic",
        Value: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxySetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolProxySetTrace

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
    res, err := s.Proxy.ProtocolProxySetTrace(ctx, operations.ProtocolProxySetTraceRequest{
        AgentNum: 749999,
        EnableOrNot: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolProxySetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
