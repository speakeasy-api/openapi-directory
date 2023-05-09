# TypeIncident

## Overview

Search API for 'Incident' entry type

### Available Operations

* [SearchIncident](#searchincident) - Search API for 'Incident' entry type

## SearchIncident

API to search for entries of type Incident

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
    res, err := s.TypeIncident.SearchIncident(ctx, operations.SearchIncidentRequest{
        ChangedateFrom: types.MustTimeFromString("2021-09-24T04:06:59.820Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-23T10:02:26.660Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-02T06:07:32.455Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-12T19:07:29.722Z"),
        Description: sdk.String("distinctio"),
        Filesuffix: sdk.String("eius"),
        Fromdate: types.MustTimeFromString("2022-06-24T10:43:59.224Z"),
        Group: sdk.String("maiores"),
        Max: sdk.Int64(35160),
        Maxlatitude: sdk.Float32(3314.52),
        Maxlongitude: sdk.Float32(9062.32),
        Minlatitude: sdk.Float32(2060.63),
        Minlongitude: sdk.Float32(8163.65),
        Name: sdk.String("Olga Wyman"),
        SearchIncidentCause: sdk.String("delectus"),
        SearchIncidentIncidenttype: sdk.String("velit"),
        SearchIncidentState: sdk.String("vitae"),
        Skip: sdk.Int64(201096),
        Text: sdk.String("similique"),
        Todate: types.MustTimeFromString("2022-01-01T17:34:21.100Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
