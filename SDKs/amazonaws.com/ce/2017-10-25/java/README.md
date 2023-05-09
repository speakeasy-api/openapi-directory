# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorResponse;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalyMonitor;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.MonitorDimensionEnum;
import org.openapis.openapi.models.shared.MonitorTypeEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalyMonitorRequest req = new CreateAnomalyMonitorRequest(                new CreateAnomalyMonitorRequest(                new AnomalyMonitor("provident", MonitorTypeEnum.CUSTOM) {{
                                                creationDate = "quibusdam";
                                                dimensionalValueCount = 602763L;
                                                lastEvaluatedDate = "nulla";
                                                lastUpdatedDate = "corrupti";
                                                monitorArn = "illum";
                                                monitorDimension = MonitorDimensionEnum.SERVICE;
                                                monitorSpecification = new Expression() {{
                                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    costCategories = new CostCategoryValues() {{
                                                        key = "error";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.STARTS_WITH),
                                                        }};
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                            add("delectus"),
                                                            add("tempora"),
                                                            add("suscipit"),
                                                        }};
                                                    }};;
                                                    dimensions = new DimensionValues() {{
                                                        key = DimensionEnum.SUBSCRIPTION_ID;
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                                            add(MatchOptionEnum.CONTAINS),
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.CONTAINS),
                                                        }};
                                                        values = new String[]{{
                                                            add("recusandae"),
                                                            add("temporibus"),
                                                        }};
                                                    }};;
                                                    not = new Expression();;
                                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                    }};
                                                    tags = new TagValues() {{
                                                        key = "quis";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                                        }};
                                                        values = new String[]{{
                                                            add("ipsam"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("odit", "at") {{
                                        key = "sapiente";
                                        value = "quo";
                                    }}),
                                    add(new ResourceTag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new ResourceTag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new ResourceTag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, CreateAnomalyMonitorXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_MONITOR) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateAnomalyMonitorResponse res = sdk.createAnomalyMonitor(req);

            if (res.createAnomalyMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAnomalyMonitor](docs/sdk/README.md#createanomalymonitor) - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* [createAnomalySubscription](docs/sdk/README.md#createanomalysubscription) - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* [createCostCategoryDefinition](docs/sdk/README.md#createcostcategorydefinition) - Creates a new Cost Category with the requested name and rules.
* [deleteAnomalyMonitor](docs/sdk/README.md#deleteanomalymonitor) - Deletes a cost anomaly monitor. 
* [deleteAnomalySubscription](docs/sdk/README.md#deleteanomalysubscription) - Deletes a cost anomaly subscription. 
* [deleteCostCategoryDefinition](docs/sdk/README.md#deletecostcategorydefinition) - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* [describeCostCategoryDefinition](docs/sdk/README.md#describecostcategorydefinition) - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* [getAnomalies](docs/sdk/README.md#getanomalies) - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* [getAnomalyMonitors](docs/sdk/README.md#getanomalymonitors) - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getAnomalySubscriptions](docs/sdk/README.md#getanomalysubscriptions) - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getCostAndUsage](docs/sdk/README.md#getcostandusage) - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getCostAndUsageWithResources](docs/sdk/README.md#getcostandusagewithresources) - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* [getCostCategories](docs/sdk/README.md#getcostcategories) - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* [getCostForecast](docs/sdk/README.md#getcostforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* [getDimensionValues](docs/sdk/README.md#getdimensionvalues) - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* [getReservationCoverage](docs/sdk/README.md#getreservationcoverage) - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* [getReservationPurchaseRecommendation](docs/sdk/README.md#getreservationpurchaserecommendation) - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* [getReservationUtilization](docs/sdk/README.md#getreservationutilization) - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* [getRightsizingRecommendation](docs/sdk/README.md#getrightsizingrecommendation) - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getSavingsPlansCoverage](docs/sdk/README.md#getsavingsplanscoverage) - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* [getSavingsPlansPurchaseRecommendation](docs/sdk/README.md#getsavingsplanspurchaserecommendation) - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* [getSavingsPlansUtilization](docs/sdk/README.md#getsavingsplansutilization) - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* [getSavingsPlansUtilizationDetails](docs/sdk/README.md#getsavingsplansutilizationdetails) - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* [getTags](docs/sdk/README.md#gettags) - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* [getUsageForecast](docs/sdk/README.md#getusageforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* [listCostAllocationTags](docs/sdk/README.md#listcostallocationtags) - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* [listCostCategoryDefinitions](docs/sdk/README.md#listcostcategorydefinitions) - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* [listSavingsPlansPurchaseRecommendationGeneration](docs/sdk/README.md#listsavingsplanspurchaserecommendationgeneration) - Retrieves a list of your historical recommendation generations within the past 30 days.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* [provideAnomalyFeedback](docs/sdk/README.md#provideanomalyfeedback) - Modifies the feedback property of a given cost anomaly. 
* [startSavingsPlansPurchaseRecommendationGeneration](docs/sdk/README.md#startsavingsplanspurchaserecommendationgeneration) - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* [tagResource](docs/sdk/README.md#tagresource) - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* [updateAnomalyMonitor](docs/sdk/README.md#updateanomalymonitor) - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* [updateAnomalySubscription](docs/sdk/README.md#updateanomalysubscription) - Updates an existing cost anomaly monitor subscription. 
* [updateCostAllocationTagsStatus](docs/sdk/README.md#updatecostallocationtagsstatus) - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* [updateCostCategoryDefinition](docs/sdk/README.md#updatecostcategorydefinition) - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
