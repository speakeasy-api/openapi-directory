# SDK

## Overview

D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.

### Available Operations

* [BalanceGet](#balanceget) - Balance
* [SendPost](#sendpost) - SendSMS
* [SendbatchPost](#sendbatchpost) - Bulk SMS

## BalanceGet

Check account balance

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
    res, err := s.SDK.BalanceGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SendPost

Send SMS  to recipients using D7 SMS Gateway

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
    res, err := s.SDK.SendPost(ctx, operations.SendPostRequest{
        Accept: "corrupti",
        ContentType: "provident",
        SendSMSRequest: shared.SendSMSRequest{
            Content: "distinctio",
            From: "quibusdam",
            To: 602763,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SendbatchPost

Send Bulk SMS  to multiple recipients using D7 SMS Gateway

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
    res, err := s.SDK.SendbatchPost(ctx, operations.SendbatchPostRequest{
        Accept: "nulla",
        BulkSMSRequest: shared.BulkSMSRequest{
            Messages: []shared.Message{
                shared.Message{
                    Content: "illum",
                    From: "vel",
                    To: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                },
                shared.Message{
                    Content: "magnam",
                    From: "debitis",
                    To: []string{
                        "delectus",
                    },
                },
                shared.Message{
                    Content: "tempora",
                    From: "suscipit",
                    To: []string{
                        "minus",
                        "placeat",
                    },
                },
            },
        },
        ContentType: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
