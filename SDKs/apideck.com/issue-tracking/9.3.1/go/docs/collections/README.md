# Collections

### Available Operations

* [CollectionsAll](#collectionsall) - List Collections
* [CollectionsOne](#collectionsone) - Get Collection

## CollectionsAll

List Collections

### Example Usage

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
        Cursor: sdk.String("illum"),
        Fields: sdk.String("vel"),
        Limit: sdk.Int64(623564),
        Raw: sdk.Bool(false),
        Sort: &shared.CollectionsSort{
            By: shared.CollectionsSortByEnumName.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "suscipit",
        XApideckConsumerID: "iure",
        XApideckServiceID: sdk.String("magnam"),
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

## CollectionsOne

Get Collection

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
    res, err := s.Collections.CollectionsOne(ctx, operations.CollectionsOneRequest{
        CollectionID: "apideck-io",
        Fields: sdk.String("debitis"),
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsa",
        XApideckConsumerID: "delectus",
        XApideckServiceID: sdk.String("tempora"),
    }, operations.CollectionsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionResponse != nil {
        // handle response
    }
}
```
