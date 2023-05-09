# SourceOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [CompleteSourceOAuth](#completesourceoauth) - Given a source def ID generate an access/refresh token etc.
* [GetSourceOAuthConsent](#getsourceoauthconsent) - Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
* [SetInstancewideSourceOauthParams](#setinstancewidesourceoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## CompleteSourceOAuth

Given a source def ID generate an access/refresh token etc.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SourceOauth.CompleteSourceOAuth(ctx, shared.CompleteSourceOauthRequest{
        OAuthInputConfiguration: sdk.String("nam"),
        QueryParams: map[string]interface{}{
            "vitae": "mollitia",
        },
        RedirectURL: sdk.String("asperiores"),
        SourceDefinitionID: "dd788624-189e-4b44-873f-5033f19dbf12",
        SourceID: sdk.String("5ce4152e-ab9c-4d7e-9224-a6a0e123b784"),
        WorkspaceID: "7ec59e1f-67f3-4c4c-8e4b-6d7696ff3c57",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteOAuthResponse != nil {
        // handle response
    }
}
```

## GetSourceOAuthConsent

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SourceOauth.GetSourceOAuthConsent(ctx, shared.SourceOauthConsentRequest{
        OAuthInputConfiguration: sdk.String("eius"),
        RedirectURL: "dignissimos",
        SourceDefinitionID: "501357e4-4f51-4f8b-884c-3197e193a245",
        SourceID: sdk.String("467f9487-4c2d-45cc-8972-233e66bd8fe5"),
        WorkspaceID: "d00b979e-f203-4873-a059-0ccc10964003",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthConsentRead != nil {
        // handle response
    }
}
```

## SetInstancewideSourceOauthParams

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SourceOauth.SetInstancewideSourceOauthParams(ctx, shared.SetInstancewideSourceOauthParamsRequestBody{
        Params: map[string]interface{}{
            "sequi": "rerum",
        },
        SourceDefinitionID: "3e5044f6-5fe7-42dc-8077-d0cc3f408efc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
