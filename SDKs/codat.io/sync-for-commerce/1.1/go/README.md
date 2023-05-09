# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/codat.io/sync-for-commerce/1.1/go
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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.CreateCompany(ctx, shared.CreateCompany{
        Name: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Company != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CompanyManagement](docs/companymanagement/README.md)

* [CreateCompany](docs/companymanagement/README.md#createcompany) - Create a sync for commerce company
* [CreateConnection](docs/companymanagement/README.md#createconnection) - Create a data connection
* [ListCompanies](docs/companymanagement/README.md#listcompanies) - List companies
* [ListConnections](docs/companymanagement/README.md#listconnections) - List data connections
* [UpdateConnection](docs/companymanagement/README.md#updateconnection) - Update data connection

### [Configuration](docs/configuration/README.md)

* [GetConfiguration](docs/configuration/README.md#getconfiguration) - Retrieve config preferences set for a company.
* [GetSyncStatus](docs/configuration/README.md#getsyncstatus) - Get status for a company's syncs
* [SetConfiguration](docs/configuration/README.md#setconfiguration) - Create or update configuration.

### [Integrations](docs/integrations/README.md)

* [GetIntegrationBranding](docs/integrations/README.md#getintegrationbranding) - Get branding for an integration
* [ListIntegrations](docs/integrations/README.md#listintegrations) - List information on Codat's supported integrations

### [Sync](docs/sync/README.md)

* [RequestSync](docs/sync/README.md#requestsync) - Run a Commerce sync from the last successful sync
* [RequestSyncForDateRange](docs/sync/README.md#requestsyncfordaterange) - Run a Commerce sync from a given date range

### [SyncFlowPreferences](docs/syncflowpreferences/README.md)

* [GetConfigTextSyncFlow](docs/syncflowpreferences/README.md#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [GetSyncFlowURL](docs/syncflowpreferences/README.md#getsyncflowurl) - Retrieve sync flow url
* [GetVisibleAccounts](docs/syncflowpreferences/README.md#getvisibleaccounts) - List visible accounts
* [UpdateConfigTextSyncFlow](docs/syncflowpreferences/README.md#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [UpdateVisibleAccountsSyncFlow](docs/syncflowpreferences/README.md#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
