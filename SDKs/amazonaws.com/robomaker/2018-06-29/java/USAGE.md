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
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "ea";
                    xAmzCredential = "sapiente";
                    xAmzDate = "consequatur";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "voluptate";
                    xAmzSignedHeaders = "dolore";
                }};
                request = new BatchDeleteWorldsRequestBody() {{
                    worlds = new String[]() {{
                        add("quia"),
                        add("eum"),
                        add("iure"),
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