# UserTaskLists

## Overview

A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.

### Available Operations

* [GetUserTaskList](#getusertasklist) - Get a user task list
* [GetUserTaskListForUser](#getusertasklistforuser) - Get a user's task list

## GetUserTaskList

Returns the full record for a user task list.

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
    res, err := s.UserTaskLists.GetUserTaskList(ctx, operations.GetUserTaskListRequest{
        OptFields: []string{
            "consequatur",
            "esse",
        },
        OptPretty: sdk.Bool(false),
        UserTaskListGid: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserTaskList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserTaskListForUser

Returns the full record for a user's task list.

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
    res, err := s.UserTaskLists.GetUserTaskListForUser(ctx, operations.GetUserTaskListForUserRequest{
        OptFields: []string{
            "voluptatum",
        },
        OptPretty: sdk.Bool(false),
        UserGid: "quas",
        Workspace: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserTaskListForUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
