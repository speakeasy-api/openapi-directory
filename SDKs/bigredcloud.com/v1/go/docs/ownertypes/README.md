# OwnerTypes

### Available Operations

* [OwnerTypesGet](#ownertypesget) - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## OwnerTypesGet

Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OwnerTypes.OwnerTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultOwnerTypeDto != nil {
        // handle response
    }
}
```
