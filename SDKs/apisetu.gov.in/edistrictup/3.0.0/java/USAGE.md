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

            BtcerRequest req = new BtcerRequest() {{
                security = new BtcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BtcerRequestBody() {{
                    certificateParameters = new BtcerRequestBodyCertificateParameters() {{
                        applicationNo = "illo";
                        certificateID = "molestias";
                    }};
                    consentArtifact = "et";
                    format = "xml";
                    txnId = "officia";
                }};
            }};

            BtcerResponse res = sdk.apIs.btcer(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->