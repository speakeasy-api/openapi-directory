<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequestBody;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequest;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExtendedSourceServerRequest req = new CreateExtendedSourceServerRequest() {{
                requestBody = new CreateExtendedSourceServerRequestBody() {{
                    sourceServerArn = "corrupti";
                    tags = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            CreateExtendedSourceServerResponse res = sdk.createExtendedSourceServer(req);

            if (res.createExtendedSourceServerResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->