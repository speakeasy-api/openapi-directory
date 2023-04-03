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
        XEbayCMarketplaceID: "corrupti",
        CategoryIds: "provident",
        Commissionable: "distinctio",
        DeliveryCountry: "quibusdam",
        Limit: "unde",
        Offset: "nulla",
    }

    ctx := context.Background()
    res, err := s.DealItem.GetDealItems(ctx, req, operations.GetDealItemsSecurity{
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