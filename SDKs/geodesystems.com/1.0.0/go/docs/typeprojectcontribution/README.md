# TypeProjectContribution

## Overview

Search API for 'Research Contribution' entry type

### Available Operations

* [SearchProjectContribution](#searchprojectcontribution) - Search API for 'Research Contribution' entry type

## SearchProjectContribution

API to search for entries of type Research Contribution

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
    res, err := s.TypeProjectContribution.SearchProjectContribution(ctx, operations.SearchProjectContributionRequest{
        ChangedateFrom: types.MustTimeFromString("2020-03-17T16:33:05.600Z"),
        ChangedateTo: types.MustTimeFromString("2020-12-01T15:19:42.661Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-22T22:36:08.652Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-18T01:27:23.704Z"),
        Description: sdk.String("distinctio"),
        Filesuffix: sdk.String("possimus"),
        Fromdate: types.MustTimeFromString("2022-03-27T21:22:17.518Z"),
        Group: sdk.String("saepe"),
        Max: sdk.Int64(934782),
        Maxlatitude: sdk.Float32(7998.66),
        Maxlongitude: sdk.Float32(4695.88),
        Minlatitude: sdk.Float32(3109.3),
        Minlongitude: sdk.Float32(2159.59),
        Name: sdk.String("Myrtle Prohaska"),
        Skip: sdk.Int64(319419),
        Text: sdk.String("sequi"),
        Todate: types.MustTimeFromString("2022-07-09T10:04:04.820Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
