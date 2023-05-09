# Collection

### Available Operations

* [CollectionListingsAll](#collectionlistingsall) - List collection listings
* [CollectionsAll](#collectionsall) - List collections
* [CollectionsOne](#collectionsone) - Get collection

## CollectionListingsAll

List collection listings

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
    res, err := s.Collection.CollectionListingsAll(ctx, operations.CollectionListingsAllRequest{
        Cursor: sdk.String("iste"),
        EcosystemID: "dolor",
        ID: "96fea759-6eb1-40fa-aa23-52c5955907af",
        Limit: sdk.Int64(958950),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListingsResponse != nil {
        // handle response
    }
}
```

## CollectionsAll

List collections

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
    res, err := s.Collection.CollectionsAll(ctx, operations.CollectionsAllRequest{
        Cursor: sdk.String("architecto"),
        EcosystemID: "mollitia",
        Limit: sdk.Int64(208876),
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

Get collection

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
    res, err := s.Collection.CollectionsOne(ctx, operations.CollectionsOneRequest{
        EcosystemID: "culpa",
        ID: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionResponse != nil {
        // handle response
    }
}
```
