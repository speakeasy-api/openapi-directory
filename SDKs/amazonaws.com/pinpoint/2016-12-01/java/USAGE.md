<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAppHeaders;
import org.openapis.openapi.models.operations.CreateAppRequestBodyCreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;

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

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAppRequestBody() {{
                    createApplicationRequest = new CreateAppRequestBodyCreateApplicationRequest() {{
                        name = "illum";
                        tags = new java.util.HashMap<String, String>() {{
                            put("error", "deserunt");
                            put("suscipit", "iure");
                        }};
                    }};
                }};
            }};            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->