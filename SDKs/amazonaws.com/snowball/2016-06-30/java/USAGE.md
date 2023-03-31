<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelClusterHeaders;
import org.openapis.openapi.models.operations.CancelClusterRequest;
import org.openapis.openapi.models.operations.CancelClusterResponse;
import org.openapis.openapi.models.shared.CancelClusterRequest;

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

            CancelClusterRequest req = new CancelClusterRequest() {{
                headers = new CancelClusterHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSIESnowballJobManagementService.CancelCluster";
                }};
                request = new CancelClusterRequest() {{
                    clusterId = "illum";
                }};
            }};            

            CancelClusterResponse res = sdk.cancelCluster(req);

            if (res.cancelClusterResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->