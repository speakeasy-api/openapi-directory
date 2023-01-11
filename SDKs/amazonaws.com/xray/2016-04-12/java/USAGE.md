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
                    nextToken = "ut";
                }};
                headers = new BatchGetTracesHeaders() {{
                    xAmzAlgorithm = "possimus";
                    xAmzContentSha256 = "iusto";
                    xAmzCredential = "illum";
                    xAmzDate = "ex";
                    xAmzSecurityToken = "eos";
                    xAmzSignature = "asperiores";
                    xAmzSignedHeaders = "dicta";
                }};
                request = new BatchGetTracesRequestBody() {{
                    nextToken = "sunt";
                    traceIds = new String[]() {{
                        add("omnis"),
                        add("nobis"),
                        add("et"),
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