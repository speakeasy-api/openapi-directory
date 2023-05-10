# SDK

## Overview

<p>Detective uses machine learning and purpose-built visualizations to help you to analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty.</p> <p>The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account.</p> <p>To add a member account to the behavior graph, the administrator account sends an invitation to the account. When the account accepts the invitation, it becomes a member account in the behavior graph.</p> <p>Detective is also integrated with Organizations. The organization management account designates the Detective administrator account for the organization. That account becomes the administrator account for the organization behavior graph. The Detective administrator account is also the delegated administrator account for Detective in Organizations.</p> <p>The Detective administrator account can enable any organization account as a member account in the organization behavior graph. The organization accounts do not receive invitations. The Detective administrator account can also invite other accounts to the organization behavior graph.</p> <p>Every behavior graph is specific to a Region. You can only use the API to manage behavior graphs that belong to the Region that is associated with the currently selected endpoint.</p> <p>The administrator account for a behavior graph can use the Detective API to do the following:</p> <ul> <li> <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p> </li> <li> <p>View the list of member accounts in a behavior graph.</p> </li> <li> <p>Add member accounts to a behavior graph.</p> </li> <li> <p>Remove member accounts from a behavior graph.</p> </li> <li> <p>Apply tags to a behavior graph.</p> </li> </ul> <p>The organization management account can use the Detective API to select the delegated administrator for Detective.</p> <p>The Detective administrator account for an organization can use the Detective API to do the following:</p> <ul> <li> <p>Perform all of the functions of an administrator account.</p> </li> <li> <p>Determine whether to automatically enable new organization accounts as member accounts in the organization behavior graph.</p> </li> </ul> <p>An invited member account can use the Detective API to do the following:</p> <ul> <li> <p>View the list of behavior graphs that they are invited to.</p> </li> <li> <p>Accept an invitation to contribute to a behavior graph.</p> </li> <li> <p>Decline an invitation to contribute to a behavior graph.</p> </li> <li> <p>Remove their account from a behavior graph.</p> </li> </ul> <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p> <note> <p>We replaced the term "master account" with the term "administrator account." An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/detective/>
### Available Operations

