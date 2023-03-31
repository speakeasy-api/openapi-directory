<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.operations.DeleteScalingPolicyHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest() {{
                headers = new DeleteScalingPolicyHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AnyScaleFrontendService.DeleteScalingPolicy";
                }};
                request = new DeleteScalingPolicyRequest() {{
                    policyName = "illum";
                    resourceId = "vel";
                    scalableDimension = "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits";
                    serviceNamespace = "lambda";
                }};
            }};            

            DeleteScalingPolicyResponse res = sdk.deleteScalingPolicy(req);

            if (res.deleteScalingPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->