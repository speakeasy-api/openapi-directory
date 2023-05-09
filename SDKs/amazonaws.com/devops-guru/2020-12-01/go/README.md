# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/devops-guru/2020-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AddNotificationChannel(ctx, operations.AddNotificationChannelRequest{
        RequestBody: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Filters: &shared.NotificationFilterConfig{
                    MessageTypes: []shared.NotificationMessageTypeEnum{
                        shared.NotificationMessageTypeEnumNewAssociation,
                        shared.NotificationMessageTypeEnumSeverityUpgraded,
                        shared.NotificationMessageTypeEnumNewRecommendation,
                    },
                    Severities: []shared.InsightSeverityEnum{
                        shared.InsightSeverityEnumHigh,
                        shared.InsightSeverityEnumMedium,
                        shared.InsightSeverityEnumHigh,
                    },
                },
                Sns: &shared.SnsChannelConfig{
                    TopicArn: sdk.String("vel"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddNotificationChannel](docs/sdk/README.md#addnotificationchannel) - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
* [DeleteInsight](docs/sdk/README.md#deleteinsight) - Deletes the insight along with the associated anomalies, events and recommendations.
* [DescribeAccountHealth](docs/sdk/README.md#describeaccounthealth) -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 
* [DescribeAccountOverview](docs/sdk/README.md#describeaccountoverview) -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* [DescribeAnomaly](docs/sdk/README.md#describeanomaly) -  Returns details about an anomaly that you specify using its ID. 
* [DescribeEventSourcesConfig](docs/sdk/README.md#describeeventsourcesconfig) - Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [DescribeFeedback](docs/sdk/README.md#describefeedback) -  Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 
* [DescribeInsight](docs/sdk/README.md#describeinsight) -  Returns details about an insight that you specify using its ID. 
* [DescribeOrganizationHealth](docs/sdk/README.md#describeorganizationhealth) - Returns active insights, predictive insights, and resource hours analyzed in last hour.
* [DescribeOrganizationOverview](docs/sdk/README.md#describeorganizationoverview) - Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
* [DescribeOrganizationResourceCollectionHealth](docs/sdk/README.md#describeorganizationresourcecollectionhealth) - Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
* [DescribeResourceCollectionHealth](docs/sdk/README.md#describeresourcecollectionhealth) -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [DescribeServiceIntegration](docs/sdk/README.md#describeserviceintegration) -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 
* [GetCostEstimation](docs/sdk/README.md#getcostestimation) - Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* [GetResourceCollection](docs/sdk/README.md#getresourcecollection) -  Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [ListAnomaliesForInsight](docs/sdk/README.md#listanomaliesforinsight) -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* [ListAnomalousLogGroups](docs/sdk/README.md#listanomalousloggroups) -  Returns the list of log groups that contain log anomalies. 
* [ListEvents](docs/sdk/README.md#listevents) -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* [ListInsights](docs/sdk/README.md#listinsights) -  Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* [ListMonitoredResources](docs/sdk/README.md#listmonitoredresources) -  Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 
* [ListNotificationChannels](docs/sdk/README.md#listnotificationchannels) -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* [ListOrganizationInsights](docs/sdk/README.md#listorganizationinsights) - Returns a list of insights associated with the account or OU Id.
* [ListRecommendations](docs/sdk/README.md#listrecommendations) -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* [PutFeedback](docs/sdk/README.md#putfeedback) -  Collects customer feedback about the specified insight. 
* [RemoveNotificationChannel](docs/sdk/README.md#removenotificationchannel) -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* [SearchInsights](docs/sdk/README.md#searchinsights) - <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [SearchOrganizationInsights](docs/sdk/README.md#searchorganizationinsights) - <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [StartCostEstimation](docs/sdk/README.md#startcostestimation) - Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
* [UpdateEventSourcesConfig](docs/sdk/README.md#updateeventsourcesconfig) - Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [UpdateResourceCollection](docs/sdk/README.md#updateresourcecollection) -  Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* [UpdateServiceIntegration](docs/sdk/README.md#updateserviceintegration) -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
