# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/compute-optimizer/2019-11-01/go
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

    req := operations.DeleteRecommendationPreferencesRequest{
        Headers: operations.DeleteRecommendationPreferencesHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ComputeOptimizerService.DeleteRecommendationPreferences",
        },
        Request: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                "InferredWorkloadTypes",
                "InferredWorkloadTypes",
            },
            ResourceType: "EbsVolume",
            Scope: &shared.Scope{
                Name: "AccountId",
                Value: "ullam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.DeleteRecommendationPreferences(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteRecommendationPreferences` - <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `DescribeRecommendationExportJobs` - <p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>
* `ExportAutoScalingGroupRecommendations` - <p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
* `ExportEBSVolumeRecommendations` - <p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
* `ExportEc2InstanceRecommendations` - <p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
* `ExportECSServiceRecommendations` - <p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
* `ExportLambdaFunctionRecommendations` - <p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
* `GetAutoScalingGroupRecommendations` - <p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `GetEBSVolumeRecommendations` - <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `GetEc2InstanceRecommendations` - <p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `GetEc2RecommendationProjectedMetrics` - <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
* `GetECSServiceRecommendationProjectedMetrics` -  Returns the projected metrics of Amazon ECS service recommendations. 
* `GetECSServiceRecommendations` - <p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>
* `GetEffectiveRecommendationPreferences` - <p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>
* `GetEnrollmentStatus` - <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>
* `GetEnrollmentStatusesForOrganization` - <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
* `GetLambdaFunctionRecommendations` - <p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `GetRecommendationPreferences` - <p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `GetRecommendationSummaries` - <p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>
* `PutRecommendationPreferences` - <p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* `UpdateEnrollmentStatus` - <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
