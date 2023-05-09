# Type2017BoulderElectionExpenditures

## Overview

Search API for '2017 Boulder Election Expenditures' entry type

### Available Operations

* [Search2017BoulderElectionExpenditures](#search2017boulderelectionexpenditures) - Search API for '2017 Boulder Election Expenditures' entry type

## Search2017BoulderElectionExpenditures

API to search for entries of type 2017 Boulder Election Expenditures

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
    res, err := s.Type2017BoulderElectionExpenditures.Search2017BoulderElectionExpenditures(ctx, operations.Search2017BoulderElectionExpendituresRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-22T12:08:58.275Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-26T09:37:56.283Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
        Description: sdk.String("debitis"),
        Filesuffix: sdk.String("ipsa"),
        Fromdate: types.MustTimeFromString("2022-03-08T10:35:32.561Z"),
        Group: sdk.String("suscipit"),
        Max: sdk.Int64(477665),
        Maxlatitude: sdk.Float32(7917.25),
        Maxlongitude: sdk.Float32(8121.69),
        Minlatitude: sdk.Float32(5288.95),
        Minlongitude: sdk.Float32(4799.77),
        Name: sdk.String("Charlie Walsh II"),
        SearchDb2017BoulderElectionExpendituresCity: sdk.String("veritatis"),
        SearchDb2017BoulderElectionExpendituresCommittee: sdk.String("deserunt"),
        SearchDb2017BoulderElectionExpendituresExpenditure: sdk.Float64(202.18),
        SearchDb2017BoulderElectionExpendituresName: sdk.String("ipsam"),
        SearchDb2017BoulderElectionExpendituresPurpose: sdk.String("repellendus"),
        SearchDb2017BoulderElectionExpendituresState: sdk.String("sapiente"),
        SearchDb2017BoulderElectionExpendituresStreet: sdk.String("quo"),
        SearchDb2017BoulderElectionExpendituresTransactionDate: sdk.String("odit"),
        SearchDb2017BoulderElectionExpendituresZip: sdk.String("at"),
        Skip: sdk.Int64(870088),
        Text: sdk.String("maiores"),
        Todate: types.MustTimeFromString("2022-03-15T07:22:15.330Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
