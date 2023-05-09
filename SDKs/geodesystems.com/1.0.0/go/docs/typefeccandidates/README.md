# TypeFeccandidates

## Overview

Search API for 'Candidates' entry type

### Available Operations

* [SearchFeccandidates](#searchfeccandidates) - Search API for 'Candidates' entry type

## SearchFeccandidates

API to search for entries of type Candidates

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
    res, err := s.TypeFeccandidates.SearchFeccandidates(ctx, operations.SearchFeccandidatesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-21T12:53:49.231Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-02T19:53:01.274Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-18T15:43:31.696Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-05T11:21:49.286Z"),
        Description: sdk.String("beatae"),
        Filesuffix: sdk.String("vero"),
        Fromdate: types.MustTimeFromString("2022-02-19T15:28:07.331Z"),
        Group: sdk.String("velit"),
        Max: sdk.Int64(284086),
        Maxlatitude: sdk.Float32(5964.33),
        Maxlongitude: sdk.Float32(9353.02),
        Minlatitude: sdk.Float32(1175.25),
        Minlongitude: sdk.Float32(7722.66),
        Name: sdk.String("Mrs. Jackie Watsica"),
        SearchDbFeccandidatesBeginningCash: sdk.Float64(2421.78),
        SearchDbFeccandidatesCandidateLoanRepayments: sdk.Float64(6738.38),
        SearchDbFeccandidatesCommitteeRefunds: sdk.Float64(2503.98),
        SearchDbFeccandidatesContributionsFromCandidate: sdk.Float64(2244.67),
        SearchDbFeccandidatesContributionsFromOtherCommittees: sdk.Float64(4833.94),
        SearchDbFeccandidatesContributionsFromPartyCommittees: sdk.Float64(247.53),
        SearchDbFeccandidatesCoverageEndDate: sdk.String("doloremque"),
        SearchDbFeccandidatesDebtsOwedBy: sdk.Float64(74.68),
        SearchDbFeccandidatesDistrict: sdk.String("officia"),
        SearchDbFeccandidatesEndingCash: sdk.Float64(9274.03),
        SearchDbFeccandidatesGender: sdk.String("ea"),
        SearchDbFeccandidatesIndividualRefunds: sdk.Float64(6931.53),
        SearchDbFeccandidatesLoansFromCandidates: sdk.Float64(3774.06),
        SearchDbFeccandidatesName: sdk.String("facilis"),
        SearchDbFeccandidatesOtherLoanRepayments: sdk.Float64(8093.65),
        SearchDbFeccandidatesOtherLoans: sdk.Float64(5960.65),
        SearchDbFeccandidatesParty: sdk.String("expedita"),
        SearchDbFeccandidatesState: sdk.String("deleniti"),
        SearchDbFeccandidatesTotalDisbursements: sdk.Float64(9543.34),
        SearchDbFeccandidatesTotalIndivualContributions: sdk.Float64(4555.79),
        SearchDbFeccandidatesTotalReceipts: sdk.Float64(3519.36),
        SearchDbFeccandidatesTransfersFromCommittees: sdk.Float64(6001.93),
        SearchDbFeccandidatesTransfersToCommittees: sdk.Float64(8975.43),
        Skip: sdk.Int64(654082),
        Text: sdk.String("impedit"),
        Todate: types.MustTimeFromString("2022-08-23T12:57:35.673Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
