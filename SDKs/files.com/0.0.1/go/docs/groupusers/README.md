# GroupUsers

## Overview

Operations about group_users

### Available Operations

* [DeleteGroupUsersID](#deletegroupusersid) - Delete Group User
* [GetGroupUsers](#getgroupusers) - List Group Users
* [PatchGroupUsersID](#patchgroupusersid) - Update Group User
* [PostGroupUsers](#postgroupusers) - Create Group User

## DeleteGroupUsersID

Delete Group User

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GroupUsers.DeleteGroupUsersID(ctx, operations.DeleteGroupUsersIDRequest{
        GroupID: 590984,
        ID: 953722,
        UserID: 857723,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGroupUsers

List Group Users

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GroupUsers.GetGroupUsers(ctx, operations.GetGroupUsersRequest{
        Cursor: sdk.String("quas"),
        GroupID: sdk.Int(457223),
        PerPage: sdk.Int(97468),
        UserID: sdk.Int(951875),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntities != nil {
        // handle response
    }
}
```

## PatchGroupUsersID

Update Group User

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GroupUsers.PatchGroupUsersID(ctx, operations.PatchGroupUsersIDRequest{
        RequestBody: operations.PatchGroupUsersIDRequestBody{
            Admin: sdk.Bool(false),
            GroupID: 621679,
            UserID: 575751,
        },
        ID: 863023,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntity != nil {
        // handle response
    }
}
```

## PostGroupUsers

Create Group User

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GroupUsers.PostGroupUsers(ctx, operations.PostGroupUsersRequestBody{
        Admin: sdk.Bool(false),
        GroupID: 820767,
        UserID: 157632,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntity != nil {
        // handle response
    }
}
```
