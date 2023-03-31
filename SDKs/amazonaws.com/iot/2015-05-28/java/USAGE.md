<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptCertificateTransferPathParams;
import org.openapis.openapi.models.operations.AcceptCertificateTransferQueryParams;
import org.openapis.openapi.models.operations.AcceptCertificateTransferHeaders;
import org.openapis.openapi.models.operations.AcceptCertificateTransferRequest;
import org.openapis.openapi.models.operations.AcceptCertificateTransferResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AcceptCertificateTransferRequest req = new AcceptCertificateTransferRequest() {{
                pathParams = new AcceptCertificateTransferPathParams() {{
                    certificateId = "corrupti";
                }};
                queryParams = new AcceptCertificateTransferQueryParams() {{
                    setAsActive = false;
                }};
                headers = new AcceptCertificateTransferHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
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