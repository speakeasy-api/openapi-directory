<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetFieldPathParams;
import org.openapis.openapi.models.operations.BatchGetFieldHeaders;
import org.openapis.openapi.models.operations.BatchGetFieldRequestBody;
import org.openapis.openapi.models.operations.BatchGetFieldRequest;
import org.openapis.openapi.models.operations.BatchGetFieldResponse;
import org.openapis.openapi.models.shared.FieldIdentifier;

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

            BatchGetFieldRequest req = new BatchGetFieldRequest() {{
                pathParams = new BatchGetFieldPathParams() {{
                    domainId = "corrupti";
                }};
                headers = new BatchGetFieldHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchGetFieldRequestBody() {{
                    fields = new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                        add(new FieldIdentifier() {{
                            id = "error";
                        }}),
                        add(new FieldIdentifier() {{
                            id = "deserunt";
                        }}),
                    }};
                }};
            }};            

            BatchGetFieldResponse res = sdk.batchGetField(req);

            if (res.batchGetFieldResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->