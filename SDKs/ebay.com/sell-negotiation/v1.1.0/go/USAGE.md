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

    req := operations.FindEligibleItemsRequest{
        XEbayCMarketplaceID: "corrupti",
        Limit: "provident",
        Offset: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Offer.FindEligibleItems(ctx, req, operations.FindEligibleItemsSecurity{
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