# TypeFecPacs

## Overview

Search API for 'FEC PACs' entry type

### Available Operations

* [SearchFecPacs](#searchfecpacs) - Search API for 'FEC PACs' entry type

## SearchFecPacs

API to search for entries of type FEC PACs

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
    res, err := s.TypeFecPacs.SearchFecPacs(ctx, operations.SearchFecPacsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-06T06:38:58.719Z"),
        ChangedateTo: types.MustTimeFromString("2020-09-04T17:19:05.591Z"),
        CreatedateFrom: types.MustTimeFromString("2020-04-20T09:18:57.946Z"),
        CreatedateTo: types.MustTimeFromString("2021-10-15T06:49:27.168Z"),
        Description: sdk.String("voluptas"),
        Filesuffix: sdk.String("debitis"),
        Fromdate: types.MustTimeFromString("2022-10-21T17:37:55.823Z"),
        Group: sdk.String("minus"),
        Max: sdk.Int64(685478),
        Maxlatitude: sdk.Float32(6756.89),
        Maxlongitude: sdk.Float32(2310.7),
        Minlatitude: sdk.Float32(2448.89),
        Minlongitude: sdk.Float32(5388.69),
        Name: sdk.String("Pat Cummerata"),
        SearchDbFecPacsBeginningCash: sdk.Float64(7214.3),
        SearchDbFecPacsCandidateLoanRepayments: sdk.Float64(2940.76),
        SearchDbFecPacsCommittee: sdk.String("iusto"),
        SearchDbFecPacsContributionsFromCandidate: sdk.Float64(4530.94),
        SearchDbFecPacsContributionsFromIndividuals: sdk.Float64(1940.23),
        SearchDbFecPacsContributionsFromOtherCommittees: sdk.Float64(4939.58),
        SearchDbFecPacsContributionsToOtherCommittee: sdk.Float64(2055.66),
        SearchDbFecPacsEndingCash: sdk.Float64(7781.72),
        SearchDbFecPacsLoanRepayments: sdk.Float64(5354.68),
        SearchDbFecPacsLoansFromCandidate: sdk.Float64(8442.35),
        SearchDbFecPacsRefendsToOthercommittees: sdk.Float64(4378.14),
        SearchDbFecPacsRefundsToIndividuals: sdk.Float64(1390.72),
        SearchDbFecPacsTotalDistributions: sdk.Float64(9749.9),
        SearchDbFecPacsTotalLoansReceived: sdk.Float64(4269.04),
        SearchDbFecPacsTotalReceipts: sdk.Float64(3008.24),
        SearchDbFecPacsTransFromAffiliates: sdk.Float64(8428.55),
        SearchDbFecPacsTransfersToAffiliates: sdk.Float64(789.69),
        Skip: sdk.Int64(818034),
        Text: sdk.String("libero"),
        Todate: types.MustTimeFromString("2022-01-09T23:17:04.281Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
