# Syslog

### Available Operations

* [ProtocolSyslogGetArgs](#protocolsysloggetargs) - Show the agent's SYSLOG argument structure
* [ProtocolSyslogGetAttr](#protocolsysloggetattr) - Show the outgoing message's attributes
* [ProtocolSyslogGetConfig](#protocolsysloggetconfig) - Show the agent's SYSLOG configuration
* [ProtocolSyslogGetStatistics](#protocolsysloggetstatistics) - Show the agent's SYSLOG statistics
* [ProtocolSyslogGetStatsHdr](#protocolsysloggetstatshdr) - Show the SYSLOG statistics headers
* [ProtocolSyslogGetTrace](#protocolsysloggettrace) - Show the agent's SYSLOG traffic tracing
* [ProtocolSyslogSend](#protocolsyslogsend) - Set the agent's SYSLOG traffic tracing
* [ProtocolSyslogSetAttr](#protocolsyslogsetattr) - Set the outgoing message's attributes
* [ProtocolSyslogSetConfig](#protocolsyslogsetconfig) - Set the agent's SYSLOG configuration
* [ProtocolSyslogSetTrace](#protocolsyslogsettrace) - Set the agent's SYSLOG traffic tracing

## ProtocolSyslogGetArgs

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Syslog.ProtocolSyslogGetArgs(ctx, operations.ProtocolSyslogGetArgsRequest{
        AgentNum: 952792,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolSyslogGetAttr

Attribute can be server , sequence , separator , hostname , timestamp

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
    res, err := s.Syslog.ProtocolSyslogGetAttr(ctx, operations.ProtocolSyslogGetAttrRequest{
        AgentNum: 456130,
        Attr: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogGetAttr200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSyslogGetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Syslog.ProtocolSyslogGetConfig(ctx, operations.ProtocolSyslogGetConfigRequest{
        AgentNum: 483409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSYSLOG != nil {
        // handle response
    }
}
```

## ProtocolSyslogGetStatistics

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
    res, err := s.Syslog.ProtocolSyslogGetStatistics(ctx, operations.ProtocolSyslogGetStatisticsRequest{
        AgentNum: 215507,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolSyslogGetStatsHdr

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
    res, err := s.Syslog.ProtocolSyslogGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSyslogGetTrace

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
    res, err := s.Syslog.ProtocolSyslogGetTrace(ctx, operations.ProtocolSyslogGetTraceRequest{
        AgentNum: 788740,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSYSLOG != nil {
        // handle response
    }
}
```

## ProtocolSyslogSend

1 to enable, 0 to disable

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Syslog.ProtocolSyslogSend(ctx, operations.ProtocolSyslogSendRequest{
        SyslogMsg: shared.SyslogMsg{
            Hostname: sdk.String("wavy-cuisine.net"),
            Message: sdk.String("accusamus"),
            Separator: sdk.String("numquam"),
            Sequence: sdk.String("enim"),
            Timestamp: sdk.String("dolorem"),
        },
        AgentNum: 957451,
        Pri: 518201,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogSend200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSyslogSetAttr

Attribute can be server , sequence , separator , hostname , timestamp

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
    res, err := s.Syslog.ProtocolSyslogSetAttr(ctx, operations.ProtocolSyslogSetAttrRequest{
        AgentNum: 471752,
        Attr: "sit",
        Value: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogSetAttr200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSyslogSetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Syslog.ProtocolSyslogSetConfig(ctx, operations.ProtocolSyslogSetConfigRequest{
        AgentNum: 207470,
        Argument: "sed",
        Value: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSyslogSetTrace

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
    res, err := s.Syslog.ProtocolSyslogSetTrace(ctx, operations.ProtocolSyslogSetTraceRequest{
        AgentNum: 730442,
        EnableOrNot: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSyslogSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
