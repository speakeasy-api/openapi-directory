# Groups

## Overview

Operations about groups

### Available Operations

* [DeleteGroupsGroupIDMembershipsUserID](#deletegroupsgroupidmembershipsuserid) - Delete Group User
* [DeleteGroupsID](#deletegroupsid) - Delete Group
* [GetGroups](#getgroups) - List Groups
* [GetGroupsGroupIDPermissions](#getgroupsgroupidpermissions) - List Permissions
* [GetGroupsGroupIDUsers](#getgroupsgroupidusers) - List Group Users
* [GetGroupsID](#getgroupsid) - Show Group
* [PatchGroupsGroupIDMembershipsUserID](#patchgroupsgroupidmembershipsuserid) - Update Group User
* [PatchGroupsID](#patchgroupsid) - Update Group
* [PostGroups](#postgroups) - Create Group
* [PostGroupsGroupIDUsers](#postgroupsgroupidusers) - Create User

## DeleteGroupsGroupIDMembershipsUserID

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
    res, err := s.Groups.DeleteGroupsGroupIDMembershipsUserID(ctx, operations.DeleteGroupsGroupIDMembershipsUserIDRequest{
        GroupID: 908844,
        UserID: 992430,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteGroupsID

Delete Group

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
    res, err := s.Groups.DeleteGroupsID(ctx, operations.DeleteGroupsIDRequest{
        ID: 815524,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGroups

List Groups

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
    res, err := s.Groups.GetGroups(ctx, operations.GetGroupsRequest{
        Cursor: sdk.String("veritatis"),
        Filter: map[string]interface{}{
            "quasi": "similique",
        },
        FilterPrefix: map[string]interface{}{
            "aliquid": "tenetur",
            "quae": "earum",
            "vel": "in",
        },
        Ids: sdk.String("eius"),
        PerPage: sdk.Int(727697),
        SortBy: map[string]interface{}{
            "soluta": "accusantium",
            "aliquam": "sapiente",
            "dicta": "ullam",
            "reprehenderit": "ullam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEntities != nil {
        // handle response
    }
}
```

## GetGroupsGroupIDPermissions

List Permissions

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
    res, err := s.Groups.GetGroupsGroupIDPermissions(ctx, operations.GetGroupsGroupIDPermissionsRequest{
        Cursor: sdk.String("nisi"),
        Filter: map[string]interface{}{
            "voluptatum": "qui",
        },
        FilterPrefix: map[string]interface{}{
            "ex": "deleniti",
            "itaque": "dolorum",
            "architecto": "omnis",
            "tenetur": "quasi",
        },
        GroupID: "at",
        IncludeGroups: sdk.Bool(false),
        Path: sdk.String("et"),
        PerPage: sdk.Int(454162),
        SortBy: map[string]interface{}{
            "minima": "veritatis",
        },
        UserID: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionEntities != nil {
        // handle response
    }
}
```

## GetGroupsGroupIDUsers

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
    res, err := s.Groups.GetGroupsGroupIDUsers(ctx, operations.GetGroupsGroupIDUsersRequest{
        Cursor: sdk.String("adipisci"),
        GroupID: 614465,
        PerPage: sdk.Int(839513),
        UserID: sdk.Int(33074),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntities != nil {
        // handle response
    }
}
```

## GetGroupsID

Show Group

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
    res, err := s.Groups.GetGroupsID(ctx, operations.GetGroupsIDRequest{
        ID: 522371,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEntity != nil {
        // handle response
    }
}
```

## PatchGroupsGroupIDMembershipsUserID

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
    res, err := s.Groups.PatchGroupsGroupIDMembershipsUserID(ctx, operations.PatchGroupsGroupIDMembershipsUserIDRequest{
        RequestBody: &operations.PatchGroupsGroupIDMembershipsUserIDRequestBody{
            Admin: sdk.Bool(false),
        },
        GroupID: 15606,
        UserID: 513075,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntity != nil {
        // handle response
    }
}
```

## PatchGroupsID

Update Group

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
    res, err := s.Groups.PatchGroupsID(ctx, operations.PatchGroupsIDRequest{
        RequestBody: &operations.PatchGroupsIDRequestBody{
            AdminIds: sdk.String("eum"),
            Name: sdk.String("Andrew Little I"),
            Notes: sdk.String("occaecati"),
            UserIds: sdk.String("numquam"),
        },
        ID: 771089,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEntity != nil {
        // handle response
    }
}
```

## PostGroups

Create Group

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
    res, err := s.Groups.PostGroups(ctx, operations.PostGroupsRequestBody{
        AdminIds: sdk.String("explicabo"),
        Name: sdk.String("Dr. Maria Kulas"),
        Notes: sdk.String("velit"),
        UserIds: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEntity != nil {
        // handle response
    }
}
```

## PostGroupsGroupIDUsers

Create User

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.PostGroupsGroupIDUsers(ctx, operations.PostGroupsGroupIDUsersRequest{
        RequestBody: &operations.PostGroupsGroupIDUsersRequestBody{
            AllowedIps: sdk.String("127.0.0.1"),
            AnnouncementsRead: sdk.Bool(false),
            AttachmentsPermission: sdk.Bool(true),
            AuthenticateUntil: types.MustTimeFromString("2000-01-01T01:00:00Z"),
            AuthenticationMethod: operations.PostGroupsGroupIDUsersRequestBodyAuthenticationMethodEnumPassword.ToPointer(),
            AvatarDelete: sdk.Bool(false),
            AvatarFile: &operations.PostGroupsGroupIDUsersRequestBodyAvatarFile{
                AvatarFile: "voluptas",
                Content: []byte("asperiores"),
            },
            BillingPermission: sdk.Bool(false),
            BypassInactiveDisable: sdk.Bool(false),
            BypassSiteAllowedIps: sdk.Bool(false),
            ChangePassword: sdk.String("aperiam"),
            ChangePasswordConfirmation: sdk.String("ea"),
            Company: sdk.String("ACME Corp."),
            DavPermission: sdk.Bool(true),
            Disabled: sdk.Bool(true),
            Email: sdk.String("Carson_Sipes@gmail.com"),
            FtpPermission: sdk.Bool(true),
            GrantPermission: sdk.String("dignissimos"),
            GroupIds: sdk.String("officia"),
            HeaderText: sdk.String("User-specific message."),
            ImportedPasswordHash: sdk.String("asperiores"),
            Language: sdk.String("en"),
            Name: sdk.String("John Doe"),
            Notes: sdk.String("Internal notes on this user."),
            NotificationDailySendTime: sdk.Int(18),
            OfficeIntegrationEnabled: sdk.Bool(true),
            Password: sdk.String("nemo"),
            PasswordConfirmation: sdk.String("quae"),
            PasswordValidityDays: sdk.Int(1),
            ReceiveAdminAlerts: sdk.Bool(true),
            Require2fa: operations.PostGroupsGroupIDUsersRequestBodyRequire2faEnumAlwaysRequire.ToPointer(),
            RequirePasswordChange: sdk.Bool(true),
            RestapiPermission: sdk.Bool(true),
            SelfManaged: sdk.Bool(true),
            SftpPermission: sdk.Bool(true),
            SiteAdmin: sdk.Bool(true),
            SkipWelcomeScreen: sdk.Bool(true),
            SslRequired: operations.PostGroupsGroupIDUsersRequestBodySslRequiredEnumAlwaysRequire.ToPointer(),
            SsoStrategyID: sdk.Int(1),
            SubscribeToNewsletter: sdk.Bool(true),
            TimeZone: sdk.String("Pacific Time (US & Canada)"),
            UserRoot: sdk.String("example"),
            Username: sdk.String("user"),
        },
        GroupID: 312753,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserEntity != nil {
        // handle response
    }
}
```
