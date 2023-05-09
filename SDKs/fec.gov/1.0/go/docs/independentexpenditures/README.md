# IndependentExpenditures

## Overview

Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate. 

 An independent expenditure is an expenditure for a communication "expressly advocating the election or defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with, or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or a political party or its agents." 

 Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures and the totals are more accurate. You can still find the information from 24 and 48 hour reports in `/schedule/schedule_e/`.

### Available Operations

* [GetSchedulesScheduleE](#getschedulesschedulee) - 
Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [GetSchedulesScheduleEByCandidate](#getschedulesscheduleebycandidate) - 
Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.

* [GetSchedulesScheduleEEfile](#getschedulesscheduleeefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [GetSchedulesScheduleETotalsByCandidate](#getschedulesscheduleetotalsbycandidate) - 
Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


## GetSchedulesScheduleE


Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


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
    res, err := s.IndependentExpenditures.GetSchedulesScheduleE(ctx, operations.GetSchedulesScheduleERequest{
        APIKey: "perspiciatis",
        CandidateID: []string{
            "dicta",
            "impedit",
            "voluptatibus",
            "iste",
        },
        CandidateOffice: []GetSchedulesScheduleECandidateOfficeEnum{
            operations.GetSchedulesScheduleECandidateOfficeEnumUnknown,
            operations.GetSchedulesScheduleECandidateOfficeEnumH,
            operations.GetSchedulesScheduleECandidateOfficeEnumP,
            operations.GetSchedulesScheduleECandidateOfficeEnumUnknown,
        },
        CandidateOfficeDistrict: []string{
            "non",
            "dolor",
            "iusto",
        },
        CandidateOfficeState: []string{
            "doloremque",
        },
        CandidateParty: []string{
            "officia",
        },
        CommitteeID: []string{
            "ea",
            "quidem",
            "voluptas",
            "facilis",
        },
        Cycle: []int{
            596065,
            709036,
            537236,
            954334,
        },
        FilingForm: []string{
            "ullam",
            "unde",
        },
        ImageNumber: []string{
            "animi",
            "impedit",
            "ipsam",
            "corporis",
        },
        IsNotice: []bool{
            false,
            false,
            false,
        },
        LastExpenditureAmount: sdk.Float32(6216.66),
        LastExpenditureDate: types.MustDateFromString("2022-09-17"),
        LastIndex: sdk.Int(85066),
        LastOfficeTotalYtd: sdk.Float32(8744),
        LastSupportOpposeIndicator: sdk.String("consectetur"),
        LineNumber: sdk.String("vitae"),
        MaxAmount: sdk.String("inventore"),
        MaxDate: types.MustDateFromString("2022-09-05"),
        MaxDisseminationDate: types.MustDateFromString("2022-05-22"),
        MaxFilingDate: types.MustDateFromString("2022-08-19"),
        MaxImageNumber: sdk.String("soluta"),
        MinAmount: sdk.String("libero"),
        MinDate: types.MustDateFromString("2021-08-24"),
        MinDisseminationDate: types.MustDateFromString("2022-11-09"),
        MinFilingDate: types.MustDateFromString("2022-10-31"),
        MinImageNumber: sdk.String("vel"),
        MostRecent: sdk.Bool(false),
        PayeeName: []string{
            "quae",
        },
        PerPage: sdk.Int(264333),
        QSpender: []string{
            "exercitationem",
        },
        Sort: sdk.String("itaque"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SupportOpposeIndicator: []GetSchedulesScheduleESupportOpposeIndicatorEnum{
            operations.GetSchedulesScheduleESupportOpposeIndicatorEnumS,
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

## GetSchedulesScheduleEByCandidate


Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.


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
    res, err := s.IndependentExpenditures.GetSchedulesScheduleEByCandidate(ctx, operations.GetSchedulesScheduleEByCandidateRequest{
        APIKey: "unde",
        CandidateID: []string{
            "distinctio",
            "maxime",
            "quia",
            "quia",
        },
        CommitteeID: []string{
            "omnis",
            "libero",
        },
        Cycle: []int{
            663318,
        },
        District: sdk.String("libero"),
        ElectionFull: sdk.Bool(false),
        Office: operations.GetSchedulesScheduleEByCandidateOfficeEnumPresident.ToPointer(),
        Page: sdk.Int(637462),
        PerPage: sdk.Int(554603),
        Sort: sdk.String("placeat"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: sdk.String("sit"),
        SupportOppose: operations.GetSchedulesScheduleEByCandidateSupportOpposeEnumS.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleEEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


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
    res, err := s.IndependentExpenditures.GetSchedulesScheduleEEfile(ctx, operations.GetSchedulesScheduleEEfileRequest{
        APIKey: "ipsa",
        CandidateID: []string{
            "inventore",
            "aperiam",
            "totam",
            "dolore",
        },
        CandidateOffice: operations.GetSchedulesScheduleEEfileCandidateOfficeEnumP.ToPointer(),
        CandidateOfficeDistrict: []string{
            "voluptatem",
            "autem",
            "esse",
        },
        CandidateOfficeState: []string{
            "assumenda",
        },
        CandidateParty: []string{
            "est",
        },
        CandidateSearch: []string{
            "corrupti",
            "molestiae",
            "provident",
            "accusamus",
        },
        CommitteeID: []string{
            "tempore",
            "sint",
            "ea",
            "autem",
        },
        FilingForm: []string{
            "rerum",
            "laudantium",
        },
        ImageNumber: []string{
            "officiis",
            "voluptatibus",
        },
        IsNotice: sdk.Bool(false),
        MaxDisseminationDate: types.MustDateFromString("2021-04-04"),
        MaxExpenditureAmount: sdk.Int(5152),
        MaxExpenditureDate: types.MustDateFromString("2022-04-22"),
        MaxFiledDate: types.MustDateFromString("2021-02-28"),
        MinDisseminationDate: types.MustDateFromString("2022-04-16"),
        MinExpenditureAmount: sdk.Int(885208),
        MinExpenditureDate: types.MustDateFromString("2022-02-26"),
        MinFiledDate: types.MustDateFromString("2022-06-28"),
        MostRecent: sdk.Bool(false),
        Page: sdk.Int(140316),
        PayeeName: []string{
            "corporis",
        },
        PerPage: sdk.Int(621473),
        Sort: sdk.String("earum"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SpenderName: []string{
            "recusandae",
        },
        SupportOpposeIndicator: []GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum{
            operations.GetSchedulesScheduleEEfileSupportOpposeIndicatorEnumS,
            operations.GetSchedulesScheduleEEfileSupportOpposeIndicatorEnumO,
            operations.GetSchedulesScheduleEEfileSupportOpposeIndicatorEnumS,
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

## GetSchedulesScheduleETotalsByCandidate


Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


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
    res, err := s.IndependentExpenditures.GetSchedulesScheduleETotalsByCandidate(ctx, operations.GetSchedulesScheduleETotalsByCandidateRequest{
        APIKey: "beatae",
        CandidateID: []string{
            "molestiae",
            "delectus",
            "cupiditate",
        },
        Cycle: []int{
            253625,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(256916),
        PerPage: sdk.Int(201010),
        Sort: sdk.String("at"),
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
