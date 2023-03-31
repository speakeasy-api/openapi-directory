<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPISecurity;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIPathParams;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIRequest;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;
import org.openapis.openapi.models.shared.SchemeClientID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImporterExporterCodeVerificationAPIRequest req = new ImporterExporterCodeVerificationAPIRequest() {{
                security = new ImporterExporterCodeVerificationAPISecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new ImporterExporterCodeVerificationAPIPathParams() {{
                    iec = "corrupti";
                }};
            }};            

            ImporterExporterCodeVerificationAPIResponse res = sdk.apIs.importerExporterCodeVerificationAPI(req);

            if (res.importerExporterCodeVerificationAPI200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->