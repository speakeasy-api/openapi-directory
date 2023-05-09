# Players

## Overview

Player information and data

### Available Operations

* [GetPlayerSeasonStats](#getplayerseasonstats) - Player stats by season
* [GetPlayerUsage](#getplayerusage) - Player usage metrics broken down by season
* [GetReturningProduction](#getreturningproduction) - Team returning production metrics
* [GetTransferPortal](#gettransferportal) - Transfer portal by season
* [PlayerSearch](#playersearch) - Search for player information

## GetPlayerSeasonStats

Season player stats

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
    res, err := s.Players.GetPlayerSeasonStats(ctx, operations.GetPlayerSeasonStatsRequest{
        Category: sdk.String("culpa"),
        Conference: sdk.String("consequuntur"),
        EndWeek: sdk.Int64(995300),
        SeasonType: sdk.String("mollitia"),
        StartWeek: sdk.Int64(581850),
        Team: sdk.String("numquam"),
        Year: 414369,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonStats != nil {
        // handle response
    }
}
```

## GetPlayerUsage

Player usage metrics by season

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
    res, err := s.Players.GetPlayerUsage(ctx, operations.GetPlayerUsageRequest{
        Conference: sdk.String("quam"),
        ExcludeGarbageTime: sdk.Bool(false),
        PlayerID: sdk.Int64(474697),
        Position: sdk.String("velit"),
        Team: sdk.String("error"),
        Year: 158969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerUsages != nil {
        // handle response
    }
}
```

## GetReturningProduction

Returning production metrics

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
    res, err := s.Players.GetReturningProduction(ctx, operations.GetReturningProductionRequest{
        Conference: sdk.String("quis"),
        Team: sdk.String("vitae"),
        Year: sdk.Int64(674752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturningProductions != nil {
        // handle response
    }
}
```

## GetTransferPortal

Transfer portal by season

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
    res, err := s.Players.GetTransferPortal(ctx, operations.GetTransferPortalRequest{
        Year: 656330,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PortalPlayers != nil {
        // handle response
    }
}
```

## PlayerSearch

Search for players

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
    res, err := s.Players.PlayerSearch(ctx, operations.PlayerSearchRequest{
        Position: sdk.String("enim"),
        SearchTerm: "odit",
        Team: sdk.String("quo"),
        Year: sdk.Int64(196582),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSearchResults != nil {
        // handle response
    }
}
```
