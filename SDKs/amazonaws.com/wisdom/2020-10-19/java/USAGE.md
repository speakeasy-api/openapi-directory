<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateAssistantRequestBody;
import org.openapis.openapi.models.operations.CreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest() {{
                requestBody = new CreateAssistantRequestBody() {{
                    clientToken = "corrupti";
                    description = "provident";
                    name = "distinctio";
                    serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration() {{
                        kmsKeyId = "quibusdam";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    type = "AGENT";
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }}            

            CreateAssistantResponse res = sdk.createAssistant(req);

            if (res.createAssistantResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->