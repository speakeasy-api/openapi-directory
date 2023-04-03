<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceResponse;
import org.openapis.openapi.models.shared.AssociateDelegateToResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest() {{
                associateDelegateToResourceRequest = new AssociateDelegateToResourceRequest() {{
                    entityId = "corrupti";
                    organizationId = "provident";
                    resourceId = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "WorkMailService.AssociateDelegateToResource";
            }}            

            AssociateDelegateToResourceResponse res = sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->