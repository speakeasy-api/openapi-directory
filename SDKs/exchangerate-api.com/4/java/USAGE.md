<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestBaseCurrencyRequest;
import org.openapis.openapi.models.operations.GetLatestBaseCurrencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestBaseCurrencyRequest req = new GetLatestBaseCurrencyRequest("corrupti");            

            GetLatestBaseCurrencyResponse res = sdk.getLatestBaseCurrency(req);

            if (res.getLatestBaseCurrency200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->