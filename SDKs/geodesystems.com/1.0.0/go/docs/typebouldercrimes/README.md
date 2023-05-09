# TypeBoulderCrimes

## Overview

Search API for 'Boulder Crime Reports' entry type

### Available Operations

* [SearchBoulderCrimes](#searchbouldercrimes) - Search API for 'Boulder Crime Reports' entry type

## SearchBoulderCrimes

API to search for entries of type Boulder Crime Reports

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
    res, err := s.TypeBoulderCrimes.SearchBoulderCrimes(ctx, operations.SearchBoulderCrimesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-13T04:07:51.208Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-16T02:54:19.259Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-15T15:27:41.112Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-17T09:09:54.947Z"),
        Description: sdk.String("minima"),
        Filesuffix: sdk.String("nobis"),
        Fromdate: types.MustTimeFromString("2022-07-11T09:37:00.887Z"),
        Group: sdk.String("minus"),
        Max: sdk.Int64(171853),
        Maxlatitude: sdk.Float32(5039.34),
        Maxlongitude: sdk.Float32(4492.92),
        Minlatitude: sdk.Float32(2962.42),
        Minlongitude: sdk.Float32(3044.68),
        Name: sdk.String("Lionel Herman"),
        SearchDbBoulderCrimesBlockadd: sdk.String("blanditiis"),
        SearchDbBoulderCrimesLocation: sdk.String("quas"),
        SearchDbBoulderCrimesOffense: sdk.String("hic"),
        SearchDbBoulderCrimesReportdate: sdk.String("nesciunt"),
        Skip: sdk.Int64(633998),
        Text: sdk.String("corrupti"),
        Todate: types.MustTimeFromString("2021-06-10T23:47:11.065Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
