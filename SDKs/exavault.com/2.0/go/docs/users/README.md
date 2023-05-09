# Users

## Overview

The user APIs allow you to create, update and delete users from your account. Users can be assigned unique permissions, set to expire after a certain time period, and more.

### Available Operations

* [AddUser](#adduser) - Create a user
* [DeleteUser](#deleteuser) - Delete a user
* [GetUserByID](#getuserbyid) - Get info for a user
* [ListUsers](#listusers) - Get a list of users
* [UpdateUser](#updateuser) - Update a user

## AddUser

Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). 

**Notes:**

- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.

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
    res, err := s.Users.AddUser(ctx, operations.AddUserRequest{
        RequestBody: &operations.AddUserAddUserRequestBody{
            Email: "testuser@example.com",
            Expiration: sdk.String("2011-03-21 00:18:56"),
            HomeResource: "/",
            Locked: sdk.Bool(true),
            Nickname: sdk.String("testnickname"),
            Onboarding: sdk.Bool(true),
            Password: "officiis",
            Permissions: operations.AddUserAddUserRequestBodyPermissions{
                ChangePassword: sdk.Bool(true),
                Delete: sdk.Bool(true),
                DeleteFormData: sdk.Bool(true),
                Download: sdk.Bool(true),
                List: sdk.Bool(true),
                Modify: sdk.Bool(true),
                Notification: sdk.Bool(true),
                Share: sdk.Bool(true),
                Upload: sdk.Bool(true),
                ViewFormData: sdk.Bool(true),
            },
            Role: operations.AddUserAddUserRequestBodyRoleEnumUser,
            TimeZone: "America/Los_Angeles",
            Username: "testuser",
            WelcomeEmail: sdk.Bool(true),
        },
        EvAccessToken: "qui",
        EvAPIKey: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## DeleteUser

Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in. 

Resources and shares owned by the deleted user will be owned by the master user after the deletion.

**Notes:**
 
- You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.
- The primary owner of the account cannot be deleted.


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
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "a",
        ID: 2224,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetUserByID

Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.

**Notes:**

- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.

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
    res, err := s.Users.GetUserByID(ctx, operations.GetUserByIDRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 2224,
        Include: sdk.String("homeResource,ownerAccount"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## ListUsers

Get a list of the users in your account. There are three main types of searches you can do with this method:

1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.
1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the "admin" `role` AND `email` addresses ending in "*@acme.com". 
1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.

**Notes:**

- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
- The homeDir is the full path to the user's home directory, not a resource ID or hash.

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
    res, err := s.Users.ListUsers(ctx, operations.ListUsersRequest{
        Email: sdk.String("*@example.co"),
        EvAccessToken: "esse",
        EvAPIKey: "harum",
        HomeResource: sdk.String("iusto"),
        Include: sdk.String("ipsum"),
        Limit: sdk.Int(788740),
        Nickname: sdk.String("tenetur"),
        Offset: sdk.Int(229442),
        Role: sdk.String("use"),
        Search: sdk.String("tempore"),
        Sort: sdk.String("homeDir,-modified"),
        Status: sdk.Int64(880298),
        Username: sdk.String("Deontae95"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateUser

Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.

In the request body, you should only send the parameters for values that you wish to change for the user.

**Notes:**

- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.
- You cannot edit a master user with this method.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UpdateUser(ctx, operations.UpdateUserRequest{
        RequestBody: &operations.UpdateUserUpdateUserRequestBody{
            Email: sdk.String("testuser@example.com"),
            Expiration: sdk.String("2011-03-21 00:18:56"),
            HomeResource: sdk.String("/"),
            Locked: sdk.Bool(true),
            Nickname: sdk.String("testnickname"),
            Onboarding: sdk.Bool(true),
            Password: sdk.String("totam"),
            Permissions: &shared.UserPermissions{
                ChangePassword: false,
                Delete: false,
                DeleteFormData: false,
                Download: false,
                List: false,
                Modify: false,
                Notification: false,
                Share: false,
                Upload: false,
                ViewFormData: false,
            },
            Role: operations.UpdateUserUpdateUserRequestBodyRoleEnumUser.ToPointer(),
            TimeZone: sdk.String("America/Los_Angeles"),
            Username: sdk.String("testuser"),
        },
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 2224,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```
