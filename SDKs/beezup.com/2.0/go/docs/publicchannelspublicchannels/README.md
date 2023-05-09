# PublicChannelsPublicChannels

### Available Operations

* [GetChannels](#getchannels) - The channel list for one country
* [GetChannelsIndex](#getchannelsindex) - Get public channel index

## GetChannels

The channel list for one country

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicChannelsPublicChannels.GetChannels(ctx, operations.GetChannelsRequest{
        AcceptEncoding: []string{
            "nam",
            "vero",
        },
        IfNoneMatch: sdk.String("voluptatem"),
        CountryIsoCode: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicChannelInfoList != nil {
        // handle response
    }
}
```

## GetChannelsIndex

Use this operation to get the correct link to the channels and to the list of values

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicChannelsPublicChannels.GetChannelsIndex(ctx, operations.GetChannelsIndexRequest{
        IfNoneMatch: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicChannelIndex != nil {
        // handle response
    }
}
```
