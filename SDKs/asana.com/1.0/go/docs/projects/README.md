# Projects

## Overview

A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.

Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.

Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.

**Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)

### Available Operations

* [AddCustomFieldSettingForProject](#addcustomfieldsettingforproject) - Add a custom field to a project
* [AddFollowersForProject](#addfollowersforproject) - Add followers to a project
* [AddMembersForProject](#addmembersforproject) - Add users to a project
* [CreateProject](#createproject) - Create a project
* [CreateProjectForTeam](#createprojectforteam) - Create a project in a team
* [CreateProjectForWorkspace](#createprojectforworkspace) - Create a project in a workspace
* [DeleteProject](#deleteproject) - Delete a project
* [DuplicateProject](#duplicateproject) - Duplicate a project
* [GetProject](#getproject) - Get a project
* [GetProjects](#getprojects) - Get multiple projects
* [GetProjectsForTask](#getprojectsfortask) - Get projects a task is in
* [GetProjectsForTeam](#getprojectsforteam) - Get a team's projects
* [GetProjectsForWorkspace](#getprojectsforworkspace) - Get all projects in a workspace
* [GetTaskCountsForProject](#gettaskcountsforproject) - Get task count of a project
* [ProjectSaveAsTemplate](#projectsaveastemplate) - Create a project template from a project
* [RemoveCustomFieldSettingForProject](#removecustomfieldsettingforproject) - Remove a custom field from a project
* [RemoveFollowersForProject](#removefollowersforproject) - Remove followers from a project
* [RemoveMembersForProject](#removemembersforproject) - Remove users from a project
* [UpdateProject](#updateproject) - Update a project

## AddCustomFieldSettingForProject

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

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
    res, err := s.Projects.AddCustomFieldSettingForProject(ctx, operations.AddCustomFieldSettingForProjectRequest{
        RequestBody: operations.AddCustomFieldSettingForProjectRequestBody{
            Data: &shared.AddCustomFieldSettingRequest{
                CustomField: "14916",
                InsertAfter: sdk.String("1331"),
                InsertBefore: sdk.String("1331"),
                IsImportant: sdk.Bool(true),
            },
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomFieldSettingForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddFollowersForProject

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

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
    res, err := s.Projects.AddFollowersForProject(ctx, operations.AddFollowersForProjectRequest{
        RequestBody: operations.AddFollowersForProjectRequestBody{
            Data: &shared.AddFollowersRequest{
                Followers: "521621,621373",
            },
        },
        OptFields: []string{
            "eius",
            "aspernatur",
            "perferendis",
            "amet",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFollowersForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddMembersForProject

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

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
    res, err := s.Projects.AddMembersForProject(ctx, operations.AddMembersForProjectRequest{
        RequestBody: operations.AddMembersForProjectRequestBody{
            Data: &shared.AddMembersRequest{
                Members: "521621,621373",
            },
        },
        OptFields: []string{
            "ad",
            "saepe",
            "suscipit",
            "deserunt",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddMembersForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateProject

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

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
    res, err := s.Projects.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBodyInput{
            Data: &shared.ProjectRequestInput{
                Archived: sdk.Bool(false),
                Color: shared.ProjectRequestColorEnumLightGreen.ToPointer(),
                CurrentStatus: &shared.ProjectRequestCurrentStatusInput{
                    Author: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    Color: shared.ProjectRequestCurrentStatusColorEnumYellow,
                    CreatedBy: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                    Text: "The project is moving forward according to plan...",
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CurrentStatusUpdate: &shared.ProjectRequestCurrentStatusUpdateInput{
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CustomFields: map[string]string{
                    "totam": "similique",
                    "alias": "at",
                    "quaerat": "tempora",
                    "vel": "quod",
                },
                DefaultView: shared.ProjectRequestDefaultViewEnumCalendar.ToPointer(),
                DueDate: types.MustTimeFromString("2019-09-15"),
                DueOn: types.MustTimeFromString("2019-09-15"),
                Followers: sdk.String("12345,23456"),
                HTMLNotes: sdk.String("<body>These are things we need to purchase.</body>"),
                IsTemplate: sdk.Bool(false),
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("These are things we need to purchase."),
                Owner: sdk.String("12345"),
                Public: sdk.Bool(false),
                StartOn: types.MustDateFromString("2019-09-14"),
                Team: sdk.String("12345"),
                Workspace: &shared.ProjectRequestWorkspaceInput{
                    Name: sdk.String("My Company Workspace"),
                },
            },
        },
        OptFields: []string{
            "qui",
            "dolorum",
            "a",
            "esse",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateProjectForTeam

Creates a project shared with the given team.

Returns the full record of the newly created project.

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
    res, err := s.Projects.CreateProjectForTeam(ctx, operations.CreateProjectForTeamRequest{
        RequestBody: operations.CreateProjectForTeamRequestBodyInput{
            Data: &shared.ProjectRequestInput{
                Archived: sdk.Bool(false),
                Color: shared.ProjectRequestColorEnumLightGreen.ToPointer(),
                CurrentStatus: &shared.ProjectRequestCurrentStatusInput{
                    Author: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    Color: shared.ProjectRequestCurrentStatusColorEnumRed,
                    CreatedBy: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                    Text: "The project is moving forward according to plan...",
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CurrentStatusUpdate: &shared.ProjectRequestCurrentStatusUpdateInput{
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CustomFields: map[string]string{
                    "ipsum": "quisquam",
                    "tenetur": "amet",
                },
                DefaultView: shared.ProjectRequestDefaultViewEnumCalendar.ToPointer(),
                DueDate: types.MustTimeFromString("2019-09-15"),
                DueOn: types.MustTimeFromString("2019-09-15"),
                Followers: sdk.String("12345,23456"),
                HTMLNotes: sdk.String("<body>These are things we need to purchase.</body>"),
                IsTemplate: sdk.Bool(false),
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("These are things we need to purchase."),
                Owner: sdk.String("12345"),
                Public: sdk.Bool(false),
                StartOn: types.MustDateFromString("2019-09-14"),
                Team: sdk.String("12345"),
                Workspace: &shared.ProjectRequestWorkspaceInput{
                    Name: sdk.String("My Company Workspace"),
                },
            },
        },
        OptFields: []string{
            "accusamus",
            "numquam",
            "enim",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectForTeam201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateProjectForWorkspace

Returns the compact project records for all projects in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

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
    res, err := s.Projects.CreateProjectForWorkspace(ctx, operations.CreateProjectForWorkspaceRequest{
        RequestBody: operations.CreateProjectForWorkspaceRequestBodyInput{
            Data: &shared.ProjectRequestInput{
                Archived: sdk.Bool(false),
                Color: shared.ProjectRequestColorEnumLightGreen.ToPointer(),
                CurrentStatus: &shared.ProjectRequestCurrentStatusInput{
                    Author: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    Color: shared.ProjectRequestCurrentStatusColorEnumBlue,
                    CreatedBy: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                    Text: "The project is moving forward according to plan...",
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CurrentStatusUpdate: &shared.ProjectRequestCurrentStatusUpdateInput{
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CustomFields: map[string]string{
                    "nihil": "sit",
                    "expedita": "neque",
                    "sed": "vel",
                },
                DefaultView: shared.ProjectRequestDefaultViewEnumCalendar.ToPointer(),
                DueDate: types.MustTimeFromString("2019-09-15"),
                DueOn: types.MustTimeFromString("2019-09-15"),
                Followers: sdk.String("12345,23456"),
                HTMLNotes: sdk.String("<body>These are things we need to purchase.</body>"),
                IsTemplate: sdk.Bool(false),
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("These are things we need to purchase."),
                Owner: sdk.String("12345"),
                Public: sdk.Bool(false),
                StartOn: types.MustDateFromString("2019-09-14"),
                Team: sdk.String("12345"),
                Workspace: &shared.ProjectRequestWorkspaceInput{
                    Name: sdk.String("My Company Workspace"),
                },
            },
        },
        OptFields: []string{
            "voluptas",
            "deserunt",
            "quam",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectForWorkspace201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProject

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

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
    res, err := s.Projects.DeleteProject(ctx, operations.DeleteProjectRequest{
        OptFields: []string{
            "qui",
            "cupiditate",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DuplicateProject

Creates and returns a job that will asynchronously handle the duplication.

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
    res, err := s.Projects.DuplicateProject(ctx, operations.DuplicateProjectRequest{
        RequestBody: &operations.DuplicateProjectRequestBody{
            Data: &shared.ProjectDuplicateRequest{
                Include: shared.ProjectDuplicateRequestIncludeEnumTaskTags.ToPointer(),
                Name: "New Project Name",
                ScheduleDates: &shared.ProjectDuplicateRequestScheduleDates{
                    DueOn: sdk.String("2019-05-21"),
                    ShouldSkipWeekends: true,
                    StartOn: sdk.String("2019-05-21"),
                },
                Team: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "dicta",
            "laborum",
            "totam",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DuplicateProject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProject

Returns the complete project record for a single project.

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
    res, err := s.Projects.GetProject(ctx, operations.GetProjectRequest{
        OptFields: []string{
            "dolores",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

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
    res, err := s.Projects.GetProjects(ctx, operations.GetProjectsRequest{
        Archived: sdk.Bool(false),
        Limit: sdk.Int64(704474),
        Offset: sdk.String("aliquid"),
        OptFields: []string{
            "molestias",
            "temporibus",
        },
        OptPretty: sdk.Bool(false),
        Team: sdk.String("qui"),
        Workspace: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjects200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectsForTask

Returns a compact representation of all of the projects the task is in.

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
    res, err := s.Projects.GetProjectsForTask(ctx, operations.GetProjectsForTaskRequest{
        Limit: sdk.Int64(144847),
        Offset: sdk.String("magni"),
        OptFields: []string{
            "sunt",
            "ullam",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectsForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectsForTeam

Returns the compact project records for all projects in the team.

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
    res, err := s.Projects.GetProjectsForTeam(ctx, operations.GetProjectsForTeamRequest{
        Archived: sdk.Bool(false),
        Limit: sdk.Int64(940432),
        Offset: sdk.String("voluptatem"),
        OptFields: []string{
            "soluta",
            "nobis",
            "et",
            "saepe",
        },
        OptPretty: sdk.Bool(false),
        TeamGid: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectsForTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectsForWorkspace

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

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
    res, err := s.Projects.GetProjectsForWorkspace(ctx, operations.GetProjectsForWorkspaceRequest{
        Archived: sdk.Bool(false),
        Limit: sdk.Int64(83422),
        Offset: sdk.String("nobis"),
        OptFields: []string{
            "tempore",
            "cupiditate",
            "aperiam",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectsForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTaskCountsForProject

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.

This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

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
    res, err := s.Projects.GetTaskCountsForProject(ctx, operations.GetTaskCountsForProjectRequest{
        Limit: sdk.Int64(209157),
        Offset: sdk.String("dolore"),
        OptFields: []string{
            "adipisci",
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaskCountsForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProjectSaveAsTemplate

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

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
    res, err := s.Projects.ProjectSaveAsTemplate(ctx, operations.ProjectSaveAsTemplateRequest{
        RequestBody: operations.ProjectSaveAsTemplateRequestBody{
            Data: &shared.ProjectSaveAsTemplateRequest{
                Name: "New Project Template",
                Public: true,
                Team: sdk.String("12345"),
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "aut",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectSaveAsTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveCustomFieldSettingForProject

Removes a custom field setting from a project.

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
    res, err := s.Projects.RemoveCustomFieldSettingForProject(ctx, operations.RemoveCustomFieldSettingForProjectRequest{
        RequestBody: operations.RemoveCustomFieldSettingForProjectRequestBody{
            Data: &shared.RemoveCustomFieldSettingRequest{
                CustomField: "14916",
            },
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveCustomFieldSettingForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveFollowersForProject

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

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
    res, err := s.Projects.RemoveFollowersForProject(ctx, operations.RemoveFollowersForProjectRequest{
        RequestBody: operations.RemoveFollowersForProjectRequestBody{
            Data: &shared.RemoveFollowersRequest{
                Followers: "521621,621373",
            },
        },
        OptFields: []string{
            "est",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveFollowersForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveMembersForProject

Removes the specified list of users from members of the project.
Returns the updated project record.

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
    res, err := s.Projects.RemoveMembersForProject(ctx, operations.RemoveMembersForProjectRequest{
        RequestBody: operations.RemoveMembersForProjectRequestBody{
            Data: &shared.RemoveMembersRequest{
                Members: "521621,621373",
            },
        },
        OptFields: []string{
            "doloribus",
            "ut",
            "facilis",
            "cupiditate",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveMembersForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateProject

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

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
    res, err := s.Projects.UpdateProject(ctx, operations.UpdateProjectRequest{
        RequestBody: operations.UpdateProjectRequestBodyInput{
            Data: &shared.ProjectRequestInput{
                Archived: sdk.Bool(false),
                Color: shared.ProjectRequestColorEnumLightGreen.ToPointer(),
                CurrentStatus: &shared.ProjectRequestCurrentStatusInput{
                    Author: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    Color: shared.ProjectRequestCurrentStatusColorEnumGreen,
                    CreatedBy: &shared.UserCompactInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                    HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                    Text: "The project is moving forward according to plan...",
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CurrentStatusUpdate: &shared.ProjectRequestCurrentStatusUpdateInput{
                    Title: sdk.String("Status Update - Jun 15"),
                },
                CustomFields: map[string]string{
                    "odio": "occaecati",
                    "voluptatibus": "quisquam",
                    "vero": "omnis",
                },
                DefaultView: shared.ProjectRequestDefaultViewEnumCalendar.ToPointer(),
                DueDate: types.MustTimeFromString("2019-09-15"),
                DueOn: types.MustTimeFromString("2019-09-15"),
                Followers: sdk.String("12345,23456"),
                HTMLNotes: sdk.String("<body>These are things we need to purchase.</body>"),
                IsTemplate: sdk.Bool(false),
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("These are things we need to purchase."),
                Owner: sdk.String("12345"),
                Public: sdk.Bool(false),
                StartOn: types.MustDateFromString("2019-09-14"),
                Team: sdk.String("12345"),
                Workspace: &shared.ProjectRequestWorkspaceInput{
                    Name: sdk.String("My Company Workspace"),
                },
            },
        },
        OptFields: []string{
            "ipsum",
            "delectus",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
