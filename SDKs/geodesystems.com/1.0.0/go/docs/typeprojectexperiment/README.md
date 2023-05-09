# TypeProjectExperiment

## Overview

Search API for 'Experiment' entry type

### Available Operations

* [SearchProjectExperiment](#searchprojectexperiment) - Search API for 'Experiment' entry type

## SearchProjectExperiment

API to search for entries of type Experiment

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
    res, err := s.TypeProjectExperiment.SearchProjectExperiment(ctx, operations.SearchProjectExperimentRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-01T12:54:25.927Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-26T22:47:17.791Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-05T18:33:30.497Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-11T15:48:49.060Z"),
        Description: sdk.String("fugit"),
        Filesuffix: sdk.String("ipsam"),
        Fromdate: types.MustTimeFromString("2022-10-21T03:34:32.727Z"),
        Group: sdk.String("voluptatum"),
        Max: sdk.Int64(98759),
        Maxlatitude: sdk.Float32(6225.66),
        Maxlongitude: sdk.Float32(7486.06),
        Minlatitude: sdk.Float32(2696),
        Minlongitude: sdk.Float32(4526.53),
        Name: sdk.String("Lula Bayer"),
        Skip: sdk.Int64(146583),
        Text: sdk.String("voluptatem"),
        Todate: types.MustTimeFromString("2021-12-02T02:31:07.352Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
