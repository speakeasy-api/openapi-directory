# Financial

## Overview

Fetch key information about a committee's Form 3, Form 3X, Form 13, or Form 3P financial reports. 

 Most committees are required to summarize their financial activity in each filing; those summaries are included in these files. Generally, committees file reports on a quarterly or monthly basis, but some must also submit a report 12 days before primary elections. Therefore, during the primary season, the period covered by this file may be different for different committees. These totals also incorporate any changes made by committees, if any report covering the period is amended. 

 Information is made available on the API as soon as it's processed. Keep in mind, complex paper filings take longer to process. 

 The financial endpoints use data from FEC [form 5](https://www.fec.gov/pdf/forms/fecfrm5.pdf), for independent expenditors; or the summary and detailed summary pages of the FEC [Form 3](https://www.fec.gov/pdf/forms/fecfrm3.pdf), for House and Senate committees; [Form 3X](https://www.fec.gov/pdf/forms/fecfrm3x.pdf), for PACs and parties; [Form 13](https://www.fec.gov/pdf/forms/fecfrm13.pdf) for inaugural committees; and [Form 3P](https://www.fec.gov/pdf/forms/fecfrm3p.pdf), for presidential committees.

### Available Operations

* [GetCommitteeCommitteeIDReports](#getcommitteecommitteeidreports) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [GetCommitteeCommitteeIDTotals](#getcommitteecommitteeidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [GetElections](#getelections) - 
Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.

* [GetElectionsSearch](#getelectionssearch) - 
List elections by cycle, office, state, and district.

* [GetElectionsSummary](#getelectionssummary) - 
List elections by cycle, office, state, and district.

* [GetReportsEntityType](#getreportsentitytype) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [GetTotalsByEntity](#gettotalsbyentity) - 
Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

* [GetTotalsInauguralCommitteesByContributor](#gettotalsinauguralcommitteesbycontributor) - 
This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.


* [GetTotalsEntityType](#gettotalsentitytype) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



## GetCommitteeCommitteeIDReports


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetCommitteeCommitteeIDReports(ctx, operations.GetCommitteeCommitteeIDReportsRequest{
        APIKey: "culpa",
        BeginningImageNumber: []string{
            "sapiente",
        },
        CandidateID: sdk.String("officiis"),
        CommitteeID: "architecto",
        Cycle: []int{
            867168,
            891315,
            29190,
        },
        IsAmended: sdk.Bool(false),
        MaxCashOnHandEndPeriodAmount: sdk.String("alias"),
        MaxDebtsOwedExpenditures: sdk.String("deleniti"),
        MaxDisbursementsAmount: sdk.String("earum"),
        MaxIndependentExpenditures: sdk.String("ex"),
        MaxPartyCoordinatedExpenditures: sdk.String("sapiente"),
        MaxReceiptsAmount: sdk.String("rem"),
        MaxTotalContributions: sdk.String("minus"),
        MinCashOnHandEndPeriodAmount: sdk.String("nemo"),
        MinDebtsOwedAmount: sdk.String("asperiores"),
        MinDisbursementsAmount: sdk.String("ratione"),
        MinIndependentExpenditures: sdk.String("ullam"),
        MinPartyCoordinatedExpenditures: sdk.String("perferendis"),
        MinReceiptsAmount: sdk.String("illum"),
        MinTotalContributions: sdk.String("totam"),
        Page: sdk.Int(770675),
        PerPage: sdk.Int(842777),
        ReportType: []string{
            "ipsam",
            "culpa",
            "dolor",
        },
        Sort: []string{
            "inventore",
            "deleniti",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Type: []string{
            "tempora",
        },
        Year: []int{
            8689,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitteeCommitteeIDTotals


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetCommitteeCommitteeIDTotals(ctx, operations.GetCommitteeCommitteeIDTotalsRequest{
        APIKey: "architecto",
        CommitteeID: "sit",
        Cycle: []int{
            144286,
            66149,
        },
        Page: sdk.Int(513760),
        PerPage: sdk.Int(65604),
        Sort: sdk.String("dolor"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetElections


Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetElections(ctx, operations.GetElectionsRequest{
        APIKey: "fugiat",
        Cycle: 369490,
        District: sdk.String("consequuntur"),
        ElectionFull: sdk.Bool(false),
        Office: operations.GetElectionsOfficeEnumHouse,
        Page: sdk.Int(559682),
        PerPage: sdk.Int(911198),
        Sort: sdk.String("impedit"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetElectionsSearch


List elections by cycle, office, state, and district.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetElectionsSearch(ctx, operations.GetElectionsSearchRequest{
        APIKey: "esse",
        Cycle: []int{
            153369,
            332191,
            199596,
            712927,
        },
        District: []string{
            "vel",
            "voluptatum",
        },
        Office: []GetElectionsSearchOfficeEnum{
            operations.GetElectionsSearchOfficeEnumSenate,
            operations.GetElectionsSearchOfficeEnumHouse,
        },
        Page: sdk.Int(781480),
        PerPage: sdk.Int(421844),
        Sort: []string{
            "laboriosam",
            "recusandae",
            "consequuntur",
            "voluptatem",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "necessitatibus",
            "quasi",
        },
        Zip: []int{
            871103,
            878373,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetElectionsSummary


List elections by cycle, office, state, and district.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetElectionsSummary(ctx, operations.GetElectionsSummaryRequest{
        APIKey: "est",
        Cycle: 690785,
        District: sdk.String("sequi"),
        ElectionFull: sdk.Bool(false),
        Office: operations.GetElectionsSummaryOfficeEnumPresident,
        State: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReportsEntityType


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetReportsEntityType(ctx, operations.GetReportsEntityTypeRequest{
        AmendmentIndicator: []GetReportsEntityTypeAmendmentIndicatorEnum{
            operations.GetReportsEntityTypeAmendmentIndicatorEnumC,
            operations.GetReportsEntityTypeAmendmentIndicatorEnumA,
            operations.GetReportsEntityTypeAmendmentIndicatorEnumT,
            operations.GetReportsEntityTypeAmendmentIndicatorEnumT,
        },
        APIKey: "officia",
        BeginningImageNumber: []string{
            "numquam",
            "nemo",
        },
        CandidateID: sdk.String("quos"),
        CommitteeID: []string{
            "aspernatur",
            "ducimus",
        },
        CommitteeType: []string{
            "fuga",
        },
        Cycle: []int{
            277340,
            97493,
            524380,
        },
        EntityType: operations.GetReportsEntityTypeEntityTypeEnumIeOnly,
        FilerType: operations.GetReportsEntityTypeFilerTypeEnumEFile.ToPointer(),
        IsAmended: sdk.Bool(false),
        MaxCashOnHandEndPeriodAmount: sdk.String("nisi"),
        MaxDebtsOwedExpenditures: sdk.String("consequuntur"),
        MaxDisbursementsAmount: sdk.String("consectetur"),
        MaxIndependentExpenditures: sdk.String("aperiam"),
        MaxPartyCoordinatedExpenditures: sdk.String("cupiditate"),
        MaxReceiptDate: types.MustDateFromString("2020-10-05"),
        MaxReceiptsAmount: sdk.String("alias"),
        MaxTotalContributions: sdk.String("omnis"),
        MinCashOnHandEndPeriodAmount: sdk.String("eos"),
        MinDebtsOwedAmount: sdk.String("occaecati"),
        MinDisbursementsAmount: sdk.String("iste"),
        MinIndependentExpenditures: sdk.String("magni"),
        MinPartyCoordinatedExpenditures: sdk.String("inventore"),
        MinReceiptDate: types.MustDateFromString("2021-03-28"),
        MinReceiptsAmount: sdk.String("voluptatibus"),
        MinTotalContributions: sdk.String("distinctio"),
        MostRecent: sdk.Bool(false),
        Page: sdk.Int(608593),
        PerPage: sdk.Int(966390),
        QFiler: []string{
            "praesentium",
            "maxime",
        },
        QSpender: []string{
            "temporibus",
            "quos",
        },
        ReportType: []string{
            "itaque",
            "commodi",
        },
        Sort: []string{
            "earum",
            "modi",
            "nam",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Year: []int{
            32901,
            371919,
            425946,
            1383,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTotalsByEntity


Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetTotalsByEntity(ctx, operations.GetTotalsByEntityRequest{
        APIKey: "quasi",
        Cycle: 247685,
        Page: sdk.Int(978548),
        PerPage: sdk.Int(318233),
        Sort: sdk.String("sint"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTotalsInauguralCommitteesByContributor


This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.



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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetTotalsInauguralCommitteesByContributor(ctx, operations.GetTotalsInauguralCommitteesByContributorRequest{
        APIKey: "nulla",
        CommitteeID: []string{
            "esse",
            "nemo",
            "reprehenderit",
        },
        ContributorName: []string{
            "quis",
            "sint",
            "accusamus",
        },
        Cycle: []int{
            945027,
            900103,
            991891,
            404306,
        },
        Page: sdk.Int(376741),
        PerPage: sdk.Int(895346),
        Sort: []string{
            "quae",
            "minus",
            "fuga",
            "laborum",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTotalsEntityType


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Financial.GetTotalsEntityType(ctx, operations.GetTotalsEntityTypeRequest{
        APIKey: "consectetur",
        CommitteeDesignation: []string{
            "atque",
        },
        CommitteeID: []string{
            "impedit",
        },
        CommitteeState: []string{
            "soluta",
        },
        CommitteeType: []string{
            "nam",
            "dolore",
            "iusto",
            "voluptate",
        },
        Cycle: []int{
            493958,
        },
        EntityType: operations.GetTotalsEntityTypeEntityTypeEnumPac,
        FilingFrequency: []GetTotalsEntityTypeFilingFrequencyEnum{
            operations.GetTotalsEntityTypeFilingFrequencyEnumQ,
            operations.GetTotalsEntityTypeFilingFrequencyEnumMinusA,
            operations.GetTotalsEntityTypeFilingFrequencyEnumN,
            operations.GetTotalsEntityTypeFilingFrequencyEnumA,
        },
        MaxDisbursements: sdk.String("voluptatibus"),
        MaxFirstF1Date: types.MustDateFromString("2022-09-13"),
        MaxLastCashOnHandEndPeriod: sdk.String("quibusdam"),
        MaxLastDebtsOwedByCommittee: sdk.String("inventore"),
        MaxReceipts: sdk.String("facere"),
        MinDisbursements: sdk.String("libero"),
        MinFirstF1Date: types.MustDateFromString("2022-01-09"),
        MinLastCashOnHandEndPeriod: sdk.String("quia"),
        MinLastDebtsOwedByCommittee: sdk.String("porro"),
        MinReceipts: sdk.String("aliquam"),
        OrganizationType: []GetTotalsEntityTypeOrganizationTypeEnum{
            operations.GetTotalsEntityTypeOrganizationTypeEnumUnknown,
        },
        Page: sdk.Int(36561),
        PerPage: sdk.Int(424663),
        Sort: sdk.String("ea"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SponsorCandidateID: []string{
            "vero",
        },
        TreasurerName: []string{
            "eum",
            "velit",
            "ut",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
