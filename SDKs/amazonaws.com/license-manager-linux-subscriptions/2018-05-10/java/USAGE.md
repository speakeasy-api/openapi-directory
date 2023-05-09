<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSettingsRequest;
import org.openapis.openapi.models.operations.GetServiceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSettingsRequest req = new GetServiceSettingsRequest() {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }};            

            GetServiceSettingsResponse res = sdk.getServiceSettings(req);

            if (res.getServiceSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->