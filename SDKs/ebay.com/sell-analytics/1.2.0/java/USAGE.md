<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCustomerServiceMetricSecurity;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricRequest;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerServiceMetricRequest req = new GetCustomerServiceMetricRequest() {{
                customerServiceMetricType = "corrupti";
                evaluationMarketplaceId = "provident";
                evaluationType = "distinctio";
            }}            

            GetCustomerServiceMetricResponse res = sdk.customerServiceMetric.getCustomerServiceMetric(req, new GetCustomerServiceMetricSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getCustomerServiceMetricResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->