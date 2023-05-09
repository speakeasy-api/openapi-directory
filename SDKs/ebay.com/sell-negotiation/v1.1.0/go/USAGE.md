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
    res, err := s.Offer.FindEligibleItems(ctx, operations.FindEligibleItemsRequest{
        XEbayCMarketplaceID: "corrupti",
        Limit: sdk.String("provident"),
        Offset: sdk.String("distinctio"),
    }, operations.FindEligibleItemsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedEligibleItemCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->