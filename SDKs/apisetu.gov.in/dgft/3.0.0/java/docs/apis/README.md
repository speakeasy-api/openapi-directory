# apIs

### Available Operations

* [importerExporterCodeVerificationAPI](#importerexportercodeverificationapi) - Importer-Exporter Code (IEC) Verification API.

## importerExporterCodeVerificationAPI

Description of Importer-Exporter Code (IEC) Verification API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIRequest;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPIResponse;
import org.openapis.openapi.models.operations.ImporterExporterCodeVerificationAPISecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImporterExporterCodeVerificationAPIRequest req = new ImporterExporterCodeVerificationAPIRequest("provident");            

            ImporterExporterCodeVerificationAPIResponse res = sdk.apIs.importerExporterCodeVerificationAPI(req, new ImporterExporterCodeVerificationAPISecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.importerExporterCodeVerificationAPI200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
