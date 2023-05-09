# TypeBolderRentalHousing

## Overview

Search API for 'Boulder Rental Housing' entry type

### Available Operations

* [SearchBolderRentalHousing](#searchbolderrentalhousing) - Search API for 'Boulder Rental Housing' entry type

## SearchBolderRentalHousing

API to search for entries of type Boulder Rental Housing

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
    res, err := s.TypeBolderRentalHousing.SearchBolderRentalHousing(ctx, operations.SearchBolderRentalHousingRequest{
        ChangedateFrom: types.MustTimeFromString("2021-08-28T09:43:20.644Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-07T07:44:57.988Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-31T12:04:26.954Z"),
        CreatedateTo: types.MustTimeFromString("2021-04-30T16:20:53.400Z"),
        Description: sdk.String("assumenda"),
        Filesuffix: sdk.String("nulla"),
        Fromdate: types.MustTimeFromString("2022-04-10T15:05:31.822Z"),
        Group: sdk.String("quasi"),
        Max: sdk.Int64(270328),
        Maxlatitude: sdk.Float32(2561.39),
        Maxlongitude: sdk.Float32(1314.82),
        Minlatitude: sdk.Float32(5919.35),
        Minlongitude: sdk.Float32(553.74),
        Name: sdk.String("Megan Kuhlman"),
        SearchDbBolderRentalHousingBldgtype: sdk.String("esse"),
        SearchDbBolderRentalHousingCompany: sdk.String("rem"),
        SearchDbBolderRentalHousingComplexnm: sdk.String("fuga"),
        SearchDbBolderRentalHousingDwellunits: sdk.Int64(442015),
        SearchDbBolderRentalHousingEngcompl: sdk.String("quidem"),
        SearchDbBolderRentalHousingLicenseexp: sdk.String("fugiat"),
        SearchDbBolderRentalHousingLicensenum: sdk.String("ut"),
        SearchDbBolderRentalHousingLocation: sdk.String("eum"),
        SearchDbBolderRentalHousingName: sdk.String("suscipit"),
        SearchDbBolderRentalHousingNeighbrhd: sdk.String("assumenda"),
        SearchDbBolderRentalHousingPerson1: sdk.String("eos"),
        SearchDbBolderRentalHousingPerson2: sdk.String("praesentium"),
        SearchDbBolderRentalHousingPersontype: sdk.String("quisquam"),
        SearchDbBolderRentalHousingPpl1Coname: sdk.String("veritatis"),
        SearchDbBolderRentalHousingPpl1Role: sdk.String("ipsa"),
        SearchDbBolderRentalHousingPpl2Coname: sdk.String("id"),
        SearchDbBolderRentalHousingPpl2Role: sdk.String("quidem"),
        SearchDbBolderRentalHousingPropaddr1: sdk.String("neque"),
        SearchDbBolderRentalHousingRentaltype: sdk.String("quo"),
        SearchDbBolderRentalHousingRoomunits: sdk.Int64(847276),
        Skip: sdk.Int64(777408),
        Text: sdk.String("fuga"),
        Todate: types.MustTimeFromString("2022-10-27T21:30:06.318Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
