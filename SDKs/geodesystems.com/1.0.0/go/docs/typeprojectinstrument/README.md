# TypeProjectInstrument

## Overview

Search API for 'Instrument Data Collection' entry type

### Available Operations

* [SearchProjectInstrument](#searchprojectinstrument) - Search API for 'Instrument Data Collection' entry type

## SearchProjectInstrument

API to search for entries of type Instrument Data Collection

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
    res, err := s.TypeProjectInstrument.SearchProjectInstrument(ctx, operations.SearchProjectInstrumentRequest{
        ChangedateFrom: types.MustTimeFromString("2020-02-15T03:11:54.650Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-05T07:02:20.526Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-28T10:53:29.573Z"),
        CreatedateTo: types.MustTimeFromString("2020-05-23T03:36:44.573Z"),
        Description: sdk.String("tenetur"),
        Filesuffix: sdk.String("molestias"),
        Fromdate: types.MustTimeFromString("2022-07-18T11:29:26.661Z"),
        Group: sdk.String("laborum"),
        Max: sdk.Int64(596185),
        Maxlatitude: sdk.Float32(9156.47),
        Maxlongitude: sdk.Float32(4288.1),
        Minlatitude: sdk.Float32(951.23),
        Minlongitude: sdk.Float32(5551.94),
        Name: sdk.String("Tonya Sauer"),
        Skip: sdk.Int64(695347),
        Text: sdk.String("explicabo"),
        Todate: types.MustTimeFromString("2022-02-21T02:10:01.888Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
