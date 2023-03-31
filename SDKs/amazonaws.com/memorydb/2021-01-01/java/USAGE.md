<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchUpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchUpdateClusterHeaders;
import org.openapis.openapi.models.operations.BatchUpdateClusterRequest;
import org.openapis.openapi.models.operations.BatchUpdateClusterResponse;
import org.openapis.openapi.models.shared.BatchUpdateClusterRequest;
import org.openapis.openapi.models.shared.ServiceUpdateRequest;

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

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest() {{
                headers = new BatchUpdateClusterHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonMemoryDB.BatchUpdateCluster";
                }};
                request = new BatchUpdateClusterRequest() {{
                    clusterNames = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    serviceUpdate = new ServiceUpdateRequest() {{
                        serviceUpdateNameToApply = "iure";
                    }};
                }};
            }};            

            BatchUpdateClusterResponse res = sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->