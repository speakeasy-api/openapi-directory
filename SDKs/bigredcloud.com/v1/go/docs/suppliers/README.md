# Suppliers

### Available Operations

* [SuppliersDelete](#suppliersdelete) - Removes an existing Supplier.
* [SuppliersGet](#suppliersget) - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [SuppliersGetAccountTrans](#suppliersgetaccounttrans) - Returns a list of Supplier's account transactions.
* [SuppliersGetOpeningBalance](#suppliersgetopeningbalance) - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [SuppliersGetOpeningBalanceList](#suppliersgetopeningbalancelist) - Returns a list of Supplier's opening balance transactions.
* [SuppliersPost](#supplierspost) - Creates a new Supplier.
* [SuppliersProcessBatch](#suppliersprocessbatch) - Processes a batch of Suppliers.
* [SuppliersPut](#suppliersput) - Updates an existing Supplier.
* [GetV1SuppliersID](#getv1suppliersid) - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

## SuppliersDelete

Removes an existing Supplier.

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
    res, err := s.Suppliers.SuppliersDelete(ctx, operations.SuppliersDeleteRequest{
        ID: 813975,
        Timestamp: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuppliersDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SuppliersGet

Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

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
    res, err := s.Suppliers.SuppliersGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSupplierQueryDto != nil {
        // handle response
    }
}
```

## SuppliersGetAccountTrans

Returns a list of Supplier's account transactions.

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
    res, err := s.Suppliers.SuppliersGetAccountTrans(ctx, operations.SuppliersGetAccountTransRequest{
        ItemID: 869088,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTranDtos != nil {
        // handle response
    }
}
```

## SuppliersGetOpeningBalance

Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

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
    res, err := s.Suppliers.SuppliersGetOpeningBalance(ctx, operations.SuppliersGetOpeningBalanceRequest{
        ItemID: 561121,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OwnerOpeningBalanceInPeriodsDto != nil {
        // handle response
    }
}
```

## SuppliersGetOpeningBalanceList

Returns a list of Supplier's opening balance transactions.

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
    res, err := s.Suppliers.SuppliersGetOpeningBalanceList(ctx, operations.SuppliersGetOpeningBalanceListRequest{
        ItemID: 12877,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OwnerOpeningBalanceDtos != nil {
        // handle response
    }
}
```

## SuppliersPost

Creates a new Supplier.

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
    res, err := s.Suppliers.SuppliersPost(ctx, shared.SupplierDto{
        AccountName: sdk.String("temporibus"),
        AccountNumber: sdk.String("tenetur"),
        AdditionalEmails: []string{
            "numquam",
            "corrupti",
        },
        Address: []string{
            "dolore",
            "esse",
            "reiciendis",
        },
        AuthCode: sdk.String("iste"),
        Bank: &shared.EFTBankDto{
            Branch: sdk.String("amet"),
            ID: sdk.Int64(581019),
            Name: sdk.String("Leticia Hansen"),
            SortCode: sdk.String("quas"),
        },
        BusinessIdentifierCode: sdk.String("voluptatem"),
        Code: sdk.String("provident"),
        Contact: sdk.String("quas"),
        EFTReference: sdk.String("ipsum"),
        Email: sdk.String("Marjory_Purdy92@hotmail.com"),
        Fax: sdk.String("a"),
        ID: sdk.Int64(234964),
        InternationalBankAccountNumber: sdk.String("sapiente"),
        LedgerBalance: sdk.Float64(9776.41),
        Mobile: sdk.String("(869) 590-4669 x28234"),
        Name: sdk.String("Ellen Sawayn"),
        OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
            CurrentMonth: sdk.Float64(584.63),
            OneMonthOld: sdk.Float64(9670.47),
            ThreeMonthsOld: sdk.Float64(2891.53),
            TwoMonthsOld: sdk.Float64(8748.43),
        },
        OpeningBalances: []shared.OwnerOpeningBalanceDto{
            shared.OwnerOpeningBalanceDto{
                EntryDate: types.MustTimeFromString("2022-10-21T00:54:53.153Z"),
                ID: sdk.Int64(101284),
                IsChanged: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2022-01-13T01:04:06.227Z"),
                Reference: sdk.String("fugiat"),
                Timestamp: sdk.String("enim"),
                Total: sdk.Float64(4357.13),
                TotalVAT: sdk.Float64(5124.08),
                Unpaid: sdk.Float64(2653.03),
                VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(8821.57),
                        VatRateID: sdk.Int64(861823),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(9211.27),
                        VatRateID: sdk.Int64(844327),
                    },
                },
            },
        },
        OurCode: sdk.String("praesentium"),
        OwnerTypeID: sdk.Int64(315465),
        Phone: sdk.String("1-604-493-1568 x9810"),
        PostponedAccounting: sdk.Bool(false),
        Timestamp: sdk.String("nesciunt"),
        VatAnalysisTypeID: sdk.Int64(155371),
        VatReg: sdk.String("quidem"),
        VatType: sdk.Int64(377161),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuppliersPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SuppliersProcessBatch

Processes a batch of Suppliers.

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
    res, err := s.Suppliers.SuppliersProcessBatch(ctx, []shared.BatchItemSupplierDto{
        shared.BatchItemSupplierDto{
            Item: &shared.SupplierDto{
                AccountName: sdk.String("laudantium"),
                AccountNumber: sdk.String("dignissimos"),
                AdditionalEmails: []string{
                    "omnis",
                    "fugit",
                    "dolorem",
                },
                Address: []string{
                    "molestiae",
                    "debitis",
                    "vitae",
                },
                AuthCode: sdk.String("dolor"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("ad"),
                    ID: sdk.Int64(539886),
                    Name: sdk.String("Nettie Kilback"),
                    SortCode: sdk.String("et"),
                },
                BusinessIdentifierCode: sdk.String("eos"),
                Code: sdk.String("impedit"),
                Contact: sdk.String("ex"),
                EFTReference: sdk.String("praesentium"),
                Email: sdk.String("Berta.West@yahoo.com"),
                Fax: sdk.String("eligendi"),
                ID: sdk.Int64(917877),
                InternationalBankAccountNumber: sdk.String("dicta"),
                LedgerBalance: sdk.Float64(810.53),
                Mobile: sdk.String("(504) 320-3244 x879"),
                Name: sdk.String("Jimmie McGlynn"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(6081.72),
                    OneMonthOld: sdk.Float64(4636.95),
                    ThreeMonthsOld: sdk.Float64(3490.87),
                    TwoMonthsOld: sdk.Float64(9151.45),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-08-03T04:56:21.299Z"),
                        ID: sdk.Int64(426481),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-03-16T23:51:49.219Z"),
                        Reference: sdk.String("aperiam"),
                        Timestamp: sdk.String("perspiciatis"),
                        Total: sdk.Float64(1458.41),
                        TotalVAT: sdk.Float64(9320.57),
                        Unpaid: sdk.Float64(6001.85),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(2250.01),
                                VatRateID: sdk.Int64(833946),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(8373.27),
                                VatRateID: sdk.Int64(792106),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(3269.42),
                                VatRateID: sdk.Int64(951901),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(1048.34),
                                VatRateID: sdk.Int64(114212),
                            },
                        },
                    },
                },
                OurCode: sdk.String("veritatis"),
                OwnerTypeID: sdk.Int64(814398),
                Phone: sdk.String("1-710-338-3216 x38160"),
                PostponedAccounting: sdk.Bool(false),
                Timestamp: sdk.String("sapiente"),
                VatAnalysisTypeID: sdk.Int64(887600),
                VatReg: sdk.String("expedita"),
                VatType: sdk.Int64(156843),
            },
            OpCode: shared.BatchItemSupplierDtoOpCodeEnumOne.ToPointer(),
        },
        shared.BatchItemSupplierDto{
            Item: &shared.SupplierDto{
                AccountName: sdk.String("odio"),
                AccountNumber: sdk.String("quas"),
                AdditionalEmails: []string{
                    "distinctio",
                },
                Address: []string{
                    "quod",
                    "eligendi",
                    "sit",
                    "possimus",
                },
                AuthCode: sdk.String("distinctio"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("distinctio"),
                    ID: sdk.Int64(825681),
                    Name: sdk.String("Dominic Gulgowski"),
                    SortCode: sdk.String("esse"),
                },
                BusinessIdentifierCode: sdk.String("doloremque"),
                Code: sdk.String("corrupti"),
                Contact: sdk.String("reiciendis"),
                EFTReference: sdk.String("facilis"),
                Email: sdk.String("Therese.Farrell@gmail.com"),
                Fax: sdk.String("officiis"),
                ID: sdk.Int64(429823),
                InternationalBankAccountNumber: sdk.String("rerum"),
                LedgerBalance: sdk.Float64(8086.08),
                Mobile: sdk.String("(457) 472-9323"),
                Name: sdk.String("Marion Ward"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(2687.49),
                    OneMonthOld: sdk.Float64(1348.32),
                    ThreeMonthsOld: sdk.Float64(1297.62),
                    TwoMonthsOld: sdk.Float64(3804.5),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2021-04-10T13:12:54.919Z"),
                        ID: sdk.Int64(749537),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-12-18T07:41:43.002Z"),
                        Reference: sdk.String("consequatur"),
                        Timestamp: sdk.String("impedit"),
                        Total: sdk.Float64(9277.54),
                        TotalVAT: sdk.Float64(4518.31),
                        Unpaid: sdk.Float64(5371.4),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(924.48),
                                VatRateID: sdk.Int64(710483),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(8429.21),
                                VatRateID: sdk.Int64(552984),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(9832.03),
                                VatRateID: sdk.Int64(696678),
                            },
                        },
                    },
                },
                OurCode: sdk.String("in"),
                OwnerTypeID: sdk.Int64(635314),
                Phone: sdk.String("711-578-4118"),
                PostponedAccounting: sdk.Bool(false),
                Timestamp: sdk.String("quaerat"),
                VatAnalysisTypeID: sdk.Int64(14976),
                VatReg: sdk.String("natus"),
                VatType: sdk.Int64(457389),
            },
            OpCode: shared.BatchItemSupplierDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSupplierDto{
            Item: &shared.SupplierDto{
                AccountName: sdk.String("deserunt"),
                AccountNumber: sdk.String("ratione"),
                AdditionalEmails: []string{
                    "debitis",
                },
                Address: []string{
                    "deserunt",
                    "hic",
                    "ducimus",
                },
                AuthCode: sdk.String("consequuntur"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("ipsam"),
                    ID: sdk.Int64(729612),
                    Name: sdk.String("Belinda Cartwright"),
                    SortCode: sdk.String("consequatur"),
                },
                BusinessIdentifierCode: sdk.String("amet"),
                Code: sdk.String("consequatur"),
                Contact: sdk.String("fugiat"),
                EFTReference: sdk.String("voluptatum"),
                Email: sdk.String("Twila_Hermiston@gmail.com"),
                Fax: sdk.String("distinctio"),
                ID: sdk.Int64(480295),
                InternationalBankAccountNumber: sdk.String("dignissimos"),
                LedgerBalance: sdk.Float64(5920.88),
                Mobile: sdk.String("(811) 957-0952 x5251"),
                Name: sdk.String("Marta Stanton"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(1663.24),
                    OneMonthOld: sdk.Float64(7639.28),
                    ThreeMonthsOld: sdk.Float64(5526.87),
                    TwoMonthsOld: sdk.Float64(4484.82),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-07-19T02:56:51.417Z"),
                        ID: sdk.Int64(791538),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-03-07T08:54:57.907Z"),
                        Reference: sdk.String("delectus"),
                        Timestamp: sdk.String("harum"),
                        Total: sdk.Float64(3049.64),
                        TotalVAT: sdk.Float64(7579.62),
                        Unpaid: sdk.Float64(9414.4),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(756.1),
                                VatRateID: sdk.Int64(751347),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(4608.03),
                                VatRateID: sdk.Int64(392080),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(1296.19),
                                VatRateID: sdk.Int64(197441),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(47.87),
                                VatRateID: sdk.Int64(970131),
                            },
                        },
                    },
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-06-27T21:26:45.841Z"),
                        ID: sdk.Int64(113894),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2020-11-01T09:11:42.377Z"),
                        Reference: sdk.String("architecto"),
                        Timestamp: sdk.String("rerum"),
                        Total: sdk.Float64(8269.75),
                        TotalVAT: sdk.Float64(1763.33),
                        Unpaid: sdk.Float64(2115.18),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(8309.48),
                                VatRateID: sdk.Int64(721044),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(691.84),
                                VatRateID: sdk.Int64(297970),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(8667.03),
                                VatRateID: sdk.Int64(709234),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(4183.63),
                                VatRateID: sdk.Int64(731931),
                            },
                        },
                    },
                },
                OurCode: sdk.String("recusandae"),
                OwnerTypeID: sdk.Int64(342226),
                Phone: sdk.String("1-553-665-9116 x8108"),
                PostponedAccounting: sdk.Bool(false),
                Timestamp: sdk.String("id"),
                VatAnalysisTypeID: sdk.Int64(62907),
                VatReg: sdk.String("commodi"),
                VatType: sdk.Int64(954401),
            },
            OpCode: shared.BatchItemSupplierDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemSupplierDto{
            Item: &shared.SupplierDto{
                AccountName: sdk.String("sed"),
                AccountNumber: sdk.String("nam"),
                AdditionalEmails: []string{
                    "iusto",
                },
                Address: []string{
                    "deserunt",
                },
                AuthCode: sdk.String("sed"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("blanditiis"),
                    ID: sdk.Int64(573994),
                    Name: sdk.String("Dan Kreiger"),
                    SortCode: sdk.String("nemo"),
                },
                BusinessIdentifierCode: sdk.String("non"),
                Code: sdk.String("recusandae"),
                Contact: sdk.String("omnis"),
                EFTReference: sdk.String("ipsa"),
                Email: sdk.String("Daisha.Mayert16@gmail.com"),
                Fax: sdk.String("consequuntur"),
                ID: sdk.Int64(260252),
                InternationalBankAccountNumber: sdk.String("commodi"),
                LedgerBalance: sdk.Float64(3712.17),
                Mobile: sdk.String("1-623-320-4052 x946"),
                Name: sdk.String("Johnny Krajcik"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(9811.42),
                    OneMonthOld: sdk.Float64(352.19),
                    ThreeMonthsOld: sdk.Float64(1507.15),
                    TwoMonthsOld: sdk.Float64(1806.6),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-11-20T03:23:39.492Z"),
                        ID: sdk.Int64(577496),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-02-23T18:01:52.364Z"),
                        Reference: sdk.String("quidem"),
                        Timestamp: sdk.String("exercitationem"),
                        Total: sdk.Float64(3327.77),
                        TotalVAT: sdk.Float64(2679.88),
                        Unpaid: sdk.Float64(954.56),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(6299.02),
                                VatRateID: sdk.Int64(821304),
                            },
                        },
                    },
                },
                OurCode: sdk.String("quo"),
                OwnerTypeID: sdk.Int64(379666),
                Phone: sdk.String("1-669-606-1474 x887"),
                PostponedAccounting: sdk.Bool(false),
                Timestamp: sdk.String("cupiditate"),
                VatAnalysisTypeID: sdk.Int64(536999),
                VatReg: sdk.String("quasi"),
                VatType: sdk.Int64(978857),
            },
            OpCode: shared.BatchItemSupplierDtoOpCodeEnumOne.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuppliersProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SuppliersPut

