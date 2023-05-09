<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.operations.GetOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest("corrupti") {{
                fieldGroups = "provident";
            }};            

            GetOrderResponse res = sdk.order.getOrder(req, new GetOrderSecurity("distinctio") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->