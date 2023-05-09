# Users

## Overview

A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.

Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier `me` can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, `GET /users/me`).

### Available Operations

* [GetFavoritesForUser](#getfavoritesforuser) - Get a user's favorites
* [GetUser](#getuser) - Get a user
* [GetUsers](#getusers) - Get multiple users
* [GetUsersForTeam](#getusersforteam) - Get users in a team
* [GetUsersForWorkspace](#getusersforworkspace) - Get users in a workspace or organization

## GetFavoritesForUser

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

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
    res, err := s.Users.GetFavoritesForUser(ctx, operations.GetFavoritesForUserRequest{
        OptFields: []string{
            "et",
            "blanditiis",
        },
        OptPretty: sdk.Bool(false),
        ResourceType: operations.GetFavoritesForUserResourceTypeEnumTag,
        UserGid: "sed",
        Workspace: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFavoritesForUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUser

Returns the full user record for the single user with the provided ID.

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
    res, err := s.Users.GetUser(ctx, operations.GetUserRequest{
        OptFields: []string{
            "nostrum",
            "saepe",
        },
        OptPretty: sdk.Bool(false),
        UserGid: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsers

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

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
    res, err := s.Users.GetUsers(ctx, operations.GetUsersRequest{
        Limit: sdk.Int64(8511),
        Offset: sdk.String("incidunt"),
        OptFields: []string{
            "dolorem",
            "harum",
            "dicta",
            "architecto",
        },
        OptPretty: sdk.Bool(false),
        Team: sdk.String("occaecati"),
        Workspace: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersForTeam

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

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
    res, err := s.Users.GetUsersForTeam(ctx, operations.GetUsersForTeamRequest{
        Offset: sdk.String("quidem"),
        OptFields: []string{
            "laborum",
            "nam",
            "tenetur",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersForTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersForWorkspace

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

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
    res, err := s.Users.GetUsersForWorkspace(ctx, operations.GetUsersForWorkspaceRequest{
        Offset: sdk.String("alias"),
        OptFields: []string{
            "deserunt",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```
