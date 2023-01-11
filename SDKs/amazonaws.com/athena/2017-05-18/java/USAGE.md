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

            BatchGetNamedQueryRequest req = new BatchGetNamedQueryRequest() {{
                headers = new BatchGetNamedQueryHeaders() {{
                    xAmzAlgorithm = "maxime";
                    xAmzContentSha256 = "libero";
                    xAmzCredential = "qui";
                    xAmzDate = "ea";
                    xAmzSecurityToken = "porro";
                    xAmzSignature = "labore";
                    xAmzSignedHeaders = "dolore";
                    xAmzTarget = "AmazonAthena.BatchGetNamedQuery";
                }};
                request = new BatchGetNamedQueryInput() {{
                    namedQueryIds = new String[]() {{
                        add("et"),
                        add("omnis"),
                        add("ut"),
                    }};
                }};
            }};

            BatchGetNamedQueryResponse res = sdk.batchGetNamedQuery(req);

            if (res.batchGetNamedQueryOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->