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
                    awsAccessKeyId = "sit";
                    action = "CreateDomain";
                    domainName = "culpa";
                    signature = "expedita";
                    signatureMethod = "consequuntur";
                    signatureVersion = "dolor";
                    timestamp = "expedita";
                    version = "2009-04-15";
                }};
            }};

            GetCreateDomainResponse res = sdk.getCreateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->