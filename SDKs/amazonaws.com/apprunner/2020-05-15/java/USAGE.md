<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateCustomDomainXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateCustomDomainHeaders;
import org.openapis.openapi.models.operations.AssociateCustomDomainRequest;
import org.openapis.openapi.models.operations.AssociateCustomDomainResponse;
import org.openapis.openapi.models.shared.AssociateCustomDomainRequest;

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

            AssociateCustomDomainRequest req = new AssociateCustomDomainRequest() {{
                headers = new AssociateCustomDomainHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AppRunner.AssociateCustomDomain";
                }};
                request = new AssociateCustomDomainRequest() {{
                    domainName = "illum";
                    enableWWWSubdomain = false;
                    serviceArn = "vel";
                }};
            }};            

            AssociateCustomDomainResponse res = sdk.associateCustomDomain(req);

            if (res.associateCustomDomainResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->