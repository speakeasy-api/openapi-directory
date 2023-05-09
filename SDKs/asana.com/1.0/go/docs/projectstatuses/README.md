# ProjectStatuses

## Overview

*Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*

A project status is an update on the progress of a particular project,
and is sent out to all project followers when created. These updates
include both text describing the update and a color code intended to
represent the overall state of the project: "green" for projects that
are on track, "yellow" for projects at risk, "red" for projects that
are behind, and "blue" for projects on hold.

Project statuses can be created and deleted, but not modified.

### Available Operations

* [CreateProjectStatusForProject](#createprojectstatusforproject) - Create a project status
* [DeleteProjectStatus](#deleteprojectstatus) - Delete a project status
* [GetProjectStatus](#getprojectstatus) - Get a project status
* [GetProjectStatusesForProject](#getprojectstatusesforproject) - Get statuses from a project

## CreateProjectStatusForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

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
    res, err := s.ProjectStatuses.CreateProjectStatusForProject(ctx, operations.CreateProjectStatusForProjectRequest{
        RequestBody: operations.CreateProjectStatusForProjectRequestBodyInput{
            Data: &shared.ProjectStatusRequestInput{
                Color: shared.ProjectStatusRequestColorEnumGreen,
                HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                Text: "The project is moving forward according to plan...",
                Title: sdk.String("Status Update - Jun 15"),
            },
        },
        OptFields: []string{
            "qui",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectStatusForProject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

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
    res, err := s.ProjectStatuses.DeleteProjectStatus(ctx, operations.DeleteProjectStatusRequest{
        OptFields: []string{
            "excepturi",
            "cum",
            "voluptate",
            "dignissimos",
        },
        OptPretty: sdk.Bool(false),
        ProjectStatusGid: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

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
    res, err := s.ProjectStatuses.GetProjectStatus(ctx, operations.GetProjectStatusRequest{
        OptFields: []string{
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        ProjectStatusGid: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectStatusesForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

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
    res, err := s.ProjectStatuses.GetProjectStatusesForProject(ctx, operations.GetProjectStatusesForProjectRequest{
        Limit: sdk.Int64(85295),
        Offset: sdk.String("ipsa"),
        OptFields: []string{
            "iure",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectStatusesForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
