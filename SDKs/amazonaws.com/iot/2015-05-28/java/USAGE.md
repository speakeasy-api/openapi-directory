<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptCertificateTransferRequest req = new AcceptCertificateTransferRequest() {{
                pathParams = new AcceptCertificateTransferPathParams() {{
                    certificateId = "quis";
                }};
                queryParams = new AcceptCertificateTransferQueryParams() {{
                    setAsActive = false;
                }};
                headers = new AcceptCertificateTransferHeaders() {{
                    xAmzAlgorithm = "fugit";
                    xAmzContentSha256 = "aut";
                    xAmzCredential = "id";
                    xAmzDate = "sequi";
                    xAmzSecurityToken = "dicta";
                    xAmzSignature = "quis";
                    xAmzSignedHeaders = "molestiae";
                }};
            }};

            AcceptCertificateTransferResponse res = sdk.acceptCertificateTransfer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->