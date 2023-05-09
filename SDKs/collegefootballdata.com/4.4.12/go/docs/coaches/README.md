# Coaches

## Overview

Information about coaches

### Available Operations

* [GetCoaches](#getcoaches) - Coaching records and history

## GetCoaches

Coaching history

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
    res, err := s.Coaches.GetCoaches(ctx, operations.GetCoachesRequest{
        FirstName: sdk.String("Vincenzo"),
        LastName: sdk.String("Goldner"),
        MaxYear: sdk.Int64(383441),
        MinYear: sdk.Int64(477665),
        Team: sdk.String("minus"),
        Year: sdk.Int64(812169),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Coaches != nil {
        // handle response
    }
}
```
