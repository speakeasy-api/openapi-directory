<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityResponse;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCheckLayerAvailabilityRequest req = new BatchCheckLayerAvailabilityRequest(                new BatchCheckLayerAvailabilityRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla") {{
                                registryId = "corrupti";
                            }};, BatchCheckLayerAvailabilityXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            BatchCheckLayerAvailabilityResponse res = sdk.batchCheckLayerAvailability(req);

            if (res.batchCheckLayerAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->