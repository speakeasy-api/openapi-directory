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

            CreateCustomerServiceMetricTaskRequest req = new CreateCustomerServiceMetricTaskRequest() {{
                security = new CreateCustomerServiceMetricTaskSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateCustomerServiceMetricTaskHeaders() {{
                    acceptLanguage = "sit";
                }};
                request = new CreateServiceMetricsTaskRequest() {{
                    feedType = "voluptas";
                    filterCriteria = new CustomerServiceMetricsFilterCriteria() {{
                        customerServiceMetricType = "culpa";
                        evaluationMarketplaceId = "expedita";
                        listingCategories = new String[]() {{
                            add("dolor"),
                            add("expedita"),
                            add("voluptas"),
                        }};
                        shippingRegions = new String[]() {{
                            add("et"),
                        }};
                    }};
                    schemaVersion = "nihil";
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