<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCustomerServiceMetricSecurity;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricPathParams;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricQueryParams;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricRequest;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerServiceMetricRequest req = new GetCustomerServiceMetricRequest() {{
                security = new GetCustomerServiceMetricSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCustomerServiceMetricPathParams() {{
                    customerServiceMetricType = "corrupti";
                    evaluationType = "provident";
                }};
                queryParams = new GetCustomerServiceMetricQueryParams() {{
                    evaluationMarketplaceId = "distinctio";
                }};
            }};            

            GetCustomerServiceMetricResponse res = sdk.customerServiceMetric.getCustomerServiceMetric(req);

            if (res.getCustomerServiceMetricResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->