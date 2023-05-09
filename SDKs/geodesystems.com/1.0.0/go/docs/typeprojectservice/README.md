# TypeProjectService

## Overview

Search API for 'Data Access Service' entry type

### Available Operations

* [SearchProjectService](#searchprojectservice) - Search API for 'Data Access Service' entry type

## SearchProjectService

API to search for entries of type Data Access Service

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
    res, err := s.TypeProjectService.SearchProjectService(ctx, operations.SearchProjectServiceRequest{
        ChangedateFrom: types.MustTimeFromString("2021-05-01T18:02:47.466Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-06T03:21:37.038Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-28T21:31:25.301Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-09T20:54:15.420Z"),
        Description: sdk.String("cumque"),
        Filesuffix: sdk.String("maxime"),
        Fromdate: types.MustTimeFromString("2022-11-22T20:02:33.919Z"),
        Group: sdk.String("id"),
        Max: sdk.Int64(9060),
        Maxlatitude: sdk.Float32(5515.76),
        Maxlongitude: sdk.Float32(1917.24),
        Minlatitude: sdk.Float32(4365.32),
        Minlongitude: sdk.Float32(2704.77),
        Name: sdk.String("Faye Bartoletti"),
        SearchProjectServiceProvider: sdk.String("facilis"),
        SearchProjectServiceServiceType: sdk.String("laudantium"),
        Skip: sdk.Int64(353075),
        Text: sdk.String("aut"),
        Todate: types.MustTimeFromString("2022-05-11T11:02:14.127Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
