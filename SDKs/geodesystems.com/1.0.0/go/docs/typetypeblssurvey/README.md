# TypeTypeBlsSurvey

## Overview

Search API for 'BLS Survey' entry type

### Available Operations

* [SearchTypeBlsSurvey](#searchtypeblssurvey) - Search API for 'BLS Survey' entry type

## SearchTypeBlsSurvey

API to search for entries of type BLS Survey

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
    res, err := s.TypeTypeBlsSurvey.SearchTypeBlsSurvey(ctx, operations.SearchTypeBlsSurveyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-03T23:21:08.092Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-20T23:19:03.169Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-24T20:44:16.683Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-04T23:17:50.527Z"),
        Description: sdk.String("veniam"),
        Filesuffix: sdk.String("quidem"),
        Fromdate: types.MustTimeFromString("2021-09-15T01:50:57.399Z"),
        Group: sdk.String("deserunt"),
        Max: sdk.Int64(919730),
        Maxlatitude: sdk.Float32(3659.98),
        Maxlongitude: sdk.Float32(5654.46),
        Minlatitude: sdk.Float32(1020.19),
        Minlongitude: sdk.Float32(7112.75),
        Name: sdk.String("Hugh Quigley"),
        Skip: sdk.Int64(982447),
        Text: sdk.String("ipsum"),
        Todate: types.MustTimeFromString("2022-11-20T01:15:44.636Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
