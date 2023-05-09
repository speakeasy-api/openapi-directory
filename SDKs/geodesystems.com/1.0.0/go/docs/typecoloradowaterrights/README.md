# TypeColoradoWaterRights

## Overview

Search API for 'Colorado Water Rights' entry type

### Available Operations

* [SearchColoradoWaterRights](#searchcoloradowaterrights) - Search API for 'Colorado Water Rights' entry type

## SearchColoradoWaterRights

API to search for entries of type Colorado Water Rights

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
    res, err := s.TypeColoradoWaterRights.SearchColoradoWaterRights(ctx, operations.SearchColoradoWaterRightsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-07T17:37:00.643Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-28T02:50:56.968Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-20T05:55:02.076Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-06T19:48:35.360Z"),
        Description: sdk.String("ut"),
        Filesuffix: sdk.String("culpa"),
        Fromdate: types.MustTimeFromString("2022-02-09T21:52:52.867Z"),
        Group: sdk.String("laudantium"),
        Max: sdk.Int64(432606),
        Maxlatitude: sdk.Float32(3679.27),
        Maxlongitude: sdk.Float32(9282.19),
        Minlatitude: sdk.Float32(4565.2),
        Minlongitude: sdk.Float32(5920.81),
        Name: sdk.String("Natalie Witting"),
        SearchDbColoradoWaterRightsAdjudicationDate: sdk.String("ullam"),
        SearchDbColoradoWaterRightsAppropriationDate: sdk.String("quasi"),
        SearchDbColoradoWaterRightsComments: sdk.String("animi"),
        SearchDbColoradoWaterRightsCounty: sdk.String("nostrum"),
        SearchDbColoradoWaterRightsDecreedUnits: sdk.String("mollitia"),
        SearchDbColoradoWaterRightsDecreedUses: sdk.String("provident"),
        SearchDbColoradoWaterRightsLocation: sdk.String("possimus"),
        SearchDbColoradoWaterRightsMoreInformation: sdk.String("animi"),
        SearchDbColoradoWaterRightsNetAbsolute: sdk.Float64(4027.67),
        SearchDbColoradoWaterRightsNetApexAbsolute: sdk.Float64(3972.57),
        SearchDbColoradoWaterRightsNetApexConditional: sdk.Float64(375.65),
        SearchDbColoradoWaterRightsNetConditional: sdk.Float64(9992.78),
        SearchDbColoradoWaterRightsPriorityNo: sdk.String("doloribus"),
        SearchDbColoradoWaterRightsSeasonalLimits: sdk.String("ullam"),
        SearchDbColoradoWaterRightsStructureName: sdk.String("in"),
        SearchDbColoradoWaterRightsStructureType: sdk.String("nam"),
        SearchDbColoradoWaterRightsWaterSource: sdk.String("earum"),
        Skip: sdk.Int64(637583),
        Text: sdk.String("laborum"),
        Todate: types.MustTimeFromString("2022-03-14T23:12:21.252Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
