# TypeTypeTweet

## Overview

Search API for 'Tweet' entry type

### Available Operations

* [SearchTypeTweet](#searchtypetweet) - Search API for 'Tweet' entry type

## SearchTypeTweet

API to search for entries of type Tweet

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
    res, err := s.TypeTypeTweet.SearchTypeTweet(ctx, operations.SearchTypeTweetRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-14T09:01:00.084Z"),
        ChangedateTo: types.MustTimeFromString("2021-08-07T07:53:49.488Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-19T09:35:13.784Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-17T20:35:13.110Z"),
        Description: sdk.String("placeat"),
        Filesuffix: sdk.String("necessitatibus"),
        Fromdate: types.MustTimeFromString("2020-09-09T04:43:18.541Z"),
        Group: sdk.String("ducimus"),
        Max: sdk.Int64(279310),
        Maxlatitude: sdk.Float32(9758.47),
        Maxlongitude: sdk.Float32(4721.52),
        Minlatitude: sdk.Float32(4976.33),
        Minlongitude: sdk.Float32(7222),
        Name: sdk.String("Nina Gutmann"),
        Skip: sdk.Int64(842539),
        Text: sdk.String("iure"),
        Todate: types.MustTimeFromString("2022-03-01T06:49:32.137Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
