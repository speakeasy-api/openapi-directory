# TypeProjectCampaign

## Overview

Search API for 'Campaign' entry type

### Available Operations

* [SearchProjectCampaign](#searchprojectcampaign) - Search API for 'Campaign' entry type

## SearchProjectCampaign

API to search for entries of type Campaign

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
    res, err := s.TypeProjectCampaign.SearchProjectCampaign(ctx, operations.SearchProjectCampaignRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-04T17:02:22.015Z"),
        ChangedateTo: types.MustTimeFromString("2020-03-19T01:37:09.736Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-02T11:11:56.667Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-15T16:49:39.900Z"),
        Description: sdk.String("minus"),
        Filesuffix: sdk.String("quos"),
        Fromdate: types.MustTimeFromString("2020-01-23T09:20:28.902Z"),
        Group: sdk.String("odio"),
        Max: sdk.Int64(588662),
        Maxlatitude: sdk.Float32(9609.33),
        Maxlongitude: sdk.Float32(455.1),
        Minlatitude: sdk.Float32(6277.17),
        Minlongitude: sdk.Float32(1979.82),
        Name: sdk.String("Ruben Sipes DDS"),
        Skip: sdk.Int64(196700),
        Text: sdk.String("commodi"),
        Todate: types.MustTimeFromString("2022-04-16T19:53:20.939Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
