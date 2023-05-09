# TypeProjectCasestudy

## Overview

Search API for 'Case Study' entry type

### Available Operations

* [SearchProjectCasestudy](#searchprojectcasestudy) - Search API for 'Case Study' entry type

## SearchProjectCasestudy

API to search for entries of type Case Study

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
    res, err := s.TypeProjectCasestudy.SearchProjectCasestudy(ctx, operations.SearchProjectCasestudyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-18T16:44:34.970Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-07T04:48:01.873Z"),
        CreatedateFrom: types.MustTimeFromString("2020-01-24T16:46:41.592Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-13T18:01:05.207Z"),
        Description: sdk.String("impedit"),
        Filesuffix: sdk.String("accusamus"),
        Fromdate: types.MustTimeFromString("2022-06-12T01:59:08.514Z"),
        Group: sdk.String("blanditiis"),
        Max: sdk.Int64(741603),
        Maxlatitude: sdk.Float32(1197.25),
        Maxlongitude: sdk.Float32(7705.44),
        Minlatitude: sdk.Float32(2740.4),
        Minlongitude: sdk.Float32(9082.49),
        Name: sdk.String("Jeremy Rutherford"),
        SearchProjectCasestudyIntendedUse: sdk.String("vel"),
        SearchProjectCasestudyLocation: sdk.String("eligendi"),
        Skip: sdk.Int64(923159),
        Text: sdk.String("ex"),
        Todate: types.MustTimeFromString("2022-11-30T06:16:15.371Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
