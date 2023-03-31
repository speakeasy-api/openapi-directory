<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApplicationHeaders;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;

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

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                headers = new CreateApplicationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateApplicationRequestBody() {{
                    applicationDescription = "illum";
                    applicationName = "vel";
                    clientToken = "error";
                    roleArn = "deserunt";
                    tags = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                }};
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->