# SDK

## Overview

<p>This is the <i>Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/fms/>
### Available Operations

* [associateAdminAccount](#associateadminaccount) - <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [associateThirdPartyFirewall](#associatethirdpartyfirewall) - Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
* [batchAssociateResource](#batchassociateresource) - Associate resources to a Firewall Manager resource set.
* [batchDisassociateResource](#batchdisassociateresource) - Disassociates resources from a Firewall Manager resource set.
* [deleteAppsList](#deleteappslist) - Permanently deletes an Firewall Manager applications list.
* [deleteNotificationChannel](#deletenotificationchannel) - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [deletePolicy](#deletepolicy) - Permanently deletes an Firewall Manager policy. 
* [deleteProtocolsList](#deleteprotocolslist) - Permanently deletes an Firewall Manager protocols list.
* [deleteResourceSet](#deleteresourceset) - Deletes the specified <a>ResourceSet</a>.
* [disassociateAdminAccount](#disassociateadminaccount) - <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
* [disassociateThirdPartyFirewall](#disassociatethirdpartyfirewall) - Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
* [getAdminAccount](#getadminaccount) - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.
* [getAdminScope](#getadminscope) - Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.
* [getAppsList](#getappslist) - Returns information about the specified Firewall Manager applications list.
* [getComplianceDetail](#getcompliancedetail) - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* [getNotificationChannel](#getnotificationchannel) - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [getPolicy](#getpolicy) - Returns information about the specified Firewall Manager policy.
* [getProtectionStatus](#getprotectionstatus) - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* [getProtocolsList](#getprotocolslist) - Returns information about the specified Firewall Manager protocols list.
* [getResourceSet](#getresourceset) - Gets information about a specific resource set.
* [getThirdPartyFirewallAssociationStatus](#getthirdpartyfirewallassociationstatus) - The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
* [getViolationDetails](#getviolationdetails) - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* [listAdminAccountsForOrganization](#listadminaccountsfororganization) - <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>
* [listAdminsManagingAccount](#listadminsmanagingaccount) - Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.
* [listAppsLists](#listappslists) - Returns an array of <code>AppsListDataSummary</code> objects.
* [listComplianceStatus](#listcompliancestatus) - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* [listDiscoveredResources](#listdiscoveredresources) - Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
* [listMemberAccounts](#listmemberaccounts) - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
* [listPolicies](#listpolicies) - Returns an array of <code>PolicySummary</code> objects.
* [listProtocolsLists](#listprotocolslists) - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* [listResourceSetResources](#listresourcesetresources) - Returns an array of resources that are currently associated to a resource set.
* [listResourceSets](#listresourcesets) - Returns an array of <code>ResourceSetSummary</code> objects.
* [listTagsForResource](#listtagsforresource) - Retrieves the list of tags for the specified Amazon Web Services resource. 
* [listThirdPartyFirewallFirewallPolicies](#listthirdpartyfirewallfirewallpolicies) - Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
* [putAdminAccount](#putadminaccount) - Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.
* [putAppsList](#putappslist) - Creates an Firewall Manager applications list.
* [putNotificationChannel](#putnotificationchannel) - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [putPolicy](#putpolicy) - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* [putProtocolsList](#putprotocolslist) - Creates an Firewall Manager protocols list.
* [putResourceSet](#putresourceset) - <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
* [tagResource](#tagresource) - Adds one or more tags to an Amazon Web Services resource.
* [untagResource](#untagresource) - Removes one or more tags from an Amazon Web Services resource.

## associateAdminAccount

<p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAdminAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAdminAccountRequest();
    $request->associateAdminAccountRequest = new AssociateAdminAccountRequest();
    $request->associateAdminAccountRequest->adminAccount = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AssociateAdminAccountXAmzTargetEnum::AWSFMS20180101_ASSOCIATE_ADMIN_ACCOUNT;

    $response = $sdk->sdk->associateAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateThirdPartyFirewall

Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateThirdPartyFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateThirdPartyFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyFirewallEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateThirdPartyFirewallXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateThirdPartyFirewallRequest();
    $request->associateThirdPartyFirewallRequest = new AssociateThirdPartyFirewallRequest();
    $request->associateThirdPartyFirewallRequest->thirdPartyFirewall = ThirdPartyFirewallEnum::FORTIGATE_CLOUD_NATIVE_FIREWALL;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = AssociateThirdPartyFirewallXAmzTargetEnum::AWSFMS20180101_ASSOCIATE_THIRD_PARTY_FIREWALL;

    $response = $sdk->sdk->associateThirdPartyFirewall($request);

    if ($response->associateThirdPartyFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateResource

Associate resources to a Firewall Manager resource set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchAssociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateResourceRequest();
    $request->batchAssociateResourceRequest = new BatchAssociateResourceRequest();
    $request->batchAssociateResourceRequest->items = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->batchAssociateResourceRequest->resourceSetIdentifier = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = BatchAssociateResourceXAmzTargetEnum::AWSFMS20180101_BATCH_ASSOCIATE_RESOURCE;

    $response = $sdk->sdk->batchAssociateResource($request);

    if ($response->batchAssociateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateResource

Disassociates resources from a Firewall Manager resource set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDisassociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateResourceRequest();
    $request->batchDisassociateResourceRequest = new BatchDisassociateResourceRequest();
    $request->batchDisassociateResourceRequest->items = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->batchDisassociateResourceRequest->resourceSetIdentifier = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = BatchDisassociateResourceXAmzTargetEnum::AWSFMS20180101_BATCH_DISASSOCIATE_RESOURCE;

    $response = $sdk->sdk->batchDisassociateResource($request);

    if ($response->batchDisassociateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppsList

Permanently deletes an Firewall Manager applications list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsListRequest();
    $request->deleteAppsListRequest = new DeleteAppsListRequest();
    $request->deleteAppsListRequest->listId = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DeleteAppsListXAmzTargetEnum::AWSFMS20180101_DELETE_APPS_LIST;

    $response = $sdk->sdk->deleteAppsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotificationChannel

Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationChannelRequest();
    $request->requestBody = [
        'commodi' => 'molestiae',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteNotificationChannelXAmzTargetEnum::AWSFMS20180101_DELETE_NOTIFICATION_CHANNEL;

    $response = $sdk->sdk->deleteNotificationChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePolicy

Permanently deletes an Firewall Manager policy. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolicyRequest();
    $request->deletePolicyRequest = new DeletePolicyRequest();
    $request->deletePolicyRequest->deleteAllPolicyResources = false;
    $request->deletePolicyRequest->policyId = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeletePolicyXAmzTargetEnum::AWSFMS20180101_DELETE_POLICY;

    $response = $sdk->sdk->deletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProtocolsList

Permanently deletes an Firewall Manager protocols list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtocolsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProtocolsListRequest();
    $request->deleteProtocolsListRequest = new DeleteProtocolsListRequest();
    $request->deleteProtocolsListRequest->listId = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteProtocolsListXAmzTargetEnum::AWSFMS20180101_DELETE_PROTOCOLS_LIST;

    $response = $sdk->sdk->deleteProtocolsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceSet

Deletes the specified <a>ResourceSet</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceSetRequest();
    $request->deleteResourceSetRequest = new DeleteResourceSetRequest();
    $request->deleteResourceSetRequest->identifier = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteResourceSetXAmzTargetEnum::AWSFMS20180101_DELETE_RESOURCE_SET;

    $response = $sdk->sdk->deleteResourceSet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateAdminAccount

<p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAdminAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateAdminAccountRequest();
    $request->requestBody = [
        'dolorem' => 'corporis',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DisassociateAdminAccountXAmzTargetEnum::AWSFMS20180101_DISASSOCIATE_ADMIN_ACCOUNT;

    $response = $sdk->sdk->disassociateAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateThirdPartyFirewall

Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateThirdPartyFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateThirdPartyFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyFirewallEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateThirdPartyFirewallXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateThirdPartyFirewallRequest();
    $request->disassociateThirdPartyFirewallRequest = new DisassociateThirdPartyFirewallRequest();
    $request->disassociateThirdPartyFirewallRequest->thirdPartyFirewall = ThirdPartyFirewallEnum::PALO_ALTO_NETWORKS_CLOUD_NGFW;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DisassociateThirdPartyFirewallXAmzTargetEnum::AWSFMS20180101_DISASSOCIATE_THIRD_PARTY_FIREWALL;

    $response = $sdk->sdk->disassociateThirdPartyFirewall($request);

    if ($response->disassociateThirdPartyFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminAccount

Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminAccountRequest();
    $request->requestBody = [
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
    ];
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = GetAdminAccountXAmzTargetEnum::AWSFMS20180101_GET_ADMIN_ACCOUNT;

    $response = $sdk->sdk->getAdminAccount($request);

    if ($response->getAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminScope

Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminScopeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAdminScopeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminScopeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminScopeRequest();
    $request->getAdminScopeRequest = new GetAdminScopeRequest();
    $request->getAdminScopeRequest->adminAccount = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetAdminScopeXAmzTargetEnum::AWSFMS20180101_GET_ADMIN_SCOPE;

    $response = $sdk->sdk->getAdminScope($request);

    if ($response->getAdminScopeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsList

Returns information about the specified Firewall Manager applications list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsListRequest();
    $request->getAppsListRequest = new GetAppsListRequest();
    $request->getAppsListRequest->defaultList = false;
    $request->getAppsListRequest->listId = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = GetAppsListXAmzTargetEnum::AWSFMS20180101_GET_APPS_LIST;

    $response = $sdk->sdk->getAppsList($request);

    if ($response->getAppsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComplianceDetail

<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComplianceDetailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetComplianceDetailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComplianceDetailRequest();
    $request->getComplianceDetailRequest = new GetComplianceDetailRequest();
    $request->getComplianceDetailRequest->memberAccount = 'reiciendis';
    $request->getComplianceDetailRequest->policyId = 'voluptatibus';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = GetComplianceDetailXAmzTargetEnum::AWSFMS20180101_GET_COMPLIANCE_DETAIL;

    $response = $sdk->sdk->getComplianceDetail($request);

    if ($response->getComplianceDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotificationChannel

Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationChannelRequest();
    $request->requestBody = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = GetNotificationChannelXAmzTargetEnum::AWSFMS20180101_GET_NOTIFICATION_CHANNEL;

    $response = $sdk->sdk->getNotificationChannel($request);

    if ($response->getNotificationChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicy

Returns information about the specified Firewall Manager policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyRequest();
    $request->getPolicyRequest = new GetPolicyRequest();
    $request->getPolicyRequest->policyId = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetPolicyXAmzTargetEnum::AWSFMS20180101_GET_POLICY;

    $response = $sdk->sdk->getPolicy($request);

    if ($response->getPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProtectionStatus

If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProtectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProtectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProtectionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProtectionStatusRequest();
    $request->getProtectionStatusRequest = new GetProtectionStatusRequest();
    $request->getProtectionStatusRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T05:25:54.356Z');
    $request->getProtectionStatusRequest->maxResults = 523248;
    $request->getProtectionStatusRequest->memberAccountId = 'voluptates';
    $request->getProtectionStatusRequest->nextToken = 'quasi';
    $request->getProtectionStatusRequest->policyId = 'repudiandae';
    $request->getProtectionStatusRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = GetProtectionStatusXAmzTargetEnum::AWSFMS20180101_GET_PROTECTION_STATUS;

    $response = $sdk->sdk->getProtectionStatus($request);

    if ($response->getProtectionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProtocolsList

Returns information about the specified Firewall Manager protocols list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProtocolsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProtocolsListRequest();
    $request->getProtocolsListRequest = new GetProtocolsListRequest();
    $request->getProtocolsListRequest->defaultList = false;
    $request->getProtocolsListRequest->listId = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = GetProtocolsListXAmzTargetEnum::AWSFMS20180101_GET_PROTOCOLS_LIST;

    $response = $sdk->sdk->getProtocolsList($request);

    if ($response->getProtocolsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceSet

Gets information about a specific resource set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceSetRequest();
    $request->getResourceSetRequest = new GetResourceSetRequest();
    $request->getResourceSetRequest->identifier = 'quos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = GetResourceSetXAmzTargetEnum::AWSFMS20180101_GET_RESOURCE_SET;

    $response = $sdk->sdk->getResourceSet($request);

    if ($response->getResourceSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyFirewallAssociationStatus

The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyFirewallAssociationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetThirdPartyFirewallAssociationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyFirewallEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyFirewallAssociationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyFirewallAssociationStatusRequest();
    $request->getThirdPartyFirewallAssociationStatusRequest = new GetThirdPartyFirewallAssociationStatusRequest();
    $request->getThirdPartyFirewallAssociationStatusRequest->thirdPartyFirewall = ThirdPartyFirewallEnum::FORTIGATE_CLOUD_NATIVE_FIREWALL;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = GetThirdPartyFirewallAssociationStatusXAmzTargetEnum::AWSFMS20180101_GET_THIRD_PARTY_FIREWALL_ASSOCIATION_STATUS;

    $response = $sdk->sdk->getThirdPartyFirewallAssociationStatus($request);

    if ($response->getThirdPartyFirewallAssociationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getViolationDetails

Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetViolationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetViolationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetViolationDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetViolationDetailsRequest();
    $request->getViolationDetailsRequest = new GetViolationDetailsRequest();
    $request->getViolationDetailsRequest->memberAccount = 'eligendi';
    $request->getViolationDetailsRequest->policyId = 'sint';
    $request->getViolationDetailsRequest->resourceId = 'aliquid';
    $request->getViolationDetailsRequest->resourceType = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = GetViolationDetailsXAmzTargetEnum::AWSFMS20180101_GET_VIOLATION_DETAILS;

    $response = $sdk->sdk->getViolationDetails($request);

    if ($response->getViolationDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAdminAccountsForOrganization

<p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAdminAccountsForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAdminAccountsForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAdminAccountsForOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAdminAccountsForOrganizationRequest();
    $request->listAdminAccountsForOrganizationRequest = new ListAdminAccountsForOrganizationRequest();
    $request->listAdminAccountsForOrganizationRequest->maxResults = 447125;
    $request->listAdminAccountsForOrganizationRequest->nextToken = 'in';
    $request->maxResults = 'illum';
    $request->nextToken = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ListAdminAccountsForOrganizationXAmzTargetEnum::AWSFMS20180101_LIST_ADMIN_ACCOUNTS_FOR_ORGANIZATION;

    $response = $sdk->sdk->listAdminAccountsForOrganization($request);

    if ($response->listAdminAccountsForOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAdminsManagingAccount

Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAdminsManagingAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAdminsManagingAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAdminsManagingAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAdminsManagingAccountRequest();
    $request->listAdminsManagingAccountRequest = new ListAdminsManagingAccountRequest();
    $request->listAdminsManagingAccountRequest->maxResults = 675439;
    $request->listAdminsManagingAccountRequest->nextToken = 'accusamus';
    $request->maxResults = 'non';
    $request->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListAdminsManagingAccountXAmzTargetEnum::AWSFMS20180101_LIST_ADMINS_MANAGING_ACCOUNT;

    $response = $sdk->sdk->listAdminsManagingAccount($request);

    if ($response->listAdminsManagingAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppsLists

Returns an array of <code>AppsListDataSummary</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAppsListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppsListsRequest();
    $request->listAppsListsRequest = new ListAppsListsRequest();
    $request->listAppsListsRequest->defaultLists = false;
    $request->listAppsListsRequest->maxResults = 501324;
    $request->listAppsListsRequest->nextToken = 'deleniti';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListAppsListsXAmzTargetEnum::AWSFMS20180101_LIST_APPS_LISTS;

    $response = $sdk->sdk->listAppsLists($request);

    if ($response->listAppsListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComplianceStatus

Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComplianceStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComplianceStatusRequest();
    $request->listComplianceStatusRequest = new ListComplianceStatusRequest();
    $request->listComplianceStatusRequest->maxResults = 470132;
    $request->listComplianceStatusRequest->nextToken = 'magnam';
    $request->listComplianceStatusRequest->policyId = 'distinctio';
    $request->maxResults = 'id';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListComplianceStatusXAmzTargetEnum::AWSFMS20180101_LIST_COMPLIANCE_STATUS;

    $response = $sdk->sdk->listComplianceStatus($request);

    if ($response->listComplianceStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDiscoveredResources

Returns an array of resources in the organization's accounts that are available to be associated with a resource set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest->maxResults = 102863;
    $request->listDiscoveredResourcesRequest->memberAccountIds = [
        'et',
        'excepturi',
    ];
    $request->listDiscoveredResourcesRequest->nextToken = 'ullam';
    $request->listDiscoveredResourcesRequest->resourceType = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = ListDiscoveredResourcesXAmzTargetEnum::AWSFMS20180101_LIST_DISCOVERED_RESOURCES;

    $response = $sdk->sdk->listDiscoveredResources($request);

    if ($response->listDiscoveredResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMemberAccounts

<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMemberAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberAccountsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMemberAccountsRequest();
    $request->listMemberAccountsRequest = new ListMemberAccountsRequest();
    $request->listMemberAccountsRequest->maxResults = 431418;
    $request->listMemberAccountsRequest->nextToken = 'dolor';
    $request->maxResults = 'necessitatibus';
    $request->nextToken = 'odit';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = ListMemberAccountsXAmzTargetEnum::AWSFMS20180101_LIST_MEMBER_ACCOUNTS;

    $response = $sdk->sdk->listMemberAccounts($request);

    if ($response->listMemberAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPolicies

Returns an array of <code>PolicySummary</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPoliciesRequest();
    $request->listPoliciesRequest = new ListPoliciesRequest();
    $request->listPoliciesRequest->maxResults = 537023;
    $request->listPoliciesRequest->nextToken = 'facilis';
    $request->maxResults = 'in';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = ListPoliciesXAmzTargetEnum::AWSFMS20180101_LIST_POLICIES;

    $response = $sdk->sdk->listPolicies($request);

    if ($response->listPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProtocolsLists

Returns an array of <code>ProtocolsListDataSummary</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProtocolsListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProtocolsListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProtocolsListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProtocolsListsRequest();
    $request->listProtocolsListsRequest = new ListProtocolsListsRequest();
    $request->listProtocolsListsRequest->defaultLists = false;
    $request->listProtocolsListsRequest->maxResults = 149448;
    $request->listProtocolsListsRequest->nextToken = 'saepe';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListProtocolsListsXAmzTargetEnum::AWSFMS20180101_LIST_PROTOCOLS_LISTS;

    $response = $sdk->sdk->listProtocolsLists($request);

    if ($response->listProtocolsListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceSetResources

Returns an array of resources that are currently associated to a resource set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSetResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceSetResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSetResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceSetResourcesRequest();
    $request->listResourceSetResourcesRequest = new ListResourceSetResourcesRequest();
    $request->listResourceSetResourcesRequest->identifier = 'pariatur';
    $request->listResourceSetResourcesRequest->maxResults = 807319;
    $request->listResourceSetResourcesRequest->nextToken = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ListResourceSetResourcesXAmzTargetEnum::AWSFMS20180101_LIST_RESOURCE_SET_RESOURCES;

    $response = $sdk->sdk->listResourceSetResources($request);

    if ($response->listResourceSetResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceSets

Returns an array of <code>ResourceSetSummary</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceSetsRequest();
    $request->listResourceSetsRequest = new ListResourceSetsRequest();
    $request->listResourceSetsRequest->maxResults = 373291;
    $request->listResourceSetsRequest->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListResourceSetsXAmzTargetEnum::AWSFMS20180101_LIST_RESOURCE_SETS;

    $response = $sdk->sdk->listResourceSets($request);

    if ($response->listResourceSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the list of tags for the specified Amazon Web Services resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWSFMS20180101_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThirdPartyFirewallFirewallPolicies

Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThirdPartyFirewallFirewallPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListThirdPartyFirewallFirewallPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyFirewallEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThirdPartyFirewallFirewallPoliciesRequest();
    $request->listThirdPartyFirewallFirewallPoliciesRequest = new ListThirdPartyFirewallFirewallPoliciesRequest();
    $request->listThirdPartyFirewallFirewallPoliciesRequest->maxResults = 171629;
    $request->listThirdPartyFirewallFirewallPoliciesRequest->nextToken = 'quis';
    $request->listThirdPartyFirewallFirewallPoliciesRequest->thirdPartyFirewall = ThirdPartyFirewallEnum::FORTIGATE_CLOUD_NATIVE_FIREWALL;
    $request->maxResults = 'dignissimos';
    $request->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum::AWSFMS20180101_LIST_THIRD_PARTY_FIREWALL_FIREWALL_POLICIES;

    $response = $sdk->sdk->listThirdPartyFirewallFirewallPolicies($request);

    if ($response->listThirdPartyFirewallFirewallPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAdminAccount

Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminScope;
use \OpenAPI\OpenAPI\Models\Shared\AccountScope;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationalUnitScope;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTypeScope;
use \OpenAPI\OpenAPI\Models\Shared\SecurityServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionScope;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAdminAccountRequest();
    $request->putAdminAccountRequest = new PutAdminAccountRequest();
    $request->putAdminAccountRequest->adminAccount = 'dolor';
    $request->putAdminAccountRequest->adminScope = new AdminScope();
    $request->putAdminAccountRequest->adminScope->accountScope = new AccountScope();
    $request->putAdminAccountRequest->adminScope->accountScope->accounts = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->putAdminAccountRequest->adminScope->accountScope->allAccountsEnabled = false;
    $request->putAdminAccountRequest->adminScope->accountScope->excludeSpecifiedAccounts = false;
    $request->putAdminAccountRequest->adminScope->organizationalUnitScope = new OrganizationalUnitScope();
    $request->putAdminAccountRequest->adminScope->organizationalUnitScope->allOrganizationalUnitsEnabled = false;
    $request->putAdminAccountRequest->adminScope->organizationalUnitScope->excludeSpecifiedOrganizationalUnits = false;
    $request->putAdminAccountRequest->adminScope->organizationalUnitScope->organizationalUnits = [
        'perspiciatis',
        'voluptatem',
        'porro',
    ];
    $request->putAdminAccountRequest->adminScope->policyTypeScope = new PolicyTypeScope();
    $request->putAdminAccountRequest->adminScope->policyTypeScope->allPolicyTypesEnabled = false;
    $request->putAdminAccountRequest->adminScope->policyTypeScope->policyTypes = [
        SecurityServiceTypeEnum::SECURITY_GROUPS_USAGE_AUDIT,
    ];
    $request->putAdminAccountRequest->adminScope->regionScope = new RegionScope();
    $request->putAdminAccountRequest->adminScope->regionScope->allRegionsEnabled = false;
    $request->putAdminAccountRequest->adminScope->regionScope->regions = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = PutAdminAccountXAmzTargetEnum::AWSFMS20180101_PUT_ADMIN_ACCOUNT;

    $response = $sdk->sdk->putAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAppsList

Creates an Firewall Manager applications list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppsListData;
use \OpenAPI\OpenAPI\Models\Shared\App;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutAppsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAppsListRequest();
    $request->putAppsListRequest = new PutAppsListRequest();
    $request->putAppsListRequest->appsList = new AppsListData();
    $request->putAppsListRequest->appsList->appsList = [
        new App(),
        new App(),
        new App(),
        new App(),
    ];
    $request->putAppsListRequest->appsList->createTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T21:12:31.408Z');
    $request->putAppsListRequest->appsList->lastUpdateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-26T22:08:21.462Z');
    $request->putAppsListRequest->appsList->listId = 'quaerat';
    $request->putAppsListRequest->appsList->listName = 'quos';
    $request->putAppsListRequest->appsList->listUpdateToken = 'aliquid';
    $request->putAppsListRequest->appsList->previousAppsList = [
        'dolorem' => [
            new App(),
        ],
    ];
    $request->putAppsListRequest->tagList = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = PutAppsListXAmzTargetEnum::AWSFMS20180101_PUT_APPS_LIST;

    $response = $sdk->sdk->putAppsList($request);

    if ($response->putAppsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putNotificationChannel

<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutNotificationChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutNotificationChannelRequest();
    $request->putNotificationChannelRequest = new PutNotificationChannelRequest();
    $request->putNotificationChannelRequest->snsRoleName = 'amet';
    $request->putNotificationChannelRequest->snsTopicArn = 'dolorum';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = PutNotificationChannelXAmzTargetEnum::AWSFMS20180101_PUT_NOTIFICATION_CHANNEL;

    $response = $sdk->sdk->putNotificationChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPolicy

<p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPolicyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Shared\SecurityServicePolicyData;
use \OpenAPI\OpenAPI\Models\Shared\PolicyOption;
use \OpenAPI\OpenAPI\Models\Shared\NetworkFirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDeploymentModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyFirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SecurityServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPolicyRequest();
    $request->putPolicyRequest = new PutPolicyRequest();
    $request->putPolicyRequest->policy = new Policy();
    $request->putPolicyRequest->policy->deleteUnusedFMManagedResources = false;
    $request->putPolicyRequest->policy->excludeMap = [
        'quidem' => [
            'voluptas',
            'natus',
            'eos',
            'atque',
        ],
        'sit' => [
            'ab',
            'soluta',
            'dolorum',
            'iusto',
        ],
        'voluptate' => [
            'deleniti',
            'omnis',
            'necessitatibus',
        ],
        'distinctio' => [
            'nihil',
            'ipsum',
            'voluptate',
            'id',
        ],
    ];
    $request->putPolicyRequest->policy->excludeResourceTags = false;
    $request->putPolicyRequest->policy->includeMap = [
        'eius' => [
            'perferendis',
        ],
        'amet' => [
            'accusamus',
            'ad',
            'saepe',
            'suscipit',
        ],
        'deserunt' => [
            'minima',
            'repellendus',
            'totam',
        ],
        'similique' => [
            'at',
        ],
    ];
    $request->putPolicyRequest->policy->policyDescription = 'quaerat';
    $request->putPolicyRequest->policy->policyId = 'tempora';
    $request->putPolicyRequest->policy->policyName = 'vel';
    $request->putPolicyRequest->policy->policyStatus = CustomerPolicyStatusEnum::OUT_OF_ADMIN_SCOPE;
    $request->putPolicyRequest->policy->policyUpdateToken = 'officiis';
    $request->putPolicyRequest->policy->remediationEnabled = false;
    $request->putPolicyRequest->policy->resourceSetIds = [
        'dolorum',
    ];
    $request->putPolicyRequest->policy->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->putPolicyRequest->policy->resourceType = 'esse';
    $request->putPolicyRequest->policy->resourceTypeList = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->putPolicyRequest->policy->securityServicePolicyData = new SecurityServicePolicyData();
    $request->putPolicyRequest->policy->securityServicePolicyData->managedServiceData = 'tenetur';
    $request->putPolicyRequest->policy->securityServicePolicyData->policyOption = new PolicyOption();
    $request->putPolicyRequest->policy->securityServicePolicyData->policyOption->networkFirewallPolicy = new NetworkFirewallPolicy();
    $request->putPolicyRequest->policy->securityServicePolicyData->policyOption->networkFirewallPolicy->firewallDeploymentModel = FirewallDeploymentModelEnum::CENTRALIZED;
    $request->putPolicyRequest->policy->securityServicePolicyData->policyOption->thirdPartyFirewallPolicy = new ThirdPartyFirewallPolicy();
    $request->putPolicyRequest->policy->securityServicePolicyData->policyOption->thirdPartyFirewallPolicy->firewallDeploymentModel = FirewallDeploymentModelEnum::DISTRIBUTED;
    $request->putPolicyRequest->policy->securityServicePolicyData->type = SecurityServiceTypeEnum::THIRD_PARTY_FIREWALL;
    $request->putPolicyRequest->tagList = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = PutPolicyXAmzTargetEnum::AWSFMS20180101_PUT_POLICY;

    $response = $sdk->sdk->putPolicy($request);

    if ($response->putPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProtocolsList

Creates an Firewall Manager protocols list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutProtocolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolsListData;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutProtocolsListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProtocolsListRequest();
    $request->putProtocolsListRequest = new PutProtocolsListRequest();
    $request->putProtocolsListRequest->protocolsList = new ProtocolsListData();
    $request->putProtocolsListRequest->protocolsList->createTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T21:38:15.600Z');
    $request->putProtocolsListRequest->protocolsList->lastUpdateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T09:19:35.125Z');
    $request->putProtocolsListRequest->protocolsList->listId = 'voluptas';
    $request->putProtocolsListRequest->protocolsList->listName = 'deserunt';
    $request->putProtocolsListRequest->protocolsList->listUpdateToken = 'quam';
    $request->putProtocolsListRequest->protocolsList->previousProtocolsList = [
        'incidunt' => [
            'cupiditate',
        ],
    ];
    $request->putProtocolsListRequest->protocolsList->protocolsList = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->putProtocolsListRequest->tagList = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = PutProtocolsListXAmzTargetEnum::AWSFMS20180101_PUT_PROTOCOLS_LIST;

    $response = $sdk->sdk->putProtocolsList($request);

    if ($response->putProtocolsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourceSet

<p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourceSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSet;
use \OpenAPI\OpenAPI\Models\Shared\ResourceSetStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourceSetRequest();
    $request->putResourceSetRequest = new PutResourceSetRequest();
    $request->putResourceSetRequest->resourceSet = new ResourceSet();
    $request->putResourceSetRequest->resourceSet->description = 'molestias';
    $request->putResourceSetRequest->resourceSet->id = 'd2322715-bf0c-4bb1-a31b-8b90f3443a11';
    $request->putResourceSetRequest->resourceSet->lastUpdateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T04:30:45.210Z');
    $request->putResourceSetRequest->resourceSet->name = 'William Ortiz';
    $request->putResourceSetRequest->resourceSet->resourceSetStatus = ResourceSetStatusEnum::OUT_OF_ADMIN_SCOPE;
    $request->putResourceSetRequest->resourceSet->resourceTypeList = [
        'facilis',
        'cupiditate',
    ];
    $request->putResourceSetRequest->resourceSet->updateToken = 'qui';
    $request->putResourceSetRequest->tagList = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = PutResourceSetXAmzTargetEnum::AWSFMS20180101_PUT_RESOURCE_SET;

    $response = $sdk->sdk->putResourceSet($request);

    if ($response->putResourceSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to an Amazon Web Services resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'quis';
    $request->tagResourceRequest->tagList = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWSFMS20180101_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from an Amazon Web Services resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'distinctio';
    $request->untagResourceRequest->tagKeys = [
        'odio',
        'similique',
        'facilis',
        'vero',
    ];
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWSFMS20180101_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
