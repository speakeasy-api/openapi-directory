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

            LpgsvRequest req = new LpgsvRequest() {{
                security = new LpgsvSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new LpgsvRequestBody() {{
                    certificateParameters = new LpgsvRequestBodyCertificateParameters() {{
                        dob = "vel";
                        fullName = "et";
                        gender = "incidunt";
                        lpgId = "voluptas";
                        svNo = "consequuntur";
                        uid = "quam";
                    }};
                    consentArtifact = "harum";
                    format = "pdf";
                    txnId = "et";
                }};
            }};

            LpgsvResponse res = sdk.apIs.lpgsv(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->