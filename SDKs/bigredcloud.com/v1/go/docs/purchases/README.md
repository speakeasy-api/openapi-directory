# Purchases

### Available Operations

* [PurchasesDelete](#purchasesdelete) - Removes an existing Purchase.
* [PurchasesGet](#purchasesget) - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [PurchasesPost](#purchasespost) - Creates a new Purchase.
* [PurchasesProcessBatch](#purchasesprocessbatch) - Processes a batch of Purchases.
* [PurchasesPut](#purchasesput) - Updates an existing Purchase.
* [GetV1PurchasesID](#getv1purchasesid) - Returns information about a single Purchases.

## PurchasesDelete

Removes an existing Purchase.

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
    res, err := s.Purchases.PurchasesDelete(ctx, operations.PurchasesDeleteRequest{
        ID: 388319,
        Timestamp: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchasesDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PurchasesGet

Returns a list of company's Purchases. Supports OData querying protocol.
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
    res, err := s.Purchases.PurchasesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultPurchaseQueryDto != nil {
        // handle response
    }
}
```

## PurchasesPost

Creates a new Purchase.

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
    res, err := s.Purchases.PurchasesPost(ctx, shared.PurchaseDto{
        AcCode: sdk.String("consequuntur"),
        AcEntries: []shared.AcEntryDto{
            shared.AcEntryDto{
                AccountCode: sdk.String("exercitationem"),
                AnalysisCategoryID: sdk.Int64(895692),
                Description: sdk.String("quasi"),
                ID: sdk.Int64(392569),
                Value: sdk.Float64(8711.03),
            },
        },
        BookTranTypeID: sdk.Int64(878373),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("harum"),
                ID: sdk.Int64(192718),
                UserDefinedFieldID: sdk.Int64(987349),
                Value: sdk.String("repudiandae"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("optio"),
                ID: sdk.Int64(579681),
                UserDefinedFieldID: sdk.Int64(364544),
                Value: sdk.String("voluptate"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("blanditiis"),
                ID: sdk.Int64(642352),
                UserDefinedFieldID: sdk.Int64(376389),
                Value: sdk.String("numquam"),
            },
        },
        DetailCollection: []string{
            "quos",
            "eius",
        },
        EntryDate: types.MustTimeFromString("2022-07-03T23:18:00.213Z"),
        ID: sdk.Int64(200516),
        IsDiscrepancyAccepted: sdk.Bool(false),
        NetGoods: sdk.Float64(6817.4),
        NetServices: sdk.Float64(5140.54),
        Note: sdk.String("incidunt"),
        PostponedAccounting: sdk.Bool(false),
        ProcDate: types.MustTimeFromString("2022-06-23T14:25:57.973Z"),
        Reference: sdk.String("fugiat"),
        SupplierID: sdk.Int64(117380),
        Timestamp: sdk.String("nisi"),
        Total: sdk.Float64(1598.45),
        TotalNet: sdk.Float64(2330.78),
        TotalVAT: sdk.Float64(468.06),
        Unallocated: sdk.Float64(5854.32),
        Unpaid: sdk.Float64(9707.32),
        VatEntries: []shared.VatEntryDto{
            shared.VatEntryDto{
                Amount: sdk.Float64(38.6),
                ID: sdk.Int64(608989),
                Percentage: sdk.Float64(1785.8),
                VatRateID: sdk.Int64(579011),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(6128.67),
                ID: sdk.Int64(170099),
                Percentage: sdk.Float64(813.69),
                VatRateID: sdk.Int64(686362),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(8818.97),
                ID: sdk.Int64(976802),
                Percentage: sdk.Float64(7196.2),
                VatRateID: sdk.Int64(608593),
            },
        },
        VatTypeID: sdk.Int64(966390),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchasesPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PurchasesProcessBatch

Processes a batch of Purchases.

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
    res, err := s.Purchases.PurchasesProcessBatch(ctx, []shared.BatchItemPurchaseDto{
        shared.BatchItemPurchaseDto{
            Item: &shared.PurchaseDto{
                AcCode: sdk.String("praesentium"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("magnam"),
                        AnalysisCategoryID: sdk.Int64(836364),
                        Description: sdk.String("quos"),
                        ID: sdk.Int64(415280),
                        Value: sdk.Float64(9308.19),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("commodi"),
                        AnalysisCategoryID: sdk.Int64(520761),
                        Description: sdk.String("earum"),
                        ID: sdk.Int64(267207),
                        Value: sdk.Float64(7221.84),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("vero"),
                        AnalysisCategoryID: sdk.Int64(32901),
                        Description: sdk.String("ipsam"),
                        ID: sdk.Int64(425946),
                        Value: sdk.Float64(13.83),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("quasi"),
                        AnalysisCategoryID: sdk.Int64(247685),
                        Description: sdk.String("maiores"),
                        ID: sdk.Int64(318233),
                        Value: sdk.Float64(5752.13),
                    },
                },
                BookTranTypeID: sdk.Int64(858778),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("esse"),
                        ID: sdk.Int64(364463),
                        UserDefinedFieldID: sdk.Int64(444587),
                        Value: sdk.String("est"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("quis"),
                        ID: sdk.Int64(571844),
                        UserDefinedFieldID: sdk.Int64(880679),
                        Value: sdk.String("impedit"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("hic"),
                        ID: sdk.Int64(900103),
                        UserDefinedFieldID: sdk.Int64(991891),
                        Value: sdk.String("ex"),
                    },
                },
                DetailCollection: []string{
                    "debitis",
                    "delectus",
                },
                EntryDate: types.MustTimeFromString("2022-03-17T23:08:05.815Z"),
                ID: sdk.Int64(685478),
                IsDiscrepancyAccepted: sdk.Bool(false),
                NetGoods: sdk.Float64(6756.89),
                NetServices: sdk.Float64(2310.7),
                Note: sdk.String("velit"),
                PostponedAccounting: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2022-07-26T23:40:06.851Z"),
                Reference: sdk.String("impedit"),
                SupplierID: sdk.Int64(166047),
                Timestamp: sdk.String("soluta"),
                Total: sdk.Float64(9227.57),
                TotalNet: sdk.Float64(7214.3),
                TotalVAT: sdk.Float64(2940.76),
                Unallocated: sdk.Float64(4828.92),
                Unpaid: sdk.Float64(4530.94),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(4939.58),
                        ID: sdk.Int64(205566),
                        Percentage: sdk.Float64(7781.72),
                        VatRateID: sdk.Int64(535468),
                    },
                },
                VatTypeID: sdk.Int64(844235),
            },
            OpCode: shared.BatchItemPurchaseDtoOpCodeEnumTwo.ToPointer(),
        },
        shared.BatchItemPurchaseDto{
            Item: &shared.PurchaseDto{
                AcCode: sdk.String("odit"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("vel"),
                        AnalysisCategoryID: sdk.Int64(300824),
                        Description: sdk.String("quibusdam"),
                        ID: sdk.Int64(78969),
                        Value: sdk.Float64(8180.34),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("libero"),
                        AnalysisCategoryID: sdk.Int64(102413),
                        Description: sdk.String("voluptatibus"),
                        ID: sdk.Int64(156383),
                        Value: sdk.Float64(7820.9),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("aliquam"),
                        AnalysisCategoryID: sdk.Int64(247045),
                        Description: sdk.String("illo"),
                        ID: sdk.Int64(36561),
                        Value: sdk.Float64(4246.63),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("ea"),
                        AnalysisCategoryID: sdk.Int64(107617),
                        Description: sdk.String("vero"),
                        ID: sdk.Int64(568218),
                        Value: sdk.Float64(4319.94),
                    },
                },
                BookTranTypeID: sdk.Int64(246557),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("perspiciatis"),
                        ID: sdk.Int64(935302),
                        UserDefinedFieldID: sdk.Int64(117525),
                        Value: sdk.String("impedit"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("voluptatibus"),
                        ID: sdk.Int64(610987),
                        UserDefinedFieldID: sdk.Int64(932562),
                        Value: sdk.String("alias"),
                    },
                },
                DetailCollection: []string{
                    "itaque",
                    "velit",
                },
                EntryDate: types.MustTimeFromString("2022-07-02T05:01:22.981Z"),
                ID: sdk.Int64(224467),
                IsDiscrepancyAccepted: sdk.Bool(false),
                NetGoods: sdk.Float64(4833.94),
                NetServices: sdk.Float64(247.53),
                Note: sdk.String("doloremque"),
                PostponedAccounting: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2022-05-12T12:10:59.574Z"),
                Reference: sdk.String("recusandae"),
                SupplierID: sdk.Int64(408303),
                Timestamp: sdk.String("quidem"),
                Total: sdk.Float64(3774.06),
                TotalNet: sdk.Float64(7051.48),
                TotalVAT: sdk.Float64(8093.65),
                Unallocated: sdk.Float64(5960.65),
                Unpaid: sdk.Float64(7090.36),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(9543.34),
                        ID: sdk.Int64(455579),
                        Percentage: sdk.Float64(3519.36),
                        VatRateID: sdk.Int64(600193),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(8975.43),
                        ID: sdk.Int64(654082),
                        Percentage: sdk.Float64(7699.67),
                        VatRateID: sdk.Int64(373040),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(3574.25),
                        ID: sdk.Int64(668234),
                        Percentage: sdk.Float64(6216.66),
                        VatRateID: sdk.Int64(456885),
                    },
                },
                VatTypeID: sdk.Int64(288570),
            },
            OpCode: shared.BatchItemPurchaseDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchasesProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PurchasesPut

Updates an existing Purchase.

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
    res, err := s.Purchases.PurchasesPut(ctx, operations.PurchasesPutRequest{
        PurchaseDto: shared.PurchaseDto{
            AcCode: sdk.String("vero"),
            AcEntries: []shared.AcEntryDto{
                shared.AcEntryDto{
                    AccountCode: sdk.String("vitae"),
                    AnalysisCategoryID: sdk.Int64(81371),
                    Description: sdk.String("dolorem"),
                    ID: sdk.Int64(322017),
                    Value: sdk.Float64(1830.33),
                },
            },
            BookTranTypeID: sdk.Int64(611328),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("nemo"),
                    ID: sdk.Int64(745233),
                    UserDefinedFieldID: sdk.Int64(726227),
                    Value: sdk.String("rem"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("dolorum"),
                    ID: sdk.Int64(487676),
                    UserDefinedFieldID: sdk.Int64(144691),
                    Value: sdk.String("alias"),
                },
            },
            DetailCollection: []string{
                "vel",
            },
            EntryDate: types.MustTimeFromString("2022-12-08T19:16:07.063Z"),
            ID: sdk.Int64(264333),
            IsDiscrepancyAccepted: sdk.Bool(false),
            NetGoods: sdk.Float64(2082.53),
            NetServices: sdk.Float64(3483.57),
            Note: sdk.String("itaque"),
            PostponedAccounting: sdk.Bool(false),
            ProcDate: types.MustTimeFromString("2022-10-14T09:06:41.387Z"),
            Reference: sdk.String("unde"),
            SupplierID: sdk.Int64(858338),
            Timestamp: sdk.String("distinctio"),
            Total: sdk.Float64(8028.94),
            TotalNet: sdk.Float64(1572.22),
            TotalVAT: sdk.Float64(1591.46),
            Unallocated: sdk.Float64(3421.37),
            Unpaid: sdk.Float64(6057.12),
            VatEntries: []shared.VatEntryDto{
                shared.VatEntryDto{
                    Amount: sdk.Float64(1156.61),
                    ID: sdk.Int64(663318),
                    Percentage: sdk.Float64(7278.88),
                    VatRateID: sdk.Int64(854460),
                },
                shared.VatEntryDto{
                    Amount: sdk.Float64(6374.62),
                    ID: sdk.Int64(554603),
                    Percentage: sdk.Float64(8119.39),
                    VatRateID: sdk.Int64(25756),
                },
                shared.VatEntryDto{
                    Amount: sdk.Float64(4793.85),
                    ID: sdk.Int64(57320),
                    Percentage: sdk.Float64(9148.64),
                    VatRateID: sdk.Int64(80061),
                },
            },
            VatTypeID: sdk.Int64(49348),
        },
        ID: 517137,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchasesPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1PurchasesID

Returns information about a single Purchases.

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
    res, err := s.Purchases.GetV1PurchasesID(ctx, operations.GetV1PurchasesIDRequest{
        ID: 292888,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchaseDto != nil {
        // handle response
    }
}
```
