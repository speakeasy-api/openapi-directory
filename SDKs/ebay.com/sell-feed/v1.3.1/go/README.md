# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-feed/v1.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateCustomerServiceMetricTaskRequest{
        Security: operations.CreateCustomerServiceMetricTaskSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateCustomerServiceMetricTaskHeaders{
            AcceptLanguage: "unde",
        },
        Request: shared.CreateServiceMetricsTaskRequest{
            FeedType: "deserunt",
            FilterCriteria: &shared.CustomerServiceMetricsFilterCriteria{
                CustomerServiceMetricType: "porro",
                EvaluationMarketplaceID: "nulla",
                ListingCategories: []string{
                    "vero",
                    "perspiciatis",
                    "nulla",
                },
                ShippingRegions: []string{
                    "fuga",
                    "facilis",
                },
            },
            SchemaVersion: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.CustomerServiceMetricTask.CreateCustomerServiceMetricTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### CustomerServiceMetricTask

* `CreateCustomerServiceMetricTask` - <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
* `GetCustomerServiceMetricTask` - <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
* `GetCustomerServiceMetricTasks` - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

### InventoryTask

* `CreateInventoryTask` - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
* `GetInventoryTask` - This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
* `GetInventoryTasks` - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

### OrderTask

* `CreateOrderTask` - This method creates an order download task with filter criteria for the order report. When using this method, specify the <b> feedType</b>, <b> schemaVersion</b>, and <b> filterCriteria</b> for the report. The method returns the <b> location</b> response header containing the getOrderTask call URI to retrieve the order task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the order task. <br /><br />To retrieve the status of the task, use the <b> getOrderTask</b> method to retrieve a single task ID or the <b>getOrderTasks</b> method to retrieve multiple order task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scope and its corresponding feed type:<ul><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_REPORT</li></ul> </p><p>For details about how this method is used, see <a href="/api-docs/sell/static/feed/general-feed-tasks.html">General feed types</a> in the Selling Integration Guide. <p> <span class="tablenote"><strong>Note:</strong> At this time, the <strong>createOrderTask</strong> method only supports order creation date filters and not modified order date filters. Do not include the <strong>modifiedDateRange</strong> filter in your request payload.</span></p>
* `GetOrderTask` - This method retrieves the task details and status of the specified task. The input is <strong>task_id</strong>. <p>For details about how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide.  </p>
* `GetOrderTasks` - This method returns the details and status for an array of order tasks based on a specified <strong>feed_type</strong> or <strong>schedule_id</strong>. Specifying both <strong>feed_type</strong> and <strong>schedule_id</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which order tasks are returned by specifying filters such as the creation date range or period of time using <strong>look_back_days</strong>. <br /><br />If specifying a <strong>schedule_id</strong>, the schedule template (that the <strong>schedule_id</strong> is based on) determines which order tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>schedule_id</strong> applies to one <strong>feed_type</strong>.

### Schedule

* `CreateSchedule` - This method creates a schedule, which is a subscription to the specified schedule template. A schedule periodically generates a report for the <strong>feedType</strong> specified by the template. Specify the same <strong>feedType</strong> as the <strong>feedType</strong> of the associated schedule template. When creating the schedule, if available from the template, you can specify a preferred trigger hour, day of the week, or day of the month. These and other fields are conditionally available as specified by the template.<p> <span class="tablenote"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If a field is optional and a default value is provided by the template, the default value will be used if omitted from the payload.</span></p>A successful call returns the location response header containing the <strong>getSchedule</strong> call URI to retrieve the schedule you just created. The URL includes the eBay-assigned schedule ID, which you can use to reference the schedule task. <br /><br />To retrieve the details of the create schedule task, use the <strong>getSchedule</strong> method for a single schedule ID or the <strong>getSchedules</strong> method to retrieve all schedule details for the specified <strong>feed_type</strong>. The number of schedules for each feedType is limited. Error code 160031 is returned when you have reached this maximum.<p> <span class="tablenote"><strong>Note:</strong> Except for schedules with a HALF-HOUR frequency, all schedules will ideally run at the start of each hour ('00' minutes). Actual start time may vary time may vary due to load and other factors.</span></p>
* `DeleteSchedule` - This method deletes an existing schedule. Specify the schedule to delete using the <strong>schedule_id</strong> path parameter.
* `GetLatestResultFile` - This method downloads the latest result file generated by the schedule. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). Specify the <strong>schedule_id</strong> path parameter to download its last generated file.
* `GetSchedule` - This method retrieves schedule details and status of the specified schedule. Specify the schedule to retrieve using the <strong>schedule_id</strong>. Use the <strong>getSchedules</strong> method to find a schedule if you do not know the <strong>schedule_id</strong>.
* `GetScheduleTemplate` - This method retrieves the details of the specified template. Specify the template to retrieve using the <strong>schedule_template_id</strong> path parameter. Use the <strong>getScheduleTemplates</strong> method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.
* `GetScheduleTemplates` - This method retrieves an array containing the details and status of all schedule templates based on the specified <strong>feed_type</strong>. Use this method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.
* `GetSchedules` - This method retrieves an array containing the details and status of all schedules based on the specified <strong>feed_type</strong>. Use this method to find a schedule if you do not know the <strong>schedule_id</strong>.
* `UpdateSchedule` - This method updates an existing schedule. Specify the schedule to update using the <strong>schedule_id</strong> path parameter. If the schedule template has changed after the schedule was created or updated, the input will be validated using the changed template.<p> <span class="tablenote"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If you do not know the <strong>scheduleTemplateId</strong>, call the <strong>getSchedule</strong> method to find out.</span></p>

