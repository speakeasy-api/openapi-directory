# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/1password.com/events/1.2.0/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIV1.GetAuditEvents(ctx, operations.GetAuditEventsRequestBody{}, operations.GetAuditEventsSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuditEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIV1](docs/apiv1/README.md)

* [GetAuditEvents](docs/apiv1/README.md#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [GetItemUsages](docs/apiv1/README.md#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [GetSignInAttempts](docs/apiv1/README.md#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

### [Auth](docs/auth/README.md)

* [~~GetAuthIntrospect~~](docs/auth/README.md#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [GetAuthIntrospectV2](docs/auth/README.md#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
