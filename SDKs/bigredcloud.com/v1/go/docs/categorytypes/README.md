# CategoryTypes

### Available Operations

* [CategoryTypesGet](#categorytypesget) - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## CategoryTypesGet

Returns a list of company's Category Types. Supports OData querying protocol.
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
    res, err := s.CategoryTypes.CategoryTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultCategoryTypeDto != nil {
        // handle response
    }
}
```
