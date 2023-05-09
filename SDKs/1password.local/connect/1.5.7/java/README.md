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
import org.openapis.openapi.models.operations.GetApiActivityRequest;
import org.openapis.openapi.models.operations.GetApiActivityResponse;
import org.openapis.openapi.models.operations.GetApiActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                limit = 10L;
                offset = 50L;
            }};            

            GetApiActivityResponse res = sdk.activity.getApiActivity(req, new GetApiActivitySecurity("corrupti") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiRequests != null) {
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


### [activity](docs/activity/README.md)

* [getApiActivity](docs/activity/README.md#getapiactivity) - Retrieve a list of API Requests that have been made.

### [files](docs/files/README.md)

* [downloadFileByID](docs/files/README.md#downloadfilebyid) - Get the content of a File
* [getDetailsOfFileById](docs/files/README.md#getdetailsoffilebyid) - Get the details of a File
* [getItemFiles](docs/files/README.md#getitemfiles) - Get all the files inside an Item

### [health](docs/health/README.md)

* [getHeartbeat](docs/health/README.md#getheartbeat) - Ping the server for liveness
* [getServerHealth](docs/health/README.md#getserverhealth) - Get state of the server and its dependencies.

### [items](docs/items/README.md)

* [createVaultItem](docs/items/README.md#createvaultitem) - Create a new Item
* [deleteVaultItem](docs/items/README.md#deletevaultitem) - Delete an Item
* [getVaultItemById](docs/items/README.md#getvaultitembyid) - Get the details of an Item
* [getVaultItems](docs/items/README.md#getvaultitems) - Get all items for inside a Vault
* [patchVaultItem](docs/items/README.md#patchvaultitem) - Update a subset of Item attributes
* [updateVaultItem](docs/items/README.md#updatevaultitem) - Update an Item

### [metrics](docs/metrics/README.md)

* [getPrometheusMetrics](docs/metrics/README.md#getprometheusmetrics) - Query server for exposed Prometheus metrics

### [vaults](docs/vaults/README.md)

* [getVaultById](docs/vaults/README.md#getvaultbyid) - Get Vault details and metadata
* [getVaults](docs/vaults/README.md#getvaults) - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
