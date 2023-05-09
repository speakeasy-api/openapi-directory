# Stats

### Available Operations

* [GetStats](#getstats) - Retrieve usage statistics for an application
* [GetTime](#gettime) - Get the service time

## GetStats

The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetStats(ctx, operations.GetStatsRequest{
        XAblyVersion: sdk.String("totam"),
        Direction: shared.FilterDirectionEnumBackwards.ToPointer(),
        End: sdk.String("alias"),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
        Limit: sdk.Int64(311860),
        Start: sdk.String("tempora"),
        Unit: operations.GetStatsUnitEnumHour.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStats2XXApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTime

This returns the service time in milliseconds since the epoch.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetTime(ctx, operations.GetTimeRequest{
        XAblyVersion: sdk.String("quod"),
        Format: shared.ResponseFormatEnumHTML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTime2XXApplicationJSONIntegers != nil {
        // handle response
    }
}
```
