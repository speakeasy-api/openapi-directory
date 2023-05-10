# SDK

## Overview

<fullname>Resource Groups Tagging API</fullname>

Amazon Web Services documentation
<https://docs.aws.amazon.com/tagging/>
### Available Operations

* [describeReportCreation](#describereportcreation) - <p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* [getComplianceSummary](#getcompliancesummary) - <p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getResources](#getresources) - <p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getTagKeys](#gettagkeys) - <p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getTagValues](#gettagvalues) - <p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [startReportCreation](#startreportcreation) - <p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* [tagResources](#tagresources) - <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>
* [untagResources](#untagresources) - <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>

## describeReportCreation

<p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportCreationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReportCreationRequest();
    $request->requestBody = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeReportCreationXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_DESCRIBE_REPORT_CREATION;

    $response = $sdk->sdk->describeReportCreation($request);

    if ($response->describeReportCreationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceSummary

<p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComplianceSummaryInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupByAttributeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceSummaryRequest();
    $request->getComplianceSummaryInput = new GetComplianceSummaryInput();
    $request->getComplianceSummaryInput->groupBy = [
        GroupByAttributeEnum::REGION,
    ];
    $request->getComplianceSummaryInput->maxResults = 20218;
    $request->getComplianceSummaryInput->paginationToken = 'ipsam';
    $request->getComplianceSummaryInput->regionFilters = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->getComplianceSummaryInput->resourceTypeFilters = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->getComplianceSummaryInput->tagKeyFilters = [
        'totam',
        'porro',
    ];
    $request->getComplianceSummaryInput->targetIdFilters = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->maxResults = 'occaecati';
    $request->paginationToken = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = GetComplianceSummaryXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_GET_COMPLIANCE_SUMMARY;

    $response = $sdk->sdk->getComplianceSummary($request);

    if ($response->getComplianceSummaryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResources

<p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcesInput;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesRequest();
    $request->getResourcesInput = new GetResourcesInput();
    $request->getResourcesInput->excludeCompliantResources = false;
    $request->getResourcesInput->includeComplianceDetails = false;
    $request->getResourcesInput->paginationToken = 'modi';
    $request->getResourcesInput->resourceARNList = [
        'impedit',
    ];
    $request->getResourcesInput->resourceTypeFilters = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->getResourcesInput->resourcesPerPage = 135218;
    $request->getResourcesInput->tagFilters = [
        new TagFilter(),
    ];
    $request->getResourcesInput->tagsPerPage = 324141;
    $request->paginationToken = 'natus';
    $request->resourcesPerPage = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = GetResourcesXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_GET_RESOURCES;

    $response = $sdk->sdk->getResources($request);

    if ($response->getResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagKeys

<p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTagKeysInput;
use \OpenAPI\OpenAPI\Models\Operations\GetTagKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagKeysRequest();
    $request->getTagKeysInput = new GetTagKeysInput();
    $request->getTagKeysInput->paginationToken = 'in';
    $request->paginationToken = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = GetTagKeysXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_GET_TAG_KEYS;

    $response = $sdk->sdk->getTagKeys($request);

    if ($response->getTagKeysOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagValues

<p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTagValuesInput;
use \OpenAPI\OpenAPI\Models\Operations\GetTagValuesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagValuesRequest();
    $request->getTagValuesInput = new GetTagValuesInput();
    $request->getTagValuesInput->key = 'est';
    $request->getTagValuesInput->paginationToken = 'mollitia';
    $request->paginationToken = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = GetTagValuesXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_GET_TAG_VALUES;

    $response = $sdk->sdk->getTagValues($request);

    if ($response->getTagValuesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReportCreation

<p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReportCreationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartReportCreationInput;
use \OpenAPI\OpenAPI\Models\Operations\StartReportCreationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReportCreationRequest();
    $request->startReportCreationInput = new StartReportCreationInput();
    $request->startReportCreationInput->s3Bucket = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = StartReportCreationXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_START_REPORT_CREATION;

    $response = $sdk->sdk->startReportCreation($request);

    if ($response->startReportCreationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResources

<p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\TagResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourcesRequest();
    $request->tagResourcesInput = new TagResourcesInput();
    $request->tagResourcesInput->resourceARNList = [
        'mollitia',
    ];
    $request->tagResourcesInput->tags = [
        'culpa' => 'consequuntur',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = TagResourcesXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_TAG_RESOURCES;

    $response = $sdk->sdk->tagResources($request);

    if ($response->tagResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResources

<p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourcesRequest();
    $request->untagResourcesInput = new UntagResourcesInput();
    $request->untagResourcesInput->resourceARNList = [
        'error',
    ];
    $request->untagResourcesInput->tagKeys = [
        'quis',
    ];
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = UntagResourcesXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_UNTAG_RESOURCES;

    $response = $sdk->sdk->untagResources($request);

    if ($response->untagResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
