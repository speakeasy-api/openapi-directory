# ProductTypes

### Available Operations

* [ProductTypesGet](#producttypesget) - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## ProductTypesGet

Returns a list of global Product Types. Supports OData querying protocol.
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
    res, err := s.ProductTypes.ProductTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultOwnerTypeDto != nil {
        // handle response
    }
}
```
