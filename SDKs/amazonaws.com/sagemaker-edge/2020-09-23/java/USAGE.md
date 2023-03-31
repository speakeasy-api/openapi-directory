<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetDeploymentsHeaders;
import org.openapis.openapi.models.operations.GetDeploymentsRequestBody;
import org.openapis.openapi.models.operations.GetDeploymentsRequest;
import org.openapis.openapi.models.operations.GetDeploymentsResponse;

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

            GetDeploymentsRequest req = new GetDeploymentsRequest() {{
                headers = new GetDeploymentsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetDeploymentsRequestBody() {{
                    deviceFleetName = "illum";
                    deviceName = "vel";
                }};
            }};            

            GetDeploymentsResponse res = sdk.getDeployments(req);

            if (res.getDeploymentsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->