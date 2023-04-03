<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelClusterRequest;
import org.openapis.openapi.models.operations.CancelClusterResponse;
import org.openapis.openapi.models.shared.CancelClusterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelClusterRequest req = new CancelClusterRequest() {{
                cancelClusterRequest = new CancelClusterRequest() {{
                    clusterId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AWSIESnowballJobManagementService.CancelCluster";
            }}            

            CancelClusterResponse res = sdk.cancelCluster(req);

            if (res.cancelClusterResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->