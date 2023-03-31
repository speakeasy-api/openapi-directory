<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityHeaders;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityResponse;
import org.openapis.openapi.models.shared.BatchCheckLayerAvailabilityRequest;

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

            BatchCheckLayerAvailabilityRequest req = new BatchCheckLayerAvailabilityRequest() {{
                headers = new BatchCheckLayerAvailabilityHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability";
                }};
                request = new BatchCheckLayerAvailabilityRequest() {{
                    layerDigests = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    registryId = "iure";
                    repositoryName = "magnam";
                }};
            }};            

            BatchCheckLayerAvailabilityResponse res = sdk.batchCheckLayerAvailability(req);

            if (res.batchCheckLayerAvailabilityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->