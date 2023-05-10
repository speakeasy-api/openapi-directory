# SDK

## Overview

<fullname>Well-Architected Tool</fullname> <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information about the Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/wellarchitected/>
### Available Operations

* [associateLenses](#associatelenses) - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* [createLensShare](#createlensshare) - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [createLensVersion](#createlensversion) - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* [createMilestone](#createmilestone) - Create a milestone for an existing workload.
* [createWorkload](#createworkload) - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>
* [createWorkloadShare](#createworkloadshare) - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* [deleteLens](#deletelens) - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteLensShare](#deletelensshare) - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteWorkload](#deleteworkload) - Delete an existing workload.
* [deleteWorkloadShare](#deleteworkloadshare) - Delete a workload share.
* [disassociateLenses](#disassociatelenses) - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* [exportLens](#exportlens) - <p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [getAnswer](#getanswer) - Get the answer to a specific question in a workload review.
* [getConsolidatedReport](#getconsolidatedreport) - <p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>
* [getLens](#getlens) - Get an existing lens.
* [getLensReview](#getlensreview) - Get lens review.
* [getLensReviewReport](#getlensreviewreport) - Get lens review report.
* [getLensVersionDifference](#getlensversiondifference) - Get lens version differences.
* [getMilestone](#getmilestone) - Get a milestone for an existing workload.
* [getWorkload](#getworkload) - Get an existing workload.
* [importLens](#importlens) - <p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [listAnswers](#listanswers) - List of answers for a particular workload and lens.
* [listCheckDetails](#listcheckdetails) - List of Trusted Advisor check details by account related to the workload.
* [listCheckSummaries](#listchecksummaries) - List of Trusted Advisor checks summarized for all accounts related to the workload.
* [listLensReviewImprovements](#listlensreviewimprovements) - List lens review improvements.
* [listLensReviews](#listlensreviews) - List lens reviews for a particular workload.
* [listLensShares](#listlensshares) - List the lens shares associated with the lens.
* [listLenses](#listlenses) - List the available lenses.
* [listMilestones](#listmilestones) - List all milestones for an existing workload.
* [listNotifications](#listnotifications) - List lens notifications.
* [listShareInvitations](#listshareinvitations) - List the workload invitations.
* [listTagsForResource](#listtagsforresource) - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [listWorkloadShares](#listworkloadshares) - List the workload shares associated with the workload.
* [listWorkloads](#listworkloads) - Paginated list of workloads.
* [tagResource](#tagresource) - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [untagResource](#untagresource) - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* [updateAnswer](#updateanswer) - Update the answer to a specific question in a workload review.
* [updateGlobalSettings](#updateglobalsettings) - Updates whether the Amazon Web Services account is opted into organization sharing features.
* [updateLensReview](#updatelensreview) - Update lens review for a particular workload.
* [updateShareInvitation](#updateshareinvitation) - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* [updateWorkload](#updateworkload) - Update an existing workload.
* [updateWorkloadShare](#updateworkloadshare) - Update a workload share.
* [upgradeLensReview](#upgradelensreview) - Upgrade lens review for a particular workload.

## associateLenses

<p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateLensesRequest();
    $request->requestBody = new AssociateLensesRequestBody();
    $request->requestBody->lensAliases = [
        'magnam',
        'debitis',
    ];
    $request->workloadId = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->associateLenses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLensShare

<p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLensShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLensShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLensShareRequest();
    $request->lensAlias = 'iusto';
    $request->requestBody = new CreateLensShareRequestBody();
    $request->requestBody->clientRequestToken = 'excepturi';
    $request->requestBody->sharedWith = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->createLensShare($request);

    if ($response->createLensShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLensVersion

<p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLensVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLensVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLensVersionRequest();
    $request->lensAlias = 'ipsam';
    $request->requestBody = new CreateLensVersionRequestBody();
    $request->requestBody->clientRequestToken = 'repellendus';
    $request->requestBody->isMajorVersion = false;
    $request->requestBody->lensVersion = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createLensVersion($request);

    if ($response->createLensVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMilestone

Create a milestone for an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMilestoneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMilestoneRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMilestoneRequest();
    $request->requestBody = new CreateMilestoneRequestBody();
    $request->requestBody->clientRequestToken = 'quod';
    $request->requestBody->milestoneName = 'esse';
    $request->workloadId = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->createMilestone($request);

    if ($response->createMilestoneOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkload

<p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadRequestBodyDiscoveryConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrustedAdvisorIntegrationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadRequestBodyEnvironmentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkloadRequest();
    $request->requestBody = new CreateWorkloadRequestBody();
    $request->requestBody->accountIds = [
        'hic',
        'optio',
        'totam',
    ];
    $request->requestBody->applications = [
        'commodi',
    ];
    $request->requestBody->architecturalDesign = 'molestiae';
    $request->requestBody->awsRegions = [
        'qui',
        'impedit',
    ];
    $request->requestBody->clientRequestToken = 'cum';
    $request->requestBody->description = 'esse';
    $request->requestBody->discoveryConfig = new CreateWorkloadRequestBodyDiscoveryConfig();
    $request->requestBody->discoveryConfig->trustedAdvisorIntegrationStatus = TrustedAdvisorIntegrationStatusEnum::ENABLED;
    $request->requestBody->environment = CreateWorkloadRequestBodyEnvironmentEnum::PREPRODUCTION;
    $request->requestBody->industry = 'aspernatur';
    $request->requestBody->industryType = 'perferendis';
    $request->requestBody->lenses = [
        'natus',
        'sed',
    ];
    $request->requestBody->nonAwsRegions = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->requestBody->notes = 'hic';
    $request->requestBody->pillarPriorities = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->requestBody->reviewOwner = 'iure';
    $request->requestBody->tags = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->requestBody->workloadName = 'dolorem';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->createWorkload($request);

    if ($response->createWorkloadOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkloadShare

<p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadShareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkloadShareRequestBodyPermissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkloadShareRequest();
    $request->requestBody = new CreateWorkloadShareRequestBody();
    $request->requestBody->clientRequestToken = 'excepturi';
    $request->requestBody->permissionType = CreateWorkloadShareRequestBodyPermissionTypeEnum::READONLY;
    $request->requestBody->sharedWith = 'iure';
    $request->workloadId = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->createWorkloadShare($request);

    if ($response->createWorkloadShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLens

<p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLensRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLensLensStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLensRequest();
    $request->clientRequestToken = 'repellat';
    $request->lensAlias = 'mollitia';
    $request->lensStatus = DeleteLensLensStatusEnum::DRAFT;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->deleteLens($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLensShare

<p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLensShareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLensShareRequest();
    $request->clientRequestToken = 'quis';
    $request->lensAlias = 'vitae';
    $request->shareId = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->deleteLensShare($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkload

Delete an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkloadRequest();
    $request->clientRequestToken = 'id';
    $request->workloadId = 'possimus';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->deleteWorkload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkloadShare

Delete a workload share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkloadShareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkloadShareRequest();
    $request->clientRequestToken = 'voluptatibus';
    $request->shareId = 'vero';
    $request->workloadId = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->deleteWorkloadShare($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateLenses

<p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateLensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateLensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateLensesRequest();
    $request->requestBody = new DisassociateLensesRequestBody();
    $request->requestBody->lensAliases = [
        'reprehenderit',
    ];
    $request->workloadId = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->disassociateLenses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportLens

<p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportLensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportLensRequest();
    $request->lensAlias = 'enim';
    $request->lensVersion = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->exportLens($request);

    if ($response->exportLensOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnswer

Get the answer to a specific question in a workload review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnswerRequest();
    $request->lensAlias = 'pariatur';
    $request->milestoneNumber = 265389;
    $request->questionId = 'praesentium';
    $request->workloadId = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getAnswer($request);

    if ($response->getAnswerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsolidatedReport

<p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsolidatedReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConsolidatedReportFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsolidatedReportRequest();
    $request->format = GetConsolidatedReportFormatEnum::PDF;
    $request->includeSharedResources = false;
    $request->maxResults = 9356;
    $request->nextToken = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getConsolidatedReport($request);

    if ($response->getConsolidatedReportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLens

Get an existing lens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLensRequest();
    $request->lensAlias = 'qui';
    $request->lensVersion = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getLens($request);

    if ($response->getLensOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLensReview

Get lens review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLensReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLensReviewRequest();
    $request->lensAlias = 'fugit';
    $request->milestoneNumber = 677817;
    $request->workloadId = 'excepturi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getLensReview($request);

    if ($response->getLensReviewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLensReviewReport

Get lens review report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLensReviewReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLensReviewReportRequest();
    $request->lensAlias = 'eligendi';
    $request->milestoneNumber = 576157;
    $request->workloadId = 'aliquid';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getLensReviewReport($request);

    if ($response->getLensReviewReportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLensVersionDifference

Get lens version differences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLensVersionDifferenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLensVersionDifferenceRequest();
    $request->baseLensVersion = 'dolorum';
    $request->lensAlias = 'in';
    $request->targetLensVersion = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->getLensVersionDifference($request);

    if ($response->getLensVersionDifferenceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMilestone

Get a milestone for an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMilestoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMilestoneRequest();
    $request->milestoneNumber = 411820;
    $request->workloadId = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getMilestone($request);

    if ($response->getMilestoneOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkload

Get an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkloadRequest();
    $request->workloadId = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getWorkload($request);

    if ($response->getWorkloadOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importLens

<p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportLensRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportLensRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportLensRequest();
    $request->requestBody = new ImportLensRequestBody();
    $request->requestBody->clientRequestToken = 'deserunt';
    $request->requestBody->jsonString = 'nisi';
    $request->requestBody->lensAlias = 'vel';
    $request->requestBody->tags = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->importLens($request);

    if ($response->importLensOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnswers

List of answers for a particular workload and lens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnswersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnswersRequest();
    $request->lensAlias = 'vero';
    $request->maxResults = 135474;
    $request->milestoneNumber = 102863;
    $request->nextToken = 'magnam';
    $request->pillarId = 'et';
    $request->workloadId = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->listAnswers($request);

    if ($response->listAnswersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCheckDetails

List of Trusted Advisor check details by account related to the workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckDetailsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCheckDetailsRequest();
    $request->maxResults = 'mollitia';
    $request->nextToken = 'ad';
    $request->requestBody = new ListCheckDetailsRequestBody();
    $request->requestBody->choiceId = 'eum';
    $request->requestBody->lensArn = 'dolor';
    $request->requestBody->maxResults = 896547;
    $request->requestBody->nextToken = 'odit';
    $request->requestBody->pillarId = 'nemo';
    $request->requestBody->questionId = 'quasi';
    $request->workloadId = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->listCheckDetails($request);

    if ($response->listCheckDetailsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCheckSummaries

List of Trusted Advisor checks summarized for all accounts related to the workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckSummariesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCheckSummariesRequest();
    $request->maxResults = 'architecto';
    $request->nextToken = 'architecto';
    $request->requestBody = new ListCheckSummariesRequestBody();
    $request->requestBody->choiceId = 'repudiandae';
    $request->requestBody->lensArn = 'ullam';
    $request->requestBody->maxResults = 714242;
    $request->requestBody->nextToken = 'nihil';
    $request->requestBody->pillarId = 'repellat';
    $request->requestBody->questionId = 'quibusdam';
    $request->workloadId = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->listCheckSummaries($request);

    if ($response->listCheckSummariesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLensReviewImprovements

List lens review improvements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLensReviewImprovementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLensReviewImprovementsRequest();
    $request->lensAlias = 'sunt';
    $request->maxResults = 779051;
    $request->milestoneNumber = 848009;
    $request->nextToken = 'pariatur';
    $request->pillarId = 'maxime';
    $request->workloadId = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->listLensReviewImprovements($request);

    if ($response->listLensReviewImprovementsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLensReviews

List lens reviews for a particular workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLensReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLensReviewsRequest();
    $request->maxResults = 373291;
    $request->milestoneNumber = 453543;
    $request->nextToken = 'autem';
    $request->workloadId = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->listLensReviews($request);

    if ($response->listLensReviewsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLensShares

List the lens shares associated with the lens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLensSharesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLensSharesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLensSharesRequest();
    $request->lensAlias = 'aut';
    $request->maxResults = 764912;
    $request->nextToken = 'corporis';
    $request->sharedWithPrefix = 'hic';
    $request->status = ListLensSharesStatusEnum::ASSOCIATING;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->listLensShares($request);

    if ($response->listLensSharesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLenses

List the available lenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLensesLensStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLensesLensTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLensesRequest();
    $request->lensName = 'nesciunt';
    $request->lensStatus = ListLensesLensStatusEnum::ALL;
    $request->lensType = ListLensesLensTypeEnum::AWS_OFFICIAL;
    $request->maxResults = 170986;
    $request->nextToken = 'minus';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->listLenses($request);

    if ($response->listLensesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMilestones

List all milestones for an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMilestonesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMilestonesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMilestonesRequest();
    $request->maxResults = 'facilis';
    $request->nextToken = 'perspiciatis';
    $request->requestBody = new ListMilestonesRequestBody();
    $request->requestBody->maxResults = 31838;
    $request->requestBody->nextToken = 'porro';
    $request->workloadId = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->listMilestones($request);

    if ($response->listMilestonesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotifications

List lens notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotificationsRequest();
    $request->maxResults = 'earum';
    $request->nextToken = 'modi';
    $request->requestBody = new ListNotificationsRequestBody();
    $request->requestBody->maxResults = 613966;
    $request->requestBody->nextToken = 'dolorum';
    $request->requestBody->workloadId = 'deleniti';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->listNotifications($request);

    if ($response->listNotificationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShareInvitations

List the workload invitations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListShareInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListShareInvitationsShareResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShareInvitationsRequest();
    $request->lensNamePrefix = 'aliquid';
    $request->maxResults = 212390;
    $request->nextToken = 'dolorem';
    $request->shareResourceType = ListShareInvitationsShareResourceTypeEnum::WORKLOAD;
    $request->workloadNamePrefix = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->listShareInvitations($request);

    if ($response->listShareInvitationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
    $request->workloadArn = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkloadShares

List the workload shares associated with the workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkloadSharesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkloadSharesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkloadSharesRequest();
    $request->maxResults = 311796;
    $request->nextToken = 'accusamus';
    $request->sharedWithPrefix = 'quidem';
    $request->status = ListWorkloadSharesStatusEnum::FAILED;
    $request->workloadId = 'voluptas';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->listWorkloadShares($request);

    if ($response->listWorkloadSharesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkloads

Paginated list of workloads.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkloadsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkloadsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkloadsRequest();
    $request->maxResults = 'dolorum';
    $request->nextToken = 'iusto';
    $request->requestBody = new ListWorkloadsRequestBody();
    $request->requestBody->maxResults = 453697;
    $request->requestBody->nextToken = 'dolorum';
    $request->requestBody->workloadNamePrefix = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->listWorkloads($request);

    if ($response->listWorkloadsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
        'saepe' => 'eius',
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->workloadArn = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>

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
    $request->workloadArn = 'totam';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->tagKeys = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnswer

Update the answer to a specific question in a workload review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnswerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnswerRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnswerRequestBodyReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnswerRequest();
    $request->lensAlias = 'harum';
    $request->questionId = 'iusto';
    $request->requestBody = new UpdateAnswerRequestBody();
    $request->requestBody->choiceUpdates = [
        'quisquam' => new ChoiceUpdate(),
    ];
    $request->requestBody->isApplicable = false;
    $request->requestBody->notes = 'tenetur';
    $request->requestBody->reason = UpdateAnswerRequestBodyReasonEnum::BUSINESS_PRIORITIES;
    $request->requestBody->selectedChoices = [
        'accusamus',
        'numquam',
        'enim',
    ];
    $request->workloadId = 'dolorem';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->updateAnswer($request);

    if ($response->updateAnswerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalSettings

Updates whether the Amazon Web Services account is opted into organization sharing features.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalSettingsRequest();
    $request->requestBody = new UpdateGlobalSettingsRequestBody();
    $request->requestBody->organizationSharingStatus = UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->updateGlobalSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLensReview

Update lens review for a particular workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLensReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLensReviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLensReviewRequest();
    $request->lensAlias = 'cupiditate';
    $request->requestBody = new UpdateLensReviewRequestBody();
    $request->requestBody->lensNotes = 'maxime';
    $request->requestBody->pillarNotes = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
    $request->workloadId = 'facilis';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->updateLensReview($request);

    if ($response->updateLensReviewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShareInvitation

<p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShareInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShareInvitationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShareInvitationRequestBodyShareInvitationActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShareInvitationRequest();
    $request->requestBody = new UpdateShareInvitationRequestBody();
    $request->requestBody->shareInvitationAction = UpdateShareInvitationRequestBodyShareInvitationActionEnum::ACCEPT;
    $request->shareInvitationId = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->updateShareInvitation($request);

    if ($response->updateShareInvitationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkload

Update an existing workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadRequestBodyDiscoveryConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrustedAdvisorIntegrationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadRequestBodyEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadRequestBodyImprovementStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkloadRequest();
    $request->requestBody = new UpdateWorkloadRequestBody();
    $request->requestBody->accountIds = [
        'et',
        'saepe',
        'ipsum',
    ];
    $request->requestBody->applications = [
        'nobis',
    ];
    $request->requestBody->architecturalDesign = 'quos';
    $request->requestBody->awsRegions = [
        'cupiditate',
        'aperiam',
        'delectus',
    ];
    $request->requestBody->description = 'dolorem';
    $request->requestBody->discoveryConfig = new UpdateWorkloadRequestBodyDiscoveryConfig();
    $request->requestBody->discoveryConfig->trustedAdvisorIntegrationStatus = TrustedAdvisorIntegrationStatusEnum::ENABLED;
    $request->requestBody->environment = UpdateWorkloadRequestBodyEnvironmentEnum::PRODUCTION;
    $request->requestBody->improvementStatus = UpdateWorkloadRequestBodyImprovementStatusEnum::NOT_STARTED;
    $request->requestBody->industry = 'dolorum';
    $request->requestBody->industryType = 'architecto';
    $request->requestBody->isReviewOwnerUpdateAcknowledged = false;
    $request->requestBody->nonAwsRegions = [
        'aut',
    ];
    $request->requestBody->notes = 'quas';
    $request->requestBody->pillarPriorities = [
        'consequatur',
        'est',
        'repellendus',
        'porro',
    ];
    $request->requestBody->reviewOwner = 'doloribus';
    $request->requestBody->workloadName = 'ut';
    $request->workloadId = 'facilis';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->updateWorkload($request);

    if ($response->updateWorkloadOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkloadShare

Update a workload share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadShareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkloadShareRequestBodyPermissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkloadShareRequest();
    $request->requestBody = new UpdateWorkloadShareRequestBody();
    $request->requestBody->permissionType = UpdateWorkloadShareRequestBodyPermissionTypeEnum::CONTRIBUTOR;
    $request->shareId = 'vero';
    $request->workloadId = 'omnis';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->updateWorkloadShare($request);

    if ($response->updateWorkloadShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradeLensReview

Upgrade lens review for a particular workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeLensReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeLensReviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradeLensReviewRequest();
    $request->lensAlias = 'dignissimos';
    $request->requestBody = new UpgradeLensReviewRequestBody();
    $request->requestBody->clientRequestToken = 'hic';
    $request->requestBody->milestoneName = 'distinctio';
    $request->workloadId = 'quod';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->upgradeLensReview($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
