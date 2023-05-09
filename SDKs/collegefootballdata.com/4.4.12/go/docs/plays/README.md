# Plays

## Overview

Play by play data

### Available Operations

* [GetLivePlays](#getliveplays) - Live metrics and PBP (Patreon only)
* [GetPlayStatTypes](#getplaystattypes) - Types of player play stats
* [GetPlayStats](#getplaystats) - Play stats by play
* [GetPlayTypes](#getplaytypes) - Play types
* [GetPlays](#getplays) - Play by play data

## GetLivePlays

Get live metrics and PBP

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
    res, err := s.Plays.GetLivePlays(ctx, operations.GetLivePlaysRequest{
        ID: 949572,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LivePlayByPlay != nil {
        // handle response
    }
}
```

## GetPlayStatTypes

Type of play stats

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plays.GetPlayStatTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayStatTypes != nil {
        // handle response
    }
}
```

## GetPlayStats

Gets player stats associated by play (limit 1000)

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
    res, err := s.Plays.GetPlayStats(ctx, operations.GetPlayStatsRequest{
        AthleteID: sdk.Int64(368725),
        Conference: sdk.String("id"),
        GameID: sdk.Int64(820994),
        SeasonType: sdk.String("aut"),
        StatTypeID: sdk.Int64(97101),
        Team: sdk.String("error"),
        Week: sdk.Int64(837945),
        Year: sdk.Int64(673660),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayStats != nil {
        // handle response
    }
}
```

## GetPlayTypes

Types of plays

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Plays.GetPlayTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayTypes != nil {
        // handle response
    }
}
```

## GetPlays

Get play data and results

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
    res, err := s.Plays.GetPlays(ctx, operations.GetPlaysRequest{
        Classification: sdk.String("quasi"),
        Conference: sdk.String("reiciendis"),
        Defense: sdk.String("voluptatibus"),
        DefenseConference: sdk.String("vero"),
        Offense: sdk.String("nihil"),
        OffenseConference: sdk.String("praesentium"),
        PlayType: sdk.Int64(976762),
        SeasonType: sdk.String("ipsa"),
        Team: sdk.String("omnis"),
        Week: 451159,
        Year: 739264,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Plays != nil {
        // handle response
    }
}
```
