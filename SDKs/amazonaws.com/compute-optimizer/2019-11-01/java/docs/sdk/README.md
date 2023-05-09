# SDK

## Overview

Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/compute-optimizer/>
### Available Operations

* [deleteRecommendationPreferences](#deleterecommendationpreferences) - <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [describeRecommendationExportJobs](#describerecommendationexportjobs) - <p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>
* [exportAutoScalingGroupRecommendations](#exportautoscalinggrouprecommendations) - <p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
* [exportEBSVolumeRecommendations](#exportebsvolumerecommendations) - <p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
* [exportEc2InstanceRecommendations](#exportec2instancerecommendations) - <p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
* [exportECSServiceRecommendations](#exportecsservicerecommendations) - <p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
* [exportLambdaFunctionRecommendations](#exportlambdafunctionrecommendations) - <p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
* [getAutoScalingGroupRecommendations](#getautoscalinggrouprecommendations) - <p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [getEBSVolumeRecommendations](#getebsvolumerecommendations) - <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [getEc2InstanceRecommendations](#getec2instancerecommendations) - <p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [getEc2RecommendationProjectedMetrics](#getec2recommendationprojectedmetrics) - <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
* [getECSServiceRecommendationProjectedMetrics](#getecsservicerecommendationprojectedmetrics) -  Returns the projected metrics of Amazon ECS service recommendations. 
* [getECSServiceRecommendations](#getecsservicerecommendations) - <p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>
* [getEffectiveRecommendationPreferences](#geteffectiverecommendationpreferences) - <p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>
* [getEnrollmentStatus](#getenrollmentstatus) - <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>
* [getEnrollmentStatusesForOrganization](#getenrollmentstatusesfororganization) - <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
* [getLambdaFunctionRecommendations](#getlambdafunctionrecommendations) - <p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [getRecommendationPreferences](#getrecommendationpreferences) - <p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [getRecommendationSummaries](#getrecommendationsummaries) - <p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>
* [putRecommendationPreferences](#putrecommendationpreferences) - <p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
* [updateEnrollmentStatus](#updateenrollmentstatus) - <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

## deleteRecommendationPreferences

<p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesResponse;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.ScopeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecommendationPreferencesRequest req = new DeleteRecommendationPreferencesRequest(                new DeleteRecommendationPreferencesRequest(                new org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum[]{{
                                                add(RecommendationPreferenceNameEnum.ENHANCED_INFRASTRUCTURE_METRICS),
                                                add(RecommendationPreferenceNameEnum.INFERRED_WORKLOAD_TYPES),
                                                add(RecommendationPreferenceNameEnum.INFERRED_WORKLOAD_TYPES),
                                                add(RecommendationPreferenceNameEnum.EXTERNAL_METRICS_PREFERENCE),
                                            }}, ResourceTypeEnum.NOT_APPLICABLE) {{
                                scope = new Scope() {{
                                    name = ScopeNameEnum.ACCOUNT_ID;
                                    value = "iusto";
                                }};;
                            }};, DeleteRecommendationPreferencesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_DELETE_RECOMMENDATION_PREFERENCES) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteRecommendationPreferencesResponse res = sdk.sdk.deleteRecommendationPreferences(req);

            if (res.deleteRecommendationPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecommendationExportJobs

<p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecommendationExportJobsRequest;
import org.openapis.openapi.models.operations.DescribeRecommendationExportJobsResponse;
import org.openapis.openapi.models.operations.DescribeRecommendationExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecommendationExportJobsRequest;
import org.openapis.openapi.models.shared.JobFilter;
import org.openapis.openapi.models.shared.JobFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecommendationExportJobsRequest req = new DescribeRecommendationExportJobsRequest(                new DescribeRecommendationExportJobsRequest() {{
                                filters = new org.openapis.openapi.models.shared.JobFilter[]{{
                                    add(new JobFilter() {{
                                        name = JobFilterNameEnum.RESOURCE_TYPE;
                                        values = new String[]{{
                                            add("sapiente"),
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                        }};
                                    }}),
                                }};
                                jobIds = new String[]{{
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                }};
                                maxResults = 461479L;
                                nextToken = "totam";
                            }};, DescribeRecommendationExportJobsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_DESCRIBE_RECOMMENDATION_EXPORT_JOBS) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
                maxResults = "deleniti";
                nextToken = "hic";
            }};            

            DescribeRecommendationExportJobsResponse res = sdk.sdk.describeRecommendationExportJobs(req);

            if (res.describeRecommendationExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAutoScalingGroupRecommendations

<p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAutoScalingGroupRecommendationsRequest;
import org.openapis.openapi.models.operations.ExportAutoScalingGroupRecommendationsResponse;
import org.openapis.openapi.models.operations.ExportAutoScalingGroupRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CpuVendorArchitectureEnum;
import org.openapis.openapi.models.shared.ExportAutoScalingGroupRecommendationsRequest;
import org.openapis.openapi.models.shared.ExportableAutoScalingGroupFieldEnum;
import org.openapis.openapi.models.shared.FileFormatEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.RecommendationPreferences;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportAutoScalingGroupRecommendationsRequest req = new ExportAutoScalingGroupRecommendationsRequest(                new ExportAutoScalingGroupRecommendationsRequest(                new S3DestinationConfig() {{
                                                bucket = "totam";
                                                keyPrefix = "beatae";
                                            }};) {{
                                accountIds = new String[]{{
                                    add("molestiae"),
                                    add("modi"),
                                }};
                                fieldsToExport = new org.openapis.openapi.models.shared.ExportableAutoScalingGroupFieldEnum[]{{
                                    add(ExportableAutoScalingGroupFieldEnum.RECOMMENDATION_OPTIONS_MEMORY),
                                }};
                                fileFormat = FileFormatEnum.CSV;
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("excepturi"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("ad"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("iste"),
                                        }};
                                    }}),
                                }};
                                includeMemberAccounts = false;
                                recommendationPreferences = new RecommendationPreferences() {{
                                    cpuVendorArchitectures = new org.openapis.openapi.models.shared.CpuVendorArchitectureEnum[]{{
                                        add(CpuVendorArchitectureEnum.CURRENT),
                                    }};
                                }};;
                            }};, ExportAutoScalingGroupRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_EXPORT_AUTO_SCALING_GROUP_RECOMMENDATIONS) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            ExportAutoScalingGroupRecommendationsResponse res = sdk.sdk.exportAutoScalingGroupRecommendations(req);

            if (res.exportAutoScalingGroupRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportEBSVolumeRecommendations

<p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportEBSVolumeRecommendationsRequest;
import org.openapis.openapi.models.operations.ExportEBSVolumeRecommendationsResponse;
import org.openapis.openapi.models.operations.ExportEBSVolumeRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EBSFilter;
import org.openapis.openapi.models.shared.EBSFilterNameEnum;
import org.openapis.openapi.models.shared.ExportEBSVolumeRecommendationsRequest;
import org.openapis.openapi.models.shared.ExportableVolumeFieldEnum;
import org.openapis.openapi.models.shared.FileFormatEnum;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportEBSVolumeRecommendationsRequest req = new ExportEBSVolumeRecommendationsRequest(                new ExportEBSVolumeRecommendationsRequest(                new S3DestinationConfig() {{
                                                bucket = "saepe";
                                                keyPrefix = "quidem";
                                            }};) {{
                                accountIds = new String[]{{
                                    add("ipsa"),
                                }};
                                fieldsToExport = new org.openapis.openapi.models.shared.ExportableVolumeFieldEnum[]{{
                                    add(ExportableVolumeFieldEnum.RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT),
                                    add(ExportableVolumeFieldEnum.RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS),
                                    add(ExportableVolumeFieldEnum.RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT),
                                    add(ExportableVolumeFieldEnum.UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM),
                                }};
                                fileFormat = FileFormatEnum.CSV;
                                filters = new org.openapis.openapi.models.shared.EBSFilter[]{{
                                    add(new EBSFilter() {{
                                        name = EBSFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("explicabo"),
                                            add("nobis"),
                                        }};
                                    }}),
                                }};
                                includeMemberAccounts = false;
                            }};, ExportEBSVolumeRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_EXPORT_EBS_VOLUME_RECOMMENDATIONS) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            ExportEBSVolumeRecommendationsResponse res = sdk.sdk.exportEBSVolumeRecommendations(req);

            if (res.exportEBSVolumeRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportEc2InstanceRecommendations

<p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportEc2InstanceRecommendationsRequest;
import org.openapis.openapi.models.operations.ExportEc2InstanceRecommendationsResponse;
import org.openapis.openapi.models.operations.ExportEc2InstanceRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CpuVendorArchitectureEnum;
import org.openapis.openapi.models.shared.ExportEc2InstanceRecommendationsRequest;
import org.openapis.openapi.models.shared.ExportableInstanceFieldEnum;
import org.openapis.openapi.models.shared.FileFormatEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.RecommendationPreferences;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportEc2InstanceRecommendationsRequest req = new ExportEc2InstanceRecommendationsRequest(                new ExportEc2InstanceRecommendationsRequest(                new S3DestinationConfig() {{
                                                bucket = "doloribus";
                                                keyPrefix = "sapiente";
                                            }};) {{
                                accountIds = new String[]{{
                                    add("mollitia"),
                                }};
                                fieldsToExport = new org.openapis.openapi.models.shared.ExportableInstanceFieldEnum[]{{
                                    add(ExportableInstanceFieldEnum.RECOMMENDATION_OPTIONS_MEMORY),
                                }};
                                fileFormat = FileFormatEnum.CSV;
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.RECOMMENDATION_SOURCE_TYPE;
                                        values = new String[]{{
                                            add("occaecati"),
                                            add("numquam"),
                                            add("commodi"),
                                        }};
                                    }}),
                                }};
                                includeMemberAccounts = false;
                                recommendationPreferences = new RecommendationPreferences() {{
                                    cpuVendorArchitectures = new org.openapis.openapi.models.shared.CpuVendorArchitectureEnum[]{{
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                    }};
                                }};;
                            }};, ExportEc2InstanceRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_EXPORT_EC2_INSTANCE_RECOMMENDATIONS) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quis";
                xAmzDate = "vitae";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "enim";
            }};            

            ExportEc2InstanceRecommendationsResponse res = sdk.sdk.exportEc2InstanceRecommendations(req);

            if (res.exportEc2InstanceRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportECSServiceRecommendations

<p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportECSServiceRecommendationsRequest;
import org.openapis.openapi.models.operations.ExportECSServiceRecommendationsResponse;
import org.openapis.openapi.models.operations.ExportECSServiceRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ECSServiceRecommendationFilter;
import org.openapis.openapi.models.shared.ECSServiceRecommendationFilterNameEnum;
import org.openapis.openapi.models.shared.ExportECSServiceRecommendationsRequest;
import org.openapis.openapi.models.shared.ExportableECSServiceFieldEnum;
import org.openapis.openapi.models.shared.FileFormatEnum;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportECSServiceRecommendationsRequest req = new ExportECSServiceRecommendationsRequest(                new ExportECSServiceRecommendationsRequest(                new S3DestinationConfig() {{
                                                bucket = "quo";
                                                keyPrefix = "sequi";
                                            }};) {{
                                accountIds = new String[]{{
                                    add("ipsam"),
                                    add("id"),
                                    add("possimus"),
                                    add("aut"),
                                }};
                                fieldsToExport = new org.openapis.openapi.models.shared.ExportableECSServiceFieldEnum[]{{
                                    add(ExportableECSServiceFieldEnum.FINDING_REASON_CODES),
                                }};
                                fileFormat = FileFormatEnum.CSV;
                                filters = new org.openapis.openapi.models.shared.ECSServiceRecommendationFilter[]{{
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                            add("ipsa"),
                                        }};
                                    }}),
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("ut"),
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                                includeMemberAccounts = false;
                            }};, ExportECSServiceRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_EXPORT_ECS_SERVICE_RECOMMENDATIONS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            ExportECSServiceRecommendationsResponse res = sdk.sdk.exportECSServiceRecommendations(req);

            if (res.exportECSServiceRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportLambdaFunctionRecommendations

<p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportLambdaFunctionRecommendationsRequest;
import org.openapis.openapi.models.operations.ExportLambdaFunctionRecommendationsResponse;
import org.openapis.openapi.models.operations.ExportLambdaFunctionRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExportLambdaFunctionRecommendationsRequest;
import org.openapis.openapi.models.shared.ExportableLambdaFunctionFieldEnum;
import org.openapis.openapi.models.shared.FileFormatEnum;
import org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilter;
import org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilterNameEnum;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportLambdaFunctionRecommendationsRequest req = new ExportLambdaFunctionRecommendationsRequest(                new ExportLambdaFunctionRecommendationsRequest(                new S3DestinationConfig() {{
                                                bucket = "commodi";
                                                keyPrefix = "repudiandae";
                                            }};) {{
                                accountIds = new String[]{{
                                    add("ipsum"),
                                }};
                                fieldsToExport = new org.openapis.openapi.models.shared.ExportableLambdaFunctionFieldEnum[]{{
                                    add(ExportableLambdaFunctionFieldEnum.CURRENT_COST_AVERAGE),
                                    add(ExportableLambdaFunctionFieldEnum.CURRENT_COST_AVERAGE),
                                    add(ExportableLambdaFunctionFieldEnum.CURRENT_PERFORMANCE_RISK),
                                }};
                                fileFormat = FileFormatEnum.CSV;
                                filters = new org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilter[]{{
                                    add(new LambdaFunctionRecommendationFilter() {{
                                        name = LambdaFunctionRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("voluptates"),
                                            add("quasi"),
                                            add("repudiandae"),
                                        }};
                                    }}),
                                    add(new LambdaFunctionRecommendationFilter() {{
                                        name = LambdaFunctionRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("itaque"),
                                        }};
                                    }}),
                                }};
                                includeMemberAccounts = false;
                            }};, ExportLambdaFunctionRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_EXPORT_LAMBDA_FUNCTION_RECOMMENDATIONS) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            ExportLambdaFunctionRecommendationsResponse res = sdk.sdk.exportLambdaFunctionRecommendations(req);

            if (res.exportLambdaFunctionRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutoScalingGroupRecommendations

<p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutoScalingGroupRecommendationsRequest;
import org.openapis.openapi.models.operations.GetAutoScalingGroupRecommendationsResponse;
import org.openapis.openapi.models.operations.GetAutoScalingGroupRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CpuVendorArchitectureEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.GetAutoScalingGroupRecommendationsRequest;
import org.openapis.openapi.models.shared.RecommendationPreferences;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutoScalingGroupRecommendationsRequest req = new GetAutoScalingGroupRecommendationsRequest(                new GetAutoScalingGroupRecommendationsRequest() {{
                                accountIds = new String[]{{
                                    add("labore"),
                                    add("modi"),
                                    add("qui"),
                                    add("aliquid"),
                                }};
                                autoScalingGroupArns = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("fugit"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.RECOMMENDATION_SOURCE_TYPE;
                                        values = new String[]{{
                                            add("tempora"),
                                            add("facilis"),
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("eum"),
                                            add("non"),
                                            add("eligendi"),
                                            add("sint"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("necessitatibus"),
                                            add("sint"),
                                            add("officia"),
                                        }};
                                    }}),
                                }};
                                maxResults = 223081L;
                                nextToken = "debitis";
                                recommendationPreferences = new RecommendationPreferences() {{
                                    cpuVendorArchitectures = new org.openapis.openapi.models.shared.CpuVendorArchitectureEnum[]{{
                                        add(CpuVendorArchitectureEnum.CURRENT),
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                        add(CpuVendorArchitectureEnum.CURRENT),
                                    }};
                                }};;
                            }};, GetAutoScalingGroupRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_AUTO_SCALING_GROUP_RECOMMENDATIONS) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            GetAutoScalingGroupRecommendationsResponse res = sdk.sdk.getAutoScalingGroupRecommendations(req);

            if (res.getAutoScalingGroupRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEBSVolumeRecommendations

<p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEBSVolumeRecommendationsRequest;
import org.openapis.openapi.models.operations.GetEBSVolumeRecommendationsResponse;
import org.openapis.openapi.models.operations.GetEBSVolumeRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EBSFilter;
import org.openapis.openapi.models.shared.EBSFilterNameEnum;
import org.openapis.openapi.models.shared.GetEBSVolumeRecommendationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEBSVolumeRecommendationsRequest req = new GetEBSVolumeRecommendationsRequest(                new GetEBSVolumeRecommendationsRequest() {{
                                accountIds = new String[]{{
                                    add("accusamus"),
                                    add("non"),
                                    add("occaecati"),
                                }};
                                filters = new org.openapis.openapi.models.shared.EBSFilter[]{{
                                    add(new EBSFilter() {{
                                        name = EBSFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("delectus"),
                                            add("quidem"),
                                            add("provident"),
                                            add("nam"),
                                        }};
                                    }}),
                                    add(new EBSFilter() {{
                                        name = EBSFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("blanditiis"),
                                            add("deleniti"),
                                            add("sapiente"),
                                        }};
                                    }}),
                                }};
                                maxResults = 230533L;
                                nextToken = "deserunt";
                                volumeArns = new String[]{{
                                    add("vel"),
                                    add("natus"),
                                }};
                            }};, GetEBSVolumeRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_EBS_VOLUME_RECOMMENDATIONS) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GetEBSVolumeRecommendationsResponse res = sdk.sdk.getEBSVolumeRecommendations(req);

            if (res.getEBSVolumeRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEc2InstanceRecommendations

<p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEc2InstanceRecommendationsRequest;
import org.openapis.openapi.models.operations.GetEc2InstanceRecommendationsResponse;
import org.openapis.openapi.models.operations.GetEc2InstanceRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CpuVendorArchitectureEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.GetEc2InstanceRecommendationsRequest;
import org.openapis.openapi.models.shared.RecommendationPreferences;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEc2InstanceRecommendationsRequest req = new GetEc2InstanceRecommendationsRequest(                new GetEc2InstanceRecommendationsRequest() {{
                                accountIds = new String[]{{
                                    add("suscipit"),
                                    add("natus"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("architecto"),
                                            add("magnam"),
                                            add("et"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("provident"),
                                            add("quos"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FINDING_REASON_CODES;
                                        values = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }}),
                                }};
                                instanceArns = new String[]{{
                                    add("mollitia"),
                                    add("ad"),
                                    add("eum"),
                                    add("dolor"),
                                }};
                                maxResults = 896547L;
                                nextToken = "odit";
                                recommendationPreferences = new RecommendationPreferences() {{
                                    cpuVendorArchitectures = new org.openapis.openapi.models.shared.CpuVendorArchitectureEnum[]{{
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                        add(CpuVendorArchitectureEnum.AWS_ARM64),
                                    }};
                                }};;
                            }};, GetEc2InstanceRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_EC2_INSTANCE_RECOMMENDATIONS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            GetEc2InstanceRecommendationsResponse res = sdk.sdk.getEc2InstanceRecommendations(req);

            if (res.getEc2InstanceRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEc2RecommendationProjectedMetrics

<p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEc2RecommendationProjectedMetricsRequest;
import org.openapis.openapi.models.operations.GetEc2RecommendationProjectedMetricsResponse;
import org.openapis.openapi.models.operations.GetEc2RecommendationProjectedMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CpuVendorArchitectureEnum;
import org.openapis.openapi.models.shared.GetEc2RecommendationProjectedMetricsRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.RecommendationPreferences;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEc2RecommendationProjectedMetricsRequest req = new GetEc2RecommendationProjectedMetricsRequest(                new GetEc2RecommendationProjectedMetricsRequest(OffsetDateTime.parse("2022-01-30T09:19:56.236Z"), "ullam", 714242L, OffsetDateTime.parse("2022-01-01T10:06:00.916Z"), MetricStatisticEnum.AVERAGE) {{
                                recommendationPreferences = new RecommendationPreferences() {{
                                    cpuVendorArchitectures = new org.openapis.openapi.models.shared.CpuVendorArchitectureEnum[]{{
                                        add(CpuVendorArchitectureEnum.CURRENT),
                                    }};
                                }};;
                            }};, GetEc2RecommendationProjectedMetricsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_EC2_RECOMMENDATION_PROJECTED_METRICS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "consequuntur";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "natus";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "sunt";
            }};            

            GetEc2RecommendationProjectedMetricsResponse res = sdk.sdk.getEc2RecommendationProjectedMetrics(req);

            if (res.getEc2RecommendationProjectedMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getECSServiceRecommendationProjectedMetrics

 Returns the projected metrics of Amazon ECS service recommendations. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationProjectedMetricsRequest;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationProjectedMetricsResponse;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetECSServiceRecommendationProjectedMetricsRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetECSServiceRecommendationProjectedMetricsRequest req = new GetECSServiceRecommendationProjectedMetricsRequest(                new GetECSServiceRecommendationProjectedMetricsRequest(OffsetDateTime.parse("2020-05-28T21:33:10.895Z"), 807319L, "ea", OffsetDateTime.parse("2022-09-20T19:40:48.375Z"), MetricStatisticEnum.MAXIMUM);, GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_ECS_SERVICE_RECOMMENDATION_PROJECTED_METRICS) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            GetECSServiceRecommendationProjectedMetricsResponse res = sdk.sdk.getECSServiceRecommendationProjectedMetrics(req);

            if (res.getECSServiceRecommendationProjectedMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getECSServiceRecommendations

<p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationsRequest;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationsResponse;
import org.openapis.openapi.models.operations.GetECSServiceRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ECSServiceRecommendationFilter;
import org.openapis.openapi.models.shared.ECSServiceRecommendationFilterNameEnum;
import org.openapis.openapi.models.shared.GetECSServiceRecommendationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetECSServiceRecommendationsRequest req = new GetECSServiceRecommendationsRequest(                new GetECSServiceRecommendationsRequest() {{
                                accountIds = new String[]{{
                                    add("pariatur"),
                                }};
                                filters = new org.openapis.openapi.models.shared.ECSServiceRecommendationFilter[]{{
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING_REASON_CODE;
                                        values = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }}),
                                    add(new ECSServiceRecommendationFilter() {{
                                        name = ECSServiceRecommendationFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("cumque"),
                                        }};
                                    }}),
                                }};
                                maxResults = 359978L;
                                nextToken = "hic";
                                serviceArns = new String[]{{
                                    add("nobis"),
                                    add("dolores"),
                                    add("quis"),
                                }};
                            }};, GetECSServiceRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_ECS_SERVICE_RECOMMENDATIONS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetECSServiceRecommendationsResponse res = sdk.sdk.getECSServiceRecommendations(req);

            if (res.getECSServiceRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEffectiveRecommendationPreferences

<p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEffectiveRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.GetEffectiveRecommendationPreferencesResponse;
import org.openapis.openapi.models.operations.GetEffectiveRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEffectiveRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEffectiveRecommendationPreferencesRequest req = new GetEffectiveRecommendationPreferencesRequest(                new GetEffectiveRecommendationPreferencesRequest("minus");, GetEffectiveRecommendationPreferencesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_EFFECTIVE_RECOMMENDATION_PREFERENCES) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            GetEffectiveRecommendationPreferencesResponse res = sdk.sdk.getEffectiveRecommendationPreferences(req);

            if (res.getEffectiveRecommendationPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnrollmentStatus

<p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnrollmentStatusRequest;
import org.openapis.openapi.models.operations.GetEnrollmentStatusResponse;
import org.openapis.openapi.models.operations.GetEnrollmentStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnrollmentStatusRequest req = new GetEnrollmentStatusRequest(                new java.util.HashMap<String, Object>() {{
                                put("voluptatem", "porro");
                                put("consequuntur", "blanditiis");
                                put("error", "eaque");
                            }}, GetEnrollmentStatusXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_ENROLLMENT_STATUS) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            GetEnrollmentStatusResponse res = sdk.sdk.getEnrollmentStatus(req);

            if (res.getEnrollmentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnrollmentStatusesForOrganization

<p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnrollmentStatusesForOrganizationRequest;
import org.openapis.openapi.models.operations.GetEnrollmentStatusesForOrganizationResponse;
import org.openapis.openapi.models.operations.GetEnrollmentStatusesForOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnrollmentFilter;
import org.openapis.openapi.models.shared.EnrollmentFilterNameEnum;
import org.openapis.openapi.models.shared.GetEnrollmentStatusesForOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnrollmentStatusesForOrganizationRequest req = new GetEnrollmentStatusesForOrganizationRequest(                new GetEnrollmentStatusesForOrganizationRequest() {{
                                filters = new org.openapis.openapi.models.shared.EnrollmentFilter[]{{
                                    add(new EnrollmentFilter() {{
                                        name = EnrollmentFilterNameEnum.STATUS;
                                        values = new String[]{{
                                            add("provident"),
                                            add("nobis"),
                                            add("libero"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new EnrollmentFilter() {{
                                        name = EnrollmentFilterNameEnum.STATUS;
                                        values = new String[]{{
                                            add("quos"),
                                            add("aliquid"),
                                        }};
                                    }}),
                                    add(new EnrollmentFilter() {{
                                        name = EnrollmentFilterNameEnum.STATUS;
                                        values = new String[]{{
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                                maxResults = 222443L;
                                nextToken = "qui";
                            }};, GetEnrollmentStatusesForOrganizationXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
                maxResults = "amet";
                nextToken = "dolorum";
            }};            

            GetEnrollmentStatusesForOrganizationResponse res = sdk.sdk.getEnrollmentStatusesForOrganization(req);

            if (res.getEnrollmentStatusesForOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLambdaFunctionRecommendations

<p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLambdaFunctionRecommendationsRequest;
import org.openapis.openapi.models.operations.GetLambdaFunctionRecommendationsResponse;
import org.openapis.openapi.models.operations.GetLambdaFunctionRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLambdaFunctionRecommendationsRequest;
import org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilter;
import org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLambdaFunctionRecommendationsRequest req = new GetLambdaFunctionRecommendationsRequest(                new GetLambdaFunctionRecommendationsRequest() {{
                                accountIds = new String[]{{
                                    add("ipsa"),
                                }};
                                filters = new org.openapis.openapi.models.shared.LambdaFunctionRecommendationFilter[]{{
                                    add(new LambdaFunctionRecommendationFilter() {{
                                        name = LambdaFunctionRecommendationFilterNameEnum.FINDING;
                                        values = new String[]{{
                                            add("quaerat"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                }};
                                functionArns = new String[]{{
                                    add("voluptatibus"),
                                    add("voluptas"),
                                    add("natus"),
                                }};
                                maxResults = 179603L;
                                nextToken = "atque";
                            }};, GetLambdaFunctionRecommendationsXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_LAMBDA_FUNCTION_RECOMMENDATIONS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
                maxResults = "dolorum";
                nextToken = "deleniti";
            }};            

            GetLambdaFunctionRecommendationsResponse res = sdk.sdk.getLambdaFunctionRecommendations(req);

            if (res.getLambdaFunctionRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendationPreferences

<p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.GetRecommendationPreferencesResponse;
import org.openapis.openapi.models.operations.GetRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.ScopeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationPreferencesRequest req = new GetRecommendationPreferencesRequest(                new GetRecommendationPreferencesRequest(ResourceTypeEnum.ECS_SERVICE) {{
                                maxResults = 714697L;
                                nextToken = "asperiores";
                                scope = new Scope() {{
                                    name = ScopeNameEnum.ACCOUNT_ID;
                                    value = "ipsum";
                                }};;
                            }};, GetRecommendationPreferencesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_RECOMMENDATION_PREFERENCES) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
                maxResults = "optio";
                nextToken = "accusamus";
            }};            

            GetRecommendationPreferencesResponse res = sdk.sdk.getRecommendationPreferences(req);

            if (res.getRecommendationPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendationSummaries

<p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationSummariesRequest;
import org.openapis.openapi.models.operations.GetRecommendationSummariesResponse;
import org.openapis.openapi.models.operations.GetRecommendationSummariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRecommendationSummariesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationSummariesRequest req = new GetRecommendationSummariesRequest(                new GetRecommendationSummariesRequest() {{
                                accountIds = new String[]{{
                                    add("suscipit"),
                                    add("deserunt"),
                                    add("provident"),
                                    add("minima"),
                                }};
                                maxResults = 831049L;
                                nextToken = "totam";
                            }};, GetRecommendationSummariesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_GET_RECOMMENDATION_SUMMARIES) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
                maxResults = "officiis";
                nextToken = "qui";
            }};            

            GetRecommendationSummariesResponse res = sdk.sdk.getRecommendationSummaries(req);

            if (res.getRecommendationSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRecommendationPreferences

<p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.PutRecommendationPreferencesResponse;
import org.openapis.openapi.models.operations.PutRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnhancedInfrastructureMetricsEnum;
import org.openapis.openapi.models.shared.ExternalMetricsPreference;
import org.openapis.openapi.models.shared.ExternalMetricsSourceEnum;
import org.openapis.openapi.models.shared.InferredWorkloadTypesPreferenceEnum;
import org.openapis.openapi.models.shared.PutRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.ScopeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRecommendationPreferencesRequest req = new PutRecommendationPreferencesRequest(                new PutRecommendationPreferencesRequest(ResourceTypeEnum.ECS_SERVICE) {{
                                enhancedInfrastructureMetrics = EnhancedInfrastructureMetricsEnum.ACTIVE;
                                externalMetricsPreference = new ExternalMetricsPreference() {{
                                    source = ExternalMetricsSourceEnum.NEW_RELIC;
                                }};;
                                inferredWorkloadTypes = InferredWorkloadTypesPreferenceEnum.ACTIVE;
                                scope = new Scope() {{
                                    name = ScopeNameEnum.ORGANIZATION;
                                    value = "quisquam";
                                }};;
                            }};, PutRecommendationPreferencesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_PUT_RECOMMENDATION_PREFERENCES) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            PutRecommendationPreferencesResponse res = sdk.sdk.putRecommendationPreferences(req);

            if (res.putRecommendationPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnrollmentStatus

<p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnrollmentStatusRequest;
import org.openapis.openapi.models.operations.UpdateEnrollmentStatusResponse;
import org.openapis.openapi.models.operations.UpdateEnrollmentStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;
import org.openapis.openapi.models.shared.UpdateEnrollmentStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnrollmentStatusRequest req = new UpdateEnrollmentStatusRequest(                new UpdateEnrollmentStatusRequest(StatusEnum.PENDING) {{
                                includeMemberAccounts = false;
                            }};, UpdateEnrollmentStatusXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_UPDATE_ENROLLMENT_STATUS) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            UpdateEnrollmentStatusResponse res = sdk.sdk.updateEnrollmentStatus(req);

            if (res.updateEnrollmentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
