<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetDeploymentsRequestBody;
import org.openapis.openapi.models.operations.GetDeploymentsRequest;
import org.openapis.openapi.models.operations.GetDeploymentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentsRequest req = new GetDeploymentsRequest() {{
                requestBody = new GetDeploymentsRequestBody() {{
                    deviceFleetName = "corrupti";
                    deviceName = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            GetDeploymentsResponse res = sdk.getDeployments(req);

            if (res.getDeploymentsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->