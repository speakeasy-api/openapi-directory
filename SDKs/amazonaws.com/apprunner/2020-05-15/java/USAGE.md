<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateCustomDomainRequest;
import org.openapis.openapi.models.operations.AssociateCustomDomainResponse;
import org.openapis.openapi.models.operations.AssociateCustomDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateCustomDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCustomDomainRequest req = new AssociateCustomDomainRequest(                new AssociateCustomDomainRequest("provident", "distinctio") {{
                                enableWWWSubdomain = false;
                            }};, AssociateCustomDomainXAmzTargetEnum.APP_RUNNER_ASSOCIATE_CUSTOM_DOMAIN) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateCustomDomainResponse res = sdk.associateCustomDomain(req);

            if (res.associateCustomDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->