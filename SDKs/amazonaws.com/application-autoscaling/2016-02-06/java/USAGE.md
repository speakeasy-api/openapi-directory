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

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest() {{
                headers = new DeleteScalingPolicyHeaders() {{
                    xAmzAlgorithm = "vitae";
                    xAmzContentSha256 = "fugit";
                    xAmzCredential = "non";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "autem";
                    xAmzSignature = "dolores";
                    xAmzSignedHeaders = "aperiam";
                    xAmzTarget = "AnyScaleFrontendService.DeleteScalingPolicy";
                }};
                request = new DeleteScalingPolicyRequest() {{
                    policyName = "culpa";
                    resourceId = "quaerat";
                    scalableDimension = "rds:cluster:ReadReplicaCount";
                    serviceNamespace = "custom-resource";
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