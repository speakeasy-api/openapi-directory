# Teams

## Overview

A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.

### Available Operations

* [AddUserForTeam](#adduserforteam) - Add a user to a team
* [CreateTeam](#createteam) - Create a team
* [GetTeam](#getteam) - Get a team
* [GetTeamsForUser](#getteamsforuser) - Get teams for a user
* [GetTeamsForWorkspace](#getteamsforworkspace) - Get teams in a workspace
* [RemoveUserForTeam](#removeuserforteam) - Remove a user from a team
* [UpdateTeam](#updateteam) - Update a team

## AddUserForTeam

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Teams.AddUserForTeam(ctx, operations.AddUserForTeamRequest{
        RequestBody: operations.AddUserForTeamRequestBody{
            Data: &shared.TeamAddUserRequest{
                User: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "provident",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserForTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateTeam

Creates a team within the current workspace.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Teams.CreateTeam(ctx, operations.CreateTeamRequest{
        RequestBody: operations.CreateTeamRequestBodyInput{
            Data: &shared.TeamRequestInput{
                Description: sdk.String("All developers should be members of this team."),
                HTMLDescription: sdk.String("<body><em>All</em> developers should be members of this team.</body>"),
                Name: sdk.String("Marketing"),
                Organization: sdk.String("123456789"),
                Visibility: shared.TeamRequestVisibilityEnumPublic.ToPointer(),
            },
        },
        Limit: sdk.Int64(215529),
        Offset: sdk.String("ea"),
        OptFields: []string{
            "quos",
            "voluptatibus",
            "tempora",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTeam201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeam

Returns the full record for a single team.

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
    res, err := s.Teams.GetTeam(ctx, operations.GetTeamRequest{
        Limit: sdk.Int64(273009),
        Offset: sdk.String("voluptate"),
        OptFields: []string{
            "ex",
            "sit",
            "non",
            "officiis",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeamsForUser

Returns the compact records for all teams to which the given user is assigned.

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
    res, err := s.Teams.GetTeamsForUser(ctx, operations.GetTeamsForUserRequest{
        Limit: sdk.Int64(708609),
        Offset: sdk.String("quaerat"),
        OptFields: []string{
            "ipsam",
            "debitis",
        },
        OptPretty: sdk.Bool(false),
        Organization: "rem",
        UserGid: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsForUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeamsForWorkspace

Returns the compact records for all teams in the workspace visible to the authorized user.

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
    res, err := s.Teams.GetTeamsForWorkspace(ctx, operations.GetTeamsForWorkspaceRequest{
        Limit: sdk.Int64(750595),
        Offset: sdk.String("error"),
        OptFields: []string{
            "minima",
            "recusandae",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveUserForTeam

The user making this call must be a member of the team in order to remove themselves or others.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Teams.RemoveUserForTeam(ctx, operations.RemoveUserForTeamRequest{
        RequestBody: operations.RemoveUserForTeamRequestBody{
            Data: &shared.TeamRemoveUserRequest{
                User: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "magni",
            "aperiam",
            "saepe",
            "numquam",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveUserForTeam204ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTeam

Updates a team within the current workspace.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Teams.UpdateTeam(ctx, operations.UpdateTeamRequest{
        RequestBody: operations.UpdateTeamRequestBodyInput{
            Data: &shared.TeamRequestInput{
                Description: sdk.String("All developers should be members of this team."),
                HTMLDescription: sdk.String("<body><em>All</em> developers should be members of this team.</body>"),
                Name: sdk.String("Marketing"),
                Organization: sdk.String("123456789"),
                Visibility: shared.TeamRequestVisibilityEnumRequestToJoin.ToPointer(),
            },
        },
        Limit: sdk.Int64(889234),
        Offset: sdk.String("beatae"),
        OptFields: []string{
            "exercitationem",
            "praesentium",
            "cum",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```
