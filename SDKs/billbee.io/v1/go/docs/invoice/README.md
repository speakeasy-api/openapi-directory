# Invoice

### Available Operations

* [OrderAPICreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [OrderAPIGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

## OrderAPICreateInvoice

Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

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
    res, err := s.Invoice.OrderAPICreateInvoice(ctx, operations.OrderAPICreateInvoiceRequest{
        ID: 370853,
        IncludeInvoicePdf: sdk.Bool(false),
        SendToCloudID: sdk.Int64(133465),
        TemplateID: sdk.Int64(197054),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPIInvoice != nil {
        // handle response
    }
}
```

## OrderAPIGetInvoiceList

Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.OrderAPIGetInvoiceList(ctx, operations.OrderAPIGetInvoiceListRequest{
        ExcludeTags: sdk.Bool(false),
        IncludePositions: sdk.Bool(false),
        MaxInvoiceDate: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
        MaxPayDate: types.MustTimeFromString("2022-11-13T03:35:18.820Z"),
        MinInvoiceDate: types.MustTimeFromString("2021-05-27T03:34:33.852Z"),
        MinPayDate: types.MustTimeFromString("2022-12-03T21:51:40.661Z"),
        OrderStateID: []int{
            518835,
            882710,
        },
        Page: sdk.Int(306810),
        PageSize: sdk.Int(488410),
        ShopID: []int64{
            414567,
            959434,
            174112,
        },
        Tag: []string{
            "molestiae",
            "accusantium",
            "porro",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel != nil {
        // handle response
    }
}
```
