# Account

## Overview

The account APIs allow you review and change account settings. Many account settings will have immediate effects on all current and future users, so consider adding a user facing confirmation step before sending an update call.

### Available Operations

* [GetAccount](#getaccount) - Get account settings
* [UpdateAccount](#updateaccount) - Update account settings

## GetAccount

Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.

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
    res, err := s.Account.GetAccount(ctx, operations.GetAccountRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        Include: sdk.String("masterUser"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```

## UpdateAccount

Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.

**Notes**

- You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.

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
    res, err := s.Account.UpdateAccount(ctx, operations.UpdateAccountRequest{
        RequestBody: &operations.UpdateAccountUpdateAccountRequestBody{
            AccountOnboarding: sdk.Bool(true),
            AllowedIPRanges: []UpdateAccountUpdateAccountRequestBodyAllowedIPRanges{
                operations.UpdateAccountUpdateAccountRequestBodyAllowedIPRanges{
                    IPEnd: sdk.String("151.183.216.154"),
                    IPStart: sdk.String("219.139.216.108"),
                },
                operations.UpdateAccountUpdateAccountRequestBodyAllowedIPRanges{
                    IPEnd: sdk.String("159.165.98.112"),
                    IPStart: sdk.String("76.228.14.246"),
                },
                operations.UpdateAccountUpdateAccountRequestBodyAllowedIPRanges{
                    IPEnd: sdk.String("69.98.122.202"),
                    IPStart: sdk.String("207.135.122.145"),
                },
            },
            BrandingSettings: &operations.UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues{
                CompanyName: sdk.String("nisi"),
                CustomEmail: sdk.String("custom@example.com"),
                Theme: sdk.String("default"),
            },
            ComplexPasswords: sdk.Bool(false),
            CustomSignature: sdk.String("recusandae"),
            EmailContent: sdk.String("Great news, your new account is ready! For your records, we've listed information you'll use to log in below: FTP Server: [[ftpserver]] Username (Web and FTP access): [[username]] [[setpassword]]"),
            EmailSubject: sdk.String("ExaVault File Sharing Account"),
            ExternalDomain: sdk.String("temporibus"),
            Quota: &operations.UpdateAccountUpdateAccountRequestBodyAccountQuotaValues{
                NoticeEnabled: sdk.Bool(false),
                NoticeThreshold: sdk.Int64(71036),
                TransactionsNoticeEnabled: sdk.Bool(false),
                TransactionsNoticeThreshold: sdk.Int64(337396),
            },
            SecureOnly: sdk.Bool(false),
            ShowReferralLinks: sdk.Bool(false),
        },
        EvAccessToken: "veritatis",
        EvAPIKey: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```
