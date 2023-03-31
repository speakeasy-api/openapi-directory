<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAssistantHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest() {{
                headers = new CreateAssistantHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAssistantRequestBody() {{
                    clientToken = "illum";
                    description = "vel";
                    name = "error";
                    serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration() {{
                        kmsKeyId = "deserunt";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    type = "AGENT";
                }};
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req);

            if (res.createAssistantResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->