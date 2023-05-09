<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceResponse;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest(                new AssociateDelegateToResourceRequest("provident", "distinctio", "quibusdam");, AssociateDelegateToResourceXAmzTargetEnum.WORK_MAIL_SERVICE_ASSOCIATE_DELEGATE_TO_RESOURCE) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateDelegateToResourceResponse res = sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->