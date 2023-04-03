<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetTracesRequestBody;
import org.openapis.openapi.models.operations.BatchGetTracesRequest;
import org.openapis.openapi.models.operations.BatchGetTracesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetTracesRequest req = new BatchGetTracesRequest() {{
                nextToken = "corrupti";
                requestBody = new BatchGetTracesRequestBody() {{
                    nextToken = "provident";
                    traceIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }}            

            BatchGetTracesResponse res = sdk.batchGetTraces(req);

            if (res.batchGetTracesResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->