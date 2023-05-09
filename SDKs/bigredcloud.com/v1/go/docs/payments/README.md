# Payments

### Available Operations

* [PaymentsDelete](#paymentsdelete) - Removes an existing Payment.
* [PaymentsGet](#paymentsget) - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [PaymentsPost](#paymentspost) - Creates a new Payment.
* [PaymentsProcessBatch](#paymentsprocessbatch) - Processes a batch of Payments.
* [PaymentsPut](#paymentsput) - Updates an existing Payment.
* [GetV1PaymentsID](#getv1paymentsid) - Returns information about a single Payments.

## PaymentsDelete

Removes an existing Payment.

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
        ID: 431785,
        Timestamp: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PaymentsGet

Returns a list of company's Payments. Supports OData querying protocol.
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
    res, err := s.Payments.PaymentsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultPaymentQueryDto != nil {
        // handle response
    }
}
```

## PaymentsPost

Creates a new Payment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Payments.PaymentsPost(ctx, shared.PaymentDto{
        AcCode: sdk.String("provident"),
        AcEntries: []shared.AcEntryDto{
            shared.AcEntryDto{
                AccountCode: sdk.String("ullam"),
                AnalysisCategoryID: sdk.Int64(96804),
                Description: sdk.String("animi"),
                ID: sdk.Int64(343392),
                Value: sdk.Float64(6523.09),
            },
        },
        BankAccountCode: sdk.String("provident"),
        BankAccountID: sdk.Int64(821719),
        BookTranTypeID: sdk.Int64(659177),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("aliquid"),
                ID: sdk.Int64(37565),
                UserDefinedFieldID: sdk.Int64(999278),
                Value: sdk.String("doloribus"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("ullam"),
                ID: sdk.Int64(448143),
                UserDefinedFieldID: sdk.Int64(721407),
                Value: sdk.String("earum"),
            },
        },
        DetailCollection: []string{
            "laborum",
            "placeat",
            "modi",
        },
        Discount: sdk.Float64(9762.26),
        EntryDate: types.MustTimeFromString("2021-03-22T10:48:54.502Z"),
        ID: sdk.Int64(956933),
        Note: sdk.String("cumque"),
        PlaidTransactionID: sdk.String("vitae"),
        ProcDate: types.MustTimeFromString("2022-06-16T06:32:28.803Z"),
        Reference: sdk.String("quis"),
        SupplierID: sdk.Int64(82057),
        Timestamp: sdk.String("fugit"),
        Total: sdk.Float64(7652.71),
        TransferBankCode: sdk.String("quae"),
        TransferBankID: sdk.Int64(21688),
        Unallocated: sdk.Float64(2419.01),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PaymentsProcessBatch

Processes a batch of Payments.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Payments.PaymentsProcessBatch(ctx, []shared.BatchItemPaymentDto{
        shared.BatchItemPaymentDto{
            Item: &shared.PaymentDto{
                AcCode: sdk.String("eum"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("rem"),
                        AnalysisCategoryID: sdk.Int64(871083),
                        Description: sdk.String("impedit"),
                        ID: sdk.Int64(179410),
                        Value: sdk.Float64(9587.41),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("eum"),
                        AnalysisCategoryID: sdk.Int64(117320),
                        Description: sdk.String("minima"),
                        ID: sdk.Int64(107004),
                        Value: sdk.Float64(5834.04),
                    },
                },
                BankAccountCode: sdk.String("provident"),
                BankAccountID: sdk.Int64(936469),
                BookTranTypeID: sdk.Int64(745398),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("illum"),
                        ID: sdk.Int64(52508),
                        UserDefinedFieldID: sdk.Int64(935833),
                        Value: sdk.String("perspiciatis"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("maiores"),
                        ID: sdk.Int64(891801),
                        UserDefinedFieldID: sdk.Int64(399802),
                        Value: sdk.String("porro"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("suscipit"),
                        ID: sdk.Int64(211534),
                        UserDefinedFieldID: sdk.Int64(147808),
                        Value: sdk.String("cumque"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("fuga"),
                        ID: sdk.Int64(189062),
                        UserDefinedFieldID: sdk.Int64(656762),
                        Value: sdk.String("necessitatibus"),
                    },
                },
                DetailCollection: []string{
                    "consequatur",
                    "quasi",
                    "et",
                    "ducimus",
                },
                Discount: sdk.Float64(6191.83),
                EntryDate: types.MustTimeFromString("2022-03-27T19:38:57.457Z"),
                ID: sdk.Int64(241557),
                Note: sdk.String("quasi"),
                PlaidTransactionID: sdk.String("magni"),
                ProcDate: types.MustTimeFromString("2020-06-03T18:12:56.279Z"),
                Reference: sdk.String("necessitatibus"),
                SupplierID: sdk.Int64(58534),
                Timestamp: sdk.String("tempora"),
                Total: sdk.Float64(4706.21),
                TransferBankCode: sdk.String("molestiae"),
                TransferBankID: sdk.Int64(115834),
                Unallocated: sdk.Float64(4797.54),
            },
            OpCode: shared.BatchItemPaymentDtoOpCodeEnumTwo.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentsProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PaymentsPut

Updates an existing Payment.

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
    res, err := s.Payments.PaymentsPut(ctx, operations.PaymentsPutRequest{
        PaymentDto: shared.PaymentDto{
            AcCode: sdk.String("praesentium"),
            AcEntries: []shared.AcEntryDto{
                shared.AcEntryDto{
                    AccountCode: sdk.String("reiciendis"),
                    AnalysisCategoryID: sdk.Int64(423706),
                    Description: sdk.String("architecto"),
                    ID: sdk.Int64(857125),
                    Value: sdk.Float64(396.5),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("dicta"),
                    AnalysisCategoryID: sdk.Int64(483706),
                    Description: sdk.String("tempora"),
                    ID: sdk.Int64(458259),
                    Value: sdk.Float64(4037.93),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("consectetur"),
                    AnalysisCategoryID: sdk.Int64(399812),
                    Description: sdk.String("ipsa"),
                    ID: sdk.Int64(671384),
                    Value: sdk.Float64(1238.44),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("nostrum"),
                    AnalysisCategoryID: sdk.Int64(856756),
                    Description: sdk.String("expedita"),
                    ID: sdk.Int64(399667),
                    Value: sdk.Float64(6391.87),
                },
            },
            BankAccountCode: sdk.String("suscipit"),
            BankAccountID: sdk.Int64(399161),
            BookTranTypeID: sdk.Int64(21973),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("voluptas"),
                    ID: sdk.Int64(614528),
                    UserDefinedFieldID: sdk.Int64(661607),
                    Value: sdk.String("ab"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("error"),
                    ID: sdk.Int64(822407),
                    UserDefinedFieldID: sdk.Int64(913992),
                    Value: sdk.String("mollitia"),
                },
            },
            DetailCollection: []string{
                "libero",
                "ad",
                "deleniti",
            },
            Discount: sdk.Float64(3162.2),
            EntryDate: types.MustTimeFromString("2022-03-02T20:09:12.443Z"),
            ID: sdk.Int64(405036),
            Note: sdk.String("quo"),
            PlaidTransactionID: sdk.String("ex"),
            ProcDate: types.MustTimeFromString("2022-09-05T19:39:47.586Z"),
            Reference: sdk.String("expedita"),
            SupplierID: sdk.Int64(29950),
            Timestamp: sdk.String("molestias"),
            Total: sdk.Float64(7372.54),
            TransferBankCode: sdk.String("aliquid"),
            TransferBankID: sdk.Int64(109784),
            Unallocated: sdk.Float64(5308.6),
        },
        ID: 606308,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentsPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1PaymentsID

Returns information about a single Payments.

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
    res, err := s.Payments.GetV1PaymentsID(ctx, operations.GetV1PaymentsIDRequest{
        ID: 85233,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentDto != nil {
        // handle response
    }
}
```
