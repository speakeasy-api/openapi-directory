# Sessions

## Overview

A session represents an authorized session for a consumer. A session is a JWT token that is valid for a short time (1h by default). Use this session token to open Hosted Vault or Vault JS for a consumer.

### Available Operations

* [SessionsCreate](#sessionscreate) - Create Session

## SessionsCreate

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
URL to allow temporary access to manage their integrations and settings.

Note: This is a short lived token that will expire after 1 hour (TTL: 3600).


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
    res, err := s.Sessions.SessionsCreate(ctx, operations.SessionsCreateRequest{
        Session: &shared.Session{
            ConsumerMetadata: &shared.ConsumerMetadata{
                AccountName: sdk.String("SpaceX"),
                Email: sdk.String("elon@musk.com"),
                Image: sdk.String("https://www.spacex.com/static/images/share.jpg"),
                UserName: sdk.String("Elon Musk"),
            },
            CustomConsumerSettings: map[string]interface{}{
                "omnis": "necessitatibus",
                "distinctio": "asperiores",
                "nihil": "ipsum",
            },
            RedirectURI: sdk.String("https://mysaas.com/dashboard"),
            Settings: &shared.SessionSettings{
                AllowActions: []shared.SessionSettingsAllowActionsEnum{
                    shared.SessionSettingsAllowActionsEnumReauthorize,
                    shared.SessionSettingsAllowActionsEnumDisable,
                },
                AutoRedirect: sdk.Bool(false),
                HideGuides: sdk.Bool(false),
                HideResourceSettings: sdk.Bool(false),
                IsolationMode: sdk.Bool(false),
                SandboxMode: sdk.Bool(false),
                SessionLength: sdk.String("30m"),
                ShowLogs: sdk.Bool(false),
                ShowSidebar: sdk.Bool(false),
                ShowSuggestions: sdk.Bool(false),
                UnifiedApis: []shared.UnifiedAPIIDEnum{
                    shared.UnifiedAPIIDEnumCrm,
                    shared.UnifiedAPIIDEnumCrm,
                },
            },
            Theme: &shared.SessionTheme{
                Favicon: sdk.String("https://res.cloudinary.com/apideck/icons/intercom"),
                Logo: sdk.String("https://res.cloudinary.com/apideck/icons/intercom"),
                PrimaryColor: sdk.String("#286efa"),
                PrivacyURL: sdk.String("https://compliance.apideck.com/privacy-policy"),
                SidepanelBackgroundColor: sdk.String("#286efa"),
                SidepanelTextColor: sdk.String("#FFFFFF"),
                TermsURL: sdk.String("https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e"),
                VaultName: sdk.String("Intercom"),
            },
        },
        XApideckAppID: "aspernatur",
        XApideckConsumerID: "perferendis",
    }, operations.SessionsCreateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSessionResponse != nil {
        // handle response
    }
}
```
