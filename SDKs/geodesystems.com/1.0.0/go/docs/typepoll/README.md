# TypePoll

## Overview

Search API for 'Poll' entry type

### Available Operations

* [SearchPoll](#searchpoll) - Search API for 'Poll' entry type

## SearchPoll

API to search for entries of type Poll

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
    res, err := s.TypePoll.SearchPoll(ctx, operations.SearchPollRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-29T14:29:34.691Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-05T14:38:05.371Z"),
        CreatedateFrom: types.MustTimeFromString("2021-02-24T00:35:46.114Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-30T19:30:44.770Z"),
        Description: sdk.String("necessitatibus"),
        Filesuffix: sdk.String("distinctio"),
        Fromdate: types.MustTimeFromString("2021-11-03T17:46:09.057Z"),
        Group: sdk.String("voluptatem"),
        Max: sdk.Int64(759490),
        Maxlatitude: sdk.Float32(1936.23),
        Maxlongitude: sdk.Float32(1257.07),
        Minlatitude: sdk.Float32(1122.5),
        Minlongitude: sdk.Float32(9730.96),
        Name: sdk.String("Tammy Farrell"),
        Skip: sdk.Int64(345514),
        Text: sdk.String("temporibus"),
        Todate: types.MustTimeFromString("2022-10-12T00:49:16.585Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
