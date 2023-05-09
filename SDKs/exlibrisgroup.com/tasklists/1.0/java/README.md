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
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                library = "provident";
                partner = "distinctio";
                printed = "quibusdam";
                reported = "unde";
                requestedFormat = "nulla";
                status = "corrupti";
                suppliedFormat = "illum";
            }};            

            GetAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req);

            if (res.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != null) {
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


### [lendingRequests](docs/lendingrequests/README.md)

* [getAlmawsV1TaskListsRsLendingRequests](docs/lendingrequests/README.md#getalmawsv1tasklistsrslendingrequests) - Get Lending Requests
* [postAlmawsV1TaskListsRsLendingRequests](docs/lendingrequests/README.md#postalmawsv1tasklistsrslendingrequests) - Act on Lending Requests

### [printouts](docs/printouts/README.md)

* [getAlmawsV1TaskListsPrintouts](docs/printouts/README.md#getalmawsv1tasklistsprintouts) - Retrieve Printouts
* [getAlmawsV1TaskListsPrintoutsPrintoutId](docs/printouts/README.md#getalmawsv1tasklistsprintoutsprintoutid) - Retrieve a Printout
* [postAlmawsV1TaskListsPrintouts](docs/printouts/README.md#postalmawsv1tasklistsprintouts) - Act on Printouts
* [postAlmawsV1TaskListsPrintoutsPrintoutId](docs/printouts/README.md#postalmawsv1tasklistsprintoutsprintoutid) - Printout Service

### [requestedResources](docs/requestedresources/README.md)

* [getAlmawsV1TaskListsRequestedResources](docs/requestedresources/README.md#getalmawsv1tasklistsrequestedresources) - Get Requested Resources
* [postAlmawsV1TaskListsRequestedResources](docs/requestedresources/README.md#postalmawsv1tasklistsrequestedresources) - Act on Requested Resources

### [test](docs/test/README.md)

* [getAlmawsV1TaskListsTest](docs/test/README.md#getalmawsv1taskliststest) - GET Task-lists Test API
* [postAlmawsV1TaskListsTest](docs/test/README.md#postalmawsv1taskliststest) - POST Task-lists Test API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
