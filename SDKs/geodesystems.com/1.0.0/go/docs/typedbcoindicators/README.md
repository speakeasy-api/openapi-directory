# TypeDbCoIndicators

## Overview

Search API for 'Colorado Health Indicators' entry type

### Available Operations

* [SearchDbCoIndicators](#searchdbcoindicators) - Search API for 'Colorado Health Indicators' entry type

## SearchDbCoIndicators

API to search for entries of type Colorado Health Indicators

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
    res, err := s.TypeDbCoIndicators.SearchDbCoIndicators(ctx, operations.SearchDbCoIndicatorsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-29T03:58:31.955Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-25T18:20:51.968Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-06T07:12:03.115Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-26T01:55:33.743Z"),
        Description: sdk.String("nobis"),
        Filesuffix: sdk.String("laboriosam"),
        Fromdate: types.MustTimeFromString("2022-07-09T08:51:26.881Z"),
        Group: sdk.String("voluptatem"),
        Max: sdk.Int64(350207),
        Maxlatitude: sdk.Float32(8956.92),
        Maxlongitude: sdk.Float32(956.19),
        Minlatitude: sdk.Float32(3925.69),
        Minlongitude: sdk.Float32(8711.03),
        Name: sdk.String("Carlton Pollich"),
        SearchDbDbCoIndicatorsDescription: sdk.String("repudiandae"),
        SearchDbDbCoIndicatorsDomain: sdk.String("optio"),
        SearchDbDbCoIndicatorsGeoName: sdk.String("occaecati"),
        SearchDbDbCoIndicatorsIndicatorName: sdk.String("nemo"),
        SearchDbDbCoIndicatorsLocation: sdk.String("voluptate"),
        SearchDbDbCoIndicatorsMeasure: sdk.Float64(5010.63),
        SearchDbDbCoIndicatorsSubdomain: sdk.String("officia"),
        Skip: sdk.Int64(376389),
        Text: sdk.String("numquam"),
        Todate: types.MustTimeFromString("2022-06-13T20:32:47.541Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
