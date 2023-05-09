<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteScalingPolicyResponse;
import org.openapis.openapi.models.operations.DeleteScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest(                new DeleteScalingPolicyRequest("provident", "distinctio", ScalableDimensionEnum.KAFKA_BROKER_STORAGE_VOLUME_SIZE, ServiceNamespaceEnum.COMPREHEND);, DeleteScalingPolicyXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DELETE_SCALING_POLICY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            DeleteScalingPolicyResponse res = sdk.deleteScalingPolicy(req);

            if (res.deleteScalingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->