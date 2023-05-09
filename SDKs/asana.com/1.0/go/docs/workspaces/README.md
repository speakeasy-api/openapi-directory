# Workspaces

## Overview

A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.

An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.

Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.

### Available Operations

* [AddUserForWorkspace](#adduserforworkspace) - Add a user to a workspace or organization
* [GetWorkspace](#getworkspace) - Get a workspace
* [GetWorkspaces](#getworkspaces) - Get multiple workspaces
* [RemoveUserForWorkspace](#removeuserforworkspace) - Remove a user from a workspace or organization
* [UpdateWorkspace](#updateworkspace) - Update a workspace

## AddUserForWorkspace

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

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
    res, err := s.Workspaces.AddUserForWorkspace(ctx, operations.AddUserForWorkspaceRequest{
        RequestBody: operations.AddUserForWorkspaceRequestBody{
            Data: &shared.WorkspaceAddUserRequest{
                User: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "in",
            "adipisci",
            "eveniet",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWorkspace

Returns the full workspace record for a single workspace.

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
    res, err := s.Workspaces.GetWorkspace(ctx, operations.GetWorkspaceRequest{
        OptFields: []string{
            "fugit",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWorkspaces

Returns the compact records for all workspaces visible to the authorized user.

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
    res, err := s.Workspaces.GetWorkspaces(ctx, operations.GetWorkspacesRequest{
        Limit: sdk.Int64(335631),
        Offset: sdk.String("reprehenderit"),
        OptFields: []string{
            "illo",
            "corporis",
            "quidem",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaces200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveUserForWorkspace

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

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
    res, err := s.Workspaces.RemoveUserForWorkspace(ctx, operations.RemoveUserForWorkspaceRequest{
        RequestBody: operations.RemoveUserForWorkspaceRequestBody{
            Data: &shared.WorkspaceRemoveUserRequest{
                User: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "non",
            "vero",
            "doloremque",
            "iure",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveUserForWorkspace204ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateWorkspace

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

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
    res, err := s.Workspaces.UpdateWorkspace(ctx, operations.UpdateWorkspaceRequest{
        RequestBody: operations.UpdateWorkspaceRequestBodyInput{
            Data: &shared.WorkspaceRequestInput{
                Name: sdk.String("My Company Workspace"),
            },
        },
        OptFields: []string{
            "quae",
            "molestiae",
            "eveniet",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```
