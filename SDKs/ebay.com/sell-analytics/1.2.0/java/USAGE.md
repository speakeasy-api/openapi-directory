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

            GetCustomerServiceMetricRequest req = new GetCustomerServiceMetricRequest() {{
                security = new GetCustomerServiceMetricSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCustomerServiceMetricPathParams() {{
                    customerServiceMetricType = "atque";
                    evaluationType = "amet";
                }};
                queryParams = new GetCustomerServiceMetricQueryParams() {{
                    evaluationMarketplaceId = "nisi";
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