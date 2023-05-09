# Invoices

### Available Operations

* [InvoicesAdd](#invoicesadd) - Create Invoice
* [InvoicesAll](#invoicesall) - List Invoices
* [InvoicesDelete](#invoicesdelete) - Delete Invoice
* [InvoicesOne](#invoicesone) - Get Invoice
* [InvoicesUpdate](#invoicesupdate) - Update Invoice

## InvoicesAdd

Create Invoice

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
    res, err := s.Invoices.InvoicesAdd(ctx, operations.InvoicesAddRequest{
        InvoiceInput: shared.InvoiceInput{
            Balance: sdk.Float64(27500),
            BillingAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            CustomerMemo: sdk.String("Thank you for your business and have a great day!"),
            Deposit: sdk.Float64(9619.37),
            DiscountAmount: sdk.Float64(25),
            DiscountPercentage: sdk.Float64(5.5),
            DueDate: types.MustDateFromString("2020-09-30"),
            InvoiceDate: types.MustDateFromString("2020-09-30"),
            InvoiceSent: sdk.Bool(true),
            LineItems: []shared.InvoiceLineItemInput{
                shared.InvoiceLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    DiscountAmount: sdk.Float64(19.99),
                    DiscountPercentage: sdk.Float64(0.01),
                    Item: &shared.LinkedInvoiceItemInput{
                        ID: sdk.String("12344"),
                    },
                    LedgerAccount: &shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    LineNumber: sdk.Int64(1),
                    LocationID: sdk.String("1234"),
                    Quantity: sdk.Float64(1),
                    RowID: sdk.String("12345"),
                    RowVersion: sdk.String("1-12345"),
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: sdk.Float64(27500),
                    Type: shared.InvoiceLineItemTypeEnumSalesItem.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            Number: sdk.String("OIT00546"),
            PoNumber: sdk.String("90000117"),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            ShippingAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            SourceDocumentURL: sdk.String("https://www.invoicesolution.com/invoice/123456"),
            Status: shared.InvoiceStatusEnumDraft.ToPointer(),
            SubTotal: sdk.Float64(27500),
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            TemplateID: sdk.String("123456"),
            Terms: sdk.String("Net 30 days"),
            Total: sdk.Float64(27500),
            TotalTax: sdk.Float64(2500),
            Type: shared.InvoiceInvoiceTypeEnumService.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "dolore",
        XApideckConsumerID: "labore",
        XApideckServiceID: sdk.String("adipisci"),
    }, operations.InvoicesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInvoiceResponse != nil {
        // handle response
    }
}
```

## InvoicesAll

List Invoices

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
    res, err := s.Invoices.InvoicesAll(ctx, operations.InvoicesAllRequest{
        Cursor: sdk.String("dolorum"),
        Fields: sdk.String("architecto"),
        Limit: sdk.Int64(63038),
        PassThrough: map[string]interface{}{
            "quas": "itaque",
        },
        Raw: sdk.Bool(false),
        Sort: &shared.InvoicesSort{
            By: shared.InvoicesSortByEnumUpdatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumAsc.ToPointer(),
        },
        XApideckAppID: "est",
        XApideckConsumerID: "repellendus",
        XApideckServiceID: sdk.String("porro"),
    }, operations.InvoicesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvoicesResponse != nil {
        // handle response
    }
}
```

## InvoicesDelete

Delete Invoice

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
    res, err := s.Invoices.InvoicesDelete(ctx, operations.InvoicesDeleteRequest{
        ID: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
        Raw: sdk.Bool(false),
        XApideckAppID: "illum",
        XApideckConsumerID: "sequi",
        XApideckServiceID: sdk.String("natus"),
    }, operations.InvoicesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInvoiceResponse != nil {
        // handle response
    }
}
```

## InvoicesOne

Get Invoice

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
    res, err := s.Invoices.InvoicesOne(ctx, operations.InvoicesOneRequest{
        Fields: sdk.String("impedit"),
        ID: "0f5d2cff-7c70-4a45-a26d-436813f16d9f",
        Raw: sdk.Bool(false),
        XApideckAppID: "nostrum",
        XApideckConsumerID: "sapiente",
        XApideckServiceID: sdk.String("quisquam"),
    }, operations.InvoicesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvoiceResponse != nil {
        // handle response
    }
}
```

## InvoicesUpdate

Update Invoice

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
    res, err := s.Invoices.InvoicesUpdate(ctx, operations.InvoicesUpdateRequest{
        InvoiceInput: shared.InvoiceInput{
            Balance: sdk.Float64(27500),
            BillingAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            CustomerMemo: sdk.String("Thank you for your business and have a great day!"),
            Deposit: sdk.Float64(9065.56),
            DiscountAmount: sdk.Float64(25),
            DiscountPercentage: sdk.Float64(5.5),
            DueDate: types.MustDateFromString("2020-09-30"),
            InvoiceDate: types.MustDateFromString("2020-09-30"),
            InvoiceSent: sdk.Bool(true),
            LineItems: []shared.InvoiceLineItemInput{
                shared.InvoiceLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    DiscountAmount: sdk.Float64(19.99),
                    DiscountPercentage: sdk.Float64(0.01),
                    Item: &shared.LinkedInvoiceItemInput{
                        ID: sdk.String("12344"),
                    },
                    LedgerAccount: &shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    LineNumber: sdk.Int64(1),
                    LocationID: sdk.String("1234"),
                    Quantity: sdk.Float64(1),
                    RowID: sdk.String("12345"),
                    RowVersion: sdk.String("1-12345"),
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: sdk.Float64(27500),
                    Type: shared.InvoiceLineItemTypeEnumSalesItem.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.InvoiceLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    DiscountAmount: sdk.Float64(19.99),
                    DiscountPercentage: sdk.Float64(0.01),
                    Item: &shared.LinkedInvoiceItemInput{
                        ID: sdk.String("12344"),
                    },
                    LedgerAccount: &shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    LineNumber: sdk.Int64(1),
                    LocationID: sdk.String("1234"),
                    Quantity: sdk.Float64(1),
                    RowID: sdk.String("12345"),
                    RowVersion: sdk.String("1-12345"),
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: sdk.Float64(27500),
                    Type: shared.InvoiceLineItemTypeEnumSalesItem.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            Number: sdk.String("OIT00546"),
            PoNumber: sdk.String("90000117"),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            ShippingAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            SourceDocumentURL: sdk.String("https://www.invoicesolution.com/invoice/123456"),
            Status: shared.InvoiceStatusEnumDraft.ToPointer(),
            SubTotal: sdk.Float64(27500),
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            TemplateID: sdk.String("123456"),
            Terms: sdk.String("Net 30 days"),
            Total: sdk.Float64(27500),
            TotalTax: sdk.Float64(2500),
            Type: shared.InvoiceInvoiceTypeEnumService.ToPointer(),
        },
        ID: "c556146c-3e25-40fb-808c-42e141aac366",
        Raw: sdk.Bool(false),
        XApideckAppID: "nobis",
        XApideckConsumerID: "quas",
        XApideckServiceID: sdk.String("assumenda"),
    }, operations.InvoicesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInvoiceResponse != nil {
        // handle response
    }
}
```
