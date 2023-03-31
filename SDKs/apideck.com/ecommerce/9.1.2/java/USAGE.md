<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.operations.CustomersAllQueryParams;
import org.openapis.openapi.models.operations.CustomersAllHeaders;
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.shared.EcommerceCustomersFilter;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest() {{
                security = new CustomersAllSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CustomersAllQueryParams() {{
                    cursor = "corrupti";
                    fields = "provident";
                    filter = new EcommerceCustomersFilter() {{
                        email = "elon@musk.com";
                        phoneNumber = "111-111-1111";
                    }};
                    limit = 715190;
                    raw = false;
                }};
                headers = new CustomersAllHeaders() {{
                    xApideckAppId = "quibusdam";
                    xApideckConsumerId = "unde";
                    xApideckServiceId = "nulla";
                }};
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req);

            if (res.getEcommerceCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->