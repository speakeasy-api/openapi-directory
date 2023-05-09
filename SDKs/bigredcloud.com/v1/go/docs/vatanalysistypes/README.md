# VatAnalysisTypes

### Available Operations

* [VatAnalysisTypesGet](#vatanalysistypesget) - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## VatAnalysisTypesGet

Returns a list of global Vat Analysis Types. Supports OData querying protocol.
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
    res, err := s.VatAnalysisTypes.VatAnalysisTypesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultVatAnalysisTypeDto != nil {
        // handle response
    }
}
```
