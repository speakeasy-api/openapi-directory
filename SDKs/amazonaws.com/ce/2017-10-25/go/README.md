# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ce/2017-10-25/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAnomalyMonitorRequest{
        Headers: operations.CreateAnomalyMonitorHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
        },
        Request: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "illum",
                DimensionalValueCount: 423655,
                LastEvaluatedDate: "error",
                LastUpdatedDate: "deserunt",
                MonitorArn: "suscipit",
                MonitorDimension: "SERVICE",
                MonitorName: "iure",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "debitis",
                        MatchOptions: []shared.MatchOptionEnum{
                            "GREATER_THAN_OR_EQUAL",
                        },
                        Values: []string{
                            "suscipit",
                            "molestiae",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "SAVINGS_PLANS_TYPE",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CONTAINS",
                            "ENDS_WITH",
                            "CONTAINS",
                            "ENDS_WITH",
                        },
                        Values: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                    },
                    Not: &shared.Expression{},
                    Or: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    Tags: &shared.TagValues{
                        Key: "perferendis",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                            "GREATER_THAN_OR_EQUAL",
                        },
                        Values: []string{
                            "odit",
                            "at",
                            "at",
                            "maiores",
                        },
                    },
                },
                MonitorType: "DIMENSIONAL",
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "quod",
                    Value: "esse",
                },
                shared.ResourceTag{
                    Key: "totam",
                    Value: "porro",
                },
                shared.ResourceTag{
                    Key: "dolorum",
                    Value: "dicta",
                },
                shared.ResourceTag{
                    Key: "nam",
                    Value: "officia",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateAnomalyMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAnomalyMonitor` - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* `CreateAnomalySubscription` - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* `CreateCostCategoryDefinition` - Creates a new Cost Category with the requested name and rules.
* `DeleteAnomalyMonitor` - Deletes a cost anomaly monitor. 
* `DeleteAnomalySubscription` - Deletes a cost anomaly subscription. 
* `DeleteCostCategoryDefinition` - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* `DescribeCostCategoryDefinition` - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* `GetAnomalies` - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* `GetAnomalyMonitors` - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `GetAnomalySubscriptions` - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `GetCostAndUsage` - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `GetCostAndUsageWithResources` - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* `GetCostCategories` - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* `GetCostForecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* `GetDimensionValues` - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* `GetReservationCoverage` - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* `GetReservationPurchaseRecommendation` - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* `GetReservationUtilization` - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* `GetRightsizingRecommendation` - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `GetSavingsPlansCoverage` - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* `GetSavingsPlansPurchaseRecommendation` - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* `GetSavingsPlansUtilization` - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* `GetSavingsPlansUtilizationDetails` - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* `GetTags` - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* `GetUsageForecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* `ListCostAllocationTags` - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* `ListCostCategoryDefinitions` - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* `ListSavingsPlansPurchaseRecommendationGeneration` - Retrieves a list of your historical recommendation generations within the past 30 days.
* `ListTagsForResource` - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* `ProvideAnomalyFeedback` - Modifies the feedback property of a given cost anomaly. 
* `StartSavingsPlansPurchaseRecommendationGeneration` - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* `TagResource` - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* `UntagResource` - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* `UpdateAnomalyMonitor` - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* `UpdateAnomalySubscription` - Updates an existing cost anomaly monitor subscription. 
* `UpdateCostAllocationTagsStatus` - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* `UpdateCostCategoryDefinition` - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
