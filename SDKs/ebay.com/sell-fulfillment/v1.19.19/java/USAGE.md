<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetOrderSecurity;
import org.openapis.openapi.models.operations.GetOrderPathParams;
import org.openapis.openapi.models.operations.GetOrderQueryParams;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest() {{
                security = new GetOrderSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetOrderPathParams() {{
                    orderId = "corrupti";
                }};
                queryParams = new GetOrderQueryParams() {{
                    fieldGroups = "provident";
                }};
            }};            

            GetOrderResponse res = sdk.order.getOrder(req);

            if (res.order.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->