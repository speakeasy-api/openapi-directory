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
import org.openapis.openapi.models.operations.CreateDestinationHeaders;
import org.openapis.openapi.models.operations.CreateDestinationRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateDestinationRequestBody;
import org.openapis.openapi.models.operations.CreateDestinationRequest;
import org.openapis.openapi.models.operations.CreateDestinationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateDestinationRequest req = new CreateDestinationRequest() {{
                headers = new CreateDestinationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateDestinationRequestBody() {{
                    additionalFixedProperties = "illum";
                    clientToken = "vel";
                    name = "error";
                    site = "deserunt";
                    state = "DISABLED";
                }};
            }};            

            CreateDestinationResponse res = sdk.createDestination(req);

            if (res.createDestinationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDestination` - Grants permission to create a destination
* `createSite` - Grants permission to create a site
* `createWorker` - Grants permission to create a worker
* `createWorkerFleet` - Grants permission to create a worker fleet
* `deleteDestination` - Grants permission to delete a destination
* `deleteSite` - Grants permission to delete a site
* `deleteWorker` - Grants permission to delete a worker
* `deleteWorkerFleet` - Grants permission to delete a worker fleet
* `getDestination` - Grants permission to get a destination
* `getSite` - Grants permission to get a site
* `getWorker` - Grants permission to get a worker
* `getWorkerFleet` - Grants permission to get a worker fleet
* `listDestinations` - Grants permission to list destinations
* `listSites` - Grants permission to list sites
* `listWorkerFleets` - Grants permission to list worker fleets
* `listWorkers` - Grants permission to list workers
* `updateDestination` - Grants permission to update a destination
* `updateSite` - Grants permission to update a site
* `updateWorker` - Grants permission to update a worker
* `updateWorkerFleet` - Grants permission to update a worker fleet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
