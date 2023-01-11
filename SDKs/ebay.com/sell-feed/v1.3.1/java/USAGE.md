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
                    acceptLanguage = "deserunt";
                }};
                request = new CreateServiceMetricsTaskRequest() {{
                    feedType = "eius";
                    filterCriteria = new CustomerServiceMetricsFilterCriteria() {{
                        customerServiceMetricType = "repellat";
                        evaluationMarketplaceId = "beatae";
                        listingCategories = new String[]() {{
                            add("totam"),
                            add("aut"),
                            add("et"),
                        }};
                        shippingRegions = new String[]() {{
                            add("necessitatibus"),
                            add("et"),
                            add("culpa"),
                        }};
                    }};
                    schemaVersion = "repellendus";
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