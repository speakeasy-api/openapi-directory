# ProjectMemberships

## Overview

With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.

### Available Operations

* [GetProjectMembership](#getprojectmembership) - Get a project membership
* [GetProjectMembershipsForProject](#getprojectmembershipsforproject) - Get memberships from a project

## GetProjectMembership

Returns the complete project record for a single project membership.

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
    res, err := s.ProjectMemberships.GetProjectMembership(ctx, operations.GetProjectMembershipRequest{
        OptFields: []string{
            "iste",
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        ProjectMembershipGid: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectMembership200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectMembershipsForProject

Returns the compact project membership records for the project.

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
    res, err := s.ProjectMemberships.GetProjectMembershipsForProject(ctx, operations.GetProjectMembershipsForProjectRequest{
        Limit: sdk.Int64(864282),
        Offset: sdk.String("provident"),
        OptFields: []string{
            "libero",
            "delectus",
            "quaerat",
            "quos",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "aliquid",
        User: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectMembershipsForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
