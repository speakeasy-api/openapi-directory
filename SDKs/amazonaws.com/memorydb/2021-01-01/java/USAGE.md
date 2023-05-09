<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateClusterRequest;
import org.openapis.openapi.models.operations.BatchUpdateClusterResponse;
import org.openapis.openapi.models.operations.BatchUpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchUpdateClusterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest(                new BatchUpdateClusterRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}) {{
                                serviceUpdate = new ServiceUpdateRequest() {{
                                    serviceUpdateNameToApply = "nulla";
                                }};;
                            }};, BatchUpdateClusterXAmzTargetEnum.AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            BatchUpdateClusterResponse res = sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->