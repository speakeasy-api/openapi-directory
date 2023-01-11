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
                    xAmzAlgorithm = "debitis";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "tenetur";
                    xAmzDate = "aspernatur";
                    xAmzSecurityToken = "minus";
                    xAmzSignature = "molestiae";
                    xAmzSignedHeaders = "rerum";
                    xAmzTarget = "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability";
                }};
                request = new BatchCheckLayerAvailabilityRequest() {{
                    layerDigests = new String[]() {{
                        add("illo"),
                        add("quas"),
                    }};
                    registryId = "in";
                    repositoryName = "ipsum";
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