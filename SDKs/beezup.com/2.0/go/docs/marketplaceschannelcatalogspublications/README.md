# MarketplacesChannelCatalogsPublications

### Available Operations

* [GetPublications](#getpublications) - Fetch the publication history for an account, sorted by descending start date
* [PublishCatalogToMarketplace](#publishcatalogtomarketplace) - [PREVIEW] Launch a publication of the catalog to the marketplace

## GetPublications

Fetch the publication history for an account, sorted by descending start date

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
    res, err := s.MarketplacesChannelCatalogsPublications.GetPublications(ctx, operations.GetPublicationsRequest{
        AccountID: 306986,
        ChannelCatalogID: sdk.String("sapiente"),
        Count: sdk.Int(119771),
        MarketplaceTechnicalCode: "ullam",
        PublicationTypes: []GetPublicationsPublicationTypesEnum{
            operations.GetPublicationsPublicationTypesEnumUnpublish,
            operations.GetPublicationsPublicationTypesEnumUnpublish,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountPublications != nil {
        // handle response
    }
}
```

## PublishCatalogToMarketplace

[PREVIEW] Launch a publication of the catalog to the marketplace

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesChannelCatalogsPublications.PublishCatalogToMarketplace(ctx, operations.PublishCatalogToMarketplaceRequest{
        AccountID: 16328,
        MarketplaceTechnicalCode: "voluptatum",
        PublishCatalogToMarketplaceRequest: shared.PublishCatalogToMarketplaceRequest{
            FeedType: shared.FeedTypeEnumOffers,
            PublicationStrategyKind: shared.PublicationStrategyKindEnumDelta,
            WithUnpublish: false,
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
