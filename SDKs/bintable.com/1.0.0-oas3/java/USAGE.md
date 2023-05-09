<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BalanceLookupRequest;
import org.openapis.openapi.models.operations.BalanceLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceLookupRequest req = new BalanceLookupRequest("corrupti");            

            BalanceLookupResponse res = sdk.balance.balanceLookup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->