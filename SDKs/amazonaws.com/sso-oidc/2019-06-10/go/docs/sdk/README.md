# SDK

## Overview

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p> <b>Considerations for Using This Guide</b> </p> <p>Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.</p> <ul> <li> <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in future releases.</p> </li> <li> <p>The service emits only OIDC access tokens, such that obtaining a new token (For example, token refresh) requires explicit user re-authentication.</p> </li> <li> <p>The access tokens provided by this service grant access to all AWS account entitlements assigned to an IAM Identity Center user, not just a particular application.</p> </li> <li> <p>The documentation in this guide does not describe the mechanism to convert the access token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference Guide</i>.</p> </li> </ul> <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/oidc/>
### Available Operations

* [CreateToken](#createtoken) - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* [RegisterClient](#registerclient) - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* [StartDeviceAuthorization](#startdeviceauthorization) - Initiates device authorization by requesting a pair of verification codes from the authorization service.

## CreateToken

Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateToken(ctx, operations.CreateTokenRequest{
        RequestBody: operations.CreateTokenRequestBody{
            ClientID: "molestiae",
            ClientSecret: "minus",
            Code: sdk.String("placeat"),
            DeviceCode: sdk.String("voluptatum"),
            GrantType: "iusto",
            RedirectURI: sdk.String("excepturi"),
            RefreshToken: sdk.String("nisi"),
            Scope: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```

## RegisterClient

Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterClient(ctx, operations.RegisterClientRequest{
        RequestBody: operations.RegisterClientRequestBody{
            ClientName: "at",
            ClientType: "at",
            Scopes: []string{
                "molestiae",
                "quod",
                "quod",
                "esse",
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterClientResponse != nil {
        // handle response
    }
}
```

## StartDeviceAuthorization

Initiates device authorization by requesting a pair of verification codes from the authorization service.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartDeviceAuthorization(ctx, operations.StartDeviceAuthorizationRequest{
        RequestBody: operations.StartDeviceAuthorizationRequestBody{
            ClientID: "fugit",
            ClientSecret: "deleniti",
            StartURL: "hic",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDeviceAuthorizationResponse != nil {
        // handle response
    }
}
```
