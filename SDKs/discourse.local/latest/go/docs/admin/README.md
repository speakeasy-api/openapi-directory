# Admin

### Available Operations

* [AdminGetUser](#admingetuser) - Get a user by id
* [AdminListUsers](#adminlistusers) - Get a list of users
* [AnonymizeUser](#anonymizeuser) - Anonymize a user
* [DeleteUser](#deleteuser) - Delete a user
* [LogOutUser](#logoutuser) - Log a user out
* [RefreshGravatar](#refreshgravatar) - Refresh gravatar
* [SilenceUser](#silenceuser) - Silence a user
* [SuspendUser](#suspenduser) - Suspend a user

## AdminGetUser

Get a user by id

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
    res, err := s.Admin.AdminGetUser(ctx, operations.AdminGetUserRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminGetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AdminListUsers

Get a list of users

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
    res, err := s.Admin.AdminListUsers(ctx, operations.AdminListUsersRequest{
        Asc: operations.AdminListUsersAscEnumTrue.ToPointer(),
        Flag: operations.AdminListUsersFlagEnumBlocked,
        Order: operations.AdminListUsersOrderEnumPosts.ToPointer(),
        Page: sdk.Int64(602763),
        ShowEmails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AnonymizeUser

Anonymize a user

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
    res, err := s.Admin.AnonymizeUser(ctx, operations.AnonymizeUserRequest{
        ID: 857946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnonymizeUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteUser

Delete a user

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
    res, err := s.Admin.DeleteUser(ctx, operations.DeleteUserRequest{
        RequestBody: &operations.DeleteUserRequestBody{
            BlockEmail: sdk.Bool(false),
            BlockIP: sdk.Bool(false),
            BlockUrls: sdk.Bool(false),
            DeletePosts: sdk.Bool(false),
        },
        ID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LogOutUser

Log a user out

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
    res, err := s.Admin.LogOutUser(ctx, operations.LogOutUserRequest{
        ID: 847252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogOutUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RefreshGravatar

Refresh gravatar

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
    res, err := s.Admin.RefreshGravatar(ctx, operations.RefreshGravatarRequest{
        Username: "Henry.Mueller",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshGravatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SilenceUser

Silence a user

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
    res, err := s.Admin.SilenceUser(ctx, operations.SilenceUserRequest{
        RequestBody: &operations.SilenceUserRequestBody{
            Message: sdk.String("iure"),
            PostAction: sdk.String("magnam"),
            Reason: sdk.String("debitis"),
            SilencedTill: sdk.String("ipsa"),
        },
        ID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SilenceUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SuspendUser

Suspend a user

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
    res, err := s.Admin.SuspendUser(ctx, operations.SuspendUserRequest{
        RequestBody: &operations.SuspendUserRequestBody{
            Message: sdk.String("tempora"),
            PostAction: sdk.String("suscipit"),
            Reason: "molestiae",
            SuspendUntil: "minus",
        },
        ID: 812169,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuspendUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
