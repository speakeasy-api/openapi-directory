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
        PosPaymentInput: shared.PosPaymentInput{
            Amount: 27.5,
            AppFee: sdk.Float64(3),
            Approved: sdk.Float64(37.5),
            BankAccount: &shared.PosBankAccount{
                AccountOwnershipType: sdk.String("provident"),
                AchDetails: &shared.PosBankAccountAchDetails{
                    AccountNumberSuffix: sdk.String("repellendus"),
                    AccountType: sdk.String("delectus"),
                    RoutingNumber: sdk.String("voluptates"),
                },
                BankName: sdk.String("perferendis"),
                Country: sdk.String("US"),
                Fingerprint: sdk.String("est"),
                StatementDescription: sdk.String("quidem"),
                TransferType: sdk.String("reprehenderit"),
            },
            CardDetails: &shared.PosPaymentCardDetailsInput{
                Card: &shared.PaymentCardInput{
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
                    Bin: sdk.String("41111"),
                    CardBrand: shared.PaymentCardCardBrandEnumFelica.ToPointer(),
                    CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                    CardholderName: sdk.String("John Doe"),
                    CustomerID: sdk.String("12345"),
                    Enabled: sdk.Bool(true),
                    ExpMonth: sdk.Int64(1),
                    ExpYear: sdk.Int64(2022),
                    Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                    Last4: sdk.String("The last 4 digits of the card number."),
                    MerchantID: sdk.String("12345"),
                    PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                    ReferenceID: sdk.String("card-001"),
                    Version: sdk.String("230320320320"),
                },
            },
            Cash: &shared.PosPaymentCashDetails{
                Amount: sdk.String("fuga"),
                ChargeBackAmount: sdk.String("praesentium"),
            },
            ChangeBackCashAmount: sdk.Float64(20),
            Currency: shared.CurrencyEnumUsd,
            CustomerID: "12345",
            DeviceID: sdk.String("12345"),
            EmployeeID: sdk.String("12345"),
            ExternalDetails: &shared.PosPaymentExternalDetails{
                Source: "mollitia",
                SourceFeeAmount: sdk.Float64(2.5),
                SourceID: sdk.String("veniam"),
                Type: shared.PosPaymentExternalDetailsTypeEnumCheck,
            },
            ExternalPaymentID: sdk.String("12345"),
            IdempotencyKey: sdk.String("random_string"),
            LocationID: sdk.String("12345"),
            MerchantID: sdk.String("12345"),
            OrderID: "12345",
            ProcessingFees: []shared.PosPaymentProcessingFees{
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumAdjustment.ToPointer(),
                },
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumInitial.ToPointer(),
                },
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumAdjustment.ToPointer(),
                },
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumInitial.ToPointer(),
                },
            },
            Refunded: sdk.Float64(37.5),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumAutoGratuity.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
            },
            Source: shared.PosPaymentSourceEnumExternal.ToPointer(),
            SourceID: "12345",
            Status: shared.PosPaymentStatusEnumApproved.ToPointer(),
            Tax: sdk.Float64(20),
            TenderID: "12345",
            Tip: sdk.Float64(7),
            Total: sdk.Float64(37.5),
            Wallet: &shared.PosPaymentWalletDetails{
                Status: shared.PosPaymentWalletDetailsStatusEnumAuthorized.ToPointer(),
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "esse",
        XApideckConsumerID: "amet",
        XApideckServiceID: sdk.String("assumenda"),
    }, operations.PaymentsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePosPaymentResponse != nil {
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
        Cursor: sdk.String("ea"),
        Fields: sdk.String("atque"),
        Limit: sdk.Int64(623295),
        Raw: sdk.Bool(false),
        XApideckAppID: "officiis",
        XApideckConsumerID: "officiis",
        XApideckServiceID: sdk.String("accusamus"),
    }, operations.PaymentsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPosPaymentsResponse != nil {
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
        ID: "9526f8d9-86e8-481e-ad4f-0e1012563f94",
        Raw: sdk.Bool(false),
        XApideckAppID: "saepe",
        XApideckConsumerID: "consequuntur",
        XApideckServiceID: sdk.String("occaecati"),
    }, operations.PaymentsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePosPaymentResponse != nil {
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
        Fields: sdk.String("officiis"),
        ID: "973e922a-57a1-45be-be06-0807e2b6e3ab",
        Raw: sdk.Bool(false),
        XApideckAppID: "voluptatum",
        XApideckConsumerID: "rem",
        XApideckServiceID: sdk.String("aliquam"),
    }, operations.PaymentsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPosPaymentResponse != nil {
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
        PosPaymentInput: shared.PosPaymentInput{
            Amount: 27.5,
            AppFee: sdk.Float64(3),
            Approved: sdk.Float64(37.5),
            BankAccount: &shared.PosBankAccount{
                AccountOwnershipType: sdk.String("ad"),
                AchDetails: &shared.PosBankAccountAchDetails{
                    AccountNumberSuffix: sdk.String("repellat"),
                    AccountType: sdk.String("alias"),
                    RoutingNumber: sdk.String("corporis"),
                },
                BankName: sdk.String("perspiciatis"),
                Country: sdk.String("US"),
                Fingerprint: sdk.String("nihil"),
                StatementDescription: sdk.String("mollitia"),
                TransferType: sdk.String("voluptas"),
            },
            CardDetails: &shared.PosPaymentCardDetailsInput{
                Card: &shared.PaymentCardInput{
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
                    Bin: sdk.String("41111"),
                    CardBrand: shared.PaymentCardCardBrandEnumVisa.ToPointer(),
                    CardType: shared.PaymentCardCardTypeEnumCredit.ToPointer(),
                    CardholderName: sdk.String("John Doe"),
                    CustomerID: sdk.String("12345"),
                    Enabled: sdk.Bool(true),
                    ExpMonth: sdk.Int64(1),
                    ExpYear: sdk.Int64(2022),
                    Fingerprint: sdk.String(" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application."),
                    Last4: sdk.String("The last 4 digits of the card number."),
                    MerchantID: sdk.String("12345"),
                    PrepaidType: shared.PaymentCardPrepaidTypeEnumPrepaid.ToPointer(),
                    ReferenceID: sdk.String("card-001"),
                    Version: sdk.String("230320320320"),
                },
            },
            Cash: &shared.PosPaymentCashDetails{
                Amount: sdk.String("maiores"),
                ChargeBackAmount: sdk.String("reiciendis"),
            },
            ChangeBackCashAmount: sdk.Float64(20),
            Currency: shared.CurrencyEnumUsd,
            CustomerID: "12345",
            DeviceID: sdk.String("12345"),
            EmployeeID: sdk.String("12345"),
            ExternalDetails: &shared.PosPaymentExternalDetails{
                Source: "dolores",
                SourceFeeAmount: sdk.Float64(2.5),
                SourceID: sdk.String("id"),
                Type: shared.PosPaymentExternalDetailsTypeEnumCrypto,
            },
            ExternalPaymentID: sdk.String("12345"),
            IdempotencyKey: sdk.String("random_string"),
            LocationID: sdk.String("12345"),
            MerchantID: sdk.String("12345"),
            OrderID: "12345",
            ProcessingFees: []shared.PosPaymentProcessingFees{
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumAdjustment.ToPointer(),
                },
                shared.PosPaymentProcessingFees{
                    Amount: sdk.Float64(1.05),
                    EffectiveAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
                    ProcessingType: shared.PosPaymentProcessingFeesTypeEnumInitial.ToPointer(),
                },
            },
            Refunded: sdk.Float64(37.5),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumCustom.ToPointer(),
                },
            },
            Source: shared.PosPaymentSourceEnumExternal.ToPointer(),
            SourceID: "12345",
            Status: shared.PosPaymentStatusEnumApproved.ToPointer(),
            Tax: sdk.Float64(20),
            TenderID: "12345",
            Tip: sdk.Float64(7),
            Total: sdk.Float64(37.5),
            Wallet: &shared.PosPaymentWalletDetails{
                Status: shared.PosPaymentWalletDetailsStatusEnumFailed.ToPointer(),
            },
        },
        ID: "4764a3e8-65e7-4956-b925-1a5a9da660ff",
        Raw: sdk.Bool(false),
        XApideckAppID: "ullam",
        XApideckConsumerID: "in",
        XApideckServiceID: sdk.String("nam"),
    }, operations.PaymentsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePosPaymentResponse != nil {
        // handle response
    }
}
```
