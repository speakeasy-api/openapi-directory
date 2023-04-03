<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateLinkRequestBody;
import org.openapis.openapi.models.operations.CreateLinkRequest;
import org.openapis.openapi.models.operations.CreateLinkResponse;
import org.openapis.openapi.models.shared.ResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLinkRequest req = new CreateLinkRequest() {{
                requestBody = new CreateLinkRequestBody() {{
                    labelTemplate = "corrupti";
                    resourceTypes = new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                        add("AWS::XRay::Trace"),
                        add("AWS::XRay::Trace"),
                        add("AWS::Logs::LogGroup"),
                    }};
                    sinkIdentifier = "nulla";
                    tags = new java.util.HashMap<String, String>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }}            

            CreateLinkResponse res = sdk.createLink(req);

            if (res.createLinkOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->