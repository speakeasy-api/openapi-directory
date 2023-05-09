# payment

### Available Operations

* [paymentApiSupported](#paymentapisupported) - Return all supported payment gateways (no currencies means all are supported)

## paymentApiSupported

Return all supported payment gateways (no currencies means all are supported)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentApiSupportedRequest;
import org.openapis.openapi.models.operations.PaymentApiSupportedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentApiSupportedRequest req = new PaymentApiSupportedRequest("cupiditate", "provident");            

            PaymentApiSupportedResponse res = sdk.payment.paymentApiSupported(req);

            if (res.paymentGatewayDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
