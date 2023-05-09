# Users

## Overview

Operations about users

### Available Operations

* [DeleteUsersID](#deleteusersid) - Delete User
* [GetUsers](#getusers) - List Users
* [GetUsersID](#getusersid) - Show User
* [GetUsersUserIDAPIKeys](#getusersuseridapikeys) - List Api Keys
* [GetUsersUserIDCipherUses](#getusersuseridcipheruses) - List User Cipher Uses
* [GetUsersUserIDGroups](#getusersuseridgroups) - List Group Users
* [GetUsersUserIDPermissions](#getusersuseridpermissions) - List Permissions
* [GetUsersUserIDPublicKeys](#getusersuseridpublickeys) - List Public Keys
* [PatchUsersID](#patchusersid) - Update User
* [PostUsers](#postusers) - Create User
* [PostUsersId2faReset](#postusersid2fareset) - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* [PostUsersIDResendWelcomeEmail](#postusersidresendwelcomeemail) - Resend user welcome email
* [PostUsersIDUnlock](#postusersidunlock) - Unlock user who has been locked out due to failed logins.
* [PostUsersUserIDAPIKeys](#postusersuseridapikeys) - Create Api Key
* [PostUsersUserIDPublicKeys](#postusersuseridpublickeys) - Create Public Key

## DeleteUsersID

Delete User

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
    res, err := s.Users.DeleteUsersID(ctx, operations.DeleteUsersIDRequest{
        ID: 437814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsers

List Users

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
    res, err := s.Users.GetUsers(ctx, operations.GetUsersRequest{
        Cursor: sdk.String("odit"),
        Filter: map[string]interface{}{
            "vel": "magnam",
            "quibusdam": "inventore",
            "facere": "libero",
            "architecto": "voluptatibus",
        },
        FilterGt: map[string]interface{}{
            "porro": "aliquam",
        },
        FilterGteq: map[string]interface{}{
            "illo": "accusantium",
        },
        FilterLt: map[string]interface{}{
            "ea": "beatae",
            "vero": "excepturi",
        },
        FilterLteq: map[string]interface{}{
            "velit": "ut",
            "perspiciatis": "earum",
        },
        FilterPrefix: map[string]interface{}{
            "impedit": "voluptatibus",
        },
        Ids: sdk.String("iste"),
        PerPage: sdk.Int(932562),
        QAdmin: sdk.String("alias"),
        QAllowedIps: sdk.String("nisi"),
        QEmail: sdk.String("itaque"),
        QNotes: sdk.String("velit"),
        QPasswordValidityDays: sdk.String("laborum"),
        QSslRequired: sdk.String("non"),
        QUsername: sdk.String("dolor"),
        Search: sdk.String("iusto"),
        SortBy: map[string]interface{}{
            "doloremque": "consequatur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserEntities != nil {
        // handle response
    }
}
```

## GetUsersID

Show User

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
    res, err := s.Users.GetUsersID(ctx, operations.GetUsersIDRequest{
        ID: 639705,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserEntity != nil {
        // handle response
    }
}
```

## GetUsersUserIDAPIKeys

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
    res, err := s.Users.GetUsersUserIDAPIKeys(ctx, operations.GetUsersUserIDAPIKeysRequest{
        Cursor: sdk.String("recusandae"),
        Filter: map[string]interface{}{
            "quidem": "voluptas",
            "facilis": "placeat",
        },
        FilterGt: map[string]interface{}{
            "expedita": "deleniti",
            "a": "voluptate",
            "ullam": "unde",
        },
        FilterGteq: map[string]interface{}{
            "animi": "impedit",
            "ipsam": "corporis",
            "est": "error",
            "esse": "labore",
        },
        FilterLt: map[string]interface{}{
            "vero": "consectetur",
        },
        FilterLteq: map[string]interface{}{
            "inventore": "dolorem",
        },
        PerPage: sdk.Int(322017),
        SortBy: map[string]interface{}{
            "iste": "ex",
        },
        UserID: 367626,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntities != nil {
        // handle response
    }
}
```

## GetUsersUserIDCipherUses

List User Cipher Uses

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
    res, err := s.Users.GetUsersUserIDCipherUses(ctx, operations.GetUsersUserIDCipherUsesRequest{
        Cursor: sdk.String("soluta"),
        PerPage: sdk.Int(726227),
        UserID: 526907,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserCipherUseEntities != nil {
        // handle response
    }
}
```

## GetUsersUserIDGroups

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
    res, err := s.Users.GetUsersUserIDGroups(ctx, operations.GetUsersUserIDGroupsRequest{
        Cursor: sdk.String("dolorum"),
        GroupID: sdk.Int(487676),
        PerPage: sdk.Int(144691),
        UserID: 545,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserEntities != nil {
        // handle response
    }
}
```

## GetUsersUserIDPermissions

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
    res, err := s.Users.GetUsersUserIDPermissions(ctx, operations.GetUsersUserIDPermissionsRequest{
        Cursor: sdk.String("magni"),
        Filter: map[string]interface{}{
            "quae": "quae",
            "modi": "neque",
        },
        FilterPrefix: map[string]interface{}{
            "itaque": "et",
            "ipsum": "unde",
        },
        GroupID: sdk.String("nulla"),
        IncludeGroups: sdk.Bool(false),
        Path: sdk.String("distinctio"),
        PerPage: sdk.Int(802894),
        SortBy: map[string]interface{}{
            "quia": "nostrum",
        },
        UserID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionEntities != nil {
        // handle response
    }
}
```

## GetUsersUserIDPublicKeys

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
    res, err := s.Users.GetUsersUserIDPublicKeys(ctx, operations.GetUsersUserIDPublicKeysRequest{
        Cursor: sdk.String("libero"),
        PerPage: sdk.Int(115661),
        UserID: 663318,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntities != nil {
        // handle response
    }
}
```

## PatchUsersID

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
    res, err := s.Users.PatchUsersID(ctx, operations.PatchUsersIDRequest{
        RequestBody: &operations.PatchUsersIDRequestBody{
            AllowedIps: sdk.String("127.0.0.1"),
            AnnouncementsRead: sdk.Bool(false),
            AttachmentsPermission: sdk.Bool(true),
            AuthenticateUntil: types.MustTimeFromString("2000-01-01T01:00:00Z"),
            AuthenticationMethod: operations.PatchUsersIDRequestBodyAuthenticationMethodEnumPassword.ToPointer(),
            AvatarDelete: sdk.Bool(false),
            AvatarFile: &operations.PatchUsersIDRequestBodyAvatarFile{
                AvatarFile: "libero",
                Content: []byte("fugiat"),
            },
            BillingPermission: sdk.Bool(false),
            BypassInactiveDisable: sdk.Bool(false),
            BypassSiteAllowedIps: sdk.Bool(false),
            ChangePassword: sdk.String("officia"),
            ChangePasswordConfirmation: sdk.String("quos"),
            Company: sdk.String("ACME Corp."),
            DavPermission: sdk.Bool(true),
            Disabled: sdk.Bool(true),
            Email: sdk.String("Alden91@hotmail.com"),
            FtpPermission: sdk.Bool(true),
            GrantPermission: sdk.String("inventore"),
            GroupID: sdk.Int(49348),
            GroupIds: sdk.String("totam"),
            HeaderText: sdk.String("User-specific message."),
            ImportedPasswordHash: sdk.String("dolore"),
            Language: sdk.String("en"),
            Name: sdk.String("John Doe"),
            Notes: sdk.String("Internal notes on this user."),
            NotificationDailySendTime: sdk.Int(18),
            OfficeIntegrationEnabled: sdk.Bool(true),
            Password: sdk.String("eligendi"),
            PasswordConfirmation: sdk.String("distinctio"),
            PasswordValidityDays: sdk.Int(1),
            ReceiveAdminAlerts: sdk.Bool(true),
            Require2fa: operations.PatchUsersIDRequestBodyRequire2faEnumAlwaysRequire.ToPointer(),
            RequirePasswordChange: sdk.Bool(true),
            RestapiPermission: sdk.Bool(true),
            SelfManaged: sdk.Bool(true),
            SftpPermission: sdk.Bool(true),
            SiteAdmin: sdk.Bool(true),
            SkipWelcomeScreen: sdk.Bool(true),
            SslRequired: operations.PatchUsersIDRequestBodySslRequiredEnumAlwaysRequire.ToPointer(),
            SsoStrategyID: sdk.Int(1),
            SubscribeToNewsletter: sdk.Bool(true),
            TimeZone: sdk.String("Pacific Time (US & Canada)"),
            UserRoot: sdk.String("example"),
            Username: sdk.String("user"),
        },
        ID: 32273,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserEntity != nil {
        // handle response
    }
}
```

## PostUsers

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
    res, err := s.Users.PostUsers(ctx, operations.PostUsersRequestBody{
        AllowedIps: sdk.String("127.0.0.1"),
        AnnouncementsRead: sdk.Bool(false),
        AttachmentsPermission: sdk.Bool(true),
        AuthenticateUntil: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        AuthenticationMethod: operations.PostUsersRequestBodyAuthenticationMethodEnumPassword.ToPointer(),
        AvatarDelete: sdk.Bool(false),
        AvatarFile: &operations.PostUsersRequestBodyAvatarFile{
            AvatarFile: "autem",
            Content: []byte("esse"),
        },
        BillingPermission: sdk.Bool(false),
        BypassInactiveDisable: sdk.Bool(false),
        BypassSiteAllowedIps: sdk.Bool(false),
        ChangePassword: sdk.String("dolores"),
        ChangePasswordConfirmation: sdk.String("assumenda"),
        Company: sdk.String("ACME Corp."),
        DavPermission: sdk.Bool(true),
        Disabled: sdk.Bool(true),
        Email: sdk.String("Marcella.Schumm@gmail.com"),
        FtpPermission: sdk.Bool(true),
        GrantPermission: sdk.String("provident"),
        GroupID: sdk.Int(882284),
        GroupIds: sdk.String("necessitatibus"),
        HeaderText: sdk.String("User-specific message."),
        ImportedPasswordHash: sdk.String("tempore"),
        Language: sdk.String("en"),
        Name: sdk.String("John Doe"),
        Notes: sdk.String("Internal notes on this user."),
        NotificationDailySendTime: sdk.Int(18),
        OfficeIntegrationEnabled: sdk.Bool(true),
        Password: sdk.String("sint"),
        PasswordConfirmation: sdk.String("ea"),
        PasswordValidityDays: sdk.Int(1),
        ReceiveAdminAlerts: sdk.Bool(true),
        Require2fa: operations.PostUsersRequestBodyRequire2faEnumAlwaysRequire.ToPointer(),
        RequirePasswordChange: sdk.Bool(true),
        RestapiPermission: sdk.Bool(true),
        SelfManaged: sdk.Bool(true),
        SftpPermission: sdk.Bool(true),
        SiteAdmin: sdk.Bool(true),
        SkipWelcomeScreen: sdk.Bool(true),
        SslRequired: operations.PostUsersRequestBodySslRequiredEnumAlwaysRequire.ToPointer(),
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

## PostUsersId2faReset

Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.

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
    res, err := s.Users.PostUsersId2faReset(ctx, operations.PostUsersId2faResetRequest{
        ID: 421819,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersIDResendWelcomeEmail

Resend user welcome email

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
    res, err := s.Users.PostUsersIDResendWelcomeEmail(ctx, operations.PostUsersIDResendWelcomeEmailRequest{
        ID: 373511,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersIDUnlock

Unlock user who has been locked out due to failed logins.

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
    res, err := s.Users.PostUsersIDUnlock(ctx, operations.PostUsersIDUnlockRequest{
        ID: 702952,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersUserIDAPIKeys

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
    res, err := s.Users.PostUsersUserIDAPIKeys(ctx, operations.PostUsersUserIDAPIKeysRequest{
        RequestBody: &operations.PostUsersUserIDAPIKeysRequestBody{
            Description: sdk.String("example"),
            ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
            Name: sdk.String("My Main API Key"),
            Path: sdk.String("shared/docs"),
            PermissionSet: operations.PostUsersUserIDAPIKeysRequestBodyPermissionSetEnumFull.ToPointer(),
        },
        UserID: 515638,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## PostUsersUserIDPublicKeys

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
    res, err := s.Users.PostUsersUserIDPublicKeys(ctx, operations.PostUsersUserIDPublicKeysRequest{
        RequestBody: operations.PostUsersUserIDPublicKeysRequestBody{
            PublicKey: "corporis",
            Title: "My Main Key",
        },
        UserID: 889060,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntity != nil {
        // handle response
    }
}
```
