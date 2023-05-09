# Netflow

### Available Operations

* [ProtocolNetflowChangeAttr](#protocolnetflowchangeattr) - Change NETFLOW export attributes
* [ProtocolNetflowChangeDfs](#protocolnetflowchangedfs) - Change NETFLOW data export interval
* [ProtocolNetflowChangeTfs](#protocolnetflowchangetfs) - Change NETFLOW template export interval
* [ProtocolNetflowGetArgs](#protocolnetflowgetargs) - Show the agent's NETFLOW argument structure
* [ProtocolNetflowGetConfig](#protocolnetflowgetconfig) - Show the agent's NETFLOW configuration
* [ProtocolNetflowGetStatistics](#protocolnetflowgetstatistics) - Show the agent's NETFLOW statistics
* [ProtocolNetflowGetStatsHdr](#protocolnetflowgetstatshdr) - Show the NETFLOW statistics headers
* [ProtocolNetflowGetTrace](#protocolnetflowgettrace) - Show the agent's NETFLOW traffic tracing
* [ProtocolNetflowHalt](#protocolnetflowhalt) - Halt NETFLOW traffic
* [ProtocolNetflowList](#protocolnetflowlist) - Show list of NETFLOW exports
* [ProtocolNetflowReload](#protocolnetflowreload) - Reload NETFLOW configuration before resuming traffic
* [ProtocolNetflowResume](#protocolnetflowresume) - Resuming traffic
* [ProtocolNetflowSetCollector](#protocolnetflowsetcollector) - Swap NETFLOW collector
* [ProtocolNetflowSetConfig](#protocolnetflowsetconfig) - Set the agent's NETFLOW configuration
* [ProtocolNetflowSetFileName](#protocolnetflowsetfilename) - Swap NETFLOW configuration file
* [ProtocolNetflowSetTrace](#protocolnetflowsettrace) - Set the agent's NETFLOW traffic tracing

## ProtocolNetflowChangeAttr

Change attributes

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
    res, err := s.Netflow.ProtocolNetflowChangeAttr(ctx, operations.ProtocolNetflowChangeAttrRequest{
        AgentNum: 447926,
        Attr: "architecto",
        FieldNum: 99569,
        FlowsetUID: 919483,
        Value: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowChangeAttr200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowChangeDfs

Interval in msec .

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
    res, err := s.Netflow.ProtocolNetflowChangeDfs(ctx, operations.ProtocolNetflowChangeDfsRequest{
        AgentNum: 714242,
        Interval: 469249,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowChangeDfs200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowChangeTfs

Interval in msec .

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
    res, err := s.Netflow.ProtocolNetflowChangeTfs(ctx, operations.ProtocolNetflowChangeTfsRequest{
        AgentNum: 998848,
        Interval: 841140,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowChangeTfs200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowGetArgs

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Netflow.ProtocolNetflowGetArgs(ctx, operations.ProtocolNetflowGetArgsRequest{
        AgentNum: 149448,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolNetflowGetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Netflow.ProtocolNetflowGetConfig(ctx, operations.ProtocolNetflowGetConfigRequest{
        AgentNum: 904648,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigNETFLOW != nil {
        // handle response
    }
}
```

## ProtocolNetflowGetStatistics

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
    res, err := s.Netflow.ProtocolNetflowGetStatistics(ctx, operations.ProtocolNetflowGetStatisticsRequest{
        AgentNum: 868126,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolNetflowGetStatsHdr

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
    res, err := s.Netflow.ProtocolNetflowGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolNetflowGetTrace

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
    res, err := s.Netflow.ProtocolNetflowGetTrace(ctx, operations.ProtocolNetflowGetTraceRequest{
        AgentNum: 37559,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigNETFLOW != nil {
        // handle response
    }
}
```

## ProtocolNetflowHalt

Halt NETFLOW traffic

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
    res, err := s.Netflow.ProtocolNetflowHalt(ctx, operations.ProtocolNetflowHaltRequest{
        AgentNum: 162493,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowHalt200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowList

Show list of NETFLOW exports

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
    res, err := s.Netflow.ProtocolNetflowList(ctx, operations.ProtocolNetflowListRequest{
        AgentNum: 508315,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProtocolNetflowReload

Reload NETFLOW configuration before resuming traffic

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
    res, err := s.Netflow.ProtocolNetflowReload(ctx, operations.ProtocolNetflowReloadRequest{
        AgentNum: 615560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowReload200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowResume

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
    res, err := s.Netflow.ProtocolNetflowResume(ctx, operations.ProtocolNetflowResumeRequest{
        AgentNum: 166847,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowResume200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowSetCollector

Allow changing collector without stopping agent

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
    res, err := s.Netflow.ProtocolNetflowSetCollector(ctx, operations.ProtocolNetflowSetCollectorRequest{
        AgentNum: 123820,
        CollectorIP: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowSetCollector200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowSetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Netflow.ProtocolNetflowSetConfig(ctx, operations.ProtocolNetflowSetConfigRequest{
        AgentNum: 848009,
        Argument: "pariatur",
        Value: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowSetFileName

Allow reloading the configuration file for an agent without stopping agent

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
    res, err := s.Netflow.ProtocolNetflowSetFileName(ctx, operations.ProtocolNetflowSetFileNameRequest{
        AgentNum: 411397,
        FileName: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowSetFileName200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolNetflowSetTrace

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
    res, err := s.Netflow.ProtocolNetflowSetTrace(ctx, operations.ProtocolNetflowSetTraceRequest{
        AgentNum: 139972,
        EnableOrNot: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolNetflowSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
