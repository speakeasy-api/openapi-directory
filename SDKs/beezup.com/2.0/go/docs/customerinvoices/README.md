# CustomerInvoices

### Available Operations

* [GetInvoices](#getinvoices) - Get all your invoices

## GetInvoices

Get all your invoices

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
    res, err := s.CustomerInvoices.GetInvoices(ctx, operations.GetInvoicesRequest{
        IfNoneMatch: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceList != nil {
        // handle response
    }
}
```