### Task

* `CreateTask` - This method creates an upload task or a download task without filter criteria. When using this method, specify the <b> feedType</b> and the feed file <b> schemaVersion</b>. The feed type specified sets the task as a download or an upload task.  <p>For details about the upload and download flows, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide.</p><p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scopes and their corresponding feed types:</p><ul><li>https://api.ebay.com/oauth/api_scope/sell.inventory: See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_ACK (specify for upload tasks). Also see <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.marketing: None*</li><li>https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly: None*</li></ul><p>* Reserved for future release</p>
* `GetInputFile` - This method downloads the file previously uploaded using <strong>uploadFile</strong>. Specify the task_id from the <strong>uploadFile</strong> call. <p><span class="tablenote"><strong>Note:</strong> With respect to LMS, this method applies to all feed types except <code>LMS_ORDER_REPORT</code> and <code>LMS_ACTIVE_INVENTORY_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds.html">LMS API Feeds</a> in the Selling Integration Guide.</span></p>
* `GetResultFile` - This method retrieves the generated file that is associated with the specified task ID. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). <p>For details about how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide. </p><p><span class="tablenote"><strong>Note:</strong> The status of the task to retrieve must be in the COMPLETED or COMPLETED_WITH_ERROR state before this method can retrieve the file. You can use the getTask or getTasks method to retrieve the status of the task.</span></p>
* `GetTask` - This method retrieves the details and status of the specified task. The input is <strong>task_id</strong>. <br /><br />For details of how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide. 
* `GetTasks` - This method returns the details and status for an array of tasks based on a specified <strong>feed_type</strong> or <strong>scheduledId</strong>. Specifying both <strong>feed_type</strong> and <strong>scheduledId</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which tasks are returned by specifying filters, such as the creation date range or period of time using <strong>look_back_days</strong>. Also, by specifying the <strong>feed_type</strong>, both on-demand and scheduled reports are returned.<br /><br />If specifying a <strong>scheduledId</strong>, the schedule template (that the schedule ID is based on) determines which tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>scheduledId</strong> applies to one <strong>feed_type</strong>. 
* `UploadFile` - This method associates the specified file with the specified task ID and uploads the input file. After the file has been uploaded, the processing of the file begins. <br /><br />Reports often take time to generate and it's common for this method to return an HTTP status of 202, which indicates the report is being generated. Use the <b> getTask</b> with the task ID or <b> getTasks</b> to determine the status of a report. <br /><br />The status flow is <code>QUEUED</code> &gt; <code>IN_PROCESS</code> &gt; <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code>. When the status is <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code>, this indicates the file has been processed and the order report can be downloaded. If there are errors, they will be indicated in the report file. <br /><br />For details of how this method is used in the upload flow, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide. <p><span class="tablenote"><strong>Note:</strong> This method applies to all Seller Hub feed types and LMS feed types except <code>LMS_ORDER_REPORT</code> and <code>LMS_ACTIVE_INVENTORY_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">LMS feed types</a> and <a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#availabl" target="_blank">Seller Hub feed types</a>.</span></p><p> <span class="tablenote"><b>Note:</b> You must use a <strong>Content-Type</strong> header with its value set to "<strong>multipart/form-data</strong>". See <a href="/api-docs/sell/feed/resources/task/methods/uploadFile#h2-samples">Samples</a> for information.</span></p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
