# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-oidc/2019-06-10/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateTokenRequest{
        RequestBody: operations.CreateTokenRequestBody{
            ClientID: "corrupti",
            ClientSecret: "provident",
            Code: "distinctio",
            DeviceCode: "quibusdam",
            GrantType: "unde",
            RedirectURI: "nulla",
            RefreshToken: "corrupti",
            Scope: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateToken` - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* `RegisterClient` - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* `StartDeviceAuthorization` - Initiates device authorization by requesting a pair of verification codes from the authorization service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
