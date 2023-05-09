# customerServiceMetricTask

### Available Operations

* [createCustomerServiceMetricTask](#createcustomerservicemetrictask) - <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
* [getCustomerServiceMetricTask](#getcustomerservicemetrictask) - <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
* [getCustomerServiceMetricTasks](#getcustomerservicemetrictasks) - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

## createCustomerServiceMetricTask

<p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>

### Example Usage

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
                                feedType = "debitis";
                                filterCriteria = new CustomerServiceMetricsFilterCriteria() {{
                                    customerServiceMetricType = "ipsa";
                                    evaluationMarketplaceId = "delectus";
                                    listingCategories = new String[]{{
                                        add("suscipit"),
                                        add("molestiae"),
                                    }};
                                    shippingRegions = new String[]{{
                                        add("placeat"),
                                        add("voluptatum"),
                                        add("iusto"),
                                        add("excepturi"),
                                    }};
                                }};;
                                schemaVersion = "nisi";
                            }};, "recusandae");            

            CreateCustomerServiceMetricTaskResponse res = sdk.customerServiceMetricTask.createCustomerServiceMetricTask(req, new CreateCustomerServiceMetricTaskSecurity("temporibus") {{
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

## getCustomerServiceMetricTask

<p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTaskRequest;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTaskResponse;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerServiceMetricTaskRequest req = new GetCustomerServiceMetricTaskRequest("ab");            

            GetCustomerServiceMetricTaskResponse res = sdk.customerServiceMetricTask.getCustomerServiceMetricTask(req, new GetCustomerServiceMetricTaskSecurity("quis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serviceMetricsTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomerServiceMetricTasks

Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTasksRequest;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTasksResponse;
import org.openapis.openapi.models.operations.GetCustomerServiceMetricTasksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerServiceMetricTasksRequest req = new GetCustomerServiceMetricTasksRequest() {{
                dateRange = "veritatis";
                feedType = "deserunt";
                limit = "perferendis";
                lookBackDays = "ipsam";
                offset = "repellendus";
            }};            

            GetCustomerServiceMetricTasksResponse res = sdk.customerServiceMetricTask.getCustomerServiceMetricTasks(req, new GetCustomerServiceMetricTasksSecurity("sapiente") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customerServiceMetricTaskCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
