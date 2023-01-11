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

            GetCreateDomainRequest req = new GetCreateDomainRequest() {{
                queryParams = new GetCreateDomainQueryParams() {{
                    action = "CreateDomain";
                    domainName = "illo";
                    version = "2011-02-01";
                }};
                headers = new GetCreateDomainHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "aut";
                    xAmzCredential = "eum";
                    xAmzDate = "mollitia";
                    xAmzSecurityToken = "praesentium";
                    xAmzSignature = "inventore";
                    xAmzSignedHeaders = "adipisci";
                }};
            }};

            GetCreateDomainResponse res = sdk.getCreateDomain(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->