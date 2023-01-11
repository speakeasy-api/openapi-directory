<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ImporterExporterCodeVerificationApiRequest req = new ImporterExporterCodeVerificationApiRequest() {{
                security = new ImporterExporterCodeVerificationApiSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new ImporterExporterCodeVerificationApiPathParams() {{
                    iec = "sit";
                }};
            }};

            ImporterExporterCodeVerificationApiResponse res = sdk.apIs.importerExporterCodeVerificationApi(req);

            if (res.importerExporterCodeVerificationAPI200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->