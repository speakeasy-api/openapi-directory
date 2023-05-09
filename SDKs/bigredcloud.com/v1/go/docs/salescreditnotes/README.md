# SalesCreditNotes

### Available Operations

* [SalesCreditNotesDelete](#salescreditnotesdelete) - Removes an existing Sales Credit Note.
* [SalesCreditNotesGet](#salescreditnotesget) - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesCreditNotesPost](#salescreditnotespost) - Creates a new Sales Credit Note.
* [SalesCreditNotesProcessBatch](#salescreditnotesprocessbatch) - Processes a batch of Sales Credit Notes.
* [SalesCreditNotesPut](#salescreditnotesput) - Updates an existing Sales Credit Note.
* [GetV1SalesCreditNotesID](#getv1salescreditnotesid) - Returns information about a single Sales Credit Note.

## SalesCreditNotesDelete

Removes an existing Sales Credit Note.

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
    res, err := s.SalesCreditNotes.SalesCreditNotesDelete(ctx, operations.SalesCreditNotesDeleteRequest{
        ID: 700856,
        Timestamp: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesCreditNotesDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesCreditNotesGet

Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
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
    res, err := s.SalesCreditNotes.SalesCreditNotesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSalesCreditNoteQueryDto != nil {
        // handle response
    }
}
```

## SalesCreditNotesPost

Creates a new Sales Credit Note.

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
    res, err := s.SalesCreditNotes.SalesCreditNotesPost(ctx, shared.SalesInvoiceCreditNoteDto{
        AcCode: sdk.String("voluptates"),
        BookTranTypeID: sdk.Int64(251627),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("quia"),
                ID: sdk.Int64(354225),
                UserDefinedFieldID: sdk.Int64(786860),
                Value: sdk.String("dicta"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("voluptatibus"),
                ID: sdk.Int64(754901),
                UserDefinedFieldID: sdk.Int64(62035),
                Value: sdk.String("officiis"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("architecto"),
                ID: sdk.Int64(100251),
                UserDefinedFieldID: sdk.Int64(317898),
                Value: sdk.String("optio"),
            },
        },
        CustomerID: sdk.Int64(525951),
        DeliveryTo: []string{
            "facilis",
        },
        Details: sdk.String("reiciendis"),
        EntryDate: types.MustTimeFromString("2021-02-26T12:16:30.063Z"),
        ID: sdk.Int64(117819),
        LoType: sdk.String("quos"),
        NetGoods: sdk.Float64(3563.15),
        NetServices: sdk.Float64(2959.5),
        Note: sdk.String("modi"),
        OurReference: sdk.String("itaque"),
        ProcDate: types.MustTimeFromString("2022-03-15T19:59:59.350Z"),
        ProductTrans: []shared.ProductTranDto{
            shared.ProductTranDto{
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("vero"),
                        AnalysisCategoryID: sdk.Int64(985109),
                        Description: sdk.String("impedit"),
                        ID: sdk.Int64(783397),
                        Value: sdk.Float64(8838.19),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("totam"),
                        AnalysisCategoryID: sdk.Int64(969168),
                        Description: sdk.String("ab"),
                        ID: sdk.Int64(573444),
                        Value: sdk.Float64(4724.14),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("esse"),
                        AnalysisCategoryID: sdk.Int64(438256),
                        Description: sdk.String("odio"),
                        ID: sdk.Int64(202796),
                        Value: sdk.Float64(8955.13),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("vel"),
                        AnalysisCategoryID: sdk.Int64(208683),
                        Description: sdk.String("corporis"),
                        ID: sdk.Int64(375350),
                        Value: sdk.Float64(1636.84),
                    },
                },
                Amount: sdk.Float64(6411.33),
                AmountNet: 4413.74,
                ID: sdk.Int64(716033),
                Percentage: sdk.Float64(2628),
                ProductCode: sdk.String("ipsa"),
                ProductID: sdk.Int64(522062),
                Quantity: sdk.Float64(9781.54),
                TranNotes: []string{
                    "veniam",
                },
                UnitPrice: sdk.Float64(9062.32),
                Vat: sdk.Float64(2060.63),
                VatAnalysisTypeID: sdk.Int64(816365),
                VatRateID: sdk.Int64(307173),
            },
        },
        QuoteID: sdk.Int64(552581),
        Reference: sdk.String("doloribus"),
        SaleRepCode: sdk.String("fugiat"),
        SaleRepID: sdk.Int64(668577),
        Timestamp: sdk.String("delectus"),
        Total: sdk.Float64(2452.78),
        TotalNet: sdk.Float64(1105.22),
        TotalVAT: sdk.Float64(2010.96),
        Unpaid: sdk.Float64(6308.32),
        VatTypeID: sdk.Int64(74895),
        YourReference: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesCreditNotesPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesCreditNotesProcessBatch

Processes a batch of Sales Credit Notes.

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
    res, err := s.SalesCreditNotes.SalesCreditNotesProcessBatch(ctx, []shared.BatchItemSalesInvoiceCreditNoteDto{
        shared.BatchItemSalesInvoiceCreditNoteDto{
            Item: &shared.SalesInvoiceCreditNoteDto{
                AcCode: sdk.String("doloribus"),
                BookTranTypeID: sdk.Int64(823753),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("incidunt"),
                        ID: sdk.Int64(128021),
                        UserDefinedFieldID: sdk.Int64(368491),
                        Value: sdk.String("cupiditate"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("optio"),
                        ID: sdk.Int64(2064),
                        UserDefinedFieldID: sdk.Int64(695947),
                        Value: sdk.String("nesciunt"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("commodi"),
                        ID: sdk.Int64(956124),
                        UserDefinedFieldID: sdk.Int64(164319),
                        Value: sdk.String("veniam"),
                    },
                },
                CustomerID: sdk.Int64(893773),
                DeliveryTo: []string{
                    "sint",
                    "ut",
                    "numquam",
                },
                Details: sdk.String("tenetur"),
                EntryDate: types.MustTimeFromString("2022-04-10T01:49:31.506Z"),
                ID: sdk.Int64(448386),
                LoType: sdk.String("minima"),
                NetGoods: sdk.Float64(4031.47),
                NetServices: sdk.Float64(7917.62),
                Note: sdk.String("ab"),
                OurReference: sdk.String("beatae"),
                ProcDate: types.MustTimeFromString("2021-10-28T09:51:29.423Z"),
                ProductTrans: []shared.ProductTranDto{
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("ducimus"),
                                AnalysisCategoryID: sdk.Int64(683727),
                                Description: sdk.String("minima"),
                                ID: sdk.Int64(102446),
                                Value: sdk.Float64(1814.76),
                            },
                        },
                        Amount: sdk.Float64(3970.26),
                        AmountNet: 1662.89,
                        ID: sdk.Int64(276650),
                        Percentage: sdk.Float64(2404.9),
                        ProductCode: sdk.String("praesentium"),
                        ProductID: sdk.Int64(220528),
                        Quantity: sdk.Float64(3498.98),
                        TranNotes: []string{
                            "facilis",
                            "impedit",
                            "sit",
                        },
                        UnitPrice: sdk.Float64(3634.82),
                        Vat: sdk.Float64(6339.87),
                        VatAnalysisTypeID: sdk.Int64(159393),
                        VatRateID: sdk.Int64(230571),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("modi"),
                                AnalysisCategoryID: sdk.Int64(332831),
                                Description: sdk.String("quod"),
                                ID: sdk.Int64(932250),
                                Value: sdk.Float64(9555.69),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("quisquam"),
                                AnalysisCategoryID: sdk.Int64(316550),
                                Description: sdk.String("doloribus"),
                                ID: sdk.Int64(826806),
                                Value: sdk.Float64(8873.63),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("architecto"),
                                AnalysisCategoryID: sdk.Int64(5315),
                                Description: sdk.String("culpa"),
                                ID: sdk.Int64(60335),
                                Value: sdk.Float64(7510.33),
                            },
                        },
                        Amount: sdk.Float64(8981.93),
                        AmountNet: 1559.78,
                        ID: sdk.Int64(118932),
                        Percentage: sdk.Float64(4260.02),
                        ProductCode: sdk.String("perspiciatis"),
                        ProductID: sdk.Int64(892708),
                        Quantity: sdk.Float64(3548.21),
                        TranNotes: []string{
                            "accusantium",
                        },
                        UnitPrice: sdk.Float64(180.96),
                        Vat: sdk.Float64(828.76),
                        VatAnalysisTypeID: sdk.Int64(590585),
                        VatRateID: sdk.Int64(765833),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("quibusdam"),
                                AnalysisCategoryID: sdk.Int64(798690),
                                Description: sdk.String("nemo"),
                                ID: sdk.Int64(923456),
                                Value: sdk.Float64(2467.72),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("magnam"),
                                AnalysisCategoryID: sdk.Int64(493591),
                                Description: sdk.String("laboriosam"),
                                ID: sdk.Int64(152283),
                                Value: sdk.Float64(4862.72),
                            },
                        },
                        Amount: sdk.Float64(6169.41),
                        AmountNet: 5881.52,
                        ID: sdk.Int64(739508),
                        Percentage: sdk.Float64(9838.54),
                        ProductCode: sdk.String("facilis"),
                        ProductID: sdk.Int64(697330),
                        Quantity: sdk.Float64(9320.8),
                        TranNotes: []string{
                            "unde",
                            "modi",
                        },
                        UnitPrice: sdk.Float64(5951.98),
                        Vat: sdk.Float64(9446.26),
                        VatAnalysisTypeID: sdk.Int64(736985),
                        VatRateID: sdk.Int64(135548),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("nam"),
                                AnalysisCategoryID: sdk.Int64(279172),
                                Description: sdk.String("recusandae"),
                                ID: sdk.Int64(797254),
                                Value: sdk.Float64(6646.66),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("saepe"),
                                AnalysisCategoryID: sdk.Int64(423054),
                                Description: sdk.String("quo"),
                                ID: sdk.Int64(198991),
                                Value: sdk.Float64(8493.83),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("nemo"),
                                AnalysisCategoryID: sdk.Int64(848722),
                                Description: sdk.String("facilis"),
                                ID: sdk.Int64(247618),
                                Value: sdk.Float64(6495.34),
                            },
                        },
                        Amount: sdk.Float64(8270.51),
                        AmountNet: 9279.77,
                        ID: sdk.Int64(718981),
                        Percentage: sdk.Float64(8668.61),
                        ProductCode: sdk.String("ad"),
                        ProductID: sdk.Int64(816151),
                        Quantity: sdk.Float64(6746.83),
                        TranNotes: []string{
                            "laborum",
                            "incidunt",
                            "maxime",
                            "ipsam",
                        },
                        UnitPrice: sdk.Float64(0.6),
                        Vat: sdk.Float64(3798.94),
                        VatAnalysisTypeID: sdk.Int64(647210),
                        VatRateID: sdk.Int64(560451),
                    },
                },
                QuoteID: sdk.Int64(672889),
                Reference: sdk.String("est"),
                SaleRepCode: sdk.String("occaecati"),
                SaleRepID: sdk.Int64(286716),
                Timestamp: sdk.String("quo"),
                Total: sdk.Float64(194.62),
                TotalNet: sdk.Float64(1435.28),
                TotalVAT: sdk.Float64(3992.22),
                Unpaid: sdk.Float64(3013.09),
                VatTypeID: sdk.Int64(308528),
                YourReference: sdk.String("eligendi"),
            },
            OpCode: shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSalesInvoiceCreditNoteDto{
            Item: &shared.SalesInvoiceCreditNoteDto{
                AcCode: sdk.String("nostrum"),
                BookTranTypeID: sdk.Int64(888265),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("nulla"),
                        ID: sdk.Int64(621393),
                        UserDefinedFieldID: sdk.Int64(653000),
                        Value: sdk.String("magnam"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("nostrum"),
                        ID: sdk.Int64(460909),
                        UserDefinedFieldID: sdk.Int64(548849),
                        Value: sdk.String("fuga"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("facere"),
                        ID: sdk.Int64(773659),
                        UserDefinedFieldID: sdk.Int64(98610),
                        Value: sdk.String("deserunt"),
                    },
                },
                CustomerID: sdk.Int64(801075),
                DeliveryTo: []string{
                    "doloremque",
                    "voluptatem",
                },
                Details: sdk.String("facere"),
                EntryDate: types.MustTimeFromString("2020-07-30T17:13:23.320Z"),
                ID: sdk.Int64(9375),
                LoType: sdk.String("eaque"),
                NetGoods: sdk.Float64(1023.9),
                NetServices: sdk.Float64(6271.61),
                Note: sdk.String("porro"),
                OurReference: sdk.String("blanditiis"),
                ProcDate: types.MustTimeFromString("2022-10-31T00:22:51.438Z"),
                ProductTrans: []shared.ProductTranDto{
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("necessitatibus"),
                                AnalysisCategoryID: sdk.Int64(773259),
                                Description: sdk.String("ipsa"),
                                ID: sdk.Int64(567693),
                                Value: sdk.Float64(9509.56),
                            },
                        },
                        Amount: sdk.Float64(9830),
                        AmountNet: 5144.62,
                        ID: sdk.Int64(982248),
                        Percentage: sdk.Float64(6.91),
                        ProductCode: sdk.String("asperiores"),
                        ProductID: sdk.Int64(523365),
                        Quantity: sdk.Float64(1186.15),
                        TranNotes: []string{
                            "earum",
                            "doloribus",
                        },
                        UnitPrice: sdk.Float64(2445.69),
                        Vat: sdk.Float64(2605.88),
                        VatAnalysisTypeID: sdk.Int64(458212),
                        VatRateID: sdk.Int64(446547),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("quasi"),
                                AnalysisCategoryID: sdk.Int64(203621),
                                Description: sdk.String("vero"),
                                ID: sdk.Int64(566312),
                                Value: sdk.Float64(375.34),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("qui"),
                                AnalysisCategoryID: sdk.Int64(771241),
                                Description: sdk.String("beatae"),
                                ID: sdk.Int64(278329),
                                Value: sdk.Float64(1165.58),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("odit"),
                                AnalysisCategoryID: sdk.Int64(357639),
                                Description: sdk.String("rerum"),
                                ID: sdk.Int64(4654),
                                Value: sdk.Float64(6244.98),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("vel"),
                                AnalysisCategoryID: sdk.Int64(35581),
                                Description: sdk.String("id"),
                                ID: sdk.Int64(388169),
                                Value: sdk.Float64(4016.88),
                            },
                        },
                        Amount: sdk.Float64(5556.79),
                        AmountNet: 857.94,
                        ID: sdk.Int64(356440),
                        Percentage: sdk.Float64(626.88),
                        ProductCode: sdk.String("similique"),
                        ProductID: sdk.Int64(278116),
                        Quantity: sdk.Float64(4625.83),
                        TranNotes: []string{
                            "deserunt",
                        },
                        UnitPrice: sdk.Float64(9650.95),
                        Vat: sdk.Float64(6095.37),
                        VatAnalysisTypeID: sdk.Int64(151230),
                        VatRateID: sdk.Int64(200950),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("quis"),
                                AnalysisCategoryID: sdk.Int64(586108),
                                Description: sdk.String("aliquam"),
                                ID: sdk.Int64(569287),
                                Value: sdk.Float64(9804.1),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("laudantium"),
                                AnalysisCategoryID: sdk.Int64(243904),
                                Description: sdk.String("reiciendis"),
                                ID: sdk.Int64(230305),
                                Value: sdk.Float64(3638.45),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("ipsa"),
                                AnalysisCategoryID: sdk.Int64(787916),
                                Description: sdk.String("tenetur"),
                                ID: sdk.Int64(555294),
                                Value: sdk.Float64(4760.03),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("aliquid"),
                                AnalysisCategoryID: sdk.Int64(989033),
                                Description: sdk.String("a"),
                                ID: sdk.Int64(749702),
                                Value: sdk.Float64(5983.16),
                            },
                        },
                        Amount: sdk.Float64(342.45),
                        AmountNet: 1189.17,
                        ID: sdk.Int64(795546),
                        Percentage: sdk.Float64(4175.39),
                        ProductCode: sdk.String("eveniet"),
                        ProductID: sdk.Int64(781582),
                        Quantity: sdk.Float64(7357.4),
                        TranNotes: []string{
                            "modi",
                            "voluptates",
                            "fugit",
                        },
                        UnitPrice: sdk.Float64(2593.77),
                        Vat: sdk.Float64(1940.58),
                        VatAnalysisTypeID: sdk.Int64(758194),
                        VatRateID: sdk.Int64(992887),
                    },
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("blanditiis"),
                                AnalysisCategoryID: sdk.Int64(573610),
                                Description: sdk.String("repellat"),
                                ID: sdk.Int64(955047),
                                Value: sdk.Float64(6586.04),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("maiores"),
                                AnalysisCategoryID: sdk.Int64(930429),
                                Description: sdk.String("nulla"),
                                ID: sdk.Int64(643419),
                                Value: sdk.Float64(3590.97),
                            },
                        },
                        Amount: sdk.Float64(2465.77),
                        AmountNet: 8877.01,
                        ID: sdk.Int64(315022),
                        Percentage: sdk.Float64(6386.09),
                        ProductCode: sdk.String("saepe"),
                        ProductID: sdk.Int64(429997),
                        Quantity: sdk.Float64(9220.94),
                        TranNotes: []string{
                            "officia",
                        },
                        UnitPrice: sdk.Float64(7701.28),
                        Vat: sdk.Float64(978.96),
                        VatAnalysisTypeID: sdk.Int64(502106),
                        VatRateID: sdk.Int64(260911),
                    },
                },
                QuoteID: sdk.Int64(786189),
                Reference: sdk.String("eos"),
                SaleRepCode: sdk.String("nobis"),
                SaleRepID: sdk.Int64(620054),
                Timestamp: sdk.String("minus"),
                Total: sdk.Float64(1543.89),
                TotalNet: sdk.Float64(3006.51),
                TotalVAT: sdk.Float64(4408.47),
                Unpaid: sdk.Float64(8007.99),
                VatTypeID: sdk.Int64(552440),
                YourReference: sdk.String("corrupti"),
            },
            OpCode: shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesCreditNotesProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesCreditNotesPut

Updates an existing Sales Credit Note.

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
    res, err := s.SalesCreditNotes.SalesCreditNotesPut(ctx, operations.SalesCreditNotesPutRequest{
        SalesInvoiceCreditNoteDto: shared.SalesInvoiceCreditNoteDto{
            AcCode: sdk.String("molestiae"),
            BookTranTypeID: sdk.Int64(227156),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("modi"),
                    ID: sdk.Int64(21358),
                    UserDefinedFieldID: sdk.Int64(897058),
                    Value: sdk.String("architecto"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("molestias"),
                    ID: sdk.Int64(292177),
                    UserDefinedFieldID: sdk.Int64(125811),
                    Value: sdk.String("maiores"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("neque"),
                    ID: sdk.Int64(139745),
                    UserDefinedFieldID: sdk.Int64(936845),
                    Value: sdk.String("veniam"),
                },
            },
            CustomerID: sdk.Int64(373106),
            DeliveryTo: []string{
                "exercitationem",
            },
            Details: sdk.String("veniam"),
            EntryDate: types.MustTimeFromString("2022-09-06T01:56:29.627Z"),
            ID: sdk.Int64(394161),
            LoType: sdk.String("tenetur"),
            NetGoods: sdk.Float64(3382.81),
            NetServices: sdk.Float64(8451.54),
            Note: sdk.String("nemo"),
            OurReference: sdk.String("suscipit"),
            ProcDate: types.MustTimeFromString("2022-12-04T21:04:08.252Z"),
            ProductTrans: []shared.ProductTranDto{
                shared.ProductTranDto{
                    AcEntries: []shared.AcEntryDto{
                        shared.AcEntryDto{
                            AccountCode: sdk.String("perferendis"),
                            AnalysisCategoryID: sdk.Int64(660536),
                            Description: sdk.String("sapiente"),
                            ID: sdk.Int64(152364),
                            Value: sdk.Float64(8235.72),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("repellat"),
                            AnalysisCategoryID: sdk.Int64(921060),
                            Description: sdk.String("architecto"),
                            ID: sdk.Int64(240696),
                            Value: sdk.Float64(8671.15),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("harum"),
                            AnalysisCategoryID: sdk.Int64(294266),
                            Description: sdk.String("voluptatibus"),
                            ID: sdk.Int64(435353),
                            Value: sdk.Float64(1270.87),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("minus"),
                            AnalysisCategoryID: sdk.Int64(746688),
                            Description: sdk.String("dolorum"),
                            ID: sdk.Int64(242531),
                            Value: sdk.Float64(9378.65),
                        },
                    },
                    Amount: sdk.Float64(5100.2),
                    AmountNet: 6211.4,
                    ID: sdk.Int64(252473),
                    Percentage: sdk.Float64(978.1),
                    ProductCode: sdk.String("mollitia"),
                    ProductID: sdk.Int64(884361),
                    Quantity: sdk.Float64(6875.89),
                    TranNotes: []string{
                        "doloremque",
                        "expedita",
                        "corrupti",
                        "eaque",
                    },
                    UnitPrice: sdk.Float64(6431.99),
                    Vat: sdk.Float64(3962.23),
                    VatAnalysisTypeID: sdk.Int64(570423),
                    VatRateID: sdk.Int64(167435),
                },
                shared.ProductTranDto{
                    AcEntries: []shared.AcEntryDto{
                        shared.AcEntryDto{
                            AccountCode: sdk.String("possimus"),
                            AnalysisCategoryID: sdk.Int64(220824),
                            Description: sdk.String("rerum"),
                            ID: sdk.Int64(153582),
                            Value: sdk.Float64(8830.78),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("optio"),
                            AnalysisCategoryID: sdk.Int64(966576),
                            Description: sdk.String("minus"),
                            ID: sdk.Int64(774748),
                            Value: sdk.Float64(5503.38),
                        },
                    },
                    Amount: sdk.Float64(9942.34),
                    AmountNet: 5323.26,
                    ID: sdk.Int64(614770),
                    Percentage: sdk.Float64(3611.06),
                    ProductCode: sdk.String("accusantium"),
                    ProductID: sdk.Int64(75850),
                    Quantity: sdk.Float64(142.51),
                    TranNotes: []string{
                        "nostrum",
                        "at",
                        "possimus",
                        "neque",
                    },
                    UnitPrice: sdk.Float64(8661.35),
                    Vat: sdk.Float64(4248.53),
                    VatAnalysisTypeID: sdk.Int64(960813),
                    VatRateID: sdk.Int64(652515),
                },
                shared.ProductTranDto{
                    AcEntries: []shared.AcEntryDto{
                        shared.AcEntryDto{
                            AccountCode: sdk.String("quos"),
                            AnalysisCategoryID: sdk.Int64(44571),
                            Description: sdk.String("non"),
                            ID: sdk.Int64(913284),
                            Value: sdk.Float64(3240.52),
                        },
                    },
                    Amount: sdk.Float64(3050.47),
                    AmountNet: 7881.65,
                    ID: sdk.Int64(557987),
                    Percentage: sdk.Float64(1624.5),
                    ProductCode: sdk.String("maiores"),
                    ProductID: sdk.Int64(81581),
                    Quantity: sdk.Float64(4004.48),
                    TranNotes: []string{
                        "est",
                        "dolor",
                        "aliquid",
                    },
                    UnitPrice: sdk.Float64(2323.16),
                    Vat: sdk.Float64(7681.95),
                    VatAnalysisTypeID: sdk.Int64(525917),
                    VatRateID: sdk.Int64(527715),
                },
            },
            QuoteID: sdk.Int64(498534),
            Reference: sdk.String("adipisci"),
            SaleRepCode: sdk.String("recusandae"),
            SaleRepID: sdk.Int64(271306),
            Timestamp: sdk.String("blanditiis"),
            Total: sdk.Float64(2580.59),
            TotalNet: sdk.Float64(1963.74),
            TotalVAT: sdk.Float64(5323.2),
            Unpaid: sdk.Float64(270.78),
            VatTypeID: sdk.Int64(703189),
            YourReference: sdk.String("veritatis"),
        },
        ID: 949280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesCreditNotesPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1SalesCreditNotesID

Returns information about a single Sales Credit Note.

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
    res, err := s.SalesCreditNotes.GetV1SalesCreditNotesID(ctx, operations.GetV1SalesCreditNotesIDRequest{
        ID: 419858,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoiceCreditNoteDto != nil {
        // handle response
    }
}
```
