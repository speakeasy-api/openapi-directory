<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateCustomDomainRequest req = new AssociateCustomDomainRequest() {{
                headers = new AssociateCustomDomainHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AppRunner.AssociateCustomDomain";
                }};
                request = new AssociateCustomDomainRequest() {{
                    domainName = "fugit";
                    enableWWWSubdomain = false;
                    serviceArn = "nihil";
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