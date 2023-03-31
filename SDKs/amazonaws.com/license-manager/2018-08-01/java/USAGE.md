<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptGrantXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptGrantHeaders;
import org.openapis.openapi.models.operations.AcceptGrantRequest;
import org.openapis.openapi.models.operations.AcceptGrantResponse;
import org.openapis.openapi.models.shared.AcceptGrantRequest;

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

            AcceptGrantRequest req = new AcceptGrantRequest() {{
                headers = new AcceptGrantHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSLicenseManager.AcceptGrant";
                }};
                request = new AcceptGrantRequest() {{
                    grantArn = "illum";
                }};
            }};            

            AcceptGrantResponse res = sdk.acceptGrant(req);

            if (res.acceptGrantResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->