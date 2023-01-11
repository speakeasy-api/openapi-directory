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

            RatcrRequest req = new RatcrRequest() {{
                security = new RatcrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new RatcrRequestBody() {{
                    certificateParameters = new RatcrRequestBodyCertificateParameters() {{
                        fullName = "laborum";
                        uid = "laborum";
                        rationCardNo = "perferendis";
                    }};
                    consentArtifact = "vero";
                    format = "pdf";
                    txnId = "qui";
                }};
            }};

            RatcrResponse res = sdk.apIs.ratcr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->