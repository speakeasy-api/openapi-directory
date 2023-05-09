# Bills

### Available Operations

* [BillsAdd](#billsadd) - Create Bill
* [BillsAll](#billsall) - List Bills
* [BillsDelete](#billsdelete) - Delete Bill
* [BillsOne](#billsone) - Get Bill
* [BillsUpdate](#billsupdate) - Update Bill

## BillsAdd

Create Bill

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
    res, err := s.Bills.BillsAdd(ctx, operations.BillsAddRequest{
        BillInput: shared.BillInput{
            Balance: sdk.Float64(27500),
            BillDate: types.MustDateFromString("2020-09-30"),
            BillNumber: sdk.String("10001"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Deposit: sdk.Float64(7917.25),
            DueDate: types.MustDateFromString("2020-10-30"),
            LedgerAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            LineItems: []shared.BillLineItemInput{
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            Notes: sdk.String("Some notes about this bill."),
            PaidDate: types.MustDateFromString("2020-10-30"),
            PoNumber: sdk.String("90000117"),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.BillStatusEnumDraft.ToPointer(),
            SubTotal: sdk.Float64(27500),
            Supplier: &shared.LinkedSupplierInput{
                Address: &shared.Address{
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
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
            },
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            Terms: sdk.String("Net 30 days"),
            Total: sdk.Float64(27500),
            TotalTax: sdk.Float64(2500),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "voluptatum",
        XApideckConsumerID: "iusto",
        XApideckServiceID: sdk.String("excepturi"),
    }, operations.BillsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBillResponse != nil {
        // handle response
    }
}
```

## BillsAll

List Bills

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
    res, err := s.Bills.BillsAll(ctx, operations.BillsAllRequest{
        Cursor: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Limit: sdk.Int64(836079),
        PassThrough: map[string]interface{}{
            "quis": "veritatis",
        },
        Raw: sdk.Bool(false),
        Sort: &shared.BillsSort{
            By: shared.BillsSortByEnumUpdatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "perferendis",
        XApideckConsumerID: "ipsam",
        XApideckServiceID: sdk.String("repellendus"),
    }, operations.BillsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBillsResponse != nil {
        // handle response
    }
}
```

## BillsDelete

Delete Bill

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
    res, err := s.Bills.BillsDelete(ctx, operations.BillsDeleteRequest{
        ID: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
        Raw: sdk.Bool(false),
        XApideckAppID: "excepturi",
        XApideckConsumerID: "aspernatur",
        XApideckServiceID: sdk.String("perferendis"),
    }, operations.BillsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBillResponse != nil {
        // handle response
    }
}
```

## BillsOne

Get Bill

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
    res, err := s.Bills.BillsOne(ctx, operations.BillsOneRequest{
        Fields: sdk.String("ad"),
        ID: "929396fe-a759-46eb-90fa-aa2352c59559",
        Raw: sdk.Bool(false),
        XApideckAppID: "accusantium",
        XApideckConsumerID: "iure",
        XApideckServiceID: sdk.String("culpa"),
    }, operations.BillsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBillResponse != nil {
        // handle response
    }
}
```

## BillsUpdate

Update Bill

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
    res, err := s.Bills.BillsUpdate(ctx, operations.BillsUpdateRequest{
        BillInput: shared.BillInput{
            Balance: sdk.Float64(27500),
            BillDate: types.MustDateFromString("2020-09-30"),
            BillNumber: sdk.String("10001"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Deposit: sdk.Float64(9883.74),
            DueDate: types.MustDateFromString("2020-10-30"),
            LedgerAccount: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            LineItems: []shared.BillLineItemInput{
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
                shared.BillLineItemInput{
                    Code: sdk.String("120-C"),
                    DepartmentID: sdk.String("1234"),
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
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
                    Type: shared.BillLineItemTypeEnumExpenseAccount.ToPointer(),
                    UnitOfMeasure: sdk.String("pc."),
                    UnitPrice: sdk.Float64(27500.5),
                },
            },
            Notes: sdk.String("Some notes about this bill."),
            PaidDate: types.MustDateFromString("2020-10-30"),
            PoNumber: sdk.String("90000117"),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.BillStatusEnumDraft.ToPointer(),
            SubTotal: sdk.Float64(27500),
            Supplier: &shared.LinkedSupplierInput{
                Address: &shared.Address{
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
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
            },
            TaxCode: sdk.String("1234"),
            TaxInclusive: sdk.Bool(true),
            Terms: sdk.String("Net 30 days"),
            Total: sdk.Float64(27500),
            TotalTax: sdk.Float64(2500),
        },
        ID: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
        Raw: sdk.Bool(false),
        XApideckAppID: "laborum",
        XApideckConsumerID: "quasi",
        XApideckServiceID: sdk.String("reiciendis"),
    }, operations.BillsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBillResponse != nil {
        // handle response
    }
}
```
