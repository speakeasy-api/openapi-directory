# Tags

### Available Operations

* [CollectionTagsAll](#collectiontagsall) - List Tags

## CollectionTagsAll

List Tags

### Example Usage

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
    res, err := s.Tags.CollectionTagsAll(ctx, operations.CollectionTagsAllRequest{
        CollectionID: "apideck-io",
        Cursor: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Limit: sdk.Int64(976460),
        Raw: sdk.Bool(false),
        XApideckAppID: "vero",
        XApideckConsumerID: "nihil",
        XApideckServiceID: sdk.String("praesentium"),
    }, operations.CollectionTagsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionTagsResponse != nil {
        // handle response
    }
}
```
