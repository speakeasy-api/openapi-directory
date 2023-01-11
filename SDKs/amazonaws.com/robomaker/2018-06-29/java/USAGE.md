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

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest() {{
                headers = new BatchDeleteWorldsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new BatchDeleteWorldsRequestBody() {{
                    worlds = new String[]() {{
                        add("fugit"),
                        add("et"),
                        add("nihil"),
                    }};
                }};
            }};

            BatchDeleteWorldsResponse res = sdk.batchDeleteWorlds(req);

            if (res.batchDeleteWorldsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->