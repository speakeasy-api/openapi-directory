<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsRequest;
import org.openapis.openapi.models.operations.GetApplicationComponentDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationComponentDetailsRequest req = new GetApplicationComponentDetailsRequest() {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "provident";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "corrupti";
                applicationComponentId = "illum";
            }}            

            GetApplicationComponentDetailsResponse res = sdk.getApplicationComponentDetails(req);

            if (res.getApplicationComponentDetailsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->