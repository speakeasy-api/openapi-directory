# ChannelCatalogsLegacyTrackingGlobal

### Available Operations

* [GetLegacyTrackingChannelCatalog](#getlegacytrackingchannelcatalog) - Get the channel catalog configured to use legacy tracking format information
* [GetLegacyTrackingChannelCatalogs](#getlegacytrackingchannelcatalogs) - List all your current channel catalogs configured to use legacy tracking format
* [MigrateLegacyTrackingChannelCatalog](#migratelegacytrackingchannelcatalog) - Migrate a channel catalog to current tracking format

## GetLegacyTrackingChannelCatalog

Get the channel catalog configured to use legacy tracking format information

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
    res, err := s.ChannelCatalogsLegacyTrackingGlobal.GetLegacyTrackingChannelCatalog(ctx, operations.GetLegacyTrackingChannelCatalogRequest{
        ChannelCatalogID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegacyTrackingChannelCatalog != nil {
        // handle response
    }
}
```

## GetLegacyTrackingChannelCatalogs

List all your current channel catalogs configured to use legacy tracking format

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
    res, err := s.ChannelCatalogsLegacyTrackingGlobal.GetLegacyTrackingChannelCatalogs(ctx, operations.GetLegacyTrackingChannelCatalogsRequest{
        StoreID: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegacyTrackingChannelCatalogList != nil {
        // handle response
    }
}
```

## MigrateLegacyTrackingChannelCatalog

Migrate a channel catalog to current tracking format

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
    res, err := s.ChannelCatalogsLegacyTrackingGlobal.MigrateLegacyTrackingChannelCatalog(ctx, operations.MigrateLegacyTrackingChannelCatalogRequest{
        ChannelCatalogID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
