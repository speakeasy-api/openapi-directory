<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CheckDomainPathParams;
import org.openapis.openapi.models.operations.CheckDomainRequest;
import org.openapis.openapi.models.operations.CheckDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CheckDomainRequest req = new CheckDomainRequest() {{
                pathParams = new CheckDomainPathParams() {{
                    domain = "corrupti";
                }};
            }};            

            CheckDomainResponse res = sdk.checkDomain(req);

            if (res.checkDomain200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->