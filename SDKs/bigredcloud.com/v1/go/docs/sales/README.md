# Sales

### Available Operations

* [SalesGet](#salesget) - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

## SalesGet

Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
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
    res, err := s.Sales.SalesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSalesQueryDto != nil {
        // handle response
    }
}
```
