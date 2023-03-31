<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDomainHeaders;
import org.openapis.openapi.models.operations.AssociateDomainRequestBody;
import org.openapis.openapi.models.operations.AssociateDomainRequest;
import org.openapis.openapi.models.operations.AssociateDomainResponse;

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

            AssociateDomainRequest req = new AssociateDomainRequest() {{
                headers = new AssociateDomainHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateDomainRequestBody() {{
                    acmCertificateArn = "illum";
                    displayName = "vel";
                    domainName = "error";
                    fleetArn = "deserunt";
                }};
            }};            

            AssociateDomainResponse res = sdk.associateDomain(req);

            if (res.associateDomainResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->