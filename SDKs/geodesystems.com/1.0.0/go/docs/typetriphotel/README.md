# TypeTripHotel

## Overview

Search API for 'Lodging' entry type

### Available Operations

* [SearchTripHotel](#searchtriphotel) - Search API for 'Lodging' entry type

## SearchTripHotel

API to search for entries of type Lodging

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
    res, err := s.TypeTripHotel.SearchTripHotel(ctx, operations.SearchTripHotelRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-24T04:04:20.256Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-29T07:26:39.700Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-28T09:26:08.422Z"),
        CreatedateTo: types.MustTimeFromString("2021-11-29T09:33:34.942Z"),
        Description: sdk.String("quae"),
        Filesuffix: sdk.String("facere"),
        Fromdate: types.MustTimeFromString("2022-04-09T09:22:24.048Z"),
        Group: sdk.String("nam"),
        Max: sdk.Int64(225383),
        Maxlatitude: sdk.Float32(2387.39),
        Maxlongitude: sdk.Float32(7935.97),
        Minlatitude: sdk.Float32(9438.28),
        Minlongitude: sdk.Float32(6291.16),
        Name: sdk.String("Glenn Green"),
        Skip: sdk.Int64(240027),
        Text: sdk.String("veritatis"),
        Todate: types.MustTimeFromString("2021-01-19T09:57:07.431Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