* [acceptInvitation](#acceptinvitation) - <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
* [batchGetGraphMemberDatasources](#batchgetgraphmemberdatasources) - Gets data source package information for the behavior graph.
* [batchGetMembershipDatasources](#batchgetmembershipdatasources) - Gets information on the data source package history for an account.
* [createGraph](#creategraph) - <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
* [createMembers](#createmembers) - <p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
* [deleteGraph](#deletegraph) - <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
* [deleteMembers](#deletemembers) - <p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - <p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>
* [disableOrganizationAdminAccount](#disableorganizationadminaccount) - <p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
* [disassociateMembership](#disassociatemembership) - <p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>
* [enableOrganizationAdminAccount](#enableorganizationadminaccount) - <p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>
* [getMembers](#getmembers) - Returns the membership details for specified member accounts for a behavior graph.
* [listDatasourcePackages](#listdatasourcepackages) - Lists data source packages in the behavior graph.
* [listGraphs](#listgraphs) - <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
* [listInvitations](#listinvitations) - <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
* [listMembers](#listmembers) - <p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>
* [listOrganizationAdminAccounts](#listorganizationadminaccounts) - Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
* [listTagsForResource](#listtagsforresource) - Returns the tag values that are assigned to a behavior graph.
* [rejectInvitation](#rejectinvitation) - <p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>
* [startMonitoringMember](#startmonitoringmember) - <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
* [tagResource](#tagresource) - Applies tag values to a behavior graph.
* [untagResource](#untagresource) - Removes tags from a behavior graph.
* [updateDatasourcePackages](#updatedatasourcepackages) - Starts a data source packages for the behavior graph.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.

## acceptInvitation

<p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptInvitationRequest();
    $request->requestBody = new AcceptInvitationRequestBody();
    $request->requestBody->graphArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->acceptInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetGraphMemberDatasources

Gets data source package information for the behavior graph.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetGraphMemberDatasourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetGraphMemberDatasourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetGraphMemberDatasourcesRequest();
    $request->requestBody = new BatchGetGraphMemberDatasourcesRequestBody();
    $request->requestBody->accountIds = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->requestBody->graphArn = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->batchGetGraphMemberDatasources($request);

    if ($response->batchGetGraphMemberDatasourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetMembershipDatasources

Gets information on the data source package history for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMembershipDatasourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMembershipDatasourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetMembershipDatasourcesRequest();
    $request->requestBody = new BatchGetMembershipDatasourcesRequestBody();
    $request->requestBody->graphArns = [
        'veritatis',
        'deserunt',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->batchGetMembershipDatasources($request);

    if ($response->batchGetMembershipDatasourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGraph

<p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGraphRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGraphRequest();
    $request->requestBody = new CreateGraphRequestBody();
    $request->requestBody->tags = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createGraph($request);

    if ($response->createGraphResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMembers

<p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Account;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMembersRequest();
    $request->requestBody = new CreateMembersRequestBody();
    $request->requestBody->accounts = [
        new Account(),
        new Account(),
        new Account(),
        new Account(),
    ];
    $request->requestBody->disableEmailNotification = false;
    $request->requestBody->graphArn = 'totam';
    $request->requestBody->message = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createMembers($request);

    if ($response->createMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGraph

<p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGraphRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGraphRequest();
    $request->requestBody = new DeleteGraphRequestBody();
    $request->requestBody->graphArn = 'ipsum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->deleteGraph($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMembers

<p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMembersRequest();
    $request->requestBody = new DeleteMembersRequestBody();
    $request->requestBody->accountIds = [
        'natus',
    ];
    $request->requestBody->graphArn = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->deleteMembers($request);

    if ($response->deleteMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfiguration

<p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConfigurationRequest();
    $request->requestBody = new DescribeOrganizationConfigurationRequestBody();
    $request->requestBody->graphArn = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->describeOrganizationConfiguration($request);

    if ($response->describeOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableOrganizationAdminAccount

<p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableOrganizationAdminAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableOrganizationAdminAccountRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->disableOrganizationAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMembership

<p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMembershipRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMembershipRequest();
    $request->requestBody = new DisassociateMembershipRequestBody();
    $request->requestBody->graphArn = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->disassociateMembership($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableOrganizationAdminAccount

<p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableOrganizationAdminAccountRequest();
    $request->requestBody = new EnableOrganizationAdminAccountRequestBody();
    $request->requestBody->accountId = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->enableOrganizationAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMembers

Returns the membership details for specified member accounts for a behavior graph.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMembersRequest();
    $request->requestBody = new GetMembersRequestBody();
    $request->requestBody->accountIds = [
        'commodi',
        'quam',
    ];
    $request->requestBody->graphArn = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->getMembers($request);

    if ($response->getMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasourcePackages

Lists data source packages in the behavior graph.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasourcePackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasourcePackagesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasourcePackagesRequest();
    $request->maxResults = 'enim';
    $request->nextToken = 'odit';
    $request->requestBody = new ListDatasourcePackagesRequestBody();
    $request->requestBody->graphArn = 'quo';
    $request->requestBody->maxResults = 196582;
    $request->requestBody->nextToken = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->listDatasourcePackages($request);

    if ($response->listDatasourcePackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGraphs

<p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGraphsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGraphsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGraphsRequest();
    $request->maxResults = 'laborum';
    $request->nextToken = 'quasi';
    $request->requestBody = new ListGraphsRequestBody();
    $request->requestBody->maxResults = 971945;
    $request->requestBody->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->listGraphs($request);

    if ($response->listGraphsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInvitations

<p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInvitationsRequest();
    $request->maxResults = 'cum';
    $request->nextToken = 'perferendis';
    $request->requestBody = new ListInvitationsRequestBody();
    $request->requestBody->maxResults = 39187;
    $request->requestBody->nextToken = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->listInvitations($request);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMembers

<p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembersRequest();
    $request->maxResults = 'harum';
    $request->nextToken = 'enim';
    $request->requestBody = new ListMembersRequestBody();
    $request->requestBody->graphArn = 'accusamus';
    $request->requestBody->maxResults = 414263;
    $request->requestBody->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->listMembers($request);

    if ($response->listMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationAdminAccounts

Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationAdminAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationAdminAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationAdminAccountsRequest();
    $request->maxResults = 'praesentium';
    $request->nextToken = 'rem';
    $request->requestBody = new ListOrganizationAdminAccountsRequestBody();
    $request->requestBody->maxResults = 916723;
    $request->requestBody->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->listOrganizationAdminAccounts($request);

    if ($response->listOrganizationAdminAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns the tag values that are assigned to a behavior graph.

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
    $request->resourceArn = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectInvitation

<p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectInvitationRequest();
    $request->requestBody = new RejectInvitationRequestBody();
    $request->requestBody->graphArn = 'qui';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->rejectInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMonitoringMember

<p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMonitoringMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartMonitoringMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMonitoringMemberRequest();
    $request->requestBody = new StartMonitoringMemberRequestBody();
    $request->requestBody->accountId = 'alias';
    $request->requestBody->graphArn = 'fugit';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->startMonitoringMember($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Applies tag values to a behavior graph.

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
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->resourceArn = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a behavior graph.

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
    $request->resourceArn = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->tagKeys = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatasourcePackages

Starts a data source packages for the behavior graph.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasourcePackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasourcePackagesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DatasourcePackageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasourcePackagesRequest();
    $request->requestBody = new UpdateDatasourcePackagesRequestBody();
    $request->requestBody->datasourcePackages = [
        DatasourcePackageEnum::EKS_AUDIT,
    ];
    $request->requestBody->graphArn = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->updateDatasourcePackages($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfiguration

Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigurationRequest();
    $request->requestBody = new UpdateOrganizationConfigurationRequestBody();
    $request->requestBody->autoEnable = false;
    $request->requestBody->graphArn = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->updateOrganizationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
