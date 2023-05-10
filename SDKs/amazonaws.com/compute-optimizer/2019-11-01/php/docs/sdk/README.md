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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferenceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scope;
use \OpenAPI\OpenAPI\Models\Shared\ScopeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationPreferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecommendationPreferencesRequest();
    $request->deleteRecommendationPreferencesRequest = new DeleteRecommendationPreferencesRequest();
    $request->deleteRecommendationPreferencesRequest->recommendationPreferenceNames = [
        RecommendationPreferenceNameEnum::ENHANCED_INFRASTRUCTURE_METRICS,
        RecommendationPreferenceNameEnum::EXTERNAL_METRICS_PREFERENCE,
        RecommendationPreferenceNameEnum::ENHANCED_INFRASTRUCTURE_METRICS,
        RecommendationPreferenceNameEnum::INFERRED_WORKLOAD_TYPES,
    ];
    $request->deleteRecommendationPreferencesRequest->resourceType = ResourceTypeEnum::EBS_VOLUME;
    $request->deleteRecommendationPreferencesRequest->scope = new Scope();
    $request->deleteRecommendationPreferencesRequest->scope->name = ScopeNameEnum::RESOURCE_ARN;
    $request->deleteRecommendationPreferencesRequest->scope->value = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = DeleteRecommendationPreferencesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_DELETE_RECOMMENDATION_PREFERENCES;

    $response = $sdk->sdk->deleteRecommendationPreferences($request);

    if ($response->deleteRecommendationPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecommendationExportJobs

<p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecommendationExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecommendationExportJobsRequest();
    $request->describeRecommendationExportJobsRequest = new DescribeRecommendationExportJobsRequest();
    $request->describeRecommendationExportJobsRequest->filters = [
        new JobFilter(),
        new JobFilter(),
    ];
    $request->describeRecommendationExportJobsRequest->jobIds = [
        'deserunt',
    ];
    $request->describeRecommendationExportJobsRequest->maxResults = 20218;
    $request->describeRecommendationExportJobsRequest->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeRecommendationExportJobsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_DESCRIBE_RECOMMENDATION_EXPORT_JOBS;
    $request->maxResults = 'molestiae';
    $request->nextToken = 'quod';

    $response = $sdk->sdk->describeRecommendationExportJobs($request);

    if ($response->describeRecommendationExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAutoScalingGroupRecommendations

<p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportAutoScalingGroupRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportAutoScalingGroupRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportableAutoScalingGroupFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\CpuVendorArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\ExportAutoScalingGroupRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAutoScalingGroupRecommendationsRequest();
    $request->exportAutoScalingGroupRecommendationsRequest = new ExportAutoScalingGroupRecommendationsRequest();
    $request->exportAutoScalingGroupRecommendationsRequest->accountIds = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->exportAutoScalingGroupRecommendationsRequest->fieldsToExport = [
        ExportableAutoScalingGroupFieldEnum::RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE,
    ];
    $request->exportAutoScalingGroupRecommendationsRequest->fileFormat = FileFormatEnum::CSV;
    $request->exportAutoScalingGroupRecommendationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->exportAutoScalingGroupRecommendationsRequest->includeMemberAccounts = false;
    $request->exportAutoScalingGroupRecommendationsRequest->recommendationPreferences = new RecommendationPreferences();
    $request->exportAutoScalingGroupRecommendationsRequest->recommendationPreferences->cpuVendorArchitectures = [
        CpuVendorArchitectureEnum::AWS_ARM64,
        CpuVendorArchitectureEnum::CURRENT,
        CpuVendorArchitectureEnum::CURRENT,
    ];
    $request->exportAutoScalingGroupRecommendationsRequest->s3DestinationConfig = new S3DestinationConfig();
    $request->exportAutoScalingGroupRecommendationsRequest->s3DestinationConfig->bucket = 'optio';
    $request->exportAutoScalingGroupRecommendationsRequest->s3DestinationConfig->keyPrefix = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ExportAutoScalingGroupRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_EXPORT_AUTO_SCALING_GROUP_RECOMMENDATIONS;

    $response = $sdk->sdk->exportAutoScalingGroupRecommendations($request);

    if ($response->exportAutoScalingGroupRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportEBSVolumeRecommendations

<p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportEBSVolumeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportEBSVolumeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportableVolumeFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EBSFilter;
use \OpenAPI\OpenAPI\Models\Shared\EBSFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\ExportEBSVolumeRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportEBSVolumeRecommendationsRequest();
    $request->exportEBSVolumeRecommendationsRequest = new ExportEBSVolumeRecommendationsRequest();
    $request->exportEBSVolumeRecommendationsRequest->accountIds = [
        'ipsum',
        'excepturi',
    ];
    $request->exportEBSVolumeRecommendationsRequest->fieldsToExport = [
        ExportableVolumeFieldEnum::ACCOUNT_ID,
    ];
    $request->exportEBSVolumeRecommendationsRequest->fileFormat = FileFormatEnum::CSV;
    $request->exportEBSVolumeRecommendationsRequest->filters = [
        new EBSFilter(),
        new EBSFilter(),
    ];
    $request->exportEBSVolumeRecommendationsRequest->includeMemberAccounts = false;
    $request->exportEBSVolumeRecommendationsRequest->s3DestinationConfig = new S3DestinationConfig();
    $request->exportEBSVolumeRecommendationsRequest->s3DestinationConfig->bucket = 'natus';
    $request->exportEBSVolumeRecommendationsRequest->s3DestinationConfig->keyPrefix = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ExportEBSVolumeRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_EXPORT_EBS_VOLUME_RECOMMENDATIONS;

    $response = $sdk->sdk->exportEBSVolumeRecommendations($request);

    if ($response->exportEBSVolumeRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportEc2InstanceRecommendations

<p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportEc2InstanceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportEc2InstanceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportableInstanceFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\CpuVendorArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\ExportEc2InstanceRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportEc2InstanceRecommendationsRequest();
    $request->exportEc2InstanceRecommendationsRequest = new ExportEc2InstanceRecommendationsRequest();
    $request->exportEc2InstanceRecommendationsRequest->accountIds = [
        'corporis',
        'iste',
    ];
    $request->exportEc2InstanceRecommendationsRequest->fieldsToExport = [
        ExportableInstanceFieldEnum::EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS,
        ExportableInstanceFieldEnum::RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE,
    ];
    $request->exportEc2InstanceRecommendationsRequest->fileFormat = FileFormatEnum::CSV;
    $request->exportEc2InstanceRecommendationsRequest->filters = [
        new Filter(),
    ];
    $request->exportEc2InstanceRecommendationsRequest->includeMemberAccounts = false;
    $request->exportEc2InstanceRecommendationsRequest->recommendationPreferences = new RecommendationPreferences();
    $request->exportEc2InstanceRecommendationsRequest->recommendationPreferences->cpuVendorArchitectures = [
        CpuVendorArchitectureEnum::CURRENT,
    ];
    $request->exportEc2InstanceRecommendationsRequest->s3DestinationConfig = new S3DestinationConfig();
    $request->exportEc2InstanceRecommendationsRequest->s3DestinationConfig->bucket = 'est';
    $request->exportEc2InstanceRecommendationsRequest->s3DestinationConfig->keyPrefix = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ExportEc2InstanceRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_EXPORT_EC2_INSTANCE_RECOMMENDATIONS;

    $response = $sdk->sdk->exportEc2InstanceRecommendations($request);

    if ($response->exportEc2InstanceRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportECSServiceRecommendations

<p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportECSServiceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportECSServiceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportableECSServiceFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ECSServiceRecommendationFilter;
use \OpenAPI\OpenAPI\Models\Shared\ECSServiceRecommendationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\ExportECSServiceRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportECSServiceRecommendationsRequest();
    $request->exportECSServiceRecommendationsRequest = new ExportECSServiceRecommendationsRequest();
    $request->exportECSServiceRecommendationsRequest->accountIds = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->exportECSServiceRecommendationsRequest->fieldsToExport = [
        ExportableECSServiceFieldEnum::CURRENT_SERVICE_CONTAINER_CONFIGURATIONS,
    ];
    $request->exportECSServiceRecommendationsRequest->fileFormat = FileFormatEnum::CSV;
    $request->exportECSServiceRecommendationsRequest->filters = [
        new ECSServiceRecommendationFilter(),
        new ECSServiceRecommendationFilter(),
        new ECSServiceRecommendationFilter(),
    ];
    $request->exportECSServiceRecommendationsRequest->includeMemberAccounts = false;
    $request->exportECSServiceRecommendationsRequest->s3DestinationConfig = new S3DestinationConfig();
    $request->exportECSServiceRecommendationsRequest->s3DestinationConfig->bucket = 'doloribus';
    $request->exportECSServiceRecommendationsRequest->s3DestinationConfig->keyPrefix = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = ExportECSServiceRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_EXPORT_ECS_SERVICE_RECOMMENDATIONS;

    $response = $sdk->sdk->exportECSServiceRecommendations($request);

    if ($response->exportECSServiceRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportLambdaFunctionRecommendations

<p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportLambdaFunctionRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportLambdaFunctionRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportableLambdaFunctionFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionRecommendationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionRecommendationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\ExportLambdaFunctionRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportLambdaFunctionRecommendationsRequest();
    $request->exportLambdaFunctionRecommendationsRequest = new ExportLambdaFunctionRecommendationsRequest();
    $request->exportLambdaFunctionRecommendationsRequest->accountIds = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->exportLambdaFunctionRecommendationsRequest->fieldsToExport = [
        ExportableLambdaFunctionFieldEnum::UTILIZATION_METRICS_DURATION_MAXIMUM,
        ExportableLambdaFunctionFieldEnum::RECOMMENDATION_OPTIONS_COST_LOW,
    ];
    $request->exportLambdaFunctionRecommendationsRequest->fileFormat = FileFormatEnum::CSV;
    $request->exportLambdaFunctionRecommendationsRequest->filters = [
        new LambdaFunctionRecommendationFilter(),
    ];
    $request->exportLambdaFunctionRecommendationsRequest->includeMemberAccounts = false;
    $request->exportLambdaFunctionRecommendationsRequest->s3DestinationConfig = new S3DestinationConfig();
    $request->exportLambdaFunctionRecommendationsRequest->s3DestinationConfig->bucket = 'quis';
    $request->exportLambdaFunctionRecommendationsRequest->s3DestinationConfig->keyPrefix = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = ExportLambdaFunctionRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_EXPORT_LAMBDA_FUNCTION_RECOMMENDATIONS;

    $response = $sdk->sdk->exportLambdaFunctionRecommendations($request);

    if ($response->exportLambdaFunctionRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutoScalingGroupRecommendations

<p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoScalingGroupRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAutoScalingGroupRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\CpuVendorArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoScalingGroupRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutoScalingGroupRecommendationsRequest();
    $request->getAutoScalingGroupRecommendationsRequest = new GetAutoScalingGroupRecommendationsRequest();
    $request->getAutoScalingGroupRecommendationsRequest->accountIds = [
        'id',
        'possimus',
    ];
    $request->getAutoScalingGroupRecommendationsRequest->autoScalingGroupArns = [
        'quasi',
    ];
    $request->getAutoScalingGroupRecommendationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->getAutoScalingGroupRecommendationsRequest->maxResults = 837945;
    $request->getAutoScalingGroupRecommendationsRequest->nextToken = 'laborum';
    $request->getAutoScalingGroupRecommendationsRequest->recommendationPreferences = new RecommendationPreferences();
    $request->getAutoScalingGroupRecommendationsRequest->recommendationPreferences->cpuVendorArchitectures = [
        CpuVendorArchitectureEnum::CURRENT,
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = GetAutoScalingGroupRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_AUTO_SCALING_GROUP_RECOMMENDATIONS;

    $response = $sdk->sdk->getAutoScalingGroupRecommendations($request);

    if ($response->getAutoScalingGroupRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEBSVolumeRecommendations

<p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEBSVolumeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEBSVolumeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EBSFilter;
use \OpenAPI\OpenAPI\Models\Shared\EBSFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEBSVolumeRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEBSVolumeRecommendationsRequest();
    $request->getEBSVolumeRecommendationsRequest = new GetEBSVolumeRecommendationsRequest();
    $request->getEBSVolumeRecommendationsRequest->accountIds = [
        'cum',
        'perferendis',
    ];
    $request->getEBSVolumeRecommendationsRequest->filters = [
        new EBSFilter(),
    ];
    $request->getEBSVolumeRecommendationsRequest->maxResults = 441711;
    $request->getEBSVolumeRecommendationsRequest->nextToken = 'ut';
    $request->getEBSVolumeRecommendationsRequest->volumeArns = [
        'dicta',
        'corporis',
        'dolore',
        'iusto',
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = GetEBSVolumeRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_EBS_VOLUME_RECOMMENDATIONS;

    $response = $sdk->sdk->getEBSVolumeRecommendations($request);

    if ($response->getEBSVolumeRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEc2InstanceRecommendations

<p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEc2InstanceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEc2InstanceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\CpuVendorArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEc2InstanceRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEc2InstanceRecommendationsRequest();
    $request->getEc2InstanceRecommendationsRequest = new GetEc2InstanceRecommendationsRequest();
    $request->getEc2InstanceRecommendationsRequest->accountIds = [
        'quidem',
    ];
    $request->getEc2InstanceRecommendationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->getEc2InstanceRecommendationsRequest->instanceArns = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->getEc2InstanceRecommendationsRequest->maxResults = 523248;
    $request->getEc2InstanceRecommendationsRequest->nextToken = 'voluptates';
    $request->getEc2InstanceRecommendationsRequest->recommendationPreferences = new RecommendationPreferences();
    $request->getEc2InstanceRecommendationsRequest->recommendationPreferences->cpuVendorArchitectures = [
        CpuVendorArchitectureEnum::CURRENT,
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = GetEc2InstanceRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_EC2_INSTANCE_RECOMMENDATIONS;

    $response = $sdk->sdk->getEc2InstanceRecommendations($request);

    if ($response->getEc2InstanceRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEc2RecommendationProjectedMetrics

<p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEc2RecommendationProjectedMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEc2RecommendationProjectedMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\CpuVendorArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEc2RecommendationProjectedMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEc2RecommendationProjectedMetricsRequest();
    $request->getEc2RecommendationProjectedMetricsRequest = new GetEc2RecommendationProjectedMetricsRequest();
    $request->getEc2RecommendationProjectedMetricsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T16:21:07.003Z');
    $request->getEc2RecommendationProjectedMetricsRequest->instanceArn = 'deserunt';
    $request->getEc2RecommendationProjectedMetricsRequest->period = 716327;
    $request->getEc2RecommendationProjectedMetricsRequest->recommendationPreferences = new RecommendationPreferences();
    $request->getEc2RecommendationProjectedMetricsRequest->recommendationPreferences->cpuVendorArchitectures = [
        CpuVendorArchitectureEnum::AWS_ARM64,
        CpuVendorArchitectureEnum::AWS_ARM64,
        CpuVendorArchitectureEnum::AWS_ARM64,
        CpuVendorArchitectureEnum::AWS_ARM64,
    ];
    $request->getEc2RecommendationProjectedMetricsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T10:34:02.904Z');
    $request->getEc2RecommendationProjectedMetricsRequest->stat = MetricStatisticEnum::MAXIMUM;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetEc2RecommendationProjectedMetricsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_EC2_RECOMMENDATION_PROJECTED_METRICS;

    $response = $sdk->sdk->getEc2RecommendationProjectedMetrics($request);

    if ($response->getEc2RecommendationProjectedMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getECSServiceRecommendationProjectedMetrics

 Returns the projected metrics of Amazon ECS service recommendations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetECSServiceRecommendationProjectedMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetECSServiceRecommendationProjectedMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetECSServiceRecommendationProjectedMetricsRequest();
    $request->getECSServiceRecommendationProjectedMetricsRequest = new GetECSServiceRecommendationProjectedMetricsRequest();
    $request->getECSServiceRecommendationProjectedMetricsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T03:15:40.816Z');
    $request->getECSServiceRecommendationProjectedMetricsRequest->period = 735194;
    $request->getECSServiceRecommendationProjectedMetricsRequest->serviceArn = 'labore';
    $request->getECSServiceRecommendationProjectedMetricsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T13:11:22.288Z');
    $request->getECSServiceRecommendationProjectedMetricsRequest->stat = MetricStatisticEnum::MAXIMUM;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_ECS_SERVICE_RECOMMENDATION_PROJECTED_METRICS;

    $response = $sdk->sdk->getECSServiceRecommendationProjectedMetrics($request);

    if ($response->getECSServiceRecommendationProjectedMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getECSServiceRecommendations

<p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetECSServiceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetECSServiceRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ECSServiceRecommendationFilter;
use \OpenAPI\OpenAPI\Models\Shared\ECSServiceRecommendationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetECSServiceRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetECSServiceRecommendationsRequest();
    $request->getECSServiceRecommendationsRequest = new GetECSServiceRecommendationsRequest();
    $request->getECSServiceRecommendationsRequest->accountIds = [
        'debitis',
    ];
    $request->getECSServiceRecommendationsRequest->filters = [
        new ECSServiceRecommendationFilter(),
        new ECSServiceRecommendationFilter(),
        new ECSServiceRecommendationFilter(),
        new ECSServiceRecommendationFilter(),
    ];
    $request->getECSServiceRecommendationsRequest->maxResults = 680056;
    $request->getECSServiceRecommendationsRequest->nextToken = 'in';
    $request->getECSServiceRecommendationsRequest->serviceArns = [
        'illum',
        'maiores',
    ];
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetECSServiceRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_ECS_SERVICE_RECOMMENDATIONS;

    $response = $sdk->sdk->getECSServiceRecommendations($request);

    if ($response->getECSServiceRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEffectiveRecommendationPreferences

<p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectiveRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEffectiveRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectiveRecommendationPreferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEffectiveRecommendationPreferencesRequest();
    $request->getEffectiveRecommendationPreferencesRequest = new GetEffectiveRecommendationPreferencesRequest();
    $request->getEffectiveRecommendationPreferencesRequest->resourceArn = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetEffectiveRecommendationPreferencesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_EFFECTIVE_RECOMMENDATION_PREFERENCES;

    $response = $sdk->sdk->getEffectiveRecommendationPreferences($request);

    if ($response->getEffectiveRecommendationPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnrollmentStatus

<p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnrollmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEnrollmentStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnrollmentStatusRequest();
    $request->requestBody = [
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetEnrollmentStatusXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_ENROLLMENT_STATUS;

    $response = $sdk->sdk->getEnrollmentStatus($request);

    if ($response->getEnrollmentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnrollmentStatusesForOrganization

<p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnrollmentStatusesForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEnrollmentStatusesForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentFilter;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEnrollmentStatusesForOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnrollmentStatusesForOrganizationRequest();
    $request->getEnrollmentStatusesForOrganizationRequest = new GetEnrollmentStatusesForOrganizationRequest();
    $request->getEnrollmentStatusesForOrganizationRequest->filters = [
        new EnrollmentFilter(),
        new EnrollmentFilter(),
    ];
    $request->getEnrollmentStatusesForOrganizationRequest->maxResults = 301575;
    $request->getEnrollmentStatusesForOrganizationRequest->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetEnrollmentStatusesForOrganizationXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION;
    $request->maxResults = 'vero';
    $request->nextToken = 'aspernatur';

    $response = $sdk->sdk->getEnrollmentStatusesForOrganization($request);

    if ($response->getEnrollmentStatusesForOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLambdaFunctionRecommendations

<p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLambdaFunctionRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLambdaFunctionRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionRecommendationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionRecommendationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLambdaFunctionRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLambdaFunctionRecommendationsRequest();
    $request->getLambdaFunctionRecommendationsRequest = new GetLambdaFunctionRecommendationsRequest();
    $request->getLambdaFunctionRecommendationsRequest->accountIds = [
        'magnam',
    ];
    $request->getLambdaFunctionRecommendationsRequest->filters = [
        new LambdaFunctionRecommendationFilter(),
    ];
    $request->getLambdaFunctionRecommendationsRequest->functionArns = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->getLambdaFunctionRecommendationsRequest->maxResults = 574325;
    $request->getLambdaFunctionRecommendationsRequest->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = GetLambdaFunctionRecommendationsXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_LAMBDA_FUNCTION_RECOMMENDATIONS;
    $request->maxResults = 'odit';
    $request->nextToken = 'nemo';

    $response = $sdk->sdk->getLambdaFunctionRecommendations($request);

    if ($response->getLambdaFunctionRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendationPreferences

<p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scope;
use \OpenAPI\OpenAPI\Models\Shared\ScopeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationPreferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationPreferencesRequest();
    $request->getRecommendationPreferencesRequest = new GetRecommendationPreferencesRequest();
    $request->getRecommendationPreferencesRequest->maxResults = 97260;
    $request->getRecommendationPreferencesRequest->nextToken = 'iure';
    $request->getRecommendationPreferencesRequest->resourceType = ResourceTypeEnum::ECS_SERVICE;
    $request->getRecommendationPreferencesRequest->scope = new Scope();
    $request->getRecommendationPreferencesRequest->scope->name = ScopeNameEnum::RESOURCE_ARN;
    $request->getRecommendationPreferencesRequest->scope->value = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = GetRecommendationPreferencesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_RECOMMENDATION_PREFERENCES;
    $request->maxResults = 'ullam';
    $request->nextToken = 'expedita';

    $response = $sdk->sdk->getRecommendationPreferences($request);

    if ($response->getRecommendationPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendationSummaries

<p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRecommendationSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationSummariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationSummariesRequest();
    $request->getRecommendationSummariesRequest = new GetRecommendationSummariesRequest();
    $request->getRecommendationSummariesRequest->accountIds = [
        'repellat',
        'quibusdam',
    ];
    $request->getRecommendationSummariesRequest->maxResults = 149448;
    $request->getRecommendationSummariesRequest->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = GetRecommendationSummariesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_GET_RECOMMENDATION_SUMMARIES;
    $request->maxResults = 'quo';
    $request->nextToken = 'illum';

    $response = $sdk->sdk->getRecommendationSummaries($request);

    if ($response->getRecommendationSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRecommendationPreferences

<p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnhancedInfrastructureMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalMetricsPreference;
use \OpenAPI\OpenAPI\Models\Shared\ExternalMetricsSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\InferredWorkloadTypesPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scope;
use \OpenAPI\OpenAPI\Models\Shared\ScopeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutRecommendationPreferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRecommendationPreferencesRequest();
    $request->putRecommendationPreferencesRequest = new PutRecommendationPreferencesRequest();
    $request->putRecommendationPreferencesRequest->enhancedInfrastructureMetrics = EnhancedInfrastructureMetricsEnum::INACTIVE;
    $request->putRecommendationPreferencesRequest->externalMetricsPreference = new ExternalMetricsPreference();
    $request->putRecommendationPreferencesRequest->externalMetricsPreference->source = ExternalMetricsSourceEnum::INSTANA;
    $request->putRecommendationPreferencesRequest->inferredWorkloadTypes = InferredWorkloadTypesPreferenceEnum::ACTIVE;
    $request->putRecommendationPreferencesRequest->resourceType = ResourceTypeEnum::LAMBDA_FUNCTION;
    $request->putRecommendationPreferencesRequest->scope = new Scope();
    $request->putRecommendationPreferencesRequest->scope->name = ScopeNameEnum::ORGANIZATION;
    $request->putRecommendationPreferencesRequest->scope->value = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = PutRecommendationPreferencesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_PUT_RECOMMENDATION_PREFERENCES;

    $response = $sdk->sdk->putRecommendationPreferences($request);

    if ($response->putRecommendationPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnrollmentStatus

<p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnrollmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnrollmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnrollmentStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnrollmentStatusRequest();
    $request->updateEnrollmentStatusRequest = new UpdateEnrollmentStatusRequest();
    $request->updateEnrollmentStatusRequest->includeMemberAccounts = false;
    $request->updateEnrollmentStatusRequest->status = StatusEnum::PENDING;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = UpdateEnrollmentStatusXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_UPDATE_ENROLLMENT_STATUS;

    $response = $sdk->sdk->updateEnrollmentStatus($request);

    if ($response->updateEnrollmentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
