<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequest;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteWorldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest(                new BatchDeleteWorldsRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchDeleteWorldsResponse res = sdk.batchDeleteWorlds(req);

            if (res.batchDeleteWorldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->