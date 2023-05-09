<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetTracesRequest;
import org.openapis.openapi.models.operations.BatchGetTracesRequestBody;
import org.openapis.openapi.models.operations.BatchGetTracesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetTracesRequest req = new BatchGetTracesRequest(                new BatchGetTracesRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}) {{
                                nextToken = "nulla";
                            }};) {{
                nextToken = "corrupti";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            BatchGetTracesResponse res = sdk.batchGetTraces(req);

            if (res.batchGetTracesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->