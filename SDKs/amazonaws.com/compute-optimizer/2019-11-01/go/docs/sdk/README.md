# SDK

## Overview

Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/compute-optimizer/>
### Available Operations

* [DeleteRecommendationPreferences](#deleterecommendationpreferences) - <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [DescribeRecommendationExportJobs](#describerecommendationexportjobs) - <p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>
* [ExportAutoScalingGroupRecommendations](#exportautoscalinggrouprecommendations) - <p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
* [ExportEBSVolumeRecommendations](#exportebsvolumerecommendations) - <p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
* [ExportEc2InstanceRecommendations](#exportec2instancerecommendations) - <p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
* [ExportECSServiceRecommendations](#exportecsservicerecommendations) - <p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
* [ExportLambdaFunctionRecommendations](#exportlambdafunctionrecommendations) - <p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
* [GetAutoScalingGroupRecommendations](#getautoscalinggrouprecommendations) - <p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [GetEBSVolumeRecommendations](#getebsvolumerecommendations) - <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [GetEc2InstanceRecommendations](#getec2instancerecommendations) - <p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [GetEc2RecommendationProjectedMetrics](#getec2recommendationprojectedmetrics) - <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
* [GetECSServiceRecommendationProjectedMetrics](#getecsservicerecommendationprojectedmetrics) -  Returns the projected metrics of Amazon ECS service recommendations. 
* [GetECSServiceRecommendations](#getecsservicerecommendations) - <p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>
* [GetEffectiveRecommendationPreferences](#geteffectiverecommendationpreferences) - <p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>
* [GetEnrollmentStatus](#getenrollmentstatus) - <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>
* [GetEnrollmentStatusesForOrganization](#getenrollmentstatusesfororganization) - <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
* [GetLambdaFunctionRecommendations](#getlambdafunctionrecommendations) - <p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [GetRecommendationPreferences](#getrecommendationpreferences) - <p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [GetRecommendationSummaries](#getrecommendationsummaries) - <p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>
* [PutRecommendationPreferences](#putrecommendationpreferences) - <p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [UpdateEnrollmentStatus](#updateenrollmentstatus) - <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

## DeleteRecommendationPreferences

<p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.DeleteRecommendationPreferences(ctx, operations.DeleteRecommendationPreferencesRequest{
        DeleteRecommendationPreferencesRequest: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                shared.RecommendationPreferenceNameEnumEnhancedInfrastructureMetrics,
                shared.RecommendationPreferenceNameEnumExternalMetricsPreference,
                shared.RecommendationPreferenceNameEnumEnhancedInfrastructureMetrics,
                shared.RecommendationPreferenceNameEnumInferredWorkloadTypes,
            },
            ResourceType: shared.ResourceTypeEnumEbsVolume,
            Scope: &shared.Scope{
                Name: shared.ScopeNameEnumResourceArn.ToPointer(),
                Value: sdk.String("placeat"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DeleteRecommendationPreferencesXAmzTargetEnumComputeOptimizerServiceDeleteRecommendationPreferences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```

## DescribeRecommendationExportJobs

<p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>

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
    res, err := s.SDK.DescribeRecommendationExportJobs(ctx, operations.DescribeRecommendationExportJobsRequest{
        DescribeRecommendationExportJobsRequest: shared.DescribeRecommendationExportJobsRequest{
            Filters: []shared.JobFilter{
                shared.JobFilter{
                    Name: shared.JobFilterNameEnumResourceType.ToPointer(),
                    Values: []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                },
                shared.JobFilter{
                    Name: shared.JobFilterNameEnumJobStatus.ToPointer(),
                    Values: []string{
                        "odit",
                        "at",
                        "at",
                        "maiores",
                    },
                },
            },
            JobIds: []string{
                "quod",
                "quod",
            },
            MaxResults: sdk.Int64(461479),
            NextToken: sdk.String("totam"),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DescribeRecommendationExportJobsXAmzTargetEnumComputeOptimizerServiceDescribeRecommendationExportJobs,
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecommendationExportJobsResponse != nil {
        // handle response
    }
}
```

## ExportAutoScalingGroupRecommendations

<p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>

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
    res, err := s.SDK.ExportAutoScalingGroupRecommendations(ctx, operations.ExportAutoScalingGroupRecommendationsRequest{
        ExportAutoScalingGroupRecommendationsRequest: shared.ExportAutoScalingGroupRecommendationsRequest{
            AccountIds: []string{
                "totam",
                "beatae",
                "commodi",
                "molestiae",
            },
            FieldsToExport: []shared.ExportableAutoScalingGroupFieldEnum{
                shared.ExportableAutoScalingGroupFieldEnumUtilizationMetricsDiskReadOpsPerSecondMaximum,
                shared.ExportableAutoScalingGroupFieldEnumRecommendationOptionsMemory,
            },
            FileFormat: shared.FileFormatEnumCsv.ToPointer(),
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumFindingReasonCodes.ToPointer(),
                    Values: []string{
                        "excepturi",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "ad",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFindingReasonCodes.ToPointer(),
                    Values: []string{
                        "iste",
                    },
                },
            },
            IncludeMemberAccounts: sdk.Bool(false),
            RecommendationPreferences: &shared.RecommendationPreferences{
                CPUVendorArchitectures: []shared.CPUVendorArchitectureEnum{
                    shared.CPUVendorArchitectureEnumCurrent,
                },
            },
            S3DestinationConfig: shared.S3DestinationConfig{
                Bucket: sdk.String("laboriosam"),
                KeyPrefix: sdk.String("hic"),
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ExportAutoScalingGroupRecommendationsXAmzTargetEnumComputeOptimizerServiceExportAutoScalingGroupRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAutoScalingGroupRecommendationsResponse != nil {
        // handle response
    }
}
```

## ExportEBSVolumeRecommendations

<p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>

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
    res, err := s.SDK.ExportEBSVolumeRecommendations(ctx, operations.ExportEBSVolumeRecommendationsRequest{
        ExportEBSVolumeRecommendationsRequest: shared.ExportEBSVolumeRecommendationsRequest{
            AccountIds: []string{
                "architecto",
                "ipsa",
                "reiciendis",
            },
            FieldsToExport: []shared.ExportableVolumeFieldEnum{
                shared.ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBurstIops,
                shared.ExportableVolumeFieldEnumRecommendationOptionsConfigurationVolumeBurstThroughput,
                shared.ExportableVolumeFieldEnumUtilizationMetricsVolumeWriteOpsPerSecondMaximum,
            },
            FileFormat: shared.FileFormatEnumCsv.ToPointer(),
            Filters: []shared.EBSFilter{
                shared.EBSFilter{
                    Name: shared.EBSFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "explicabo",
                        "nobis",
                    },
                },
            },
            IncludeMemberAccounts: sdk.Bool(false),
            S3DestinationConfig: shared.S3DestinationConfig{
                Bucket: sdk.String("enim"),
                KeyPrefix: sdk.String("omnis"),
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.ExportEBSVolumeRecommendationsXAmzTargetEnumComputeOptimizerServiceExportEbsVolumeRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportEBSVolumeRecommendationsResponse != nil {
        // handle response
    }
}
```

## ExportEc2InstanceRecommendations

<p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>

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
    res, err := s.SDK.ExportEc2InstanceRecommendations(ctx, operations.ExportEc2InstanceRecommendationsRequest{
        ExportEc2InstanceRecommendationsRequest: shared.ExportEc2InstanceRecommendationsRequest{
            AccountIds: []string{
                "architecto",
                "mollitia",
                "dolorem",
                "culpa",
            },
            FieldsToExport: []shared.ExportableInstanceFieldEnum{
                shared.ExportableInstanceFieldEnumInstanceState,
            },
            FileFormat: shared.FileFormatEnumCsv.ToPointer(),
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumFindingReasonCodes.ToPointer(),
                    Values: []string{
                        "commodi",
                        "quam",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFindingReasonCodes.ToPointer(),
                    Values: []string{
                        "error",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "vitae",
                        "laborum",
                    },
                },
            },
            IncludeMemberAccounts: sdk.Bool(false),
            RecommendationPreferences: &shared.RecommendationPreferences{
                CPUVendorArchitectures: []shared.CPUVendorArchitectureEnum{
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumCurrent,
                },
            },
            S3DestinationConfig: shared.S3DestinationConfig{
                Bucket: sdk.String("sequi"),
                KeyPrefix: sdk.String("tenetur"),
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.ExportEc2InstanceRecommendationsXAmzTargetEnumComputeOptimizerServiceExportEc2InstanceRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportEc2InstanceRecommendationsResponse != nil {
        // handle response
    }
}
```

## ExportECSServiceRecommendations

<p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>

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
    res, err := s.SDK.ExportECSServiceRecommendations(ctx, operations.ExportECSServiceRecommendationsRequest{
        ExportECSServiceRecommendationsRequest: shared.ExportECSServiceRecommendationsRequest{
            AccountIds: []string{
                "quasi",
                "reiciendis",
                "voluptatibus",
            },
            FieldsToExport: []shared.ExportableECSServiceFieldEnum{
                shared.ExportableECSServiceFieldEnumCurrentServiceContainerConfigurations,
                shared.ExportableECSServiceFieldEnumUtilizationMetricsCPUMaximum,
                shared.ExportableECSServiceFieldEnumRecommendationOptionsProjectedUtilizationMetricsMemoryMaximum,
                shared.ExportableECSServiceFieldEnumServiceArn,
            },
            FileFormat: shared.FileFormatEnumCsv.ToPointer(),
            Filters: []shared.ECSServiceRecommendationFilter{
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "perferendis",
                        "doloremque",
                        "reprehenderit",
                    },
                },
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                },
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "enim",
                        "accusamus",
                        "commodi",
                    },
                },
            },
            IncludeMemberAccounts: sdk.Bool(false),
            S3DestinationConfig: shared.S3DestinationConfig{
                Bucket: sdk.String("repudiandae"),
                KeyPrefix: sdk.String("quae"),
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ExportECSServiceRecommendationsXAmzTargetEnumComputeOptimizerServiceExportEcsServiceRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportECSServiceRecommendationsResponse != nil {
        // handle response
    }
}
```

## ExportLambdaFunctionRecommendations

<p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>

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
    res, err := s.SDK.ExportLambdaFunctionRecommendations(ctx, operations.ExportLambdaFunctionRecommendationsRequest{
        ExportLambdaFunctionRecommendationsRequest: shared.ExportLambdaFunctionRecommendationsRequest{
            AccountIds: []string{
                "voluptates",
                "quasi",
                "repudiandae",
            },
            FieldsToExport: []shared.ExportableLambdaFunctionFieldEnum{
                shared.ExportableLambdaFunctionFieldEnumFunctionVersion,
                shared.ExportableLambdaFunctionFieldEnumRecommendationOptionsEstimatedMonthlySavingsCurrency,
                shared.ExportableLambdaFunctionFieldEnumUtilizationMetricsDurationAverage,
            },
            FileFormat: shared.FileFormatEnumCsv.ToPointer(),
            Filters: []shared.LambdaFunctionRecommendationFilter{
                shared.LambdaFunctionRecommendationFilter{
                    Name: shared.LambdaFunctionRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "quibusdam",
                        "explicabo",
                        "deserunt",
                    },
                },
                shared.LambdaFunctionRecommendationFilter{
                    Name: shared.LambdaFunctionRecommendationFilterNameEnumFindingReasonCode.ToPointer(),
                    Values: []string{
                        "labore",
                        "modi",
                        "qui",
                        "aliquid",
                    },
                },
            },
            IncludeMemberAccounts: sdk.Bool(false),
            S3DestinationConfig: shared.S3DestinationConfig{
                Bucket: sdk.String("cupiditate"),
                KeyPrefix: sdk.String("quos"),
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ExportLambdaFunctionRecommendationsXAmzTargetEnumComputeOptimizerServiceExportLambdaFunctionRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportLambdaFunctionRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetAutoScalingGroupRecommendations

<p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.GetAutoScalingGroupRecommendations(ctx, operations.GetAutoScalingGroupRecommendationsRequest{
        GetAutoScalingGroupRecommendationsRequest: shared.GetAutoScalingGroupRecommendationsRequest{
            AccountIds: []string{
                "tempora",
                "facilis",
                "tempore",
            },
            AutoScalingGroupArns: []string{
                "delectus",
                "eum",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumRecommendationSourceType.ToPointer(),
                    Values: []string{
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                },
            },
            MaxResults: sdk.Int64(572252),
            NextToken: sdk.String("officia"),
            RecommendationPreferences: &shared.RecommendationPreferences{
                CPUVendorArchitectures: []shared.CPUVendorArchitectureEnum{
                    shared.CPUVendorArchitectureEnumCurrent,
                },
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.GetAutoScalingGroupRecommendationsXAmzTargetEnumComputeOptimizerServiceGetAutoScalingGroupRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutoScalingGroupRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetEBSVolumeRecommendations

<p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.GetEBSVolumeRecommendations(ctx, operations.GetEBSVolumeRecommendationsRequest{
        GetEBSVolumeRecommendationsRequest: shared.GetEBSVolumeRecommendationsRequest{
            AccountIds: []string{
                "magnam",
            },
            Filters: []shared.EBSFilter{
                shared.EBSFilter{
                    Name: shared.EBSFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "ea",
                        "aliquid",
                        "laborum",
                        "accusamus",
                    },
                },
                shared.EBSFilter{
                    Name: shared.EBSFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "occaecati",
                    },
                },
                shared.EBSFilter{
                    Name: shared.EBSFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "accusamus",
                        "delectus",
                    },
                },
                shared.EBSFilter{
                    Name: shared.EBSFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "provident",
                        "nam",
                        "id",
                    },
                },
            },
            MaxResults: sdk.Int64(501324),
            NextToken: sdk.String("deleniti"),
            VolumeArns: []string{
                "amet",
                "deserunt",
                "nisi",
                "vel",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.GetEBSVolumeRecommendationsXAmzTargetEnumComputeOptimizerServiceGetEbsVolumeRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEBSVolumeRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetEc2InstanceRecommendations

<p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.GetEc2InstanceRecommendations(ctx, operations.GetEc2InstanceRecommendationsRequest{
        GetEc2InstanceRecommendationsRequest: shared.GetEc2InstanceRecommendationsRequest{
            AccountIds: []string{
                "labore",
                "labore",
                "suscipit",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumRecommendationSourceType.ToPointer(),
                    Values: []string{
                        "vero",
                        "aspernatur",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "et",
                        "excepturi",
                    },
                },
                shared.Filter{
                    Name: shared.FilterNameEnumFindingReasonCodes.ToPointer(),
                    Values: []string{
                        "quos",
                        "sint",
                        "accusantium",
                    },
                },
            },
            InstanceArns: []string{
                "reiciendis",
                "mollitia",
                "ad",
            },
            MaxResults: sdk.Int64(431418),
            NextToken: sdk.String("dolor"),
            RecommendationPreferences: &shared.RecommendationPreferences{
                CPUVendorArchitectures: []shared.CPUVendorArchitectureEnum{
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumAwsArm64,
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.GetEc2InstanceRecommendationsXAmzTargetEnumComputeOptimizerServiceGetEc2InstanceRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEc2InstanceRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetEc2RecommendationProjectedMetrics

<p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

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
    res, err := s.SDK.GetEc2RecommendationProjectedMetrics(ctx, operations.GetEc2RecommendationProjectedMetricsRequest{
        GetEc2RecommendationProjectedMetricsRequest: shared.GetEc2RecommendationProjectedMetricsRequest{
            EndTime: types.MustTimeFromString("2022-11-25T15:46:28.441Z"),
            InstanceArn: "repudiandae",
            Period: 352312,
            RecommendationPreferences: &shared.RecommendationPreferences{
                CPUVendorArchitectures: []shared.CPUVendorArchitectureEnum{
                    shared.CPUVendorArchitectureEnumAwsArm64,
                    shared.CPUVendorArchitectureEnumCurrent,
                    shared.CPUVendorArchitectureEnumCurrent,
                },
            },
            StartTime: types.MustTimeFromString("2022-02-04T19:17:08.641Z"),
            Stat: shared.MetricStatisticEnumAverage,
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.GetEc2RecommendationProjectedMetricsXAmzTargetEnumComputeOptimizerServiceGetEc2RecommendationProjectedMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEc2RecommendationProjectedMetricsResponse != nil {
        // handle response
    }
}
```

## GetECSServiceRecommendationProjectedMetrics

 Returns the projected metrics of Amazon ECS service recommendations. 

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
    res, err := s.SDK.GetECSServiceRecommendationProjectedMetrics(ctx, operations.GetECSServiceRecommendationProjectedMetricsRequest{
        GetECSServiceRecommendationProjectedMetricsRequest: shared.GetECSServiceRecommendationProjectedMetricsRequest{
            EndTime: types.MustTimeFromString("2020-05-28T21:33:10.895Z"),
            Period: 807319,
            ServiceArn: "ea",
            StartTime: types.MustTimeFromString("2022-09-20T19:40:48.375Z"),
            Stat: shared.MetricStatisticEnumMaximum,
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        XAmzTarget: operations.GetECSServiceRecommendationProjectedMetricsXAmzTargetEnumComputeOptimizerServiceGetEcsServiceRecommendationProjectedMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetECSServiceRecommendationProjectedMetricsResponse != nil {
        // handle response
    }
}
```

## GetECSServiceRecommendations

<p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>

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
    res, err := s.SDK.GetECSServiceRecommendations(ctx, operations.GetECSServiceRecommendationsRequest{
        GetECSServiceRecommendationsRequest: shared.GetECSServiceRecommendationsRequest{
            AccountIds: []string{
                "eaque",
                "pariatur",
                "nemo",
            },
            Filters: []shared.ECSServiceRecommendationFilter{
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "amet",
                        "aut",
                        "cumque",
                        "corporis",
                    },
                },
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFindingReasonCode.ToPointer(),
                    Values: []string{
                        "nobis",
                        "dolores",
                        "quis",
                    },
                },
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFindingReasonCode.ToPointer(),
                    Values: []string{
                        "eaque",
                        "quis",
                    },
                },
                shared.ECSServiceRecommendationFilter{
                    Name: shared.ECSServiceRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "perferendis",
                    },
                },
            },
            MaxResults: sdk.Int64(170986),
            NextToken: sdk.String("minus"),
            ServiceArns: []string{
                "dolor",
                "vero",
            },
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.GetECSServiceRecommendationsXAmzTargetEnumComputeOptimizerServiceGetEcsServiceRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetECSServiceRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetEffectiveRecommendationPreferences

<p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>

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
    res, err := s.SDK.GetEffectiveRecommendationPreferences(ctx, operations.GetEffectiveRecommendationPreferencesRequest{
        GetEffectiveRecommendationPreferencesRequest: shared.GetEffectiveRecommendationPreferencesRequest{
            ResourceArn: "porro",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.GetEffectiveRecommendationPreferencesXAmzTargetEnumComputeOptimizerServiceGetEffectiveRecommendationPreferences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEffectiveRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```

## GetEnrollmentStatus

<p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>

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
    res, err := s.SDK.GetEnrollmentStatus(ctx, operations.GetEnrollmentStatusRequest{
        RequestBody: map[string]interface{}{
            "earum": "modi",
            "iste": "dolorum",
            "deleniti": "pariatur",
            "provident": "nobis",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.GetEnrollmentStatusXAmzTargetEnumComputeOptimizerServiceGetEnrollmentStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnrollmentStatusResponse != nil {
        // handle response
    }
}
```

## GetEnrollmentStatusesForOrganization

<p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>

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
    res, err := s.SDK.GetEnrollmentStatusesForOrganization(ctx, operations.GetEnrollmentStatusesForOrganizationRequest{
        GetEnrollmentStatusesForOrganizationRequest: shared.GetEnrollmentStatusesForOrganizationRequest{
            Filters: []shared.EnrollmentFilter{
                shared.EnrollmentFilter{
                    Name: shared.EnrollmentFilterNameEnumStatus.ToPointer(),
                    Values: []string{
                        "ipsum",
                    },
                },
            },
            MaxResults: sdk.Int64(944373),
            NextToken: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.GetEnrollmentStatusesForOrganizationXAmzTargetEnumComputeOptimizerServiceGetEnrollmentStatusesForOrganization,
        MaxResults: sdk.String("veritatis"),
        NextToken: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnrollmentStatusesForOrganizationResponse != nil {
        // handle response
    }
}
```

## GetLambdaFunctionRecommendations

<p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.GetLambdaFunctionRecommendations(ctx, operations.GetLambdaFunctionRecommendationsRequest{
        GetLambdaFunctionRecommendationsRequest: shared.GetLambdaFunctionRecommendationsRequest{
            AccountIds: []string{
                "iure",
            },
            Filters: []shared.LambdaFunctionRecommendationFilter{
                shared.LambdaFunctionRecommendationFilter{
                    Name: shared.LambdaFunctionRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "quidem",
                        "voluptatibus",
                        "voluptas",
                        "natus",
                    },
                },
                shared.LambdaFunctionRecommendationFilter{
                    Name: shared.LambdaFunctionRecommendationFilterNameEnumFinding.ToPointer(),
                    Values: []string{
                        "sit",
                        "fugiat",
                        "ab",
                    },
                },
            },
            FunctionArns: []string{
                "dolorum",
                "iusto",
                "voluptate",
            },
            MaxResults: sdk.Int64(677082),
            NextToken: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.GetLambdaFunctionRecommendationsXAmzTargetEnumComputeOptimizerServiceGetLambdaFunctionRecommendations,
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLambdaFunctionRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetRecommendationPreferences

<p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.GetRecommendationPreferences(ctx, operations.GetRecommendationPreferencesRequest{
        GetRecommendationPreferencesRequest: shared.GetRecommendationPreferencesRequest{
            MaxResults: sdk.Int64(263322),
            NextToken: sdk.String("aspernatur"),
            ResourceType: shared.ResourceTypeEnumEc2Instance,
            Scope: &shared.Scope{
                Name: shared.ScopeNameEnumOrganization.ToPointer(),
                Value: sdk.String("optio"),
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.GetRecommendationPreferencesXAmzTargetEnumComputeOptimizerServiceGetRecommendationPreferences,
        MaxResults: sdk.String("repellendus"),
        NextToken: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```

## GetRecommendationSummaries

<p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>

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
    res, err := s.SDK.GetRecommendationSummaries(ctx, operations.GetRecommendationSummariesRequest{
        GetRecommendationSummariesRequest: shared.GetRecommendationSummariesRequest{
            AccountIds: []string{
                "alias",
                "at",
                "quaerat",
            },
            MaxResults: sdk.Int64(273542),
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.GetRecommendationSummariesXAmzTargetEnumComputeOptimizerServiceGetRecommendationSummaries,
        MaxResults: sdk.String("iusto"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationSummariesResponse != nil {
        // handle response
    }
}
```

## PutRecommendationPreferences

<p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.PutRecommendationPreferences(ctx, operations.PutRecommendationPreferencesRequest{
        PutRecommendationPreferencesRequest: shared.PutRecommendationPreferencesRequest{
            EnhancedInfrastructureMetrics: shared.EnhancedInfrastructureMetricsEnumInactive.ToPointer(),
            ExternalMetricsPreference: &shared.ExternalMetricsPreference{
                Source: shared.ExternalMetricsSourceEnumInstana.ToPointer(),
            },
            InferredWorkloadTypes: shared.InferredWorkloadTypesPreferenceEnumActive.ToPointer(),
            ResourceType: shared.ResourceTypeEnumNotApplicable,
            Scope: &shared.Scope{
                Name: shared.ScopeNameEnumResourceArn.ToPointer(),
                Value: sdk.String("numquam"),
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.PutRecommendationPreferencesXAmzTargetEnumComputeOptimizerServicePutRecommendationPreferences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```

## UpdateEnrollmentStatus

<p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

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
    res, err := s.SDK.UpdateEnrollmentStatus(ctx, operations.UpdateEnrollmentStatusRequest{
        UpdateEnrollmentStatusRequest: shared.UpdateEnrollmentStatusRequest{
            IncludeMemberAccounts: sdk.Bool(false),
            Status: shared.StatusEnumActive,
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.UpdateEnrollmentStatusXAmzTargetEnumComputeOptimizerServiceUpdateEnrollmentStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnrollmentStatusResponse != nil {
        // handle response
    }
}
```
