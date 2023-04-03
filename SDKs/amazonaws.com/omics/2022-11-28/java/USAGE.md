<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteReadSetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteReadSetRequest req = new BatchDeleteReadSetRequest() {{
                requestBody = new BatchDeleteReadSetRequestBody() {{
                    ids = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                sequenceStoreId = "suscipit";
            }}            

            BatchDeleteReadSetResponse res = sdk.batchDeleteReadSet(req);

            if (res.batchDeleteReadSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->