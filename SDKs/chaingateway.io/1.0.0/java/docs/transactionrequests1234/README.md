# transactionRequests1234

### Available Operations

* [sendtransaction4](#sendtransaction4) - sendTransaction

## sendtransaction4

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtransaction4RequestBody;
import org.openapis.openapi.models.operations.Sendtransaction4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtransaction4RequestBody req = new Sendtransaction4RequestBody() {{
                amount = "1";
                password = "Test123";
                speed = "fast";
                subtractfee = false;
                to = "bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn";
                walletname = "Evolo_6928232";
            }};            

            Sendtransaction4Response res = sdk.transactionRequests1234.sendtransaction4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
