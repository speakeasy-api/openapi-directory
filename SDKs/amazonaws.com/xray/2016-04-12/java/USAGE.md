<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchGetTracesRequest req = new BatchGetTracesRequest() {{
                queryParams = new BatchGetTracesQueryParams() {{
                    nextToken = "sit";
                }};
                headers = new BatchGetTracesHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new BatchGetTracesRequestBody() {{
                    nextToken = "fugit";
                    traceIds = new String[]() {{
                        add("nihil"),
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