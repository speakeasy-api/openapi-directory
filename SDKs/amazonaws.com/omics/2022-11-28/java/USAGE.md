<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteReadSetPathParams;
import org.openapis.openapi.models.operations.BatchDeleteReadSetHeaders;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteReadSetResponse;

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

            BatchDeleteReadSetRequest req = new BatchDeleteReadSetRequest() {{
                pathParams = new BatchDeleteReadSetPathParams() {{
                    sequenceStoreId = "corrupti";
                }};
                headers = new BatchDeleteReadSetHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchDeleteReadSetRequestBody() {{
                    ids = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            BatchDeleteReadSetResponse res = sdk.batchDeleteReadSet(req);

            if (res.batchDeleteReadSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->