<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateActionEnum;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateRequest;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateResponse;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAbortEnvironmentUpdateRequest req = new GETAbortEnvironmentUpdateRequest(GETAbortEnvironmentUpdateActionEnum.ABORT_ENVIRONMENT_UPDATE, GETAbortEnvironmentUpdateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "provident";
                environmentName = "distinctio";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            GETAbortEnvironmentUpdateResponse res = sdk.getAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->