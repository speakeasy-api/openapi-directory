# paymentsProgram

### Available Operations

* [getPaymentsProgram](#getpaymentsprogram) - <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.

## getPaymentsProgram

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsProgramRequest;
import org.openapis.openapi.models.operations.GetPaymentsProgramResponse;
import org.openapis.openapi.models.operations.GetPaymentsProgramSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentsProgramRequest req = new GetPaymentsProgramRequest("suscipit", "deserunt");            

            GetPaymentsProgramResponse res = sdk.paymentsProgram.getPaymentsProgram(req, new GetPaymentsProgramSecurity("provident") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentsProgramResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
