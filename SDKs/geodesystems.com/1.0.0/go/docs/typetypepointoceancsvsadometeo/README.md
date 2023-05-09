# TypeTypePointOceanCsvSadoMeteo

## Overview

Search API for 'SADO Meteo Data' entry type

### Available Operations

* [SearchTypePointOceanCsvSadoMeteo](#searchtypepointoceancsvsadometeo) - Search API for 'SADO Meteo Data' entry type

## SearchTypePointOceanCsvSadoMeteo

API to search for entries of type SADO Meteo Data

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
    res, err := s.TypeTypePointOceanCsvSadoMeteo.SearchTypePointOceanCsvSadoMeteo(ctx, operations.SearchTypePointOceanCsvSadoMeteoRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-13T11:12:39.454Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-11T22:31:41.392Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-17T05:18:24.814Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-11T09:21:33.418Z"),
        Description: sdk.String("non"),
        Filesuffix: sdk.String("facere"),
        Fromdate: types.MustTimeFromString("2021-12-15T21:04:43.668Z"),
        Group: sdk.String("quidem"),
        Max: sdk.Int64(408208),
        Maxlatitude: sdk.Float32(4772.22),
        Maxlongitude: sdk.Float32(1124.41),
        Minlatitude: sdk.Float32(5704.37),
        Minlongitude: sdk.Float32(5280.85),
        Name: sdk.String("Gary Wisozk"),
        Skip: sdk.Int64(667449),
        Text: sdk.String("tempora"),
        Todate: types.MustTimeFromString("2021-07-31T23:57:53.258Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
