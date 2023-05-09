<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequest;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequestBody;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeOrderReceiptRequest req = new AcknowledgeOrderReceiptRequest(                new AcknowledgeOrderReceiptRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcknowledgeOrderReceiptResponse res = sdk.acknowledgeOrderReceipt(req);

            if (res.acknowledgeOrderReceiptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->