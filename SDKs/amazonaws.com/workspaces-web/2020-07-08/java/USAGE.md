<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsPathParams;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsQueryParams;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsHeaders;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsRequest;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsResponse;

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

            AssociateBrowserSettingsRequest req = new AssociateBrowserSettingsRequest() {{
                pathParams = new AssociateBrowserSettingsPathParams() {{
                    portalArn = "corrupti";
                }};
                queryParams = new AssociateBrowserSettingsQueryParams() {{
                    browserSettingsArn = "provident";
                }};
                headers = new AssociateBrowserSettingsHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            AssociateBrowserSettingsResponse res = sdk.associateBrowserSettings(req);

            if (res.associateBrowserSettingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->