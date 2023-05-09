# customerServiceMetric

### Available Operations

* [getCustomerServiceMetric](#getcustomerservicemetric) - Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

## getCustomerServiceMetric

Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

### Example Usage

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

            GetCustomerServiceMetricRequest req = new GetCustomerServiceMetricRequest("unde", "nulla", "corrupti");            

            GetCustomerServiceMetricResponse res = sdk.customerServiceMetric.getCustomerServiceMetric(req, new GetCustomerServiceMetricSecurity("illum") {{
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
