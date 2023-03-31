<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsPathParams;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsHeaders;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsRequest;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsResponse;

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

            GetApplicationComponentDetailsRequest req = new GetApplicationComponentDetailsRequest() {{
                pathParams = new GetApplicationComponentDetailsPathParams() {{
                    applicationComponentId = "corrupti";
                }};
                headers = new GetApplicationComponentDetailsHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            GetApplicationComponentDetailsResponse res = sdk.getApplicationComponentDetails(req);

            if (res.getApplicationComponentDetailsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->