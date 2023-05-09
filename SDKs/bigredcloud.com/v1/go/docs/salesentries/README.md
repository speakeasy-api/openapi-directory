# SalesEntries

### Available Operations

* [SalesEntriesDelete](#salesentriesdelete) - Removes an existing Sales Entry.
* [SalesEntriesGet](#salesentriesget) - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesEntriesPost](#salesentriespost) - Creates a new Sales Entry.
* [SalesEntriesProcessBatch](#salesentriesprocessbatch) - Processes a batch of Sales Entries.
* [SalesEntriesPut](#salesentriesput) - Updates an existing Sales Entry.
* [GetV1SalesEntriesID](#getv1salesentriesid) - Returns information about a single Sales Entry.

## SalesEntriesDelete

Removes an existing Sales Entry.

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
    res, err := s.SalesEntries.SalesEntriesDelete(ctx, operations.SalesEntriesDeleteRequest{
        ID: 694088,
        Timestamp: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesEntriesDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesEntriesGet

Returns a list of company's Sales Entries. Supports OData querying protocol.
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
    res, err := s.SalesEntries.SalesEntriesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSalesEntryQueryDto != nil {
        // handle response
    }
}
```

## SalesEntriesPost

Creates a new Sales Entry.

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
    res, err := s.SalesEntries.SalesEntriesPost(ctx, shared.SalesEntryDto{
        AcCode: sdk.String("porro"),
        AcEntries: []shared.AcEntryDto{
            shared.AcEntryDto{
                AccountCode: sdk.String("magni"),
                AnalysisCategoryID: sdk.Int64(471207),
                Description: sdk.String("voluptas"),
                ID: sdk.Int64(658199),
                Value: sdk.Float64(4137.8),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("alias"),
                AnalysisCategoryID: sdk.Int64(686380),
                Description: sdk.String("aut"),
                ID: sdk.Int64(295892),
                Value: sdk.Float64(8027.34),
            },
            shared.AcEntryDto{
                AccountCode: sdk.String("aliquam"),
                AnalysisCategoryID: sdk.Int64(613702),
                Description: sdk.String("ullam"),
                ID: sdk.Int64(755738),
                Value: sdk.Float64(8103.02),
            },
        },
        BookTranTypeID: sdk.Int64(378403),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("unde"),
                ID: sdk.Int64(75277),
                UserDefinedFieldID: sdk.Int64(469170),
                Value: sdk.String("inventore"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("libero"),
                ID: sdk.Int64(371287),
                UserDefinedFieldID: sdk.Int64(97659),
                Value: sdk.String("cumque"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("dicta"),
                ID: sdk.Int64(688684),
                UserDefinedFieldID: sdk.Int64(813224),
                Value: sdk.String("facilis"),
            },
        },
        CustomerID: sdk.Int64(105372),
        DetailCollection: []string{
            "delectus",
            "labore",
            "expedita",
            "corrupti",
        },
        Details: sdk.String("rem"),
        EntryDate: types.MustTimeFromString("2021-03-25T03:12:44.676Z"),
        ID: sdk.Int64(739633),
        NetGoods: sdk.Float64(8633.3),
        NetServices: sdk.Float64(9568.71),
        Note: sdk.String("quo"),
        ProcDate: types.MustTimeFromString("2022-03-15T23:42:52.032Z"),
        Reference: sdk.String("minus"),
        Timestamp: sdk.String("porro"),
        Total: sdk.Float64(6599.71),
        TotalNet: sdk.Float64(5697.06),
        TotalVAT: sdk.Float64(5802.38),
        Unpaid: sdk.Float64(7268.51),
        VatEntries: []shared.VatEntryDto{
            shared.VatEntryDto{
                Amount: sdk.Float64(4571.5),
                ID: sdk.Int64(944033),
                Percentage: sdk.Float64(8022.16),
                VatRateID: sdk.Int64(36691),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(7435.31),
                ID: sdk.Int64(147400),
                Percentage: sdk.Float64(8662.92),
                VatRateID: sdk.Int64(756287),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(9274.9),
                ID: sdk.Int64(83791),
                Percentage: sdk.Float64(136.37),
                VatRateID: sdk.Int64(516124),
            },
            shared.VatEntryDto{
                Amount: sdk.Float64(4804.21),
                ID: sdk.Int64(219860),
                Percentage: sdk.Float64(9171.52),
                VatRateID: sdk.Int64(274295),
            },
        },
        VatTypeID: sdk.Int64(169935),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesEntriesPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesEntriesProcessBatch

Processes a batch of Sales Entries.

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
    res, err := s.SalesEntries.SalesEntriesProcessBatch(ctx, []shared.BatchItemSalesEntryDto{
        shared.BatchItemSalesEntryDto{
            Item: &shared.SalesEntryDto{
                AcCode: sdk.String("doloremque"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("eum"),
                        AnalysisCategoryID: sdk.Int64(873320),
                        Description: sdk.String("eum"),
                        ID: sdk.Int64(444479),
                        Value: sdk.Float64(5311.95),
                    },
                },
                BookTranTypeID: sdk.Int64(502393),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("atque"),
                        ID: sdk.Int64(697994),
                        UserDefinedFieldID: sdk.Int64(645544),
                        Value: sdk.String("atque"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("nostrum"),
                        ID: sdk.Int64(542340),
                        UserDefinedFieldID: sdk.Int64(101107),
                        Value: sdk.String("est"),
                    },
                },
                CustomerID: sdk.Int64(318379),
                DetailCollection: []string{
                    "magni",
                    "quae",
                    "quas",
                },
                Details: sdk.String("placeat"),
                EntryDate: types.MustTimeFromString("2022-09-18T10:40:00.413Z"),
                ID: sdk.Int64(958068),
                NetGoods: sdk.Float64(9016.51),
                NetServices: sdk.Float64(9657.35),
                Note: sdk.String("officia"),
                ProcDate: types.MustTimeFromString("2021-06-22T09:01:11.589Z"),
                Reference: sdk.String("natus"),
                Timestamp: sdk.String("quaerat"),
                Total: sdk.Float64(9853.79),
                TotalNet: sdk.Float64(1560.98),
                TotalVAT: sdk.Float64(8872.84),
                Unpaid: sdk.Float64(6514.67),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(3370.81),
                        ID: sdk.Int64(313590),
                        Percentage: sdk.Float64(4302.35),
                        VatRateID: sdk.Int64(365539),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(8493.37),
                        ID: sdk.Int64(201266),
                        Percentage: sdk.Float64(223.31),
                        VatRateID: sdk.Int64(487148),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(7943.06),
                        ID: sdk.Int64(990369),
                        Percentage: sdk.Float64(9242.93),
                        VatRateID: sdk.Int64(912151),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(5062.5),
                        ID: sdk.Int64(118349),
                        Percentage: sdk.Float64(1441.79),
                        VatRateID: sdk.Int64(25190),
                    },
                },
                VatTypeID: sdk.Int64(396234),
            },
            OpCode: shared.BatchItemSalesEntryDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSalesEntryDto{
            Item: &shared.SalesEntryDto{
                AcCode: sdk.String("sed"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("sunt"),
                        AnalysisCategoryID: sdk.Int64(200190),
                        Description: sdk.String("delectus"),
                        ID: sdk.Int64(673653),
                        Value: sdk.Float64(3034.21),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("deserunt"),
                        AnalysisCategoryID: sdk.Int64(266680),
                        Description: sdk.String("sunt"),
                        ID: sdk.Int64(771092),
                        Value: sdk.Float64(2596),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("voluptatum"),
                        AnalysisCategoryID: sdk.Int64(60078),
                        Description: sdk.String("at"),
                        ID: sdk.Int64(209860),
                        Value: sdk.Float64(9998.54),
                    },
                },
                BookTranTypeID: sdk.Int64(132305),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("sequi"),
                        ID: sdk.Int64(143078),
                        UserDefinedFieldID: sdk.Int64(685467),
                        Value: sdk.String("hic"),
                    },
                },
                CustomerID: sdk.Int64(49499),
                DetailCollection: []string{
                    "architecto",
                },
                Details: sdk.String("aperiam"),
                EntryDate: types.MustTimeFromString("2022-02-20T23:13:41.697Z"),
                ID: sdk.Int64(316541),
                NetGoods: sdk.Float64(735.74),
                NetServices: sdk.Float64(2987.5),
                Note: sdk.String("delectus"),
                ProcDate: types.MustTimeFromString("2022-03-29T11:57:17.823Z"),
                Reference: sdk.String("nobis"),
                Timestamp: sdk.String("ex"),
                Total: sdk.Float64(9980.23),
                TotalNet: sdk.Float64(651.18),
                TotalVAT: sdk.Float64(5339.78),
                Unpaid: sdk.Float64(7116.15),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(5698.34),
                        ID: sdk.Int64(396610),
                        Percentage: sdk.Float64(1513.85),
                        VatRateID: sdk.Int64(106682),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(6273.41),
                        ID: sdk.Int64(408774),
                        Percentage: sdk.Float64(6573.01),
                        VatRateID: sdk.Int64(296128),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(9454.19),
                        ID: sdk.Int64(493407),
                        Percentage: sdk.Float64(4578.35),
                        VatRateID: sdk.Int64(657044),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(5124.88),
                        ID: sdk.Int64(461050),
                        Percentage: sdk.Float64(9085.39),
                        VatRateID: sdk.Int64(935161),
                    },
                },
                VatTypeID: sdk.Int64(246402),
            },
            OpCode: shared.BatchItemSalesEntryDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSalesEntryDto{
            Item: &shared.SalesEntryDto{
                AcCode: sdk.String("eius"),
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("itaque"),
                        AnalysisCategoryID: sdk.Int64(489685),
                        Description: sdk.String("ipsam"),
                        ID: sdk.Int64(131687),
                        Value: sdk.Float64(7716.32),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("aliquid"),
                        AnalysisCategoryID: sdk.Int64(339843),
                        Description: sdk.String("facilis"),
                        ID: sdk.Int64(218128),
                        Value: sdk.Float64(2848.85),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("quaerat"),
                        AnalysisCategoryID: sdk.Int64(103988),
                        Description: sdk.String("praesentium"),
                        ID: sdk.Int64(907899),
                        Value: sdk.Float64(2217.81),
                    },
                },
                BookTranTypeID: sdk.Int64(709051),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("iste"),
                        ID: sdk.Int64(74921),
                        UserDefinedFieldID: sdk.Int64(792499),
                        Value: sdk.String("quos"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("temporibus"),
                        ID: sdk.Int64(576657),
                        UserDefinedFieldID: sdk.Int64(483459),
                        Value: sdk.String("enim"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("accusamus"),
                        ID: sdk.Int64(44467),
                        UserDefinedFieldID: sdk.Int64(916419),
                        Value: sdk.String("laudantium"),
                    },
                },
                CustomerID: sdk.Int64(271551),
                DetailCollection: []string{
                    "omnis",
                },
                Details: sdk.String("illum"),
                EntryDate: types.MustTimeFromString("2021-02-06T23:02:21.782Z"),
                ID: sdk.Int64(537946),
                NetGoods: sdk.Float64(2649.58),
                NetServices: sdk.Float64(9376.64),
                Note: sdk.String("architecto"),
                ProcDate: types.MustTimeFromString("2022-09-18T08:16:52.982Z"),
                Reference: sdk.String("maiores"),
                Timestamp: sdk.String("sequi"),
                Total: sdk.Float64(9021.32),
                TotalNet: sdk.Float64(89.04),
                TotalVAT: sdk.Float64(4587.23),
                Unpaid: sdk.Float64(8913.02),
                VatEntries: []shared.VatEntryDto{
                    shared.VatEntryDto{
                        Amount: sdk.Float64(7890.16),
                        ID: sdk.Int64(769047),
                        Percentage: sdk.Float64(3028.78),
                        VatRateID: sdk.Int64(677895),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(6448.27),
                        ID: sdk.Int64(319834),
                        Percentage: sdk.Float64(9704.11),
                        VatRateID: sdk.Int64(196451),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(7855.55),
                        ID: sdk.Int64(671528),
                        Percentage: sdk.Float64(7489.73),
                        VatRateID: sdk.Int64(842974),
                    },
                    shared.VatEntryDto{
                        Amount: sdk.Float64(6076.24),
                        ID: sdk.Int64(16252),
                        Percentage: sdk.Float64(3699.41),
                        VatRateID: sdk.Int64(642804),
                    },
                },
                VatTypeID: sdk.Int64(584640),
            },
            OpCode: shared.BatchItemSalesEntryDtoOpCodeEnumTwo.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesEntriesProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesEntriesPut

Updates an existing Sales Entry.

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
    res, err := s.SalesEntries.SalesEntriesPut(ctx, operations.SalesEntriesPutRequest{
        SalesEntryDto: shared.SalesEntryDto{
            AcCode: sdk.String("quia"),
            AcEntries: []shared.AcEntryDto{
                shared.AcEntryDto{
                    AccountCode: sdk.String("accusantium"),
                    AnalysisCategoryID: sdk.Int64(321473),
                    Description: sdk.String("nisi"),
                    ID: sdk.Int64(474185),
                    Value: sdk.Float64(1541.3),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("laudantium"),
                    AnalysisCategoryID: sdk.Int64(152742),
                    Description: sdk.String("odit"),
                    ID: sdk.Int64(479830),
                    Value: sdk.Float64(7128.93),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("eos"),
                    AnalysisCategoryID: sdk.Int64(830477),
                    Description: sdk.String("nesciunt"),
                    ID: sdk.Int64(57909),
                    Value: sdk.Float64(5751.39),
                },
                shared.AcEntryDto{
                    AccountCode: sdk.String("dolore"),
                    AnalysisCategoryID: sdk.Int64(457063),
                    Description: sdk.String("accusantium"),
                    ID: sdk.Int64(718119),
                    Value: sdk.Float64(9565.45),
                },
            },
            BookTranTypeID: sdk.Int64(463050),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("aliquam"),
                    ID: sdk.Int64(964201),
                    UserDefinedFieldID: sdk.Int64(635868),
                    Value: sdk.String("voluptatum"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("iusto"),
                    ID: sdk.Int64(802069),
                    UserDefinedFieldID: sdk.Int64(977583),
                    Value: sdk.String("voluptas"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("non"),
                    ID: sdk.Int64(353819),
                    UserDefinedFieldID: sdk.Int64(675058),
                    Value: sdk.String("voluptas"),
                },
            },
            CustomerID: sdk.Int64(987371),
            DetailCollection: []string{
                "recusandae",
                "corporis",
                "non",
            },
            Details: sdk.String("necessitatibus"),
            EntryDate: types.MustTimeFromString("2021-01-13T05:01:27.465Z"),
            ID: sdk.Int64(386538),
            NetGoods: sdk.Float64(304.26),
            NetServices: sdk.Float64(7594.9),
            Note: sdk.String("sequi"),
            ProcDate: types.MustTimeFromString("2022-11-21T00:41:23.553Z"),
            Reference: sdk.String("voluptatibus"),
            Timestamp: sdk.String("doloremque"),
            Total: sdk.Float64(1494.98),
            TotalNet: sdk.Float64(2277.41),
            TotalVAT: sdk.Float64(6995.36),
            Unpaid: sdk.Float64(4467.93),
            VatEntries: []shared.VatEntryDto{
                shared.VatEntryDto{
                    Amount: sdk.Float64(8369.91),
                    ID: sdk.Int64(186937),
                    Percentage: sdk.Float64(2218.24),
                    VatRateID: sdk.Int64(390854),
                },
                shared.VatEntryDto{
                    Amount: sdk.Float64(4939.45),
                    ID: sdk.Int64(971360),
                    Percentage: sdk.Float64(9296.19),
                    VatRateID: sdk.Int64(114767),
                },
            },
            VatTypeID: sdk.Int64(667215),
        },
        ID: 33093,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesEntriesPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1SalesEntriesID

Returns information about a single Sales Entry.

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
    res, err := s.SalesEntries.GetV1SalesEntriesID(ctx, operations.GetV1SalesEntriesIDRequest{
        ID: 798079,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesEntryDto != nil {
        // handle response
    }
}
```
