<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BulkPublishPathParams;
import org.openapis.openapi.models.operations.BulkPublishHeaders;
import org.openapis.openapi.models.operations.BulkPublishRequest;
import org.openapis.openapi.models.operations.BulkPublishResponse;

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

            BulkPublishRequest req = new BulkPublishRequest() {{
                pathParams = new BulkPublishPathParams() {{
                    identityPoolId = "corrupti";
                }};
                headers = new BulkPublishHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
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