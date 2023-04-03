<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.operations.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteScalingPolicyResponse;
import org.openapis.openapi.models.shared.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest() {{
                deleteScalingPolicyRequest = new DeleteScalingPolicyRequest() {{
                    policyName = "corrupti";
                    resourceId = "provident";
                    scalableDimension = "cassandra:table:ReadCapacityUnits";
                    serviceNamespace = "kafka";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "AnyScaleFrontendService.DeleteScalingPolicy";
            }}            

            DeleteScalingPolicyResponse res = sdk.deleteScalingPolicy(req);

            if (res.deleteScalingPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->