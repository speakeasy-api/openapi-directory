<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateActionEnum;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateVersionEnum;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateRequest;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAbortEnvironmentUpdateRequest req = new GETAbortEnvironmentUpdateRequest() {{
                action = "AbortEnvironmentUpdate";
                environmentId = "corrupti";
                environmentName = "provident";
                version = "2010-12-01";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            GETAbortEnvironmentUpdateResponse res = sdk.getAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->