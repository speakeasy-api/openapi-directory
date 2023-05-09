# ChannelsChannelsGlobal

### Available Operations

* [GetAvailableChannels](#getavailablechannels) - List all available channel for this store
* [GetChannelCategories](#getchannelcategories) - Get channel categories
* [GetChannelColumns](#getchannelcolumns) - Get channel columns
* [GetChannelInfo](#getchannelinfo) - Get channel information

## GetAvailableChannels

List all available channel for this store

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
    res, err := s.ChannelsChannelsGlobal.GetAvailableChannels(ctx, operations.GetAvailableChannelsRequest{
        StoreID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelHeaders != nil {
        // handle response
    }
}
```

## GetChannelCategories

Get channel categories

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
    res, err := s.ChannelsChannelsGlobal.GetChannelCategories(ctx, operations.GetChannelCategoriesRequest{
        AcceptEncoding: []string{
            "culpa",
        },
        ChannelID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelRootCategory != nil {
        // handle response
    }
}
```

## GetChannelColumns

Get channel columns

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
    res, err := s.ChannelsChannelsGlobal.GetChannelColumns(ctx, operations.GetChannelColumnsRequest{
        AcceptEncoding: []string{
            "cumque",
        },
        RequestBody: []string{
            "8a76f06a-fefc-4c0d-bcfe-b210f1482977",
        },
        ChannelID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelColumns != nil {
        // handle response
    }
}
```

## GetChannelInfo

Get channel information

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
    res, err := s.ChannelsChannelsGlobal.GetChannelInfo(ctx, operations.GetChannelInfoRequest{
        ChannelID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelInfo != nil {
        // handle response
    }
}
```
