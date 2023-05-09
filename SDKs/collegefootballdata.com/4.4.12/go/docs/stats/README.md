# Stats

## Overview

Statistical data

### Available Operations

* [GetAdvancedTeamGameStats](#getadvancedteamgamestats) - Advanced team metrics by game
* [GetAdvancedTeamSeasonStats](#getadvancedteamseasonstats) - Advanced team metrics by season
* [GetStatCategories](#getstatcategories) - Team stat categories
* [GetTeamSeasonStats](#getteamseasonstats) - Team statistics by season

## GetAdvancedTeamGameStats

Advanced team game stats

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
    res, err := s.Stats.GetAdvancedTeamGameStats(ctx, operations.GetAdvancedTeamGameStatsRequest{
        ExcludeGarbageTime: sdk.Bool(false),
        Opponent: sdk.String("quasi"),
        SeasonType: sdk.String("repudiandae"),
        Team: sdk.String("sint"),
        Week: sdk.Int64(83112),
        Year: sdk.Int64(929297),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedGameStats != nil {
        // handle response
    }
}
```

## GetAdvancedTeamSeasonStats

Advanced team season stats

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
    res, err := s.Stats.GetAdvancedTeamSeasonStats(ctx, operations.GetAdvancedTeamSeasonStatsRequest{
        EndWeek: sdk.Int64(277718),
        ExcludeGarbageTime: sdk.Bool(false),
        StartWeek: sdk.Int64(318569),
        Team: sdk.String("consequatur"),
        Year: sdk.Int64(667411),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedSeasonStats != nil {
        // handle response
    }
}
```

## GetStatCategories

Stat category list

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
    res, err := s.Stats.GetStatCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatCategories200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamSeasonStats

Team season stats

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
    res, err := s.Stats.GetTeamSeasonStats(ctx, operations.GetTeamSeasonStatsRequest{
        Conference: sdk.String("quibusdam"),
        EndWeek: sdk.Int64(131797),
        StartWeek: sdk.Int64(647174),
        Team: sdk.String("distinctio"),
        Year: sdk.Int64(841386),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasonStats != nil {
        // handle response
    }
}
```
