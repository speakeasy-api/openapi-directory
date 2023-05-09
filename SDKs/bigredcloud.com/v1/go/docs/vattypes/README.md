# VatTypes

### Available Operations

* [VatTypesGet](#vattypesget) - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## VatTypesGet

Returns a list of global Vat Types. Supports OData querying protocol.
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
    res, err := s.VatTypes.VatTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultVatTypeDto != nil {
        // handle response
    }
}
```
