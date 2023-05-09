# TypeCampaignDonors

## Overview

Search API for 'Campaign Donors' entry type

### Available Operations

* [SearchCampaignDonors](#searchcampaigndonors) - Search API for 'Campaign Donors' entry type

## SearchCampaignDonors

API to search for entries of type Campaign Donors

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
    res, err := s.TypeCampaignDonors.SearchCampaignDonors(ctx, operations.SearchCampaignDonorsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-28T21:25:01.550Z"),
        ChangedateTo: types.MustTimeFromString("2021-07-31T10:53:55.286Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-29T02:56:05.947Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-17T23:19:52.079Z"),
        Description: sdk.String("sit"),
        Filesuffix: sdk.String("voluptatum"),
        Fromdate: types.MustTimeFromString("2021-02-26T20:36:25.696Z"),
        Group: sdk.String("corporis"),
        Max: sdk.Int64(89494),
        Maxlatitude: sdk.Float32(5027.1),
        Maxlongitude: sdk.Float32(4059.42),
        Minlatitude: sdk.Float32(1536.27),
        Minlongitude: sdk.Float32(243.13),
        Name: sdk.String("Bernice Ullrich II"),
        SearchDbCampaignDonorsAmount: sdk.Float64(9688.65),
        SearchDbCampaignDonorsCity: sdk.String("dolorem"),
        SearchDbCampaignDonorsCommittee: sdk.String("harum"),
        SearchDbCampaignDonorsDate: sdk.String("dicta"),
        SearchDbCampaignDonorsDonor: sdk.String("architecto"),
        SearchDbCampaignDonorsEmployer: sdk.String("occaecati"),
        SearchDbCampaignDonorsGender: sdk.String("labore"),
        SearchDbCampaignDonorsLocation: sdk.String("quidem"),
        SearchDbCampaignDonorsOccupation: sdk.String("atque"),
        SearchDbCampaignDonorsParty: sdk.String("laborum"),
        SearchDbCampaignDonorsState: sdk.String("nam"),
        SearchDbCampaignDonorsZipCode: sdk.String("tenetur"),
        Skip: sdk.Int64(388867),
        Text: sdk.String("alias"),
        Todate: types.MustTimeFromString("2022-05-09T18:33:26.033Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
