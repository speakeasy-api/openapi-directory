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

            LabrpRequest req = new LabrpRequest() {{
                security = new LabrpSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new LabrpRequestBody() {{
                    certificateParameters = new LabrpRequestBodyCertificateParameters() {{
                        dob = "incidunt";
                        fullName = "debitis";
                        gender = "qui";
                        mobileNoRQ = "culpa";
                    }};
                    consentArtifact = "ea";
                    format = "pdf";
                    txnId = "non";
                }};
            }};

            LabrpResponse res = sdk.apIs.labrp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->