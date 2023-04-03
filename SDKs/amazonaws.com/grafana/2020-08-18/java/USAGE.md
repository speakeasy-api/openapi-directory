<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateLicenseLicenseTypeEnum;
import org.openapis.openapi.models.operations.AssociateLicenseRequest;
import org.openapis.openapi.models.operations.AssociateLicenseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateLicenseRequest req = new AssociateLicenseRequest() {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "provident";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "corrupti";
                licenseType = "ENTERPRISE_FREE_TRIAL";
                workspaceId = "vel";
            }}            

            AssociateLicenseResponse res = sdk.associateLicense(req);

            if (res.associateLicenseResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->