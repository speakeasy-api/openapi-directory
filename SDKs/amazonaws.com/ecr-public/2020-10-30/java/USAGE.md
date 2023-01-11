<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchCheckLayerAvailabilityRequest req = new BatchCheckLayerAvailabilityRequest() {{
                headers = new BatchCheckLayerAvailabilityHeaders() {{
                    xAmzAlgorithm = "adipisci";
                    xAmzContentSha256 = "dolorem";
                    xAmzCredential = "quas";
                    xAmzDate = "eum";
                    xAmzSecurityToken = "distinctio";
                    xAmzSignature = "nostrum";
                    xAmzSignedHeaders = "sed";
                    xAmzTarget = "SpencerFrontendService.BatchCheckLayerAvailability";
                }};
                request = new BatchCheckLayerAvailabilityRequest() {{
                    layerDigests = new String[]() {{
                        add("totam"),
                        add("sit"),
                    }};
                    registryId = "et";
                    repositoryName = "et";
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