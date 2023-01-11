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

            ApmclRequest req = new ApmclRequest() {{
                security = new ApmclSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new ApmclRequestBody() {{
                    certificateParameters = new ApmclRequestBodyCertificateParameters() {{
                        documentNumber = "ut";
                    }};
                    consentArtifact = "officiis";
                    format = "pdf";
                    txnId = "eum";
                }};
            }};

            ApmclResponse res = sdk.apIs.apmcl(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->