<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchUpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchUpdateClusterRequest;
import org.openapis.openapi.models.operations.BatchUpdateClusterResponse;
import org.openapis.openapi.models.shared.BatchUpdateClusterRequest;
import org.openapis.openapi.models.shared.ServiceUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest() {{
                batchUpdateClusterRequest = new BatchUpdateClusterRequest() {{
                    clusterNames = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    serviceUpdate = new ServiceUpdateRequest() {{
                        serviceUpdateNameToApply = "unde";
                    }};
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "AmazonMemoryDB.BatchUpdateCluster";
            }}            

            BatchUpdateClusterResponse res = sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->