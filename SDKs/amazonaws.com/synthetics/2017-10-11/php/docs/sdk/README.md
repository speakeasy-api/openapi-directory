# SDK

## Overview

<fullname>Amazon CloudWatch Synthetics</fullname> <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage <i>canaries</i>, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor the Health of Your Applications</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Before you create and manage canaries, be aware of the security considerations. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/synthetics/>
### Available Operations

* [associateResource](#associateresource) - <p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>
* [createCanary](#createcanary) - <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
* [createGroup](#creategroup) - <p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>
* [deleteCanary](#deletecanary) - <p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>
* [deleteGroup](#deletegroup) - <p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>
* [describeCanaries](#describecanaries) - <p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
* [describeCanariesLastRun](#describecanarieslastrun) - <p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
* [describeRuntimeVersions](#describeruntimeversions) - Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
* [disassociateResource](#disassociateresource) - Removes a canary from a group. You must run this operation in the Region where the canary exists.
* [getCanary](#getcanary) - Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
* [getCanaryRuns](#getcanaryruns) - Retrieves a list of runs for a specified canary.
* [getGroup](#getgroup) - Returns information about one group. Groups are a global resource, so you can use this operation from any Region.
* [listAssociatedGroups](#listassociatedgroups) - Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.
* [listGroupResources](#listgroupresources) - This operation returns a list of the ARNs of the canaries that are associated with the specified group.
* [listGroups](#listgroups) - Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a canary or group.
* [startCanary](#startcanary) - Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.
* [stopCanary](#stopcanary) - <p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateCanary](#updatecanary) - <p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

## associateResource

<p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResourceRequest();
    $request->requestBody = new AssociateResourceRequestBody();
    $request->requestBody->resourceArn = 'error';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->groupIdentifier = 'tempora';

    $response = $sdk->sdk->associateResource($request);

    if ($response->associateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCanary

<p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBodyArtifactConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBodyCode;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBodyRunConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBodySchedule;
use \OpenAPI\OpenAPI\Models\Operations\CreateCanaryRequestBodyVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCanaryRequest();
    $request->requestBody = new CreateCanaryRequestBody();
    $request->requestBody->artifactConfig = new CreateCanaryRequestBodyArtifactConfig();
    $request->requestBody->artifactConfig->s3Encryption = new S3EncryptionConfig();
    $request->requestBody->artifactConfig->s3Encryption->encryptionMode = EncryptionModeEnum::SSE_S3;
    $request->requestBody->artifactConfig->s3Encryption->kmsKeyArn = 'molestiae';
    $request->requestBody->artifactS3Location = 'minus';
    $request->requestBody->code = new CreateCanaryRequestBodyCode();
    $request->requestBody->code->handler = 'placeat';
    $request->requestBody->code->s3Bucket = 'voluptatum';
    $request->requestBody->code->s3Key = 'iusto';
    $request->requestBody->code->s3Version = 'excepturi';
    $request->requestBody->code->zipFile = 'nisi';
    $request->requestBody->executionRoleArn = 'recusandae';
    $request->requestBody->failureRetentionPeriodInDays = 836079;
    $request->requestBody->name = 'Erica Bogisich III';
    $request->requestBody->runConfig = new CreateCanaryRequestBodyRunConfig();
    $request->requestBody->runConfig->activeTracing = false;
    $request->requestBody->runConfig->environmentVariables = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->runConfig->memoryInMB = 800911;
    $request->requestBody->runConfig->timeoutInSeconds = 461479;
    $request->requestBody->runtimeVersion = 'totam';
    $request->requestBody->schedule = new CreateCanaryRequestBodySchedule();
    $request->requestBody->schedule->durationInSeconds = 780529;
    $request->requestBody->schedule->expression = 'dolorum';
    $request->requestBody->successRetentionPeriodInDays = 118274;
    $request->requestBody->tags = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->requestBody->vpcConfig = new CreateCanaryRequestBodyVpcConfig();
    $request->requestBody->vpcConfig->securityGroupIds = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->requestBody->vpcConfig->subnetIds = [
        'qui',
        'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createCanary($request);

    if ($response->createCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

<p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->requestBody = new CreateGroupRequestBody();
    $request->requestBody->name = 'Louis Moore';
    $request->requestBody->tags = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCanary

<p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCanaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCanaryRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->deleteLambda = false;
    $request->name = 'Della Halvorson';

    $response = $sdk->sdk->deleteCanary($request);

    if ($response->deleteCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

<p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->groupIdentifier = 'architecto';

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->deleteGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCanaries

<p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCanariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCanariesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCanariesRequest();
    $request->maxResults = 'mollitia';
    $request->nextToken = 'dolorem';
    $request->requestBody = new DescribeCanariesRequestBody();
    $request->requestBody->maxResults = 635059;
    $request->requestBody->names = [
        'repellat',
    ];
    $request->requestBody->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->describeCanaries($request);

    if ($response->describeCanariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCanariesLastRun

<p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCanariesLastRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCanariesLastRunRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCanariesLastRunRequest();
    $request->maxResults = 'quia';
    $request->nextToken = 'quis';
    $request->requestBody = new DescribeCanariesLastRunRequestBody();
    $request->requestBody->maxResults = 110375;
    $request->requestBody->names = [
        'animi',
        'enim',
        'odit',
    ];
    $request->requestBody->nextToken = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->describeCanariesLastRun($request);

    if ($response->describeCanariesLastRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRuntimeVersions

Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuntimeVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuntimeVersionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuntimeVersionsRequest();
    $request->maxResults = 'error';
    $request->nextToken = 'temporibus';
    $request->requestBody = new DescribeRuntimeVersionsRequestBody();
    $request->requestBody->maxResults = 673660;
    $request->requestBody->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->describeRuntimeVersions($request);

    if ($response->describeRuntimeVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResource

Removes a canary from a group. You must run this operation in the Region where the canary exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResourceRequest();
    $request->requestBody = new DisassociateResourceRequestBody();
    $request->requestBody->resourceArn = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->groupIdentifier = 'dicta';

    $response = $sdk->sdk->disassociateResource($request);

    if ($response->disassociateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCanary

Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCanaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCanaryRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->name = 'Elvira Bergnaum';

    $response = $sdk->sdk->getCanary($request);

    if ($response->getCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCanaryRuns

Retrieves a list of runs for a specified canary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCanaryRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCanaryRunsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCanaryRunsRequest();
    $request->maxResults = 'molestias';
    $request->nextToken = 'excepturi';
    $request->requestBody = new GetCanaryRunsRequestBody();
    $request->requestBody->maxResults = 865103;
    $request->requestBody->nextToken = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->name = 'Miss Randall Hamill';

    $response = $sdk->sdk->getCanaryRuns($request);

    if ($response->getCanaryRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroup

Returns information about one group. Groups are a global resource, so you can use this operation from any Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->groupIdentifier = 'aliquid';

    $response = $sdk->sdk->getGroup($request);

    if ($response->getGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedGroups

Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedGroupsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedGroupsRequest();
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'quos';
    $request->requestBody = new ListAssociatedGroupsRequestBody();
    $request->requestBody->maxResults = 20107;
    $request->requestBody->nextToken = 'magni';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->resourceArn = 'facilis';

    $response = $sdk->sdk->listAssociatedGroups($request);

    if ($response->listAssociatedGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupResources

This operation returns a list of the ARNs of the canaries that are associated with the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupResourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupResourcesRequest();
    $request->maxResults = 'tempore';
    $request->nextToken = 'labore';
    $request->requestBody = new ListGroupResourcesRequestBody();
    $request->requestBody->maxResults = 962189;
    $request->requestBody->nextToken = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->groupIdentifier = 'officia';

    $response = $sdk->sdk->listGroupResources($request);

    if ($response->listGroupResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';
    $request->requestBody = new ListGroupsRequestBody();
    $request->requestBody->maxResults = 952749;
    $request->requestBody->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->listGroups($request);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with a canary or group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->resourceArn = 'occaecati';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCanary

Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCanaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCanaryRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->name = 'Jaime Will';

    $response = $sdk->sdk->startCanary($request);

    if ($response->startCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCanary

<p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCanaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCanaryRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->name = 'Verna Olson';

    $response = $sdk->sdk->stopCanary($request);

    if ($response->stopCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';
    $request->resourceArn = 'quos';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->resourceArn = 'dolor';
    $request->tagKeys = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCanary

<p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodyArtifactConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodyCode;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodyRunConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodySchedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodyVisualReference;
use \OpenAPI\OpenAPI\Models\Shared\BaseScreenshot;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCanaryRequestBodyVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCanaryRequest();
    $request->requestBody = new UpdateCanaryRequestBody();
    $request->requestBody->artifactConfig = new UpdateCanaryRequestBodyArtifactConfig();
    $request->requestBody->artifactConfig->s3Encryption = new S3EncryptionConfig();
    $request->requestBody->artifactConfig->s3Encryption->encryptionMode = EncryptionModeEnum::SSE_KMS;
    $request->requestBody->artifactConfig->s3Encryption->kmsKeyArn = 'debitis';
    $request->requestBody->artifactS3Location = 'eius';
    $request->requestBody->code = new UpdateCanaryRequestBodyCode();
    $request->requestBody->code->handler = 'maxime';
    $request->requestBody->code->s3Bucket = 'deleniti';
    $request->requestBody->code->s3Key = 'facilis';
    $request->requestBody->code->s3Version = 'in';
    $request->requestBody->code->zipFile = 'architecto';
    $request->requestBody->executionRoleArn = 'architecto';
    $request->requestBody->failureRetentionPeriodInDays = 919483;
    $request->requestBody->runConfig = new UpdateCanaryRequestBodyRunConfig();
    $request->requestBody->runConfig->activeTracing = false;
    $request->requestBody->runConfig->environmentVariables = [
        'expedita' => 'nihil',
        'repellat' => 'quibusdam',
    ];
    $request->requestBody->runConfig->memoryInMB = 149448;
    $request->requestBody->runConfig->timeoutInSeconds = 904648;
    $request->requestBody->runtimeVersion = 'pariatur';
    $request->requestBody->schedule = new UpdateCanaryRequestBodySchedule();
    $request->requestBody->schedule->durationInSeconds = 37559;
    $request->requestBody->schedule->expression = 'consequuntur';
    $request->requestBody->successRetentionPeriodInDays = 508315;
    $request->requestBody->visualReference = new UpdateCanaryRequestBodyVisualReference();
    $request->requestBody->visualReference->baseCanaryRunId = 'natus';
    $request->requestBody->visualReference->baseScreenshots = [
        new BaseScreenshot(),
    ];
    $request->requestBody->vpcConfig = new UpdateCanaryRequestBodyVpcConfig();
    $request->requestBody->vpcConfig->securityGroupIds = [
        'quo',
    ];
    $request->requestBody->vpcConfig->subnetIds = [
        'pariatur',
        'maxime',
        'ea',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->name = 'Dr. Stacey Reichert';

    $response = $sdk->sdk->updateCanary($request);

    if ($response->updateCanaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
