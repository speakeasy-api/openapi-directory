# TypeCampaignExpenditures

## Overview

Search API for 'Campaign Expenditures' entry type

### Available Operations

* [SearchCampaignExpenditures](#searchcampaignexpenditures) - Search API for 'Campaign Expenditures' entry type

## SearchCampaignExpenditures

API to search for entries of type Campaign Expenditures

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
    res, err := s.TypeCampaignExpenditures.SearchCampaignExpenditures(ctx, operations.SearchCampaignExpendituresRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-26T20:33:50.122Z"),
        ChangedateTo: types.MustTimeFromString("2021-03-27T07:55:22.584Z"),
        CreatedateFrom: types.MustTimeFromString("2020-02-11T18:23:46.078Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-13T12:36:43.531Z"),
        Description: sdk.String("est"),
        Filesuffix: sdk.String("quidem"),
        Fromdate: types.MustTimeFromString("2022-03-10T00:10:29.953Z"),
        Group: sdk.String("fuga"),
        Max: sdk.Int64(509807),
        Maxlatitude: sdk.Float32(6485.98),
        Maxlongitude: sdk.Float32(3339.65),
        Minlatitude: sdk.Float32(291),
        Minlongitude: sdk.Float32(7908.4),
        Name: sdk.String("Ryan Littel"),
        SearchDbCampaignExpendituresAmount: sdk.Float64(5199.52),
        SearchDbCampaignExpendituresCity: sdk.String("suscipit"),
        SearchDbCampaignExpendituresCommittee: sdk.String("quidem"),
        SearchDbCampaignExpendituresLocation: sdk.String("maxime"),
        SearchDbCampaignExpendituresMemoText: sdk.String("et"),
        SearchDbCampaignExpendituresParty: sdk.String("esse"),
        SearchDbCampaignExpendituresPurpose: sdk.String("amet"),
        SearchDbCampaignExpendituresRecipient: sdk.String("assumenda"),
        SearchDbCampaignExpendituresState: sdk.String("ea"),
        SearchDbCampaignExpendituresTransactionDate: sdk.String("atque"),
        SearchDbCampaignExpendituresZipCode: sdk.String("error"),
        Skip: sdk.Int64(887265),
        Text: sdk.String("officiis"),
        Todate: types.MustTimeFromString("2021-02-22T09:14:53.307Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
