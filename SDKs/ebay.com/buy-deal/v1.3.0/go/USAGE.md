<!-- Start SDK Example Usage -->
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
    res, err := s.DealItem.GetDealItems(ctx, operations.GetDealItemsRequest{
        XEbayCMarketplaceID: "corrupti",
        CategoryIds: sdk.String("provident"),
        Commissionable: sdk.String("distinctio"),
        DeliveryCountry: sdk.String("quibusdam"),
        Limit: sdk.String("unde"),
        Offset: sdk.String("nulla"),
    }, operations.GetDealItemsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DealItemSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->