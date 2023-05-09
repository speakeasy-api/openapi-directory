# Tasks

## Overview

The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.

Sections are unique in that they will be included in the `memberships` field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.

[Queries](/docs/get-multiple-tasks) return a [compact representation of each task object](/docs/task-compact). To retrieve *all* fields or *specific set* of the fields, use [field selectors](/docs/input-output-options) to manipulate what data is included in a response.

### Available Operations

* [AddDependenciesForTask](#adddependenciesfortask) - Set dependencies for a task
* [AddDependentsForTask](#adddependentsfortask) - Set dependents for a task
* [AddFollowersForTask](#addfollowersfortask) - Add followers to a task
* [AddProjectForTask](#addprojectfortask) - Add a project to a task
* [AddTagForTask](#addtagfortask) - Add a tag to a task
* [CreateSubtaskForTask](#createsubtaskfortask) - Create a subtask
* [CreateTask](#createtask) - Create a task
* [DeleteTask](#deletetask) - Delete a task
* [DuplicateTask](#duplicatetask) - Duplicate a task
* [GetDependenciesForTask](#getdependenciesfortask) - Get dependencies from a task
* [GetDependentsForTask](#getdependentsfortask) - Get dependents from a task
* [GetSubtasksForTask](#getsubtasksfortask) - Get subtasks from a task
* [GetTask](#gettask) - Get a task
* [GetTasks](#gettasks) - Get multiple tasks
* [GetTasksForProject](#gettasksforproject) - Get tasks from a project
* [GetTasksForSection](#gettasksforsection) - Get tasks from a section
* [GetTasksForTag](#gettasksfortag) - Get tasks from a tag
* [GetTasksForUserTaskList](#gettasksforusertasklist) - Get tasks from a user task list
* [RemoveDependenciesForTask](#removedependenciesfortask) - Unlink dependencies from a task
* [RemoveDependentsForTask](#removedependentsfortask) - Unlink dependents from a task
* [RemoveFollowerForTask](#removefollowerfortask) - Remove followers from a task
* [RemoveProjectForTask](#removeprojectfortask) - Remove a project from a task
* [RemoveTagForTask](#removetagfortask) - Remove a tag from a task
* [SearchTasksForWorkspace](#searchtasksforworkspace) - Search tasks in a workspace
* [SetParentForTask](#setparentfortask) - Set the parent of a task
* [UpdateTask](#updatetask) - Update a task

## AddDependenciesForTask

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

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
    res, err := s.Tasks.AddDependenciesForTask(ctx, operations.AddDependenciesForTaskRequest{
        RequestBody: operations.AddDependenciesForTaskRequestBody{
            Data: &shared.ModifyDependenciesRequest{
                Dependencies: []string{
                    "aspernatur",
                    "sequi",
                },
            },
        },
        OptFields: []string{
            "esse",
            "recusandae",
            "aperiam",
            "distinctio",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDependenciesForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddDependentsForTask

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

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
    res, err := s.Tasks.AddDependentsForTask(ctx, operations.AddDependentsForTaskRequest{
        RequestBody: operations.AddDependentsForTaskRequestBody{
            Data: &shared.ModifyDependentsRequest{
                Dependents: []string{
                    "inventore",
                    "nihil",
                },
            },
        },
        OptFields: []string{
            "accusamus",
            "aliquam",
            "odio",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDependentsForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddFollowersForTask

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

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
    res, err := s.Tasks.AddFollowersForTask(ctx, operations.AddFollowersForTaskRequest{
        RequestBody: operations.AddFollowersForTaskRequestBody{
            Data: &shared.TaskAddFollowersRequest{
                Followers: []string{
                    "sapiente",
                    "dolores",
                },
            },
        },
        OptFields: []string{
            "molestiae",
            "accusantium",
            "porro",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFollowersForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddProjectForTask

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

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
    res, err := s.Tasks.AddProjectForTask(ctx, operations.AddProjectForTaskRequest{
        RequestBody: operations.AddProjectForTaskRequestBody{
            Data: &shared.TaskAddProjectRequest{
                InsertAfter: sdk.String("124816"),
                InsertBefore: sdk.String("432134"),
                Project: "13579",
                Section: sdk.String("987654"),
            },
        },
        OptFields: []string{
            "praesentium",
            "consequuntur",
            "deleniti",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddProjectForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddTagForTask

Adds a tag to a task. Returns an empty data block.

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
    res, err := s.Tasks.AddTagForTask(ctx, operations.AddTagForTaskRequest{
        RequestBody: operations.AddTagForTaskRequestBody{
            Data: &shared.TaskAddTagRequest{
                Tag: "13579",
            },
        },
        OptFields: []string{
            "mollitia",
            "incidunt",
            "atque",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateSubtaskForTask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

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
    res, err := s.Tasks.CreateSubtaskForTask(ctx, operations.CreateSubtaskForTaskRequest{
        RequestBody: operations.CreateSubtaskForTaskRequestBodyInput{
            Data: &shared.TaskRequestInput{
                ApprovalStatus: shared.TaskRequestApprovalStatusEnumPending.ToPointer(),
                Assignee: sdk.String("12345"),
                AssigneeSection: sdk.String("12345"),
                AssigneeStatus: shared.TaskRequestAssigneeStatusEnumUpcoming.ToPointer(),
                Completed: sdk.Bool(false),
                CompletedBy: &shared.UserCompactInput{
                    Name: sdk.String("Greg Sanchez"),
                },
                CustomFields: map[string]string{
                    "nisi": "fugit",
                    "sapiente": "consequuntur",
                },
                DueAt: types.MustDateFromString("2019-09-15T02:06:58.147Z"),
                DueOn: types.MustDateFromString("2019-09-15"),
                External: &shared.TaskRequestExternal{
                    Data: sdk.String("A blob of information."),
                    Gid: sdk.String("1234"),
                },
                Followers: []string{
                    "explicabo",
                },
                HTMLNotes: sdk.String("<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>"),
                Liked: sdk.Bool(true),
                Name: sdk.String("Bug Task"),
                Notes: sdk.String("Mittens really likes the stuff from Humboldt."),
                Parent: sdk.String("12345"),
                Projects: []string{
                    "occaecati",
                    "atque",
                    "et",
                    "esse",
                },
                ResourceSubtype: shared.TaskRequestResourceSubtypeEnumDefaultTask.ToPointer(),
                StartAt: types.MustDateFromString("2019-09-14T02:06:58.147Z"),
                StartOn: types.MustDateFromString("2019-09-14"),
                Tags: []string{
                    "accusamus",
                    "veritatis",
                    "esse",
                    "quod",
                },
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "vero",
            "aliquid",
            "quasi",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubtaskForTask201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateTask

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

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
    res, err := s.Tasks.CreateTask(ctx, operations.CreateTaskRequest{
        RequestBody: operations.CreateTaskRequestBodyInput{
            Data: &shared.TaskRequestInput{
                ApprovalStatus: shared.TaskRequestApprovalStatusEnumPending.ToPointer(),
                Assignee: sdk.String("12345"),
                AssigneeSection: sdk.String("12345"),
                AssigneeStatus: shared.TaskRequestAssigneeStatusEnumUpcoming.ToPointer(),
                Completed: sdk.Bool(false),
                CompletedBy: &shared.UserCompactInput{
                    Name: sdk.String("Greg Sanchez"),
                },
                CustomFields: map[string]string{
                    "harum": "molestiae",
                    "rerum": "occaecati",
                },
                DueAt: types.MustDateFromString("2019-09-15T02:06:58.147Z"),
                DueOn: types.MustDateFromString("2019-09-15"),
                External: &shared.TaskRequestExternal{
                    Data: sdk.String("A blob of information."),
                    Gid: sdk.String("1234"),
                },
                Followers: []string{
                    "distinctio",
                    "eligendi",
                },
                HTMLNotes: sdk.String("<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>"),
                Liked: sdk.Bool(true),
                Name: sdk.String("Bug Task"),
                Notes: sdk.String("Mittens really likes the stuff from Humboldt."),
                Parent: sdk.String("12345"),
                Projects: []string{
                    "culpa",
                },
                ResourceSubtype: shared.TaskRequestResourceSubtypeEnumDefaultTask.ToPointer(),
                StartAt: types.MustDateFromString("2019-09-14T02:06:58.147Z"),
                StartOn: types.MustDateFromString("2019-09-14"),
                Tags: []string{
                    "adipisci",
                    "cumque",
                    "consequuntur",
                },
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "minus",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTask201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteTask

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

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
    res, err := s.Tasks.DeleteTask(ctx, operations.DeleteTaskRequest{
        OptFields: []string{
            "sapiente",
            "consectetur",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DuplicateTask

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
    res, err := s.Tasks.DuplicateTask(ctx, operations.DuplicateTaskRequest{
        RequestBody: operations.DuplicateTaskRequestBody{
            Data: &shared.TaskDuplicateRequest{
                Include: shared.TaskDuplicateRequestIncludeEnumFollowers.ToPointer(),
                Name: sdk.String("New Task Name"),
            },
        },
        OptFields: []string{
            "a",
            "nulla",
            "quas",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DuplicateTask201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDependenciesForTask

Returns the compact representations of all of the dependencies of a task.

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
    res, err := s.Tasks.GetDependenciesForTask(ctx, operations.GetDependenciesForTaskRequest{
        Limit: sdk.Int64(97468),
        Offset: sdk.String("a"),
        OptFields: []string{
            "sint",
            "pariatur",
            "possimus",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDependenciesForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDependentsForTask

Returns the compact representations of all of the dependents of a task.

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
    res, err := s.Tasks.GetDependentsForTask(ctx, operations.GetDependentsForTaskRequest{
        Limit: sdk.Int64(908844),
        Offset: sdk.String("asperiores"),
        OptFields: []string{
            "veritatis",
            "consequuntur",
            "quasi",
            "similique",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDependentsForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSubtasksForTask

Returns a compact representation of all of the subtasks of a task.

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
    res, err := s.Tasks.GetSubtasksForTask(ctx, operations.GetSubtasksForTaskRequest{
        Limit: sdk.Int64(398434),
        Offset: sdk.String("tenetur"),
        OptFields: []string{
            "earum",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubtasksForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTask

Returns the complete task record for a single task.

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
    res, err := s.Tasks.GetTask(ctx, operations.GetTaskRequest{
        OptFields: []string{
            "eius",
            "libero",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Tasks.GetTasks(ctx, operations.GetTasksRequest{
        Assignee: sdk.String("soluta"),
        CompletedSince: types.MustTimeFromString("2012-02-22T02:06:58.158Z"),
        Limit: sdk.Int64(33304),
        ModifiedSince: types.MustTimeFromString("2022-01-15T23:18:40.855Z"),
        Offset: sdk.String("dicta"),
        OptFields: []string{
            "reprehenderit",
            "ullam",
        },
        OptPretty: sdk.Bool(false),
        Project: sdk.String("nisi"),
        Section: sdk.String("aut"),
        Workspace: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTasks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTasksForProject

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

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
    res, err := s.Tasks.GetTasksForProject(ctx, operations.GetTasksForProjectRequest{
        CompletedSince: sdk.String("qui"),
        Limit: sdk.Int64(845358),
        Offset: sdk.String("ex"),
        OptFields: []string{
            "itaque",
            "dolorum",
            "architecto",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTasksForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTasksForSection

*Board view only*: Returns the compact section records for all tasks within the given section.

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
    res, err := s.Tasks.GetTasksForSection(ctx, operations.GetTasksForSectionRequest{
        Limit: sdk.Int64(945302),
        Offset: sdk.String("quasi"),
        OptFields: []string{
            "et",
            "voluptate",
            "ipsa",
            "minima",
        },
        OptPretty: sdk.Bool(false),
        SectionGid: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTasksForSection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTasksForTag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

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
    res, err := s.Tasks.GetTasksForTag(ctx, operations.GetTasksForTagRequest{
        Limit: sdk.Int64(232744),
        Offset: sdk.String("adipisci"),
        OptFields: []string{
            "temporibus",
            "accusantium",
            "rem",
        },
        OptPretty: sdk.Bool(false),
        TagGid: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTasksForTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTasksForUserTaskList

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

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
    res, err := s.Tasks.GetTasksForUserTaskList(ctx, operations.GetTasksForUserTaskListRequest{
        CompletedSince: sdk.String("laudantium"),
        Limit: sdk.Int64(428796),
        Offset: sdk.String("mollitia"),
        OptFields: []string{
            "corrupti",
        },
        OptPretty: sdk.Bool(false),
        UserTaskListGid: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTasksForUserTaskList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveDependenciesForTask

Unlinks a set of dependencies from this task.

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
    res, err := s.Tasks.RemoveDependenciesForTask(ctx, operations.RemoveDependenciesForTaskRequest{
        RequestBody: operations.RemoveDependenciesForTaskRequestBody{
            Data: &shared.ModifyDependenciesRequest{
                Dependencies: []string{
                    "dolor",
                },
            },
        },
        OptFields: []string{
            "numquam",
            "impedit",
            "explicabo",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveDependenciesForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveDependentsForTask

Unlinks a set of dependents from this task.

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
    res, err := s.Tasks.RemoveDependentsForTask(ctx, operations.RemoveDependentsForTaskRequest{
        RequestBody: operations.RemoveDependentsForTaskRequestBody{
            Data: &shared.ModifyDependentsRequest{
                Dependents: []string{
                    "dignissimos",
                },
            },
        },
        OptFields: []string{
            "maiores",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveDependentsForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveFollowerForTask

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

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
    res, err := s.Tasks.RemoveFollowerForTask(ctx, operations.RemoveFollowerForTaskRequest{
        RequestBody: operations.RemoveFollowerForTaskRequestBody{
            Data: &shared.TaskRemoveFollowersRequest{
                Followers: []string{
                    "voluptatibus",
                },
            },
        },
        OptFields: []string{
            "asperiores",
            "aperiam",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveFollowerForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveProjectForTask

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

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
    res, err := s.Tasks.RemoveProjectForTask(ctx, operations.RemoveProjectForTaskRequest{
        RequestBody: operations.RemoveProjectForTaskRequestBody{
            Data: &shared.TaskRemoveProjectRequest{
                Project: "13579",
            },
        },
        OptFields: []string{
            "consequuntur",
            "repellendus",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveProjectForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveTagForTask

Removes a tag from a task. Returns an empty data block.

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
    res, err := s.Tasks.RemoveTagForTask(ctx, operations.RemoveTagForTaskRequest{
        RequestBody: operations.RemoveTagForTaskRequestBody{
            Data: &shared.TaskRemoveTagRequest{
                Tag: "13579",
            },
        },
        OptFields: []string{
            "dignissimos",
            "officia",
            "asperiores",
            "nemo",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchTasksForWorkspace

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits
You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
#### Custom field parameters
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |


For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Tasks.SearchTasksForWorkspace(ctx, operations.SearchTasksForWorkspaceRequest{
        AssignedByAny: sdk.String("quaerat"),
        AssignedByNot: sdk.String("porro"),
        AssigneeAny: sdk.String("quod"),
        AssigneeNot: sdk.String("labore"),
        CommentedOnByNot: sdk.String("ab"),
        Completed: sdk.Bool(false),
        CompletedAtAfter: types.MustTimeFromString("2022-04-26T11:54:02.741Z"),
        CompletedAtBefore: types.MustTimeFromString("2022-03-29T01:37:24.454Z"),
        CompletedOn: types.MustDateFromString("2022-05-14"),
        CompletedOnAfter: types.MustDateFromString("2021-02-23"),
        CompletedOnBefore: types.MustDateFromString("2021-04-17"),
        CreatedAtAfter: types.MustTimeFromString("2022-07-03T08:20:26.765Z"),
        CreatedAtBefore: types.MustTimeFromString("2022-02-22T16:20:29.225Z"),
        CreatedByAny: sdk.String("labore"),
        CreatedByNot: sdk.String("possimus"),
        CreatedOn: types.MustDateFromString("2021-07-11"),
        CreatedOnAfter: types.MustDateFromString("2022-07-21"),
        CreatedOnBefore: types.MustDateFromString("2022-01-12"),
        DueAtAfter: types.MustTimeFromString("2021-11-29T08:07:19.623Z"),
        DueAtBefore: types.MustTimeFromString("2021-10-22T16:49:10.196Z"),
        DueOn: types.MustDateFromString("2022-04-06"),
        DueOnAfter: types.MustDateFromString("2022-07-21"),
        DueOnBefore: types.MustDateFromString("2022-01-23"),
        FollowersNot: sdk.String("facere"),
        HasAttachment: sdk.Bool(false),
        IsBlocked: sdk.Bool(false),
        IsBlocking: sdk.Bool(false),
        IsSubtask: sdk.Bool(false),
        LikedByNot: sdk.String("numquam"),
        ModifiedAtAfter: types.MustTimeFromString("2021-11-08T23:21:08.200Z"),
        ModifiedAtBefore: types.MustTimeFromString("2020-11-28T15:07:06.228Z"),
        ModifiedOn: types.MustDateFromString("2020-04-23"),
        ModifiedOnAfter: types.MustDateFromString("2022-11-17"),
        ModifiedOnBefore: types.MustDateFromString("2022-04-11"),
        OptFields: []string{
            "amet",
        },
        OptPretty: sdk.Bool(false),
        PortfoliosAny: sdk.String("beatae"),
        ProjectsAll: sdk.String("dignissimos"),
        ProjectsAny: sdk.String("a"),
        ProjectsNot: sdk.String("debitis"),
        ResourceSubtype: operations.SearchTasksForWorkspaceResourceSubtypeEnumDefaultTask.ToPointer(),
        SectionsAll: sdk.String("corporis"),
        SectionsAny: sdk.String("harum"),
        SectionsNot: sdk.String("laboriosam"),
        SortAscending: sdk.Bool(false),
        SortBy: operations.SearchTasksForWorkspaceSortByEnumDueDate.ToPointer(),
        StartOn: types.MustDateFromString("2020-10-22"),
        StartOnAfter: types.MustDateFromString("2022-02-13"),
        StartOnBefore: types.MustDateFromString("2022-06-16"),
        TagsAll: sdk.String("aspernatur"),
        TagsAny: sdk.String("voluptas"),
        TagsNot: sdk.String("voluptas"),
        TeamsAny: sdk.String("voluptas"),
        Text: sdk.String("minima"),
        WorkspaceGid: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTasksForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetParentForTask

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

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
    res, err := s.Tasks.SetParentForTask(ctx, operations.SetParentForTaskRequest{
        RequestBody: operations.SetParentForTaskRequestBody{
            Data: &shared.TaskSetParentRequest{
                InsertAfter: sdk.String("null"),
                InsertBefore: sdk.String("124816"),
                Parent: "987654",
            },
        },
        OptFields: []string{
            "adipisci",
            "minus",
            "dolores",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetParentForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTask

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

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
    res, err := s.Tasks.UpdateTask(ctx, operations.UpdateTaskRequest{
        RequestBody: operations.UpdateTaskRequestBodyInput{
            Data: &shared.TaskRequestInput{
                ApprovalStatus: shared.TaskRequestApprovalStatusEnumPending.ToPointer(),
                Assignee: sdk.String("12345"),
                AssigneeSection: sdk.String("12345"),
                AssigneeStatus: shared.TaskRequestAssigneeStatusEnumUpcoming.ToPointer(),
                Completed: sdk.Bool(false),
                CompletedBy: &shared.UserCompactInput{
                    Name: sdk.String("Greg Sanchez"),
                },
                CustomFields: map[string]string{
                    "dolore": "aliquam",
                    "officiis": "temporibus",
                },
                DueAt: types.MustDateFromString("2019-09-15T02:06:58.147Z"),
                DueOn: types.MustDateFromString("2019-09-15"),
                External: &shared.TaskRequestExternal{
                    Data: sdk.String("A blob of information."),
                    Gid: sdk.String("1234"),
                },
                Followers: []string{
                    "adipisci",
                    "cum",
                },
                HTMLNotes: sdk.String("<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>"),
                Liked: sdk.Bool(true),
                Name: sdk.String("Bug Task"),
                Notes: sdk.String("Mittens really likes the stuff from Humboldt."),
                Parent: sdk.String("12345"),
                Projects: []string{
                    "quas",
                    "hic",
                    "nesciunt",
                },
                ResourceSubtype: shared.TaskRequestResourceSubtypeEnumDefaultTask.ToPointer(),
                StartAt: types.MustDateFromString("2019-09-14T02:06:58.147Z"),
                StartOn: types.MustDateFromString("2019-09-14"),
                Tags: []string{
                    "corrupti",
                    "pariatur",
                    "totam",
                },
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "exercitationem",
            "nobis",
            "sit",
            "rerum",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```
