<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskSecurity;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskHeaders;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskRequest;
import org.openapis.openapi.models.operations.CreateCustomerServiceMetricTaskResponse;
import org.openapis.openapi.models.shared.CreateServiceMetricsTaskRequest;
import org.openapis.openapi.models.shared.CustomerServiceMetricsFilterCriteria;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerServiceMetricTaskRequest req = new CreateCustomerServiceMetricTaskRequest() {{
                security = new CreateCustomerServiceMetricTaskSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateCustomerServiceMetricTaskHeaders() {{
                    acceptLanguage = "corrupti";
                }};
                request = new CreateServiceMetricsTaskRequest() {{
                    feedType = "provident";
                    filterCriteria = new CustomerServiceMetricsFilterCriteria() {{
                        customerServiceMetricType = "distinctio";
                        evaluationMarketplaceId = "quibusdam";
                        listingCategories = new String[]{{
                            add("nulla"),
                            add("corrupti"),
                            add("illum"),
                        }};
                        shippingRegions = new String[]{{
                            add("error"),
                            add("deserunt"),
                        }};
                    }};
                    schemaVersion = "suscipit";
                }};
            }};            

            CreateCustomerServiceMetricTaskResponse res = sdk.customerServiceMetricTask.createCustomerServiceMetricTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->