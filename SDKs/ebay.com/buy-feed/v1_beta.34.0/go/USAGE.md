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
        Accept: "corrupti",
        Range: "provident",
        XEbayCMarketplaceID: "distinctio",
        CategoryID: "quibusdam",
        Date: "unde",
        FeedScope: "nulla",
    }

    ctx := context.Background()
    res, err := s.Item.GetItemFeed(ctx, req, operations.GetItemFeedSecurity{
        ClientCredentials: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->