<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateLinkHeaders;
import org.openapis.openapi.models.operations.CreateLinkRequestBody;
import org.openapis.openapi.models.operations.CreateLinkRequest;
import org.openapis.openapi.models.operations.CreateLinkResponse;
import org.openapis.openapi.models.shared.ResourceTypeEnum;

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

            CreateLinkRequest req = new CreateLinkRequest() {{
                headers = new CreateLinkHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateLinkRequestBody() {{
                    labelTemplate = "illum";
                    resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                        add("AWS::Logs::LogGroup"),
                        add("AWS::Logs::LogGroup"),
                    }};
                    sinkIdentifier = "suscipit";
                    tags = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                }};
            }};            

            CreateLinkResponse res = sdk.createLink(req);

            if (res.createLinkOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->