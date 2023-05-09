# InvoiceItems

## Overview

Invoice items are stored from invoice lines to be used later on when creating new invoices.

### Available Operations

* [InvoiceItemsAdd](#invoiceitemsadd) - Create Invoice Item
* [InvoiceItemsAll](#invoiceitemsall) - List Invoice Items
* [InvoiceItemsDelete](#invoiceitemsdelete) - Delete Invoice Item
* [InvoiceItemsOne](#invoiceitemsone) - Get Invoice Item
* [InvoiceItemsUpdate](#invoiceitemsupdate) - Update Invoice Item

## InvoiceItemsAdd

Create Invoice Item

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvoiceItems.InvoiceItemsAdd(ctx, operations.InvoiceItemsAddRequest{
        InvoiceItemInput: shared.InvoiceItemInput{
            Active: sdk.Bool(true),
            AssetAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Code: sdk.String("120-C"),
            Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
            ExpenseAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            IncomeAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            InventoryDate: types.MustDateFromString("2020-10-30"),
            Name: sdk.String("Model Y"),
            PurchaseDetails: &shared.InvoiceItemPurchaseDetailsInput{
                TaxInclusive: sdk.Bool(true),
                TaxRate: &shared.LinkedTaxRateInput{
                    ID: sdk.String("123456"),
                },
                UnitOfMeasure: sdk.String("pc."),
                UnitPrice: sdk.Float64(27500.5),
            },
            Purchased: sdk.Bool(true),
            Quantity: sdk.Float64(1),
            RowVersion: sdk.String("1-12345"),
            SalesDetails: &shared.InvoiceItemSalesDetailsInput{
                TaxInclusive: sdk.Bool(true),
                TaxRate: &shared.LinkedTaxRateInput{
                    ID: sdk.String("123456"),
                },
                UnitOfMeasure: sdk.String("pc."),
                UnitPrice: sdk.Float64(27500.5),
            },
            Sold: sdk.Bool(true),
            Taxable: sdk.Bool(true),
            Tracked: sdk.Bool(true),
            Type: shared.InvoiceItemTypeEnumInventory.ToPointer(),
            UnitPrice: sdk.Float64(27500.5),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "veritatis",
        XApideckConsumerID: "ipsa",
        XApideckServiceID: sdk.String("ipsa"),
    }, operations.InvoiceItemsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInvoiceItemResponse != nil {
        // handle response
    }
}
```

## InvoiceItemsAll

List Invoice Items

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
    res, err := s.InvoiceItems.InvoiceItemsAll(ctx, operations.InvoiceItemsAllRequest{
        Cursor: sdk.String("iure"),
        Fields: sdk.String("odio"),
        Filter: &shared.InvoiceItemsFilter{
            Name: sdk.String("Widgets Large"),
        },
        Limit: sdk.Int64(311796),
        PassThrough: map[string]interface{}{
            "quidem": "voluptatibus",
            "voluptas": "natus",
            "eos": "atque",
            "sit": "fugiat",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "ab",
        XApideckConsumerID: "soluta",
        XApideckServiceID: sdk.String("dolorum"),
    }, operations.InvoiceItemsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvoiceItemsResponse != nil {
        // handle response
    }
}
```

## InvoiceItemsDelete

Delete Invoice Item

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
    res, err := s.InvoiceItems.InvoiceItemsDelete(ctx, operations.InvoiceItemsDeleteRequest{
        ID: "77a89ebf-737a-4e42-83ce-5e6a95d8a0d4",
        Raw: sdk.Bool(false),
        XApideckAppID: "tempora",
        XApideckConsumerID: "vel",
        XApideckServiceID: sdk.String("quod"),
    }, operations.InvoiceItemsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTaxRateResponse != nil {
        // handle response
    }
}
```

## InvoiceItemsOne

Get Invoice Item

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
    res, err := s.InvoiceItems.InvoiceItemsOne(ctx, operations.InvoiceItemsOneRequest{
        Fields: sdk.String("officiis"),
        ID: "2af7a73c-f3be-4453-b870-b326b5a73429",
        Raw: sdk.Bool(false),
        XApideckAppID: "maxime",
        XApideckConsumerID: "pariatur",
        XApideckServiceID: sdk.String("soluta"),
    }, operations.InvoiceItemsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvoiceItemResponse != nil {
        // handle response
    }
}
```

## InvoiceItemsUpdate

Update Invoice Item

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvoiceItems.InvoiceItemsUpdate(ctx, operations.InvoiceItemsUpdateRequest{
        InvoiceItemInput: shared.InvoiceItemInput{
            Active: sdk.Bool(true),
            AssetAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Code: sdk.String("120-C"),
            Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
            ExpenseAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            IncomeAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            InventoryDate: types.MustDateFromString("2020-10-30"),
            Name: sdk.String("Model Y"),
            PurchaseDetails: &shared.InvoiceItemPurchaseDetailsInput{
                TaxInclusive: sdk.Bool(true),
                TaxRate: &shared.LinkedTaxRateInput{
                    ID: sdk.String("123456"),
                },
                UnitOfMeasure: sdk.String("pc."),
                UnitPrice: sdk.Float64(27500.5),
            },
            Purchased: sdk.Bool(true),
            Quantity: sdk.Float64(1),
            RowVersion: sdk.String("1-12345"),
            SalesDetails: &shared.InvoiceItemSalesDetailsInput{
                TaxInclusive: sdk.Bool(true),
                TaxRate: &shared.LinkedTaxRateInput{
                    ID: sdk.String("123456"),
                },
                UnitOfMeasure: sdk.String("pc."),
                UnitPrice: sdk.Float64(27500.5),
            },
            Sold: sdk.Bool(true),
            Taxable: sdk.Bool(true),
            Tracked: sdk.Bool(true),
            Type: shared.InvoiceItemTypeEnumInventory.ToPointer(),
            UnitPrice: sdk.Float64(27500.5),
        },
        ID: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
        Raw: sdk.Bool(false),
        XApideckAppID: "tempore",
        XApideckConsumerID: "cupiditate",
        XApideckServiceID: sdk.String("aperiam"),
    }, operations.InvoiceItemsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInvoiceItemsResponse != nil {
        // handle response
    }
}
```
