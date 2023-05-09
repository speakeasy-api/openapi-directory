# Tftp

### Available Operations

* [ProtocolTftpGetArgs](#protocoltftpgetargs) - Show the agent's TFTP argument structure
* [ProtocolTftpGetConfig](#protocoltftpgetconfig) - Show the agent's TFTP configuration
* [ProtocolTftpGetStatistics](#protocoltftpgetstatistics) - Show the agent's TFTP statistics
* [ProtocolTftpGetStatsHdr](#protocoltftpgetstatshdr) - Show the TFTP statistics headers
* [ProtocolTftpGetTrace](#protocoltftpgettrace) - Show the agent's TFTP traffic tracing
* [ProtocolTftpSessionGetParameter](#protocoltftpsessiongetparameter) - Show a parameter of a TFTP sesssion
* [ProtocolTftpSessionRead](#protocoltftpsessionread) - Create a read session to download srcfile from server
* [ProtocolTftpSessionSetParameter](#protocoltftpsessionsetparameter) - Set a parameter of a TFTP sesssion
* [ProtocolTftpSessionStart](#protocoltftpsessionstart) - Start a TFTP sesssion
* [ProtocolTftpSessionStatus](#protocoltftpsessionstatus) - Check a TFTP sesssion's status
* [ProtocolTftpSessionStop](#protocoltftpsessionstop) - Stop a TFTP sesssion
* [ProtocolTftpSessionWrite](#protocoltftpsessionwrite) - Create a read session to upload srcfile to server
* [ProtocolTftpSetConfig](#protocoltftpsetconfig) - Set the agent's TFTP configuration
* [ProtocolTftpSetTrace](#protocoltftpsettrace) - Set the agent's TFTP traffic tracing

## ProtocolTftpGetArgs

Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap

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
    res, err := s.Tftp.ProtocolTftpGetArgs(ctx, operations.ProtocolTftpGetArgsRequest{
        AgentNum: 903720,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolTftpGetConfig

Agent's TFTP configuration

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
    res, err := s.Tftp.ProtocolTftpGetConfig(ctx, operations.ProtocolTftpGetConfigRequest{
        AgentNum: 217450,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTFTP != nil {
        // handle response
    }
}
```

## ProtocolTftpGetStatistics

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
    res, err := s.Tftp.ProtocolTftpGetStatistics(ctx, operations.ProtocolTftpGetStatisticsRequest{
        AgentNum: 83422,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTftpGetStatsHdr

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
    res, err := s.Tftp.ProtocolTftpGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolTftpGetTrace

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
    res, err := s.Tftp.ProtocolTftpGetTrace(ctx, operations.ProtocolTftpGetTraceRequest{
        AgentNum: 749255,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigTFTP != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionGetParameter

Parameter is server , port , or dstfile

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
    res, err := s.Tftp.ProtocolTftpSessionGetParameter(ctx, operations.ProtocolTftpSessionGetParameterRequest{
        AgentNum: 552193,
        Parameter: "tempore",
        SessionID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionGetParameter200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionRead

Session ID is returned

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
    res, err := s.Tftp.ProtocolTftpSessionRead(ctx, operations.ProtocolTftpSessionReadRequest{
        AgentNum: 45614,
        Srcfile: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionRead200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionSetParameter

Parameter is server , port , or dstfile

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
    res, err := s.Tftp.ProtocolTftpSessionSetParameter(ctx, operations.ProtocolTftpSessionSetParameterRequest{
        AgentNum: 209157,
        Parameter: "dolore",
        SessionID: "labore",
        Value: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionSetParameter200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionStart

Start uploading or downloading the file

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
    res, err := s.Tftp.ProtocolTftpSessionStart(ctx, operations.ProtocolTftpSessionStartRequest{
        AgentNum: 677263,
        SessionID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionStart200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionStatus

Status includes running state, bytes transfered, and time elapsed

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
    res, err := s.Tftp.ProtocolTftpSessionStatus(ctx, operations.ProtocolTftpSessionStatusRequest{
        AgentNum: 63038,
        SessionID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionStatus200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionStop

Stop uploading or downloading the file

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
    res, err := s.Tftp.ProtocolTftpSessionStop(ctx, operations.ProtocolTftpSessionStopRequest{
        AgentNum: 555649,
        SessionID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionStop200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSessionWrite

Session ID is returned

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
    res, err := s.Tftp.ProtocolTftpSessionWrite(ctx, operations.ProtocolTftpSessionWriteRequest{
        AgentNum: 9240,
        Srcfile: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSessionWrite200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolTftpSetConfig

Agent's TFTP configuration

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
    res, err := s.Tftp.ProtocolTftpSetConfig(ctx, operations.ProtocolTftpSetConfigRequest{
        AgentNum: 833038,
        Argument: "porro",
        Value: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolTftpSetTrace

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
    res, err := s.Tftp.ProtocolTftpSetTrace(ctx, operations.ProtocolTftpSetTraceRequest{
        AgentNum: 281730,
        EnableOrNot: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolTftpSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
