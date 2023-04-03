<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPISecurity;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIRequest;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImporterExporterCodeVerificationAPIRequest req = new ImporterExporterCodeVerificationAPIRequest() {{
                iec = "corrupti";
            }}            

            ImporterExporterCodeVerificationAPIResponse res = sdk.apIs.importerExporterCodeVerificationAPI(req, new ImporterExporterCodeVerificationAPISecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.importerExporterCodeVerificationAPI200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->