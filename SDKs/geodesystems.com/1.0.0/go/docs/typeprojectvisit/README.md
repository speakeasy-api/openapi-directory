# TypeProjectVisit

## Overview

Search API for 'Site Visit' entry type

### Available Operations

* [SearchProjectVisit](#searchprojectvisit) - Search API for 'Site Visit' entry type

## SearchProjectVisit

API to search for entries of type Site Visit

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
    res, err := s.TypeProjectVisit.SearchProjectVisit(ctx, operations.SearchProjectVisitRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-13T00:18:26.818Z"),
        ChangedateTo: types.MustTimeFromString("2020-03-28T08:47:25.593Z"),
        CreatedateFrom: types.MustTimeFromString("2021-06-26T03:36:42.239Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-05T18:49:24.442Z"),
        Description: sdk.String("unde"),
        Filesuffix: sdk.String("quae"),
        Fromdate: types.MustTimeFromString("2022-08-29T09:17:21.956Z"),
        Group: sdk.String("eveniet"),
        Max: sdk.Int64(389630),
        Maxlatitude: sdk.Float32(1873.61),
        Maxlongitude: sdk.Float32(5054.73),
        Minlatitude: sdk.Float32(6977.29),
        Minlongitude: sdk.Float32(8486.49),
        Name: sdk.String("Mrs. Guadalupe Daniel"),
        Skip: sdk.Int64(693724),
        Text: sdk.String("voluptas"),
        Todate: types.MustTimeFromString("2021-06-19T08:10:54.315Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
