# OMInvoiceAPIGeneration

### Available Operations

* [GenerateBatchOrderInvoice](#generatebatchorderinvoice) - Generate an Order Invoice batch
* [GenerateOrderInvoice](#generateorderinvoice) - Generate an Order Invoice
* [GetOrderInvoicePdf](#getorderinvoicepdf) - Returns the PDF version of the invoice
* [GetOrderInvoicePreview](#getorderinvoicepreview) - View a preview an Order Invoice

## GenerateBatchOrderInvoice

Generate an Order Invoice batch

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OMInvoiceAPIGeneration.GenerateBatchOrderInvoice(ctx, operations.GenerateBatchOrderInvoiceRequest{
        RequestBody: []shared.GenerateBatchOrderInvoiceRequestItem{
            shared.GenerateBatchOrderInvoiceRequestItem{
                AccountID: 50,
                BeezUPOrderUUID: "occaecati",
                InvoiceSequenceNumber: 879,
                MarketplaceTechnicalCode: "CDISCOUNT",
            },
        },
        UserName: "Lesley68",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateBatchOrderInvoiceResponse != nil {
        // handle response
    }
}
```

## GenerateOrderInvoice

Generate an Order Invoice

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OMInvoiceAPIGeneration.GenerateOrderInvoice(ctx, operations.GenerateOrderInvoiceRequest{
        AccountID: "accusamus",
        BeezUPOrderUUID: "voluptatibus",
        GenerateOrderInvoiceRequest: shared.GenerateOrderInvoiceRequest{
            InvoiceSequenceNumber: sdk.Int64(879),
        },
        MarketplaceTechnicalCode: "distinctio",
        UserName: "Leola50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrderInvoicePdf

Returns the PDF version of the invoice

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OMInvoiceAPIGeneration.GetOrderInvoicePdf(ctx, shared.GetOrderInvoicePdfFromHTMLInvoiceURLRequest{
        OrderInvoiceURI: "http://www.mydomain.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderInvoicePdf200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## GetOrderInvoicePreview

View a preview an Order Invoice

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OMInvoiceAPIGeneration.GetOrderInvoicePreview(ctx, operations.GetOrderInvoicePreviewRequest{
        AcceptEncoding: "maxime",
        AccountID: "magnam",
        BeezUPOrderUUID: "temporibus",
        MarketplaceTechnicalCode: "quos",
        PreviewOrderInvoiceRequest: shared.PreviewOrderInvoiceRequest{
            InvoiceSequenceNumber: sdk.Int64(879),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewOrderInvoiceResponse != nil {
        // handle response
    }
}
```
