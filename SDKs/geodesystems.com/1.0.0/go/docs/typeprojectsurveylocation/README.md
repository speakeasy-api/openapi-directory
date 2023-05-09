# TypeProjectSurveylocation

## Overview

Search API for 'Survey Location' entry type

### Available Operations

* [SearchProjectSurveylocation](#searchprojectsurveylocation) - Search API for 'Survey Location' entry type

## SearchProjectSurveylocation

API to search for entries of type Survey Location

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
    res, err := s.TypeProjectSurveylocation.SearchProjectSurveylocation(ctx, operations.SearchProjectSurveylocationRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-25T11:30:31.290Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-13T16:26:05.767Z"),
        CreatedateFrom: types.MustTimeFromString("2021-11-18T05:53:55.515Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-30T00:03:31.362Z"),
        Description: sdk.String("quas"),
        Filesuffix: sdk.String("ipsum"),
        Fromdate: types.MustTimeFromString("2020-12-13T13:53:50.677Z"),
        Group: sdk.String("facilis"),
        Max: sdk.Int64(983060),
        Maxlatitude: sdk.Float32(6229.68),
        Maxlongitude: sdk.Float32(9261.19),
        Minlatitude: sdk.Float32(9559.62),
        Minlongitude: sdk.Float32(2349.64),
        Name: sdk.String("Jan Senger"),
        Skip: sdk.Int64(966652),
        Text: sdk.String("odio"),
        Todate: types.MustTimeFromString("2022-12-17T10:03:07.861Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
