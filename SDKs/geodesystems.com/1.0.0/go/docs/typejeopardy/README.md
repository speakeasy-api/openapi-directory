# TypeJeopardy

## Overview

Search API for 'Jeopardy' entry type

### Available Operations

* [SearchJeopardy](#searchjeopardy) - Search API for 'Jeopardy' entry type

## SearchJeopardy

API to search for entries of type Jeopardy

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
    res, err := s.TypeJeopardy.SearchJeopardy(ctx, operations.SearchJeopardyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-05T10:05:27.153Z"),
        ChangedateTo: types.MustTimeFromString("2021-03-11T08:40:17.658Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-15T06:32:12.898Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-02T03:13:50.504Z"),
        Description: sdk.String("optio"),
        Filesuffix: sdk.String("alias"),
        Fromdate: types.MustTimeFromString("2022-08-08T19:04:23.267Z"),
        Group: sdk.String("commodi"),
        Max: sdk.Int64(956124),
        Maxlatitude: sdk.Float32(1643.19),
        Maxlongitude: sdk.Float32(3304.4),
        Minlatitude: sdk.Float32(8937.73),
        Minlongitude: sdk.Float32(6383.9),
        Name: sdk.String("Alexander Gerhold"),
        SearchDbJeopardyAirDate: sdk.String("libero"),
        SearchDbJeopardyAnswer: sdk.String("in"),
        SearchDbJeopardyCategory: sdk.String("minima"),
        SearchDbJeopardyQuestion: sdk.String("ex"),
        SearchDbJeopardyRound: sdk.String("minus"),
        Skip: sdk.Int64(68880),
        Text: sdk.String("beatae"),
        Todate: types.MustTimeFromString("2021-10-28T09:51:29.423Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
