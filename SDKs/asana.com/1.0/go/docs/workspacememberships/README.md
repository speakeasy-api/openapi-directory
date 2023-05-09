# WorkspaceMemberships

## Overview

This object determines if a user is a member of a workspace.

### Available Operations

* [GetWorkspaceMembership](#getworkspacemembership) - Get a workspace membership
* [GetWorkspaceMembershipsForUser](#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [GetWorkspaceMembershipsForWorkspace](#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

## GetWorkspaceMembership

Returns the complete workspace record for a single workspace membership.

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
    res, err := s.WorkspaceMemberships.GetWorkspaceMembership(ctx, operations.GetWorkspaceMembershipRequest{
        OptFields: []string{
            "reiciendis",
            "doloremque",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceMembershipGid: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaceMembership200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWorkspaceMembershipsForUser

Returns the compact workspace membership records for the user.

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
    res, err := s.WorkspaceMemberships.GetWorkspaceMembershipsForUser(ctx, operations.GetWorkspaceMembershipsForUserRequest{
        Limit: sdk.Int64(116098),
        Offset: sdk.String("accusantium"),
        OptFields: []string{
            "dolores",
        },
        OptPretty: sdk.Bool(false),
        UserGid: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaceMembershipsForUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWorkspaceMembershipsForWorkspace

Returns the compact workspace membership records for the workspace.

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
    res, err := s.WorkspaceMemberships.GetWorkspaceMembershipsForWorkspace(ctx, operations.GetWorkspaceMembershipsForWorkspaceRequest{
        Limit: sdk.Int64(389135),
        Offset: sdk.String("velit"),
        OptFields: []string{
            "molestias",
            "magnam",
            "saepe",
            "consequuntur",
        },
        OptPretty: sdk.Bool(false),
        User: sdk.String("occaecati"),
        WorkspaceGid: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaceMembershipsForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```
