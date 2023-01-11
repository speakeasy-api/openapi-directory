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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AmazonAthena.BatchGetNamedQuery";
                }};
                request = new BatchGetNamedQueryInput() {{
                    namedQueryIds = new String[]() {{
                        add("et"),
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