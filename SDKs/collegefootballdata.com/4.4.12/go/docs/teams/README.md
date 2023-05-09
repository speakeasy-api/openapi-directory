# Teams

## Overview

Team information

### Available Operations

* [GetFbsTeams](#getfbsteams) - FBS team list
* [GetRoster](#getroster) - Team rosters
* [GetTalent](#gettalent) - Team talent composite rankings
* [GetTeamMatchup](#getteammatchup) - Team matchup history
* [GetTeams](#getteams) - Team information

## GetFbsTeams

Information on major division teams

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
    res, err := s.Teams.GetFbsTeams(ctx, operations.GetFbsTeamsRequest{
        Year: sdk.Int64(289406),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetRoster

Roster data

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
    res, err := s.Teams.GetRoster(ctx, operations.GetRosterRequest{
        Team: sdk.String("modi"),
        Year: sdk.Int64(183191),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## GetTalent

Team talent composite

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
    res, err := s.Teams.GetTalent(ctx, operations.GetTalentRequest{
        Year: sdk.Int64(397821),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamTalents != nil {
        // handle response
    }
}
```

## GetTeamMatchup

Matchup history

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
    res, err := s.Teams.GetTeamMatchup(ctx, operations.GetTeamMatchupRequest{
        MaxYear: sdk.Int64(586513),
        MinYear: sdk.Int64(552822),
        Team1: "perferendis",
        Team2: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMatchup != nil {
        // handle response
    }
}
```

## GetTeams

Get team information

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
    res, err := s.Teams.GetTeams(ctx, operations.GetTeamsRequest{
        Conference: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```
