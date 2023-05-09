# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/authentiq.io/1.0/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.Authorize(ctx, operations.AuthorizeRequest{
        ClientID: "corrupti",
        Display: sdk.String("provident"),
        MaxAge: sdk.Int64(715190),
        Nonce: sdk.String("quibusdam"),
        Prompt: sdk.String("unde"),
        RedirectURI: "nulla",
        ResponseMode: sdk.String("corrupti"),
        ResponseType: "illum",
        Scope: "vel",
        State: "error",
        UILocales: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Authentication](docs/authentication/README.md)

* [Authorize](docs/authentication/README.md#authorize) - Authenticate a user
* [Token](docs/authentication/README.md#token) - Obtain an ID Token
* [UserInfo](docs/authentication/README.md#userinfo) - Retrieve a user profile

### [ClientManagement](docs/clientmanagement/README.md)

* [Client](docs/clientmanagement/README.md#client) - List clients
* [ClientClientID](docs/clientmanagement/README.md#clientclientid) - Delete a client
* [CreateClient](docs/clientmanagement/README.md#createclient) - Register a client
* [GetClient](docs/clientmanagement/README.md#getclient) - View a client
* [UpdateClient](docs/clientmanagement/README.md#updateclient) - Update a client

### [SessionManagement](docs/sessionmanagement/README.md)

* [AuthorizeIframe](docs/sessionmanagement/README.md#authorizeiframe) - Include a session iframe
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
