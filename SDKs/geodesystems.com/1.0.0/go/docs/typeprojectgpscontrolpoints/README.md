# TypeProjectGpsControlpoints

## Overview

Search API for 'Control Points File' entry type

### Available Operations

* [SearchProjectGpsControlpoints](#searchprojectgpscontrolpoints) - Search API for 'Control Points File' entry type

## SearchProjectGpsControlpoints

API to search for entries of type Control Points File

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
    res, err := s.TypeProjectGpsControlpoints.SearchProjectGpsControlpoints(ctx, operations.SearchProjectGpsControlpointsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-13T05:28:14.380Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-26T21:22:49.757Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-03T09:14:28.396Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-26T16:59:15.324Z"),
        Description: sdk.String("consequuntur"),
        Filesuffix: sdk.String("vitae"),
        Fromdate: types.MustTimeFromString("2022-08-12T20:46:36.515Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(346608),
        Maxlatitude: sdk.Float32(8470.18),
        Maxlongitude: sdk.Float32(5065.32),
        Minlatitude: sdk.Float32(6016.26),
        Minlongitude: sdk.Float32(6294.61),
        Name: sdk.String("Garry Fahey"),
        Skip: sdk.Int64(989089),
        Text: sdk.String("temporibus"),
        Todate: types.MustTimeFromString("2021-12-01T07:51:21.127Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
