# CreditNotes

### Available Operations

* [CreditNotesAdd](#creditnotesadd) - Create Credit Note
* [CreditNotesAll](#creditnotesall) - List Credit Notes
* [CreditNotesDelete](#creditnotesdelete) - Delete Credit Note
* [CreditNotesOne](#creditnotesone) - Get Credit Note
* [CreditNotesUpdate](#creditnotesupdate) - Update Credit Note

## CreditNotesAdd

Create Credit Note

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
    res, err := s.CreditNotes.CreditNotesAdd(ctx, operations.CreditNotesAddRequest{
        CreditNoteInput: shared.CreditNoteInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Allocations: []shared.CreditNoteAllocationsInput{
                shared.CreditNoteAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.CreditNoteAllocationsAllocationTypeEnumInvoice.ToPointer(),
                },
                shared.CreditNoteAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.CreditNoteAllocationsAllocationTypeEnumCreditMemo.ToPointer(),
                },
                shared.CreditNoteAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.CreditNoteAllocationsAllocationTypeEnumExpense.ToPointer(),
                },
                shared.CreditNoteAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.CreditNoteAllocationsAllocationTypeEnumOverPayment.ToPointer(),
                },
            },
            Balance: sdk.Float64(27500),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            DateIssued: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
            DatePaid: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
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
            Note: sdk.String("Some notes about this credit note"),
            Number: sdk.String("OIT00546"),
            Reference: sdk.String("123456"),
            RemainingCredit: sdk.Float64(27500),
            RowVersion: sdk.String("1-12345"),
            Status: shared.CreditNoteCreditNoteStatusEnumAuthorised.ToPointer(),
            SubTotal: sdk.Float64(27500),
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            Terms: sdk.String("Some terms about this credit note"),
            TotalAmount: 49.99,
            TotalTax: sdk.Float64(2500),
            Type: shared.CreditNoteCreditNoteTypeEnumAccountsReceivableCredit.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "doloremque",
        XApideckConsumerID: "reprehenderit",
        XApideckServiceID: sdk.String("ut"),
    }, operations.CreditNotesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCreditNoteResponse != nil {
        // handle response
    }
}
```

## CreditNotesAll

List Credit Notes

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
    res, err := s.CreditNotes.CreditNotesAll(ctx, operations.CreditNotesAllRequest{
        Cursor: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Limit: sdk.Int64(359444),
        PassThrough: map[string]interface{}{
            "iusto": "dicta",
            "harum": "enim",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "accusamus",
        XApideckConsumerID: "commodi",
        XApideckServiceID: sdk.String("repudiandae"),
    }, operations.CreditNotesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCreditNotesResponse != nil {
        // handle response
    }
}
```

## CreditNotesDelete

Delete Credit Note

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
    res, err := s.CreditNotes.CreditNotesDelete(ctx, operations.CreditNotesDeleteRequest{
        ID: "13b99d48-8e1e-491e-850a-d2abd4426980",
        Raw: sdk.Bool(false),
        XApideckAppID: "magni",
        XApideckConsumerID: "assumenda",
        XApideckServiceID: sdk.String("ipsam"),
    }, operations.CreditNotesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCreditNoteResponse != nil {
        // handle response
    }
}
```

## CreditNotesOne

Get Credit Note

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
    res, err := s.CreditNotes.CreditNotesOne(ctx, operations.CreditNotesOneRequest{
        Fields: sdk.String("alias"),
        ID: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
        Raw: sdk.Bool(false),
        XApideckAppID: "aliquid",
        XApideckConsumerID: "laborum",
        XApideckServiceID: sdk.String("accusamus"),
    }, operations.CreditNotesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCreditNoteResponse != nil {
        // handle response
    }
}
```

## CreditNotesUpdate

Update Credit Note

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
    res, err := s.CreditNotes.CreditNotesUpdate(ctx, operations.CreditNotesUpdateRequest{
        CreditNoteInput: shared.CreditNoteInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Allocations: []shared.CreditNoteAllocationsInput{
                shared.CreditNoteAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.CreditNoteAllocationsAllocationTypeEnumCreditMemo.ToPointer(),
                },
            },
            Balance: sdk.Float64(27500),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            DateIssued: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
            DatePaid: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
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
            Note: sdk.String("Some notes about this credit note"),
            Number: sdk.String("OIT00546"),
            Reference: sdk.String("123456"),
            RemainingCredit: sdk.Float64(27500),
            RowVersion: sdk.String("1-12345"),
            Status: shared.CreditNoteCreditNoteStatusEnumAuthorised.ToPointer(),
            SubTotal: sdk.Float64(27500),
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            Terms: sdk.String("Some terms about this credit note"),
            TotalAmount: 49.99,
            TotalTax: sdk.Float64(2500),
            Type: shared.CreditNoteCreditNoteTypeEnumAccountsReceivableCredit.ToPointer(),
        },
        ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
        Raw: sdk.Bool(false),
        XApideckAppID: "et",
        XApideckConsumerID: "excepturi",
        XApideckServiceID: sdk.String("ullam"),
    }, operations.CreditNotesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCreditNoteResponse != nil {
        // handle response
    }
}
```
