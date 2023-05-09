# Quote

### Available Operations

* [QuoteClose](#quoteclose) - Close a Quote.
* [QuoteDelete](#quotedelete) - Removes an existing Quote.
* [QuoteGet](#quoteget) - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* [QuotePost](#quotepost) - Creates a new Quote.
* [QuotePostCreateQuoteWithGeneratingReference](#quotepostcreatequotewithgeneratingreference) - Creates a new Quote with auto generating reference.
* [QuotePostGenerateSaleInvoice](#quotepostgeneratesaleinvoice) - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* [QuoteProcessBatch](#quoteprocessbatch) - Processes a batch of Quote.
* [QuotePut](#quoteput) - Updates an existing Quote.
* [QuoteReopen](#quotereopen) - Reopen a Quote.
* [GetV1QuotesID](#getv1quotesid) - Returns information about a single Quote.

## QuoteClose

Close a Quote.

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
    res, err := s.Quote.QuoteClose(ctx, operations.QuoteCloseRequest{
        ID: 755106,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteClose200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuoteDelete

Removes an existing Quote.

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
    res, err := s.Quote.QuoteDelete(ctx, operations.QuoteDeleteRequest{
        ID: 715053,
        Timestamp: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuoteGet

Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".

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
    res, err := s.Quote.QuoteGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultQuoteDto != nil {
        // handle response
    }
}
```

## QuotePost

Creates a new Quote.

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
    res, err := s.Quote.QuotePost(ctx, shared.QuoteDto{
        AcCode: sdk.String("autem"),
        ClosedDate: types.MustTimeFromString("2022-10-29T20:56:45.429Z"),
        Comments: sdk.String("assumenda"),
        CompanyID: sdk.Int64(107210),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("facere"),
                ID: sdk.Int64(545918),
                UserDefinedFieldID: sdk.Int64(473143),
                Value: sdk.String("provident"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("accusamus"),
                ID: sdk.Int64(896480),
                UserDefinedFieldID: sdk.Int64(733289),
                Value: sdk.String("sint"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("ea"),
                ID: sdk.Int64(421819),
                UserDefinedFieldID: sdk.Int64(373511),
                Value: sdk.String("rerum"),
            },
        },
        CustomerOwnerID: sdk.Int64(515638),
        CustomerOwnerName: sdk.String("corporis"),
        DdNumber: sdk.String("officiis"),
        DeliveryList: sdk.String("voluptatibus"),
        DeliveryTo: []string{
            "at",
            "alias",
            "quia",
        },
        EntryDate: types.MustTimeFromString("2021-08-19T14:07:01.740Z"),
        ID: sdk.Int64(919508),
        LayoutType: sdk.Int(34070),
        Note: sdk.String("expedita"),
        PoNumber: sdk.String("officiis"),
        ProcDate: types.MustTimeFromString("2022-02-26T15:04:57.243Z"),
        ProductTrans: []shared.QuoteProductTransDto{
            shared.QuoteProductTransDto{
                AcEntries: []shared.QuoteAcEntriesDto{
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("odit"),
                        AnalysisCategoryID: sdk.Int64(127688),
                        CompanyID: sdk.Int64(358995),
                        ID: sdk.Int64(621473),
                        QuoteProductTranID: sdk.Int64(937117),
                        Value: sdk.Float64(2393.37),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("recusandae"),
                        AnalysisCategoryID: sdk.Int64(630871),
                        CompanyID: sdk.Int64(282837),
                        ID: sdk.Int64(693746),
                        QuoteProductTranID: sdk.Int64(339631),
                        Value: sdk.Float64(1062.55),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("unde"),
                        AnalysisCategoryID: sdk.Int64(476946),
                        CompanyID: sdk.Int64(963198),
                        ID: sdk.Int64(585593),
                        QuoteProductTranID: sdk.Int64(147801),
                        Value: sdk.Float64(2536.25),
                    },
                },
                Amount: sdk.Float64(2569.16),
                CompanyID: sdk.Int64(201010),
                ID: sdk.Int64(873557),
                Percentage: sdk.Float64(6378.56),
                ProductCode: sdk.String("dignissimos"),
                ProductID: sdk.Int64(760744),
                Quantity: sdk.Float64(8989.61),
                TranNotes: []string{
                    "qui",
                    "expedita",
                },
                UnitPrice: sdk.Float64(5326.69),
                VatAmount: sdk.Float64(5873.75),
                VatAnalysisTypeID: sdk.Int64(326269),
                VatRateID: sdk.Int64(809594),
            },
            shared.QuoteProductTransDto{
                AcEntries: []shared.QuoteAcEntriesDto{
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("neque"),
                        AnalysisCategoryID: sdk.Int64(446877),
                        CompanyID: sdk.Int64(796397),
                        ID: sdk.Int64(433077),
                        QuoteProductTranID: sdk.Int64(266408),
                        Value: sdk.Float64(3573.47),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("magnam"),
                        AnalysisCategoryID: sdk.Int64(914971),
                        CompanyID: sdk.Int64(978173),
                        ID: sdk.Int64(731744),
                        QuoteProductTranID: sdk.Int64(46013),
                        Value: sdk.Float64(7275.47),
                    },
                },
                Amount: sdk.Float64(1897.53),
                CompanyID: sdk.Int64(289913),
                ID: sdk.Int64(520875),
                Percentage: sdk.Float64(5777.09),
                ProductCode: sdk.String("voluptas"),
                ProductID: sdk.Int64(779180),
                Quantity: sdk.Float64(2420.99),
                TranNotes: []string{
                    "fuga",
                    "nostrum",
                    "est",
                    "impedit",
                },
                UnitPrice: sdk.Float64(9637.41),
                VatAmount: sdk.Float64(7358.94),
                VatAnalysisTypeID: sdk.Int64(878601),
                VatRateID: sdk.Int64(141506),
            },
        },
        Reference: sdk.String("repellat"),
        SaleInvoiceID: sdk.Int64(865946),
        SaleRepCode: sdk.String("nemo"),
        SaleRepID: sdk.Int64(441321),
        TimeStamp: sdk.String("aperiam"),
        Total: sdk.Float64(4864.1),
        TotalNet: sdk.Float64(3252.97),
        TotalVat: sdk.Float64(4483.69),
        VatTypeID: sdk.Int64(496915),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuotePost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuotePostCreateQuoteWithGeneratingReference

Creates a new Quote with auto generating reference.

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
    res, err := s.Quote.QuotePostCreateQuoteWithGeneratingReference(ctx, shared.QuoteDto{
        AcCode: sdk.String("excepturi"),
        ClosedDate: types.MustTimeFromString("2022-05-19T06:33:26.102Z"),
        Comments: sdk.String("veritatis"),
        CompanyID: sdk.Int64(498180),
        CustomFields: []shared.AcudfValueDto{
            shared.AcudfValueDto{
                Description: sdk.String("pariatur"),
                ID: sdk.Int64(932666),
                UserDefinedFieldID: sdk.Int64(627735),
                Value: sdk.String("optio"),
            },
            shared.AcudfValueDto{
                Description: sdk.String("ex"),
                ID: sdk.Int64(311486),
                UserDefinedFieldID: sdk.Int64(416692),
                Value: sdk.String("officiis"),
            },
        },
        CustomerOwnerID: sdk.Int64(810839),
        CustomerOwnerName: sdk.String("quidem"),
        DdNumber: sdk.String("exercitationem"),
        DeliveryList: sdk.String("quam"),
        DeliveryTo: []string{
            "modi",
        },
        EntryDate: types.MustTimeFromString("2022-06-04T22:19:22.955Z"),
        ID: sdk.Int64(876027),
        LayoutType: sdk.Int(194901),
        Note: sdk.String("repudiandae"),
        PoNumber: sdk.String("cum"),
        ProcDate: types.MustTimeFromString("2022-01-24T00:30:42.322Z"),
        ProductTrans: []shared.QuoteProductTransDto{
            shared.QuoteProductTransDto{
                AcEntries: []shared.QuoteAcEntriesDto{
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("dolores"),
                        AnalysisCategoryID: sdk.Int64(724994),
                        CompanyID: sdk.Int64(115898),
                        ID: sdk.Int64(164488),
                        QuoteProductTranID: sdk.Int64(899867),
                        Value: sdk.Float64(7482.24),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("ipsa"),
                        AnalysisCategoryID: sdk.Int64(497357),
                        CompanyID: sdk.Int64(980486),
                        ID: sdk.Int64(87382),
                        QuoteProductTranID: sdk.Int64(96450),
                        Value: sdk.Float64(3864.47),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("pariatur"),
                        AnalysisCategoryID: sdk.Int64(729448),
                        CompanyID: sdk.Int64(566506),
                        ID: sdk.Int64(578210),
                        QuoteProductTranID: sdk.Int64(367917),
                        Value: sdk.Float64(3063.82),
                    },
                },
                Amount: sdk.Float64(3423.42),
                CompanyID: sdk.Int64(988749),
                ID: sdk.Int64(757364),
                Percentage: sdk.Float64(5740.32),
                ProductCode: sdk.String("enim"),
                ProductID: sdk.Int64(944950),
                Quantity: sdk.Float64(6573.19),
                TranNotes: []string{
                    "totam",
                    "molestias",
                    "odio",
                },
                UnitPrice: sdk.Float64(511.7),
                VatAmount: sdk.Float64(9011.63),
                VatAnalysisTypeID: sdk.Int64(104078),
                VatRateID: sdk.Int64(554645),
            },
            shared.QuoteProductTransDto{
                AcEntries: []shared.QuoteAcEntriesDto{
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("assumenda"),
                        AnalysisCategoryID: sdk.Int64(731634),
                        CompanyID: sdk.Int64(725574),
                        ID: sdk.Int64(244032),
                        QuoteProductTranID: sdk.Int64(38557),
                        Value: sdk.Float64(9639.76),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("impedit"),
                        AnalysisCategoryID: sdk.Int64(741238),
                        CompanyID: sdk.Int64(216870),
                        ID: sdk.Int64(238011),
                        QuoteProductTranID: sdk.Int64(903150),
                        Value: sdk.Float64(6444.2),
                    },
                    shared.QuoteAcEntriesDto{
                        AccountCode: sdk.String("doloremque"),
                        AnalysisCategoryID: sdk.Int64(339756),
                        CompanyID: sdk.Int64(333072),
                        ID: sdk.Int64(727481),
                        QuoteProductTranID: sdk.Int64(99733),
                        Value: sdk.Float64(5845.93),
                    },
                },
                Amount: sdk.Float64(4755.89),
                CompanyID: sdk.Int64(756654),
                ID: sdk.Int64(820023),
                Percentage: sdk.Float64(2514.64),
                ProductCode: sdk.String("magnam"),
                ProductID: sdk.Int64(932296),
                Quantity: sdk.Float64(1509.35),
                TranNotes: []string{
                    "veniam",
                    "consequuntur",
                    "facere",
                    "laudantium",
                },
                UnitPrice: sdk.Float64(1403.84),
                VatAmount: sdk.Float64(8634.77),
                VatAnalysisTypeID: sdk.Int64(227362),
                VatRateID: sdk.Int64(347698),
            },
        },
        Reference: sdk.String("ab"),
        SaleInvoiceID: sdk.Int64(242637),
        SaleRepCode: sdk.String("facilis"),
        SaleRepID: sdk.Int64(731065),
        TimeStamp: sdk.String("nisi"),
        Total: sdk.Float64(9775.18),
        TotalNet: sdk.Float64(3108.4),
        TotalVat: sdk.Float64(5037.48),
        VatTypeID: sdk.Int64(718627),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuotePostCreateQuoteWithGeneratingReference200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuotePostGenerateSaleInvoice

Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.

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
    res, err := s.Quote.QuotePostGenerateSaleInvoice(ctx, shared.QuoteGeneratingInvoiceDto{
        QuoteID: sdk.Int64(392430),
        SaleInvoice: &shared.SalesInvoiceCreditNoteDto{
            AcCode: sdk.String("quis"),
            BookTranTypeID: sdk.Int64(391933),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("minus"),
                    ID: sdk.Int64(815200),
                    UserDefinedFieldID: sdk.Int64(706061),
                    Value: sdk.String("ipsum"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("ad"),
                    ID: sdk.Int64(973819),
                    UserDefinedFieldID: sdk.Int64(974589),
                    Value: sdk.String("consequuntur"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("debitis"),
                    ID: sdk.Int64(290841),
                    UserDefinedFieldID: sdk.Int64(700928),
                    Value: sdk.String("eos"),
                },
            },
            CustomerID: sdk.Int64(440777),
            DeliveryTo: []string{
                "neque",
                "iusto",
            },
            Details: sdk.String("est"),
            EntryDate: types.MustTimeFromString("2021-06-29T15:50:45.661Z"),
            ID: sdk.Int64(853606),
            LoType: sdk.String("unde"),
            NetGoods: sdk.Float64(8894.48),
            NetServices: sdk.Float64(4956.17),
            Note: sdk.String("dolor"),
            OurReference: sdk.String("dicta"),
            ProcDate: types.MustTimeFromString("2021-06-07T03:31:13.366Z"),
            ProductTrans: []shared.ProductTranDto{
                shared.ProductTranDto{
                    AcEntries: []shared.AcEntryDto{
                        shared.AcEntryDto{
                            AccountCode: sdk.String("esse"),
                            AnalysisCategoryID: sdk.Int64(854115),
                            Description: sdk.String("ad"),
                            ID: sdk.Int64(134818),
                            Value: sdk.Float64(3165.01),
                        },
                        shared.AcEntryDto{
                            AccountCode: sdk.String("delectus"),
                            AnalysisCategoryID: sdk.Int64(482584),
                            Description: sdk.String("dignissimos"),
                            ID: sdk.Int64(729828),
                            Value: sdk.Float64(723.5),
                        },
                    },
                    Amount: sdk.Float64(691.82),
                    AmountNet: 2801.14,
                    ID: sdk.Int64(879174),
                    Percentage: sdk.Float64(9025.81),
                    ProductCode: sdk.String("tempore"),
                    ProductID: sdk.Int64(334018),
                    Quantity: sdk.Float64(1764.99),
                    TranNotes: []string{
                        "earum",
                        "reprehenderit",
                        "praesentium",
                        "nemo",
                    },
                    UnitPrice: sdk.Float64(9998.09),
                    Vat: sdk.Float64(7897.7),
                    VatAnalysisTypeID: sdk.Int64(197259),
                    VatRateID: sdk.Int64(467119),
                },
            },
            QuoteID: sdk.Int64(534908),
            Reference: sdk.String("illo"),
            SaleRepCode: sdk.String("labore"),
            SaleRepID: sdk.Int64(828841),
            Timestamp: sdk.String("aliquam"),
            Total: sdk.Float64(7904.63),
            TotalNet: sdk.Float64(5910.65),
            TotalVAT: sdk.Float64(5149.93),
            Unpaid: sdk.Float64(9217.19),
            VatTypeID: sdk.Int64(9683),
            YourReference: sdk.String("maxime"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuotePostGenerateSaleInvoice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuoteProcessBatch

Processes a batch of Quote.

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
    res, err := s.Quote.QuoteProcessBatch(ctx, []shared.BatchItemQuoteDto{
        shared.BatchItemQuoteDto{
            Item: &shared.QuoteDto{
                AcCode: sdk.String("nam"),
                ClosedDate: types.MustTimeFromString("2021-11-18T19:16:30.817Z"),
                Comments: sdk.String("provident"),
                CompanyID: sdk.Int64(922299),
                CustomFields: []shared.AcudfValueDto{
                    shared.AcudfValueDto{
                        Description: sdk.String("dignissimos"),
                        ID: sdk.Int64(360934),
                        UserDefinedFieldID: sdk.Int64(873833),
                        Value: sdk.String("similique"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("repellendus"),
                        ID: sdk.Int64(434827),
                        UserDefinedFieldID: sdk.Int64(213835),
                        Value: sdk.String("commodi"),
                    },
                    shared.AcudfValueDto{
                        Description: sdk.String("impedit"),
                        ID: sdk.Int64(415033),
                        UserDefinedFieldID: sdk.Int64(12171),
                        Value: sdk.String("voluptatem"),
                    },
                },
                CustomerOwnerID: sdk.Int64(322829),
                CustomerOwnerName: sdk.String("quae"),
                DdNumber: sdk.String("amet"),
                DeliveryList: sdk.String("illum"),
                DeliveryTo: []string{
                    "quidem",
                    "cum",
                    "amet",
                },
                EntryDate: types.MustTimeFromString("2022-11-18T21:12:35.377Z"),
                ID: sdk.Int64(514922),
                LayoutType: sdk.Int(40710),
                Note: sdk.String("earum"),
                PoNumber: sdk.String("iusto"),
                ProcDate: types.MustTimeFromString("2022-05-31T09:24:28.393Z"),
                ProductTrans: []shared.QuoteProductTransDto{
                    shared.QuoteProductTransDto{
                        AcEntries: []shared.QuoteAcEntriesDto{
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("provident"),
                                AnalysisCategoryID: sdk.Int64(920272),
                                CompanyID: sdk.Int64(10063),
                                ID: sdk.Int64(366244),
                                QuoteProductTranID: sdk.Int64(475826),
                                Value: sdk.Float64(9308.4),
                            },
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("facilis"),
                                AnalysisCategoryID: sdk.Int64(545779),
                                CompanyID: sdk.Int64(43975),
                                ID: sdk.Int64(574092),
                                QuoteProductTranID: sdk.Int64(879522),
                                Value: sdk.Float64(1786.35),
                            },
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("totam"),
                                AnalysisCategoryID: sdk.Int64(115861),
                                CompanyID: sdk.Int64(30661),
                                ID: sdk.Int64(244376),
                                QuoteProductTranID: sdk.Int64(224413),
                                Value: sdk.Float64(1242.89),
                            },
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("a"),
                                AnalysisCategoryID: sdk.Int64(223291),
                                CompanyID: sdk.Int64(582320),
                                ID: sdk.Int64(539813),
                                QuoteProductTranID: sdk.Int64(107472),
                                Value: sdk.Float64(8682.55),
                            },
                        },
                        Amount: sdk.Float64(2875.44),
                        CompanyID: sdk.Int64(794988),
                        ID: sdk.Int64(456704),
                        Percentage: sdk.Float64(323.56),
                        ProductCode: sdk.String("perferendis"),
                        ProductID: sdk.Int64(698558),
                        Quantity: sdk.Float64(4116.15),
                        TranNotes: []string{
                            "dignissimos",
                        },
                        UnitPrice: sdk.Float64(9980.26),
                        VatAmount: sdk.Float64(2436.78),
                        VatAnalysisTypeID: sdk.Int64(784115),
                        VatRateID: sdk.Int64(588639),
                    },
                    shared.QuoteProductTransDto{
                        AcEntries: []shared.QuoteAcEntriesDto{
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("eligendi"),
                                AnalysisCategoryID: sdk.Int64(490110),
                                CompanyID: sdk.Int64(235834),
                                ID: sdk.Int64(744101),
                                QuoteProductTranID: sdk.Int64(620500),
                                Value: sdk.Float64(8398.07),
                            },
                        },
                        Amount: sdk.Float64(6396.22),
                        CompanyID: sdk.Int64(228857),
                        ID: sdk.Int64(948541),
                        Percentage: sdk.Float64(1339.49),
                        ProductCode: sdk.String("quo"),
                        ProductID: sdk.Int64(931077),
                        Quantity: sdk.Float64(8483.46),
                        TranNotes: []string{
                            "dignissimos",
                            "vero",
                            "qui",
                        },
                        UnitPrice: sdk.Float64(2323.83),
                        VatAmount: sdk.Float64(9958.16),
                        VatAnalysisTypeID: sdk.Int64(128696),
                        VatRateID: sdk.Int64(129355),
                    },
                    shared.QuoteProductTransDto{
                        AcEntries: []shared.QuoteAcEntriesDto{
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("nihil"),
                                AnalysisCategoryID: sdk.Int64(252700),
                                CompanyID: sdk.Int64(68093),
                                ID: sdk.Int64(72754),
                                QuoteProductTranID: sdk.Int64(943851),
                                Value: sdk.Float64(6444.79),
                            },
                            shared.QuoteAcEntriesDto{
                                AccountCode: sdk.String("delectus"),
                                AnalysisCategoryID: sdk.Int64(251212),
                                CompanyID: sdk.Int64(719389),
                                ID: sdk.Int64(450224),
                                QuoteProductTranID: sdk.Int64(349993),
                                Value: sdk.Float64(2883),
                            },
                        },
                        Amount: sdk.Float64(2543.82),
                        CompanyID: sdk.Int64(921193),
                        ID: sdk.Int64(265303),
                        Percentage: sdk.Float64(4502.09),
                        ProductCode: sdk.String("explicabo"),
                        ProductID: sdk.Int64(879857),
                        Quantity: sdk.Float64(5258.09),
                        TranNotes: []string{
                            "odit",
                        },
                        UnitPrice: sdk.Float64(5358.02),
                        VatAmount: sdk.Float64(3167.3),
                        VatAnalysisTypeID: sdk.Int64(452730),
                        VatRateID: sdk.Int64(626707),
                    },
                },
                Reference: sdk.String("minima"),
                SaleInvoiceID: sdk.Int64(727544),
                SaleRepCode: sdk.String("magnam"),
                SaleRepID: sdk.Int64(24272),
                TimeStamp: sdk.String("modi"),
                Total: sdk.Float64(4301.16),
                TotalNet: sdk.Float64(1995.29),
                TotalVat: sdk.Float64(6521.25),
                VatTypeID: sdk.Int64(492632),
            },
            OpCode: shared.BatchItemQuoteDtoOpCodeEnumThree.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuotePut

Updates an existing Quote.

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
    res, err := s.Quote.QuotePut(ctx, operations.QuotePutRequest{
        QuoteDto: shared.QuoteDto{
            AcCode: sdk.String("nostrum"),
            ClosedDate: types.MustTimeFromString("2022-09-02T07:56:21.159Z"),
            Comments: sdk.String("reiciendis"),
            CompanyID: sdk.Int64(66207),
            CustomFields: []shared.AcudfValueDto{
                shared.AcudfValueDto{
                    Description: sdk.String("aut"),
                    ID: sdk.Int64(13508),
                    UserDefinedFieldID: sdk.Int64(911657),
                    Value: sdk.String("odio"),
                },
                shared.AcudfValueDto{
                    Description: sdk.String("commodi"),
                    ID: sdk.Int64(256114),
                    UserDefinedFieldID: sdk.Int64(677045),
                    Value: sdk.String("possimus"),
                },
            },
            CustomerOwnerID: sdk.Int64(452399),
            CustomerOwnerName: sdk.String("consectetur"),
            DdNumber: sdk.String("nesciunt"),
            DeliveryList: sdk.String("quaerat"),
            DeliveryTo: []string{
                "minus",
                "sunt",
                "distinctio",
                "iusto",
            },
            EntryDate: types.MustTimeFromString("2022-10-26T00:55:24.466Z"),
            ID: sdk.Int64(704948),
            LayoutType: sdk.Int(229276),
            Note: sdk.String("autem"),
            PoNumber: sdk.String("fuga"),
            ProcDate: types.MustTimeFromString("2022-06-22T20:37:33.639Z"),
            ProductTrans: []shared.QuoteProductTransDto{
                shared.QuoteProductTransDto{
                    AcEntries: []shared.QuoteAcEntriesDto{
                        shared.QuoteAcEntriesDto{
                            AccountCode: sdk.String("laudantium"),
                            AnalysisCategoryID: sdk.Int64(832239),
                            CompanyID: sdk.Int64(83291),
                            ID: sdk.Int64(60778),
                            QuoteProductTranID: sdk.Int64(51075),
                            Value: sdk.Float64(9048.27),
                        },
                        shared.QuoteAcEntriesDto{
                            AccountCode: sdk.String("delectus"),
                            AnalysisCategoryID: sdk.Int64(651228),
                            CompanyID: sdk.Int64(859003),
                            ID: sdk.Int64(640907),
                            QuoteProductTranID: sdk.Int64(152027),
                            Value: sdk.Float64(302.08),
                        },
                        shared.QuoteAcEntriesDto{
                            AccountCode: sdk.String("alias"),
                            AnalysisCategoryID: sdk.Int64(910073),
                            CompanyID: sdk.Int64(941668),
                            ID: sdk.Int64(27982),
                            QuoteProductTranID: sdk.Int64(278325),
                            Value: sdk.Float64(1854.48),
                        },
                    },
                    Amount: sdk.Float64(1858.97),
                    CompanyID: sdk.Int64(895912),
                    ID: sdk.Int64(691508),
                    Percentage: sdk.Float64(1267.27),
                    ProductCode: sdk.String("beatae"),
                    ProductID: sdk.Int64(397988),
                    Quantity: sdk.Float64(2646.49),
                    TranNotes: []string{
                        "voluptatibus",
                        "molestias",
                        "officia",
                        "libero",
                    },
                    UnitPrice: sdk.Float64(5206.78),
                    VatAmount: sdk.Float64(1928.46),
                    VatAnalysisTypeID: sdk.Int64(397919),
                    VatRateID: sdk.Int64(412052),
                },
            },
            Reference: sdk.String("impedit"),
            SaleInvoiceID: sdk.Int64(498388),
            SaleRepCode: sdk.String("odit"),
            SaleRepID: sdk.Int64(243623),
            TimeStamp: sdk.String("reiciendis"),
            Total: sdk.Float64(9979.18),
            TotalNet: sdk.Float64(8611.23),
            TotalVat: sdk.Float64(6711.16),
            VatTypeID: sdk.Int64(617657),
        },
        ID: 883780,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuotePut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuoteReopen

Reopen a Quote.

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
    res, err := s.Quote.QuoteReopen(ctx, operations.QuoteReopenRequest{
        ID: 42906,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteReopen200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1QuotesID

Returns information about a single Quote.

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
    res, err := s.Quote.GetV1QuotesID(ctx, operations.GetV1QuotesIDRequest{
        ID: 392967,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteDto != nil {
        // handle response
    }
}
```
