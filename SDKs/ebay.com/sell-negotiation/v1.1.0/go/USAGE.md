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
        Security: operations.FindEligibleItemsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.FindEligibleItemsQueryParams{
            Limit: "unde",
            Offset: "deserunt",
        },
        Headers: operations.FindEligibleItemsHeaders{
            XEbayCMarketplaceID: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Offer.FindEligibleItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedEligibleItemCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->