# Metrics

## Overview

Data relating to Predicted Points and other metrics

### Available Operations

* [GetGamePPA](#getgameppa) - Team Predicated Points Added (PPA/EPA) by game
* [GetPlayerGamePPA](#getplayergameppa) - Player Predicated Points Added (PPA/EPA) broken down by game
* [GetPlayerSeasonPPA](#getplayerseasonppa) - Player Predicated Points Added (PPA/EPA) broken down by season
* [GetPredictedPoints](#getpredictedpoints) - Predicted Points (i.e. Expected Points or EP)
* [GetPregameWinProbabilities](#getpregamewinprobabilities) - Pregame win probability data
* [GetTeamPPA](#getteamppa) - Predicted Points Added (PPA/EPA) data by team
* [GetWinProbabilityData](#getwinprobabilitydata) - Win probability chart data

## GetGamePPA

Predicted Points Added (PPA) by game

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
    res, err := s.Metrics.GetGamePPA(ctx, operations.GetGamePPARequest{
        Conference: sdk.String("iste"),
        ExcludeGarbageTime: sdk.Bool(false),
        SeasonType: sdk.String("iure"),
        Team: sdk.String("saepe"),
        Week: sdk.Int64(697631),
        Year: 99280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamePPAS != nil {
        // handle response
    }
}
```

## GetPlayerGamePPA

Predicted Points Added (PPA) by player game

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
    res, err := s.Metrics.GetPlayerGamePPA(ctx, operations.GetPlayerGamePPARequest{
        ExcludeGarbageTime: sdk.Bool(false),
        PlayerID: sdk.Int64(60225),
        Position: sdk.String("reiciendis"),
        SeasonType: sdk.String("est"),
        Team: sdk.String("mollitia"),
        Threshold: sdk.String("laborum"),
        Week: sdk.Int64(170909),
        Year: sdk.Int64(210382),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGamePPAS != nil {
        // handle response
    }
}
```

## GetPlayerSeasonPPA

Predicted Points Added (PPA) by player season

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
    res, err := s.Metrics.GetPlayerSeasonPPA(ctx, operations.GetPlayerSeasonPPARequest{
        Conference: sdk.String("corporis"),
        ExcludeGarbageTime: sdk.Bool(false),
        PlayerID: sdk.Int64(128926),
        Position: sdk.String("nobis"),
        Team: sdk.String("enim"),
        Threshold: sdk.String("omnis"),
        Year: sdk.Int64(363711),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonPPAS != nil {
        // handle response
    }
}
```

## GetPredictedPoints

Predicted Points

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
    res, err := s.Metrics.GetPredictedPoints(ctx, operations.GetPredictedPointsRequest{
        Distance: 325047,
        Down: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictedPoints != nil {
        // handle response
    }
}
```

## GetPregameWinProbabilities

Pregame win probabilities

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
    res, err := s.Metrics.GetPregameWinProbabilities(ctx, operations.GetPregameWinProbabilitiesRequest{
        SeasonType: sdk.String("accusantium"),
        Team: sdk.String("iure"),
        Week: sdk.Int64(634274),
        Year: sdk.Int64(988374),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PregameWPS != nil {
        // handle response
    }
}
```

## GetTeamPPA

Predicted Points Added (PPA)

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
    res, err := s.Metrics.GetTeamPPA(ctx, operations.GetTeamPPARequest{
        Conference: sdk.String("sapiente"),
        ExcludeGarbageTime: sdk.Bool(false),
        Team: sdk.String("architecto"),
        Year: sdk.Int64(652790),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamPPAS != nil {
        // handle response
    }
}
```

## GetWinProbabilityData

Win probability data

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
    res, err := s.Metrics.GetWinProbabilityData(ctx, operations.GetWinProbabilityDataRequest{
        GameID: 208876,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayWPS != nil {
        // handle response
    }
}
```
