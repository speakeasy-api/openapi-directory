<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequestBody;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequest;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeOrderReceiptRequest req = new AcknowledgeOrderReceiptRequest() {{
                requestBody = new AcknowledgeOrderReceiptRequestBody() {{
                    orderArn = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            AcknowledgeOrderReceiptResponse res = sdk.acknowledgeOrderReceipt(req);

            if (res.acknowledgeOrderReceiptResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->