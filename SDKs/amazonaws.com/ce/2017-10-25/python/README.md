# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/ce/2017-10-25/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAnomalyMonitorRequest(
    create_anomaly_monitor_request=shared.CreateAnomalyMonitorRequest(
        anomaly_monitor=shared.AnomalyMonitor(
            creation_date="corrupti",
            dimensional_value_count=592845,
            last_evaluated_date="distinctio",
            last_updated_date="quibusdam",
            monitor_arn="unde",
            monitor_dimension="SERVICE",
            monitor_name="nulla",
            monitor_specification=shared.Expression(
                and_=[
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                ],
                cost_categories=shared.CostCategoryValues(
                    key="illum",
                    match_options=[
                        "CONTAINS",
                        "CASE_SENSITIVE",
                    ],
                    values=[
                        "iure",
                        "magnam",
                    ],
                ),
                dimensions=shared.DimensionValues(
                    key="AGREEMENT_END_DATE_TIME_BEFORE",
                    match_options=[
                        "GREATER_THAN_OR_EQUAL",
                    ],
                    values=[
                        "suscipit",
                        "molestiae",
                    ],
                ),
                not_=shared.Expression(),
                or_=[
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                    shared.Expression(),
                ],
                tags=shared.TagValues(
                    key="placeat",
                    match_options=[
                        "ENDS_WITH",
                        "CONTAINS",
                        "ENDS_WITH",
                    ],
                    values=[
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    ],
                ),
            ),
            monitor_type="CUSTOM",
        ),
        resource_tags=[
            shared.ResourceTag(
                key="ipsam",
                value="repellendus",
            ),
        ],
    ),
    x_amz_algorithm="sapiente",
    x_amz_content_sha256="quo",
    x_amz_credential="odit",
    x_amz_date="at",
    x_amz_security_token="at",
    x_amz_signature="maiores",
    x_amz_signed_headers="molestiae",
    x_amz_target="AWSInsightsIndexService.CreateAnomalyMonitor",
)
    
res = s.create_anomaly_monitor(req)

if res.create_anomaly_monitor_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_anomaly_monitor` - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* `create_anomaly_subscription` - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* `create_cost_category_definition` - Creates a new Cost Category with the requested name and rules.
* `delete_anomaly_monitor` - Deletes a cost anomaly monitor. 
* `delete_anomaly_subscription` - Deletes a cost anomaly subscription. 
* `delete_cost_category_definition` - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* `describe_cost_category_definition` - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* `get_anomalies` - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* `get_anomaly_monitors` - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `get_anomaly_subscriptions` - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `get_cost_and_usage` - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `get_cost_and_usage_with_resources` - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* `get_cost_categories` - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* `get_cost_forecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* `get_dimension_values` - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* `get_reservation_coverage` - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* `get_reservation_purchase_recommendation` - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* `get_reservation_utilization` - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* `get_rightsizing_recommendation` - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `get_savings_plans_coverage` - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* `get_savings_plans_purchase_recommendation` - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* `get_savings_plans_utilization` - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* `get_savings_plans_utilization_details` - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* `get_tags` - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* `get_usage_forecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* `list_cost_allocation_tags` - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* `list_cost_category_definitions` - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* `list_savings_plans_purchase_recommendation_generation` - Retrieves a list of your historical recommendation generations within the past 30 days.
* `list_tags_for_resource` - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* `provide_anomaly_feedback` - Modifies the feedback property of a given cost anomaly. 
* `start_savings_plans_purchase_recommendation_generation` - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* `tag_resource` - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* `untag_resource` - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* `update_anomaly_monitor` - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* `update_anomaly_subscription` - Updates an existing cost anomaly monitor subscription. 
* `update_cost_allocation_tags_status` - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* `update_cost_category_definition` - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
