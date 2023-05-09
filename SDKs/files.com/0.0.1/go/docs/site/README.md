# Site

## Overview

Operations about sites

### Available Operations

* [GetSite](#getsite) - Show site settings
* [GetSiteAPIKeys](#getsiteapikeys) - List Api Keys
* [GetSiteDNSRecords](#getsitednsrecords) - Show site DNS configuration.
* [GetSiteIPAddresses](#getsiteipaddresses) - List IP Addresses associated with the current site
* [GetSiteUsage](#getsiteusage) - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* [PatchSite](#patchsite) - Update site settings.
* [PostSiteAPIKeys](#postsiteapikeys) - Create Api Key
* [PostSiteTestWebhook](#postsitetestwebhook) - Test webhook.

## GetSite

Show site settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Site.GetSite(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteEntity != nil {
        // handle response
    }
}
```

## GetSiteAPIKeys

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
    res, err := s.Site.GetSiteAPIKeys(ctx, operations.GetSiteAPIKeysRequest{
        Cursor: sdk.String("debitis"),
        Filter: map[string]interface{}{
            "porro": "suscipit",
            "dolorem": "fugit",
        },
        FilterGt: map[string]interface{}{
            "fuga": "ratione",
            "animi": "necessitatibus",
            "nulla": "consequatur",
            "quasi": "et",
        },
        FilterGteq: map[string]interface{}{
            "natus": "occaecati",
            "suscipit": "adipisci",
        },
        FilterLt: map[string]interface{}{
            "magni": "doloribus",
        },
        FilterLteq: map[string]interface{}{
            "necessitatibus": "ipsa",
            "tempora": "nihil",
            "molestiae": "dicta",
            "iusto": "esse",
        },
        PerPage: sdk.Int(508390),
        SortBy: map[string]interface{}{
            "reiciendis": "vel",
            "architecto": "fugiat",
            "doloremque": "dicta",
            "odio": "tempora",
        },
        UserID: sdk.Int(458259),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntities != nil {
        // handle response
    }
}
```

## GetSiteDNSRecords

Show site DNS configuration.

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
    res, err := s.Site.GetSiteDNSRecords(ctx, operations.GetSiteDNSRecordsRequest{
        Cursor: sdk.String("ex"),
        PerPage: sdk.Int(235263),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSRecordEntities != nil {
        // handle response
    }
}
```

## GetSiteIPAddresses

List IP Addresses associated with the current site

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
    res, err := s.Site.GetSiteIPAddresses(ctx, operations.GetSiteIPAddressesRequest{
        Cursor: sdk.String("aliquid"),
        PerPage: sdk.Int(58870),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPAddressEntities != nil {
        // handle response
    }
}
```

## GetSiteUsage

Get the most recent usage snapshot (usage data for billing purposes) for a Site.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Site.GetSiteUsage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UsageSnapshotEntity != nil {
        // handle response
    }
}
```

## PatchSite

Update site settings.

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
    res, err := s.Site.PatchSite(ctx, operations.PatchSiteRequestBody{
        ActiveSftpHostKeyID: sdk.Int(671384),
        AllowBundleNames: sdk.Bool(false),
        Allowed2faMethodBypassForFtpSftpDav: sdk.Bool(false),
        Allowed2faMethodSms: sdk.Bool(false),
        Allowed2faMethodTotp: sdk.Bool(false),
        Allowed2faMethodU2f: sdk.Bool(false),
        Allowed2faMethodWebauthn: sdk.Bool(false),
        Allowed2faMethodYubi: sdk.Bool(false),
        AllowedCountries: sdk.String("sunt"),
        AllowedIps: sdk.String("nostrum"),
        AskAboutOverwrites: sdk.Bool(false),
        BundleActivityNotifications: sdk.String("fugiat"),
        BundleExpiration: sdk.Int(713767),
        BundlePasswordRequired: sdk.Bool(false),
        BundleRegistrationNotifications: sdk.String("aliquid"),
        BundleRequireShareRecipient: sdk.Bool(false),
        BundleUploadReceiptNotifications: sdk.String("officia"),
        BundleWatermarkAttachmentDelete: sdk.Bool(false),
        BundleWatermarkAttachmentFile: &operations.PatchSiteRequestBodyBundleWatermarkAttachmentFile{
            BundleWatermarkAttachmentFile: "suscipit",
            Content: []byte("aliquid"),
        },
        BundleWatermarkValue: map[string]interface{}{
            "eum": "voluptas",
        },
        Color2Left: sdk.String("iste"),
        Color2Link: sdk.String("id"),
        Color2Text: sdk.String("ab"),
        Color2Top: sdk.String("error"),
        Color2TopText: sdk.String("possimus"),
        CustomNamespace: sdk.Bool(false),
        DaysToRetainBackups: sdk.Int(913992),
        DefaultTimeZone: sdk.String("mollitia"),
        DesktopApp: sdk.Bool(false),
        DesktopAppSessionIPPinning: sdk.Bool(false),
        DesktopAppSessionLifetime: sdk.Int(671794),
        Disable2faWithDelay: sdk.Bool(false),
        DisableFilesCertificateGeneration: sdk.Bool(false),
        DisablePasswordReset: sdk.Bool(false),
        DisableUsersFromInactivityPeriodDays: sdk.Int(726343),
        DisallowedCountries: sdk.String("ad"),
        Domain: sdk.String("deleniti"),
        DomainHstsHeader: sdk.Bool(false),
        DomainLetsencryptChain: sdk.String("enim"),
        Email: sdk.String("Robb.Jakubowski28@gmail.com"),
        FolderPermissionsGroupsOnly: sdk.Bool(false),
        FtpEnabled: sdk.Bool(false),
        Icon128Delete: sdk.Bool(false),
        Icon128File: &operations.PatchSiteRequestBodyIcon128File{
            Content: []byte("ad"),
            Icon128File: "expedita",
        },
        Icon16Delete: sdk.Bool(false),
        Icon16File: &operations.PatchSiteRequestBodyIcon16File{
            Content: []byte("voluptatem"),
            Icon16File: "molestias",
        },
        Icon32Delete: sdk.Bool(false),
        Icon32File: &operations.PatchSiteRequestBodyIcon32File{
            Content: []byte("cum"),
            Icon32File: "aliquid",
        },
        Icon48Delete: sdk.Bool(false),
        Icon48File: &operations.PatchSiteRequestBodyIcon48File{
            Content: []byte("beatae"),
            Icon48File: "voluptatum",
        },
        ImmutableFiles: sdk.Bool(false),
        IncludePasswordInWelcomeEmail: sdk.Bool(false),
        Language: sdk.String("omnis"),
        LdapBaseDn: sdk.String("veritatis"),
        LdapDomain: sdk.String("rerum"),
        LdapEnabled: sdk.Bool(false),
        LdapGroupAction: sdk.String("est"),
        LdapGroupExclusion: sdk.String("culpa"),
        LdapGroupInclusion: sdk.String("voluptatem"),
        LdapHost: sdk.String("sapiente"),
        LdapHost2: sdk.String("officiis"),
        LdapHost3: sdk.String("architecto"),
        LdapPasswordChange: sdk.String("fuga"),
        LdapPasswordChangeConfirmation: sdk.String("pariatur"),
        LdapPort: sdk.Int(891315),
        LdapSecure: sdk.Bool(false),
        LdapType: sdk.String("voluptatem"),
        LdapUserAction: sdk.String("alias"),
        LdapUserIncludeGroups: sdk.String("deleniti"),
        LdapUsername: sdk.String("earum"),
        LdapUsernameField: sdk.String("ex"),
        LoginHelpText: sdk.String("sapiente"),
        LogoDelete: sdk.Bool(false),
        LogoFile: &operations.PatchSiteRequestBodyLogoFile{
            Content: []byte("rem"),
            LogoFile: "minus",
        },
        MaxPriorPasswords: sdk.Int(365100),
        MobileApp: sdk.Bool(false),
        MobileAppSessionIPPinning: sdk.Bool(false),
        MobileAppSessionLifetime: sdk.Int(992074),
        MotdText: sdk.String("ratione"),
        MotdUseForFtp: sdk.Bool(false),
        MotdUseForSftp: sdk.Bool(false),
        Name: sdk.String("Dorothy Stanton"),
        NonSsoGroupsAllowed: sdk.Bool(false),
        NonSsoUsersAllowed: sdk.Bool(false),
        OfficeIntegrationAvailable: sdk.Bool(false),
        OfficeIntegrationType: sdk.String("quibusdam"),
        OptOutGlobal: sdk.Bool(false),
        PasswordMinLength: sdk.Int(720528),
        PasswordRequireLetter: sdk.Bool(false),
        PasswordRequireMixed: sdk.Bool(false),
        PasswordRequireNumber: sdk.Bool(false),
        PasswordRequireSpecial: sdk.Bool(false),
        PasswordRequireUnbreached: sdk.Bool(false),
        PasswordRequirementsApplyToBundles: sdk.Bool(false),
        PasswordValidityDays: sdk.Int(373216),
        PinAllRemoteServersToSiteRegion: sdk.Bool(false),
        ReplyToEmail: sdk.String("culpa"),
        Require2fa: sdk.Bool(false),
        Require2faUserType: sdk.String("dolor"),
        SessionExpiry: sdk.Float64(3073.76),
        SessionExpiryMinutes: sdk.Int(80532),
        SessionPinnedByIP: sdk.Bool(false),
        SftpEnabled: sdk.Bool(false),
        SftpHostKeyType: sdk.String("deleniti"),
        SftpInsecureCiphers: sdk.Bool(false),
        SftpUserRootEnabled: sdk.Bool(false),
        SharingEnabled: sdk.Bool(false),
        ShowRequestAccessLink: sdk.Bool(false),
        SiteFooter: sdk.String("veritatis"),
        SiteHeader: sdk.String("tempora"),
        SMTPAddress: sdk.String("dolor"),
        SMTPAuthentication: sdk.String("consequatur"),
        SMTPFrom: sdk.String("architecto"),
        SMTPPassword: sdk.String("sit"),
        SMTPPort: sdk.Int(265039),
        SMTPUsername: sdk.String("fugit"),
        SslRequired: sdk.Bool(false),
        Subdomain: sdk.String("ab"),
        TLSDisabled: sdk.Bool(false),
        UploadsViaEmailAuthentication: sdk.Bool(false),
        UseProvidedModifiedAt: sdk.Bool(false),
        UserLockout: sdk.Bool(false),
        UserLockoutLockPeriod: sdk.Int(513760),
        UserLockoutTries: sdk.Int(65604),
        UserLockoutWithin: sdk.Int(222658),
        UserRequestsEnabled: sdk.Bool(false),
        UserRequestsNotifyAdmins: sdk.Bool(false),
        WelcomeCustomText: sdk.String("fugiat"),
        WelcomeEmailCc: sdk.String("ipsam"),
        WelcomeEmailEnabled: sdk.Bool(false),
        WelcomeEmailSubject: sdk.String("consequuntur"),
        WelcomeScreen: sdk.String("ipsa"),
        WindowsModeFtp: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteEntity != nil {
        // handle response
    }
}
```

## PostSiteAPIKeys

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
    res, err := s.Site.PostSiteAPIKeys(ctx, operations.PostSiteAPIKeysRequestBody{
        Description: sdk.String("example"),
        ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        Name: sdk.String("My Main API Key"),
        Path: sdk.String("shared/docs"),
        PermissionSet: operations.PostSiteAPIKeysRequestBodyPermissionSetEnumFull.ToPointer(),
        UserID: sdk.Int(559682),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## PostSiteTestWebhook

Test webhook.

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
    res, err := s.Site.PostSiteTestWebhook(ctx, operations.PostSiteTestWebhookRequestBody{
        Action: sdk.String("test"),
        Body: map[string]interface{}{
            "impedit": "officiis",
            "esse": "necessitatibus",
            "sed": "veniam",
            "nesciunt": "expedita",
        },
        Encoding: sdk.String("RAW"),
        Headers: map[string]interface{}{
            "vel": "voluptatum",
            "magnam": "exercitationem",
        },
        Method: sdk.String("GET"),
        URL: "https://www.site.com/...",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusEntity != nil {
        // handle response
    }
}
```
