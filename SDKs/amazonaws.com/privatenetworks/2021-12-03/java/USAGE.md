<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptHeaders;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequestBody;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequest;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptResponse;

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

            AcknowledgeOrderReceiptRequest req = new AcknowledgeOrderReceiptRequest() {{
                headers = new AcknowledgeOrderReceiptHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AcknowledgeOrderReceiptRequestBody() {{
                    orderArn = "illum";
                }};
            }};            

            AcknowledgeOrderReceiptResponse res = sdk.acknowledgeOrderReceipt(req);

            if (res.acknowledgeOrderReceiptResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->