# TypeChatroom

## Overview

Search API for 'Chat Room' entry type

### Available Operations

* [SearchChatroom](#searchchatroom) - Search API for 'Chat Room' entry type

## SearchChatroom

API to search for entries of type Chat Room

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
    res, err := s.TypeChatroom.SearchChatroom(ctx, operations.SearchChatroomRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-11T17:54:29.915Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-13T02:57:02.580Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-17T14:59:36.472Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-09T15:08:05.768Z"),
        Description: sdk.String("laborum"),
        Filesuffix: sdk.String("distinctio"),
        Fromdate: types.MustTimeFromString("2021-12-15T04:55:40.282Z"),
        Group: sdk.String("aliquam"),
        Max: sdk.Int64(320565),
        Maxlatitude: sdk.Float32(9979.63),
        Maxlongitude: sdk.Float32(30.99),
        Minlatitude: sdk.Float32(3621.89),
        Minlongitude: sdk.Float32(5973.03),
        Name: sdk.String("Dr. Iris Hodkiewicz"),
        Skip: sdk.Int64(174658),
        Text: sdk.String("id"),
        Todate: types.MustTimeFromString("2022-09-16T00:03:17.363Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
