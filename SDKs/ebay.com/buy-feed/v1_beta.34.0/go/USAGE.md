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

    req := operations.GetItemFeedRequest{
        Security: operations.GetItemFeedSecurity{
            ClientCredentials: shared.SchemeClientCredentials{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetItemFeedQueryParams{
            CategoryID: "unde",
            Date: "deserunt",
            FeedScope: "porro",
        },
        Headers: operations.GetItemFeedHeaders{
            Accept: "nulla",
            Range: "id",
            XEbayCMarketplaceID: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.Item.GetItemFeed(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->