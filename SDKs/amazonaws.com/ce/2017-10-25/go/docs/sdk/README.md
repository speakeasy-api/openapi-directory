# SDK

## Overview

<p>You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about the costs that are associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ce/>
### Available Operations

* [CreateAnomalyMonitor](#createanomalymonitor) - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* [CreateAnomalySubscription](#createanomalysubscription) - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* [CreateCostCategoryDefinition](#createcostcategorydefinition) - Creates a new Cost Category with the requested name and rules.
* [DeleteAnomalyMonitor](#deleteanomalymonitor) - Deletes a cost anomaly monitor. 
* [DeleteAnomalySubscription](#deleteanomalysubscription) - Deletes a cost anomaly subscription. 
* [DeleteCostCategoryDefinition](#deletecostcategorydefinition) - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* [DescribeCostCategoryDefinition](#describecostcategorydefinition) - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* [GetAnomalies](#getanomalies) - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* [GetAnomalyMonitors](#getanomalymonitors) - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [GetAnomalySubscriptions](#getanomalysubscriptions) - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [GetCostAndUsage](#getcostandusage) - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [GetCostAndUsageWithResources](#getcostandusagewithresources) - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* [GetCostCategories](#getcostcategories) - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* [GetCostForecast](#getcostforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* [GetDimensionValues](#getdimensionvalues) - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* [GetReservationCoverage](#getreservationcoverage) - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* [GetReservationPurchaseRecommendation](#getreservationpurchaserecommendation) - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* [GetReservationUtilization](#getreservationutilization) - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* [GetRightsizingRecommendation](#getrightsizingrecommendation) - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [GetSavingsPlansCoverage](#getsavingsplanscoverage) - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* [GetSavingsPlansPurchaseRecommendation](#getsavingsplanspurchaserecommendation) - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* [GetSavingsPlansUtilization](#getsavingsplansutilization) - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* [GetSavingsPlansUtilizationDetails](#getsavingsplansutilizationdetails) - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* [GetTags](#gettags) - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* [GetUsageForecast](#getusageforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* [ListCostAllocationTags](#listcostallocationtags) - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* [ListCostCategoryDefinitions](#listcostcategorydefinitions) - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* [ListSavingsPlansPurchaseRecommendationGeneration](#listsavingsplanspurchaserecommendationgeneration) - Retrieves a list of your historical recommendation generations within the past 30 days.
* [ListTagsForResource](#listtagsforresource) - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* [ProvideAnomalyFeedback](#provideanomalyfeedback) - Modifies the feedback property of a given cost anomaly. 
* [StartSavingsPlansPurchaseRecommendationGeneration](#startsavingsplanspurchaserecommendationgeneration) - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* [TagResource](#tagresource) - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* [UntagResource](#untagresource) - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* [UpdateAnomalyMonitor](#updateanomalymonitor) - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* [UpdateAnomalySubscription](#updateanomalysubscription) - Updates an existing cost anomaly monitor subscription. 
* [UpdateCostAllocationTagsStatus](#updatecostallocationtagsstatus) - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* [UpdateCostCategoryDefinition](#updatecostcategorydefinition) - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

## CreateAnomalyMonitor

Creates a new cost anomaly detection monitor with the requested type and monitor specification. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAnomalyMonitor(ctx, operations.CreateAnomalyMonitorRequest{
        CreateAnomalyMonitorRequest: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: sdk.String("quod"),
                DimensionalValueCount: sdk.Int64(800911),
                LastEvaluatedDate: sdk.String("esse"),
                LastUpdatedDate: sdk.String("totam"),
                MonitorArn: sdk.String("porro"),
                MonitorDimension: shared.MonitorDimensionEnumService.ToPointer(),
                MonitorName: "dolorum",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: sdk.String("nam"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumContains,
                            shared.MatchOptionEnumAbsent,
                            shared.MatchOptionEnumContains,
                        },
                        Values: []string{
                            "optio",
                            "totam",
                            "beatae",
                            "commodi",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: shared.DimensionEnumSubscriptionID.ToPointer(),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumAbsent,
                            shared.MatchOptionEnumCaseInsensitive,
                        },
                        Values: []string{
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                    },
                    Not: &shared.Expression{},
                    Or: []shared.Expression{
                        shared.Expression{},
                    },
                    Tags: &shared.TagValues{
                        Key: sdk.String("perferendis"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumContains,
                            shared.MatchOptionEnumAbsent,
                        },
                        Values: []string{
                            "dolor",
                            "natus",
                            "laboriosam",
                        },
                    },
                },
                MonitorType: shared.MonitorTypeEnumCustom,
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "fuga",
                    Value: "in",
                },
                shared.ResourceTag{
                    Key: "corporis",
                    Value: "iste",
                },
                shared.ResourceTag{
                    Key: "iure",
                    Value: "saepe",
                },
                shared.ResourceTag{
                    Key: "quidem",
                    Value: "architecto",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.CreateAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceCreateAnomalyMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
}
```

## CreateAnomalySubscription

Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAnomalySubscription(ctx, operations.CreateAnomalySubscriptionRequest{
        CreateAnomalySubscriptionRequest: shared.CreateAnomalySubscriptionRequest{
            AnomalySubscription: shared.AnomalySubscription{
                AccountID: sdk.String("corporis"),
                Frequency: shared.AnomalySubscriptionFrequencyEnumDaily,
                MonitorArnList: []string{
                    "enim",
                    "omnis",
                    "nemo",
                    "minima",
                },
                Subscribers: []shared.Subscriber{
                    shared.Subscriber{
                        Address: sdk.String("46991 Durgan Pike"),
                        Status: shared.SubscriberStatusEnumConfirmed.ToPointer(),
                        Type: shared.SubscriberTypeEnumSns.ToPointer(),
                    },
                    shared.Subscriber{
                        Address: sdk.String("5244 Deion Passage"),
                        Status: shared.SubscriberStatusEnumConfirmed.ToPointer(),
                        Type: shared.SubscriberTypeEnumEmail.ToPointer(),
                    },
                    shared.Subscriber{
                        Address: sdk.String("66317 Vada Haven"),
                        Status: shared.SubscriberStatusEnumDeclined.ToPointer(),
                        Type: shared.SubscriberTypeEnumSns.ToPointer(),
                    },
                },
                SubscriptionArn: sdk.String("aut"),
                SubscriptionName: "quasi",
                Threshold: sdk.Float64(6228.46),
                ThresholdExpression: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: sdk.String("laborum"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumGreaterThanOrEqual,
                        },
                        Values: []string{
                            "vero",
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: shared.DimensionEnumInstanceType.ToPointer(),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumEndsWith,
                            shared.MatchOptionEnumCaseSensitive,
                            shared.MatchOptionEnumEquals,
                        },
                        Values: []string{
                            "reprehenderit",
                        },
                    },
                    Not: &shared.Expression{},
                    Or: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                    },
                    Tags: &shared.TagValues{
                        Key: sdk.String("maiores"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumStartsWith,
                        },
                        Values: []string{
                            "iusto",
                            "dicta",
                        },
                    },
                },
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "enim",
                    Value: "accusamus",
                },
                shared.ResourceTag{
                    Key: "commodi",
                    Value: "repudiandae",
                },
                shared.ResourceTag{
                    Key: "quae",
                    Value: "ipsum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.CreateAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceCreateAnomalySubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalySubscriptionResponse != nil {
        // handle response
    }
}
```

## CreateCostCategoryDefinition

Creates a new Cost Category with the requested name and rules.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCostCategoryDefinition(ctx, operations.CreateCostCategoryDefinitionRequest{
        CreateCostCategoryDefinitionRequest: shared.CreateCostCategoryDefinitionRequest{
            DefaultValue: sdk.String("voluptates"),
            EffectiveStart: sdk.String("quasi"),
            Name: "Kirk Boehm",
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "consequatur",
                    Value: "est",
                },
                shared.ResourceTag{
                    Key: "quibusdam",
                    Value: "explicabo",
                },
            },
            RuleVersion: shared.CostCategoryRuleVersionEnumCostCategoryExpressionV1,
            Rules: []shared.CostCategoryRule{
                shared.CostCategoryRule{
                    InheritedValue: &shared.CostCategoryInheritedValueDimension{
                        DimensionKey: sdk.String("distinctio"),
                        DimensionName: shared.CostCategoryInheritedValueDimensionNameEnumTag.ToPointer(),
                    },
                    Rule: &shared.Expression{
                        And: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                        },
                        CostCategories: &shared.CostCategoryValues{
                            Key: sdk.String("modi"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEndsWith,
                            },
                            Values: []string{
                                "quos",
                                "perferendis",
                                "magni",
                            },
                        },
                        Dimensions: &shared.DimensionValues{
                            Key: shared.DimensionEnumPaymentOption.ToPointer(),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEquals,
                                shared.MatchOptionEnumAbsent,
                            },
                            Values: []string{
                                "excepturi",
                                "tempora",
                                "facilis",
                            },
                        },
                        Not: &shared.Expression{},
                        Or: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                        },
                        Tags: &shared.TagValues{
                            Key: sdk.String("labore"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEndsWith,
                                shared.MatchOptionEnumAbsent,
                                shared.MatchOptionEnumCaseInsensitive,
                                shared.MatchOptionEnumContains,
                            },
                            Values: []string{
                                "provident",
                                "necessitatibus",
                            },
                        },
                    },
                    Type: shared.CostCategoryRuleTypeEnumInheritedValue.ToPointer(),
                    Value: sdk.String("officia"),
                },
                shared.CostCategoryRule{
                    InheritedValue: &shared.CostCategoryInheritedValueDimension{
                        DimensionKey: sdk.String("dolor"),
                        DimensionName: shared.CostCategoryInheritedValueDimensionNameEnumTag.ToPointer(),
                    },
                    Rule: &shared.Expression{
                        And: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                        },
                        CostCategories: &shared.CostCategoryValues{
                            Key: sdk.String("dolorum"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEndsWith,
                                shared.MatchOptionEnumCaseInsensitive,
                            },
                            Values: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                        },
                        Dimensions: &shared.DimensionValues{
                            Key: shared.DimensionEnumSavingsPlanArn.ToPointer(),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEndsWith,
                                shared.MatchOptionEnumCaseSensitive,
                            },
                            Values: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                        },
                        Not: &shared.Expression{},
                        Or: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                        },
                        Tags: &shared.TagValues{
                            Key: sdk.String("quidem"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumCaseSensitive,
                                shared.MatchOptionEnumCaseSensitive,
                                shared.MatchOptionEnumContains,
                            },
                            Values: []string{
                                "sapiente",
                                "amet",
                                "deserunt",
                            },
                        },
                    },
                    Type: shared.CostCategoryRuleTypeEnumRegular.ToPointer(),
                    Value: sdk.String("vel"),
                },
                shared.CostCategoryRule{
                    InheritedValue: &shared.CostCategoryInheritedValueDimension{
                        DimensionKey: sdk.String("natus"),
                        DimensionName: shared.CostCategoryInheritedValueDimensionNameEnumTag.ToPointer(),
                    },
                    Rule: &shared.Expression{
                        And: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                        },
                        CostCategories: &shared.CostCategoryValues{
                            Key: sdk.String("perferendis"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumStartsWith,
                                shared.MatchOptionEnumCaseSensitive,
                            },
                            Values: []string{
                                "labore",
                                "labore",
                                "suscipit",
                            },
                        },
                        Dimensions: &shared.DimensionValues{
                            Key: shared.DimensionEnumInstanceTypeFamily.ToPointer(),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEndsWith,
                                shared.MatchOptionEnumGreaterThanOrEqual,
                                shared.MatchOptionEnumAbsent,
                            },
                            Values: []string{
                                "magnam",
                            },
                        },
                        Not: &shared.Expression{},
                        Or: []shared.Expression{
                            shared.Expression{},
                        },
                        Tags: &shared.TagValues{
                            Key: sdk.String("excepturi"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumContains,
                                shared.MatchOptionEnumContains,
                            },
                            Values: []string{
                                "accusantium",
                                "mollitia",
                                "reiciendis",
                            },
                        },
                    },
                    Type: shared.CostCategoryRuleTypeEnumInheritedValue.ToPointer(),
                    Value: sdk.String("ad"),
                },
            },
            SplitChargeRules: []shared.CostCategorySplitChargeRule{
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumFixed,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "nemo",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "iure",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "debitis",
                                "eius",
                                "maxime",
                                "deleniti",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "in",
                                "architecto",
                                "architecto",
                            },
                        },
                    },
                    Source: "repudiandae",
                    Targets: []string{
                        "expedita",
                        "nihil",
                    },
                },
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumEven,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "saepe",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "accusantium",
                                "consequuntur",
                                "praesentium",
                                "natus",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "sunt",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "illum",
                                "pariatur",
                                "maxime",
                                "ea",
                            },
                        },
                    },
                    Source: "excepturi",
                    Targets: []string{
                        "ea",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        XAmzTarget: operations.CreateCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceCreateCostCategoryDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCostCategoryDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteAnomalyMonitor

Deletes a cost anomaly monitor. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAnomalyMonitor(ctx, operations.DeleteAnomalyMonitorRequest{
        DeleteAnomalyMonitorRequest: shared.DeleteAnomalyMonitorRequest{
            MonitorArn: "nam",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DeleteAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceDeleteAnomalyMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnomalyMonitorResponse != nil {
        // handle response
    }
}
```

## DeleteAnomalySubscription

Deletes a cost anomaly subscription. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAnomalySubscription(ctx, operations.DeleteAnomalySubscriptionRequest{
        DeleteAnomalySubscriptionRequest: shared.DeleteAnomalySubscriptionRequest{
            SubscriptionArn: "aut",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DeleteAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceDeleteAnomalySubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnomalySubscriptionResponse != nil {
        // handle response
    }
}
```

## DeleteCostCategoryDefinition

Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCostCategoryDefinition(ctx, operations.DeleteCostCategoryDefinitionRequest{
        DeleteCostCategoryDefinitionRequest: shared.DeleteCostCategoryDefinitionRequest{
            CostCategoryArn: "totam",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceDeleteCostCategoryDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCostCategoryDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeCostCategoryDefinition

<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCostCategoryDefinition(ctx, operations.DescribeCostCategoryDefinitionRequest{
        DescribeCostCategoryDefinitionRequest: shared.DescribeCostCategoryDefinitionRequest{
            CostCategoryArn: "minus",
            EffectiveOn: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceDescribeCostCategoryDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCostCategoryDefinitionResponse != nil {
        // handle response
    }
}
```

## GetAnomalies

Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAnomalies(ctx, operations.GetAnomaliesRequest{
        GetAnomaliesRequest: shared.GetAnomaliesRequest{
            DateInterval: shared.AnomalyDateInterval{
                EndDate: sdk.String("perspiciatis"),
                StartDate: "voluptatem",
            },
            Feedback: shared.AnomalyFeedbackTypeEnumPlannedActivity.ToPointer(),
            MaxResults: sdk.Int64(164694),
            MonitorArn: sdk.String("blanditiis"),
            NextPageToken: sdk.String("error"),
            TotalImpact: &shared.TotalImpactFilter{
                EndValue: sdk.Float64(503.7),
                NumericOperator: shared.NumericOperatorEnumGreaterThan,
                StartValue: 6990.98,
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.GetAnomaliesXAmzTargetEnumAwsInsightsIndexServiceGetAnomalies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnomaliesResponse != nil {
        // handle response
    }
}
```

## GetAnomalyMonitors

Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAnomalyMonitors(ctx, operations.GetAnomalyMonitorsRequest{
        GetAnomalyMonitorsRequest: shared.GetAnomalyMonitorsRequest{
            MaxResults: sdk.Int64(864282),
            MonitorArnList: []string{
                "nobis",
                "libero",
                "delectus",
            },
            NextPageToken: sdk.String("quaerat"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.GetAnomalyMonitorsXAmzTargetEnumAwsInsightsIndexServiceGetAnomalyMonitors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnomalyMonitorsResponse != nil {
        // handle response
    }
}
```

## GetAnomalySubscriptions

Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAnomalySubscriptions(ctx, operations.GetAnomalySubscriptionsRequest{
        GetAnomalySubscriptionsRequest: shared.GetAnomalySubscriptionsRequest{
            MaxResults: sdk.Int64(944373),
            MonitorArn: sdk.String("excepturi"),
            NextPageToken: sdk.String("cum"),
            SubscriptionArnList: []string{
                "dignissimos",
                "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.GetAnomalySubscriptionsXAmzTargetEnumAwsInsightsIndexServiceGetAnomalySubscriptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnomalySubscriptionsResponse != nil {
        // handle response
    }
}
```

## GetCostAndUsage

<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCostAndUsage(ctx, operations.GetCostAndUsageRequest{
        GetCostAndUsageRequest: shared.GetCostAndUsageRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("quaerat"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "atque",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumAz.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "dolorum",
                        "deleniti",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("necessitatibus"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "id",
                        "saepe",
                    },
                },
            },
            Granularity: shared.GranularityEnumDaily,
            GroupBy: []shared.GroupDefinition{
                shared.GroupDefinition{
                    Key: sdk.String("perferendis"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
            },
            Metrics: []string{
                "accusamus",
                "ad",
                "saepe",
                "suscipit",
            },
            NextPageToken: sdk.String("deserunt"),
            TimePeriod: shared.DateInterval{
                End: "provident",
                Start: "minima",
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.GetCostAndUsageXAmzTargetEnumAwsInsightsIndexServiceGetCostAndUsage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostAndUsageResponse != nil {
        // handle response
    }
}
```

## GetCostAndUsageWithResources

<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCostAndUsageWithResources(ctx, operations.GetCostAndUsageWithResourcesRequest{
        GetCostAndUsageWithResourcesRequest: shared.GetCostAndUsageWithResourcesRequest{
            Filter: shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("quod"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "iusto",
                        "ipsum",
                        "quisquam",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumAnomalyTotalImpactAbsolute.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                    },
                    Values: []string{
                        "numquam",
                        "enim",
                        "dolorem",
                        "sapiente",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("nihil"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                    },
                    Values: []string{
                        "sed",
                    },
                },
            },
            Granularity: shared.GranularityEnumMonthly,
            GroupBy: []shared.GroupDefinition{
                shared.GroupDefinition{
                    Key: sdk.String("voluptas"),
                    Type: shared.GroupDefinitionTypeEnumTag.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("quam"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("incidunt"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
            },
            Metrics: []string{
                "maxime",
                "pariatur",
                "soluta",
            },
            NextPageToken: sdk.String("dicta"),
            TimePeriod: shared.DateInterval{
                End: "laborum",
                Start: "totam",
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.GetCostAndUsageWithResourcesXAmzTargetEnumAwsInsightsIndexServiceGetCostAndUsageWithResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostAndUsageWithResourcesResponse != nil {
        // handle response
    }
}
```

## GetCostCategories

<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCostCategories(ctx, operations.GetCostCategoriesRequest{
        GetCostCategoriesRequest: shared.GetCostCategoriesRequest{
            CostCategoryName: sdk.String("molestias"),
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("qui"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "odio",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumOperation.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "cumque",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("nobis"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "veritatis",
                    },
                },
            },
            MaxResults: sdk.Int64(749255),
            NextPageToken: sdk.String("quos"),
            SearchString: sdk.String("tempore"),
            SortBy: []shared.SortDefinition{
                shared.SortDefinition{
                    Key: "aperiam",
                    SortOrder: shared.SortOrderEnumDescending.ToPointer(),
                },
                shared.SortDefinition{
                    Key: "dolorem",
                    SortOrder: shared.SortOrderEnumAscending.ToPointer(),
                },
                shared.SortDefinition{
                    Key: "labore",
                    SortOrder: shared.SortOrderEnumAscending.ToPointer(),
                },
            },
            TimePeriod: shared.DateInterval{
                End: "dolorum",
                Start: "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.GetCostCategoriesXAmzTargetEnumAwsInsightsIndexServiceGetCostCategories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostCategoriesResponse != nil {
        // handle response
    }
}
```

## GetCostForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCostForecast(ctx, operations.GetCostForecastRequest{
        GetCostForecastRequest: shared.GetCostForecastRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("doloribus"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "quae",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumLegalEntityName.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "vero",
                        "omnis",
                        "quis",
                        "ipsum",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("voluptate"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "dignissimos",
                        "hic",
                        "distinctio",
                        "quod",
                    },
                },
            },
            Granularity: shared.GranularityEnumMonthly,
            Metric: shared.MetricEnumNetAmortizedCost,
            PredictionIntervalLevel: sdk.Int64(708548),
            TimePeriod: shared.DateInterval{
                End: "vero",
                Start: "ducimus",
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.GetCostForecastXAmzTargetEnumAwsInsightsIndexServiceGetCostForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostForecastResponse != nil {
        // handle response
    }
}
```

## GetDimensionValues

Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDimensionValues(ctx, operations.GetDimensionValuesRequest{
        GetDimensionValuesRequest: shared.GetDimensionValuesRequest{
            Context: shared.ContextEnumSavingsPlans.ToPointer(),
            Dimension: shared.DimensionEnumRecordType,
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("fugit"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumCaseInsensitive,
                    },
                    Values: []string{
                        "alias",
                        "officia",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumUsageType.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "possimus",
                        "magnam",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("ex"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "ex",
                    },
                },
            },
            MaxResults: sdk.Int64(862192),
            NextPageToken: sdk.String("excepturi"),
            SearchString: sdk.String("voluptatibus"),
            SortBy: []shared.SortDefinition{
                shared.SortDefinition{
                    Key: "sapiente",
                    SortOrder: shared.SortOrderEnumDescending.ToPointer(),
                },
                shared.SortDefinition{
                    Key: "saepe",
                    SortOrder: shared.SortOrderEnumAscending.ToPointer(),
                },
            },
            TimePeriod: shared.DateInterval{
                End: "impedit",
                Start: "corporis",
            },
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.GetDimensionValuesXAmzTargetEnumAwsInsightsIndexServiceGetDimensionValues,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDimensionValuesResponse != nil {
        // handle response
    }
}
```

## GetReservationCoverage

<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReservationCoverage(ctx, operations.GetReservationCoverageRequest{
        GetReservationCoverageRequest: shared.GetReservationCoverageRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("aspernatur"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "aut",
                        "aut",
                        "deleniti",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumSavingsPlansType.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "non",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("dolorum"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseInsensitive,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "nobis",
                        "quas",
                    },
                },
            },
            Granularity: shared.GranularityEnumHourly.ToPointer(),
            GroupBy: []shared.GroupDefinition{
                shared.GroupDefinition{
                    Key: sdk.String("voluptas"),
                    Type: shared.GroupDefinitionTypeEnumCostCategory.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("quasi"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("numquam"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("provident"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(476477),
            Metrics: []string{
                "odio",
                "eius",
            },
            NextPageToken: sdk.String("esse"),
            SortBy: &shared.SortDefinition{
                Key: "esse",
                SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            },
            TimePeriod: shared.DateInterval{
                End: "fuga",
                Start: "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.GetReservationCoverageXAmzTargetEnumAwsInsightsIndexServiceGetReservationCoverage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReservationCoverageResponse != nil {
        // handle response
    }
}
```

## GetReservationPurchaseRecommendation

<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReservationPurchaseRecommendation(ctx, operations.GetReservationPurchaseRecommendationRequest{
        GetReservationPurchaseRecommendationRequest: shared.GetReservationPurchaseRecommendationRequest{
            AccountID: sdk.String("praesentium"),
            AccountScope: shared.AccountScopeEnumLinked.ToPointer(),
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("ipsa"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumCaseInsensitive,
                    },
                    Values: []string{
                        "quo",
                        "fuga",
                        "eius",
                        "eos",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumOperatingSystem.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "tempora",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("ipsam"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "esse",
                        "recusandae",
                        "aperiam",
                        "distinctio",
                    },
                },
            },
            LookbackPeriodInDays: shared.LookbackPeriodInDaysEnumSixtyDays.ToPointer(),
            NextPageToken: sdk.String("dignissimos"),
            PageSize: sdk.Int64(76956),
            PaymentOption: shared.PaymentOptionEnumAllUpfront.ToPointer(),
            Service: "totam",
            ServiceSpecification: &shared.ServiceSpecification{
                Ec2Specification: &shared.Ec2Specification{
                    OfferingClass: shared.OfferingClassEnumConvertible.ToPointer(),
                },
            },
            TermInYears: shared.TermInYearsEnumOneYear.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.GetReservationPurchaseRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetReservationPurchaseRecommendation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReservationPurchaseRecommendationResponse != nil {
        // handle response
    }
}
```

## GetReservationUtilization

Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReservationUtilization(ctx, operations.GetReservationUtilizationRequest{
        GetReservationUtilizationRequest: shared.GetReservationUtilizationRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("porro"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "deleniti",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumOperation.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "minima",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("fugit"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "atque",
                        "et",
                        "esse",
                    },
                },
            },
            Granularity: shared.GranularityEnumHourly.ToPointer(),
            GroupBy: []shared.GroupDefinition{
                shared.GroupDefinition{
                    Key: sdk.String("veritatis"),
                    Type: shared.GroupDefinitionTypeEnumTag.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("quod"),
                    Type: shared.GroupDefinitionTypeEnumCostCategory.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("vero"),
                    Type: shared.GroupDefinitionTypeEnumTag.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("quasi"),
                    Type: shared.GroupDefinitionTypeEnumCostCategory.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(426306),
            NextPageToken: sdk.String("harum"),
            SortBy: &shared.SortDefinition{
                Key: "molestiae",
                SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            },
            TimePeriod: shared.DateInterval{
                End: "occaecati",
                Start: "minima",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.GetReservationUtilizationXAmzTargetEnumAwsInsightsIndexServiceGetReservationUtilization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReservationUtilizationResponse != nil {
        // handle response
    }
}
```

## GetRightsizingRecommendation

<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRightsizingRecommendation(ctx, operations.GetRightsizingRecommendationRequest{
        GetRightsizingRecommendationRequest: shared.GetRightsizingRecommendationRequest{
            Configuration: &shared.RightsizingRecommendationConfiguration{
                BenefitsConsidered: false,
                RecommendationTarget: shared.RecommendationTargetEnumSameInstanceFamily,
            },
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("minus"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "blanditiis",
                        "provident",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumAnomalyTotalImpactAbsolute.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "sint",
                        "pariatur",
                        "possimus",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("eveniet"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseInsensitive,
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumEquals,
                    },
                    Values: []string{
                        "culpa",
                        "aliquid",
                        "tenetur",
                    },
                },
            },
            NextPageToken: sdk.String("quae"),
            PageSize: sdk.Int64(936747),
            Service: "vel",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.GetRightsizingRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetRightsizingRecommendation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRightsizingRecommendationResponse != nil {
        // handle response
    }
}
```

## GetSavingsPlansCoverage

<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSavingsPlansCoverage(ctx, operations.GetSavingsPlansCoverageRequest{
        GetSavingsPlansCoverageRequest: shared.GetSavingsPlansCoverageRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("dicta"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumStartsWith,
                    },
                    Values: []string{
                        "aut",
                        "voluptatum",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumRegion.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumCaseSensitive,
                    },
                    Values: []string{
                        "omnis",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("quasi"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumStartsWith,
                    },
                    Values: []string{
                        "consectetur",
                    },
                },
            },
            Granularity: shared.GranularityEnumDaily.ToPointer(),
            GroupBy: []shared.GroupDefinition{
                shared.GroupDefinition{
                    Key: sdk.String("temporibus"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("rem"),
                    Type: shared.GroupDefinitionTypeEnumDimension.ToPointer(),
                },
                shared.GroupDefinition{
                    Key: sdk.String("laudantium"),
                    Type: shared.GroupDefinitionTypeEnumTag.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(649832),
            Metrics: []string{
                "corrupti",
            },
            NextToken: sdk.String("non"),
            SortBy: &shared.SortDefinition{
                Key: "voluptatem",
                SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            },
            TimePeriod: shared.DateInterval{
                End: "occaecati",
                Start: "numquam",
            },
        },
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("explicabo"),
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.GetSavingsPlansCoverageXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansCoverage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavingsPlansCoverageResponse != nil {
        // handle response
    }
}
```

## GetSavingsPlansPurchaseRecommendation

Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSavingsPlansPurchaseRecommendation(ctx, operations.GetSavingsPlansPurchaseRecommendationRequest{
        GetSavingsPlansPurchaseRecommendationRequest: shared.GetSavingsPlansPurchaseRecommendationRequest{
            AccountScope: shared.AccountScopeEnumLinked.ToPointer(),
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("asperiores"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "consequuntur",
                        "repellendus",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumInstanceTypeFamily.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumStartsWith,
                    },
                    Values: []string{
                        "quaerat",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("quod"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "id",
                        "suscipit",
                        "velit",
                    },
                },
            },
            LookbackPeriodInDays: shared.LookbackPeriodInDaysEnumThirtyDays,
            NextPageToken: sdk.String("est"),
            PageSize: sdk.Int64(926880),
            PaymentOption: shared.PaymentOptionEnumLightUtilization,
            SavingsPlansType: shared.SupportedSavingsPlansTypeEnumSagemakerSp,
            TermInYears: shared.TermInYearsEnumOneYear,
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.GetSavingsPlansPurchaseRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansPurchaseRecommendation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavingsPlansPurchaseRecommendationResponse != nil {
        // handle response
    }
}
```

## GetSavingsPlansUtilization

<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSavingsPlansUtilization(ctx, operations.GetSavingsPlansUtilizationRequest{
        GetSavingsPlansUtilizationRequest: shared.GetSavingsPlansUtilizationRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("in"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumCaseInsensitive,
                    },
                    Values: []string{
                        "recusandae",
                        "aliquid",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumInstanceType.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumStartsWith,
                    },
                    Values: []string{
                        "facere",
                        "numquam",
                        "doloribus",
                        "suscipit",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("quidem"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumGreaterThanOrEqual,
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumEquals,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "non",
                    },
                },
            },
            Granularity: shared.GranularityEnumDaily.ToPointer(),
            SortBy: &shared.SortDefinition{
                Key: "beatae",
                SortOrder: shared.SortOrderEnumAscending.ToPointer(),
            },
            TimePeriod: shared.DateInterval{
                End: "a",
                Start: "debitis",
            },
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.GetSavingsPlansUtilizationXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansUtilization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavingsPlansUtilizationResponse != nil {
        // handle response
    }
}
```

## GetSavingsPlansUtilizationDetails

<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSavingsPlansUtilizationDetails(ctx, operations.GetSavingsPlansUtilizationDetailsRequest{
        GetSavingsPlansUtilizationDetailsRequest: shared.GetSavingsPlansUtilizationDetailsRequest{
            DataType: []shared.SavingsPlansDataTypeEnum{
                shared.SavingsPlansDataTypeEnumSavings,
            },
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("tempora"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "voluptas",
                        "minima",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumRightsizingType.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumCaseInsensitive,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "in",
                        "dolore",
                        "aliquam",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("temporibus"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumAbsent,
                        shared.MatchOptionEnumCaseSensitive,
                    },
                    Values: []string{
                        "quas",
                        "hic",
                        "nesciunt",
                    },
                },
            },
            MaxResults: sdk.Int64(633998),
            NextToken: sdk.String("corrupti"),
            SortBy: &shared.SortDefinition{
                Key: "pariatur",
                SortOrder: shared.SortOrderEnumDescending.ToPointer(),
            },
            TimePeriod: shared.DateInterval{
                End: "hic",
                Start: "exercitationem",
            },
        },
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("sit"),
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.GetSavingsPlansUtilizationDetailsXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansUtilizationDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavingsPlansUtilizationDetailsResponse != nil {
        // handle response
    }
}
```

## GetTags

Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTags(ctx, operations.GetTagsRequest{
        GetTagsRequest: shared.GetTagsRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("ab"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumAbsent,
                    },
                    Values: []string{
                        "commodi",
                        "quidem",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumOperation.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumEquals,
                    },
                    Values: []string{
                        "sapiente",
                        "debitis",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("reiciendis"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "incidunt",
                        "sed",
                        "provident",
                        "eius",
                    },
                },
            },
            MaxResults: sdk.Int64(896762),
            NextPageToken: sdk.String("ipsum"),
            SearchString: sdk.String("ea"),
            SortBy: []shared.SortDefinition{
                shared.SortDefinition{
                    Key: "quos",
                    SortOrder: shared.SortOrderEnumDescending.ToPointer(),
                },
                shared.SortDefinition{
                    Key: "tempora",
                    SortOrder: shared.SortOrderEnumAscending.ToPointer(),
                },
                shared.SortDefinition{
                    Key: "voluptate",
                    SortOrder: shared.SortOrderEnumDescending.ToPointer(),
                },
            },
            TagKey: sdk.String("ex"),
            TimePeriod: shared.DateInterval{
                End: "sit",
                Start: "non",
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.GetTagsXAmzTargetEnumAwsInsightsIndexServiceGetTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTagsResponse != nil {
        // handle response
    }
}
```

## GetUsageForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUsageForecast(ctx, operations.GetUsageForecastRequest{
        GetUsageForecastRequest: shared.GetUsageForecastRequest{
            Filter: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("sit"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "nulla",
                        "magni",
                        "aperiam",
                        "saepe",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumServiceCode.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumGreaterThanOrEqual,
                    },
                    Values: []string{
                        "laudantium",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("praesentium"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumContains,
                    },
                    Values: []string{
                        "hic",
                        "expedita",
                        "debitis",
                    },
                },
            },
            Granularity: shared.GranularityEnumDaily,
            Metric: shared.MetricEnumNetAmortizedCost,
            PredictionIntervalLevel: sdk.Int64(341698),
            TimePeriod: shared.DateInterval{
                End: "officia",
                Start: "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.GetUsageForecastXAmzTargetEnumAwsInsightsIndexServiceGetUsageForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsageForecastResponse != nil {
        // handle response
    }
}
```

## ListCostAllocationTags

Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCostAllocationTags(ctx, operations.ListCostAllocationTagsRequest{
        ListCostAllocationTagsRequest: shared.ListCostAllocationTagsRequest{
            MaxResults: sdk.Int64(30235),
            NextToken: sdk.String("culpa"),
            Status: shared.CostAllocationTagStatusEnumInactive.ToPointer(),
            TagKeys: []string{
                "consequatur",
                "esse",
            },
            Type: shared.CostAllocationTagTypeEnumAwsGenerated.ToPointer(),
        },
        MaxResults: sdk.String("sit"),
        NextToken: sdk.String("voluptatum"),
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.ListCostAllocationTagsXAmzTargetEnumAwsInsightsIndexServiceListCostAllocationTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCostAllocationTagsResponse != nil {
        // handle response
    }
}
```

## ListCostCategoryDefinitions

Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCostCategoryDefinitions(ctx, operations.ListCostCategoryDefinitionsRequest{
        ListCostCategoryDefinitionsRequest: shared.ListCostCategoryDefinitionsRequest{
            EffectiveOn: sdk.String("sit"),
            MaxResults: sdk.Int64(425508),
            NextToken: sdk.String("nostrum"),
        },
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("error"),
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListCostCategoryDefinitionsXAmzTargetEnumAwsInsightsIndexServiceListCostCategoryDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCostCategoryDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListSavingsPlansPurchaseRecommendationGeneration

Retrieves a list of your historical recommendation generations within the past 30 days.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSavingsPlansPurchaseRecommendationGeneration(ctx, operations.ListSavingsPlansPurchaseRecommendationGenerationRequest{
        ListSavingsPlansPurchaseRecommendationGenerationRequest: shared.ListSavingsPlansPurchaseRecommendationGenerationRequest{
            GenerationStatus: shared.GenerationStatusEnumProcessing.ToPointer(),
            NextPageToken: sdk.String("labore"),
            PageSize: sdk.Int64(695270),
            RecommendationIds: []string{
                "laborum",
                "nam",
                "tenetur",
            },
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnumAwsInsightsIndexServiceListSavingsPlansPurchaseRecommendationGeneration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavingsPlansPurchaseRecommendationGenerationResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "provident",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsInsightsIndexServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ProvideAnomalyFeedback

Modifies the feedback property of a given cost anomaly. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProvideAnomalyFeedback(ctx, operations.ProvideAnomalyFeedbackRequest{
        ProvideAnomalyFeedbackRequest: shared.ProvideAnomalyFeedbackRequest{
            AnomalyID: "facere",
            Feedback: shared.AnomalyFeedbackTypeEnumPlannedActivity,
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ProvideAnomalyFeedbackXAmzTargetEnumAwsInsightsIndexServiceProvideAnomalyFeedback,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvideAnomalyFeedbackResponse != nil {
        // handle response
    }
}
```

## StartSavingsPlansPurchaseRecommendationGeneration

<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartSavingsPlansPurchaseRecommendationGeneration(ctx, operations.StartSavingsPlansPurchaseRecommendationGenerationRequest{
        RequestBody: map[string]interface{}{
            "reprehenderit": "asperiores",
            "totam": "suscipit",
            "quidem": "maxime",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnumAwsInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGeneration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSavingsPlansPurchaseRecommendationGenerationResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "officiis",
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "accusamus",
                    Value: "natus",
                },
                shared.ResourceTag{
                    Key: "minima",
                    Value: "aspernatur",
                },
                shared.ResourceTag{
                    Key: "ex",
                    Value: "maiores",
                },
                shared.ResourceTag{
                    Key: "corrupti",
                    Value: "at",
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsInsightsIndexServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "recusandae",
            ResourceTagKeys: []string{
                "repellendus",
                "labore",
                "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsInsightsIndexServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAnomalyMonitor

Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAnomalyMonitor(ctx, operations.UpdateAnomalyMonitorRequest{
        UpdateAnomalyMonitorRequest: shared.UpdateAnomalyMonitorRequest{
            MonitorArn: "laboriosam",
            MonitorName: sdk.String("velit"),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.UpdateAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceUpdateAnomalyMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnomalyMonitorResponse != nil {
        // handle response
    }
}
```

## UpdateAnomalySubscription

Updates an existing cost anomaly monitor subscription. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAnomalySubscription(ctx, operations.UpdateAnomalySubscriptionRequest{
        UpdateAnomalySubscriptionRequest: shared.UpdateAnomalySubscriptionRequest{
            Frequency: shared.AnomalySubscriptionFrequencyEnumImmediate.ToPointer(),
            MonitorArnList: []string{
                "adipisci",
                "eveniet",
            },
            Subscribers: []shared.Subscriber{
                shared.Subscriber{
                    Address: sdk.String("16346 Foster Radial"),
                    Status: shared.SubscriberStatusEnumDeclined.ToPointer(),
                    Type: shared.SubscriberTypeEnumEmail.ToPointer(),
                },
                shared.Subscriber{
                    Address: sdk.String("040 Beier Light"),
                    Status: shared.SubscriberStatusEnumDeclined.ToPointer(),
                    Type: shared.SubscriberTypeEnumEmail.ToPointer(),
                },
                shared.Subscriber{
                    Address: sdk.String("481 Rau Meadows"),
                    Status: shared.SubscriberStatusEnumDeclined.ToPointer(),
                    Type: shared.SubscriberTypeEnumEmail.ToPointer(),
                },
            },
            SubscriptionArn: "ad",
            SubscriptionName: sdk.String("repellat"),
            Threshold: sdk.Float64(30.99),
            ThresholdExpression: &shared.Expression{
                And: []shared.Expression{
                    shared.Expression{},
                    shared.Expression{},
                },
                CostCategories: &shared.CostCategoryValues{
                    Key: sdk.String("perspiciatis"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "maiores",
                    },
                },
                Dimensions: &shared.DimensionValues{
                    Key: shared.DimensionEnumAnomalyTotalImpactAbsolute.ToPointer(),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumCaseSensitive,
                    },
                    Values: []string{
                        "dolore",
                        "dolorum",
                    },
                },
                Not: &shared.Expression{},
                Or: []shared.Expression{
                    shared.Expression{},
                },
                Tags: &shared.TagValues{
                    Key: sdk.String("quae"),
                    MatchOptions: []shared.MatchOptionEnum{
                        shared.MatchOptionEnumContains,
                        shared.MatchOptionEnumStartsWith,
                        shared.MatchOptionEnumEndsWith,
                        shared.MatchOptionEnumEndsWith,
                    },
                    Values: []string{
                        "culpa",
                        "adipisci",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.UpdateAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceUpdateAnomalySubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnomalySubscriptionResponse != nil {
        // handle response
    }
}
```

## UpdateCostAllocationTagsStatus

Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCostAllocationTagsStatus(ctx, operations.UpdateCostAllocationTagsStatusRequest{
        UpdateCostAllocationTagsStatusRequest: shared.UpdateCostAllocationTagsStatusRequest{
            CostAllocationTagsStatus: []shared.CostAllocationTagStatusEntry{
                shared.CostAllocationTagStatusEntry{
                    Status: shared.CostAllocationTagStatusEnumActive,
                    TagKey: "reiciendis",
                },
                shared.CostAllocationTagStatusEntry{
                    Status: shared.CostAllocationTagStatusEnumInactive,
                    TagKey: "aspernatur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.UpdateCostAllocationTagsStatusXAmzTargetEnumAwsInsightsIndexServiceUpdateCostAllocationTagsStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCostAllocationTagsStatusResponse != nil {
        // handle response
    }
}
```

## UpdateCostCategoryDefinition

Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCostCategoryDefinition(ctx, operations.UpdateCostCategoryDefinitionRequest{
        UpdateCostCategoryDefinitionRequest: shared.UpdateCostCategoryDefinitionRequest{
            CostCategoryArn: "animi",
            DefaultValue: sdk.String("ex"),
            EffectiveStart: sdk.String("aliquid"),
            RuleVersion: shared.CostCategoryRuleVersionEnumCostCategoryExpressionV1,
            Rules: []shared.CostCategoryRule{
                shared.CostCategoryRule{
                    InheritedValue: &shared.CostCategoryInheritedValueDimension{
                        DimensionKey: sdk.String("repellat"),
                        DimensionName: shared.CostCategoryInheritedValueDimensionNameEnumTag.ToPointer(),
                    },
                    Rule: &shared.Expression{
                        And: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                        },
                        CostCategories: &shared.CostCategoryValues{
                            Key: sdk.String("in"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumGreaterThanOrEqual,
                                shared.MatchOptionEnumCaseSensitive,
                                shared.MatchOptionEnumCaseSensitive,
                            },
                            Values: []string{
                                "modi",
                                "voluptatibus",
                                "molestias",
                                "officiis",
                            },
                        },
                        Dimensions: &shared.DimensionValues{
                            Key: shared.DimensionEnumAnomalyTotalImpactAbsolute.ToPointer(),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumEquals,
                                shared.MatchOptionEnumCaseSensitive,
                                shared.MatchOptionEnumStartsWith,
                                shared.MatchOptionEnumStartsWith,
                            },
                            Values: []string{
                                "fugit",
                            },
                        },
                        Not: &shared.Expression{},
                        Or: []shared.Expression{
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                            shared.Expression{},
                        },
                        Tags: &shared.TagValues{
                            Key: sdk.String("quae"),
                            MatchOptions: []shared.MatchOptionEnum{
                                shared.MatchOptionEnumAbsent,
                            },
                            Values: []string{
                                "eum",
                            },
                        },
                    },
                    Type: shared.CostCategoryRuleTypeEnumRegular.ToPointer(),
                    Value: sdk.String("rem"),
                },
            },
            SplitChargeRules: []shared.CostCategorySplitChargeRule{
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumEven,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "eum",
                                "dicta",
                                "minima",
                                "beatae",
                            },
                        },
                    },
                    Source: "cupiditate",
                    Targets: []string{
                        "earum",
                        "soluta",
                        "hic",
                    },
                },
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumEven,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "perspiciatis",
                                "maiores",
                                "debitis",
                                "aliquid",
                            },
                        },
                    },
                    Source: "porro",
                    Targets: []string{
                        "dolorem",
                        "fugit",
                    },
                },
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumEven,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "animi",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "nulla",
                                "consequatur",
                                "quasi",
                                "et",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "natus",
                                "occaecati",
                            },
                        },
                    },
                    Source: "suscipit",
                    Targets: []string{
                        "quasi",
                    },
                },
                shared.CostCategorySplitChargeRule{
                    Method: shared.CostCategorySplitChargeMethodEnumFixed,
                    Parameters: []shared.CostCategorySplitChargeRuleParameter{
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "necessitatibus",
                                "ipsa",
                                "tempora",
                                "nihil",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "dicta",
                                "iusto",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "praesentium",
                                "maiores",
                            },
                        },
                        shared.CostCategorySplitChargeRuleParameter{
                            Type: shared.CostCategorySplitChargeRuleParameterTypeEnumAllocationPercentages,
                            Values: []string{
                                "vel",
                                "architecto",
                                "fugiat",
                                "doloremque",
                            },
                        },
                    },
                    Source: "dicta",
                    Targets: []string{
                        "tempora",
                        "esse",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.UpdateCostCategoryDefinitionXAmzTargetEnumAwsInsightsIndexServiceUpdateCostCategoryDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCostCategoryDefinitionResponse != nil {
        // handle response
    }
}
```
