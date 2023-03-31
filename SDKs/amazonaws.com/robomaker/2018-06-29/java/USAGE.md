<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteWorldsHeaders;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequest;
import org.openapis.openapi.models.operations.BatchDeleteWorldsResponse;

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

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest() {{
                headers = new BatchDeleteWorldsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchDeleteWorldsRequestBody() {{
                    worlds = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
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