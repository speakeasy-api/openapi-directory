<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelClusterRequest;
import org.openapis.openapi.models.operations.CancelClusterResponse;
import org.openapis.openapi.models.operations.CancelClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelClusterRequest req = new CancelClusterRequest(                new CancelClusterRequest("provident");, CancelClusterXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_CLUSTER) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelClusterResponse res = sdk.cancelCluster(req);

            if (res.cancelClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->