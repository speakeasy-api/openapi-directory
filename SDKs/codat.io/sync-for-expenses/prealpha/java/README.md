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
import org.openapis.openapi.models.operations.GetCompanyConfigurationRequest;
import org.openapis.openapi.models.operations.GetCompanyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCompanyConfigurationRequest req = new GetCompanyConfigurationRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetCompanyConfigurationResponse res = sdk.configuration.getCompanyConfiguration(req);

            if (res.companyConfiguration != null) {
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


### [configuration](docs/configuration/README.md)

* [getCompanyConfiguration](docs/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](docs/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [connections](docs/connections/README.md)

* [createPartnerExpenseConnection](docs/connections/README.md#createpartnerexpenseconnection) - Create Partner Expense connection

### [expenses](docs/expenses/README.md)

* [createExpenseDataset](docs/expenses/README.md#createexpensedataset) - Create expense-transactions
* [uploadAttachment](docs/expenses/README.md#uploadattachment) - Upload attachment

### [mappingOptions](docs/mappingoptions/README.md)

* [getMappingOptions](docs/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sync/README.md)

* [intiateSync](docs/sync/README.md#intiatesync) - Initiate sync

### [syncStatus](docs/syncstatus/README.md)

* [getLastSuccessfulSync](docs/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/syncstatus/README.md#getlatestsync) - Latest sync status
* [getSyncById](docs/syncstatus/README.md#getsyncbyid) - Get Sync status
* [listSyncs](docs/syncstatus/README.md#listsyncs) - List sync statuses

### [transactionStatus](docs/transactionstatus/README.md)

* [getSyncTransaction](docs/transactionstatus/README.md#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](docs/transactionstatus/README.md#listsynctransactions) - Get Sync transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
