# TypeSlackTeam

## Overview

Search API for 'Slack Team' entry type

### Available Operations

* [SearchSlackTeam](#searchslackteam) - Search API for 'Slack Team' entry type

## SearchSlackTeam

API to search for entries of type Slack Team

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
    res, err := s.TypeSlackTeam.SearchSlackTeam(ctx, operations.SearchSlackTeamRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-24T12:44:13.413Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-24T04:06:35.177Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-29T06:19:03.205Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-01T10:59:52.480Z"),
        Description: sdk.String("occaecati"),
        Filesuffix: sdk.String("itaque"),
        Fromdate: types.MustTimeFromString("2022-07-13T13:30:15.387Z"),
        Group: sdk.String("modi"),
        Max: sdk.Int64(134832),
        Maxlatitude: sdk.Float32(1297.62),
        Maxlongitude: sdk.Float32(3804.5),
        Minlatitude: sdk.Float32(588.08),
        Minlongitude: sdk.Float32(9104.1),
        Name: sdk.String("Mr. Robin Dibbert"),
        Skip: sdk.Int64(927754),
        Text: sdk.String("voluptate"),
        Todate: types.MustTimeFromString("2021-09-01T14:03:59.260Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
