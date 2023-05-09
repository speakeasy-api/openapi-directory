# SDK

## Overview

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devops-guru/>
### Available Operations

* [AddNotificationChannel](#addnotificationchannel) - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
* [DeleteInsight](#deleteinsight) - Deletes the insight along with the associated anomalies, events and recommendations.
* [DescribeAccountHealth](#describeaccounthealth) -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 
* [DescribeAccountOverview](#describeaccountoverview) -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* [DescribeAnomaly](#describeanomaly) -  Returns details about an anomaly that you specify using its ID. 
* [DescribeEventSourcesConfig](#describeeventsourcesconfig) - Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [DescribeFeedback](#describefeedback) -  Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 
* [DescribeInsight](#describeinsight) -  Returns details about an insight that you specify using its ID. 
* [DescribeOrganizationHealth](#describeorganizationhealth) - Returns active insights, predictive insights, and resource hours analyzed in last hour.
* [DescribeOrganizationOverview](#describeorganizationoverview) - Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
* [DescribeOrganizationResourceCollectionHealth](#describeorganizationresourcecollectionhealth) - Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
* [DescribeResourceCollectionHealth](#describeresourcecollectionhealth) -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [DescribeServiceIntegration](#describeserviceintegration) -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 
* [GetCostEstimation](#getcostestimation) - Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* [GetResourceCollection](#getresourcecollection) -  Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [ListAnomaliesForInsight](#listanomaliesforinsight) -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* [ListAnomalousLogGroups](#listanomalousloggroups) -  Returns the list of log groups that contain log anomalies. 
* [ListEvents](#listevents) -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* [ListInsights](#listinsights) -  Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* [ListMonitoredResources](#listmonitoredresources) -  Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 
* [ListNotificationChannels](#listnotificationchannels) -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* [ListOrganizationInsights](#listorganizationinsights) - Returns a list of insights associated with the account or OU Id.
* [ListRecommendations](#listrecommendations) -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* [PutFeedback](#putfeedback) -  Collects customer feedback about the specified insight. 
* [RemoveNotificationChannel](#removenotificationchannel) -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* [SearchInsights](#searchinsights) - <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [SearchOrganizationInsights](#searchorganizationinsights) - <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [StartCostEstimation](#startcostestimation) - Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
* [UpdateEventSourcesConfig](#updateeventsourcesconfig) - Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [UpdateResourceCollection](#updateresourcecollection) -  Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* [UpdateServiceIntegration](#updateserviceintegration) -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

## AddNotificationChannel

<p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

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
    res, err := s.SDK.AddNotificationChannel(ctx, operations.AddNotificationChannelRequest{
        RequestBody: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Filters: &shared.NotificationFilterConfig{
                    MessageTypes: []shared.NotificationMessageTypeEnum{
                        shared.NotificationMessageTypeEnumClosedInsight,
                        shared.NotificationMessageTypeEnumClosedInsight,
                        shared.NotificationMessageTypeEnumNewAssociation,
                        shared.NotificationMessageTypeEnumSeverityUpgraded,
                    },
                    Severities: []shared.InsightSeverityEnum{
                        shared.InsightSeverityEnumMedium,
                        shared.InsightSeverityEnumMedium,
                        shared.InsightSeverityEnumMedium,
                        shared.InsightSeverityEnumMedium,
                    },
                },
                Sns: &shared.SnsChannelConfig{
                    TopicArn: sdk.String("recusandae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelResponse != nil {
        // handle response
    }
}
```

## DeleteInsight

Deletes the insight along with the associated anomalies, events and recommendations.

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
    res, err := s.SDK.DeleteInsight(ctx, operations.DeleteInsightRequest{
        ID: "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInsightResponse != nil {
        // handle response
    }
}
```

## DescribeAccountHealth

 Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 

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
    res, err := s.SDK.DescribeAccountHealth(ctx, operations.DescribeAccountHealthRequest{
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountHealthResponse != nil {
        // handle response
    }
}
```

## DescribeAccountOverview

 For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccountOverview(ctx, operations.DescribeAccountOverviewRequest{
        RequestBody: operations.DescribeAccountOverviewRequestBody{
            FromTime: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
            ToTime: types.MustTimeFromString("2022-02-15T23:12:00.119Z"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountOverviewResponse != nil {
        // handle response
    }
}
```

## DescribeAnomaly

 Returns details about an anomaly that you specify using its ID. 

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
    res, err := s.SDK.DescribeAnomaly(ctx, operations.DescribeAnomalyRequest{
        AccountID: sdk.String("laborum"),
        ID: "2352c595-5907-4aff-9a3a-2fa946773925",
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAnomalyResponse != nil {
        // handle response
    }
}
```

## DescribeEventSourcesConfig

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

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
    res, err := s.SDK.DescribeEventSourcesConfig(ctx, operations.DescribeEventSourcesConfigRequest{
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventSourcesConfigResponse != nil {
        // handle response
    }
}
```

## DescribeFeedback

 Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 

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
    res, err := s.SDK.DescribeFeedback(ctx, operations.DescribeFeedbackRequest{
        RequestBody: operations.DescribeFeedbackRequestBody{
            InsightID: sdk.String("temporibus"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFeedbackResponse != nil {
        // handle response
    }
}
```

## DescribeInsight

 Returns details about an insight that you specify using its ID. 

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
    res, err := s.SDK.DescribeInsight(ctx, operations.DescribeInsightRequest{
        AccountID: sdk.String("voluptatibus"),
        ID: "097b0074-f154-471b-9e6e-13b99d488e1e",
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInsightResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationHealth

Returns active insights, predictive insights, and resource hours analyzed in last hour.

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
    res, err := s.SDK.DescribeOrganizationHealth(ctx, operations.DescribeOrganizationHealthRequest{
        RequestBody: operations.DescribeOrganizationHealthRequestBody{
            AccountIds: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
            OrganizationalUnitIds: []string{
                "modi",
                "qui",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationHealthResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationOverview

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganizationOverview(ctx, operations.DescribeOrganizationOverviewRequest{
        RequestBody: operations.DescribeOrganizationOverviewRequestBody{
            AccountIds: []string{
                "fugit",
            },
            FromTime: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
            OrganizationalUnitIds: []string{
                "facilis",
                "tempore",
            },
            ToTime: types.MustTimeFromString("2022-01-14T19:13:42.009Z"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationOverviewResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationResourceCollectionHealth

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.

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
    res, err := s.SDK.DescribeOrganizationResourceCollectionHealth(ctx, operations.DescribeOrganizationResourceCollectionHealthRequest{
        NextToken: sdk.String("sint"),
        RequestBody: operations.DescribeOrganizationResourceCollectionHealthRequestBody{
            AccountIds: []string{
                "dolor",
                "debitis",
                "a",
            },
            MaxResults: sdk.Int64(680056),
            NextToken: sdk.String("in"),
            OrganizationResourceCollectionType: operations.DescribeOrganizationResourceCollectionHealthRequestBodyOrganizationResourceCollectionTypeEnumAwsService,
            OrganizationalUnitIds: []string{
                "maiores",
                "rerum",
                "dicta",
                "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationResourceCollectionHealthResponse != nil {
        // handle response
    }
}
```

## DescribeResourceCollectionHealth

 Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

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
    res, err := s.SDK.DescribeResourceCollectionHealth(ctx, operations.DescribeResourceCollectionHealthRequest{
        NextToken: sdk.String("occaecati"),
        ResourceCollectionType: operations.DescribeResourceCollectionHealthResourceCollectionTypeEnumAwsCloudFormation,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourceCollectionHealthResponse != nil {
        // handle response
    }
}
```

## DescribeServiceIntegration

 Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

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
    res, err := s.SDK.DescribeServiceIntegration(ctx, operations.DescribeServiceIntegrationRequest{
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceIntegrationResponse != nil {
        // handle response
    }
}
```

## GetCostEstimation

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

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
    res, err := s.SDK.GetCostEstimation(ctx, operations.GetCostEstimationRequest{
        NextToken: sdk.String("omnis"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostEstimationResponse != nil {
        // handle response
    }
}
```

## GetResourceCollection

 Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

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
    res, err := s.SDK.GetResourceCollection(ctx, operations.GetResourceCollectionRequest{
        NextToken: sdk.String("labore"),
        ResourceCollectionType: operations.GetResourceCollectionResourceCollectionTypeEnumAwsService,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceCollectionResponse != nil {
        // handle response
    }
}
```

## ListAnomaliesForInsight

 Returns a list of the anomalies that belong to an insight that you specify using its ID. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAnomaliesForInsight(ctx, operations.ListAnomaliesForInsightRequest{
        InsightID: "et",
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("ullam"),
        RequestBody: operations.ListAnomaliesForInsightRequestBody{
            AccountID: sdk.String("provident"),
            Filters: &operations.ListAnomaliesForInsightRequestBodyFilters{
                ServiceCollection: &shared.ServiceCollection{
                    ServiceNames: []shared.ServiceNameEnum{
                        shared.ServiceNameEnumNatGateway,
                        shared.ServiceNameEnumAPIGateway,
                        shared.ServiceNameEnumRds,
                    },
                },
            },
            MaxResults: sdk.Int64(968962),
            NextToken: sdk.String("mollitia"),
            StartTimeRange: &operations.ListAnomaliesForInsightRequestBodyStartTimeRange{
                FromTime: types.MustTimeFromString("2022-07-27T12:46:27.682Z"),
                ToTime: types.MustTimeFromString("2022-02-07T18:15:06.372Z"),
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomaliesForInsightResponse != nil {
        // handle response
    }
}
```

## ListAnomalousLogGroups

 Returns the list of log groups that contain log anomalies. 

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
    res, err := s.SDK.ListAnomalousLogGroups(ctx, operations.ListAnomalousLogGroupsRequest{
        MaxResults: sdk.String("maxime"),
        NextToken: sdk.String("deleniti"),
        RequestBody: operations.ListAnomalousLogGroupsRequestBody{
            InsightID: "facilis",
            MaxResults: sdk.Int64(447926),
            NextToken: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnomalousLogGroupsResponse != nil {
        // handle response
    }
}
```

## ListEvents

 Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEvents(ctx, operations.ListEventsRequest{
        MaxResults: sdk.String("sed"),
        NextToken: sdk.String("saepe"),
        RequestBody: operations.ListEventsRequestBody{
            AccountID: sdk.String("pariatur"),
            Filters: operations.ListEventsRequestBodyFilters{
                DataSource: shared.EventDataSourceEnumAwsCloudTrail.ToPointer(),
                EventClass: shared.EventClassEnumInfrastructure.ToPointer(),
                EventSource: sdk.String("praesentium"),
                EventTimeRange: &shared.EventTimeRange{
                    FromTime: types.MustTimeFromString("2022-09-01T04:49:52.515Z"),
                    ToTime: types.MustTimeFromString("2022-03-22T15:30:46.869Z"),
                },
                InsightID: sdk.String("illum"),
                ResourceCollection: &shared.ResourceCollection{
                    CloudFormation: &shared.CloudFormationCollection{
                        StackNames: []string{
                            "maxime",
                            "ea",
                            "excepturi",
                            "odit",
                        },
                    },
                    Tags: []shared.TagCollection{
                        shared.TagCollection{
                            AppBoundaryKey: "accusantium",
                            TagValues: []string{
                                "maiores",
                            },
                        },
                        shared.TagCollection{
                            AppBoundaryKey: "quidem",
                            TagValues: []string{
                                "voluptate",
                                "autem",
                            },
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(722056),
            NextToken: sdk.String("eaque"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventsResponse != nil {
        // handle response
    }
}
```

## ListInsights

 Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListInsights(ctx, operations.ListInsightsRequest{
        MaxResults: sdk.String("cumque"),
        NextToken: sdk.String("corporis"),
        RequestBody: operations.ListInsightsRequestBody{
            MaxResults: sdk.Int64(944124),
            NextToken: sdk.String("libero"),
            StatusFilter: operations.ListInsightsRequestBodyStatusFilter{
                Any: &shared.ListInsightsAnyStatusFilter{
                    StartTimeRange: shared.StartTimeRange{
                        FromTime: types.MustTimeFromString("2022-08-28T17:02:52.151Z"),
                        ToTime: types.MustTimeFromString("2022-06-24T19:43:09.208Z"),
                    },
                    Type: shared.InsightTypeEnumReactive,
                },
                Closed: &shared.ListInsightsClosedStatusFilter{
                    EndTimeRange: shared.EndTimeRange{
                        FromTime: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
                        ToTime: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
                    },
                    Type: shared.InsightTypeEnumReactive,
                },
                Ongoing: &shared.ListInsightsOngoingStatusFilter{
                    Type: shared.InsightTypeEnumReactive,
                },
            },
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsResponse != nil {
        // handle response
    }
}
```

## ListMonitoredResources

 Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 

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
    res, err := s.SDK.ListMonitoredResources(ctx, operations.ListMonitoredResourcesRequest{
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("facilis"),
        RequestBody: operations.ListMonitoredResourcesRequestBody{
            Filters: &operations.ListMonitoredResourcesRequestBodyFilters{
                ResourcePermission: shared.ResourcePermissionEnumMissingPermission.ToPointer(),
                ResourceTypeFilters: []shared.ResourceTypeFilterEnum{
                    shared.ResourceTypeFilterEnumS3Bucket,
                },
            },
            MaxResults: sdk.Int64(164694),
            NextToken: sdk.String("blanditiis"),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoredResourcesResponse != nil {
        // handle response
    }
}
```

## ListNotificationChannels

 Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 

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
    res, err := s.SDK.ListNotificationChannels(ctx, operations.ListNotificationChannelsRequest{
        NextToken: sdk.String("modi"),
        RequestBody: operations.ListNotificationChannelsRequestBody{
            NextToken: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationChannelsResponse != nil {
        // handle response
    }
}
```

## ListOrganizationInsights

Returns a list of insights associated with the account or OU Id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOrganizationInsights(ctx, operations.ListOrganizationInsightsRequest{
        MaxResults: sdk.String("quaerat"),
        NextToken: sdk.String("quos"),
        RequestBody: operations.ListOrganizationInsightsRequestBody{
            AccountIds: []string{
                "dolorem",
                "dolorem",
            },
            MaxResults: sdk.Int64(222443),
            NextToken: sdk.String("qui"),
            OrganizationalUnitIds: []string{
                "hic",
            },
            StatusFilter: operations.ListOrganizationInsightsRequestBodyStatusFilter{
                Any: &shared.ListInsightsAnyStatusFilter{
                    StartTimeRange: shared.StartTimeRange{
                        FromTime: types.MustTimeFromString("2021-07-10T03:04:11.898Z"),
                        ToTime: types.MustTimeFromString("2022-07-05T23:34:50.715Z"),
                    },
                    Type: shared.InsightTypeEnumProactive,
                },
                Closed: &shared.ListInsightsClosedStatusFilter{
                    EndTimeRange: shared.EndTimeRange{
                        FromTime: types.MustTimeFromString("2022-04-27T14:25:42.204Z"),
                        ToTime: types.MustTimeFromString("2022-11-30T20:48:38.083Z"),
                    },
                    Type: shared.InsightTypeEnumReactive,
                },
                Ongoing: &shared.ListInsightsOngoingStatusFilter{
                    Type: shared.InsightTypeEnumReactive,
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationInsightsResponse != nil {
        // handle response
    }
}
```

## ListRecommendations

 Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 

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
    res, err := s.SDK.ListRecommendations(ctx, operations.ListRecommendationsRequest{
        NextToken: sdk.String("natus"),
        RequestBody: operations.ListRecommendationsRequestBody{
            AccountID: sdk.String("eos"),
            InsightID: "atque",
            Locale: operations.ListRecommendationsRequestBodyLocaleEnumDeDe.ToPointer(),
            NextToken: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendationsResponse != nil {
        // handle response
    }
}
```

## PutFeedback

 Collects customer feedback about the specified insight. 

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
    res, err := s.SDK.PutFeedback(ctx, operations.PutFeedbackRequest{
        RequestBody: operations.PutFeedbackRequestBody{
            InsightFeedback: &operations.PutFeedbackRequestBodyInsightFeedback{
                Feedback: shared.InsightFeedbackOptionEnumDataNoisyAnomaly.ToPointer(),
                ID: sdk.String("ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2"),
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFeedbackResponse != nil {
        // handle response
    }
}
```

## RemoveNotificationChannel

 Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 

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
    res, err := s.SDK.RemoveNotificationChannel(ctx, operations.RemoveNotificationChannelRequest{
        ID: "f3be453f-870b-4326-b5a7-3429cdb1a842",
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveNotificationChannelResponse != nil {
        // handle response
    }
}
```

## SearchInsights

<p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchInsights(ctx, operations.SearchInsightsRequest{
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("neque"),
        RequestBody: operations.SearchInsightsRequestBody{
            Filters: &operations.SearchInsightsRequestBodyFilters{
                ResourceCollection: &shared.ResourceCollection{
                    CloudFormation: &shared.CloudFormationCollection{
                        StackNames: []string{
                            "magni",
                        },
                    },
                    Tags: []shared.TagCollection{
                        shared.TagCollection{
                            AppBoundaryKey: "sunt",
                            TagValues: []string{
                                "nam",
                                "hic",
                            },
                        },
                        shared.TagCollection{
                            AppBoundaryKey: "voluptatem",
                            TagValues: []string{
                                "soluta",
                                "nobis",
                                "et",
                                "saepe",
                            },
                        },
                    },
                },
                ServiceCollection: &shared.ServiceCollection{
                    ServiceNames: []shared.ServiceNameEnum{
                        shared.ServiceNameEnumAutoScalingGroup,
                    },
                },
                Severities: []shared.InsightSeverityEnum{
                    shared.InsightSeverityEnumMedium,
                    shared.InsightSeverityEnumHigh,
                    shared.InsightSeverityEnumMedium,
                },
                Statuses: []shared.InsightStatusEnum{
                    shared.InsightStatusEnumClosed,
                },
            },
            MaxResults: sdk.Int64(209157),
            NextToken: sdk.String("dolore"),
            StartTimeRange: operations.SearchInsightsRequestBodyStartTimeRange{
                FromTime: types.MustTimeFromString("2022-10-05T02:20:22.923Z"),
                ToTime: types.MustTimeFromString("2022-10-19T18:50:59.428Z"),
            },
            Type: operations.SearchInsightsRequestBodyTypeEnumReactive,
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchInsightsResponse != nil {
        // handle response
    }
}
```

## SearchOrganizationInsights

<p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchOrganizationInsights(ctx, operations.SearchOrganizationInsightsRequest{
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("ut"),
        RequestBody: operations.SearchOrganizationInsightsRequestBody{
            AccountIds: []string{
                "cupiditate",
                "qui",
                "quae",
            },
            Filters: &operations.SearchOrganizationInsightsRequestBodyFilters{
                ResourceCollection: &shared.ResourceCollection{
                    CloudFormation: &shared.CloudFormationCollection{
                        StackNames: []string{
                            "odio",
                            "occaecati",
                            "voluptatibus",
                        },
                    },
                    Tags: []shared.TagCollection{
                        shared.TagCollection{
                            AppBoundaryKey: "vero",
                            TagValues: []string{
                                "quis",
                                "ipsum",
                                "delectus",
                            },
                        },
                        shared.TagCollection{
                            AppBoundaryKey: "voluptate",
                            TagValues: []string{
                                "vero",
                            },
                        },
                        shared.TagCollection{
                            AppBoundaryKey: "tenetur",
                            TagValues: []string{
                                "hic",
                                "distinctio",
                            },
                        },
                        shared.TagCollection{
                            AppBoundaryKey: "quod",
                            TagValues: []string{
                                "similique",
                                "facilis",
                            },
                        },
                    },
                },
                ServiceCollection: &shared.ServiceCollection{
                    ServiceNames: []shared.ServiceNameEnum{
                        shared.ServiceNameEnumKinesis,
                        shared.ServiceNameEnumEks,
                        shared.ServiceNameEnumSns,
                        shared.ServiceNameEnumSns,
                    },
                },
                Severities: []shared.InsightSeverityEnum{
                    shared.InsightSeverityEnumMedium,
                },
                Statuses: []shared.InsightStatusEnum{
                    shared.InsightStatusEnumOngoing,
                    shared.InsightStatusEnumClosed,
                    shared.InsightStatusEnumOngoing,
                    shared.InsightStatusEnumClosed,
                },
            },
            MaxResults: sdk.Int64(148141),
            NextToken: sdk.String("porro"),
            StartTimeRange: operations.SearchOrganizationInsightsRequestBodyStartTimeRange{
                FromTime: types.MustTimeFromString("2020-01-18T09:21:05.997Z"),
                ToTime: types.MustTimeFromString("2022-03-31T22:43:48.703Z"),
            },
            Type: operations.SearchOrganizationInsightsRequestBodyTypeEnumReactive,
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchOrganizationInsightsResponse != nil {
        // handle response
    }
}
```

## StartCostEstimation

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

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
    res, err := s.SDK.StartCostEstimation(ctx, operations.StartCostEstimationRequest{
        RequestBody: operations.StartCostEstimationRequestBody{
            ClientToken: sdk.String("possimus"),
            ResourceCollection: operations.StartCostEstimationRequestBodyResourceCollection{
                CloudFormation: &shared.CloudFormationCostEstimationResourceCollectionFilter{
                    StackNames: []string{
                        "ratione",
                        "ex",
                    },
                },
                Tags: []shared.TagCostEstimationResourceCollectionFilter{
                    shared.TagCostEstimationResourceCollectionFilter{
                        AppBoundaryKey: "dicta",
                        TagValues: []string{
                            "maiores",
                        },
                    },
                    shared.TagCostEstimationResourceCollectionFilter{
                        AppBoundaryKey: "quasi",
                        TagValues: []string{
                            "nulla",
                            "excepturi",
                        },
                    },
                    shared.TagCostEstimationResourceCollectionFilter{
                        AppBoundaryKey: "voluptatibus",
                        TagValues: []string{
                            "sapiente",
                            "quisquam",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartCostEstimationResponse != nil {
        // handle response
    }
}
```

## UpdateEventSourcesConfig

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

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
    res, err := s.SDK.UpdateEventSourcesConfig(ctx, operations.UpdateEventSourcesConfigRequest{
        RequestBody: operations.UpdateEventSourcesConfigRequestBody{
            EventSources: &operations.UpdateEventSourcesConfigRequestBodyEventSources{
                AmazonCodeGuruProfiler: &shared.AmazonCodeGuruProfilerIntegration{
                    Status: shared.EventSourceOptInStatusEnumEnabled.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEventSourcesConfigResponse != nil {
        // handle response
    }
}
```

## UpdateResourceCollection

 Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 

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
    res, err := s.SDK.UpdateResourceCollection(ctx, operations.UpdateResourceCollectionRequest{
        RequestBody: operations.UpdateResourceCollectionRequestBody{
            Action: operations.UpdateResourceCollectionRequestBodyActionEnumRemove,
            ResourceCollection: operations.UpdateResourceCollectionRequestBodyResourceCollection{
                CloudFormation: &shared.UpdateCloudFormationCollectionFilter{
                    StackNames: []string{
                        "aut",
                        "aut",
                        "deleniti",
                    },
                },
                Tags: []shared.UpdateTagCollectionFilter{
                    shared.UpdateTagCollectionFilter{
                        AppBoundaryKey: "aliquam",
                        TagValues: []string{
                            "accusamus",
                        },
                    },
                    shared.UpdateTagCollectionFilter{
                        AppBoundaryKey: "inventore",
                        TagValues: []string{
                            "et",
                            "dolorum",
                        },
                    },
                    shared.UpdateTagCollectionFilter{
                        AppBoundaryKey: "laborum",
                        TagValues: []string{
                            "velit",
                            "eum",
                            "autem",
                            "nobis",
                        },
                    },
                    shared.UpdateTagCollectionFilter{
                        AppBoundaryKey: "quas",
                        TagValues: []string{
                            "nulla",
                            "voluptas",
                            "libero",
                            "quasi",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateServiceIntegration

 Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

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
    res, err := s.SDK.UpdateServiceIntegration(ctx, operations.UpdateServiceIntegrationRequest{
        RequestBody: operations.UpdateServiceIntegrationRequestBody{
            ServiceIntegration: operations.UpdateServiceIntegrationRequestBodyServiceIntegration{
                LogsAnomalyDetection: &shared.LogsAnomalyDetectionIntegrationConfig{
                    OptInStatus: shared.OptInStatusEnumEnabled.ToPointer(),
                },
                OpsCenter: &shared.OpsCenterIntegrationConfig{
                    OptInStatus: shared.OptInStatusEnumEnabled.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceIntegrationResponse != nil {
        // handle response
    }
}
```
