<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricRequest;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricResponse;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerServiceMetricRequest req = new GetCustomerServiceMetricRequest("corrupti", "provident", "distinctio");            

            GetCustomerServiceMetricResponse res = sdk.customerServiceMetric.getCustomerServiceMetric(req, new GetCustomerServiceMetricSecurity("quibusdam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getCustomerServiceMetricResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->