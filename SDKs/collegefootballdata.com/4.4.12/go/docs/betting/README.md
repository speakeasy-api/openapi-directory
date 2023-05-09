# Betting

## Overview

Betting lines and data

### Available Operations

* [GetLines](#getlines) - Betting lines

## GetLines

Closing betting lines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Betting.GetLines(ctx, operations.GetLinesRequest{
        Away: sdk.String("vel"),
        Conference: sdk.String("error"),
        GameID: sdk.Int64(645894),
        Home: sdk.String("suscipit"),
        SeasonType: sdk.String("iure"),
        Team: sdk.String("magnam"),
        Week: sdk.Int64(891773),
        Year: sdk.Int64(56713),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameLines != nil {
        // handle response
    }
}
```
