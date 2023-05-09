# SSH

### Available Operations

* [ProtocolSSHGetArgs](#protocolsshgetargs) - Show the agent's SSH argument structure
* [ProtocolSSHGetConfig](#protocolsshgetconfig) - Show the agent's SSH configuration
* [ProtocolSSHGetStatistics](#protocolsshgetstatistics) - Show the agent's SSH statistics
* [ProtocolSSHGetStatsHdr](#protocolsshgetstatshdr) - Show the SSH statistics headers
* [ProtocolSSHGetTrace](#protocolsshgettrace) - Show the agent's SSH traffic tracing
* [ProtocolSSHIpaliasDisable](#protocolsshipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasEnable](#protocolsshipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasIsenabled](#protocolsshipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasList](#protocolsshipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolSSHSetConfig](#protocolsshsetconfig) - Set the agent's SSH configuration
* [ProtocolSSHSetTrace](#protocolsshsettrace) - Set the agent's SSH traffic tracing

## ProtocolSSHGetArgs

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.SSH.ProtocolSSHGetArgs(ctx, operations.ProtocolSSHGetArgsRequest{
        AgentNum: 881586,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolSSHGetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.SSH.ProtocolSSHGetConfig(ctx, operations.ProtocolSSHGetConfigRequest{
        AgentNum: 320017,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSSH != nil {
        // handle response
    }
}
```

## ProtocolSSHGetStatistics

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
    res, err := s.SSH.ProtocolSSHGetStatistics(ctx, operations.ProtocolSSHGetStatisticsRequest{
        AgentNum: 904425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolSSHGetStatsHdr

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
    res, err := s.SSH.ProtocolSSHGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSSHGetTrace

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
    res, err := s.SSH.ProtocolSSHGetTrace(ctx, operations.ProtocolSSHGetTraceRequest{
        AgentNum: 383464,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSSH != nil {
        // handle response
    }
}
```

## ProtocolSSHIpaliasDisable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.SSH.ProtocolSSHIpaliasDisable(ctx, operations.ProtocolSSHIpaliasDisableRequest{
        AgentNum: 645785,
        Ipaddress: "provident",
        Port: 324683,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHIpaliasDisable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSSHIpaliasEnable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.SSH.ProtocolSSHIpaliasEnable(ctx, operations.ProtocolSSHIpaliasEnableRequest{
        AgentNum: 831049,
        Ipaddress: "totam",
        Port: 628982,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHIpaliasEnable200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSSHIpaliasIsenabled

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.SSH.ProtocolSSHIpaliasIsenabled(ctx, operations.ProtocolSSHIpaliasIsenabledRequest{
        AgentNum: 55,
        Ipaddress: "at",
        Port: 311860,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHIpaliasIsenabled200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSSHIpaliasList

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

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
    res, err := s.SSH.ProtocolSSHIpaliasList(ctx, operations.ProtocolSSHIpaliasListRequest{
        AgentNum: 273542,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAliases != nil {
        // handle response
    }
}
```

## ProtocolSSHSetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.SSH.ProtocolSSHSetConfig(ctx, operations.ProtocolSSHSetConfigRequest{
        AgentNum: 425451,
        Argument: "quod",
        Value: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSSHSetTrace

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
    res, err := s.SSH.ProtocolSSHSetTrace(ctx, operations.ProtocolSSHSetTraceRequest{
        AgentNum: 185636,
        EnableOrNot: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSSHSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
