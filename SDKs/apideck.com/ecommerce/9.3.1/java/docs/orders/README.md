# orders

### Available Operations

* [ordersAll](#ordersall) - List Orders
* [ordersOne](#ordersone) - Get Order

## ordersAll

List Orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersAllRequest;
import org.openapis.openapi.models.operations.OrdersAllResponse;
import org.openapis.openapi.models.operations.OrdersAllSecurity;
import org.openapis.openapi.models.shared.EcommerceOrdersFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersAllRequest req = new OrdersAllRequest("minus", "placeat") {{
                cursor = "voluptatum";
                fields = "iusto";
                filter = new EcommerceOrdersFilter() {{
                    email = "elon@musk.com";
                }};;
                limit = 568045L;
                raw = false;
                xApideckServiceId = "nisi";
            }};            

            OrdersAllResponse res = sdk.orders.ordersAll(req, new OrdersAllSecurity("recusandae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEcommerceOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ordersOne

Get Order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersOneRequest;
import org.openapis.openapi.models.operations.OrdersOneResponse;
import org.openapis.openapi.models.operations.OrdersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersOneRequest req = new OrdersOneRequest("temporibus", "ab", "quis") {{
                fields = "veritatis";
                raw = false;
                xApideckServiceId = "deserunt";
            }};            

            OrdersOneResponse res = sdk.orders.ordersOne(req, new OrdersOneSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEcommerceOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
