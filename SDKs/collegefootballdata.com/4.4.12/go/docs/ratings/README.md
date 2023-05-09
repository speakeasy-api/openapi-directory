# Ratings

## Overview

Team rating data

### Available Operations

* [GetConferenceSPRatings](#getconferencespratings) - Historical SP+ ratings by conference
* [GetEloRatings](#geteloratings) - Historical Elo ratings
* [GetSPRatings](#getspratings) - Historical SP+ ratings
* [GetSRSRatings](#getsrsratings) - Historical SRS ratings

## GetConferenceSPRatings

Get average SP+ historical rating data by conference

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
    res, err := s.Ratings.GetConferenceSPRatings(ctx, operations.GetConferenceSPRatingsRequest{
        Conference: sdk.String("ut"),
        Year: sdk.Int64(979587),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceSPRatings != nil {
        // handle response
    }
}
```

## GetEloRatings

Elo rating data

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
    res, err := s.Ratings.GetEloRatings(ctx, operations.GetEloRatingsRequest{
        Conference: sdk.String("dicta"),
        Team: sdk.String("corporis"),
        Week: sdk.Int64(296140),
        Year: sdk.Int64(480894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamEloRatings != nil {
        // handle response
    }
}
```

## GetSPRatings

SP+ rating data

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
    res, err := s.Ratings.GetSPRatings(ctx, operations.GetSPRatingsRequest{
        Team: sdk.String("dicta"),
        Year: sdk.Int64(688661),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSPRatings != nil {
        // handle response
    }
}
```

## GetSRSRatings

SRS rating data (requires either a year or team specified)

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
    res, err := s.Ratings.GetSRSRatings(ctx, operations.GetSRSRatingsRequest{
        Conference: sdk.String("enim"),
        Team: sdk.String("accusamus"),
        Year: sdk.Int64(414263),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSRSRatings != nil {
        // handle response
    }
}
```
