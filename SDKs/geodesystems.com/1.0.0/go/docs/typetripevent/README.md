# TypeTripEvent

## Overview

Search API for 'Event' entry type

### Available Operations

* [SearchTripEvent](#searchtripevent) - Search API for 'Event' entry type

## SearchTripEvent

API to search for entries of type Event

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
    res, err := s.TypeTripEvent.SearchTripEvent(ctx, operations.SearchTripEventRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-29T05:03:39.225Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-19T06:43:31.808Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-13T23:12:40.856Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-17T16:30:55.479Z"),
        Description: sdk.String("odio"),
        Filesuffix: sdk.String("sit"),
        Fromdate: types.MustTimeFromString("2022-06-16T18:26:19.436Z"),
        Group: sdk.String("delectus"),
        Max: sdk.Int64(461853),
        Maxlatitude: sdk.Float32(6759.55),
        Maxlongitude: sdk.Float32(7262.44),
        Minlatitude: sdk.Float32(1921.73),
        Minlongitude: sdk.Float32(4748.72),
        Name: sdk.String("Mr. Bert Wunsch"),
        Skip: sdk.Int64(162251),
        Text: sdk.String("quis"),
        Todate: types.MustTimeFromString("2022-06-04T05:07:59.763Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
