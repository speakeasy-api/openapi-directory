# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/docker.com/dvp/1.0.0/go
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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := shared.Users2FALoginRequest{
        Code: "123456",
        Login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    }

    ctx := context.Background()
    res, err := s.Authentication.PostUsers2FALogin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersLoginSuccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Authentication

* `PostUsers2FALogin` - Second factor authentication.
* `PostUsersLogin` - Create an authentication token

### Discovery

* `GetNamespace` - Get namespace
* `GetNamespaces` - Get namespaces and repos

### Namespaces

* `GetNamespaceDataByTimespan` - Get namespace data for timespan
* `GetNamespaceTimespanMetadata` - Get namespace metadata for timespan
* `GetNamespaceTimespans` - Get timespans with data
* `GetNamespaceYears` - Get years with data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
