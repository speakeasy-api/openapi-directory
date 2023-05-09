<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequestBodyCreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequestBody(                new CreateAppRequestBodyCreateApplicationRequest() {{
                                                name = "Kelvin Sporer";
                                                tags = new java.util.HashMap<String, String>() {{
                                                    put("illum", "vel");
                                                    put("error", "deserunt");
                                                    put("suscipit", "iure");
                                                }};
                                            }};);) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->