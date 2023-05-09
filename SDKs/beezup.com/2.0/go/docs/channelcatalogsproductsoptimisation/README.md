# ChannelCatalogsProductsOptimisation

### Available Operations

* [DisableChannelCatalogProduct](#disablechannelcatalogproduct) - Disable channel catalog product
* [ReenableChannelCatalogProduct](#reenablechannelcatalogproduct) - Reenable channel catalog product

## DisableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can disable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


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
    res, err := s.ChannelCatalogsProductsOptimisation.DisableChannelCatalogProduct(ctx, operations.DisableChannelCatalogProductRequest{
        ChannelCatalogID: "atque",
        ProductID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReenableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can reenable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


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
    res, err := s.ChannelCatalogsProductsOptimisation.ReenableChannelCatalogProduct(ctx, operations.ReenableChannelCatalogProductRequest{
        ChannelCatalogID: "esse",
        ProductID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
