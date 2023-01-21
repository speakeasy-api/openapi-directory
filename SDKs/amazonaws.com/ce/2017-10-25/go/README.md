# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAnomalyMonitorRequest{
        Headers: operations.CreateAnomalyMonitorHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
        },
        Request: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "fugit",
                DimensionalValueCount: 1543572285742637646,
                LastEvaluatedDate: "nihil",
                LastUpdatedDate: "rerum",
                MonitorArn: "dicta",
                MonitorDimension: "SERVICE",
                MonitorName: "voluptatum",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{
                        
                        },
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "ut",
                        MatchOptions: []shared.MatchOptionEnum{
                            "ABSENT",
                            "ABSENT",
                            "ENDS_WITH",
                        },
                        Values: []string{
                            "totam",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "RECORD_TYPE",
                        MatchOptions: []shared.MatchOptionEnum{
                            "ENDS_WITH",
                            "ABSENT",
                            "CASE_INSENSITIVE",
                        },
                        Values: []string{
                            "id",
                            "aspernatur",
                        },
                    },
                    Not: &shared.Expression{
                    
                    },
                    Or: []shared.Expression{
                        shared.Expression{
                        
                        },
                        shared.Expression{
                        
                        },
                        shared.Expression{
                        
                        },
                    },
                    Tags: &shared.TagValues{
                        Key: "totam",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                            "STARTS_WITH",
                        },
                        Values: []string{
                            "odit",
                            "non",
                            "voluptas",
                        },
                    },
                },
                MonitorType: "CUSTOM",
            },
        },
    }
    
    res, err := s.CreateAnomalyMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAnomalyMonitor` - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* `CreateAnomalySubscription` - Adds a subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set a dollar threshold and a time frequency for receiving notifications. 
* `CreateCostCategoryDefinition` - Creates a new Cost Category with the requested name and rules.
* `DeleteAnomalyMonitor` - Deletes a cost anomaly monitor. 
* `DeleteAnomalySubscription` - Deletes a cost anomaly subscription. 
* `DeleteCostCategoryDefinition` - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* `DescribeCostCategoryDefinition` - <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* `GetAnomalies` - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. 
* `GetAnomalyMonitors` - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `GetAnomalySubscriptions` - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* `GetCostAndUsage` - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `GetCostAndUsageWithResources` - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* `GetCostCategories` - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* `GetCostForecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* `GetDimensionValues` - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* `GetReservationCoverage` - <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* `GetReservationPurchaseRecommendation` - <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. Amazon Web Services also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* `GetReservationUtilization` - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* `GetRightsizingRecommendation` - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* `GetSavingsPlansCoverage` - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* `GetSavingsPlansPurchaseRecommendation` - Retrieves your request parameters, Savings Plan Recommendations Summary and Details. 
* `GetSavingsPlansUtilization` - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* `GetSavingsPlansUtilizationDetails` - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* `GetTags` - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* `GetUsageForecast` - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* `ListCostCategoryDefinitions` - Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* `ProvideAnomalyFeedback` - Modifies the feedback property of a given cost anomaly. 
* `UpdateAnomalyMonitor` - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn'tt change anomalies detected in the past. 
* `UpdateAnomalySubscription` - Updates an existing cost anomaly monitor subscription. 
* `UpdateCostCategoryDefinition` - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
