# TypeBoulderEmployeeSalaries

## Overview

Search API for 'Boulder Employee Salaries' entry type

### Available Operations

* [SearchBoulderEmployeeSalaries](#searchboulderemployeesalaries) - Search API for 'Boulder Employee Salaries' entry type

## SearchBoulderEmployeeSalaries

API to search for entries of type Boulder Employee Salaries

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
    res, err := s.TypeBoulderEmployeeSalaries.SearchBoulderEmployeeSalaries(ctx, operations.SearchBoulderEmployeeSalariesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-29T20:03:41.130Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-07T16:22:20.061Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-05T13:00:56.741Z"),
        CreatedateTo: types.MustTimeFromString("2021-11-23T23:35:18.899Z"),
        Description: sdk.String("voluptatibus"),
        Filesuffix: sdk.String("tempora"),
        Fromdate: types.MustTimeFromString("2022-07-18T18:18:32.854Z"),
        Group: sdk.String("reiciendis"),
        Max: sdk.Int64(401713),
        Maxlatitude: sdk.Float32(254.97),
        Maxlongitude: sdk.Float32(2484.13),
        Minlatitude: sdk.Float32(8880.44),
        Minlongitude: sdk.Float32(5058.66),
        Name: sdk.String("Alex Gottlieb"),
        SearchDbBoulderEmployeeSalariesDepartment: sdk.String("rem"),
        SearchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary: sdk.Float64(265.22),
        SearchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN: sdk.String("nobis"),
        SearchDbBoulderEmployeeSalariesEmployeeFteInThisPosition: sdk.Float64(6256.37),
        SearchDbBoulderEmployeeSalariesEmployeeHourlyPayRate: sdk.Float64(3335.07),
        SearchDbBoulderEmployeeSalariesPayRangeMax: sdk.Float64(3295.43),
        SearchDbBoulderEmployeeSalariesPayRangeMin: sdk.Float64(9241.59),
        SearchDbBoulderEmployeeSalariesPositionDescription: sdk.String("reiciendis"),
        Skip: sdk.Int64(862319),
        Text: sdk.String("magni"),
        Todate: types.MustTimeFromString("2022-02-05T23:00:32.306Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
