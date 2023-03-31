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

import org.openapis.openapi.models.operations.GetApiActivitySecurity;
import org.openapis.openapi.models.operations.GetApiActivityQueryParams;
import org.openapis.openapi.models.operations.GetApiActivityRequest;
import org.openapis.openapi.models.operations.GetApiActivityResponse;
import org.openapis.openapi.models.shared.SchemeConnectToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                security = new GetApiActivitySecurity() {{
                    connectToken = new SchemeConnectToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetApiActivityQueryParams() {{
                    limit = 10;
                    offset = 50;
                }};
            }};            

            GetApiActivityResponse res = sdk.activity.getApiActivity(req);

            if (res.apiRequests.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### activity

* `getApiActivity` - Retrieve a list of API Requests that have been made.

### files

* `downloadFileByID` - Get the content of a File
* `getDetailsOfFileById` - Get the details of a File
* `getItemFiles` - Get all the files inside an Item

### health

* `getHeartbeat` - Ping the server for liveness
* `getServerHealth` - Get state of the server and its dependencies.

### items

* `createVaultItem` - Create a new Item
* `deleteVaultItem` - Delete an Item
* `getVaultItemById` - Get the details of an Item
* `getVaultItems` - Get all items for inside a Vault
* `patchVaultItem` - Update a subset of Item attributes
* `updateVaultItem` - Update an Item

### metrics

* `getPrometheusMetrics` - Query server for exposed Prometheus metrics

### vaults

* `getVaultById` - Get Vault details and metadata
* `getVaults` - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
