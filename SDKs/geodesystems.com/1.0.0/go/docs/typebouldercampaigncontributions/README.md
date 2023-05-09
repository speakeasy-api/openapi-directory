# TypeBoulderCampaignContributions

## Overview

Search API for 'Boulder Campaign Contributions' entry type

### Available Operations

* [SearchBoulderCampaignContributions](#searchbouldercampaigncontributions) - Search API for 'Boulder Campaign Contributions' entry type

## SearchBoulderCampaignContributions

API to search for entries of type Boulder Campaign Contributions

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
    res, err := s.TypeBoulderCampaignContributions.SearchBoulderCampaignContributions(ctx, operations.SearchBoulderCampaignContributionsRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-21T04:50:55.832Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-07T16:30:09.640Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-15T23:18:40.855Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-24T06:58:07.315Z"),
        Description: sdk.String("reprehenderit"),
        Filesuffix: sdk.String("ullam"),
        Fromdate: types.MustTimeFromString("2022-12-26T00:57:43.290Z"),
        Group: sdk.String("voluptatum"),
        Max: sdk.Int64(185232),
        Maxlatitude: sdk.Float32(8453.58),
        Maxlongitude: sdk.Float32(4012.59),
        Minlatitude: sdk.Float32(5362.75),
        Minlongitude: sdk.Float32(9292.92),
        Name: sdk.String("Roger Monahan PhD"),
        SearchDbBoulderCampaignContributionsAmendedDate: sdk.String("et"),
        SearchDbBoulderCampaignContributionsAnonymous: sdk.String("voluptate"),
        SearchDbBoulderCampaignContributionsCandidate: sdk.String("ipsa"),
        SearchDbBoulderCampaignContributionsCity: sdk.String("minima"),
        SearchDbBoulderCampaignContributionsCommittee: sdk.String("veritatis"),
        SearchDbBoulderCampaignContributionsCommitteeNum: sdk.String("consectetur"),
        SearchDbBoulderCampaignContributionsContribution: sdk.Float64(2371.73),
        SearchDbBoulderCampaignContributionsContributionType: sdk.String("iste"),
        SearchDbBoulderCampaignContributionsFilingDate: sdk.String("temporibus"),
        SearchDbBoulderCampaignContributionsFirstName: sdk.String("accusantium"),
        SearchDbBoulderCampaignContributionsFromCandidate: sdk.String("rem"),
        SearchDbBoulderCampaignContributionsLastName: sdk.String("aut"),
        SearchDbBoulderCampaignContributionsMatch: sdk.Float64(5130.75),
        SearchDbBoulderCampaignContributionsOfficialFiling: sdk.String("eum"),
        SearchDbBoulderCampaignContributionsState: sdk.String("mollitia"),
        SearchDbBoulderCampaignContributionsStreet: sdk.String("ab"),
        SearchDbBoulderCampaignContributionsTransactionDate: sdk.String("corrupti"),
        SearchDbBoulderCampaignContributionsType: sdk.String("non"),
        SearchDbBoulderCampaignContributionsZip: sdk.String("voluptatem"),
        Skip: sdk.Int64(221161),
        Text: sdk.String("occaecati"),
        Todate: types.MustTimeFromString("2022-03-25T13:15:35.424Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
