# Presidential

## Overview

Data supporting fec.gov's presidential map. 

 For more information about the presidential map data available to download from fec.gov, please visit: https://www.fec.gov/campaign-finance-data/presidential-map-data/

### Available Operations

* [GetPresidentialContributionsByCandidate](#getpresidentialcontributionsbycandidate) - 
Net receipts per candidate.

Filter with `contributor_state='US'` for national totals

* [GetPresidentialContributionsBySize](#getpresidentialcontributionsbysize) - 
Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size

* [GetPresidentialContributionsByState](#getpresidentialcontributionsbystate) - 
Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year

* [GetPresidentialCoverageEndDate](#getpresidentialcoverageenddate) - 
Coverage end date per candidate.

Filter by candidate_id and/or election_year

* [GetPresidentialFinancialSummary](#getpresidentialfinancialsummary) - 
Financial summary per candidate.

Filter by candidate_id and/or election_year


## GetPresidentialContributionsByCandidate


Net receipts per candidate.

Filter with `contributor_state='US'` for national totals


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
    res, err := s.Presidential.GetPresidentialContributionsByCandidate(ctx, operations.GetPresidentialContributionsByCandidateRequest{
        APIKey: "voluptatibus",
        ContributorState: []string{
            "debitis",
        },
        ElectionYear: []int{
            700928,
            179795,
        },
        Page: sdk.Int(440777),
        PerPage: sdk.Int(345506),
        Sort: sdk.String("neque"),
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

## GetPresidentialContributionsBySize


Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size


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
    res, err := s.Presidential.GetPresidentialContributionsBySize(ctx, operations.GetPresidentialContributionsBySizeRequest{
        APIKey: "iusto",
        CandidateID: []string{
            "rem",
            "eligendi",
            "fugiat",
        },
        ElectionYear: []int{
            889448,
            495617,
            220104,
        },
        Page: sdk.Int(118041),
        PerPage: sdk.Int(622894),
        Size: []GetPresidentialContributionsBySizeSizeEnum{
            operations.GetPresidentialContributionsBySizeSizeEnumZero,
            operations.GetPresidentialContributionsBySizeSizeEnumFiveHundred,
            operations.GetPresidentialContributionsBySizeSizeEnumFiveHundred,
            operations.GetPresidentialContributionsBySizeSizeEnumTwoThousand,
        },
        Sort: sdk.String("ad"),
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

## GetPresidentialContributionsByState


Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year


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
    res, err := s.Presidential.GetPresidentialContributionsByState(ctx, operations.GetPresidentialContributionsByStateRequest{
        APIKey: "aspernatur",
        CandidateID: []string{
            "delectus",
            "iusto",
        },
        ElectionYear: []int{
            729828,
            72350,
        },
        Page: sdk.Int(69182),
        PerPage: sdk.Int(280114),
        Sort: sdk.String("accusamus"),
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

## GetPresidentialCoverageEndDate


Coverage end date per candidate.

Filter by candidate_id and/or election_year


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
    res, err := s.Presidential.GetPresidentialCoverageEndDate(ctx, operations.GetPresidentialCoverageEndDateRequest{
        APIKey: "saepe",
        CandidateID: []string{
            "veniam",
            "eos",
            "reiciendis",
        },
        ElectionYear: []int{
            444121,
            506312,
            367046,
            999809,
        },
        Page: sdk.Int(789770),
        PerPage: sdk.Int(197259),
        Sort: sdk.String("nihil"),
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

## GetPresidentialFinancialSummary


Financial summary per candidate.

Filter by candidate_id and/or election_year


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
    res, err := s.Presidential.GetPresidentialFinancialSummary(ctx, operations.GetPresidentialFinancialSummaryRequest{
        APIKey: "deleniti",
        CandidateID: []string{
            "labore",
        },
        ElectionYear: []int{
            304173,
            790463,
            591065,
            514993,
        },
        Page: sdk.Int(921719),
        PerPage: sdk.Int(9683),
        Sort: sdk.String("maxime"),
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
