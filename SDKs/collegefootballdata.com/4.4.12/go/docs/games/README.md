# Games

## Overview

Games scores and statistics

### Available Operations

* [GetAdvancedBoxScore](#getadvancedboxscore) - Advanced box scores
* [GetCalendar](#getcalendar) - Season calendar
* [GetGameMedia](#getgamemedia) - Game media information and schedules
* [GetGameWeather](#getgameweather) - Game weather information (Patreon only)
* [GetGames](#getgames) - Games and results
* [GetPlayerGameStats](#getplayergamestats) - Player game stats
* [GetScoreboard](#getscoreboard) - Live game results (Patreon only)
* [GetTeamGameStats](#getteamgamestats) - Team game stats
* [GetTeamRecords](#getteamrecords) - Team records

## GetAdvancedBoxScore

Get advanced box score data

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
    res, err := s.Games.GetAdvancedBoxScore(ctx, operations.GetAdvancedBoxScoreRequest{
        GameID: 140350,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScore != nil {
        // handle response
    }
}
```

## GetCalendar

Get calendar of weeks by season

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
    res, err := s.Games.GetCalendar(ctx, operations.GetCalendarRequest{
        Year: 870013,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Weeks != nil {
        // handle response
    }
}
```

## GetGameMedia

Game media information (TV, radio, etc)

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
    res, err := s.Games.GetGameMedia(ctx, operations.GetGameMediaRequest{
        Classification: sdk.String("at"),
        Conference: sdk.String("maiores"),
        MediaType: sdk.String("molestiae"),
        SeasonType: sdk.String("quod"),
        Team: sdk.String("quod"),
        Week: sdk.Int64(461479),
        Year: 520478,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameMedias != nil {
        // handle response
    }
}
```

## GetGameWeather

Weather information for the hour of kickoff

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
    res, err := s.Games.GetGameWeather(ctx, operations.GetGameWeatherRequest{
        Classification: sdk.String("porro"),
        Conference: sdk.String("dolorum"),
        GameID: sdk.Int64(118274),
        SeasonType: sdk.String("nam"),
        Team: sdk.String("officia"),
        Week: sdk.Int64(582020),
        Year: sdk.Int64(143353),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameWeathers != nil {
        // handle response
    }
}
```

## GetGames

Get game results

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
    res, err := s.Games.GetGames(ctx, operations.GetGamesRequest{
        Away: sdk.String("deleniti"),
        Conference: sdk.String("hic"),
        Division: sdk.String("optio"),
        Home: sdk.String("totam"),
        ID: sdk.Int64(105907),
        SeasonType: sdk.String("commodi"),
        Team: sdk.String("molestiae"),
        Week: sdk.Int64(264555),
        Year: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## GetPlayerGameStats

Player stats broken down by game

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
    res, err := s.Games.GetPlayerGameStats(ctx, operations.GetPlayerGameStatsRequest{
        Category: sdk.String("impedit"),
        Conference: sdk.String("cum"),
        GameID: sdk.Int64(456150),
        SeasonType: sdk.String("ipsum"),
        Team: sdk.String("excepturi"),
        Week: sdk.Int64(135218),
        Year: 18789,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## GetScoreboard

Get live game results

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
    res, err := s.Games.GetScoreboard(ctx, operations.GetScoreboardRequest{
        Classification: sdk.String("ad"),
        Conference: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreboardGames != nil {
        // handle response
    }
}
```

## GetTeamGameStats

Team stats broken down by game

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
    res, err := s.Games.GetTeamGameStats(ctx, operations.GetTeamGameStatsRequest{
        Classification: sdk.String("sed"),
        Conference: sdk.String("iste"),
        GameID: sdk.Int64(222321),
        SeasonType: sdk.String("natus"),
        Team: sdk.String("laboriosam"),
        Week: sdk.Int64(943749),
        Year: 902599,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
        // handle response
    }
}
```

## GetTeamRecords

Get team records by year

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
    res, err := s.Games.GetTeamRecords(ctx, operations.GetTeamRecordsRequest{
        Conference: sdk.String("fuga"),
        Team: sdk.String("in"),
        Year: sdk.Int64(359508),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRecords != nil {
        // handle response
    }
}
```
