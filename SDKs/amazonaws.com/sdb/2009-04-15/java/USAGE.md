<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETCreateDomainActionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainVersionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainQueryParams;
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
                    awsAccessKeyId = "corrupti";
                    action = "CreateDomain";
                    domainName = "provident";
                    signature = "distinctio";
                    signatureMethod = "quibusdam";
                    signatureVersion = "unde";
                    timestamp = "nulla";
                    version = "2009-04-15";
                }};
            }};            

            GETCreateDomainResponse res = sdk.getCreateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->