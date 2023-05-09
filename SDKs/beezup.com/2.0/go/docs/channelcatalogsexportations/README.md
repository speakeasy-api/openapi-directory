# ChannelCatalogsExportations

### Available Operations

* [ClearChannelCatalogExportationCache](#clearchannelcatalogexportationcache) - Clear the exportation cache
* [GetChannelCatalogExportationCacheInfo](#getchannelcatalogexportationcacheinfo) - Get the exportation cache information
* [GetChannelCatalogExportationHistory](#getchannelcatalogexportationhistory) - Get the exportation history

## ClearChannelCatalogExportationCache

Clear the exportation cache

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
    res, err := s.ChannelCatalogsExportations.ClearChannelCatalogExportationCache(ctx, operations.ClearChannelCatalogExportationCacheRequest{
        ChannelCatalogID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChannelCatalogExportationCacheInfo

Get the exportation cache information

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
    res, err := s.ChannelCatalogsExportations.GetChannelCatalogExportationCacheInfo(ctx, operations.GetChannelCatalogExportationCacheInfoRequest{
        ChannelCatalogID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogExportCacheInfoResponse != nil {
        // handle response
    }
}
```

## GetChannelCatalogExportationHistory

Get the exportation history

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
    res, err := s.ChannelCatalogsExportations.GetChannelCatalogExportationHistory(ctx, operations.GetChannelCatalogExportationHistoryRequest{
        ChannelCatalogID: "fugit",
        PageNumber: 882860,
        PageSize: 79522,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelCatalogExportationHistory != nil {
        // handle response
    }
}
```
