# BookTranTypes

### Available Operations

* [BookTranTypesGet](#booktrantypesget) - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## BookTranTypesGet

Returns a list of global Book Transactions' Types. Supports OData querying protocol.
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
    res, err := s.BookTranTypes.BookTranTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultBookTranTypeDto != nil {
        // handle response
    }
}
```
