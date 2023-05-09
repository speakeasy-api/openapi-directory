# CashPayments

### Available Operations

* [CashPaymentsDelete](#cashpaymentsdelete) - Removes an existing Cash Payment.
* [CashPaymentsGet](#cashpaymentsget) - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [CashPaymentsPost](#cashpaymentspost) - Creates a new Cash Payment.
* [CashPaymentsProcessBatch](#cashpaymentsprocessbatch) - Processes a batch of Cash Payments.
* [CashPaymentsPut](#cashpaymentsput) - Updates an existing Cash Payment.
* [GetV1CashPaymentsID](#getv1cashpaymentsid) - Returns information about a single Cash Payment.

## CashPaymentsDelete

Removes an existing Cash Payment.

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
    res, err := s.CashPayments.CashPaymentsDelete(ctx, operations.CashPaymentsDeleteRequest{
        ID: 38425,
        Timestamp: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashPaymentsGet

Returns a list of company's Cash Payments. Supports OData querying protocol.
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
    res, err := s.CashPayments.CashPaymentsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultCashPaymentQueryDto != nil {
        // handle response
    }
}
```

## CashPaymentsPost

Creates a new Cash Payment.

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
    res, err := s.CashPayments.CashPaymentsPost(ctx, shared.CashPaymentDto{
        AcCode: sdk.String("culpa"),
        AcEntries: []shared.AcEntryDto{
            shared.AcEntryDto{
                AccountCode: sdk.String("sapiente"),
                AnalysisCategoryID: sdk.Int64(102044),
                Description: sdk.String("mollitia"),
                ID: sdk.Int64(208876),
                Value: sdk.Float64(6350.59),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("consequuntur"),
                AnalysisCategoryID: sdk.Int64(995300),
                Description: sdk.String("mollitia"),
                ID: sdk.Int64(581850),
                Value: sdk.Float64(2532.91),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("commodi"),
                AnalysisCategoryID: sdk.Int64(466311),
                Description: sdk.String("molestiae"),
                ID: sdk.Int64(244425),
                Value: sdk.Float64(6235.1),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("quia"),
                AnalysisCategoryID: sdk.Int64(338007),
                Description: sdk.String("vitae"),
                ID: sdk.Int64(674752),
                Value: sdk.Float64(6563.3),
            },
        },
        BankAccountCode: sdk.String("enim"),
        BankAccountID: sdk.Int64(138183),
        BookTranTypeID: sdk.Int64(778346),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("tenetur"),
                ID: sdk.Int64(368725),
                UserDefinedFieldID: sdk.Int64(662527),
                Value: sdk.String("possimus"),
            },
        },
        DetailCollection: []string{
            "quasi",
        },
        Discount: sdk.Float64(6228.46),
        EntryDate: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
        ID: sdk.Int64(96098),
        Ledger: sdk.Float64(9719.45),
        Lodgement: sdk.Float64(9764.6),
        Note: sdk.String("vero"),
        PlaidTransactionID: sdk.String("nihil"),
        ProcDate: types.MustTimeFromString("2021-01-17T23:08:44.457Z"),
        SupplierID: sdk.Int64(55714),
        Timestamp: sdk.String("omnis"),
        Total: sdk.Float64(4511.59),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashPaymentsProcessBatch

Processes a batch of Cash Payments.

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
    res, err := s.CashPayments.CashPaymentsProcessBatch(ctx, []shared.BatchItemCashPaymentDto{
        shared.BatchItemCashPaymentDto{
            Item: &shared.CashPaymentDto{
                AcCode: sdk.String("perferendis"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("reprehenderit"),
                        AnalysisCategoryID: sdk.Int64(282807),
                        Description: sdk.String("maiores"),
                        ID: sdk.Int64(120196),
                        Value: sdk.Float64(3594.44),
                    },
                },
                BankAccountCode: sdk.String("dolore"),
                BankAccountID: sdk.Int64(480894),
                BookTranTypeID: sdk.Int64(118727),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("enim"),
                        ID: sdk.Int64(880476),
                        UserDefinedFieldID: sdk.Int64(414263),
                        Value: sdk.String("repudiandae"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("quae"),
                        ID: sdk.Int64(216822),
                        UserDefinedFieldID: sdk.Int64(692472),
                        Value: sdk.String("molestias"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("excepturi"),
                        ID: sdk.Int64(865103),
                        UserDefinedFieldID: sdk.Int64(265389),
                        Value: sdk.String("praesentium"),
                    },
                },
                DetailCollection: []string{
                    "voluptates",
                    "quasi",
                    "repudiandae",
                },
                Discount: sdk.Float64(5759.47),
                EntryDate: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
                ID: sdk.Int64(277718),
                Ledger: sdk.Float64(3185.69),
                Lodgement: sdk.Float64(93.56),
                Note: sdk.String("est"),
                PlaidTransactionID: sdk.String("quibusdam"),
                ProcDate: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
                SupplierID: sdk.Int64(716327),
                Timestamp: sdk.String("quibusdam"),
                Total: sdk.Float64(2894.06),
            },
            OpCode: shared.BatchItemCashPaymentDtoOpCodeEnumOne.ToPointer(),
        },
        shared.BatchItemCashPaymentDto{
            Item: &shared.CashPaymentDto{
                AcCode: sdk.String("qui"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("cupiditate"),
                        AnalysisCategoryID: sdk.Int64(552822),
                        Description: sdk.String("perferendis"),
                        ID: sdk.Int64(164940),
                        Value: sdk.Float64(8289.4),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("ipsam"),
                        AnalysisCategoryID: sdk.Int64(4695),
                        Description: sdk.String("fugit"),
                        ID: sdk.Int64(677817),
                        Value: sdk.Float64(5696.18),
                    },
                },
                BankAccountCode: sdk.String("tempora"),
                BankAccountID: sdk.Int64(703737),
                BookTranTypeID: sdk.Int64(735194),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("delectus"),
                        ID: sdk.Int64(433288),
                        UserDefinedFieldID: sdk.Int64(248753),
                        Value: sdk.String("eligendi"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("sint"),
                        ID: sdk.Int64(396098),
                        UserDefinedFieldID: sdk.Int64(592042),
                        Value: sdk.String("necessitatibus"),
                    },
                },
                DetailCollection: []string{
                    "officia",
                    "dolor",
                    "debitis",
                },
                Discount: sdk.Float64(9527.49),
                EntryDate: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
                ID: sdk.Int64(449198),
                Ledger: sdk.Float64(8464.09),
                Lodgement: sdk.Float64(9785.71),
                Note: sdk.String("rerum"),
                PlaidTransactionID: sdk.String("dicta"),
                ProcDate: types.MustTimeFromString("2022-03-27T00:52:20.281Z"),
                SupplierID: sdk.Int64(813798),
                Timestamp: sdk.String("ea"),
                Total: sdk.Float64(3965.06),
            },
            OpCode: shared.BatchItemCashPaymentDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemCashPaymentDto{
            Item: &shared.CashPaymentDto{
                AcCode: sdk.String("accusamus"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("occaecati"),
                        AnalysisCategoryID: sdk.Int64(313218),
                        Description: sdk.String("accusamus"),
                        ID: sdk.Int64(965417),
                        Value: sdk.Float64(6925.32),
                    },
                },
                BankAccountCode: sdk.String("provident"),
                BankAccountID: sdk.Int64(725255),
                BookTranTypeID: sdk.Int64(659669),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("deleniti"),
                        ID: sdk.Int64(956084),
                        UserDefinedFieldID: sdk.Int64(230533),
                        Value: sdk.String("deserunt"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("nisi"),
                        ID: sdk.Int64(423855),
                        UserDefinedFieldID: sdk.Int64(618809),
                        Value: sdk.String("omnis"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("molestiae"),
                        ID: sdk.Int64(19193),
                        UserDefinedFieldID: sdk.Int64(470132),
                        Value: sdk.String("magnam"),
                    },
                },
                DetailCollection: []string{
                    "id",
                    "labore",
                    "labore",
                },
                Discount: sdk.Float64(3834.62),
                EntryDate: types.MustTimeFromString("2021-07-03T02:32:39.849Z"),
                ID: sdk.Int64(428769),
                Ledger: sdk.Float64(8784.53),
                Lodgement: sdk.Float64(1354.74),
                Note: sdk.String("architecto"),
                PlaidTransactionID: sdk.String("magnam"),
                ProcDate: types.MustTimeFromString("2022-06-06T23:06:26.119Z"),
                SupplierID: sdk.Int64(354047),
                Timestamp: sdk.String("provident"),
                Total: sdk.Float64(5518.16),
            },
            OpCode: shared.BatchItemCashPaymentDtoOpCodeEnumTwo.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentsProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashPaymentsPut

Updates an existing Cash Payment.

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
    res, err := s.CashPayments.CashPaymentsPut(ctx, operations.CashPaymentsPutRequest{
        CashPaymentDto: shared.CashPaymentDto{
            AcCode: sdk.String("accusantium"),
            AcEntries: []shared.AcEntryDto{
                shared.AcEntryDto{
                    AccountCode: sdk.String("reiciendis"),
                    AnalysisCategoryID: sdk.Int64(652103),
                    Description: sdk.String("ad"),
                    ID: sdk.Int64(431418),
                    Value: sdk.Float64(2212.62),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("necessitatibus"),
                    AnalysisCategoryID: sdk.Int64(141264),
                    Description: sdk.String("nemo"),
                    ID: sdk.Int64(97260),
                    Value: sdk.Float64(4358.65),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("doloribus"),
                    AnalysisCategoryID: sdk.Int64(891924),
                    Description: sdk.String("eius"),
                    ID: sdk.Int64(806194),
                    Value: sdk.Float64(5370.23),
                },
            },
            BankAccountCode: sdk.String("facilis"),
            BankAccountID: sdk.Int64(447926),
            BookTranTypeID: sdk.Int64(100226),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("repudiandae"),
                    ID: sdk.Int64(352312),
                    UserDefinedFieldID: sdk.Int64(714242),
                    Value: sdk.String("nihil"),
                },
            },
            DetailCollection: []string{
                "quibusdam",
                "sed",
                "saepe",
                "pariatur",
            },
            Discount: sdk.Float64(375.59),
            EntryDate: types.MustTimeFromString("2022-06-29T11:09:23.468Z"),
            ID: sdk.Int64(615560),
            Ledger: sdk.Float64(1668.47),
            Lodgement: sdk.Float64(1238.2),
            Note: sdk.String("quo"),
            PlaidTransactionID: sdk.String("illum"),
            ProcDate: types.MustTimeFromString("2020-07-30T23:39:27.609Z"),
            SupplierID: sdk.Int64(411397),
            Timestamp: sdk.String("excepturi"),
            Total: sdk.Float64(1399.72),
        },
        ID: 407183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentsPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1CashPaymentsID

Returns information about a single Cash Payment.

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
    res, err := s.CashPayments.GetV1CashPaymentsID(ctx, operations.GetV1CashPaymentsIDRequest{
        ID: 33222,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashPaymentDto != nil {
        // handle response
    }
}
```
