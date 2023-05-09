# SDK

## Overview

<p>You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about the costs that are associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ce/>
### Available Operations

* [createAnomalyMonitor](#createanomalymonitor) - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* [createAnomalySubscription](#createanomalysubscription) - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* [createCostCategoryDefinition](#createcostcategorydefinition) - Creates a new Cost Category with the requested name and rules.
* [deleteAnomalyMonitor](#deleteanomalymonitor) - Deletes a cost anomaly monitor. 
* [deleteAnomalySubscription](#deleteanomalysubscription) - Deletes a cost anomaly subscription. 
* [deleteCostCategoryDefinition](#deletecostcategorydefinition) - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* [describeCostCategoryDefinition](#describecostcategorydefinition) - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* [getAnomalies](#getanomalies) - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* [getAnomalyMonitors](#getanomalymonitors) - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getAnomalySubscriptions](#getanomalysubscriptions) - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getCostAndUsage](#getcostandusage) - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getCostAndUsageWithResources](#getcostandusagewithresources) - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* [getCostCategories](#getcostcategories) - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* [getCostForecast](#getcostforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* [getDimensionValues](#getdimensionvalues) - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* [getReservationCoverage](#getreservationcoverage) - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* [getReservationPurchaseRecommendation](#getreservationpurchaserecommendation) - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* [getReservationUtilization](#getreservationutilization) - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* [getRightsizingRecommendation](#getrightsizingrecommendation) - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getSavingsPlansCoverage](#getsavingsplanscoverage) - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* [getSavingsPlansPurchaseRecommendation](#getsavingsplanspurchaserecommendation) - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* [getSavingsPlansUtilization](#getsavingsplansutilization) - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* [getSavingsPlansUtilizationDetails](#getsavingsplansutilizationdetails) - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* [getTags](#gettags) - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* [getUsageForecast](#getusageforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* [listCostAllocationTags](#listcostallocationtags) - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* [listCostCategoryDefinitions](#listcostcategorydefinitions) - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* [listSavingsPlansPurchaseRecommendationGeneration](#listsavingsplanspurchaserecommendationgeneration) - Retrieves a list of your historical recommendation generations within the past 30 days.
* [listTagsForResource](#listtagsforresource) - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* [provideAnomalyFeedback](#provideanomalyfeedback) - Modifies the feedback property of a given cost anomaly. 
* [startSavingsPlansPurchaseRecommendationGeneration](#startsavingsplanspurchaserecommendationgeneration) - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* [tagResource](#tagresource) - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* [untagResource](#untagresource) - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* [updateAnomalyMonitor](#updateanomalymonitor) - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* [updateAnomalySubscription](#updateanomalysubscription) - Updates an existing cost anomaly monitor subscription. 
* [updateCostAllocationTagsStatus](#updatecostallocationtagsstatus) - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* [updateCostCategoryDefinition](#updatecostcategorydefinition) - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

## createAnomalyMonitor

Creates a new cost anomaly detection monitor with the requested type and monitor specification. 

### Example Usage

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
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalyMonitorRequest req = new CreateAnomalyMonitorRequest(                new CreateAnomalyMonitorRequest(                new AnomalyMonitor("molestiae", MonitorTypeEnum.DIMENSIONAL) {{
                                                creationDate = "qui";
                                                dimensionalValueCount = 774234L;
                                                lastEvaluatedDate = "cum";
                                                lastUpdatedDate = "esse";
                                                monitorArn = "ipsum";
                                                monitorDimension = MonitorDimensionEnum.SERVICE;
                                                monitorSpecification = new Expression() {{
                                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    costCategories = new CostCategoryValues() {{
                                                        key = "aspernatur";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.STARTS_WITH),
                                                        }};
                                                        values = new String[]{{
                                                            add("sed"),
                                                            add("iste"),
                                                            add("dolor"),
                                                        }};
                                                    }};;
                                                    dimensions = new DimensionValues() {{
                                                        key = DimensionEnum.CACHE_ENGINE;
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                        }};
                                                        values = new String[]{{
                                                            add("in"),
                                                            add("corporis"),
                                                            add("iste"),
                                                        }};
                                                    }};;
                                                    not = new Expression();;
                                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    tags = new TagValues() {{
                                                        key = "saepe";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.EQUALS),
                                                            add(MatchOptionEnum.EQUALS),
                                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                        }};
                                                        values = new String[]{{
                                                            add("mollitia"),
                                                            add("laborum"),
                                                            add("dolores"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("nobis", "enim") {{
                                        key = "corporis";
                                        value = "explicabo";
                                    }}),
                                }};
                            }};, CreateAnomalyMonitorXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_MONITOR) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CreateAnomalyMonitorResponse res = sdk.sdk.createAnomalyMonitor(req);

            if (res.createAnomalyMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAnomalySubscription

Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnomalySubscriptionRequest;
import org.openapis.openapi.models.operations.CreateAnomalySubscriptionResponse;
import org.openapis.openapi.models.operations.CreateAnomalySubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalySubscription;
import org.openapis.openapi.models.shared.AnomalySubscriptionFrequencyEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.CreateAnomalySubscriptionRequest;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriberStatusEnum;
import org.openapis.openapi.models.shared.SubscriberTypeEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalySubscriptionRequest req = new CreateAnomalySubscriptionRequest(                new CreateAnomalySubscriptionRequest(                new AnomalySubscription(AnomalySubscriptionFrequencyEnum.WEEKLY,                 new String[]{{
                                                                add("mollitia"),
                                                            }},                 new org.openapis.openapi.models.shared.Subscriber[]{{
                                                                add(new Subscriber() {{
                                                                    address = "1965 Harvey Landing";
                                                                    status = SubscriberStatusEnum.CONFIRMED;
                                                                    type = SubscriberTypeEnum.EMAIL;
                                                                }}),
                                                            }}, "error") {{
                                                accountId = "quia";
                                                subscriptionArn = "quis";
                                                threshold = 1103.75;
                                                thresholdExpression = new Expression() {{
                                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    costCategories = new CostCategoryValues() {{
                                                        key = "animi";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.ABSENT),
                                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                                        }};
                                                        values = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                    }};;
                                                    dimensions = new DimensionValues() {{
                                                        key = DimensionEnum.OPERATING_SYSTEM;
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                                            add(MatchOptionEnum.EQUALS),
                                                            add(MatchOptionEnum.EQUALS),
                                                        }};
                                                        values = new String[]{{
                                                            add("temporibus"),
                                                            add("laborum"),
                                                            add("quasi"),
                                                        }};
                                                    }};;
                                                    not = new Expression();;
                                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    tags = new TagValues() {{
                                                        key = "voluptatibus";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.CONTAINS),
                                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                            add(MatchOptionEnum.EQUALS),
                                                        }};
                                                        values = new String[]{{
                                                            add("voluptate"),
                                                            add("cum"),
                                                            add("perferendis"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("maiores", "dicta") {{
                                        key = "reprehenderit";
                                        value = "ut";
                                    }}),
                                }};
                            }};, CreateAnomalySubscriptionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_SUBSCRIPTION) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateAnomalySubscriptionResponse res = sdk.sdk.createAnomalySubscription(req);

            if (res.createAnomalySubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCostCategoryDefinition

Creates a new Cost Category with the requested name and rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCostCategoryDefinitionRequest;
import org.openapis.openapi.models.operations.CreateCostCategoryDefinitionResponse;
import org.openapis.openapi.models.operations.CreateCostCategoryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryInheritedValueDimension;
import org.openapis.openapi.models.shared.CostCategoryInheritedValueDimensionNameEnum;
import org.openapis.openapi.models.shared.CostCategoryRule;
import org.openapis.openapi.models.shared.CostCategoryRuleTypeEnum;
import org.openapis.openapi.models.shared.CostCategoryRuleVersionEnum;
import org.openapis.openapi.models.shared.CostCategorySplitChargeMethodEnum;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRule;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameterTypeEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.CreateCostCategoryDefinitionRequest;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCostCategoryDefinitionRequest req = new CreateCostCategoryDefinitionRequest(                new CreateCostCategoryDefinitionRequest("repudiandae", CostCategoryRuleVersionEnum.COST_CATEGORY_EXPRESSION_V1,                 new org.openapis.openapi.models.shared.CostCategoryRule[]{{
                                                add(new CostCategoryRule() {{
                                                    inheritedValue = new CostCategoryInheritedValueDimension() {{
                                                        dimensionKey = "ipsum";
                                                        dimensionName = CostCategoryInheritedValueDimensionNameEnum.TAG;
                                                    }};
                                                    rule = new Expression() {{
                                                        and = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                        }};
                                                        costCategories = new CostCategoryValues() {{
                                                            key = "excepturi";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.STARTS_WITH),
                                                                add(MatchOptionEnum.CONTAINS),
                                                                add(MatchOptionEnum.CONTAINS),
                                                                add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                            }};
                                                            values = new String[]{{
                                                                add("repudiandae"),
                                                            }};
                                                        }};
                                                        dimensions = new DimensionValues() {{
                                                            key = DimensionEnum.DATABASE_ENGINE;
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                            }};
                                                            values = new String[]{{
                                                                add("enim"),
                                                                add("consequatur"),
                                                            }};
                                                        }};
                                                        not = new Expression() {{}};
                                                        or = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                        }};
                                                        tags = new TagValues() {{
                                                            key = "quibusdam";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.CASE_SENSITIVE),
                                                            }};
                                                            values = new String[]{{
                                                                add("quibusdam"),
                                                                add("labore"),
                                                                add("modi"),
                                                            }};
                                                        }};
                                                    }};
                                                    type = CostCategoryRuleTypeEnum.REGULAR;
                                                    value = "aliquid";
                                                }}),
                                            }}) {{
                                defaultValue = "cupiditate";
                                effectiveStart = "quos";
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("ipsam", "alias") {{
                                        key = "magni";
                                        value = "assumenda";
                                    }}),
                                }};
                                splitChargeRules = new org.openapis.openapi.models.shared.CostCategorySplitChargeRule[]{{
                                    add(new CostCategorySplitChargeRule(CostCategorySplitChargeMethodEnum.EVEN, "ea",                 new String[]{{
                                                        add("laborum"),
                                                        add("accusamus"),
                                                    }}) {{
                                        method = CostCategorySplitChargeMethodEnum.EVEN;
                                        parameters = new org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter[]{{
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("delectus"),
                                                                add("eum"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("facilis"),
                                                    add("tempore"),
                                                }};
                                            }}),
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("aliquid"),
                                                                add("provident"),
                                                                add("necessitatibus"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("eligendi"),
                                                }};
                                            }}),
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("dolorum"),
                                                                add("in"),
                                                                add("in"),
                                                                add("illum"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }};
                                            }}),
                                        }};
                                        source = "maiores";
                                        targets = new String[]{{
                                            add("dicta"),
                                            add("magnam"),
                                            add("cumque"),
                                        }};
                                    }}),
                                }};
                            }};, CreateCostCategoryDefinitionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_CREATE_COST_CATEGORY_DEFINITION) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
            }};            

            CreateCostCategoryDefinitionResponse res = sdk.sdk.createCostCategoryDefinition(req);

            if (res.createCostCategoryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnomalyMonitor

Deletes a cost anomaly monitor. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnomalyMonitorRequest;
import org.openapis.openapi.models.operations.DeleteAnomalyMonitorResponse;
import org.openapis.openapi.models.operations.DeleteAnomalyMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAnomalyMonitorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAnomalyMonitorRequest req = new DeleteAnomalyMonitorRequest(                new DeleteAnomalyMonitorRequest("id");, DeleteAnomalyMonitorXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_DELETE_ANOMALY_MONITOR) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteAnomalyMonitorResponse res = sdk.sdk.deleteAnomalyMonitor(req);

            if (res.deleteAnomalyMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnomalySubscription

Deletes a cost anomaly subscription. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnomalySubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteAnomalySubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteAnomalySubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAnomalySubscriptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAnomalySubscriptionRequest req = new DeleteAnomalySubscriptionRequest(                new DeleteAnomalySubscriptionRequest("omnis");, DeleteAnomalySubscriptionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_DELETE_ANOMALY_SUBSCRIPTION) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteAnomalySubscriptionResponse res = sdk.sdk.deleteAnomalySubscription(req);

            if (res.deleteAnomalySubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCostCategoryDefinition

Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCostCategoryDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteCostCategoryDefinitionResponse;
import org.openapis.openapi.models.operations.DeleteCostCategoryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCostCategoryDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCostCategoryDefinitionRequest req = new DeleteCostCategoryDefinitionRequest(                new DeleteCostCategoryDefinitionRequest("suscipit");, DeleteCostCategoryDefinitionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_DELETE_COST_CATEGORY_DEFINITION) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteCostCategoryDefinitionResponse res = sdk.sdk.deleteCostCategoryDefinition(req);

            if (res.deleteCostCategoryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCostCategoryDefinition

<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCostCategoryDefinitionRequest;
import org.openapis.openapi.models.operations.DescribeCostCategoryDefinitionResponse;
import org.openapis.openapi.models.operations.DescribeCostCategoryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCostCategoryDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCostCategoryDefinitionRequest req = new DescribeCostCategoryDefinitionRequest(                new DescribeCostCategoryDefinitionRequest("excepturi") {{
                                effectiveOn = "ullam";
                            }};, DescribeCostCategoryDefinitionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_DESCRIBE_COST_CATEGORY_DEFINITION) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribeCostCategoryDefinitionResponse res = sdk.sdk.describeCostCategoryDefinition(req);

            if (res.describeCostCategoryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnomalies

Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnomaliesRequest;
import org.openapis.openapi.models.operations.GetAnomaliesResponse;
import org.openapis.openapi.models.operations.GetAnomaliesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalyDateInterval;
import org.openapis.openapi.models.shared.AnomalyFeedbackTypeEnum;
import org.openapis.openapi.models.shared.GetAnomaliesRequest;
import org.openapis.openapi.models.shared.NumericOperatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TotalImpactFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnomaliesRequest req = new GetAnomaliesRequest(                new GetAnomaliesRequest(                new AnomalyDateInterval("eum") {{
                                                endDate = "dolor";
                                            }};) {{
                                feedback = AnomalyFeedbackTypeEnum.PLANNED_ACTIVITY;
                                maxResults = 141264L;
                                monitorArn = "nemo";
                                nextPageToken = "quasi";
                                totalImpact = new TotalImpactFilter(NumericOperatorEnum.LESS_THAN_OR_EQUAL, 9840.43) {{
                                    endValue = 8919.24;
                                }};;
                            }};, GetAnomaliesXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALIES) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            GetAnomaliesResponse res = sdk.sdk.getAnomalies(req);

            if (res.getAnomaliesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnomalyMonitors

Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnomalyMonitorsRequest;
import org.openapis.openapi.models.operations.GetAnomalyMonitorsResponse;
import org.openapis.openapi.models.operations.GetAnomalyMonitorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAnomalyMonitorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnomalyMonitorsRequest req = new GetAnomalyMonitorsRequest(                new GetAnomalyMonitorsRequest() {{
                                maxResults = 352312L;
                                monitorArnList = new String[]{{
                                    add("nihil"),
                                    add("repellat"),
                                    add("quibusdam"),
                                }};
                                nextPageToken = "sed";
                            }};, GetAnomalyMonitorsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALY_MONITORS) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
            }};            

            GetAnomalyMonitorsResponse res = sdk.sdk.getAnomalyMonitors(req);

            if (res.getAnomalyMonitorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnomalySubscriptions

Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnomalySubscriptionsRequest;
import org.openapis.openapi.models.operations.GetAnomalySubscriptionsResponse;
import org.openapis.openapi.models.operations.GetAnomalySubscriptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAnomalySubscriptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnomalySubscriptionsRequest req = new GetAnomalySubscriptionsRequest(                new GetAnomalySubscriptionsRequest() {{
                                maxResults = 779051L;
                                monitorArn = "illum";
                                nextPageToken = "pariatur";
                                subscriptionArnList = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                            }};, GetAnomalySubscriptionsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALY_SUBSCRIPTIONS) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            GetAnomalySubscriptionsResponse res = sdk.sdk.getAnomalySubscriptions(req);

            if (res.getAnomalySubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostAndUsage

<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostAndUsageRequest;
import org.openapis.openapi.models.operations.GetCostAndUsageResponse;
import org.openapis.openapi.models.operations.GetCostAndUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetCostAndUsageRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.GroupDefinition;
import org.openapis.openapi.models.shared.GroupDefinitionTypeEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostAndUsageRequest req = new GetCostAndUsageRequest(                new GetCostAndUsageRequest(GranularityEnum.DAILY,                 new String[]{{
                                                add("nemo"),
                                                add("voluptatibus"),
                                                add("perferendis"),
                                                add("fugiat"),
                                            }},                 new DateInterval("amet", "aut");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "corporis";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.STARTS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("dignissimos"),
                                            add("eaque"),
                                            add("quis"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.REGION;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                        }};
                                        values = new String[]{{
                                            add("minus"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "dolor";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("voluptatem"),
                                            add("porro"),
                                        }};
                                    }};;
                                }};;
                                groupBy = new org.openapis.openapi.models.shared.GroupDefinition[]{{
                                    add(new GroupDefinition() {{
                                        key = "blanditiis";
                                        type = GroupDefinitionTypeEnum.TAG;
                                    }}),
                                }};
                                nextPageToken = "eaque";
                            }};, GetCostAndUsageXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_COST_AND_USAGE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            GetCostAndUsageResponse res = sdk.sdk.getCostAndUsage(req);

            if (res.getCostAndUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostAndUsageWithResources

<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostAndUsageWithResourcesRequest;
import org.openapis.openapi.models.operations.GetCostAndUsageWithResourcesResponse;
import org.openapis.openapi.models.operations.GetCostAndUsageWithResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetCostAndUsageWithResourcesRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.GroupDefinition;
import org.openapis.openapi.models.shared.GroupDefinitionTypeEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostAndUsageWithResourcesRequest req = new GetCostAndUsageWithResourcesRequest(                new GetCostAndUsageWithResourcesRequest(                new Expression() {{
                                                and = new org.openapis.openapi.models.shared.Expression[]{{
                                                    add(new Expression() {{}}),
                                                    add(new Expression() {{}}),
                                                    add(new Expression() {{}}),
                                                }};
                                                costCategories = new CostCategoryValues() {{
                                                    key = "pariatur";
                                                    matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                        add(MatchOptionEnum.CASE_INSENSITIVE),
                                                        add(MatchOptionEnum.CASE_SENSITIVE),
                                                        add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                    }};
                                                    values = new String[]{{
                                                        add("quos"),
                                                        add("aliquid"),
                                                    }};
                                                }};;
                                                dimensions = new DimensionValues() {{
                                                    key = DimensionEnum.SERVICE;
                                                    matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                        add(MatchOptionEnum.ABSENT),
                                                    }};
                                                    values = new String[]{{
                                                        add("ipsum"),
                                                    }};
                                                }};;
                                                not = new Expression();;
                                                or = new org.openapis.openapi.models.shared.Expression[]{{
                                                    add(new Expression() {{}}),
                                                    add(new Expression() {{}}),
                                                    add(new Expression() {{}}),
                                                    add(new Expression() {{}}),
                                                }};
                                                tags = new TagValues() {{
                                                    key = "excepturi";
                                                    matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                        add(MatchOptionEnum.ENDS_WITH),
                                                        add(MatchOptionEnum.ENDS_WITH),
                                                        add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                    }};
                                                    values = new String[]{{
                                                        add("dolorum"),
                                                    }};
                                                }};;
                                            }};, GranularityEnum.DAILY,                 new DateInterval("veritatis", "ipsa");) {{
                                groupBy = new org.openapis.openapi.models.shared.GroupDefinition[]{{
                                    add(new GroupDefinition() {{
                                        key = "iure";
                                        type = GroupDefinitionTypeEnum.TAG;
                                    }}),
                                }};
                                metrics = new String[]{{
                                    add("accusamus"),
                                    add("quidem"),
                                }};
                                nextPageToken = "voluptatibus";
                            }};, GetCostAndUsageWithResourcesXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_COST_AND_USAGE_WITH_RESOURCES) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
            }};            

            GetCostAndUsageWithResourcesResponse res = sdk.sdk.getCostAndUsageWithResources(req);

            if (res.getCostAndUsageWithResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostCategories

<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostCategoriesRequest;
import org.openapis.openapi.models.operations.GetCostCategoriesResponse;
import org.openapis.openapi.models.operations.GetCostCategoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetCostCategoriesRequest;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostCategoriesRequest req = new GetCostCategoriesRequest(                new GetCostCategoriesRequest(                new DateInterval("dolorum", "iusto");) {{
                                costCategoryName = "voluptate";
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "deleniti";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("ipsum"),
                                            add("voluptate"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.BILLING_ENTITY;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.ABSENT),
                                        }};
                                        values = new String[]{{
                                            add("accusamus"),
                                            add("ad"),
                                            add("saepe"),
                                            add("suscipit"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "provident";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("alias"),
                                            add("at"),
                                            add("quaerat"),
                                        }};
                                    }};;
                                }};;
                                maxResults = 273542L;
                                nextPageToken = "vel";
                                searchString = "quod";
                                sortBy = new org.openapis.openapi.models.shared.SortDefinition[]{{
                                    add(new SortDefinition("a") {{
                                        key = "qui";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                    add(new SortDefinition("iusto") {{
                                        key = "esse";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                    add(new SortDefinition("tenetur") {{
                                        key = "ipsum";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                    add(new SortDefinition("accusamus") {{
                                        key = "amet";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                }};
                            }};, GetCostCategoriesXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_COST_CATEGORIES) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
            }};            

            GetCostCategoriesResponse res = sdk.sdk.getCostCategories(req);

            if (res.getCostCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostForecastRequest;
import org.openapis.openapi.models.operations.GetCostForecastResponse;
import org.openapis.openapi.models.operations.GetCostForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetCostForecastRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.MetricEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostForecastRequest req = new GetCostForecastRequest(                new GetCostForecastRequest(GranularityEnum.DAILY, MetricEnum.UNBLENDED_COST,                 new DateInterval("vel", "libero");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "deserunt";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.STARTS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("cupiditate"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.SAVINGS_PLAN_ARN;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("dolores"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "facilis";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("qui"),
                                            add("neque"),
                                            add("fugit"),
                                            add("magni"),
                                        }};
                                    }};;
                                }};;
                                predictionIntervalLevel = 488056L;
                            }};, GetCostForecastXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_COST_FORECAST) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            GetCostForecastResponse res = sdk.sdk.getCostForecast(req);

            if (res.getCostForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDimensionValues

Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDimensionValuesRequest;
import org.openapis.openapi.models.operations.GetDimensionValuesResponse;
import org.openapis.openapi.models.operations.GetDimensionValuesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContextEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetDimensionValuesRequest;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDimensionValuesRequest req = new GetDimensionValuesRequest(                new GetDimensionValuesRequest(DimensionEnum.LINKED_ACCOUNT_NAME,                 new DateInterval("saepe", "ipsum");) {{
                                context = ContextEnum.COST_AND_USAGE;
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "quos";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CONTAINS),
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("dolore"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.USAGE_TYPE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("quae"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "quas";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("ut"),
                                            add("facilis"),
                                            add("cupiditate"),
                                            add("qui"),
                                        }};
                                    }};;
                                }};;
                                maxResults = 63955L;
                                nextPageToken = "laudantium";
                                searchString = "odio";
                                sortBy = new org.openapis.openapi.models.shared.SortDefinition[]{{
                                    add(new SortDefinition("vero") {{
                                        key = "voluptatibus";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                    add(new SortDefinition("ipsum") {{
                                        key = "omnis";
                                        sortOrder = SortOrderEnum.ASCENDING;
                                    }}),
                                    add(new SortDefinition("consectetur") {{
                                        key = "delectus";
                                        sortOrder = SortOrderEnum.ASCENDING;
                                    }}),
                                }};
                            }};, GetDimensionValuesXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_DIMENSION_VALUES) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            GetDimensionValuesResponse res = sdk.sdk.getDimensionValues(req);

            if (res.getDimensionValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReservationCoverage

<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReservationCoverageRequest;
import org.openapis.openapi.models.operations.GetReservationCoverageResponse;
import org.openapis.openapi.models.operations.GetReservationCoverageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetReservationCoverageRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.GroupDefinition;
import org.openapis.openapi.models.shared.GroupDefinitionTypeEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReservationCoverageRequest req = new GetReservationCoverageRequest(                new GetReservationCoverageRequest(                new DateInterval("facilis", "vero");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "dolore";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.CONTAINS),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("voluptatibus"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.RECORD_TYPE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("eligendi"),
                                            add("ducimus"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "officia";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("vel"),
                                        }};
                                    }};;
                                }};;
                                granularity = GranularityEnum.HOURLY;
                                groupBy = new org.openapis.openapi.models.shared.GroupDefinition[]{{
                                    add(new GroupDefinition() {{
                                        key = "ratione";
                                        type = GroupDefinitionTypeEnum.TAG;
                                    }}),
                                    add(new GroupDefinition() {{
                                        key = "laudantium";
                                        type = GroupDefinitionTypeEnum.DIMENSION;
                                    }}),
                                }};
                                maxResults = 224317L;
                                metrics = new String[]{{
                                    add("quasi"),
                                    add("ex"),
                                    add("nulla"),
                                    add("excepturi"),
                                }};
                                nextPageToken = "voluptatibus";
                                sortBy = new SortDefinition("nostrum") {{
                                    sortOrder = SortOrderEnum.DESCENDING;
                                }};;
                            }};, GetReservationCoverageXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_COVERAGE) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            GetReservationCoverageResponse res = sdk.sdk.getReservationCoverage(req);

            if (res.getReservationCoverageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReservationPurchaseRecommendation

<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReservationPurchaseRecommendationRequest;
import org.openapis.openapi.models.operations.GetReservationPurchaseRecommendationResponse;
import org.openapis.openapi.models.operations.GetReservationPurchaseRecommendationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountScopeEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Ec2Specification;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetReservationPurchaseRecommendationRequest;
import org.openapis.openapi.models.shared.LookbackPeriodInDaysEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.OfferingClassEnum;
import org.openapis.openapi.models.shared.PaymentOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceSpecification;
import org.openapis.openapi.models.shared.TagValues;
import org.openapis.openapi.models.shared.TermInYearsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReservationPurchaseRecommendationRequest req = new GetReservationPurchaseRecommendationRequest(                new GetReservationPurchaseRecommendationRequest("magnam") {{
                                accountId = "ea";
                                accountScope = AccountScopeEnum.LINKED;
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "recusandae";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.STARTS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("a"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.RESOURCE_ID;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                        }};
                                        values = new String[]{{
                                            add("impedit"),
                                            add("aliquam"),
                                            add("fugit"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "inventore";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("placeat"),
                                            add("velit"),
                                            add("eum"),
                                        }};
                                    }};;
                                }};;
                                lookbackPeriodInDays = LookbackPeriodInDaysEnum.THIRTY_DAYS;
                                nextPageToken = "nobis";
                                pageSize = 557369L;
                                paymentOption = PaymentOptionEnum.MEDIUM_UTILIZATION;
                                serviceSpecification = new ServiceSpecification() {{
                                    ec2Specification = new Ec2Specification() {{
                                        offeringClass = OfferingClassEnum.CONVERTIBLE;
                                    }};;
                                }};;
                                termInYears = TermInYearsEnum.ONE_YEAR;
                            }};, GetReservationPurchaseRecommendationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_PURCHASE_RECOMMENDATION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "tempora";
                xAmzDate = "numquam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetReservationPurchaseRecommendationResponse res = sdk.sdk.getReservationPurchaseRecommendation(req);

            if (res.getReservationPurchaseRecommendationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReservationUtilization

Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReservationUtilizationRequest;
import org.openapis.openapi.models.operations.GetReservationUtilizationResponse;
import org.openapis.openapi.models.operations.GetReservationUtilizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetReservationUtilizationRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.GroupDefinition;
import org.openapis.openapi.models.shared.GroupDefinitionTypeEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReservationUtilizationRequest req = new GetReservationUtilizationRequest(                new GetReservationUtilizationRequest(                new DateInterval("magnam", "odio");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "esse";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CONTAINS),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("quidem"),
                                            add("fugiat"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.USAGE_TYPE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("praesentium"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "veritatis";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("neque"),
                                            add("quo"),
                                            add("illum"),
                                        }};
                                    }};;
                                }};;
                                granularity = GranularityEnum.HOURLY;
                                groupBy = new org.openapis.openapi.models.shared.GroupDefinition[]{{
                                    add(new GroupDefinition() {{
                                        key = "eius";
                                        type = GroupDefinitionTypeEnum.DIMENSION;
                                    }}),
                                    add(new GroupDefinition() {{
                                        key = "voluptas";
                                        type = GroupDefinitionTypeEnum.DIMENSION;
                                    }}),
                                    add(new GroupDefinition() {{
                                        key = "cupiditate";
                                        type = GroupDefinitionTypeEnum.DIMENSION;
                                    }}),
                                }};
                                maxResults = 272822L;
                                nextPageToken = "debitis";
                                sortBy = new SortDefinition("ipsam") {{
                                    sortOrder = SortOrderEnum.ASCENDING;
                                }};;
                            }};, GetReservationUtilizationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_UTILIZATION) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            GetReservationUtilizationResponse res = sdk.sdk.getReservationUtilization(req);

            if (res.getReservationUtilizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRightsizingRecommendation

<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRightsizingRecommendationRequest;
import org.openapis.openapi.models.operations.GetRightsizingRecommendationResponse;
import org.openapis.openapi.models.operations.GetRightsizingRecommendationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetRightsizingRecommendationRequest;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.RecommendationTargetEnum;
import org.openapis.openapi.models.shared.RightsizingRecommendationConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRightsizingRecommendationRequest req = new GetRightsizingRecommendationRequest(                new GetRightsizingRecommendationRequest("inventore") {{
                                configuration = new RightsizingRecommendationConfiguration(false, RecommendationTargetEnum.SAME_INSTANCE_FAMILY);;
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "accusamus";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("sapiente"),
                                            add("dolores"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.INSTANCE_TYPE_FAMILY;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("quas"),
                                            add("praesentium"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "deleniti";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("atque"),
                                            add("explicabo"),
                                        }};
                                    }};;
                                }};;
                                nextPageToken = "minima";
                                pageSize = 392676L;
                            }};, GetRightsizingRecommendationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_RIGHTSIZING_RECOMMENDATION) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consequuntur";
                xAmzDate = "ratione";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetRightsizingRecommendationResponse res = sdk.sdk.getRightsizingRecommendation(req);

            if (res.getRightsizingRecommendationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavingsPlansCoverage

<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavingsPlansCoverageRequest;
import org.openapis.openapi.models.operations.GetSavingsPlansCoverageResponse;
import org.openapis.openapi.models.operations.GetSavingsPlansCoverageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetSavingsPlansCoverageRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.GroupDefinition;
import org.openapis.openapi.models.shared.GroupDefinitionTypeEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavingsPlansCoverageRequest req = new GetSavingsPlansCoverageRequest(                new GetSavingsPlansCoverageRequest(                new DateInterval("et", "esse");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "accusamus";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("nam"),
                                            add("vero"),
                                            add("aliquid"),
                                            add("quasi"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.AGREEMENT_END_DATE_TIME_BEFORE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("occaecati"),
                                            add("minima"),
                                            add("distinctio"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "sit";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("consequatur"),
                                        }};
                                    }};;
                                }};;
                                granularity = GranularityEnum.HOURLY;
                                groupBy = new org.openapis.openapi.models.shared.GroupDefinition[]{{
                                    add(new GroupDefinition() {{
                                        key = "sapiente";
                                        type = GroupDefinitionTypeEnum.DIMENSION;
                                    }}),
                                    add(new GroupDefinition() {{
                                        key = "esse";
                                        type = GroupDefinitionTypeEnum.TAG;
                                    }}),
                                }};
                                maxResults = 590984L;
                                metrics = new String[]{{
                                    add("nulla"),
                                    add("quas"),
                                    add("esse"),
                                    add("quasi"),
                                }};
                                nextToken = "a";
                                sortBy = new SortDefinition("error") {{
                                    sortOrder = SortOrderEnum.DESCENDING;
                                }};;
                            }};, GetSavingsPlansCoverageXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_COVERAGE) {{
                maxResults = "pariatur";
                nextToken = "possimus";
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "asperiores";
                xAmzDate = "facere";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "quasi";
            }};            

            GetSavingsPlansCoverageResponse res = sdk.sdk.getSavingsPlansCoverage(req);

            if (res.getSavingsPlansCoverageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavingsPlansPurchaseRecommendation

Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavingsPlansPurchaseRecommendationRequest;
import org.openapis.openapi.models.operations.GetSavingsPlansPurchaseRecommendationResponse;
import org.openapis.openapi.models.operations.GetSavingsPlansPurchaseRecommendationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountScopeEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetSavingsPlansPurchaseRecommendationRequest;
import org.openapis.openapi.models.shared.LookbackPeriodInDaysEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.PaymentOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SupportedSavingsPlansTypeEnum;
import org.openapis.openapi.models.shared.TagValues;
import org.openapis.openapi.models.shared.TermInYearsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavingsPlansPurchaseRecommendationRequest req = new GetSavingsPlansPurchaseRecommendationRequest(                new GetSavingsPlansPurchaseRecommendationRequest(LookbackPeriodInDaysEnum.THIRTY_DAYS, PaymentOptionEnum.ALL_UPFRONT, SupportedSavingsPlansTypeEnum.SAGEMAKER_SP, TermInYearsEnum.ONE_YEAR) {{
                                accountScope = AccountScopeEnum.LINKED;
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "in";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("accusantium"),
                                            add("aliquam"),
                                            add("sapiente"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.OPERATION;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.STARTS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("aut"),
                                            add("voluptatum"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "quibusdam";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CONTAINS),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("architecto"),
                                            add("omnis"),
                                            add("tenetur"),
                                        }};
                                    }};;
                                }};;
                                nextPageToken = "quasi";
                                pageSize = 869489L;
                            }};, GetSavingsPlansPurchaseRecommendationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_PURCHASE_RECOMMENDATION) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "ipsa";
                xAmzDate = "minima";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetSavingsPlansPurchaseRecommendationResponse res = sdk.sdk.getSavingsPlansPurchaseRecommendation(req);

            if (res.getSavingsPlansPurchaseRecommendationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavingsPlansUtilization

<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationRequest;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationResponse;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetSavingsPlansUtilizationRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavingsPlansUtilizationRequest req = new GetSavingsPlansUtilizationRequest(                new GetSavingsPlansUtilizationRequest(                new DateInterval("temporibus", "accusantium");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "aut";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.EQUALS),
                                        }};
                                        values = new String[]{{
                                            add("non"),
                                            add("voluptatem"),
                                            add("dolor"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.DATABASE_ENGINE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                            add(MatchOptionEnum.ABSENT),
                                        }};
                                        values = new String[]{{
                                            add("aut"),
                                            add("dignissimos"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "maiores";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.STARTS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("ea"),
                                            add("quaerat"),
                                            add("consequuntur"),
                                        }};
                                    }};;
                                }};;
                                granularity = GranularityEnum.HOURLY;
                                sortBy = new SortDefinition("officia") {{
                                    sortOrder = SortOrderEnum.DESCENDING;
                                }};;
                            }};, GetSavingsPlansUtilizationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_UTILIZATION) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
            }};            

            GetSavingsPlansUtilizationResponse res = sdk.sdk.getSavingsPlansUtilization(req);

            if (res.getSavingsPlansUtilizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavingsPlansUtilizationDetails

<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationDetailsRequest;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationDetailsResponse;
import org.openapis.openapi.models.operations.GetSavingsPlansUtilizationDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetSavingsPlansUtilizationDetailsRequest;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.SavingsPlansDataTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavingsPlansUtilizationDetailsRequest req = new GetSavingsPlansUtilizationDetailsRequest(                new GetSavingsPlansUtilizationDetailsRequest(                new DateInterval("labore", "ab");) {{
                                dataType = new org.openapis.openapi.models.shared.SavingsPlansDataTypeEnum[]{{
                                    add(SavingsPlansDataTypeEnum.AMORTIZED_COMMITMENT),
                                }};
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "suscipit";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("totam"),
                                            add("fugiat"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.SCOPE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CONTAINS),
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("possimus"),
                                            add("facilis"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "commodi";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("nemo"),
                                            add("recusandae"),
                                            add("aliquid"),
                                            add("aperiam"),
                                        }};
                                    }};;
                                }};;
                                maxResults = 738683L;
                                nextToken = "consectetur";
                                sortBy = new SortDefinition("in") {{
                                    sortOrder = SortOrderEnum.ASCENDING;
                                }};;
                            }};, GetSavingsPlansUtilizationDetailsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_UTILIZATION_DETAILS) {{
                maxResults = "earum";
                nextToken = "facere";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetSavingsPlansUtilizationDetailsResponse res = sdk.sdk.getSavingsPlansUtilizationDetails(req);

            if (res.getSavingsPlansUtilizationDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.operations.GetTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetTagsRequest;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDefinition;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest(                new GetTagsRequest(                new DateInterval("sunt", "asperiores");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "non";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                        }};
                                        values = new String[]{{
                                            add("a"),
                                            add("debitis"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.SERVICE;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("voluptates"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "vitae";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.ABSENT),
                                            add(MatchOptionEnum.ENDS_WITH),
                                        }};
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("minima"),
                                        }};
                                    }};;
                                }};;
                                maxResults = 748789L;
                                nextPageToken = "dolorum";
                                searchString = "adipisci";
                                sortBy = new org.openapis.openapi.models.shared.SortDefinition[]{{
                                    add(new SortDefinition("in") {{
                                        key = "dolores";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                    add(new SortDefinition("officiis") {{
                                        key = "dolore";
                                        sortOrder = SortOrderEnum.ASCENDING;
                                    }}),
                                    add(new SortDefinition("adipisci") {{
                                        key = "temporibus";
                                        sortOrder = SortOrderEnum.ASCENDING;
                                    }}),
                                    add(new SortDefinition("quas") {{
                                        key = "cum";
                                        sortOrder = SortOrderEnum.DESCENDING;
                                    }}),
                                }};
                                tagKey = "hic";
                            }};, GetTagsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_TAGS) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "corrupti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "totam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "exercitationem";
            }};            

            GetTagsResponse res = sdk.sdk.getTags(req);

            if (res.getTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsageForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageForecastRequest;
import org.openapis.openapi.models.operations.GetUsageForecastResponse;
import org.openapis.openapi.models.operations.GetUsageForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DateInterval;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.GetUsageForecastRequest;
import org.openapis.openapi.models.shared.GranularityEnum;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.MetricEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsageForecastRequest req = new GetUsageForecastRequest(                new GetUsageForecastRequest(GranularityEnum.DAILY, MetricEnum.NET_AMORTIZED_COST,                 new DateInterval("sed", "reiciendis");) {{
                                filter = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "asperiores";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.EQUALS),
                                        }};
                                        values = new String[]{{
                                            add("dolore"),
                                            add("laborum"),
                                            add("sed"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.PLATFORM;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                            add(MatchOptionEnum.ABSENT),
                                        }};
                                        values = new String[]{{
                                            add("unde"),
                                            add("architecto"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "sapiente";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.CONTAINS),
                                        }};
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("sed"),
                                            add("provident"),
                                            add("eius"),
                                        }};
                                    }};;
                                }};;
                                predictionIntervalLevel = 896762L;
                            }};, GetUsageForecastXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_GET_USAGE_FORECAST) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ea";
                xAmzCredential = "occaecati";
                xAmzDate = "quos";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "tempora";
            }};            

            GetUsageForecastResponse res = sdk.sdk.getUsageForecast(req);

            if (res.getUsageForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCostAllocationTags

Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCostAllocationTagsRequest;
import org.openapis.openapi.models.operations.ListCostAllocationTagsResponse;
import org.openapis.openapi.models.operations.ListCostAllocationTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostAllocationTagStatusEnum;
import org.openapis.openapi.models.shared.CostAllocationTagTypeEnum;
import org.openapis.openapi.models.shared.ListCostAllocationTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCostAllocationTagsRequest req = new ListCostAllocationTagsRequest(                new ListCostAllocationTagsRequest() {{
                                maxResults = 970076L;
                                nextToken = "ex";
                                status = CostAllocationTagStatusEnum.ACTIVE;
                                tagKeys = new String[]{{
                                    add("officiis"),
                                }};
                                type = CostAllocationTagTypeEnum.USER_DEFINED;
                            }};, ListCostAllocationTagsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_LIST_COST_ALLOCATION_TAGS) {{
                maxResults = "facilis";
                nextToken = "quaerat";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "debitis";
                xAmzDate = "rem";
                xAmzSecurityToken = "sit";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "error";
            }};            

            ListCostAllocationTagsResponse res = sdk.sdk.listCostAllocationTags(req);

            if (res.listCostAllocationTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCostCategoryDefinitions

Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCostCategoryDefinitionsRequest;
import org.openapis.openapi.models.operations.ListCostCategoryDefinitionsResponse;
import org.openapis.openapi.models.operations.ListCostCategoryDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCostCategoryDefinitionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCostCategoryDefinitionsRequest req = new ListCostCategoryDefinitionsRequest(                new ListCostCategoryDefinitionsRequest() {{
                                effectiveOn = "minima";
                                maxResults = 924159L;
                                nextToken = "reiciendis";
                            }};, ListCostCategoryDefinitionsXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_LIST_COST_CATEGORY_DEFINITIONS) {{
                maxResults = "nulla";
                nextToken = "magni";
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "numquam";
                xAmzDate = "veniam";
                xAmzSecurityToken = "in";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "beatae";
            }};            

            ListCostCategoryDefinitionsResponse res = sdk.sdk.listCostCategoryDefinitions(req);

            if (res.listCostCategoryDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSavingsPlansPurchaseRecommendationGeneration

Retrieves a list of your historical recommendation generations within the past 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSavingsPlansPurchaseRecommendationGenerationRequest;
import org.openapis.openapi.models.operations.ListSavingsPlansPurchaseRecommendationGenerationResponse;
import org.openapis.openapi.models.operations.ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GenerationStatusEnum;
import org.openapis.openapi.models.shared.ListSavingsPlansPurchaseRecommendationGenerationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSavingsPlansPurchaseRecommendationGenerationRequest req = new ListSavingsPlansPurchaseRecommendationGenerationRequest(                new ListSavingsPlansPurchaseRecommendationGenerationRequest() {{
                                generationStatus = GenerationStatusEnum.PROCESSING;
                                nextPageToken = "praesentium";
                                pageSize = 740098L;
                                recommendationIds = new String[]{{
                                    add("dolorum"),
                                    add("voluptatum"),
                                }};
                            }};, ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_LIST_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "hic";
                xAmzCredential = "expedita";
                xAmzDate = "debitis";
                xAmzSecurityToken = "neque";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nostrum";
            }};            

            ListSavingsPlansPurchaseRecommendationGenerationResponse res = sdk.sdk.listSavingsPlansPurchaseRecommendationGeneration(req);

            if (res.listSavingsPlansPurchaseRecommendationGenerationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("dolorum");, ListTagsForResourceXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "tempora";
                xAmzDate = "atque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provideAnomalyFeedback

Modifies the feedback property of a given cost anomaly. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvideAnomalyFeedbackRequest;
import org.openapis.openapi.models.operations.ProvideAnomalyFeedbackResponse;
import org.openapis.openapi.models.operations.ProvideAnomalyFeedbackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalyFeedbackTypeEnum;
import org.openapis.openapi.models.shared.ProvideAnomalyFeedbackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvideAnomalyFeedbackRequest req = new ProvideAnomalyFeedbackRequest(                new ProvideAnomalyFeedbackRequest("culpa", AnomalyFeedbackTypeEnum.PLANNED_ACTIVITY);, ProvideAnomalyFeedbackXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_PROVIDE_ANOMALY_FEEDBACK) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "esse";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "sit";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "quas";
            }};            

            ProvideAnomalyFeedbackResponse res = sdk.sdk.provideAnomalyFeedback(req);

            if (res.provideAnomalyFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSavingsPlansPurchaseRecommendationGeneration

<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSavingsPlansPurchaseRecommendationGenerationRequest;
import org.openapis.openapi.models.operations.StartSavingsPlansPurchaseRecommendationGenerationResponse;
import org.openapis.openapi.models.operations.StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSavingsPlansPurchaseRecommendationGenerationRequest req = new StartSavingsPlansPurchaseRecommendationGenerationRequest(                new java.util.HashMap<String, Object>() {{
                                put("et", "blanditiis");
                                put("ex", "sed");
                            }}, StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_START_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "vel";
                xAmzCredential = "nostrum";
                xAmzDate = "saepe";
                xAmzSecurityToken = "error";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "incidunt";
            }};            

            StartSavingsPlansPurchaseRecommendationGenerationResponse res = sdk.sdk.startSavingsPlansPurchaseRecommendationGeneration(req);

            if (res.startSavingsPlansPurchaseRecommendationGenerationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorem",                 new org.openapis.openapi.models.shared.ResourceTag[]{{
                                                add(new ResourceTag("occaecati", "labore") {{
                                                    key = "dicta";
                                                    value = "architecto";
                                                }}),
                                                add(new ResourceTag("laborum", "nam") {{
                                                    key = "quidem";
                                                    value = "atque";
                                                }}),
                                                add(new ResourceTag("alias", "amet") {{
                                                    key = "tenetur";
                                                    value = "laboriosam";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "unde";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "delectus";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("perferendis",                 new String[]{{
                                                add("quidem"),
                                                add("reprehenderit"),
                                                add("facere"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "mollitia";
                xAmzDate = "veniam";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "repudiandae";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnomalyMonitor

Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnomalyMonitorRequest;
import org.openapis.openapi.models.operations.UpdateAnomalyMonitorResponse;
import org.openapis.openapi.models.operations.UpdateAnomalyMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAnomalyMonitorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAnomalyMonitorRequest req = new UpdateAnomalyMonitorRequest(                new UpdateAnomalyMonitorRequest("atque") {{
                                monitorName = "reprehenderit";
                            }};, UpdateAnomalyMonitorXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_UPDATE_ANOMALY_MONITOR) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "totam";
                xAmzCredential = "suscipit";
                xAmzDate = "quidem";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
            }};            

            UpdateAnomalyMonitorResponse res = sdk.sdk.updateAnomalyMonitor(req);

            if (res.updateAnomalyMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnomalySubscription

Updates an existing cost anomaly monitor subscription. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnomalySubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateAnomalySubscriptionResponse;
import org.openapis.openapi.models.operations.UpdateAnomalySubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalySubscriptionFrequencyEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscriber;
import org.openapis.openapi.models.shared.SubscriberStatusEnum;
import org.openapis.openapi.models.shared.SubscriberTypeEnum;
import org.openapis.openapi.models.shared.TagValues;
import org.openapis.openapi.models.shared.UpdateAnomalySubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAnomalySubscriptionRequest req = new UpdateAnomalySubscriptionRequest(                new UpdateAnomalySubscriptionRequest("assumenda") {{
                                frequency = AnomalySubscriptionFrequencyEnum.IMMEDIATE;
                                monitorArnList = new String[]{{
                                    add("error"),
                                    add("officiis"),
                                    add("officiis"),
                                }};
                                subscribers = new org.openapis.openapi.models.shared.Subscriber[]{{
                                    add(new Subscriber() {{
                                        address = "3149 Swaniawski Passage";
                                        status = SubscriberStatusEnum.DECLINED;
                                        type = SubscriberTypeEnum.EMAIL;
                                    }}),
                                    add(new Subscriber() {{
                                        address = "551 Parisian Station";
                                        status = SubscriberStatusEnum.CONFIRMED;
                                        type = SubscriberTypeEnum.SNS;
                                    }}),
                                    add(new Subscriber() {{
                                        address = "91011 Gillian Fields";
                                        status = SubscriberStatusEnum.DECLINED;
                                        type = SubscriberTypeEnum.SNS;
                                    }}),
                                    add(new Subscriber() {{
                                        address = "91585 Davin Unions";
                                        status = SubscriberStatusEnum.DECLINED;
                                        type = SubscriberTypeEnum.EMAIL;
                                    }}),
                                }};
                                subscriptionName = "fugit";
                                threshold = 6611.18;
                                thresholdExpression = new Expression() {{
                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    costCategories = new CostCategoryValues() {{
                                        key = "reprehenderit";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.STARTS_WITH),
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("non"),
                                            add("vero"),
                                            add("doloremque"),
                                            add("iure"),
                                        }};
                                    }};;
                                    dimensions = new DimensionValues() {{
                                        key = DimensionEnum.LINKED_ACCOUNT;
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.EQUALS),
                                            add(MatchOptionEnum.ENDS_WITH),
                                            add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                        }};
                                        values = new String[]{{
                                            add("cum"),
                                        }};
                                    }};;
                                    not = new Expression();;
                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                        add(new Expression() {{}}),
                                        add(new Expression() {{}}),
                                    }};
                                    tags = new TagValues() {{
                                        key = "necessitatibus";
                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                        }};
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("rem"),
                                            add("aliquam"),
                                        }};
                                    }};;
                                }};;
                            }};, UpdateAnomalySubscriptionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_UPDATE_ANOMALY_SUBSCRIPTION) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "alias";
                xAmzDate = "corporis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "mollitia";
            }};            

            UpdateAnomalySubscriptionResponse res = sdk.sdk.updateAnomalySubscription(req);

            if (res.updateAnomalySubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCostAllocationTagsStatus

Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCostAllocationTagsStatusRequest;
import org.openapis.openapi.models.operations.UpdateCostAllocationTagsStatusResponse;
import org.openapis.openapi.models.operations.UpdateCostAllocationTagsStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostAllocationTagStatusEntry;
import org.openapis.openapi.models.shared.CostAllocationTagStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCostAllocationTagsStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCostAllocationTagsStatusRequest req = new UpdateCostAllocationTagsStatusRequest(                new UpdateCostAllocationTagsStatusRequest(                new org.openapis.openapi.models.shared.CostAllocationTagStatusEntry[]{{
                                                add(new CostAllocationTagStatusEntry(CostAllocationTagStatusEnum.ACTIVE, "id") {{
                                                    status = CostAllocationTagStatusEnum.INACTIVE;
                                                    tagKey = "reiciendis";
                                                }}),
                                            }});, UpdateCostAllocationTagsStatusXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_UPDATE_COST_ALLOCATION_TAGS_STATUS) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "dolorum";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "quae";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            UpdateCostAllocationTagsStatusResponse res = sdk.sdk.updateCostAllocationTagsStatus(req);

            if (res.updateCostAllocationTagsStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCostCategoryDefinition

Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCostCategoryDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateCostCategoryDefinitionResponse;
import org.openapis.openapi.models.operations.UpdateCostCategoryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CostCategoryInheritedValueDimension;
import org.openapis.openapi.models.shared.CostCategoryInheritedValueDimensionNameEnum;
import org.openapis.openapi.models.shared.CostCategoryRule;
import org.openapis.openapi.models.shared.CostCategoryRuleTypeEnum;
import org.openapis.openapi.models.shared.CostCategoryRuleVersionEnum;
import org.openapis.openapi.models.shared.CostCategorySplitChargeMethodEnum;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRule;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter;
import org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameterTypeEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;
import org.openapis.openapi.models.shared.UpdateCostCategoryDefinitionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCostCategoryDefinitionRequest req = new UpdateCostCategoryDefinitionRequest(                new UpdateCostCategoryDefinitionRequest("molestiae", CostCategoryRuleVersionEnum.COST_CATEGORY_EXPRESSION_V1,                 new org.openapis.openapi.models.shared.CostCategoryRule[]{{
                                                add(new CostCategoryRule() {{
                                                    inheritedValue = new CostCategoryInheritedValueDimension() {{
                                                        dimensionKey = "ut";
                                                        dimensionName = CostCategoryInheritedValueDimensionNameEnum.TAG;
                                                    }};
                                                    rule = new Expression() {{
                                                        and = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                        }};
                                                        costCategories = new CostCategoryValues() {{
                                                            key = "debitis";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.ENDS_WITH),
                                                                add(MatchOptionEnum.STARTS_WITH),
                                                                add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                            }};
                                                            values = new String[]{{
                                                                add("provident"),
                                                                add("quis"),
                                                            }};
                                                        }};
                                                        dimensions = new DimensionValues() {{
                                                            key = DimensionEnum.SCOPE;
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.CONTAINS),
                                                                add(MatchOptionEnum.ABSENT),
                                                                add(MatchOptionEnum.STARTS_WITH),
                                                                add(MatchOptionEnum.EQUALS),
                                                            }};
                                                            values = new String[]{{
                                                                add("nostrum"),
                                                                add("mollitia"),
                                                                add("provident"),
                                                            }};
                                                        }};
                                                        not = new Expression() {{}};
                                                        or = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                        }};
                                                        tags = new TagValues() {{
                                                            key = "animi";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.ENDS_WITH),
                                                                add(MatchOptionEnum.EQUALS),
                                                            }};
                                                            values = new String[]{{
                                                                add("doloribus"),
                                                                add("ullam"),
                                                                add("in"),
                                                                add("nam"),
                                                            }};
                                                        }};
                                                    }};
                                                    type = CostCategoryRuleTypeEnum.INHERITED_VALUE;
                                                    value = "officia";
                                                }}),
                                                add(new CostCategoryRule() {{
                                                    inheritedValue = new CostCategoryInheritedValueDimension() {{
                                                        dimensionKey = "laborum";
                                                        dimensionName = CostCategoryInheritedValueDimensionNameEnum.TAG;
                                                    }};
                                                    rule = new Expression() {{
                                                        and = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                        }};
                                                        costCategories = new CostCategoryValues() {{
                                                            key = "voluptatibus";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                                add(MatchOptionEnum.GREATER_THAN_OR_EQUAL),
                                                                add(MatchOptionEnum.CASE_INSENSITIVE),
                                                            }};
                                                            values = new String[]{{
                                                                add("rerum"),
                                                            }};
                                                        }};
                                                        dimensions = new DimensionValues() {{
                                                            key = DimensionEnum.USAGE_TYPE;
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.EQUALS),
                                                                add(MatchOptionEnum.ABSENT),
                                                            }};
                                                            values = new String[]{{
                                                                add("quae"),
                                                                add("perferendis"),
                                                                add("velit"),
                                                                add("aspernatur"),
                                                            }};
                                                        }};
                                                        not = new Expression() {{}};
                                                        or = new org.openapis.openapi.models.shared.Expression[]{{
                                                            add(new Expression() {{}}),
                                                            add(new Expression() {{}}),
                                                        }};
                                                        tags = new TagValues() {{
                                                            key = "eius";
                                                            matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                                add(MatchOptionEnum.CASE_INSENSITIVE),
                                                                add(MatchOptionEnum.CASE_INSENSITIVE),
                                                                add(MatchOptionEnum.ABSENT),
                                                            }};
                                                            values = new String[]{{
                                                                add("eum"),
                                                                add("dicta"),
                                                                add("minima"),
                                                                add("beatae"),
                                                            }};
                                                        }};
                                                    }};
                                                    type = CostCategoryRuleTypeEnum.INHERITED_VALUE;
                                                    value = "provident";
                                                }}),
                                            }}) {{
                                defaultValue = "earum";
                                effectiveStart = "soluta";
                                splitChargeRules = new org.openapis.openapi.models.shared.CostCategorySplitChargeRule[]{{
                                    add(new CostCategorySplitChargeRule(CostCategorySplitChargeMethodEnum.EVEN, "nulla",                 new String[]{{
                                                        add("quasi"),
                                                    }}) {{
                                        method = CostCategorySplitChargeMethodEnum.EVEN;
                                        parameters = new org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter[]{{
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("suscipit"),
                                                                add("dolorem"),
                                                                add("fugit"),
                                                                add("cumque"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("perspiciatis"),
                                                    add("maiores"),
                                                    add("debitis"),
                                                    add("aliquid"),
                                                }};
                                            }}),
                                        }};
                                        source = "fuga";
                                        targets = new String[]{{
                                            add("animi"),
                                        }};
                                    }}),
                                    add(new CostCategorySplitChargeRule(CostCategorySplitChargeMethodEnum.EVEN, "vel",                 new String[]{{
                                                        add("fugiat"),
                                                    }}) {{
                                        method = CostCategorySplitChargeMethodEnum.FIXED;
                                        parameters = new org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter[]{{
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("magni"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("occaecati"),
                                                    add("suscipit"),
                                                    add("adipisci"),
                                                }};
                                            }}),
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("molestiae"),
                                                                add("dicta"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("nulla"),
                                                    add("necessitatibus"),
                                                    add("ipsa"),
                                                    add("tempora"),
                                                }};
                                            }}),
                                        }};
                                        source = "iusto";
                                        targets = new String[]{{
                                            add("praesentium"),
                                            add("maiores"),
                                        }};
                                    }}),
                                    add(new CostCategorySplitChargeRule(CostCategorySplitChargeMethodEnum.EVEN, "aliquid",                 new String[]{{
                                                        add("suscipit"),
                                                        add("aliquid"),
                                                        add("perferendis"),
                                                    }}) {{
                                        method = CostCategorySplitChargeMethodEnum.FIXED;
                                        parameters = new org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter[]{{
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("consectetur"),
                                                                add("aliquid"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("tempora"),
                                                    add("esse"),
                                                }};
                                            }}),
                                        }};
                                        source = "ipsa";
                                        targets = new String[]{{
                                            add("sunt"),
                                            add("nostrum"),
                                            add("fugiat"),
                                        }};
                                    }}),
                                    add(new CostCategorySplitChargeRule(CostCategorySplitChargeMethodEnum.FIXED, "molestias",                 new String[]{{
                                                        add("aliquid"),
                                                        add("beatae"),
                                                        add("voluptatum"),
                                                    }}) {{
                                        method = CostCategorySplitChargeMethodEnum.PROPORTIONAL;
                                        parameters = new org.openapis.openapi.models.shared.CostCategorySplitChargeRuleParameter[]{{
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("voluptates"),
                                                                add("mollitia"),
                                                                add("laborum"),
                                                                add("libero"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("id"),
                                                    add("ab"),
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new CostCategorySplitChargeRuleParameter(CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES,                 new String[]{{
                                                                add("repellendus"),
                                                            }}) {{
                                                type = CostCategorySplitChargeRuleParameterTypeEnum.ALLOCATION_PERCENTAGES;
                                                values = new String[]{{
                                                    add("deleniti"),
                                                    add("enim"),
                                                }};
                                            }}),
                                        }};
                                        source = "ex";
                                        targets = new String[]{{
                                            add("ex"),
                                            add("ut"),
                                            add("ad"),
                                            add("expedita"),
                                        }};
                                    }}),
                                }};
                            }};, UpdateCostCategoryDefinitionXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_UPDATE_COST_CATEGORY_DEFINITION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "rerum";
                xAmzDate = "est";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateCostCategoryDefinitionResponse res = sdk.sdk.updateCostCategoryDefinition(req);

            if (res.updateCostCategoryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
