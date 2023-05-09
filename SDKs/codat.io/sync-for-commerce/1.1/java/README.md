# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompanyResponse;
import org.openapis.openapi.models.shared.CreateCompany;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateCompany req = new CreateCompany("provident");            

            CreateCompanyResponse res = sdk.companyManagement.createCompany(req);

            if (res.company != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companyManagement](docs/companymanagement/README.md)

* [createCompany](docs/companymanagement/README.md#createcompany) - Create a sync for commerce company
* [createConnection](docs/companymanagement/README.md#createconnection) - Create a data connection
* [listCompanies](docs/companymanagement/README.md#listcompanies) - List companies
* [listConnections](docs/companymanagement/README.md#listconnections) - List data connections
* [updateConnection](docs/companymanagement/README.md#updateconnection) - Update data connection

### [configuration](docs/configuration/README.md)

* [getConfiguration](docs/configuration/README.md#getconfiguration) - Retrieve config preferences set for a company.
* [getSyncStatus](docs/configuration/README.md#getsyncstatus) - Get status for a company's syncs
* [setConfiguration](docs/configuration/README.md#setconfiguration) - Create or update configuration.

### [integrations](docs/integrations/README.md)

* [getIntegrationBranding](docs/integrations/README.md#getintegrationbranding) - Get branding for an integration
* [listIntegrations](docs/integrations/README.md#listintegrations) - List information on Codat's supported integrations

### [sync](docs/sync/README.md)

* [requestSync](docs/sync/README.md#requestsync) - Run a Commerce sync from the last successful sync
* [requestSyncForDateRange](docs/sync/README.md#requestsyncfordaterange) - Run a Commerce sync from a given date range

### [syncFlowPreferences](docs/syncflowpreferences/README.md)

* [getConfigTextSyncFlow](docs/syncflowpreferences/README.md#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [getSyncFlowUrl](docs/syncflowpreferences/README.md#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](docs/syncflowpreferences/README.md#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](docs/syncflowpreferences/README.md#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](docs/syncflowpreferences/README.md#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
