<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskRequest;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskResponse;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskSecurity;
import org.openapis.openapi.models.shared.CreateServiceMetricsTaskRequest;
import org.openapis.openapi.models.shared.CustomerServiceMetricsFilterCriteria;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerServiceMetricTaskRequest req = new CreateCustomerServiceMetricTaskRequest(                new CreateServiceMetricsTaskRequest() {{
                                feedType = "corrupti";
                                filterCriteria = new CustomerServiceMetricsFilterCriteria() {{
                                    customerServiceMetricType = "provident";
                                    evaluationMarketplaceId = "distinctio";
                                    listingCategories = new String[]{{
                                        add("unde"),
                                        add("nulla"),
                                        add("corrupti"),
                                        add("illum"),
                                    }};
                                    shippingRegions = new String[]{{
                                        add("error"),
                                        add("deserunt"),
                                    }};
                                }};;
                                schemaVersion = "suscipit";
                            }};, "iure");            

            CreateCustomerServiceMetricTaskResponse res = sdk.customerServiceMetricTask.createCustomerServiceMetricTask(req, new CreateCustomerServiceMetricTaskSecurity("magnam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->