<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteReadSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteReadSetRequest req = new BatchDeleteReadSetRequest(                new BatchDeleteReadSetRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});, "nulla") {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            BatchDeleteReadSetResponse res = sdk.batchDeleteReadSet(req);

            if (res.batchDeleteReadSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->