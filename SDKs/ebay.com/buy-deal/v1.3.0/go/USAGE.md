<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetDealItemsRequest{
        Security: operations.GetDealItemsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetDealItemsQueryParams{
            CategoryIds: "unde",
            Commissionable: "deserunt",
            DeliveryCountry: "porro",
            Limit: "nulla",
            Offset: "id",
        },
        Headers: operations.GetDealItemsHeaders{
            XEbayCMarketplaceID: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.DealItem.GetDealItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DealItemSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->