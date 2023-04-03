<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetFieldRequestBody;
import org.openapis.openapi.models.operations.BatchGetFieldRequest;
import org.openapis.openapi.models.operations.BatchGetFieldResponse;
import org.openapis.openapi.models.shared.FieldIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetFieldRequest req = new BatchGetFieldRequest() {{
                requestBody = new BatchGetFieldRequestBody() {{
                    fields = new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                        add(new FieldIdentifier() {{
                            id = "provident";
                        }}),
                        add(new FieldIdentifier() {{
                            id = "distinctio";
                        }}),
                        add(new FieldIdentifier() {{
                            id = "quibusdam";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                domainId = "suscipit";
            }}            

            BatchGetFieldResponse res = sdk.batchGetField(req);

            if (res.batchGetFieldResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->