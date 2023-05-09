# ProjectTemplates

## Overview

A project template is an object that allows new projects to be created
with a predefined setup, which may include tasks, sections, rules, etc.
It simplifies the process of running a workflow that involves a similar
set of work every time.


Project templates in organizations are shared with a single team. Currently, the
team of a project template cannot be changed via the API.

### Available Operations

* [GetProjectTemplate](#getprojecttemplate) - Get a project template
* [GetProjectTemplates](#getprojecttemplates) - Get multiple project templates
* [GetProjectTemplatesForTeam](#getprojecttemplatesforteam) - Get a team's project templates
* [InstantiateProject](#instantiateproject) - Instantiate a project from a project template

## GetProjectTemplate

Returns the complete project template record for a single project template.

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
    res, err := s.ProjectTemplates.GetProjectTemplate(ctx, operations.GetProjectTemplateRequest{
        OptFields: []string{
            "accusamus",
            "quidem",
        },
        OptPretty: sdk.Bool(false),
        ProjectTemplateGid: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectTemplates

Returns the compact project template records for all project templates in the given team or workspace.

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
    res, err := s.ProjectTemplates.GetProjectTemplates(ctx, operations.GetProjectTemplatesRequest{
        Limit: sdk.Int64(377752),
        Offset: sdk.String("natus"),
        OptFields: []string{
            "atque",
        },
        OptPretty: sdk.Bool(false),
        Team: sdk.String("sit"),
        Workspace: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectTemplates200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectTemplatesForTeam

Returns the compact project template records for all project templates in the team.

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
    res, err := s.ProjectTemplates.GetProjectTemplatesForTeam(ctx, operations.GetProjectTemplatesForTeamRequest{
        Limit: sdk.Int64(67249),
        Offset: sdk.String("soluta"),
        OptFields: []string{
            "iusto",
            "voluptate",
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectTemplatesForTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InstantiateProject

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectTemplates.InstantiateProject(ctx, operations.InstantiateProjectRequest{
        RequestBody: &operations.InstantiateProjectRequestBody{
            Data: &shared.ProjectTemplateInstantiateProjectRequest{
                IsStrict: sdk.Bool(true),
                Name: "New Project Name",
                Public: true,
                RequestedDates: []shared.DateVariableRequest{
                    shared.DateVariableRequest{
                        Gid: sdk.String("1"),
                        Value: types.MustTimeFromString("2022-01-01"),
                    },
                    shared.DateVariableRequest{
                        Gid: sdk.String("1"),
                        Value: types.MustTimeFromString("2022-01-01"),
                    },
                    shared.DateVariableRequest{
                        Gid: sdk.String("1"),
                        Value: types.MustTimeFromString("2022-01-01"),
                    },
                },
                Team: sdk.String("12345"),
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "distinctio",
            "asperiores",
            "nihil",
            "ipsum",
        },
        OptPretty: sdk.Bool(false),
        ProjectTemplateGid: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstantiateProject201ApplicationJSONObject != nil {
        // handle response
    }
}
```
