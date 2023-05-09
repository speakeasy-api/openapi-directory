# Customers

### Available Operations

* [CustomersDelete](#customersdelete) - Removes an existing Customer.
* [CustomersGet](#customersget) - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [CustomersGetAccountTrans](#customersgetaccounttrans) - Returns a list of Customer's account transactions.
* [CustomersGetOpeningBalance](#customersgetopeningbalance) - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [CustomersGetOpeningBalanceList](#customersgetopeningbalancelist) - Returns a list of Customer's opening balance transactions.
* [CustomersGetQuotes](#customersgetquotes) - Returns a list of Customer's quotes.
* [CustomersPost](#customerspost) - Creates a new Customer.
* [CustomersProcessBatch](#customersprocessbatch) - Processes a batch of Customers.
* [CustomersPut](#customersput) - Updates an existing Customer.
* [GetV1CustomersID](#getv1customersid) - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

## CustomersDelete

Removes an existing Customer.

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
    res, err := s.Customers.CustomersDelete(ctx, operations.CustomersDeleteRequest{
        ID: 681359,
        Timestamp: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomersDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomersGet

Returns a list of company's Customers. Supports OData querying protocol.
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
    res, err := s.Customers.CustomersGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultCustomerQueryDto != nil {
        // handle response
    }
}
```

## CustomersGetAccountTrans

Returns a list of Customer's account transactions.

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
    res, err := s.Customers.CustomersGetAccountTrans(ctx, operations.CustomersGetAccountTransRequest{
        ItemID: 178367,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTranDtos != nil {
        // handle response
    }
}
```

## CustomersGetOpeningBalance

Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

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
    res, err := s.Customers.CustomersGetOpeningBalance(ctx, operations.CustomersGetOpeningBalanceRequest{
        ItemID: 373813,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OwnerOpeningBalanceInPeriodsDto != nil {
        // handle response
    }
}
```

## CustomersGetOpeningBalanceList

Returns a list of Customer's opening balance transactions.

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
    res, err := s.Customers.CustomersGetOpeningBalanceList(ctx, operations.CustomersGetOpeningBalanceListRequest{
        ItemID: 69859,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OwnerOpeningBalanceDtos != nil {
        // handle response
    }
}
```

## CustomersGetQuotes

Returns a list of Customer's quotes.

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
    res, err := s.Customers.CustomersGetQuotes(ctx, operations.CustomersGetQuotesRequest{
        ItemID: 587600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteDtos != nil {
        // handle response
    }
}
```

## CustomersPost

Creates a new Customer.

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
    res, err := s.Customers.CustomersPost(ctx, shared.CustomerDto{
        AccountName: sdk.String("consequatur"),
        AccountNumber: sdk.String("tempora"),
        AdditionalEmails: []string{
            "ipsam",
            "aspernatur",
            "sequi",
            "quo",
        },
        Address: []string{
            "recusandae",
            "aperiam",
        },
        AuthCode: sdk.String("distinctio"),
        Bank: &shared.EFTBankDto{
            Branch: sdk.String("quod"),
            ID: sdk.Int64(490819),
            Name: sdk.String("Jackie Leannon"),
            SortCode: sdk.String("odio"),
        },
        BusinessIdentifierCode: sdk.String("occaecati"),
        Code: sdk.String("commodi"),
        Contact: sdk.String("sapiente"),
        Delivery: []string{
            "deserunt",
        },
        EFTReference: sdk.String("molestiae"),
        Email: sdk.String("Ottilie_Keeling@gmail.com"),
        Fax: sdk.String("consequuntur"),
        ID: sdk.Int64(536178),
        InternationalBankAccountNumber: sdk.String("fugit"),
        LedgerBalance: sdk.Float64(6813.93),
        Mobile: sdk.String("1-451-431-9111 x9550"),
        Name: sdk.String("Ms. Olive Tillman"),
        OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
            CurrentMonth: sdk.Float64(7241.68),
            OneMonthOld: sdk.Float64(8771.31),
            ThreeMonthsOld: sdk.Float64(3990.25),
            TwoMonthsOld: sdk.Float64(934.59),
        },
        OpeningBalances: []shared.OwnerOpeningBalanceDto{
            shared.OwnerOpeningBalanceDto{
                EntryDate: types.MustTimeFromString("2022-04-24T03:22:50.654Z"),
                ID: sdk.Int64(473221),
                IsChanged: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2021-11-03T10:56:47.600Z"),
                Reference: sdk.String("minima"),
                Timestamp: sdk.String("distinctio"),
                Total: sdk.Float64(7567.79),
                TotalVAT: sdk.Float64(270.69),
                Unpaid: sdk.Float64(6360.61),
                VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(2400.2),
                        VatRateID: sdk.Int64(766964),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(1605.38),
                        VatRateID: sdk.Int64(9766),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(7963.92),
                        VatRateID: sdk.Int64(308286),
                    },
                },
            },
            shared.OwnerOpeningBalanceDto{
                EntryDate: types.MustTimeFromString("2022-04-21T00:17:42.407Z"),
                ID: sdk.Int64(458139),
                IsChanged: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2021-10-26T13:57:26.455Z"),
                Reference: sdk.String("a"),
                Timestamp: sdk.String("nulla"),
                Total: sdk.Float64(5578.11),
                TotalVAT: sdk.Float64(4572.23),
                Unpaid: sdk.Float64(974.68),
                VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(6216.79),
                        VatRateID: sdk.Int64(575751),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(8630.23),
                        VatRateID: sdk.Int64(820767),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(1576.32),
                        VatRateID: sdk.Int64(908844),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(9924.3),
                        VatRateID: sdk.Int64(815524),
                    },
                },
            },
            shared.OwnerOpeningBalanceDto{
                EntryDate: types.MustTimeFromString("2022-11-03T19:31:44.626Z"),
                ID: sdk.Int64(94458),
                IsChanged: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2021-09-25T11:11:22.943Z"),
                Reference: sdk.String("aliquid"),
                Timestamp: sdk.String("tenetur"),
                Total: sdk.Float64(627.13),
                TotalVAT: sdk.Float64(9367.47),
                Unpaid: sdk.Float64(4240.32),
                VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(2586.84),
                        VatRateID: sdk.Int64(727697),
                    },
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(8490.39),
                        VatRateID: sdk.Int64(742238),
                    },
                },
            },
            shared.OwnerOpeningBalanceDto{
                EntryDate: types.MustTimeFromString("2022-09-10T22:48:07.154Z"),
                ID: sdk.Int64(958983),
                IsChanged: sdk.Bool(false),
                ProcDate: types.MustTimeFromString("2022-08-24T06:58:07.315Z"),
                Reference: sdk.String("reprehenderit"),
                Timestamp: sdk.String("ullam"),
                Total: sdk.Float64(3917.74),
                TotalVAT: sdk.Float64(163.28),
                Unpaid: sdk.Float64(5318.49),
                VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                    shared.OwnerOpeningBalanceVatEntryDto{
                        Amount: sdk.Float64(8453.58),
                        VatRateID: sdk.Int64(401259),
                    },
                },
            },
        },
        OurCode: sdk.String("deleniti"),
        OwnerTypeID: sdk.Int64(929292),
        Phone: sdk.String("1-269-280-4030 x2268"),
        Timestamp: sdk.String("accusantium"),
        VatAnalysisTypeID: sdk.Int64(522371),
        VatReg: sdk.String("aut"),
        VatType: sdk.Int64(513075),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomersPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomersProcessBatch

Processes a batch of Customers.

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
    res, err := s.Customers.CustomersProcessBatch(ctx, []shared.BatchItemCustomerDto{
        shared.BatchItemCustomerDto{
            Item: &shared.CustomerDto{
                AccountName: sdk.String("mollitia"),
                AccountNumber: sdk.String("ab"),
                AdditionalEmails: []string{
                    "non",
                    "voluptatem",
                    "dolor",
                },
                Address: []string{
                    "numquam",
                    "impedit",
                    "explicabo",
                },
                AuthCode: sdk.String("voluptas"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("aut"),
                    ID: sdk.Int64(491025),
                    Name: sdk.String("Elisa Mosciski"),
                    SortCode: sdk.String("voluptas"),
                },
                BusinessIdentifierCode: sdk.String("asperiores"),
                Code: sdk.String("aperiam"),
                Contact: sdk.String("ea"),
                Delivery: []string{
                    "consequuntur",
                    "repellendus",
                },
                EFTReference: sdk.String("officia"),
                Email: sdk.String("Jennifer.Nikolaus6@hotmail.com"),
                Fax: sdk.String("quaerat"),
                ID: sdk.Int64(783235),
                InternationalBankAccountNumber: sdk.String("quod"),
                LedgerBalance: sdk.Float64(2883.98),
                Mobile: sdk.String("(366) 526-6958"),
                Name: sdk.String("Dora Luettgen"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(8225.6),
                    OneMonthOld: sdk.Float64(7065.75),
                    ThreeMonthsOld: sdk.Float64(7382.27),
                    TwoMonthsOld: sdk.Float64(4148.57),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-01-12T08:24:33.830Z"),
                        ID: sdk.Int64(828657),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-01-28T09:17:23.255Z"),
                        Reference: sdk.String("aliquid"),
                        Timestamp: sdk.String("aperiam"),
                        Total: sdk.Float64(7386.83),
                        TotalVAT: sdk.Float64(2326.27),
                        Unpaid: sdk.Float64(4490.83),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(9372.85),
                                VatRateID: sdk.Int64(814967),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(2572.33),
                                VatRateID: sdk.Int64(985492),
                            },
                        },
                    },
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-01-12T07:48:28.322Z"),
                        ID: sdk.Int64(697142),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2020-04-23T16:59:51.275Z"),
                        Reference: sdk.String("dolore"),
                        Timestamp: sdk.String("sunt"),
                        Total: sdk.Float64(9920.12),
                        TotalVAT: sdk.Float64(2415.45),
                        Unpaid: sdk.Float64(2494.2),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(1059.06),
                                VatRateID: sdk.Int64(489509),
                            },
                        },
                    },
                },
                OurCode: sdk.String("a"),
                OwnerTypeID: sdk.Int64(891523),
                Phone: sdk.String("463.297.1862"),
                Timestamp: sdk.String("aspernatur"),
                VatAnalysisTypeID: sdk.Int64(379057),
                VatReg: sdk.String("voluptas"),
                VatType: sdk.Int64(374296),
            },
            OpCode: shared.BatchItemCustomerDtoOpCodeEnumOne.ToPointer(),
        },
        shared.BatchItemCustomerDto{
            Item: &shared.CustomerDto{
                AccountName: sdk.String("nobis"),
                AccountNumber: sdk.String("dolorum"),
                AdditionalEmails: []string{
                    "minus",
                },
                Address: []string{
                    "blanditiis",
                },
                AuthCode: sdk.String("in"),
                Bank: &shared.EFTBankDto{
                    Branch: sdk.String("dolore"),
                    ID: sdk.Int64(304468),
                    Name: sdk.String("Lionel Herman"),
                    SortCode: sdk.String("blanditiis"),
                },
                BusinessIdentifierCode: sdk.String("quas"),
                Code: sdk.String("hic"),
                Contact: sdk.String("nesciunt"),
                Delivery: []string{
                    "corrupti",
                    "pariatur",
                    "totam",
                },
                EFTReference: sdk.String("hic"),
                Email: sdk.String("Nettie.Bailey96@yahoo.com"),
                Fax: sdk.String("explicabo"),
                ID: sdk.Int64(994401),
                InternationalBankAccountNumber: sdk.String("facilis"),
                LedgerBalance: sdk.Float64(4518.22),
                Mobile: sdk.String("262.714.4613 x6139"),
                Name: sdk.String("Ms. Gregory Wisoky"),
                OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                    CurrentMonth: sdk.Float64(2748.23),
                    OneMonthOld: sdk.Float64(1484.78),
                    ThreeMonthsOld: sdk.Float64(5922.31),
                    TwoMonthsOld: sdk.Float64(2587.02),
                },
                OpeningBalances: []shared.OwnerOpeningBalanceDto{
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-08-05T13:00:56.741Z"),
                        ID: sdk.Int64(579912),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2021-01-18T16:49:49.451Z"),
                        Reference: sdk.String("tempora"),
                        Timestamp: sdk.String("tempora"),
                        Total: sdk.Float64(4554.44),
                        TotalVAT: sdk.Float64(9700.76),
                        Unpaid: sdk.Float64(4017.13),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(2484.13),
                                VatRateID: sdk.Int64(888044),
                            },
                        },
                    },
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2021-08-01T17:10:22.856Z"),
                        ID: sdk.Int64(310381),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-08-17T20:12:51.918Z"),
                        Reference: sdk.String("debitis"),
                        Timestamp: sdk.String("rem"),
                        Total: sdk.Float64(265.22),
                        TotalVAT: sdk.Float64(7505.95),
                        Unpaid: sdk.Float64(6256.37),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(3295.43),
                                VatRateID: sdk.Int64(924159),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(9671.22),
                                VatRateID: sdk.Int64(862319),
                            },
                        },
                    },
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2022-12-14T05:28:22.043Z"),
                        ID: sdk.Int64(901483),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-09-02T13:45:48.565Z"),
                        Reference: sdk.String("in"),
                        Timestamp: sdk.String("officiis"),
                        Total: sdk.Float64(1046.27),
                        TotalVAT: sdk.Float64(5124.52),
                        Unpaid: sdk.Float64(3484.76),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(7400.98),
                                VatRateID: sdk.Int64(386827),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(6805.15),
                                VatRateID: sdk.Int64(530089),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(6223.85),
                                VatRateID: sdk.Int64(944708),
                            },
                        },
                    },
                    shared.OwnerOpeningBalanceDto{
                        EntryDate: types.MustTimeFromString("2021-03-20T05:03:12.319Z"),
                        ID: sdk.Int64(204923),
                        IsChanged: sdk.Bool(false),
                        ProcDate: types.MustTimeFromString("2022-04-26T13:26:55.921Z"),
                        Reference: sdk.String("officia"),
                        Timestamp: sdk.String("dolorum"),
                        Total: sdk.Float64(5483.61),
                        TotalVAT: sdk.Float64(8792.35),
                        Unpaid: sdk.Float64(2726.83),
                        VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(1482.68),
                                VatRateID: sdk.Int64(282699),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(8563.03),
                                VatRateID: sdk.Int64(30235),
                            },
                            shared.OwnerOpeningBalanceVatEntryDto{
                                Amount: sdk.Float64(6350.57),
                                VatRateID: sdk.Int64(710337),
                            },
                        },
                    },
                },
                OurCode: sdk.String("magnam"),
                OwnerTypeID: sdk.Int64(7884),
                Phone: sdk.String("405.693.0541 x043"),
                Timestamp: sdk.String("saepe"),
                VatAnalysisTypeID: sdk.Int64(622231),
                VatReg: sdk.String("consequatur"),
                VatType: sdk.Int64(279068),
            },
            OpCode: shared.BatchItemCustomerDtoOpCodeEnumThree.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomersProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CustomersPut

Updates an existing Customer.

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
    res, err := s.Customers.CustomersPut(ctx, operations.CustomersPutRequest{
        CustomerDto: shared.CustomerDto{
            AccountName: sdk.String("dolorem"),
            AccountNumber: sdk.String("harum"),
            AdditionalEmails: []string{
                "architecto",
            },
            Address: []string{
                "labore",
                "quidem",
                "atque",
            },
            AuthCode: sdk.String("laborum"),
            Bank: &shared.EFTBankDto{
                Branch: sdk.String("nam"),
                ID: sdk.Int64(948861),
                Name: sdk.String("Patricia Farrell"),
                SortCode: sdk.String("unde"),
            },
            BusinessIdentifierCode: sdk.String("reiciendis"),
            Code: sdk.String("provident"),
            Contact: sdk.String("repellendus"),
            Delivery: []string{
                "voluptates",
                "perferendis",
                "est",
                "quidem",
            },
            EFTReference: sdk.String("reprehenderit"),
            Email: sdk.String("Marlene.Langosh@hotmail.com"),
            Fax: sdk.String("voluptatem"),
            ID: sdk.Int64(790840),
            InternationalBankAccountNumber: sdk.String("repudiandae"),
            LedgerBalance: sdk.Float64(972.43),
            Mobile: sdk.String("595-568-0428 x4568"),
            Name: sdk.String("Tomas Mosciski"),
            OpeningBalance: &shared.OwnerOpeningBalanceInPeriodsDto{
                CurrentMonth: sdk.Float64(4044.25),
                OneMonthOld: sdk.Float64(9805.81),
                ThreeMonthsOld: sdk.Float64(5446.47),
                TwoMonthsOld: sdk.Float64(8717.86),
            },
            OpeningBalances: []shared.OwnerOpeningBalanceDto{
                shared.OwnerOpeningBalanceDto{
                    EntryDate: types.MustTimeFromString("2022-03-30T01:40:53.027Z"),
                    ID: sdk.Int64(922348),
                    IsChanged: sdk.Bool(false),
                    ProcDate: types.MustTimeFromString("2021-12-01T19:00:30.130Z"),
                    Reference: sdk.String("sunt"),
                    Timestamp: sdk.String("recusandae"),
                    Total: sdk.Float64(6806.97),
                    TotalVAT: sdk.Float64(8298.98),
                    Unpaid: sdk.Float64(2871.19),
                    VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(429.76),
                            VatRateID: sdk.Int64(919783),
                        },
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(1160.98),
                            VatRateID: sdk.Int64(36033),
                        },
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(1064.29),
                            VatRateID: sdk.Int64(174772),
                        },
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(3164.88),
                            VatRateID: sdk.Int64(389135),
                        },
                    },
                },
                shared.OwnerOpeningBalanceDto{
                    EntryDate: types.MustTimeFromString("2022-01-18T11:13:47.798Z"),
                    ID: sdk.Int64(562783),
                    IsChanged: sdk.Bool(false),
                    ProcDate: types.MustTimeFromString("2022-02-04T04:20:12.809Z"),
                    Reference: sdk.String("consequuntur"),
                    Timestamp: sdk.String("occaecati"),
                    Total: sdk.Float64(8863.05),
                    TotalVAT: sdk.Float64(5979.37),
                    Unpaid: sdk.Float64(4463.94),
                    VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(9078.76),
                            VatRateID: sdk.Int64(580887),
                        },
                    },
                },
                shared.OwnerOpeningBalanceDto{
                    EntryDate: types.MustTimeFromString("2022-11-08T18:10:37.954Z"),
                    ID: sdk.Int64(661118),
                    IsChanged: sdk.Bool(false),
                    ProcDate: types.MustTimeFromString("2022-07-24T07:17:21.827Z"),
                    Reference: sdk.String("error"),
                    Timestamp: sdk.String("illo"),
                    Total: sdk.Float64(3613.06),
                    TotalVAT: sdk.Float64(6964.63),
                    Unpaid: sdk.Float64(9109.94),
                    VatEntries: []shared.OwnerOpeningBalanceVatEntryDto{
                        shared.OwnerOpeningBalanceVatEntryDto{
                            Amount: sdk.Float64(8784.93),
                            VatRateID: sdk.Int64(39615),
                        },
                    },
                },
            },
            OurCode: sdk.String("iure"),
            OwnerTypeID: sdk.Int64(59944),
            Phone: sdk.String("249-374-8167 x5533"),
            Timestamp: sdk.String("repellat"),
            VatAnalysisTypeID: sdk.Int64(3099),
            VatReg: sdk.String("corporis"),
            VatType: sdk.Int64(597303),
        },
        ID: 470649,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomersPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1CustomersID

Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

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
    res, err := s.Customers.GetV1CustomersID(ctx, operations.GetV1CustomersIDRequest{
        ID: 649078,
        NeedBalance: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerDto != nil {
        // handle response
    }
}
```
