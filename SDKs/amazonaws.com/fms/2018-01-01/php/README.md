# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->associateAdminAccountRequest->adminAccount = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AssociateAdminAccountXAmzTargetEnum::AWSFMS20180101_ASSOCIATE_ADMIN_ACCOUNT;

    $response = $sdk->associateAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateAdminAccount](docs/sdk/README.md#associateadminaccount) - <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [associateThirdPartyFirewall](docs/sdk/README.md#associatethirdpartyfirewall) - Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
* [batchAssociateResource](docs/sdk/README.md#batchassociateresource) - Associate resources to a Firewall Manager resource set.
* [batchDisassociateResource](docs/sdk/README.md#batchdisassociateresource) - Disassociates resources from a Firewall Manager resource set.
* [deleteAppsList](docs/sdk/README.md#deleteappslist) - Permanently deletes an Firewall Manager applications list.
* [deleteNotificationChannel](docs/sdk/README.md#deletenotificationchannel) - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [deletePolicy](docs/sdk/README.md#deletepolicy) - Permanently deletes an Firewall Manager policy. 
* [deleteProtocolsList](docs/sdk/README.md#deleteprotocolslist) - Permanently deletes an Firewall Manager protocols list.
* [deleteResourceSet](docs/sdk/README.md#deleteresourceset) - Deletes the specified <a>ResourceSet</a>.
* [disassociateAdminAccount](docs/sdk/README.md#disassociateadminaccount) - <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
* [disassociateThirdPartyFirewall](docs/sdk/README.md#disassociatethirdpartyfirewall) - Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
* [getAdminAccount](docs/sdk/README.md#getadminaccount) - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.
* [getAdminScope](docs/sdk/README.md#getadminscope) - Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.
* [getAppsList](docs/sdk/README.md#getappslist) - Returns information about the specified Firewall Manager applications list.
* [getComplianceDetail](docs/sdk/README.md#getcompliancedetail) - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* [getNotificationChannel](docs/sdk/README.md#getnotificationchannel) - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [getPolicy](docs/sdk/README.md#getpolicy) - Returns information about the specified Firewall Manager policy.
* [getProtectionStatus](docs/sdk/README.md#getprotectionstatus) - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* [getProtocolsList](docs/sdk/README.md#getprotocolslist) - Returns information about the specified Firewall Manager protocols list.
* [getResourceSet](docs/sdk/README.md#getresourceset) - Gets information about a specific resource set.
* [getThirdPartyFirewallAssociationStatus](docs/sdk/README.md#getthirdpartyfirewallassociationstatus) - The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
* [getViolationDetails](docs/sdk/README.md#getviolationdetails) - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* [listAdminAccountsForOrganization](docs/sdk/README.md#listadminaccountsfororganization) - <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>
* [listAdminsManagingAccount](docs/sdk/README.md#listadminsmanagingaccount) - Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.
* [listAppsLists](docs/sdk/README.md#listappslists) - Returns an array of <code>AppsListDataSummary</code> objects.
* [listComplianceStatus](docs/sdk/README.md#listcompliancestatus) - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* [listDiscoveredResources](docs/sdk/README.md#listdiscoveredresources) - Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
* [listMemberAccounts](docs/sdk/README.md#listmemberaccounts) - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
* [listPolicies](docs/sdk/README.md#listpolicies) - Returns an array of <code>PolicySummary</code> objects.
* [listProtocolsLists](docs/sdk/README.md#listprotocolslists) - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* [listResourceSetResources](docs/sdk/README.md#listresourcesetresources) - Returns an array of resources that are currently associated to a resource set.
* [listResourceSets](docs/sdk/README.md#listresourcesets) - Returns an array of <code>ResourceSetSummary</code> objects.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves the list of tags for the specified Amazon Web Services resource. 
* [listThirdPartyFirewallFirewallPolicies](docs/sdk/README.md#listthirdpartyfirewallfirewallpolicies) - Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
* [putAdminAccount](docs/sdk/README.md#putadminaccount) - Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.
* [putAppsList](docs/sdk/README.md#putappslist) - Creates an Firewall Manager applications list.
* [putNotificationChannel](docs/sdk/README.md#putnotificationchannel) - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [putPolicy](docs/sdk/README.md#putpolicy) - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* [putProtocolsList](docs/sdk/README.md#putprotocolslist) - Creates an Firewall Manager protocols list.
* [putResourceSet](docs/sdk/README.md#putresourceset) - <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to an Amazon Web Services resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from an Amazon Web Services resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
