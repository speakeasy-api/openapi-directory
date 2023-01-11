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

            BulkPublishRequest req = new BulkPublishRequest() {{
                pathParams = new BulkPublishPathParams() {{
                    identityPoolId = "molestias";
                }};
                headers = new BulkPublishHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "quia";
                    xAmzCredential = "ipsa";
                    xAmzDate = "sit";
                    xAmzSecurityToken = "repellat";
                    xAmzSignature = "non";
                    xAmzSignedHeaders = "facilis";
                }};
            }};

            BulkPublishResponse res = sdk.bulkPublish(req);

            if (res.bulkPublishResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->