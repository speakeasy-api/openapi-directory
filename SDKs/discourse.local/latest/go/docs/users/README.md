# Users

### Available Operations

* [AdminGetUser](#admingetuser) - Get a user by id
* [AdminListUsers](#adminlistusers) - Get a list of users
* [AnonymizeUser](#anonymizeuser) - Anonymize a user
* [ChangePassword](#changepassword) - Change password
* [CreateUser](#createuser) - Creates a user
* [DeleteUser](#deleteuser) - Delete a user
* [GetUser](#getuser) - Get a single user by username
* [GetUserEmails](#getuseremails) - Get email addresses belonging to a user
* [GetUserExternalID](#getuserexternalid) - Get a user by external_id
* [GetUserIdentiyProviderExternalID](#getuseridentiyproviderexternalid) - Get a user by identity provider external ID
* [ListUserActions](#listuseractions) - Get a list of user actions
* [ListUserBadges](#listuserbadges) - List badges for a user
* [ListUsersPublic](#listuserspublic) - Get a public list of users
* [LogOutUser](#logoutuser) - Log a user out
* [RefreshGravatar](#refreshgravatar) - Refresh gravatar
* [SendPasswordResetEmail](#sendpasswordresetemail) - Send password reset email
* [SilenceUser](#silenceuser) - Silence a user
* [SuspendUser](#suspenduser) - Suspend a user
* [UpdateAvatar](#updateavatar) - Update avatar
* [UpdateEmail](#updateemail) - Update email
* [UpdateUser](#updateuser) - Update a user
* [UpdateUsername](#updateusername) - Update username

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
    res, err := s.Users.AdminGetUser(ctx, operations.AdminGetUserRequest{
        ID: 358107,
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
    res, err := s.Users.AdminListUsers(ctx, operations.AdminListUsersRequest{
        Asc: operations.AdminListUsersAscEnumTrue.ToPointer(),
        Flag: operations.AdminListUsersFlagEnumBlocked,
        Order: operations.AdminListUsersOrderEnumEmail.ToPointer(),
        Page: sdk.Int64(58356),
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
    res, err := s.Users.AnonymizeUser(ctx, operations.AnonymizeUserRequest{
        ID: 916727,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnonymizeUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ChangePassword

Change password

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
    res, err := s.Users.ChangePassword(ctx, operations.ChangePasswordRequest{
        RequestBody: &operations.ChangePasswordRequestBody{
            Password: "libero",
            Username: "Beth.Tillman",
        },
        Token: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateUser

Creates a user

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
    res, err := s.Users.CreateUser(ctx, operations.CreateUserRequest{
        APIKey: "voluptas",
        APIUsername: "voluptas",
        RequestBody: &operations.CreateUserRequestBody{
            Active: sdk.Bool(false),
            Approved: sdk.Bool(false),
            Email: "Enrique.Rohan79@yahoo.com",
            ExternalIds: map[string]interface{}{
                "blanditiis": "in",
            },
            Name: "Suzanne Torphy",
            Password: "adipisci",
            UserFields1: sdk.Bool(false),
            Username: "Myron_Kuvalis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUser200ApplicationJSONObject != nil {
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
    res, err := s.Users.DeleteUser(ctx, operations.DeleteUserRequest{
        RequestBody: &operations.DeleteUserRequestBody{
            BlockEmail: sdk.Bool(false),
            BlockIP: sdk.Bool(false),
            BlockUrls: sdk.Bool(false),
            DeletePosts: sdk.Bool(false),
        },
        ID: 201517,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUser

Get a single user by username

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
    res, err := s.Users.GetUser(ctx, operations.GetUserRequest{
        APIKey: "culpa",
        APIUsername: "corrupti",
        Username: "Sandrine.Leannon75",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserEmails

Get email addresses belonging to a user

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
    res, err := s.Users.GetUserEmails(ctx, operations.GetUserEmailsRequest{
        Username: "Alberto96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserEmails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserExternalID

Get a user by external_id

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
    res, err := s.Users.GetUserExternalID(ctx, operations.GetUserExternalIDRequest{
        APIKey: "explicabo",
        APIUsername: "asperiores",
        ExternalID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserExternalID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserIdentiyProviderExternalID

Get a user by identity provider external ID

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
    res, err := s.Users.GetUserIdentiyProviderExternalID(ctx, operations.GetUserIdentiyProviderExternalIDRequest{
        APIKey: "voluptate",
        APIUsername: "expedita",
        ExternalID: "ab",
        Provider: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserIdentiyProviderExternalID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListUserActions

Get a list of user actions

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
    res, err := s.Users.ListUserActions(ctx, operations.ListUserActionsRequest{
        Filter: "dolore",
        Offset: 671907,
        Username: "Camylle_King",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserActions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListUserBadges

List badges for a user

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
    res, err := s.Users.ListUserBadges(ctx, operations.ListUserBadgesRequest{
        Username: "Brendan.Hodkiewicz",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserBadges200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListUsersPublic

Get a public list of users

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
    res, err := s.Users.ListUsersPublic(ctx, operations.ListUsersPublicRequest{
        Asc: operations.ListUsersPublicAscEnumTrue.ToPointer(),
        Order: operations.ListUsersPublicOrderEnumTopicCount,
        Page: sdk.Int64(960257),
        Period: operations.ListUsersPublicPeriodEnumAll,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersPublic200ApplicationJSONObject != nil {
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
    res, err := s.Users.LogOutUser(ctx, operations.LogOutUserRequest{
        ID: 72434,
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
    res, err := s.Users.RefreshGravatar(ctx, operations.RefreshGravatarRequest{
        Username: "Viviane_Aufderhar",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshGravatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SendPasswordResetEmail

Send password reset email

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
    res, err := s.Users.SendPasswordResetEmail(ctx, operations.SendPasswordResetEmailRequestBody{
        Login: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendPasswordResetEmail200ApplicationJSONObject != nil {
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
    res, err := s.Users.SilenceUser(ctx, operations.SilenceUserRequest{
        RequestBody: &operations.SilenceUserRequestBody{
            Message: sdk.String("sed"),
            PostAction: sdk.String("provident"),
            Reason: sdk.String("eius"),
            SilencedTill: sdk.String("necessitatibus"),
        },
        ID: 215529,
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
    res, err := s.Users.SuspendUser(ctx, operations.SuspendUserRequest{
        RequestBody: &operations.SuspendUserRequestBody{
            Message: sdk.String("ea"),
            PostAction: sdk.String("occaecati"),
            Reason: "quos",
            SuspendUntil: "voluptatibus",
        },
        ID: 271653,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuspendUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateAvatar

Update avatar

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
    res, err := s.Users.UpdateAvatar(ctx, operations.UpdateAvatarRequest{
        RequestBody: &operations.UpdateAvatarRequestBody{
            Type: operations.UpdateAvatarRequestBodyTypeEnumCustom,
            UploadID: 455444,
        },
        Username: "Waldo24",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAvatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateEmail

Update email

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
    res, err := s.Users.UpdateEmail(ctx, operations.UpdateEmailRequest{
        RequestBody: &operations.UpdateEmailRequestBody{
            Email: "Jodie27@hotmail.com",
        },
        Username: "Gail.Tremblay",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateUser

Update a user

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
    res, err := s.Users.UpdateUser(ctx, operations.UpdateUserRequest{
        APIKey: "nobis",
        APIUsername: "error",
        RequestBody: &operations.UpdateUserRequestBody{
            Email: sdk.String("Ernestine_Walsh16@yahoo.com"),
            ExternalIds: map[string]interface{}{
                "saepe": "numquam",
            },
            Name: sdk.String("Ms. Pearl Towne"),
            Password: sdk.String("praesentium"),
        },
        Username: "Nadia_Howe62",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateUsername

Update username

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
    res, err := s.Users.UpdateUsername(ctx, operations.UpdateUsernameRequest{
        RequestBody: &operations.UpdateUsernameRequestBody{
            NewUsername: "hic",
        },
        Username: "Meredith67",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
