# TypeCommitteeDonations

## Overview

Search API for 'Committee Donations' entry type

### Available Operations

* [SearchCommitteeDonations](#searchcommitteedonations) - Search API for 'Committee Donations' entry type

## SearchCommitteeDonations

API to search for entries of type Committee Donations

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
    res, err := s.TypeCommitteeDonations.SearchCommitteeDonations(ctx, operations.SearchCommitteeDonationsRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-23T08:23:19.189Z"),
        ChangedateTo: types.MustTimeFromString("2020-02-18T03:48:05.478Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-29T17:35:23.458Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-16T06:32:28.803Z"),
        Description: sdk.String("quis"),
        Filesuffix: sdk.String("inventore"),
        Fromdate: types.MustTimeFromString("2022-03-27T16:13:46.480Z"),
        Group: sdk.String("quae"),
        Max: sdk.Int64(21688),
        Maxlatitude: sdk.Float32(2419.01),
        Maxlongitude: sdk.Float32(1372.51),
        Minlatitude: sdk.Float32(4322.81),
        Minlongitude: sdk.Float32(2606.28),
        Name: sdk.String("Wilfred Rutherford"),
        SearchDbCommitteeDonationsAmount: sdk.Float64(4332.79),
        SearchDbCommitteeDonationsCity: sdk.String("dicta"),
        SearchDbCommitteeDonationsCommittee: sdk.String("minima"),
        SearchDbCommitteeDonationsDate: sdk.String("beatae"),
        SearchDbCommitteeDonationsEmployer: sdk.String("cupiditate"),
        SearchDbCommitteeDonationsLocation: sdk.String("provident"),
        SearchDbCommitteeDonationsOccupation: sdk.String("earum"),
        SearchDbCommitteeDonationsRecipient: sdk.String("soluta"),
        SearchDbCommitteeDonationsState: sdk.String("hic"),
        SearchDbCommitteeDonationsZipCode: sdk.String("illum"),
        Skip: sdk.Int64(52508),
        Text: sdk.String("earum"),
        Todate: types.MustTimeFromString("2021-01-13T02:22:20.450Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
