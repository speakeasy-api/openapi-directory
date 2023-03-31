<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetLatestConfigurationQueryParams;
import org.openapis.openapi.models.operations.GetLatestConfigurationHeaders;
import org.openapis.openapi.models.operations.GetLatestConfigurationRequest;
import org.openapis.openapi.models.operations.GetLatestConfigurationResponse;

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

            GetLatestConfigurationRequest req = new GetLatestConfigurationRequest() {{
                queryParams = new GetLatestConfigurationQueryParams() {{
                    configurationToken = "corrupti";
                }};
                headers = new GetLatestConfigurationHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            GetLatestConfigurationResponse res = sdk.getLatestConfiguration(req);

            if (res.getLatestConfigurationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->