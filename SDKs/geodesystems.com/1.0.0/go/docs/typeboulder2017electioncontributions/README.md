# TypeBoulder2017ElectionContributions

## Overview

Search API for 'Boulder 2017 Election Contributions' entry type

### Available Operations

* [SearchBoulder2017ElectionContributions](#searchboulder2017electioncontributions) - Search API for 'Boulder 2017 Election Contributions' entry type

## SearchBoulder2017ElectionContributions

API to search for entries of type Boulder 2017 Election Contributions

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TypeBoulder2017ElectionContributions.SearchBoulder2017ElectionContributions(ctx, operations.SearchBoulder2017ElectionContributionsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-02T08:37:36.325Z"),
        ChangedateTo: types.MustTimeFromString("2021-07-16T01:55:06.595Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-27T01:23:58.638Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-28T10:26:44.811Z"),
        Description: sdk.String("minus"),
        Filesuffix: sdk.String("quaerat"),
        Fromdate: types.MustTimeFromString("2022-04-21T00:17:42.407Z"),
        Group: sdk.String("esse"),
        Max: sdk.Int64(503427),
        Maxlatitude: sdk.Float32(5909.84),
        Maxlongitude: sdk.Float32(9537.22),
        Minlatitude: sdk.Float32(8577.23),
        Minlongitude: sdk.Float32(5578.11),
        Name: sdk.String("Joyce Wilderman"),
        SearchDbBoulder2017ElectionContributionsAmount: sdk.Float64(8630.23),
        SearchDbBoulder2017ElectionContributionsCity: sdk.String("possimus"),
        SearchDbBoulder2017ElectionContributionsCommittee: sdk.String("quia"),
        SearchDbBoulder2017ElectionContributionsContributionType: sdk.String("eveniet"),
        SearchDbBoulder2017ElectionContributionsDate: sdk.String("asperiores"),
        SearchDbBoulder2017ElectionContributionsFirstName: sdk.String("facere"),
        SearchDbBoulder2017ElectionContributionsFromCandidate: sdk.String("veritatis"),
        SearchDbBoulder2017ElectionContributionsLastName: sdk.String("consequuntur"),
        SearchDbBoulder2017ElectionContributionsLocation: sdk.String("quasi"),
        SearchDbBoulder2017ElectionContributionsMatchAmount: sdk.Float64(6288.99),
        SearchDbBoulder2017ElectionContributionsState: sdk.String("culpa"),
        SearchDbBoulder2017ElectionContributionsStreet: sdk.String("aliquid"),
        SearchDbBoulder2017ElectionContributionsYtdAmount: sdk.Float64(9492.98),
        SearchDbBoulder2017ElectionContributionsZip: sdk.String("quae"),
        Skip: sdk.Int64(936747),
        Text: sdk.String("vel"),
        Todate: types.MustTimeFromString("2022-09-28T13:55:38.564Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
