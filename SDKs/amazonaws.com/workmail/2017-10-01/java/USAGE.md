<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceHeaders;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceResponse;
import org.openapis.openapi.models.shared.AssociateDelegateToResourceRequest;

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

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest() {{
                headers = new AssociateDelegateToResourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "WorkMailService.AssociateDelegateToResource";
                }};
                request = new AssociateDelegateToResourceRequest() {{
                    entityId = "illum";
                    organizationId = "vel";
                    resourceId = "error";
                }};
            }};            

            AssociateDelegateToResourceResponse res = sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->