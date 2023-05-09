# DestinationOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [CompleteDestinationOAuth](#completedestinationoauth) - Given a destination def ID generate an access/refresh token etc.
* [GetDestinationOAuthConsent](#getdestinationoauthconsent) - Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
* [SetInstancewideDestinationOauthParams](#setinstancewidedestinationoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## CompleteDestinationOAuth

Given a destination def ID generate an access/refresh token etc.

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
    res, err := s.DestinationOauth.CompleteDestinationOAuth(ctx, shared.CompleteDestinationOAuthRequest{
        DestinationDefinitionID: "0e115c80-bff9-4185-84ec-42defcce8f19",
        DestinationID: sdk.String("77773e63-562a-47b4-88f0-5e3d48fdaf31"),
        OAuthInputConfiguration: sdk.String("nesciunt"),
        QueryParams: map[string]interface{}{
            "illo": "repellat",
            "nemo": "doloribus",
            "possimus": "unde",
        },
        RedirectURL: sdk.String("incidunt"),
        WorkspaceID: "259c0b36-f25e-4a94-8f3b-756c11f6c37a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteOAuthResponse != nil {
        // handle response
    }
}
```

## GetDestinationOAuthConsent

Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

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
    res, err := s.DestinationOauth.GetDestinationOAuthConsent(ctx, shared.DestinationOauthConsentRequest{
        DestinationDefinitionID: "51262438-35bb-4c05-a23a-45cefc5fde10",
        DestinationID: sdk.String("a0ce2169-e510-4019-86dc-5e34762799bf"),
        OAuthInputConfiguration: sdk.String("facilis"),
        RedirectURL: "quidem",
        WorkspaceID: "e6949fb2-bb4e-4cae-ac3d-5db3adebd5da",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthConsentRead != nil {
        // handle response
    }
}
```

## SetInstancewideDestinationOauthParams

Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


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
    res, err := s.DestinationOauth.SetInstancewideDestinationOauthParams(ctx, shared.SetInstancewideDestinationOauthParamsRequestBody{
        DestinationDefinitionID: "ea4c506a-8aa9-44c0-a644-cf5e9d9a4578",
        Params: map[string]interface{}{
            "facere": "impedit",
            "quasi": "deserunt",
            "quod": "laboriosam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
