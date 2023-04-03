<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateCustomDomainXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateCustomDomainRequest;
import org.openapis.openapi.models.operations.AssociateCustomDomainResponse;
import org.openapis.openapi.models.shared.AssociateCustomDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCustomDomainRequest req = new AssociateCustomDomainRequest() {{
                associateCustomDomainRequest = new AssociateCustomDomainRequest() {{
                    domainName = "corrupti";
                    enableWWWSubdomain = false;
                    serviceArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "AppRunner.AssociateCustomDomain";
            }}            

            AssociateCustomDomainResponse res = sdk.associateCustomDomain(req);

            if (res.associateCustomDomainResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->