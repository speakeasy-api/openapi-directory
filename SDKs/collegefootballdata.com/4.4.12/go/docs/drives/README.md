# Drives

## Overview

Drive data

### Available Operations

* [GetDrives](#getdrives) - Drive data and results

## GetDrives

Get game drives

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
    res, err := s.Drives.GetDrives(ctx, operations.GetDrivesRequest{
        Classification: sdk.String("temporibus"),
        Conference: sdk.String("ab"),
        Defense: sdk.String("quis"),
        DefenseConference: sdk.String("veritatis"),
        Offense: sdk.String("deserunt"),
        OffenseConference: sdk.String("perferendis"),
        SeasonType: sdk.String("ipsam"),
        Team: sdk.String("repellendus"),
        Week: sdk.Int64(957156),
        Year: 778157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drives != nil {
        // handle response
    }
}
```
