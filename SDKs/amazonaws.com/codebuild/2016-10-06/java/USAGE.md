<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteBuildsRequest;
import org.openapis.openapi.models.operations.BatchDeleteBuildsResponse;
import org.openapis.openapi.models.operations.BatchDeleteBuildsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteBuildsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteBuildsRequest req = new BatchDeleteBuildsRequest(                new BatchDeleteBuildsInput(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});, BatchDeleteBuildsXAmzTargetEnum.CODE_BUILD20161006_BATCH_DELETE_BUILDS) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchDeleteBuildsResponse res = sdk.batchDeleteBuilds(req);

            if (res.batchDeleteBuildsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->