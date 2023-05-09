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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.PostUsers2FALogin(ctx, shared.Users2FALoginRequest{
        Code: "123456",
        Login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    })
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


### [Authentication](docs/authentication/README.md)

* [PostUsers2FALogin](docs/authentication/README.md#postusers2falogin) - Second factor authentication.
* [PostUsersLogin](docs/authentication/README.md#postuserslogin) - Create an authentication token

### [Discovery](docs/discovery/README.md)

* [GetNamespace](docs/discovery/README.md#getnamespace) - Get namespace
* [GetNamespaces](docs/discovery/README.md#getnamespaces) - Get namespaces and repos

### [Namespaces](docs/namespaces/README.md)

* [GetNamespaceDataByTimespan](docs/namespaces/README.md#getnamespacedatabytimespan) - Get namespace data for timespan
* [GetNamespaceTimespanMetadata](docs/namespaces/README.md#getnamespacetimespanmetadata) - Get namespace metadata for timespan
* [GetNamespaceTimespans](docs/namespaces/README.md#getnamespacetimespans) - Get timespans with data
* [GetNamespaceYears](docs/namespaces/README.md#getnamespaceyears) - Get years with data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
