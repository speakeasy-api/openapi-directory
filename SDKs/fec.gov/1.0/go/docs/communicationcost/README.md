# CommunicationCost

## Overview

Reports of communication costs by corporations and membership organizations from the FEC [F7 forms](https://www.fec.gov/pdf/forms/fecform7.pdf).

### Available Operations

* [GetCommunicationCosts](#getcommunicationcosts) - 
52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.

* [GetCommunicationCostsAggregates](#getcommunicationcostsaggregates) - Communication cost aggregated by candidate ID and committee ID.
* [GetCommunicationCostsByCandidate](#getcommunicationcostsbycandidate) - Communication cost aggregated by candidate ID and committee ID.
* [GetCommunicationCostsTotalsByCandidate](#getcommunicationcoststotalsbycandidate) - 
Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


## GetCommunicationCosts


52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.


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
    res, err := s.CommunicationCost.GetCommunicationCosts(ctx, operations.GetCommunicationCostsRequest{
        APIKey: "quisquam",
        CandidateID: []string{
            "omnis",
            "quis",
            "ipsum",
            "delectus",
        },
        CommitteeID: []string{
            "consectetur",
            "vero",
        },
        ImageNumber: []string{
            "dignissimos",
            "hic",
            "distinctio",
            "quod",
        },
        LineNumber: sdk.String("odio"),
        MaxAmount: sdk.String("similique"),
        MaxDate: types.MustDateFromString("2021-04-02"),
        MaxImageNumber: sdk.String("ducimus"),
        MinAmount: sdk.String("dolore"),
        MinDate: types.MustDateFromString("2020-06-15"),
        MinImageNumber: sdk.String("sequi"),
        Page: sdk.Int(617877),
        PerPage: sdk.Int(773326),
        Sort: sdk.String("aut"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SupportOpposeIndicator: []GetCommunicationCostsSupportOpposeIndicatorEnum{
            operations.GetCommunicationCostsSupportOpposeIndicatorEnumS,
            operations.GetCommunicationCostsSupportOpposeIndicatorEnumO,
            operations.GetCommunicationCostsSupportOpposeIndicatorEnumS,
            operations.GetCommunicationCostsSupportOpposeIndicatorEnumO,
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

## GetCommunicationCostsAggregates

Communication cost aggregated by candidate ID and committee ID.

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
    res, err := s.CommunicationCost.GetCommunicationCostsAggregates(ctx, operations.GetCommunicationCostsAggregatesRequest{
        APIKey: "maiores",
        CandidateID: []string{
            "iusto",
            "eligendi",
            "ducimus",
            "alias",
        },
        CommitteeID: []string{
            "tempora",
            "ipsam",
            "ea",
        },
        Cycle: []int{
            428224,
        },
        Page: sdk.Int(822118),
        PerPage: sdk.Int(297842),
        Sort: sdk.String("ratione"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SupportOpposeIndicator: operations.GetCommunicationCostsAggregatesSupportOpposeIndicatorEnumS.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommunicationCostsByCandidate

Communication cost aggregated by candidate ID and committee ID.

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
    res, err := s.CommunicationCost.GetCommunicationCostsByCandidate(ctx, operations.GetCommunicationCostsByCandidateRequest{
        APIKey: "laudantium",
        CandidateID: []string{
            "dolor",
        },
        Cycle: []int{
            97844,
            406120,
            862192,
            569211,
        },
        District: sdk.String("voluptatibus"),
        ElectionFull: sdk.Bool(false),
        Office: operations.GetCommunicationCostsByCandidateOfficeEnumSenate.ToPointer(),
        Page: sdk.Int(960835),
        PerPage: sdk.Int(788873),
        Sort: sdk.String("saepe"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: sdk.String("ea"),
        SupportOppose: operations.GetCommunicationCostsByCandidateSupportOpposeEnumO.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommunicationCostsTotalsByCandidate


Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


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
    res, err := s.CommunicationCost.GetCommunicationCostsTotalsByCandidate(ctx, operations.GetCommunicationCostsTotalsByCandidateRequest{
        APIKey: "corporis",
        CandidateID: []string{
            "aliquid",
            "inventore",
        },
        Cycle: []int{
            407241,
            775220,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(232234),
        PerPage: sdk.Int(926213),
        Sort: sdk.String("aspernatur"),
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
