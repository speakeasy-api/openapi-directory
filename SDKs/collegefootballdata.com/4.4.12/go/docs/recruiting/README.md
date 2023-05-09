# Recruiting

## Overview

Recruiting rankings and data

### Available Operations

* [GetRecruitingGroups](#getrecruitinggroups) - Recruit position group ratings
* [GetRecruitingPlayers](#getrecruitingplayers) - Player recruiting ratings and rankings
* [GetRecruitingTeams](#getrecruitingteams) - Team recruiting rankings and ratings

## GetRecruitingGroups

Gets a list of aggregated statistics by team and position grouping

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
    res, err := s.Recruiting.GetRecruitingGroups(ctx, operations.GetRecruitingGroupsRequest{
        Conference: sdk.String("repudiandae"),
        EndYear: sdk.Int64(64147),
        StartYear: sdk.Int64(216822),
        Team: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PositionGroupRecruitingRatings != nil {
        // handle response
    }
}
```

## GetRecruitingPlayers

Get player recruiting rankings and data. Requires either a year or team to be specified.

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
    res, err := s.Recruiting.GetRecruitingPlayers(ctx, operations.GetRecruitingPlayersRequest{
        Classification: sdk.String("molestias"),
        Position: sdk.String("excepturi"),
        State: sdk.String("pariatur"),
        Team: sdk.String("modi"),
        Year: sdk.Int64(508969),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Recruits != nil {
        // handle response
    }
}
```

## GetRecruitingTeams

Team recruiting rankings

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
    res, err := s.Recruiting.GetRecruitingTeams(ctx, operations.GetRecruitingTeamsRequest{
        Team: sdk.String("rem"),
        Year: sdk.Int64(916723),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRecruitingRanks != nil {
        // handle response
    }
}
```
