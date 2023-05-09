# Electioneering

## Overview

An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions: 

 _The communication refers to a clearly identified federal candidate._ 

 _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._ 

 _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

### Available Operations

* [GetElectioneering](#getelectioneering) - 
An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

* [GetElectioneeringAggregates](#getelectioneeringaggregates) - Electioneering communications costs aggregates
* [GetElectioneeringByCandidate](#getelectioneeringbycandidate) - Electioneering costs aggregated by candidate
* [GetElectioneeringTotalsByCandidate](#getelectioneeringtotalsbycandidate) - 
Total electioneering communications spent on candidates by cycle
or candidate election year


## GetElectioneering


An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._


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
    res, err := s.Electioneering.GetElectioneering(ctx, operations.GetElectioneeringRequest{
        APIKey: "accusamus",
        CandidateID: []string{
            "atque",
            "fugit",
        },
        CommitteeID: []string{
            "fugiat",
            "voluptatem",
        },
        Description: sdk.String("culpa"),
        LastIndex: sdk.Int(710337),
        MaxAmount: sdk.String("magnam"),
        MaxDate: types.MustDateFromString("2022-07-17"),
        MinAmount: sdk.String("ipsam"),
        MinDate: types.MustDateFromString("2022-06-21"),
        Page: sdk.Int(558065),
        PerPage: sdk.Int(922112),
        ReportYear: []int{
            89494,
            502710,
        },
        Sort: sdk.String("ex"),
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

## GetElectioneeringAggregates

Electioneering communications costs aggregates

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
    res, err := s.Electioneering.GetElectioneeringAggregates(ctx, operations.GetElectioneeringAggregatesRequest{
        APIKey: "sed",
        CandidateID: []string{
            "vel",
        },
        CommitteeID: []string{
            "saepe",
            "error",
        },
        Cycle: []int{
            279068,
        },
        Page: sdk.Int(968865),
        PerPage: sdk.Int(209750),
        Sort: sdk.String("harum"),
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

## GetElectioneeringByCandidate

Electioneering costs aggregated by candidate

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
    res, err := s.Electioneering.GetElectioneeringByCandidate(ctx, operations.GetElectioneeringByCandidateRequest{
        APIKey: "dicta",
        CandidateID: []string{
            "occaecati",
        },
        Cycle: []int{
            695270,
            539074,
        },
        District: sdk.String("laborum"),
        ElectionFull: sdk.Bool(false),
        Office: operations.GetElectioneeringByCandidateOfficeEnumPresident.ToPointer(),
        Page: sdk.Int(948861),
        PerPage: sdk.Int(388867),
        Sort: sdk.String("alias"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetElectioneeringTotalsByCandidate


Total electioneering communications spent on candidates by cycle
or candidate election year


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
    res, err := s.Electioneering.GetElectioneeringTotalsByCandidate(ctx, operations.GetElectioneeringTotalsByCandidateRequest{
        APIKey: "deserunt",
        CandidateID: []string{
            "unde",
            "reiciendis",
        },
        Cycle: []int{
            833819,
            962771,
            914791,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(16871),
        PerPage: sdk.Int(667285),
        Sort: sdk.String("quidem"),
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
