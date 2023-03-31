<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCliTokenPathParams;
import org.openapis.openapi.models.operations.CreateCliTokenHeaders;
import org.openapis.openapi.models.operations.CreateCliTokenRequest;
import org.openapis.openapi.models.operations.CreateCliTokenResponse;

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

            CreateCliTokenRequest req = new CreateCliTokenRequest() {{
                pathParams = new CreateCliTokenPathParams() {{
                    name = "corrupti";
                }};
                headers = new CreateCliTokenHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CreateCliTokenResponse res = sdk.createCliToken(req);

            if (res.createCliTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->