<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetSchemaPathParams;
import org.openapis.openapi.models.operations.BatchGetSchemaHeaders;
import org.openapis.openapi.models.operations.BatchGetSchemaRequestBody;
import org.openapis.openapi.models.operations.BatchGetSchemaRequest;
import org.openapis.openapi.models.operations.BatchGetSchemaResponse;

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

            BatchGetSchemaRequest req = new BatchGetSchemaRequest() {{
                pathParams = new BatchGetSchemaPathParams() {{
                    collaborationIdentifier = "corrupti";
                }};
                headers = new BatchGetSchemaHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchGetSchemaRequestBody() {{
                    names = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            BatchGetSchemaResponse res = sdk.batchGetSchema(req);

            if (res.batchGetSchemaOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->