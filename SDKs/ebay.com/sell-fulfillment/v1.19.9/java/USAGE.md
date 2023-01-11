<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetOrderRequest req = new GetOrderRequest() {{
                security = new GetOrderSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetOrderPathParams() {{
                    orderId = "voluptas";
                }};
                queryParams = new GetOrderQueryParams() {{
                    fieldGroups = "ut";
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