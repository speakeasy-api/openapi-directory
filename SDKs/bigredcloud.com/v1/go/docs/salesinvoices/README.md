# SalesInvoices

### Available Operations

* [SalesInvoicesDelete](#salesinvoicesdelete) - Removes an existing Sales Invoice.
* [SalesInvoicesGet](#salesinvoicesget) - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesInvoicesPost](#salesinvoicespost) - Creates a new Sales Invoice.
* [SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference](#salesinvoicespostcreatesaleinvoicewithgeneratingreference) - Creates a new Sale Invoice with auto generating reference.
* [SalesInvoicesProcessBatch](#salesinvoicesprocessbatch) - Processes a batch of Sales Invoices.
* [SalesInvoicesPut](#salesinvoicesput) - Updates an existing Sales Invoice.
* [GetV1SalesInvoicesID](#getv1salesinvoicesid) - Returns information about a single Sales Invoice.

## SalesInvoicesDelete

Removes an existing Sales Invoice.

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
    res, err := s.SalesInvoices.SalesInvoicesDelete(ctx, operations.SalesInvoicesDeleteRequest{
        ID: 796117,
        Timestamp: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoicesDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesInvoicesGet

Returns a list of company's Sales Invoices. Supports OData querying protocol.
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
    res, err := s.SalesInvoices.SalesInvoicesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSalesInvoiceQueryDto != nil {
        // handle response
    }
}
```

## SalesInvoicesPost

Creates a new Sales Invoice.

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
    res, err := s.SalesInvoices.SalesInvoicesPost(ctx, shared.SalesInvoiceCreditNoteDto{
        AcCode: sdk.String("possimus"),
        BookTranTypeID: sdk.Int64(980467),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("provident"),
                ID: sdk.Int64(960933),
                UserDefinedFieldID: sdk.Int64(45510),
                Value: sdk.String("similique"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("nesciunt"),
                ID: sdk.Int64(590998),
                UserDefinedFieldID: sdk.Int64(404774),
                Value: sdk.String("repellendus"),
            },
        },
        CustomerID: sdk.Int64(601277),
        DeliveryTo: []string{
            "impedit",
        },
        Details: sdk.String("sequi"),
        EntryDate: types.MustTimeFromString("2022-09-18T04:38:22.769Z"),
        ID: sdk.Int64(710059),
        LoType: sdk.String("in"),
        NetGoods: sdk.Float64(7898.7),
        NetServices: sdk.Float64(1237.95),
        Note: sdk.String("enim"),
        OurReference: sdk.String("nulla"),
        ProcDate: types.MustTimeFromString("2020-11-08T09:26:54.228Z"),
        ProductTrans: []shared.ProductTranDto{
            shared.ProductTranDto{
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("accusamus"),
                        AnalysisCategoryID: sdk.Int64(91120),
                        Description: sdk.String("quas"),
                        ID: sdk.Int64(501462),
                        Value: sdk.Float64(7416.03),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("dicta"),
                        AnalysisCategoryID: sdk.Int64(770544),
                        Description: sdk.String("tempora"),
                        ID: sdk.Int64(908249),
                        Value: sdk.Float64(9205.48),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("sed"),
                        AnalysisCategoryID: sdk.Int64(772628),
                        Description: sdk.String("quas"),
                        ID: sdk.Int64(772057),
                        Value: sdk.Float64(4283.78),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("eligendi"),
                        AnalysisCategoryID: sdk.Int64(923159),
                        Description: sdk.String("ex"),
                        ID: sdk.Int64(105094),
                        Value: sdk.Float64(869.55),
                    },
                },
                Amount: sdk.Float64(9825.74),
                AmountNet: 9308.77,
                ID: sdk.Int64(875452),
                Percentage: sdk.Float64(6943.94),
                ProductCode: sdk.String("illo"),
                ProductID: sdk.Int64(778242),
                Quantity: sdk.Float64(4909.66),
                TranNotes: []string{
                    "distinctio",
                    "possimus",
                    "cum",
                    "suscipit",
                },
                UnitPrice: sdk.Float64(9064.95),
                Vat: sdk.Float64(9347.82),
                VatAnalysisTypeID: sdk.Int64(799866),
                VatRateID: sdk.Int64(469588),
            },
            shared.ProductTranDto{
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("ipsum"),
                        AnalysisCategoryID: sdk.Int64(498435),
                        Description: sdk.String("laudantium"),
                        ID: sdk.Int64(701786),
                        Value: sdk.Float64(6439.97),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("odit"),
                        AnalysisCategoryID: sdk.Int64(319419),
                        Description: sdk.String("sequi"),
                        ID: sdk.Int64(106806),
                        Value: sdk.Float64(4810.42),
                    },
                },
                Amount: sdk.Float64(4568.65),
                AmountNet: 2982.46,
                ID: sdk.Int64(487799),
                Percentage: sdk.Float64(8625.6),
                ProductCode: sdk.String("impedit"),
                ProductID: sdk.Int64(586277),
                Quantity: sdk.Float64(724.22),
                TranNotes: []string{
                    "laborum",
                    "illum",
                },
                UnitPrice: sdk.Float64(1479.89),
                Vat: sdk.Float64(8048.79),
                VatAnalysisTypeID: sdk.Int64(681115),
                VatRateID: sdk.Int64(998355),
            },
            shared.ProductTranDto{
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("illum"),
                        AnalysisCategoryID: sdk.Int64(845086),
                        Description: sdk.String("commodi"),
                        ID: sdk.Int64(456371),
                        Value: sdk.Float64(1274.99),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("consectetur"),
                        AnalysisCategoryID: sdk.Int64(840641),
                        Description: sdk.String("optio"),
                        ID: sdk.Int64(59757),
                        Value: sdk.Float64(9786.55),
                    },
                },
                Amount: sdk.Float64(3502.71),
                AmountNet: 6336.43,
                ID: sdk.Int64(919738),
                Percentage: sdk.Float64(1344.28),
                ProductCode: sdk.String("sapiente"),
                ProductID: sdk.Int64(204373),
                Quantity: sdk.Float64(6405.65),
                TranNotes: []string{
                    "harum",
                    "ducimus",
                },
                UnitPrice: sdk.Float64(424.54),
                Vat: sdk.Float64(201.41),
                VatAnalysisTypeID: sdk.Int64(514480),
                VatRateID: sdk.Int64(481704),
            },
        },
        QuoteID: sdk.Int64(546868),
        Reference: sdk.String("molestiae"),
        SaleRepCode: sdk.String("quis"),
        SaleRepID: sdk.Int64(435883),
        Timestamp: sdk.String("ab"),
        Total: sdk.Float64(3086.58),
        TotalNet: sdk.Float64(2289.07),
        TotalVAT: sdk.Float64(9569.42),
        Unpaid: sdk.Float64(3579.84),
        VatTypeID: sdk.Int64(666005),
        YourReference: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoicesPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference

Creates a new Sale Invoice with auto generating reference.

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
    res, err := s.SalesInvoices.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference(ctx, shared.SalesInvoiceCreditNoteDto{
        AcCode: sdk.String("quisquam"),
        BookTranTypeID: sdk.Int64(590927),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("nam"),
                ID: sdk.Int64(366147),
                UserDefinedFieldID: sdk.Int64(317632),
                Value: sdk.String("ipsam"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("minima"),
                ID: sdk.Int64(273383),
                UserDefinedFieldID: sdk.Int64(19691),
                Value: sdk.String("corrupti"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("doloremque"),
                ID: sdk.Int64(854137),
                UserDefinedFieldID: sdk.Int64(257821),
                Value: sdk.String("doloremque"),
            },
        },
        CustomerID: sdk.Int64(740245),
        DeliveryTo: []string{
            "similique",
            "porro",
            "impedit",
            "nisi",
        },
        Details: sdk.String("cumque"),
        EntryDate: types.MustTimeFromString("2021-04-15T16:56:16.616Z"),
        ID: sdk.Int64(389287),
        LoType: sdk.String("nam"),
        NetGoods: sdk.Float64(3153.87),
        NetServices: sdk.Float64(9790.11),
        Note: sdk.String("consectetur"),
        OurReference: sdk.String("necessitatibus"),
        ProcDate: types.MustTimeFromString("2021-03-29T13:04:21.901Z"),
        ProductTrans: []shared.ProductTranDto{
            shared.ProductTranDto{
                AcEntries: []shared.AcEntryDto{
                    shared.AcEntryDto{
                        AccountCode: sdk.String("adipisci"),
                        AnalysisCategoryID: sdk.Int64(34267),
                        Description: sdk.String("magnam"),
                        ID: sdk.Int64(998527),
                        Value: sdk.Float64(6076.31),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("explicabo"),
                        AnalysisCategoryID: sdk.Int64(425817),
                        Description: sdk.String("cum"),
                        ID: sdk.Int64(663062),
                        Value: sdk.Float64(8210.16),
                    },
                    shared.AcEntryDto{
                        AccountCode: sdk.String("fugit"),
                        AnalysisCategoryID: sdk.Int64(373054),
                        Description: sdk.String("nostrum"),
                        ID: sdk.Int64(196852),
                        Value: sdk.Float64(5293.1),
                    },
                },
                Amount: sdk.Float64(987.59),
                AmountNet: 6225.66,
                ID: sdk.Int64(748606),
                Percentage: sdk.Float64(2696),
                ProductCode: sdk.String("voluptate"),
                ProductID: sdk.Int64(261170),
                Quantity: sdk.Float64(7137.18),
                TranNotes: []string{
                    "voluptates",
                },
                UnitPrice: sdk.Float64(8227.11),
                Vat: sdk.Float64(1465.83),
                VatAnalysisTypeID: sdk.Int64(27946),
                VatRateID: sdk.Int64(919171),
            },
        },
        QuoteID: sdk.Int64(360635),
        Reference: sdk.String("ea"),
        SaleRepCode: sdk.String("eos"),
        SaleRepID: sdk.Int64(305267),
        Timestamp: sdk.String("blanditiis"),
        Total: sdk.Float64(9430.63),
        TotalNet: sdk.Float64(9806.49),
        TotalVAT: sdk.Float64(9906.52),
        Unpaid: sdk.Float64(4209.85),
        VatTypeID: sdk.Int64(198892),
        YourReference: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesInvoicesProcessBatch

Processes a batch of Sales Invoices.

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
    res, err := s.SalesInvoices.SalesInvoicesProcessBatch(ctx, []shared.BatchItemSalesInvoiceCreditNoteDto{
        shared.BatchItemSalesInvoiceCreditNoteDto{
            Item: &shared.SalesInvoiceCreditNoteDto{
                AcCode: sdk.String("provident"),
                BookTranTypeID: sdk.Int64(106495),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("mollitia"),
                        ID: sdk.Int64(721138),
                        UserDefinedFieldID: sdk.Int64(827314),
                        Value: sdk.String("quo"),
                    },
                },
                CustomerID: sdk.Int64(684499),
                DeliveryTo: []string{
                    "commodi",
                    "fugit",
                    "suscipit",
                },
                Details: sdk.String("voluptate"),
                EntryDate: types.MustTimeFromString("2022-08-09T00:52:52.587Z"),
                ID: sdk.Int64(589712),
                LoType: sdk.String("laboriosam"),
                NetGoods: sdk.Float64(8815.68),
                NetServices: sdk.Float64(682.92),
                Note: sdk.String("itaque"),
                OurReference: sdk.String("quisquam"),
                ProcDate: types.MustTimeFromString("2022-12-30T04:49:14.073Z"),
                ProductTrans: []shared.ProductTranDto{
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("vitae"),
                                AnalysisCategoryID: sdk.Int64(696828),
                                Description: sdk.String("sequi"),
                                ID: sdk.Int64(227431),
                                Value: sdk.Float64(3466.08),
                            },
                        },
                        Amount: sdk.Float64(8470.18),
                        AmountNet: 5065.32,
                        ID: sdk.Int64(601626),
                        Percentage: sdk.Float64(6294.61),
                        ProductCode: sdk.String("eligendi"),
                        ProductID: sdk.Int64(732142),
                        Quantity: sdk.Float64(2258.09),
                        TranNotes: []string{
                            "nobis",
                            "asperiores",
                            "temporibus",
                            "id",
                        },
                        UnitPrice: sdk.Float64(5420.17),
                        Vat: sdk.Float64(8453.65),
                        VatAnalysisTypeID: sdk.Int64(27400),
                        VatRateID: sdk.Int64(778039),
                    },
                },
                QuoteID: sdk.Int64(329973),
                Reference: sdk.String("aliquam"),
                SaleRepCode: sdk.String("provident"),
                SaleRepID: sdk.Int64(875693),
                Timestamp: sdk.String("earum"),
                Total: sdk.Float64(427.63),
                TotalNet: sdk.Float64(2175.04),
                TotalVAT: sdk.Float64(3.67),
                Unpaid: sdk.Float64(437.15),
                VatTypeID: sdk.Int64(273732),
                YourReference: sdk.String("perspiciatis"),
            },
            OpCode: shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnumTwo.ToPointer(),
        },
        shared.BatchItemSalesInvoiceCreditNoteDto{
            Item: &shared.SalesInvoiceCreditNoteDto{
                AcCode: sdk.String("atque"),
                BookTranTypeID: sdk.Int64(638363),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("architecto"),
                        ID: sdk.Int64(953564),
                        UserDefinedFieldID: sdk.Int64(673010),
                        Value: sdk.String("veritatis"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("quod"),
                        ID: sdk.Int64(951103),
                        UserDefinedFieldID: sdk.Int64(185313),
                        Value: sdk.String("accusantium"),
                    },
                },
                CustomerID: sdk.Int64(415125),
                DeliveryTo: []string{
                    "totam",
                    "tenetur",
                    "voluptate",
                },
                Details: sdk.String("quam"),
                EntryDate: types.MustTimeFromString("2022-09-02T06:41:37.594Z"),
                ID: sdk.Int64(960523),
                LoType: sdk.String("reiciendis"),
                NetGoods: sdk.Float64(7989.53),
                NetServices: sdk.Float64(4515.89),
                Note: sdk.String("inventore"),
                OurReference: sdk.String("facere"),
                ProcDate: types.MustTimeFromString("2020-12-15T16:07:38.470Z"),
                ProductTrans: []shared.ProductTranDto{
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("consectetur"),
                                AnalysisCategoryID: sdk.Int64(982409),
                                Description: sdk.String("sed"),
                                ID: sdk.Int64(657141),
                                Value: sdk.Float64(1975.19),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("eligendi"),
                                AnalysisCategoryID: sdk.Int64(528315),
                                Description: sdk.String("perferendis"),
                                ID: sdk.Int64(671690),
                                Value: sdk.Float64(6091.72),
                            },
                        },
                        Amount: sdk.Float64(4703.21),
                        AmountNet: 9451.9,
                        ID: sdk.Int64(959696),
                        Percentage: sdk.Float64(2420.13),
                        ProductCode: sdk.String("adipisci"),
                        ProductID: sdk.Int64(250298),
                        Quantity: sdk.Float64(7631.4),
                        TranNotes: []string{
                            "at",
                            "tenetur",
                            "molestias",
                            "ipsam",
                        },
                        UnitPrice: sdk.Float64(4562.22),
                        Vat: sdk.Float64(6757.55),
                        VatAnalysisTypeID: sdk.Int64(596185),
                        VatRateID: sdk.Int64(915647),
                    },
                },
                QuoteID: sdk.Int64(428810),
                Reference: sdk.String("quasi"),
                SaleRepCode: sdk.String("quas"),
                SaleRepID: sdk.Int64(484942),
                Timestamp: sdk.String("commodi"),
                Total: sdk.Float64(7807.89),
                TotalNet: sdk.Float64(4004.7),
                TotalVAT: sdk.Float64(6484.97),
                Unpaid: sdk.Float64(6953.47),
                VatTypeID: sdk.Int64(126512),
                YourReference: sdk.String("et"),
            },
            OpCode: shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSalesInvoiceCreditNoteDto{
            Item: &shared.SalesInvoiceCreditNoteDto{
                AcCode: sdk.String("magni"),
                BookTranTypeID: sdk.Int64(618073),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("a"),
                        ID: sdk.Int64(771078),
                        UserDefinedFieldID: sdk.Int64(601803),
                        Value: sdk.String("ut"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("facere"),
                        ID: sdk.Int64(377269),
                        UserDefinedFieldID: sdk.Int64(987384),
                        Value: sdk.String("recusandae"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("quisquam"),
                        ID: sdk.Int64(818078),
                        UserDefinedFieldID: sdk.Int64(491380),
                        Value: sdk.String("iste"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("provident"),
                        ID: sdk.Int64(221490),
                        UserDefinedFieldID: sdk.Int64(573247),
                        Value: sdk.String("aperiam"),
                    },
                },
                CustomerID: sdk.Int64(49456),
                DeliveryTo: []string{
                    "laboriosam",
                    "laborum",
                },
                Details: sdk.String("autem"),
                EntryDate: types.MustTimeFromString("2022-08-12T01:16:53.896Z"),
                ID: sdk.Int64(852689),
                LoType: sdk.String("doloremque"),
                NetGoods: sdk.Float64(327.75),
                NetServices: sdk.Float64(47.47),
                Note: sdk.String("velit"),
                OurReference: sdk.String("ullam"),
                ProcDate: types.MustTimeFromString("2022-10-04T11:25:09.439Z"),
                ProductTrans: []shared.ProductTranDto{
                    shared.ProductTranDto{
                        AcEntries: []shared.AcEntryDto{
                            shared.AcEntryDto{
                                AccountCode: sdk.String("maxime"),
                                AnalysisCategoryID: sdk.Int64(923935),
                                Description: sdk.String("cumque"),
                                ID: sdk.Int64(39047),
                                Value: sdk.Float64(5168.33),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("iure"),
                                AnalysisCategoryID: sdk.Int64(982927),
                                Description: sdk.String("est"),
                                ID: sdk.Int64(144058),
                                Value: sdk.Float64(842.07),
                            },
                            shared.AcEntryDto{
                                AccountCode: sdk.String("necessitatibus"),
                                AnalysisCategoryID: sdk.Int64(611970),
                                Description: sdk.String("dicta"),
                                ID: sdk.Int64(369099),
                                Value: sdk.Float64(1631.81),
                            },
                        },
                        Amount: sdk.Float64(7652.71),
                        AmountNet: 6962.19,
                        ID: sdk.Int64(247615),
                        Percentage: sdk.Float64(1095.69),
                        ProductCode: sdk.String("sunt"),
                        ProductID: sdk.Int64(565845),
                        Quantity: sdk.Float64(1070.42),
                        TranNotes: []string{
                            "ducimus",
                            "libero",
                        },
                        UnitPrice: sdk.Float64(5620.65),
                        Vat: sdk.Float64(9006.76),
                        VatAnalysisTypeID: sdk.Int64(218783),
                        VatRateID: sdk.Int64(769872),
                    },
                },
                QuoteID: sdk.Int64(550799),
                Reference: sdk.String("illum"),
                SaleRepCode: sdk.String("distinctio"),
                SaleRepID: sdk.Int64(32945),
                Timestamp: sdk.String("non"),
                Total: sdk.Float64(3101.95),
                TotalNet: sdk.Float64(101.64),
                TotalVAT: sdk.Float64(5154.33),
                Unpaid: sdk.Float64(8310.67),
                VatTypeID: sdk.Int64(415953),
                YourReference: sdk.String("quibusdam"),
            },
            OpCode: shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoicesProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesInvoicesPut

Updates an existing Sales Invoice.

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
    res, err := s.SalesInvoices.SalesInvoicesPut(ctx, operations.SalesInvoicesPutRequest{
        SalesInvoiceCreditNoteDto: shared.SalesInvoiceCreditNoteDto{
            AcCode: sdk.String("voluptas"),
            BookTranTypeID: sdk.Int64(307874),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("tenetur"),
                    ID: sdk.Int64(826797),
                    UserDefinedFieldID: sdk.Int64(294181),
                    Value: sdk.String("enim"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("ullam"),
                    ID: sdk.Int64(598193),
                    UserDefinedFieldID: sdk.Int64(3709),
                    Value: sdk.String("ex"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("quibusdam"),
                    ID: sdk.Int64(116867),
                    UserDefinedFieldID: sdk.Int64(154840),
                    Value: sdk.String("commodi"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("neque"),
                    ID: sdk.Int64(843659),
                    UserDefinedFieldID: sdk.Int64(255264),
                    Value: sdk.String("rem"),
                },
            },
            CustomerID: sdk.Int64(884622),
            DeliveryTo: []string{
                "neque",
                "corporis",
                "quod",
            },
            Details: sdk.String("dolores"),
            EntryDate: types.MustTimeFromString("2021-04-16T19:22:26.586Z"),
            ID: sdk.Int64(927021),
            LoType: sdk.String("quos"),
            NetGoods: sdk.Float64(1155.61),
            NetServices: sdk.Float64(9561.3),
            Note: sdk.String("ipsum"),
            OurReference: sdk.String("consequatur"),
            ProcDate: types.MustTimeFromString("2021-03-16T08:19:39.086Z"),
            ProductTrans: []shared.ProductTranDto{
                shared.ProductTranDto{
                    AcEntries: []shared.AcEntryDto{
                        shared.AcEntryDto{
                            AccountCode: sdk.String("labore"),
                            AnalysisCategoryID: sdk.Int64(240624),
                            Description: sdk.String("magni"),
                            ID: sdk.Int64(45677),
                            Value: sdk.Float64(1726.96),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("illum"),
                            AnalysisCategoryID: sdk.Int64(481553),
                            Description: sdk.String("magni"),
                            ID: sdk.Int64(109683),
                            Value: sdk.Float64(3968.84),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("ad"),
                            AnalysisCategoryID: sdk.Int64(453198),
                            Description: sdk.String("vel"),
                            ID: sdk.Int64(324999),
                            Value: sdk.Float64(245.48),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("vel"),
                            AnalysisCategoryID: sdk.Int64(388333),
                            Description: sdk.String("quaerat"),
                            ID: sdk.Int64(94122),
                            Value: sdk.Float64(5252.23),
                        },
                    },
                    Amount: sdk.Float64(4935.79),
                    AmountNet: 400.17,
                    ID: sdk.Int64(825739),
                    Percentage: sdk.Float64(5909.69),
                    ProductCode: sdk.String("facere"),
                    ProductID: sdk.Int64(152887),
                    Quantity: sdk.Float64(804.48),
                    TranNotes: []string{
                        "unde",
                        "deserunt",
                        "repellendus",
                        "consequatur",
                    },
                    UnitPrice: sdk.Float64(2379.72),
                    Vat: sdk.Float64(390.69),
                    VatAnalysisTypeID: sdk.Int64(761927),
                    VatRateID: sdk.Int64(269731),
                },
            },
            QuoteID: sdk.Int64(890765),
            Reference: sdk.String("cumque"),
            SaleRepCode: sdk.String("maxime"),
            SaleRepID: sdk.Int64(92264),
            Timestamp: sdk.String("beatae"),
            Total: sdk.Float64(6620.68),
            TotalNet: sdk.Float64(90.6),
            TotalVAT: sdk.Float64(5515.76),
            Unpaid: sdk.Float64(1917.24),
            VatTypeID: sdk.Int64(436532),
            YourReference: sdk.String("tempora"),
        },
        ID: 177337,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoicesPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1SalesInvoicesID

Returns information about a single Sales Invoice.

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
    res, err := s.SalesInvoices.GetV1SalesInvoicesID(ctx, operations.GetV1SalesInvoicesIDRequest{
        ID: 616183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesInvoiceCreditNoteDto != nil {
        // handle response
    }
}
```
