# User

## Overview

Operations about users

### Available Operations

* [GetUserAPIKeys](#getuserapikeys) - List Api Keys
* [GetUserGroups](#getusergroups) - List Group Users
* [GetUserPublicKeys](#getuserpublickeys) - List Public Keys
* [PatchUser](#patchuser) - Update User
* [PostUserAPIKeys](#postuserapikeys) - Create Api Key
* [PostUserPublicKeys](#postuserpublickeys) - Create Public Key

## GetUserAPIKeys

List Api Keys

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
    res, err := s.User.GetUserAPIKeys(ctx, operations.GetUserAPIKeysRequest{
        Cursor: sdk.String("consequuntur"),
        Filter: map[string]interface{}{
            "aperiam": "cupiditate",
        },
        FilterGt: map[string]interface{}{
            "soluta": "alias",
            "omnis": "eos",
            "occaecati": "iste",
            "magni": "inventore",
        },
        FilterGteq: map[string]interface{}{
            "accusamus": "voluptatibus",
            "distinctio": "omnis",
            "delectus": "minima",
        },
        FilterLt: map[string]interface{}{
            "maxime": "magnam",
            "temporibus": "quos",
            "commodi": "itaque",
        },
        FilterLteq: map[string]interface{}{
            "totam": "earum",
            "modi": "nam",
        },
        PerPage: sdk.Int(877399),
        SortBy: map[string]interface{}{
            "ipsam": "vel",
        },
        UserID: sdk.Int(1383),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntities != nil {
        // handle response
    }
}
```

## GetUserGroups

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
    res, err := s.User.GetUserGroups(ctx, operations.GetUserGroupsRequest{
        Cursor: sdk.String("quasi"),
        GroupID: sdk.Int(247685),
        PerPage: sdk.Int(978548),
        UserID: sdk.Int(318233),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntities != nil {
        // handle response
    }
}
```

## GetUserPublicKeys

List Public Keys

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
    res, err := s.User.GetUserPublicKeys(ctx, operations.GetUserPublicKeysRequest{
        Cursor: sdk.String("sint"),
        PerPage: sdk.Int(858778),
        UserID: sdk.Int(643678),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntities != nil {
        // handle response
    }
}
```

## PatchUser

Update User

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
    res, err := s.User.PatchUser(ctx, operations.PatchUserRequestBody{
        AllowedIps: sdk.String("127.0.0.1"),
        AnnouncementsRead: sdk.Bool(false),
        AttachmentsPermission: sdk.Bool(true),
        AuthenticateUntil: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        AuthenticationMethod: operations.PatchUserRequestBodyAuthenticationMethodEnumPassword.ToPointer(),
        AvatarDelete: sdk.Bool(false),
        AvatarFile: &operations.PatchUserRequestBodyAvatarFile{
            AvatarFile: "esse",
            Content: []byte("nemo"),
        },
        BillingPermission: sdk.Bool(false),
        BypassInactiveDisable: sdk.Bool(false),
        BypassSiteAllowedIps: sdk.Bool(false),
        ChangePassword: sdk.String("reprehenderit"),
        ChangePasswordConfirmation: sdk.String("est"),
        Company: sdk.String("ACME Corp."),
        DavPermission: sdk.Bool(true),
        Disabled: sdk.Bool(true),
        Email: sdk.String("Kiana_Thompson90@yahoo.com"),
        FtpPermission: sdk.Bool(true),
        GrantPermission: sdk.String("asperiores"),
        GroupID: sdk.Int(404306),
        GroupIds: sdk.String("voluptas"),
        HeaderText: sdk.String("User-specific message."),
        ImportedPasswordHash: sdk.String("debitis"),
        Language: sdk.String("en"),
        Name: sdk.String("John Doe"),
        Notes: sdk.String("Internal notes on this user."),
        NotificationDailySendTime: sdk.Int(18),
        OfficeIntegrationEnabled: sdk.Bool(true),
        Password: sdk.String("delectus"),
        PasswordConfirmation: sdk.String("quae"),
        PasswordValidityDays: sdk.Int(1),
        ReceiveAdminAlerts: sdk.Bool(true),
        Require2fa: operations.PatchUserRequestBodyRequire2faEnumAlwaysRequire.ToPointer(),
        RequirePasswordChange: sdk.Bool(true),
        RestapiPermission: sdk.Bool(true),
        SelfManaged: sdk.Bool(true),
        SftpPermission: sdk.Bool(true),
        SiteAdmin: sdk.Bool(true),
        SkipWelcomeScreen: sdk.Bool(true),
        SslRequired: operations.PatchUserRequestBodySslRequiredEnumAlwaysRequire.ToPointer(),
        SsoStrategyID: sdk.Int(1),
        SubscribeToNewsletter: sdk.Bool(true),
        TimeZone: sdk.String("Pacific Time (US & Canada)"),
        UserRoot: sdk.String("example"),
        Username: sdk.String("user"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserEntity != nil {
        // handle response
    }
}
```

## PostUserAPIKeys

Create Api Key

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
    res, err := s.User.PostUserAPIKeys(ctx, operations.PostUserAPIKeysRequestBody{
        Description: sdk.String("example"),
        ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        Name: sdk.String("My Main API Key"),
        Path: sdk.String("shared/docs"),
        PermissionSet: operations.PostUserAPIKeysRequestBodyPermissionSetEnumFull.ToPointer(),
        UserID: sdk.Int(791880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## PostUserPublicKeys

Create Public Key

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
    res, err := s.User.PostUserPublicKeys(ctx, operations.PostUserPublicKeysRequestBody{
        PublicKey: "fuga",
        Title: "My Main Key",
        UserID: sdk.Int(675689),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntity != nil {
        // handle response
    }
}
```
