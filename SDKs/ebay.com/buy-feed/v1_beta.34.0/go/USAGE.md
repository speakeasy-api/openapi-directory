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
    res, err := s.Item.GetItemFeed(ctx, operations.GetItemFeedRequest{
        Accept: "corrupti",
        Range: "provident",
        XEbayCMarketplaceID: "distinctio",
        CategoryID: "quibusdam",
        Date: sdk.String("unde"),
        FeedScope: "nulla",
    }, operations.GetItemFeedSecurity{
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