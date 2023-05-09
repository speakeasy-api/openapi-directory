# CustomerServiceMetricTask

### Available Operations

* [CreateCustomerServiceMetricTask](#createcustomerservicemetrictask) - <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
* [GetCustomerServiceMetricTask](#getcustomerservicemetrictask) - <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
* [GetCustomerServiceMetricTasks](#getcustomerservicemetrictasks) - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

## CreateCustomerServiceMetricTask

<p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, operations.CreateCustomerServiceMetricTaskRequest{
        CreateServiceMetricsTaskRequest: shared.CreateServiceMetricsTaskRequest{
            FeedType: sdk.String("magnam"),
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: sdk.String("debitis"),
                EvaluationMarketplaceID: sdk.String("ipsa"),
                ListingCategories: []string{
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                },
                ShippingRegions: []string{
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                },
            },
            SchemaVersion: sdk.String("recusandae"),
        },
        AcceptLanguage: "temporibus",
    }, operations.CreateCustomerServiceMetricTaskSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomerServiceMetricTask

<p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.GetCustomerServiceMetricTask(ctx, operations.GetCustomerServiceMetricTaskRequest{
        TaskID: "ab",
    }, operations.GetCustomerServiceMetricTaskSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceMetricsTask != nil {
        // handle response
    }
}
```

## GetCustomerServiceMetricTasks

Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.GetCustomerServiceMetricTasks(ctx, operations.GetCustomerServiceMetricTasksRequest{
        DateRange: sdk.String("quis"),
        FeedType: sdk.String("veritatis"),
        Limit: sdk.String("deserunt"),
        LookBackDays: sdk.String("perferendis"),
        Offset: sdk.String("ipsam"),
    }, operations.GetCustomerServiceMetricTasksSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerServiceMetricTaskCollection != nil {
        // handle response
    }
}
```
