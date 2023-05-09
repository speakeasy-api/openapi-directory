# customers

### Available Operations

* [customersAll](#customersall) - List Customers
* [customersOne](#customersone) - Get Customer

## customersAll

List Customers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.shared.EcommerceCustomersFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest("illum", "vel") {{
                cursor = "error";
                fields = "deserunt";
                filter = new EcommerceCustomersFilter() {{
                    email = "elon@musk.com";
                    phoneNumber = "111-111-1111";
                }};;
                limit = 384382L;
                raw = false;
                xApideckServiceId = "iure";
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req, new CustomersAllSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEcommerceCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersOne

Get Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersOneRequest;
import org.openapis.openapi.models.operations.CustomersOneResponse;
import org.openapis.openapi.models.operations.CustomersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersOneRequest req = new CustomersOneRequest("debitis", "ipsa", "delectus") {{
                fields = "tempora";
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            CustomersOneResponse res = sdk.customers.customersOne(req, new CustomersOneSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEcommerceCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
