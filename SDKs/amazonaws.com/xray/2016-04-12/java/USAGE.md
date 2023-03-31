<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetTracesQueryParams;
import org.openapis.openapi.models.operations.BatchGetTracesHeaders;
import org.openapis.openapi.models.operations.BatchGetTracesRequestBody;
import org.openapis.openapi.models.operations.BatchGetTracesRequest;
import org.openapis.openapi.models.operations.BatchGetTracesResponse;

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

            BatchGetTracesRequest req = new BatchGetTracesRequest() {{
                queryParams = new BatchGetTracesQueryParams() {{
                    nextToken = "corrupti";
                }};
                headers = new BatchGetTracesHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchGetTracesRequestBody() {{
                    nextToken = "vel";
                    traceIds = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                }};
            }};            

            BatchGetTracesResponse res = sdk.batchGetTraces(req);

            if (res.batchGetTracesResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->