Updates an existing Supplier.

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
    res, err := s.Suppliers.SuppliersPut(ctx, operations.SuppliersPutRequest{
        SupplierDto: shared.SupplierDto{
            AccountName: sdk.String("aliquid"),
            AccountNumber: sdk.String("laudantium"),
            AdditionalEmails: []string{
                "corrupti",
                "quae",
                "facere",
            },
            Address: []string{
                "libero",
                "nam",
            },
            AuthCode: sdk.String("amet"),
            Bank: &shared.EFTBankDto{
                Branch: sdk.String("adipisci"),
                ID: sdk.Int64(793597),
                Name: sdk.String("Donnie Pfannerstill"),
                SortCode: sdk.String("laudantium"),
            },
            BusinessIdentifierCode: sdk.String("cumque"),
            Code: sdk.String("adipisci"),
            Contact: sdk.String("veritatis"),
            EFTReference: sdk.String("nam"),
            Email: sdk.String("Elissa_Beatty@hotmail.com"),
            Fax: sdk.String("necessitatibus"),
            ID: sdk.Int64(252854),
            InternationalBankAccountNumber: sdk.String("doloribus"),
            LedgerBalance: sdk.Float64(7578.24),
            Mobile: sdk.String("272.374.5913 x31315"),
            Name: sdk.String("Carlton Bahringer"),
            OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                CurrentMonth: sdk.Float64(4972.31),
                OneMonthOld: sdk.Float64(3925.69),
                ThreeMonthsOld: sdk.Float64(3920.22),
                TwoMonthsOld: sdk.Float64(2233.58),
            },
            OpeningBalances: []shared.OwnerOpeningBalanceDto{
                shared.OwnerOpeningBalanceDto{
                    EntryDate: types.MustTimeFromString("2022-03-13T05:45:02.940Z"),
                    ID: sdk.Int64(803144),
                    IsChanged: sdk.Bool(false),
                    ProcDate: types.MustTimeFromString("2022-12-04T20:35:09.945Z"),
                    Reference: sdk.String("ea"),
                    Timestamp: sdk.String("impedit"),
                    Total: sdk.Float64(5184.32),
                    TotalVAT: sdk.Float64(7622.97),
                    Unpaid: sdk.Float64(6651.83),
                    VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(1648.05),
                            VatRateID: sdk.Int64(831037),
                        },
                    },
                },
            },
            OurCode: sdk.String("sit"),
            OwnerTypeID: sdk.Int64(172042),
            Phone: sdk.String("(351) 506-5834 x118"),
            PostponedAccounting: sdk.Bool(false),
            Timestamp: sdk.String("illum"),
            VatAnalysisTypeID: sdk.Int64(506202),
            VatReg: sdk.String("sint"),
            VatType: sdk.Int64(348708),
        },
        ID: 739938,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuppliersPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1SuppliersID

Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

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
    res, err := s.Suppliers.GetV1SuppliersID(ctx, operations.GetV1SuppliersIDRequest{
        ID: 532721,
        NeedBalance: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupplierDto != nil {
        // handle response
    }
}
```
