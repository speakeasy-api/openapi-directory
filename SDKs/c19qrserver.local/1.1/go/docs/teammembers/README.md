# TeamMembers

## Overview

Endpoints related to team member user accounts

### Available Operations

* [DeleteUserUserID](#deleteuseruserid) - Delete a team member's user record
* [GetUserUserID](#getuseruserid) - Retrieve the information associated with a team member's user record
* [GetUsers](#getusers) - Retrieve the information associated with all team members' user records
* [PostUser](#postuser) - Create a user

## DeleteUserUserID

To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMembers.DeleteUserUserID(ctx, operations.DeleteUserUserIDRequest{
        UserID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserUserID

Retrieve the information associated with a user's account


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMembers.GetUserUserID(ctx, operations.GetUserUserIDRequest{
        UserID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRecord != nil {
        // handle response
    }
}
```

## GetUsers

Retrieve the information associated with all team members' user records


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMembers.GetUsers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRecords != nil {
        // handle response
    }
}
```

## PostUser

Use this endpoint to create a team member (user) record

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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TeamMembers.PostUser(ctx, operations.PostUserSample{
        Admin: sdk.Bool(true),
        Email: sdk.String("user@example.com"),
        Name: sdk.String("Jane Doe"),
        ReadOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```
