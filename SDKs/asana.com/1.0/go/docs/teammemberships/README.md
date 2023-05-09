# TeamMemberships

## Overview

This object determines if a user is a member of a team.

### Available Operations

* [GetTeamMembership](#getteammembership) - Get a team membership
* [GetTeamMemberships](#getteammemberships) - Get team memberships
* [GetTeamMembershipsForTeam](#getteammembershipsforteam) - Get memberships from a team
* [GetTeamMembershipsForUser](#getteammembershipsforuser) - Get memberships from a user

## GetTeamMembership

Returns the complete team membership record for a single team membership.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMemberships.GetTeamMembership(ctx, operations.GetTeamMembershipRequest{
        OptFields: []string{
            "explicabo",
            "asperiores",
            "facilis",
            "voluptate",
        },
        OptPretty: sdk.Bool(false),
        TeamMembershipGid: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMembership200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeamMemberships

Returns compact team membership records.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMemberships.GetTeamMemberships(ctx, operations.GetTeamMembershipsRequest{
        Limit: sdk.Int64(70869),
        Offset: sdk.String("iste"),
        OptFields: []string{
            "laborum",
            "sed",
        },
        OptPretty: sdk.Bool(false),
        Team: sdk.String("in"),
        User: sdk.String("commodi"),
        Workspace: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMemberships200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeamMembershipsForTeam

Returns the compact team memberships for the team.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMemberships.GetTeamMembershipsForTeam(ctx, operations.GetTeamMembershipsForTeamRequest{
        Limit: sdk.Int64(131289),
        Offset: sdk.String("voluptas"),
        OptFields: []string{
            "architecto",
            "suscipit",
            "sapiente",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMembershipsForTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeamMembershipsForUser

Returns the compact team membership records for the user.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMemberships.GetTeamMembershipsForUser(ctx, operations.GetTeamMembershipsForUserRequest{
        Limit: sdk.Int64(72434),
        Offset: sdk.String("reiciendis"),
        OptFields: []string{
            "corrupti",
        },
        OptPretty: sdk.Bool(false),
        UserGid: "maiores",
        Workspace: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMembershipsForUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
