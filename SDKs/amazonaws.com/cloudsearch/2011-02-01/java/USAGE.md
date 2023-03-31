<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETCreateDomainActionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainVersionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainQueryParams;
import org.openapis.openapi.models.operations.GETCreateDomainHeaders;
import org.openapis.openapi.models.operations.GETCreateDomainRequest;
import org.openapis.openapi.models.operations.GETCreateDomainResponse;

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

            GETCreateDomainRequest req = new GETCreateDomainRequest() {{
                queryParams = new GETCreateDomainQueryParams() {{
                    action = "CreateDomain";
                    domainName = "corrupti";
                    version = "2011-02-01";
                }};
                headers = new GETCreateDomainHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            GETCreateDomainResponse res = sdk.getCreateDomain(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->