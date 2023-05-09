<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantRequestBody;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest(                new CreateAssistantRequestBody("provident", CreateAssistantRequestBodyTypeEnum.AGENT) {{
                                clientToken = "distinctio";
                                description = "quibusdam";
                                serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration() {{
                                    kmsKeyId = "unde";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req);

            if (res.createAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->