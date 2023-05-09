# Candidate

## Overview

Candidate endpoints give you access to information about the people running for office. This information is organized by `candidate_id`. If you're unfamiliar with candidate IDs, using `/candidates/search/` will help you locate a particular candidate. 

 Officially, a candidate is an individual seeking nomination for election to a federal office. People become candidates when they (or agents working on their behalf) raise contributions or make expenditures that exceed $5,000. 

 The candidate endpoints primarily use data from FEC registration [Form 1](https://www.fec.gov/resources/cms-content/documents/fecfrm1.pdf) for committee information and [Form 2](https://www.fec.gov/resources/cms-content/documents/fecfrm2.pdf) for candidate information.

### Available Operations

* [GetCandidateCandidateID](#getcandidatecandidateid) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [GetCandidateCandidateIDHistory](#getcandidatecandidateidhistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [GetCandidateCandidateIDHistoryCycle](#getcandidatecandidateidhistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [GetCandidateCandidateIDTotals](#getcandidatecandidateidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [GetCandidates](#getcandidates) - 
Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

* [GetCandidatesSearch](#getcandidatessearch) - 
Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.

* [GetCandidatesTotals](#getcandidatestotals) - 
Aggregated candidate receipts and disbursements grouped by cycle.

* [GetCandidatesTotalsAggregates](#getcandidatestotalsaggregates) -  Candidate total receipts and disbursements aggregated by `aggregate_by`.

* [GetCandidatesTotalsByOffice](#getcandidatestotalsbyoffice) -  Aggregated candidate receipts and disbursements grouped by office by cycle.

* [GetCandidatesTotalsByOfficeByParty](#getcandidatestotalsbyofficebyparty) -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.

* [GetCommitteeCommitteeIDCandidates](#getcommitteecommitteeidcandidates) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [GetCommitteeCommitteeIDCandidatesHistory](#getcommitteecommitteeidcandidateshistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [GetCommitteeCommitteeIDCandidatesHistoryCycle](#getcommitteecommitteeidcandidateshistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


## GetCandidateCandidateID


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


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
    res, err := s.Candidate.GetCandidateCandidateID(ctx, operations.GetCandidateCandidateIDRequest{
        APIKey: "sapiente",
        CandidateID: "architecto",
        CandidateStatus: []GetCandidateCandidateIDCandidateStatusEnum{
            operations.GetCandidateCandidateIDCandidateStatusEnumC,
            operations.GetCandidateCandidateIDCandidateStatusEnumN,
            operations.GetCandidateCandidateIDCandidateStatusEnumUnknown,
        },
        Cycle: []int{
            653108,
            581850,
            253291,
            414369,
        },
        District: []string{
            "molestiae",
            "velit",
        },
        ElectionYear: []int{
            158969,
            338007,
            110375,
        },
        FederalFundsFlag: sdk.Bool(false),
        HasRaisedFunds: sdk.Bool(false),
        IncumbentChallenge: []GetCandidateCandidateIDIncumbentChallengeEnum{
            operations.GetCandidateCandidateIDIncumbentChallengeEnumC,
            operations.GetCandidateCandidateIDIncumbentChallengeEnumI,
            operations.GetCandidateCandidateIDIncumbentChallengeEnumUnknown,
        },
        Name: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
        Office: []GetCandidateCandidateIDOfficeEnum{
            operations.GetCandidateCandidateIDOfficeEnumUnknown,
            operations.GetCandidateCandidateIDOfficeEnumUnknown,
            operations.GetCandidateCandidateIDOfficeEnumS,
            operations.GetCandidateCandidateIDOfficeEnumP,
        },
        Page: sdk.Int(673660),
        Party: []string{
            "reiciendis",
        },
        PerPage: sdk.Int(976460),
        Sort: sdk.String("vero"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "praesentium",
            "voluptatibus",
        },
        Year: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCandidateCandidateIDHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


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
    res, err := s.Candidate.GetCandidateCandidateIDHistory(ctx, operations.GetCandidateCandidateIDHistoryRequest{
        APIKey: "omnis",
        CandidateID: "voluptate",
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(739264),
        PerPage: sdk.Int(19987),
        Sort: sdk.String("doloremque"),
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

## GetCandidateCandidateIDHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


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
    res, err := s.Candidate.GetCandidateCandidateIDHistoryCycle(ctx, operations.GetCandidateCandidateIDHistoryCycleRequest{
        APIKey: "reprehenderit",
        CandidateID: "ut",
        Cycle: 979587,
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(120196),
        PerPage: sdk.Int(359444),
        Sort: sdk.String("dolore"),
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

## GetCandidateCandidateIDTotals


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
    res, err := s.Candidate.GetCandidateCandidateIDTotals(ctx, operations.GetCandidateCandidateIDTotalsRequest{
        APIKey: "iusto",
        CandidateID: "dicta",
        Cycle: []int{
            317983,
            880476,
            414263,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(918236),
        PerPage: sdk.Int(64147),
        Sort: sdk.String("ipsum"),
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

## GetCandidates


Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.


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
    res, err := s.Candidate.GetCandidates(ctx, operations.GetCandidatesRequest{
        APIKey: "quidem",
        CandidateID: []string{
            "excepturi",
            "pariatur",
            "modi",
        },
        CandidateStatus: []GetCandidatesCandidateStatusEnum{
            operations.GetCandidatesCandidateStatusEnumF,
            operations.GetCandidatesCandidateStatusEnumP,
            operations.GetCandidatesCandidateStatusEnumUnknown,
        },
        Cycle: []int{
            575947,
            83112,
            929297,
            277718,
        },
        District: []string{
            "consequatur",
            "est",
        },
        ElectionYear: []int{
            131797,
            647174,
            716327,
            841386,
        },
        FederalFundsFlag: sdk.Bool(false),
        HasRaisedFunds: sdk.Bool(false),
        IncumbentChallenge: []GetCandidatesIncumbentChallengeEnum{
            operations.GetCandidatesIncumbentChallengeEnumI,
            operations.GetCandidatesIncumbentChallengeEnumUnknown,
        },
        IsActiveCandidate: sdk.Bool(false),
        MaxFirstFileDate: types.MustDateFromString("2022-05-31"),
        MinFirstFileDate: types.MustDateFromString("2022-12-17"),
        Name: []string{
            "assumenda",
        },
        Office: []GetCandidatesOfficeEnum{
            operations.GetCandidatesOfficeEnumUnknown,
            operations.GetCandidatesOfficeEnumUnknown,
        },
        Page: sdk.Int(677817),
        Party: []string{
            "tempora",
            "facilis",
            "tempore",
        },
        PerPage: sdk.Int(288476),
        Q: []string{
            "eum",
            "non",
            "eligendi",
            "sint",
        },
        Sort: sdk.String("aliquid"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "necessitatibus",
            "sint",
            "officia",
        },
        Year: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCandidatesSearch


Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.


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
    res, err := s.Candidate.GetCandidatesSearch(ctx, operations.GetCandidatesSearchRequest{
        APIKey: "debitis",
        CandidateID: []string{
            "dolorum",
            "in",
            "in",
            "illum",
        },
        CandidateStatus: []GetCandidatesSearchCandidateStatusEnum{
            operations.GetCandidatesSearchCandidateStatusEnumN,
            operations.GetCandidatesSearchCandidateStatusEnumUnknown,
            operations.GetCandidatesSearchCandidateStatusEnumC,
            operations.GetCandidatesSearchCandidateStatusEnumN,
        },
        Cycle: []int{
            411820,
            396506,
            675439,
            881104,
        },
        District: []string{
            "occaecati",
        },
        ElectionYear: []int{
            881736,
            965417,
        },
        FederalFundsFlag: sdk.Bool(false),
        HasRaisedFunds: sdk.Bool(false),
        IncumbentChallenge: []GetCandidatesSearchIncumbentChallengeEnum{
            operations.GetCandidatesSearchIncumbentChallengeEnumC,
            operations.GetCandidatesSearchIncumbentChallengeEnumC,
            operations.GetCandidatesSearchIncumbentChallengeEnumC,
        },
        IsActiveCandidate: sdk.Bool(false),
        MaxFirstFileDate: types.MustDateFromString("2021-12-07"),
        MinFirstFileDate: types.MustDateFromString("2022-04-23"),
        Name: []string{
            "nisi",
            "vel",
            "natus",
        },
        Office: []GetCandidatesSearchOfficeEnum{
            operations.GetCandidatesSearchOfficeEnumH,
            operations.GetCandidatesSearchOfficeEnumUnknown,
            operations.GetCandidatesSearchOfficeEnumH,
        },
        Page: sdk.Int(301575),
        Party: []string{
            "id",
            "labore",
            "labore",
        },
        PerPage: sdk.Int(383462),
        Q: []string{
            "nobis",
            "eum",
            "vero",
        },
        Sort: sdk.String("aspernatur"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "magnam",
        },
        Year: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCandidatesTotals


Aggregated candidate receipts and disbursements grouped by cycle.


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
    res, err := s.Candidate.GetCandidatesTotals(ctx, operations.GetCandidatesTotalsRequest{
        APIKey: "excepturi",
        CandidateID: []string{
            "provident",
            "quos",
        },
        Cycle: []int{
            33625,
            653201,
            968962,
        },
        District: []string{
            "ad",
            "eum",
            "dolor",
        },
        ElectionFull: sdk.Bool(false),
        ElectionYear: []int{
            141264,
            367562,
            97260,
            435865,
        },
        FederalFundsFlag: sdk.Bool(false),
        HasRaisedFunds: sdk.Bool(false),
        IsActiveCandidate: sdk.Bool(false),
        MaxCashOnHandEndPeriod: sdk.String("doloribus"),
        MaxDebtsOwedByCommittee: sdk.String("debitis"),
        MaxDisbursements: sdk.String("eius"),
        MaxReceipts: sdk.String("maxime"),
        MinCashOnHandEndPeriod: sdk.String("deleniti"),
        MinDebtsOwedByCommittee: sdk.String("facilis"),
        MinDisbursements: sdk.String("in"),
        MinReceipts: sdk.String("architecto"),
        Office: []GetCandidatesTotalsOfficeEnum{
            operations.GetCandidatesTotalsOfficeEnumP,
        },
        Page: sdk.Int(352312),
        Party: []string{
            "nihil",
            "repellat",
            "quibusdam",
        },
        PerPage: sdk.Int(149448),
        Q: []string{
            "pariatur",
            "accusantium",
            "consequuntur",
            "praesentium",
        },
        Sort: sdk.String("natus"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "sunt",
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

## GetCandidatesTotalsAggregates

 Candidate total receipts and disbursements aggregated by `aggregate_by`.


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
    res, err := s.Candidate.GetCandidatesTotalsAggregates(ctx, operations.GetCandidatesTotalsAggregatesRequest{
        AggregateBy: operations.GetCandidatesTotalsAggregatesAggregateByEnumOfficeParty.ToPointer(),
        APIKey: "illum",
        District: []string{
            "maxime",
            "ea",
            "excepturi",
            "odit",
        },
        ElectionFull: sdk.Bool(false),
        ElectionYear: []int{
            33222,
            69167,
        },
        IsActiveCandidate: sdk.Bool(false),
        MaxElectionCycle: sdk.Int(982575),
        MinElectionCycle: sdk.Int(697429),
        Office: operations.GetCandidatesTotalsAggregatesOfficeEnumH.ToPointer(),
        Page: sdk.Int(453543),
        Party: operations.GetCandidatesTotalsAggregatesPartyEnumDem.ToPointer(),
        PerPage: sdk.Int(722056),
        Sort: []string{
            "pariatur",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "voluptatibus",
            "perferendis",
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

## GetCandidatesTotalsByOffice

 Aggregated candidate receipts and disbursements grouped by office by cycle.


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
    res, err := s.Candidate.GetCandidatesTotalsByOffice(ctx, operations.GetCandidatesTotalsByOfficeRequest{
        APIKey: "fugiat",
        ElectionFull: sdk.Bool(false),
        ElectionYear: []int{
            11714,
        },
        IsActiveCandidate: sdk.Bool(false),
        MaxElectionCycle: sdk.Int(764912),
        MinElectionCycle: sdk.Int(359978),
        Office: operations.GetCandidatesTotalsByOfficeOfficeEnumP.ToPointer(),
        Page: sdk.Int(729991),
        PerPage: sdk.Int(749999),
        Sort: sdk.String("dolores"),
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

## GetCandidatesTotalsByOfficeByParty

 Aggregated candidate receipts and disbursements grouped by office by party by cycle.


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
    res, err := s.Candidate.GetCandidatesTotalsByOfficeByParty(ctx, operations.GetCandidatesTotalsByOfficeByPartyRequest{
        APIKey: "quis",
        ElectionFull: sdk.Bool(false),
        ElectionYear: []int{
            489549,
            54338,
            338985,
        },
        IsActiveCandidate: sdk.Bool(false),
        Office: operations.GetCandidatesTotalsByOfficeByPartyOfficeEnumUnknown.ToPointer(),
        Page: sdk.Int(179490),
        PerPage: sdk.Int(18521),
        Sort: sdk.String("dolores"),
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

## GetCommitteeCommitteeIDCandidates


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


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
    res, err := s.Candidate.GetCommitteeCommitteeIDCandidates(ctx, operations.GetCommitteeCommitteeIDCandidatesRequest{
        APIKey: "minus",
        CandidateStatus: []GetCommitteeCommitteeIDCandidatesCandidateStatusEnum{
            operations.GetCommitteeCommitteeIDCandidatesCandidateStatusEnumC,
            operations.GetCommitteeCommitteeIDCandidatesCandidateStatusEnumP,
        },
        CommitteeID: "nostrum",
        Cycle: []int{
            928082,
            608253,
            704415,
            596656,
        },
        District: []string{
            "porro",
        },
        ElectionYear: []int{
            500026,
        },
        FederalFundsFlag: sdk.Bool(false),
        HasRaisedFunds: sdk.Bool(false),
        IncumbentChallenge: []GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum{
            operations.GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumUnknown,
            operations.GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumC,
            operations.GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumC,
        },
        Name: []string{
            "asperiores",
        },
        Office: []GetCommitteeCommitteeIDCandidatesOfficeEnum{
            operations.GetCommitteeCommitteeIDCandidatesOfficeEnumH,
            operations.GetCommitteeCommitteeIDCandidatesOfficeEnumS,
            operations.GetCommitteeCommitteeIDCandidatesOfficeEnumS,
            operations.GetCommitteeCommitteeIDCandidatesOfficeEnumS,
        },
        Page: sdk.Int(864282),
        Party: []string{
            "nobis",
            "libero",
            "delectus",
        },
        PerPage: sdk.Int(311945),
        Sort: sdk.String("quos"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "dolorem",
            "dolorem",
        },
        Year: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitteeCommitteeIDCandidatesHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


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
    res, err := s.Candidate.GetCommitteeCommitteeIDCandidatesHistory(ctx, operations.GetCommitteeCommitteeIDCandidatesHistoryRequest{
        APIKey: "qui",
        CommitteeID: "ipsum",
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(944373),
        PerPage: sdk.Int(569574),
        Sort: sdk.String("cum"),
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

## GetCommitteeCommitteeIDCandidatesHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


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
    res, err := s.Candidate.GetCommitteeCommitteeIDCandidatesHistoryCycle(ctx, operations.GetCommitteeCommitteeIDCandidatesHistoryCycleRequest{
        APIKey: "voluptate",
        CommitteeID: "dignissimos",
        Cycle: 970237,
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(227414),
        PerPage: sdk.Int(680545),
        Sort: sdk.String("numquam"),
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
