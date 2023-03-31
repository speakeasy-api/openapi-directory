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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsQueryParams;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                queryParams = new GetAlmawsV1TaskListsRsLendingRequestsQueryParams() {{
                    library = "corrupti";
                    partner = "provident";
                    printed = "distinctio";
                    reported = "quibusdam";
                    requestedFormat = "unde";
                    status = "nulla";
                    suppliedFormat = "corrupti";
                }};
            }};            

            GetAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req);

            if (res.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### lendingRequests

* `getAlmawsV1TaskListsRsLendingRequests` - Get Lending Requests
* `postAlmawsV1TaskListsRsLendingRequests` - Act on Lending Requests

### printouts

* `getAlmawsV1TaskListsPrintouts` - Retrieve Printouts
* `getAlmawsV1TaskListsPrintoutsPrintoutId` - Retrieve a Printout
* `postAlmawsV1TaskListsPrintouts` - Act on Printouts
* `postAlmawsV1TaskListsPrintoutsPrintoutId` - Printout Service

### requestedResources

* `getAlmawsV1TaskListsRequestedResources` - Get Requested Resources
* `postAlmawsV1TaskListsRequestedResources` - Act on Requested Resources

### test

* `getAlmawsV1TaskListsTest` - GET Task-lists Test API
* `postAlmawsV1TaskListsTest` - POST Task-lists Test API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
