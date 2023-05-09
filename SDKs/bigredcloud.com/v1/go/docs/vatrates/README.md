# VatRates

### Available Operations

* [VatRatesGet](#vatratesget) - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## VatRatesGet

Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

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
    res, err := s.VatRates.VatRatesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultVatRateDto != nil {
        // handle response
    }
}
```
