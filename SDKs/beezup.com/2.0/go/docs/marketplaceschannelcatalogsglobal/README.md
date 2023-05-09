# MarketplacesChannelCatalogsGlobal

### Available Operations

* [GetMarketplaceChannelCatalogs](#getmarketplacechannelcatalogs) - Get your marketplace channel catalog list

## GetMarketplaceChannelCatalogs

Get your marketplace channel catalog list

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
    res, err := s.MarketplacesChannelCatalogsGlobal.GetMarketplaceChannelCatalogs(ctx, operations.GetMarketplaceChannelCatalogsRequest{
        StoreID: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplaceChannelCatalogList != nil {
        // handle response
    }
}
```
