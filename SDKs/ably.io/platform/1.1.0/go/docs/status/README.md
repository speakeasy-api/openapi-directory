# Status

### Available Operations

* [GetMetadataOfAllChannels](#getmetadataofallchannels) - Enumerate all active channels of the application
* [GetMetadataOfChannel](#getmetadataofchannel) - Get metadata of a channel
* [GetPresenceOfChannel](#getpresenceofchannel) - Get presence of a channel

## GetMetadataOfAllChannels

Enumerate all active channels of the application

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
    res, err := s.Status.GetMetadataOfAllChannels(ctx, operations.GetMetadataOfAllChannelsRequest{
        XAblyVersion: sdk.String("qui"),
        By: operations.GetMetadataOfAllChannelsByEnumID.ToPointer(),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
        Limit: sdk.Int64(456130),
        Prefix: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMetadataOfAllChannels2XXApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetMetadataOfChannel

Get metadata of a channel

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
    res, err := s.Status.GetMetadataOfChannel(ctx, operations.GetMetadataOfChannelRequest{
        XAblyVersion: sdk.String("iusto"),
        ChannelID: "ipsum",
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelDetails != nil {
        // handle response
    }
}
```

## GetPresenceOfChannel

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
    res, err := s.Status.GetPresenceOfChannel(ctx, operations.GetPresenceOfChannelRequest{
        XAblyVersion: sdk.String("tenetur"),
        ChannelID: "amet",
        ClientID: sdk.String("tempore"),
        ConnectionID: sdk.String("accusamus"),
        Format: shared.ResponseFormatEnumJsonp.ToPointer(),
        Limit: sdk.Int64(313692),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PresenceMessages != nil {
        // handle response
    }
}
```
