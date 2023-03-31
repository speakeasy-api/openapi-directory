<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerHeaders;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequestBody;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequest;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerResponse;

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

            CreateExtendedSourceServerRequest req = new CreateExtendedSourceServerRequest() {{
                headers = new CreateExtendedSourceServerHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateExtendedSourceServerRequestBody() {{
                    sourceServerArn = "illum";
                    tags = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                }};
            }};            

            CreateExtendedSourceServerResponse res = sdk.createExtendedSourceServer(req);

            if (res.createExtendedSourceServerResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->