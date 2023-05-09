# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ably.net/control/v1/go
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
    res, err := s.Apps.DeleteAppsID(ctx, operations.DeleteAppsIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.DeleteAppsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
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


### [Apps](docs/apps/README.md)

* [DeleteAppsID](docs/apps/README.md#deleteappsid) - Deletes an app
* [GetAccountsAccountIDApps](docs/apps/README.md#getaccountsaccountidapps) - Lists account apps
* [PatchAppsID](docs/apps/README.md#patchappsid) - Updates an app
* [PostAccountsAccountIDApps](docs/apps/README.md#postaccountsaccountidapps) - Creates an app
* [PostAppsIDPkcs12](docs/apps/README.md#postappsidpkcs12) - Updates app's APNS info from a .p12 file

### [Keys](docs/keys/README.md)

* [GetAppsAppIDKeys](docs/keys/README.md#getappsappidkeys) - Lists app keys
* [PatchAppsAppIDKeysKeyID](docs/keys/README.md#patchappsappidkeyskeyid) - Updates a key
* [PostAppsAppIDKeys](docs/keys/README.md#postappsappidkeys) - Creates a key
* [PostAppsAppIDKeysKeyIDRevoke](docs/keys/README.md#postappsappidkeyskeyidrevoke) - Revokes a key

### [Namespaces](docs/namespaces/README.md)

* [DeleteAppsAppIDNamespacesNamespaceID](docs/namespaces/README.md#deleteappsappidnamespacesnamespaceid) - Deletes a namespace
* [GetAppsAppIDNamespaces](docs/namespaces/README.md#getappsappidnamespaces) - Lists namespaces
* [PatchAppsAppIDNamespacesNamespaceID](docs/namespaces/README.md#patchappsappidnamespacesnamespaceid) - Updates a namespace
* [PostAppsAppIDNamespaces](docs/namespaces/README.md#postappsappidnamespaces) - Creates a namespace

### [Queues](docs/queues/README.md)

* [DeleteAppsAppIDQueuesQueueID](docs/queues/README.md#deleteappsappidqueuesqueueid) - Deletes a queue
* [GetAppsAppIDQueues](docs/queues/README.md#getappsappidqueues) - Lists queues
* [PostAppsAppIDQueues](docs/queues/README.md#postappsappidqueues) - Creates a queue

### [Rules](docs/rules/README.md)

* [DeleteAppsAppIDRulesRuleID](docs/rules/README.md#deleteappsappidrulesruleid) - Deletes a Integration Rule
* [GetAppsAppIDRules](docs/rules/README.md#getappsappidrules) - Lists Integration rules
* [GetAppsAppIDRulesRuleID](docs/rules/README.md#getappsappidrulesruleid) - Gets a Integration Rule by ID
* [PatchAppsAppIDRulesRuleID](docs/rules/README.md#patchappsappidrulesruleid) - Updates a Integration Rule
* [PostAppsAppIDRules](docs/rules/README.md#postappsappidrules) - Creates a Integration Rule

### [Tokens](docs/tokens/README.md)

* [GetMe](docs/tokens/README.md#getme) - Get token details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
