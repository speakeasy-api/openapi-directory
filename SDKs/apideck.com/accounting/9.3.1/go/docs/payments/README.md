# Payments

### Available Operations

* [PaymentsAdd](#paymentsadd) - Create Payment
* [PaymentsAll](#paymentsall) - List Payments
* [PaymentsDelete](#paymentsdelete) - Delete Payment
* [PaymentsOne](#paymentsone) - Get Payment
* [PaymentsUpdate](#paymentsupdate) - Update Payment

## PaymentsAdd

Create Payment

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
    res, err := s.Payments.PaymentsAdd(ctx, operations.PaymentsAddRequest{
        PaymentInput: shared.PaymentInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            AccountsReceivableAccountID: sdk.String("123456"),
            AccountsReceivableAccountType: sdk.String("Account"),
            Allocations: []shared.PaymentAllocationsInput{
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumOrder.ToPointer(),
                },
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumPrePayment.ToPointer(),
                },
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumExpense.ToPointer(),
                },
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumPrePayment.ToPointer(),
                },
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            DisplayID: sdk.String("123456"),
            Note: sdk.String("Some notes about this payment"),
            PaymentMethod: sdk.String("Credit Card"),
            PaymentMethodID: sdk.String("123456"),
            PaymentMethodReference: sdk.String("123456"),
            Reconciled: sdk.Bool(true),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.PaymentPaymentStatusEnumAuthorised.ToPointer(),
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
            TotalAmount: 49.99,
            TransactionDate: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
            Type: shared.PaymentPaymentTypeEnumAccountsReceivable.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quidem",
        XApideckConsumerID: "saepe",
        XApideckServiceID: sdk.String("necessitatibus"),
    }, operations.PaymentsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePaymentResponse != nil {
        // handle response
    }
}
```

## PaymentsAll

List Payments

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
    res, err := s.Payments.PaymentsAll(ctx, operations.PaymentsAllRequest{
        Cursor: sdk.String("dolore"),
        Fields: sdk.String("sunt"),
        Limit: sdk.Int64(992012),
        PassThrough: map[string]interface{}{
            "non": "amet",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "beatae",
        XApideckConsumerID: "dignissimos",
        XApideckServiceID: sdk.String("a"),
    }, operations.PaymentsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentsResponse != nil {
        // handle response
    }
}
```

## PaymentsDelete

Delete Payment

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
    res, err := s.Payments.PaymentsDelete(ctx, operations.PaymentsDeleteRequest{
        ID: "e35b60eb-1ea4-4265-95ba-3c28744ed53b",
        Raw: sdk.Bool(false),
        XApideckAppID: "blanditiis",
        XApideckConsumerID: "quas",
        XApideckServiceID: sdk.String("hic"),
    }, operations.PaymentsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePaymentResponse != nil {
        // handle response
    }
}
```

## PaymentsOne

Get Payment

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
    res, err := s.Payments.PaymentsOne(ctx, operations.PaymentsOneRequest{
        Fields: sdk.String("nesciunt"),
        ID: "a8d8f5c0-b2f2-4fb7-b194-a276b26916fe",
        Raw: sdk.Bool(false),
        XApideckAppID: "illo",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("perferendis"),
    }, operations.PaymentsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentResponse != nil {
        // handle response
    }
}
```

## PaymentsUpdate

Update Payment

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
    res, err := s.Payments.PaymentsUpdate(ctx, operations.PaymentsUpdateRequest{
        PaymentInput: shared.PaymentInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            AccountsReceivableAccountID: sdk.String("123456"),
            AccountsReceivableAccountType: sdk.String("Account"),
            Allocations: []shared.PaymentAllocationsInput{
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumPrePayment.ToPointer(),
                },
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumOrder.ToPointer(),
                },
                shared.PaymentAllocationsInput{
                    Amount: sdk.Float64(49.99),
                    ID: sdk.String("123456"),
                    Type: shared.PaymentAllocationsAllocationTypeEnumInvoice.ToPointer(),
                },
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            Customer: &shared.LinkedCustomerInput{
                DisplayName: sdk.String("Windsurf Shop"),
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            DisplayID: sdk.String("123456"),
            Note: sdk.String("Some notes about this payment"),
            PaymentMethod: sdk.String("Credit Card"),
            PaymentMethodID: sdk.String("123456"),
            PaymentMethodReference: sdk.String("123456"),
            Reconciled: sdk.Bool(true),
            Reference: sdk.String("123456"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.PaymentPaymentStatusEnumAuthorised.ToPointer(),
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
            TotalAmount: 49.99,
            TransactionDate: types.MustTimeFromString("2021-05-01T12:00:00.000Z"),
            Type: shared.PaymentPaymentTypeEnumAccountsReceivable.ToPointer(),
        },
        ID: "94e3698f-447f-4603-a8b4-45e80ca55efd",
        Raw: sdk.Bool(false),
        XApideckAppID: "magni",
        XApideckConsumerID: "aperiam",
        XApideckServiceID: sdk.String("saepe"),
    }, operations.PaymentsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePaymentResponse != nil {
        // handle response
    }
}
```
