<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateLicenseLicenseTypeEnum;
import org.openapis.openapi.models.operations.AssociateLicensePathParams;
import org.openapis.openapi.models.operations.AssociateLicenseHeaders;
import org.openapis.openapi.models.operations.AssociateLicenseRequest;
import org.openapis.openapi.models.operations.AssociateLicenseResponse;

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

            AssociateLicenseRequest req = new AssociateLicenseRequest() {{
                pathParams = new AssociateLicensePathParams() {{
                    licenseType = "ENTERPRISE_FREE_TRIAL";
                    workspaceId = "provident";
                }};
                headers = new AssociateLicenseHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            AssociateLicenseResponse res = sdk.associateLicense(req);

            if (res.associateLicenseResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->