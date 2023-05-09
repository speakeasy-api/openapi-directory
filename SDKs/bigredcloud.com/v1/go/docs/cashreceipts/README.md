# CashReceipts

### Available Operations

* [CashReceiptsDelete](#cashreceiptsdelete) - Removes an existing Cash Receipt.
* [CashReceiptsGet](#cashreceiptsget) - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [CashReceiptsPost](#cashreceiptspost) - Creates a new Cash Receipt.
* [CashReceiptsProcessBatch](#cashreceiptsprocessbatch) - Processes a batch of Cash Receipts.
* [CashReceiptsPut](#cashreceiptsput) - Updates an existing Cash Receipt.
* [GetV1CashReceiptsID](#getv1cashreceiptsid) - Returns information about a single Cash Receipt.

## CashReceiptsDelete

Removes an existing Cash Receipt.

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
    res, err := s.CashReceipts.CashReceiptsDelete(ctx, operations.CashReceiptsDeleteRequest{
        ID: 69167,
        Timestamp: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashReceiptsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashReceiptsGet

Returns a list of company's Cash Receipts. Supports OData querying protocol.
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
    res, err := s.CashReceipts.CashReceiptsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultCashReceiptQueryDto != nil {
        // handle response
    }
}
```

## CashReceiptsPost

Creates a new Cash Receipt.

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
    res, err := s.CashReceipts.CashReceiptsPost(ctx, shared.CashReceiptDto{
        AcCode: sdk.String("quidem"),
        AcEntries: []shared.AcEntryDto{
            shared.AcEntryDto{
                AccountCode: sdk.String("voluptate"),
                AnalysisCategoryID: sdk.Int64(420075),
                Description: sdk.String("nam"),
                ID: sdk.Int64(50588),
                Value: sdk.Float64(8663.83),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("nemo"),
                AnalysisCategoryID: sdk.Int64(975522),
                Description: sdk.String("perferendis"),
                ID: sdk.Int64(855804),
                Value: sdk.Float64(2307.42),
            },
        },
        BookTranTypeID: sdk.Int64(11714),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("corporis"),
                ID: sdk.Int64(944124),
                UserDefinedFieldID: sdk.Int64(729991),
                Value: sdk.String("nobis"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("dolores"),
                ID: sdk.Int64(339404),
                UserDefinedFieldID: sdk.Int64(521037),
                Value: sdk.String("dignissimos"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("eaque"),
                ID: sdk.Int64(338985),
                UserDefinedFieldID: sdk.Int64(199996),
                Value: sdk.String("eos"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("perferendis"),
                ID: sdk.Int64(170986),
                UserDefinedFieldID: sdk.Int64(793698),
                Value: sdk.String("quam"),
            },
        },
        CustomerID: sdk.Int64(223924),
        DetailCollection: []string{
            "nostrum",
            "hic",
            "recusandae",
            "omnis",
        },
        Discount: sdk.Float64(7044.15),
        EntryDate: types.MustTimeFromString("2022-12-08T18:10:54.422Z"),
        ID: sdk.Int64(783645),
        Ledger: sdk.Float64(1646.94),
        Note: sdk.String("blanditiis"),
        PlaidTransactionID: sdk.String("error"),
        ProcDate: types.MustTimeFromString("2022-06-04T07:28:38.912Z"),
        Timestamp: sdk.String("rerum"),
        Total: sdk.Float64(2378.93),
        Unallocated: sdk.Float64(9923.97),
        VatEntries: []shared.VatEntryDto{
            shared.VatEntryDto{
                Amount: sdk.Float64(2672.62),
                ID: sdk.Int64(613966),
                Percentage: sdk.Float64(6790.91),
                VatRateID: sdk.Int64(535633),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(8642.82),
                ID: sdk.Int64(589910),
                Percentage: sdk.Float64(7508.44),
                VatRateID: sdk.Int64(730122),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(9644.9),
                ID: sdk.Int64(311945),
                Percentage: sdk.Float64(5542.42),
                VatRateID: sdk.Int64(398221),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(2123.9),
                ID: sdk.Int64(209843),
                Percentage: sdk.Float64(2224.43),
                VatRateID: sdk.Int64(186193),
            },
        },
        VatTypeID: sdk.Int64(218749),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashReceiptsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashReceiptsProcessBatch

Processes a batch of Cash Receipts.

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
    res, err := s.CashReceipts.CashReceiptsProcessBatch(ctx, []shared.BatchItemCashReceiptDto{
        shared.BatchItemCashReceiptDto{
            Item: &shared.CashReceiptDto{
                AcCode: sdk.String("excepturi"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("voluptate"),
                        AnalysisCategoryID: sdk.Int64(490459),
                        Description: sdk.String("reiciendis"),
                        ID: sdk.Int64(227414),
                        Value: sdk.Float64(6805.45),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("numquam"),
                        AnalysisCategoryID: sdk.Int64(85295),
                        Description: sdk.String("ipsa"),
                        ID: sdk.Int64(56418),
                        Value: sdk.Float64(4344.17),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("odio"),
                        AnalysisCategoryID: sdk.Int64(311796),
                        Description: sdk.String("accusamus"),
                        ID: sdk.Int64(696344),
                        Value: sdk.Float64(9764.05),
                    },
                },
                BookTranTypeID: sdk.Int64(377752),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("eos"),
                        ID: sdk.Int64(542499),
                        UserDefinedFieldID: sdk.Int64(24678),
                        Value: sdk.String("fugiat"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("ab"),
                        ID: sdk.Int64(743835),
                        UserDefinedFieldID: sdk.Int64(679393),
                        Value: sdk.String("iusto"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("voluptate"),
                        ID: sdk.Int64(677082),
                        UserDefinedFieldID: sdk.Int64(536579),
                        Value: sdk.String("omnis"),
                    },
                },
                CustomerID: sdk.Int64(896672),
                DetailCollection: []string{
                    "asperiores",
                    "nihil",
                    "ipsum",
                },
                Discount: sdk.Float64(4560.15),
                EntryDate: types.MustTimeFromString("2021-03-10T07:33:18.208Z"),
                ID: sdk.Int64(263322),
                Ledger: sdk.Float64(1372.2),
                Note: sdk.String("perferendis"),
                PlaidTransactionID: sdk.String("amet"),
                ProcDate: types.MustTimeFromString("2020-05-10T15:56:07.975Z"),
                Timestamp: sdk.String("ad"),
                Total: sdk.Float64(9044.25),
                Unallocated: sdk.Float64(3834.64),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(5883.17),
                        ID: sdk.Int64(324683),
                        Percentage: sdk.Float64(8310.49),
                        VatRateID: sdk.Int64(519711),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(6289.82),
                        ID: sdk.Int64(55),
                        Percentage: sdk.Float64(8726.51),
                        VatRateID: sdk.Int64(311860),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(2735.42),
                        ID: sdk.Int64(425451),
                        Percentage: sdk.Float64(7980.47),
                        VatRateID: sdk.Int64(885338),
                    },
                },
                VatTypeID: sdk.Int64(185636),
            },
            OpCode: shared.BatchItemCashReceiptDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemCashReceiptDto{
            Item: &shared.CashReceiptDto{
                AcCode: sdk.String("a"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("harum"),
                        AnalysisCategoryID: sdk.Int64(483409),
                        Description: sdk.String("ipsum"),
                        ID: sdk.Int64(788740),
                        Value: sdk.Float64(9473.71),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("amet"),
                        AnalysisCategoryID: sdk.Int64(730856),
                        Description: sdk.String("accusamus"),
                        ID: sdk.Int64(253941),
                        Value: sdk.Float64(3136.92),
                    },
                },
                BookTranTypeID: sdk.Int64(213312),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("totam"),
                        ID: sdk.Int64(471752),
                        UserDefinedFieldID: sdk.Int64(25662),
                        Value: sdk.String("expedita"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("neque"),
                        ID: sdk.Int64(153694),
                        UserDefinedFieldID: sdk.Int64(424685),
                        Value: sdk.String("libero"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("voluptas"),
                        ID: sdk.Int64(646265),
                        UserDefinedFieldID: sdk.Int64(463575),
                        Value: sdk.String("ipsum"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("incidunt"),
                        ID: sdk.Int64(186458),
                        UserDefinedFieldID: sdk.Int64(586784),
                        Value: sdk.String("maxime"),
                    },
                },
                CustomerID: sdk.Int64(863856),
                DetailCollection: []string{
                    "dicta",
                    "laborum",
                    "totam",
                },
                Discount: sdk.Float64(2768.94),
                EntryDate: types.MustTimeFromString("2022-10-29T03:47:52.981Z"),
                ID: sdk.Int64(716860),
                Ledger: sdk.Float64(7044.74),
                Note: sdk.String("aliquid"),
                PlaidTransactionID: sdk.String("quam"),
                ProcDate: types.MustTimeFromString("2021-04-27T11:41:31.258Z"),
                Timestamp: sdk.String("qui"),
                Total: sdk.Float64(2048.65),
                Unallocated: sdk.Float64(1448.47),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(4880.56),
                        ID: sdk.Int64(124833),
                        Percentage: sdk.Float64(3556.13),
                        VatRateID: sdk.Int64(722081),
                    },
                },
                VatTypeID: sdk.Int64(940432),
            },
            OpCode: shared.BatchItemCashReceiptDtoOpCodeEnumOne.ToPointer(),
        },
        shared.BatchItemCashReceiptDto{
            Item: &shared.CashReceiptDto{
                AcCode: sdk.String("cumque"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("nobis"),
                        AnalysisCategoryID: sdk.Int64(92596),
                        Description: sdk.String("saepe"),
                        ID: sdk.Int64(217450),
                        Value: sdk.Float64(834.22),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("nobis"),
                        AnalysisCategoryID: sdk.Int64(552193),
                        Description: sdk.String("tempore"),
                        ID: sdk.Int64(584476),
                        Value: sdk.Float64(456.14),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("delectus"),
                        AnalysisCategoryID: sdk.Int64(209157),
                        Description: sdk.String("dolore"),
                        ID: sdk.Int64(286915),
                        Value: sdk.Float64(2408.29),
                    },
                },
                BookTranTypeID: sdk.Int64(677263),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("quae"),
                        ID: sdk.Int64(16429),
                        UserDefinedFieldID: sdk.Int64(555649),
                        Value: sdk.String("itaque"),
                    },
                },
                CustomerID: sdk.Int64(9240),
                DetailCollection: []string{
                    "repellendus",
                    "porro",
                    "doloribus",
                },
                Discount: sdk.Float64(2817.3),
                EntryDate: types.MustTimeFromString("2021-10-29T22:05:37.347Z"),
                ID: sdk.Int64(181631),
                Ledger: sdk.Float64(639.55),
                Note: sdk.String("laudantium"),
                PlaidTransactionID: sdk.String("odio"),
                ProcDate: types.MustTimeFromString("2021-01-17T10:17:06.805Z"),
                Timestamp: sdk.String("quisquam"),
                Total: sdk.Float64(8765.06),
                Unallocated: sdk.Float64(6064.76),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(2184.03),
                        ID: sdk.Int64(961571),
                        Percentage: sdk.Float64(4551.69),
                        VatRateID: sdk.Int64(231701),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(8788.7),
                        ID: sdk.Int64(949319),
                        Percentage: sdk.Float64(4922.68),
                        VatRateID: sdk.Int64(941378),
                    },
                },
                VatTypeID: sdk.Int64(715561),
            },
            OpCode: shared.BatchItemCashReceiptDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemCashReceiptDto{
            Item: &shared.CashReceiptDto{
                AcCode: sdk.String("odio"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("facilis"),
                        AnalysisCategoryID: sdk.Int64(874288),
                        Description: sdk.String("ducimus"),
                        ID: sdk.Int64(293020),
                        Value: sdk.Float64(8445.5),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("illum"),
                        AnalysisCategoryID: sdk.Int64(194342),
                        Description: sdk.String("natus"),
                        ID: sdk.Int64(773326),
                        Value: sdk.Float64(132.36),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("voluptatibus"),
                        AnalysisCategoryID: sdk.Int64(347233),
                        Description: sdk.String("nulla"),
                        ID: sdk.Int64(148141),
                        Value: sdk.Float64(7804.27),
                    },
                },
                BookTranTypeID: sdk.Int64(981830),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("iusto"),
                        ID: sdk.Int64(753570),
                        UserDefinedFieldID: sdk.Int64(497391),
                        Value: sdk.String("alias"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("officia"),
                        ID: sdk.Int64(269479),
                        UserDefinedFieldID: sdk.Int64(368584),
                        Value: sdk.String("ea"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("aspernatur"),
                        ID: sdk.Int64(428224),
                        UserDefinedFieldID: sdk.Int64(822118),
                        Value: sdk.String("magnam"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("ratione"),
                        ID: sdk.Int64(401132),
                        UserDefinedFieldID: sdk.Int64(511319),
                        Value: sdk.String("dicta"),
                    },
                },
                CustomerID: sdk.Int64(224317),
                DetailCollection: []string{
                    "quasi",
                    "ex",
                    "nulla",
                    "excepturi",
                },
                Discount: sdk.Float64(9729.2),
                EntryDate: types.MustTimeFromString("2022-01-15T07:05:18.296Z"),
                ID: sdk.Int64(788873),
                Ledger: sdk.Float64(9065.56),
                Note: sdk.String("ea"),
                PlaidTransactionID: sdk.String("impedit"),
                ProcDate: types.MustTimeFromString("2022-09-01T09:38:53.685Z"),
                Timestamp: sdk.String("aliquid"),
                Total: sdk.Float64(811.01),
                Unallocated: sdk.Float64(3018.31),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(7752.2),
                        ID: sdk.Int64(232234),
                        Percentage: sdk.Float64(9262.13),
                        VatRateID: sdk.Int64(132487),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(3253.1),
                        ID: sdk.Int64(53427),
                        Percentage: sdk.Float64(9528.71),
                        VatRateID: sdk.Int64(725595),
                    },
                },
                VatTypeID: sdk.Int64(13948),
            },
            OpCode: shared.BatchItemCashReceiptDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashReceiptsProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CashReceiptsPut

Updates an existing Cash Receipt.

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
    res, err := s.CashReceipts.CashReceiptsPut(ctx, operations.CashReceiptsPutRequest{
        CashReceiptDto: shared.CashReceiptDto{
            AcCode: sdk.String("deleniti"),
            AcEntries: []shared.AcEntryDto{
                shared.AcEntryDto{
                    AccountCode: sdk.String("aliquam"),
                    AnalysisCategoryID: sdk.Int64(146946),
                    Description: sdk.String("accusamus"),
                    ID: sdk.Int64(79522),
                    Value: sdk.Float64(2506.22),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("et"),
                    AnalysisCategoryID: sdk.Int64(677412),
                    Description: sdk.String("laborum"),
                    ID: sdk.Int64(810424),
                    Value: sdk.Float64(2453.67),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("eum"),
                    AnalysisCategoryID: sdk.Int64(420539),
                    Description: sdk.String("nobis"),
                    ID: sdk.Int64(557369),
                    Value: sdk.Float64(8296.03),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("nulla"),
                    AnalysisCategoryID: sdk.Int64(379034),
                    Description: sdk.String("libero"),
                    ID: sdk.Int64(96549),
                    Value: sdk.Float64(2703.28),
                },
            },
            BookTranTypeID: sdk.Int64(256139),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("provident"),
                    ID: sdk.Int64(55374),
                    UserDefinedFieldID: sdk.Int64(476477),
                    Value: sdk.String("magnam"),
                },
            },
            CustomerID: sdk.Int64(487935),
            DetailCollection: []string{
                "esse",
                "esse",
            },
            Discount: sdk.Float64(5245.93),
            EntryDate: types.MustTimeFromString("2022-02-12T07:53:29.219Z"),
            ID: sdk.Int64(695626),
            Ledger: sdk.Float64(8526.35),
            Note: sdk.String("ut"),
            PlaidTransactionID: sdk.String("eum"),
            ProcDate: types.MustTimeFromString("2022-03-05T04:36:55.913Z"),
            Timestamp: sdk.String("eos"),
            Total: sdk.Float64(5093.42),
            Unallocated: sdk.Float64(7885.46),
            VatEntries: []shared.VatEntryDto{
                shared.VatEntryDto{
                    Amount: sdk.Float64(568.48),
                    ID: sdk.Int64(660040),
                    Percentage: sdk.Float64(6969.97),
                    VatRateID: sdk.Int64(206594),
                },
            },
            VatTypeID: sdk.Int64(778696),
        },
        ID: 847276,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashReceiptsPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1CashReceiptsID

Returns information about a single Cash Receipt.

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
    res, err := s.CashReceipts.GetV1CashReceiptsID(ctx, operations.GetV1CashReceiptsIDRequest{
        ID: 777408,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashReceiptDto != nil {
        // handle response
    }
}
```
