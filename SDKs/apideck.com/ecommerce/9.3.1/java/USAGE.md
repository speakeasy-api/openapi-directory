<!-- Start SDK Example Usage -->
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

            CustomersAllRequest req = new CustomersAllRequest("corrupti", "provident") {{
                cursor = "distinctio";
                fields = "quibusdam";
                filter = new EcommerceCustomersFilter() {{
                    email = "elon@musk.com";
                    phoneNumber = "111-111-1111";
                }};;
                limit = 602763L;
                raw = false;
                xApideckServiceId = "nulla";
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req, new CustomersAllSecurity("corrupti") {{
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
<!-- End SDK Example Usage -->