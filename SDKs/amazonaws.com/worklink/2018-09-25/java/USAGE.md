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

            AssociateDomainRequest req = new AssociateDomainRequest() {{
                headers = new AssociateDomainHeaders() {{
                    xAmzAlgorithm = "nobis";
                    xAmzContentSha256 = "possimus";
                    xAmzCredential = "voluptate";
                    xAmzDate = "illum";
                    xAmzSecurityToken = "iusto";
                    xAmzSignature = "sunt";
                    xAmzSignedHeaders = "saepe";
                }};
                request = new AssociateDomainRequestBody() {{
                    acmCertificateArn = "veniam";
                    displayName = "quod";
                    domainName = "ducimus";
                    fleetArn = "esse";
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