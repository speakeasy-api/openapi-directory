# History

### Available Operations

* [GetMessagesByChannel](#getmessagesbychannel) - Get message history for a channel
* [GetPresenceHistoryOfChannel](#getpresencehistoryofchannel) - Get presence history of a channel

## GetMessagesByChannel

Get message history for a channel

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.History.GetMessagesByChannel(ctx, operations.GetMessagesByChannelRequest{
        XAblyVersion: sdk.String("corrupti"),
        ChannelID: "illum",
        Direction: shared.FilterDirectionEnumForwards.ToPointer(),
        End: sdk.String("error"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
        Limit: sdk.Int64(384382),
        Start: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```

## GetPresenceHistoryOfChannel

Get presence on a channel

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.History.GetPresenceHistoryOfChannel(ctx, operations.GetPresenceHistoryOfChannelRequest{
        XAblyVersion: sdk.String("magnam"),
        ChannelID: "debitis",
        Direction: shared.FilterDirectionEnumForwards.ToPointer(),
        End: sdk.String("delectus"),
        Format: shared.ResponseFormatEnumJsonp.ToPointer(),
        Limit: sdk.Int64(383441),
        Start: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PresenceMessages != nil {
        // handle response
    }
}
```
