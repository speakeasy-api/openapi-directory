<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsAll(ctx, operations.CollectionsAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("provident"),
        Limit: sdk.Int64(715190),
        Raw: sdk.Bool(false),
        Sort: &shared.CollectionsSort{
            By: shared.CollectionsSortByEnumName.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "unde",
        XApideckConsumerID: "nulla",
        XApideckServiceID: sdk.String("corrupti"),
    }, operations.CollectionsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->