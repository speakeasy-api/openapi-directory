# CustomerShares

### Available Operations

* [DeleteStoreShare](#deletestoreshare) - Delete a share of a store to another user
* [GetStoreShares](#getstoreshares) - Get shares related to this store
* [ShareStore](#sharestore) - Share a store to another user

## DeleteStoreShare

Delete a share of a store to another user

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
    res, err := s.CustomerShares.DeleteStoreShare(ctx, operations.DeleteStoreShareRequest{
        StoreID: "similique",
        UserID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStoreShares

Get shares related to this store

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
    res, err := s.CustomerShares.GetStoreShares(ctx, operations.GetStoreSharesRequest{
        IfNoneMatch: sdk.String("aliquid"),
        StoreID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreShares != nil {
        // handle response
    }
}
```

## ShareStore

Share a store to another user

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
    res, err := s.CustomerShares.ShareStore(ctx, operations.ShareStoreRequest{
        RequestBody: "humphray.bogart@yahoo.ma",
        StoreID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
