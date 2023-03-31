<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelOrderPathParams;
import org.openapis.openapi.models.operations.CancelOrderHeaders;
import org.openapis.openapi.models.operations.CancelOrderRequest;
import org.openapis.openapi.models.operations.CancelOrderResponse;

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

            CancelOrderRequest req = new CancelOrderRequest() {{
                pathParams = new CancelOrderPathParams() {{
                    orderId = "corrupti";
                }};
                headers = new CancelOrderHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CancelOrderResponse res = sdk.cancelOrder(req);

            if (res.cancelOrderOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->