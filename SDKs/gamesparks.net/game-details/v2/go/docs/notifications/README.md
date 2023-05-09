# Notifications

## Overview

Log Summary Restv 2 Controller

### Available Operations

* [GETGameSummaryUsingGET](#getgamesummaryusingget) - getGameSummary

## GETGameSummaryUsingGET

getGameSummary

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
    res, err := s.Notifications.GETGameSummaryUsingGET(ctx, operations.GETGameSummaryUsingGETRequest{
        APIKey: "ea",
        EndDate: types.MustDateFromString("2022-04-29"),
        Stage: operations.GETGameSummaryUsingGETStageEnumPreview,
        StartDate: types.MustDateFromString("2022-06-02"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameSummaryModel != nil {
        // handle response
    }
}
```
