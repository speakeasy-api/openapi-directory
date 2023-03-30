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
            CategoryIds: "corrupti",
            Commissionable: "provident",
            DeliveryCountry: "distinctio",
            Limit: "quibusdam",
            Offset: "unde",
        },
        Headers: operations.GetDealItemsHeaders{
            XEbayCMarketplaceID: "nulla",
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