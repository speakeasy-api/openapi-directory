# TypeVoteYesno

## Overview

Search API for 'Simple Yes-No Vote' entry type

### Available Operations

* [SearchVoteYesno](#searchvoteyesno) - Search API for 'Simple Yes-No Vote' entry type

## SearchVoteYesno

API to search for entries of type Simple Yes-No Vote

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
    res, err := s.TypeVoteYesno.SearchVoteYesno(ctx, operations.SearchVoteYesnoRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-06T16:12:59.911Z"),
        ChangedateTo: types.MustTimeFromString("2021-10-07T22:54:11.070Z"),
        CreatedateFrom: types.MustTimeFromString("2021-05-10T21:05:54.671Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-11T04:42:06.535Z"),
        Description: sdk.String("reiciendis"),
        Filesuffix: sdk.String("voluptatum"),
        Fromdate: types.MustTimeFromString("2022-07-22T15:24:28.373Z"),
        Group: sdk.String("animi"),
        Max: sdk.Int64(638092),
        Maxlatitude: sdk.Float32(9095.58),
        Maxlongitude: sdk.Float32(624.09),
        Minlatitude: sdk.Float32(2365.64),
        Minlongitude: sdk.Float32(9417.3),
        Name: sdk.String("Sylvia Ruecker"),
        SearchDbVoteYesnoVote: sdk.String("unde"),
        Skip: sdk.Int64(992178),
        Text: sdk.String("nam"),
        Todate: types.MustTimeFromString("2021-04-17T22:07:18.435Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
