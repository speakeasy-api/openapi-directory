# TypeBostonCrime

## Overview

Search API for 'Boston Crime' entry type

### Available Operations

* [SearchBostonCrime](#searchbostoncrime) - Search API for 'Boston Crime' entry type

## SearchBostonCrime

API to search for entries of type Boston Crime

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
    res, err := s.TypeBostonCrime.SearchBostonCrime(ctx, operations.SearchBostonCrimeRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-24T16:30:16.544Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-19T07:05:05.913Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-27T07:00:05.421Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-12T08:30:58.411Z"),
        Description: sdk.String("atque"),
        Filesuffix: sdk.String("explicabo"),
        Fromdate: types.MustTimeFromString("2022-08-10T16:09:39.108Z"),
        Group: sdk.String("fugit"),
        Max: sdk.Int64(956406),
        Maxlatitude: sdk.Float32(1598.7),
        Maxlongitude: sdk.Float32(1871.31),
        Minlatitude: sdk.Float32(1294.12),
        Minlongitude: sdk.Float32(9039.84),
        Name: sdk.String("Ivan Bosco"),
        SearchDbBostonCrimeDayOfWeek: sdk.String("accusamus"),
        SearchDbBostonCrimeDistrict: sdk.String("veritatis"),
        SearchDbBostonCrimeHour: sdk.Float64(4586.04),
        SearchDbBostonCrimeLocation: sdk.String("quod"),
        SearchDbBostonCrimeMonth: sdk.Float64(7241.68),
        SearchDbBostonCrimeOffense: sdk.String("vero"),
        SearchDbBostonCrimeOffenseCodeGroup: sdk.String("aliquid"),
        SearchDbBostonCrimeOffenseDescription: sdk.String("quasi"),
        SearchDbBostonCrimeReportingArea: sdk.String("saepe"),
        SearchDbBostonCrimeShooting: sdk.String("vel"),
        SearchDbBostonCrimeStreet: sdk.String("harum"),
        SearchDbBostonCrimeYear: sdk.Float64(4732.21),
        Skip: sdk.Int64(699622),
        Text: sdk.String("occaecati"),
        Todate: types.MustTimeFromString("2022-04-14T13:42:03.513Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
