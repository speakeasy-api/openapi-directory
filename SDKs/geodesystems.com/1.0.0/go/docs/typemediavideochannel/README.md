# TypeMediaVideoChannel

## Overview

Search API for 'Video Channel' entry type

### Available Operations

* [SearchMediaVideoChannel](#searchmediavideochannel) - Search API for 'Video Channel' entry type

## SearchMediaVideoChannel

API to search for entries of type Video Channel

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
    res, err := s.TypeMediaVideoChannel.SearchMediaVideoChannel(ctx, operations.SearchMediaVideoChannelRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-04T21:04:08.252Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-04T08:20:05.226Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-04T21:42:10.988Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-18T03:51:40.510Z"),
        Description: sdk.String("possimus"),
        Filesuffix: sdk.String("repellat"),
        Fromdate: types.MustTimeFromString("2022-09-13T05:51:54.156Z"),
        Group: sdk.String("adipisci"),
        Max: sdk.Int64(867115),
        Maxlatitude: sdk.Float32(6884.63),
        Maxlongitude: sdk.Float32(2942.66),
        Minlatitude: sdk.Float32(9767.62),
        Minlongitude: sdk.Float32(4353.53),
        Name: sdk.String("Bethany Rogahn"),
        Skip: sdk.Int64(937865),
        Text: sdk.String("praesentium"),
        Todate: types.MustTimeFromString("2022-06-30T16:40:09.613Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
