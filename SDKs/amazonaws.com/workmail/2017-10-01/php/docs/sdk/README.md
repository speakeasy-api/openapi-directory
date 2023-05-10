# SDK

## Overview

<p>WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/workmail/>
### Available Operations

* [associateDelegateToResource](#associatedelegatetoresource) - Adds a member (user or group) to the resource's set of delegates.
* [associateMemberToGroup](#associatemembertogroup) - Adds a member (user or group) to the group's set.
* [assumeImpersonationRole](#assumeimpersonationrole) - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* [cancelMailboxExportJob](#cancelmailboxexportjob) - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* [createAlias](#createalias) - Adds an alias to the set of a given member (user or group) of WorkMail.
* [createAvailabilityConfiguration](#createavailabilityconfiguration) - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [createGroup](#creategroup) - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [createImpersonationRole](#createimpersonationrole) - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* [createMobileDeviceAccessRule](#createmobiledeviceaccessrule) - Creates a new mobile device access rule for the specified WorkMail organization.
* [createOrganization](#createorganization) - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* [createResource](#createresource) - Creates a new WorkMail resource.
* [createUser](#createuser) - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [deleteAccessControlRule](#deleteaccesscontrolrule) - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteAlias](#deletealias) - Remove one or more specified aliases from a set of aliases for a given user.
* [deleteAvailabilityConfiguration](#deleteavailabilityconfiguration) - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [deleteEmailMonitoringConfiguration](#deleteemailmonitoringconfiguration) - Deletes the email monitoring configuration for a specified organization.
* [deleteGroup](#deletegroup) - Deletes a group from WorkMail.
* [deleteImpersonationRole](#deleteimpersonationrole) - Deletes an impersonation role for the given WorkMail organization.
* [deleteMailboxPermissions](#deletemailboxpermissions) - Deletes permissions granted to a member (user or group).
* [deleteMobileDeviceAccessOverride](#deletemobiledeviceaccessoverride) - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteMobileDeviceAccessRule](#deletemobiledeviceaccessrule) - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteOrganization](#deleteorganization) - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* [deleteResource](#deleteresource) - Deletes the specified resource.
* [deleteRetentionPolicy](#deleteretentionpolicy) - Deletes the specified retention policy from the specified organization.
* [deleteUser](#deleteuser) - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* [deregisterFromWorkMail](#deregisterfromworkmail) - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* [deregisterMailDomain](#deregistermaildomain) - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* [describeEmailMonitoringConfiguration](#describeemailmonitoringconfiguration) - Describes the current email monitoring configuration for a specified organization.
* [describeGroup](#describegroup) - Returns the data available for the group.
* [describeInboundDmarcSettings](#describeinbounddmarcsettings) - Lists the settings in a DMARC policy for a specified organization.
* [describeMailboxExportJob](#describemailboxexportjob) - Describes the current status of a mailbox export job.
* [describeOrganization](#describeorganization) - Provides more information regarding a given organization based on its identifier.
* [describeResource](#describeresource) - Returns the data available for the resource.
* [describeUser](#describeuser) - Provides information regarding the user.
* [disassociateDelegateFromResource](#disassociatedelegatefromresource) - Removes a member from the resource's set of delegates.
* [disassociateMemberFromGroup](#disassociatememberfromgroup) - Removes a member from a group.
* [getAccessControlEffect](#getaccesscontroleffect) - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* [getDefaultRetentionPolicy](#getdefaultretentionpolicy) - Gets the default retention policy details for the specified organization.
* [getImpersonationRole](#getimpersonationrole) - Gets the impersonation role details for the given WorkMail organization.
* [getImpersonationRoleEffect](#getimpersonationroleeffect) - Tests whether the given impersonation role can impersonate a target user.
* [getMailDomain](#getmaildomain) - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* [getMailboxDetails](#getmailboxdetails) - Requests a user's mailbox details for a specified organization and user.
* [getMobileDeviceAccessEffect](#getmobiledeviceaccesseffect) - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* [getMobileDeviceAccessOverride](#getmobiledeviceaccessoverride) - Gets the mobile device access override for the given WorkMail organization, user, and device.
* [listAccessControlRules](#listaccesscontrolrules) - Lists the access control rules for the specified organization.
* [listAliases](#listaliases) - Creates a paginated call to list the aliases associated with a given entity.
* [listAvailabilityConfigurations](#listavailabilityconfigurations) - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* [listGroupMembers](#listgroupmembers) - Returns an overview of the members of a group. Users and groups can be members of a group.
* [listGroups](#listgroups) - Returns summaries of the organization's groups.
* [listImpersonationRoles](#listimpersonationroles) - Lists all the impersonation roles for the given WorkMail organization.
* [listMailDomains](#listmaildomains) - Lists the mail domains in a given WorkMail organization.
* [listMailboxExportJobs](#listmailboxexportjobs) - Lists the mailbox export jobs started for the specified organization within the last seven days.
* [listMailboxPermissions](#listmailboxpermissions) - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* [listMobileDeviceAccessOverrides](#listmobiledeviceaccessoverrides) - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* [listMobileDeviceAccessRules](#listmobiledeviceaccessrules) - Lists the mobile device access rules for the specified WorkMail organization.
* [listOrganizations](#listorganizations) - Returns summaries of the customer's organizations.
* [listResourceDelegates](#listresourcedelegates) - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* [listResources](#listresources) - Returns summaries of the organization's resources.
* [listTagsForResource](#listtagsforresource) - Lists the tags applied to an WorkMail organization resource.
* [listUsers](#listusers) - Returns summaries of the organization's users.
* [putAccessControlRule](#putaccesscontrolrule) - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* [putEmailMonitoringConfiguration](#putemailmonitoringconfiguration) - Creates or updates the email monitoring configuration for a specified organization.
* [putInboundDmarcSettings](#putinbounddmarcsettings) - Enables or disables a DMARC policy for a given organization.
* [putMailboxPermissions](#putmailboxpermissions) - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* [putMobileDeviceAccessOverride](#putmobiledeviceaccessoverride) - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* [putRetentionPolicy](#putretentionpolicy) - Puts a retention policy to the specified organization.
* [registerMailDomain](#registermaildomain) - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* [registerToWorkMail](#registertoworkmail) - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* [resetPassword](#resetpassword) - Allows the administrator to reset the password for a user.
* [startMailboxExportJob](#startmailboxexportjob) - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* [tagResource](#tagresource) - Applies the specified tags to the specified WorkMailorganization resource.
* [testAvailabilityConfiguration](#testavailabilityconfiguration) - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* [untagResource](#untagresource) - Untags the specified tags from the specified WorkMail organization resource.
* [updateAvailabilityConfiguration](#updateavailabilityconfiguration) - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [updateDefaultMailDomain](#updatedefaultmaildomain) - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* [updateImpersonationRole](#updateimpersonationrole) - Updates an impersonation role for the given WorkMail organization.
* [updateMailboxQuota](#updatemailboxquota) - Updates a user's current mailbox quota for a specified organization and user.
* [updateMobileDeviceAccessRule](#updatemobiledeviceaccessrule) - Updates a mobile device access rule for the specified WorkMail organization.
* [updatePrimaryEmailAddress](#updateprimaryemailaddress) - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* [updateResource](#updateresource) - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

## associateDelegateToResource

Adds a member (user or group) to the resource's set of delegates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest->entityId = 'deserunt';
    $request->associateDelegateToResourceRequest->organizationId = 'suscipit';
    $request->associateDelegateToResourceRequest->resourceId = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AssociateDelegateToResourceXAmzTargetEnum::WORK_MAIL_SERVICE_ASSOCIATE_DELEGATE_TO_RESOURCE;

    $response = $sdk->sdk->associateDelegateToResource($request);

    if ($response->associateDelegateToResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateMemberToGroup

Adds a member (user or group) to the group's set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberToGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateMemberToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberToGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberToGroupRequest();
    $request->associateMemberToGroupRequest = new AssociateMemberToGroupRequest();
    $request->associateMemberToGroupRequest->groupId = 'minus';
    $request->associateMemberToGroupRequest->memberId = 'placeat';
    $request->associateMemberToGroupRequest->organizationId = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = AssociateMemberToGroupXAmzTargetEnum::WORK_MAIL_SERVICE_ASSOCIATE_MEMBER_TO_GROUP;

    $response = $sdk->sdk->associateMemberToGroup($request);

    if ($response->associateMemberToGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assumeImpersonationRole

Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssumeImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssumeImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssumeImpersonationRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssumeImpersonationRoleRequest();
    $request->assumeImpersonationRoleRequest = new AssumeImpersonationRoleRequest();
    $request->assumeImpersonationRoleRequest->impersonationRoleId = 'veritatis';
    $request->assumeImpersonationRoleRequest->organizationId = 'deserunt';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AssumeImpersonationRoleXAmzTargetEnum::WORK_MAIL_SERVICE_ASSUME_IMPERSONATION_ROLE;

    $response = $sdk->sdk->assumeImpersonationRole($request);

    if ($response->assumeImpersonationRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelMailboxExportJob

<p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelMailboxExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelMailboxExportJobRequest();
    $request->cancelMailboxExportJobRequest = new CancelMailboxExportJobRequest();
    $request->cancelMailboxExportJobRequest->clientToken = 'at';
    $request->cancelMailboxExportJobRequest->jobId = 'maiores';
    $request->cancelMailboxExportJobRequest->organizationId = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CancelMailboxExportJobXAmzTargetEnum::WORK_MAIL_SERVICE_CANCEL_MAILBOX_EXPORT_JOB;

    $response = $sdk->sdk->cancelMailboxExportJob($request);

    if ($response->cancelMailboxExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlias

Adds an alias to the set of a given member (user or group) of WorkMail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasRequest = new CreateAliasRequest();
    $request->createAliasRequest->alias = 'nam';
    $request->createAliasRequest->entityId = 'officia';
    $request->createAliasRequest->organizationId = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateAliasXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_ALIAS;

    $response = $sdk->sdk->createAlias($request);

    if ($response->createAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAvailabilityConfiguration

Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EwsAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Operations\CreateAvailabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAvailabilityConfigurationRequest();
    $request->createAvailabilityConfigurationRequest = new CreateAvailabilityConfigurationRequest();
    $request->createAvailabilityConfigurationRequest->clientToken = 'molestiae';
    $request->createAvailabilityConfigurationRequest->domainName = 'modi';
    $request->createAvailabilityConfigurationRequest->ewsProvider = new EwsAvailabilityProvider();
    $request->createAvailabilityConfigurationRequest->ewsProvider->ewsEndpoint = 'qui';
    $request->createAvailabilityConfigurationRequest->ewsProvider->ewsPassword = 'impedit';
    $request->createAvailabilityConfigurationRequest->ewsProvider->ewsUsername = 'cum';
    $request->createAvailabilityConfigurationRequest->lambdaProvider = new LambdaAvailabilityProvider();
    $request->createAvailabilityConfigurationRequest->lambdaProvider->lambdaArn = 'esse';
    $request->createAvailabilityConfigurationRequest->organizationId = 'ipsum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = CreateAvailabilityConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_AVAILABILITY_CONFIGURATION;

    $response = $sdk->sdk->createAvailabilityConfiguration($request);

    if ($response->createAvailabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->createGroupRequest = new CreateGroupRequest();
    $request->createGroupRequest->name = 'Faye Howe';
    $request->createGroupRequest->organizationId = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateGroupXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_GROUP;

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImpersonationRole

<p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImpersonationRule;
use \OpenAPI\OpenAPI\Models\Shared\AccessEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImpersonationRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateImpersonationRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImpersonationRoleRequest();
    $request->createImpersonationRoleRequest = new CreateImpersonationRoleRequest();
    $request->createImpersonationRoleRequest->clientToken = 'ipsa';
    $request->createImpersonationRoleRequest->description = 'reiciendis';
    $request->createImpersonationRoleRequest->name = 'Shaun Osinski';
    $request->createImpersonationRoleRequest->organizationId = 'corporis';
    $request->createImpersonationRoleRequest->rules = [
        new ImpersonationRule(),
    ];
    $request->createImpersonationRoleRequest->type = ImpersonationRoleTypeEnum::READ_ONLY;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateImpersonationRoleXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_IMPERSONATION_ROLE;

    $response = $sdk->sdk->createImpersonationRole($request);

    if ($response->createImpersonationRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMobileDeviceAccessRule

Creates a new mobile device access rule for the specified WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceAccessRuleEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMobileDeviceAccessRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMobileDeviceAccessRuleRequest();
    $request->createMobileDeviceAccessRuleRequest = new CreateMobileDeviceAccessRuleRequest();
    $request->createMobileDeviceAccessRuleRequest->clientToken = 'culpa';
    $request->createMobileDeviceAccessRuleRequest->description = 'doloribus';
    $request->createMobileDeviceAccessRuleRequest->deviceModels = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->createMobileDeviceAccessRuleRequest->deviceOperatingSystems = [
        'repellat',
    ];
    $request->createMobileDeviceAccessRuleRequest->deviceTypes = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->createMobileDeviceAccessRuleRequest->deviceUserAgents = [
        'molestiae',
        'velit',
    ];
    $request->createMobileDeviceAccessRuleRequest->effect = MobileDeviceAccessRuleEffectEnum::DENY;
    $request->createMobileDeviceAccessRuleRequest->name = 'Beatrice Brown';
    $request->createMobileDeviceAccessRuleRequest->notDeviceModels = [
        'odit',
        'quo',
    ];
    $request->createMobileDeviceAccessRuleRequest->notDeviceOperatingSystems = [
        'tenetur',
    ];
    $request->createMobileDeviceAccessRuleRequest->notDeviceTypes = [
        'id',
        'possimus',
    ];
    $request->createMobileDeviceAccessRuleRequest->notDeviceUserAgents = [
        'quasi',
    ];
    $request->createMobileDeviceAccessRuleRequest->organizationId = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = CreateMobileDeviceAccessRuleXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_MOBILE_DEVICE_ACCESS_RULE;

    $response = $sdk->sdk->createMobileDeviceAccessRule($request);

    if ($response->createMobileDeviceAccessRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganization

<p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Domain;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationRequest();
    $request->createOrganizationRequest = new CreateOrganizationRequest();
    $request->createOrganizationRequest->alias = 'praesentium';
    $request->createOrganizationRequest->clientToken = 'voluptatibus';
    $request->createOrganizationRequest->directoryId = 'ipsa';
    $request->createOrganizationRequest->domains = [
        new Domain(),
        new Domain(),
        new Domain(),
    ];
    $request->createOrganizationRequest->enableInteroperability = false;
    $request->createOrganizationRequest->kmsKeyArn = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateOrganizationXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_ORGANIZATION;

    $response = $sdk->sdk->createOrganization($request);

    if ($response->createOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResource

Creates a new WorkMail resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceRequest();
    $request->createResourceRequest = new CreateResourceRequest();
    $request->createResourceRequest->name = 'Miss Valerie Kshlerin';
    $request->createResourceRequest->organizationId = 'accusamus';
    $request->createResourceRequest->type = ResourceTypeEnum::ROOM;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = CreateResourceXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_RESOURCE;

    $response = $sdk->sdk->createResource($request);

    if ($response->createResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->createUserRequest = new CreateUserRequest();
    $request->createUserRequest->displayName = 'modi';
    $request->createUserRequest->name = 'Dr. Jordan Von';
    $request->createUserRequest->organizationId = 'veritatis';
    $request->createUserRequest->password = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateUserXAmzTargetEnum::WORK_MAIL_SERVICE_CREATE_USER;

    $response = $sdk->sdk->createUser($request);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessControlRule

<p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessControlRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccessControlRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessControlRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessControlRuleRequest();
    $request->deleteAccessControlRuleRequest = new DeleteAccessControlRuleRequest();
    $request->deleteAccessControlRuleRequest->name = 'Marty Green';
    $request->deleteAccessControlRuleRequest->organizationId = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DeleteAccessControlRuleXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_ACCESS_CONTROL_RULE;

    $response = $sdk->sdk->deleteAccessControlRule($request);

    if ($response->deleteAccessControlRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlias

Remove one or more specified aliases from a set of aliases for a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAliasRequest();
    $request->deleteAliasRequest = new DeleteAliasRequest();
    $request->deleteAliasRequest->alias = 'fugit';
    $request->deleteAliasRequest->entityId = 'dolorum';
    $request->deleteAliasRequest->organizationId = 'excepturi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DeleteAliasXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_ALIAS;

    $response = $sdk->sdk->deleteAlias($request);

    if ($response->deleteAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAvailabilityConfiguration

Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAvailabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAvailabilityConfigurationRequest();
    $request->deleteAvailabilityConfigurationRequest = new DeleteAvailabilityConfigurationRequest();
    $request->deleteAvailabilityConfigurationRequest->domainName = 'eligendi';
    $request->deleteAvailabilityConfigurationRequest->organizationId = 'sint';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = DeleteAvailabilityConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_AVAILABILITY_CONFIGURATION;

    $response = $sdk->sdk->deleteAvailabilityConfiguration($request);

    if ($response->deleteAvailabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmailMonitoringConfiguration

Deletes the email monitoring configuration for a specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmailMonitoringConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmailMonitoringConfigurationRequest();
    $request->deleteEmailMonitoringConfigurationRequest = new DeleteEmailMonitoringConfigurationRequest();
    $request->deleteEmailMonitoringConfigurationRequest->organizationId = 'a';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeleteEmailMonitoringConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_EMAIL_MONITORING_CONFIGURATION;

    $response = $sdk->sdk->deleteEmailMonitoringConfiguration($request);

    if ($response->deleteEmailMonitoringConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

Deletes a group from WorkMail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->deleteGroupRequest = new DeleteGroupRequest();
    $request->deleteGroupRequest->groupId = 'magnam';
    $request->deleteGroupRequest->organizationId = 'cumque';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteGroupXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_GROUP;

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->deleteGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImpersonationRole

Deletes an impersonation role for the given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImpersonationRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImpersonationRoleRequest();
    $request->deleteImpersonationRoleRequest = new DeleteImpersonationRoleRequest();
    $request->deleteImpersonationRoleRequest->impersonationRoleId = 'enim';
    $request->deleteImpersonationRoleRequest->organizationId = 'accusamus';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DeleteImpersonationRoleXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_IMPERSONATION_ROLE;

    $response = $sdk->sdk->deleteImpersonationRole($request);

    if ($response->deleteImpersonationRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMailboxPermissions

Deletes permissions granted to a member (user or group).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMailboxPermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMailboxPermissionsRequest();
    $request->deleteMailboxPermissionsRequest = new DeleteMailboxPermissionsRequest();
    $request->deleteMailboxPermissionsRequest->entityId = 'sapiente';
    $request->deleteMailboxPermissionsRequest->granteeId = 'amet';
    $request->deleteMailboxPermissionsRequest->organizationId = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DeleteMailboxPermissionsXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_MAILBOX_PERMISSIONS;

    $response = $sdk->sdk->deleteMailboxPermissions($request);

    if ($response->deleteMailboxPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMobileDeviceAccessOverride

<p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMobileDeviceAccessOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMobileDeviceAccessOverrideRequest();
    $request->deleteMobileDeviceAccessOverrideRequest = new DeleteMobileDeviceAccessOverrideRequest();
    $request->deleteMobileDeviceAccessOverrideRequest->deviceId = 'magnam';
    $request->deleteMobileDeviceAccessOverrideRequest->organizationId = 'distinctio';
    $request->deleteMobileDeviceAccessOverrideRequest->userId = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteMobileDeviceAccessOverrideXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_MOBILE_DEVICE_ACCESS_OVERRIDE;

    $response = $sdk->sdk->deleteMobileDeviceAccessOverride($request);

    if ($response->deleteMobileDeviceAccessOverrideResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMobileDeviceAccessRule

<p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMobileDeviceAccessRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMobileDeviceAccessRuleRequest();
    $request->deleteMobileDeviceAccessRuleRequest = new DeleteMobileDeviceAccessRuleRequest();
    $request->deleteMobileDeviceAccessRuleRequest->mobileDeviceAccessRuleId = 'aspernatur';
    $request->deleteMobileDeviceAccessRuleRequest->organizationId = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DeleteMobileDeviceAccessRuleXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_MOBILE_DEVICE_ACCESS_RULE;

    $response = $sdk->sdk->deleteMobileDeviceAccessRule($request);

    if ($response->deleteMobileDeviceAccessRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganization

Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationRequest();
    $request->deleteOrganizationRequest = new DeleteOrganizationRequest();
    $request->deleteOrganizationRequest->clientToken = 'accusantium';
    $request->deleteOrganizationRequest->deleteDirectory = false;
    $request->deleteOrganizationRequest->organizationId = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DeleteOrganizationXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_ORGANIZATION;

    $response = $sdk->sdk->deleteOrganization($request);

    if ($response->deleteOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResource

Deletes the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceRequest();
    $request->deleteResourceRequest = new DeleteResourceRequest();
    $request->deleteResourceRequest->organizationId = 'nemo';
    $request->deleteResourceRequest->resourceId = 'quasi';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DeleteResourceXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_RESOURCE;

    $response = $sdk->sdk->deleteResource($request);

    if ($response->deleteResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRetentionPolicy

Deletes the specified retention policy from the specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRetentionPolicyRequest();
    $request->deleteRetentionPolicyRequest = new DeleteRetentionPolicyRequest();
    $request->deleteRetentionPolicyRequest->id = '711e5b7f-d2ed-4028-921c-ddc692601fb5';
    $request->deleteRetentionPolicyRequest->organizationId = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteRetentionPolicyXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_RETENTION_POLICY;

    $response = $sdk->sdk->deleteRetentionPolicy($request);

    if ($response->deleteRetentionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

<p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->organizationId = 'fugiat';
    $request->deleteUserRequest->userId = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::WORK_MAIL_SERVICE_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->deleteUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterFromWorkMail

Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterFromWorkMailRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterFromWorkMailRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterFromWorkMailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterFromWorkMailRequest();
    $request->deregisterFromWorkMailRequest = new DeregisterFromWorkMailRequest();
    $request->deregisterFromWorkMailRequest->entityId = 'quis';
    $request->deregisterFromWorkMailRequest->organizationId = 'totam';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DeregisterFromWorkMailXAmzTargetEnum::WORK_MAIL_SERVICE_DEREGISTER_FROM_WORK_MAIL;

    $response = $sdk->sdk->deregisterFromWorkMail($request);

    if ($response->deregisterFromWorkMailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterMailDomain

Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterMailDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterMailDomainRequest();
    $request->deregisterMailDomainRequest = new DeregisterMailDomainRequest();
    $request->deregisterMailDomainRequest->domainName = 'minus';
    $request->deregisterMailDomainRequest->organizationId = 'quam';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DeregisterMailDomainXAmzTargetEnum::WORK_MAIL_SERVICE_DEREGISTER_MAIL_DOMAIN;

    $response = $sdk->sdk->deregisterMailDomain($request);

    if ($response->deregisterMailDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEmailMonitoringConfiguration

Describes the current email monitoring configuration for a specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEmailMonitoringConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEmailMonitoringConfigurationRequest();
    $request->describeEmailMonitoringConfigurationRequest = new DescribeEmailMonitoringConfigurationRequest();
    $request->describeEmailMonitoringConfigurationRequest->organizationId = 'perspiciatis';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DescribeEmailMonitoringConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_EMAIL_MONITORING_CONFIGURATION;

    $response = $sdk->sdk->describeEmailMonitoringConfiguration($request);

    if ($response->describeEmailMonitoringConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGroup

Returns the data available for the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGroupRequest();
    $request->describeGroupRequest = new DescribeGroupRequest();
    $request->describeGroupRequest->groupId = 'rerum';
    $request->describeGroupRequest->organizationId = 'adipisci';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DescribeGroupXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_GROUP;

    $response = $sdk->sdk->describeGroup($request);

    if ($response->describeGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInboundDmarcSettings

Lists the settings in a DMARC policy for a specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInboundDmarcSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInboundDmarcSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInboundDmarcSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInboundDmarcSettingsRequest();
    $request->describeInboundDmarcSettingsRequest = new DescribeInboundDmarcSettingsRequest();
    $request->describeInboundDmarcSettingsRequest->organizationId = 'provident';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeInboundDmarcSettingsXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_INBOUND_DMARC_SETTINGS;

    $response = $sdk->sdk->describeInboundDmarcSettings($request);

    if ($response->describeInboundDmarcSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMailboxExportJob

Describes the current status of a mailbox export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMailboxExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMailboxExportJobRequest();
    $request->describeMailboxExportJobRequest = new DescribeMailboxExportJobRequest();
    $request->describeMailboxExportJobRequest->jobId = 'dolorem';
    $request->describeMailboxExportJobRequest->organizationId = 'dolor';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DescribeMailboxExportJobXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_MAILBOX_EXPORT_JOB;

    $response = $sdk->sdk->describeMailboxExportJob($request);

    if ($response->describeMailboxExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganization

Provides more information regarding a given organization based on its identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationRequest();
    $request->describeOrganizationRequest = new DescribeOrganizationRequest();
    $request->describeOrganizationRequest->organizationId = 'reiciendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeOrganizationXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_ORGANIZATION;

    $response = $sdk->sdk->describeOrganization($request);

    if ($response->describeOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResource

Returns the data available for the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourceRequest();
    $request->describeResourceRequest = new DescribeResourceRequest();
    $request->describeResourceRequest->organizationId = 'odio';
    $request->describeResourceRequest->resourceId = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DescribeResourceXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_RESOURCE;

    $response = $sdk->sdk->describeResource($request);

    if ($response->describeResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUser

Provides information regarding the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserRequest();
    $request->describeUserRequest = new DescribeUserRequest();
    $request->describeUserRequest->organizationId = 'sit';
    $request->describeUserRequest->userId = 'fugiat';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DescribeUserXAmzTargetEnum::WORK_MAIL_SERVICE_DESCRIBE_USER;

    $response = $sdk->sdk->describeUser($request);

    if ($response->describeUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDelegateFromResource

Removes a member from the resource's set of delegates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDelegateFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateDelegateFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDelegateFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDelegateFromResourceRequest();
    $request->disassociateDelegateFromResourceRequest = new DisassociateDelegateFromResourceRequest();
    $request->disassociateDelegateFromResourceRequest->entityId = 'omnis';
    $request->disassociateDelegateFromResourceRequest->organizationId = 'necessitatibus';
    $request->disassociateDelegateFromResourceRequest->resourceId = 'distinctio';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DisassociateDelegateFromResourceXAmzTargetEnum::WORK_MAIL_SERVICE_DISASSOCIATE_DELEGATE_FROM_RESOURCE;

    $response = $sdk->sdk->disassociateDelegateFromResource($request);

    if ($response->disassociateDelegateFromResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMemberFromGroup

Removes a member from a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateMemberFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberFromGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMemberFromGroupRequest();
    $request->disassociateMemberFromGroupRequest = new DisassociateMemberFromGroupRequest();
    $request->disassociateMemberFromGroupRequest->groupId = 'aspernatur';
    $request->disassociateMemberFromGroupRequest->memberId = 'perferendis';
    $request->disassociateMemberFromGroupRequest->organizationId = 'amet';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DisassociateMemberFromGroupXAmzTargetEnum::WORK_MAIL_SERVICE_DISASSOCIATE_MEMBER_FROM_GROUP;

    $response = $sdk->sdk->disassociateMemberFromGroup($request);

    if ($response->disassociateMemberFromGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccessControlEffect

Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessControlEffectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAccessControlEffectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessControlEffectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessControlEffectRequest();
    $request->getAccessControlEffectRequest = new GetAccessControlEffectRequest();
    $request->getAccessControlEffectRequest->action = 'minima';
    $request->getAccessControlEffectRequest->impersonationRoleId = 'repellendus';
    $request->getAccessControlEffectRequest->ipAddress = 'totam';
    $request->getAccessControlEffectRequest->organizationId = 'similique';
    $request->getAccessControlEffectRequest->userId = 'alias';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetAccessControlEffectXAmzTargetEnum::WORK_MAIL_SERVICE_GET_ACCESS_CONTROL_EFFECT;

    $response = $sdk->sdk->getAccessControlEffect($request);

    if ($response->getAccessControlEffectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultRetentionPolicy

Gets the default retention policy details for the specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDefaultRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultRetentionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDefaultRetentionPolicyRequest();
    $request->getDefaultRetentionPolicyRequest = new GetDefaultRetentionPolicyRequest();
    $request->getDefaultRetentionPolicyRequest->organizationId = 'dolorum';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = GetDefaultRetentionPolicyXAmzTargetEnum::WORK_MAIL_SERVICE_GET_DEFAULT_RETENTION_POLICY;

    $response = $sdk->sdk->getDefaultRetentionPolicy($request);

    if ($response->getDefaultRetentionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImpersonationRole

Gets the impersonation role details for the given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImpersonationRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImpersonationRoleRequest();
    $request->getImpersonationRoleRequest = new GetImpersonationRoleRequest();
    $request->getImpersonationRoleRequest->impersonationRoleId = 'amet';
    $request->getImpersonationRoleRequest->organizationId = 'tempore';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetImpersonationRoleXAmzTargetEnum::WORK_MAIL_SERVICE_GET_IMPERSONATION_ROLE;

    $response = $sdk->sdk->getImpersonationRole($request);

    if ($response->getImpersonationRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImpersonationRoleEffect

Tests whether the given impersonation role can impersonate a target user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImpersonationRoleEffectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetImpersonationRoleEffectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImpersonationRoleEffectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImpersonationRoleEffectRequest();
    $request->getImpersonationRoleEffectRequest = new GetImpersonationRoleEffectRequest();
    $request->getImpersonationRoleEffectRequest->impersonationRoleId = 'sit';
    $request->getImpersonationRoleEffectRequest->organizationId = 'expedita';
    $request->getImpersonationRoleEffectRequest->targetUser = 'neque';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = GetImpersonationRoleEffectXAmzTargetEnum::WORK_MAIL_SERVICE_GET_IMPERSONATION_ROLE_EFFECT;

    $response = $sdk->sdk->getImpersonationRoleEffect($request);

    if ($response->getImpersonationRoleEffectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMailDomain

Gets details for a mail domain, including domain records required to configure your domain with recommended security.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMailDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMailDomainRequest();
    $request->getMailDomainRequest = new GetMailDomainRequest();
    $request->getMailDomainRequest->domainName = 'incidunt';
    $request->getMailDomainRequest->organizationId = 'qui';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = GetMailDomainXAmzTargetEnum::WORK_MAIL_SERVICE_GET_MAIL_DOMAIN;

    $response = $sdk->sdk->getMailDomain($request);

    if ($response->getMailDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMailboxDetails

Requests a user's mailbox details for a specified organization and user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMailboxDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMailboxDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMailboxDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMailboxDetailsRequest();
    $request->getMailboxDetailsRequest = new GetMailboxDetailsRequest();
    $request->getMailboxDetailsRequest->organizationId = 'incidunt';
    $request->getMailboxDetailsRequest->userId = 'aspernatur';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = GetMailboxDetailsXAmzTargetEnum::WORK_MAIL_SERVICE_GET_MAILBOX_DETAILS;

    $response = $sdk->sdk->getMailboxDetails($request);

    if ($response->getMailboxDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMobileDeviceAccessEffect

Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMobileDeviceAccessEffectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMobileDeviceAccessEffectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMobileDeviceAccessEffectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMobileDeviceAccessEffectRequest();
    $request->getMobileDeviceAccessEffectRequest = new GetMobileDeviceAccessEffectRequest();
    $request->getMobileDeviceAccessEffectRequest->deviceModel = 'qui';
    $request->getMobileDeviceAccessEffectRequest->deviceOperatingSystem = 'neque';
    $request->getMobileDeviceAccessEffectRequest->deviceType = 'fugit';
    $request->getMobileDeviceAccessEffectRequest->deviceUserAgent = 'magni';
    $request->getMobileDeviceAccessEffectRequest->organizationId = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = GetMobileDeviceAccessEffectXAmzTargetEnum::WORK_MAIL_SERVICE_GET_MOBILE_DEVICE_ACCESS_EFFECT;

    $response = $sdk->sdk->getMobileDeviceAccessEffect($request);

    if ($response->getMobileDeviceAccessEffectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMobileDeviceAccessOverride

Gets the mobile device access override for the given WorkMail organization, user, and device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMobileDeviceAccessOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMobileDeviceAccessOverrideRequest();
    $request->getMobileDeviceAccessOverrideRequest = new GetMobileDeviceAccessOverrideRequest();
    $request->getMobileDeviceAccessOverrideRequest->deviceId = 'nobis';
    $request->getMobileDeviceAccessOverrideRequest->organizationId = 'et';
    $request->getMobileDeviceAccessOverrideRequest->userId = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = GetMobileDeviceAccessOverrideXAmzTargetEnum::WORK_MAIL_SERVICE_GET_MOBILE_DEVICE_ACCESS_OVERRIDE;

    $response = $sdk->sdk->getMobileDeviceAccessOverride($request);

    if ($response->getMobileDeviceAccessOverrideResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessControlRules

Lists the access control rules for the specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessControlRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccessControlRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessControlRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessControlRulesRequest();
    $request->listAccessControlRulesRequest = new ListAccessControlRulesRequest();
    $request->listAccessControlRulesRequest->organizationId = 'delectus';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListAccessControlRulesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_ACCESS_CONTROL_RULES;

    $response = $sdk->sdk->listAccessControlRules($request);

    if ($response->listAccessControlRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAliases

Creates a paginated call to list the aliases associated with a given entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAliasesRequest();
    $request->listAliasesRequest = new ListAliasesRequest();
    $request->listAliasesRequest->entityId = 'aut';
    $request->listAliasesRequest->maxResults = 555649;
    $request->listAliasesRequest->nextToken = 'itaque';
    $request->listAliasesRequest->organizationId = 'consequatur';
    $request->maxResults = 'est';
    $request->nextToken = 'repellendus';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListAliasesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_ALIASES;

    $response = $sdk->sdk->listAliases($request);

    if ($response->listAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailabilityConfigurations

List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailabilityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAvailabilityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailabilityConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailabilityConfigurationsRequest();
    $request->listAvailabilityConfigurationsRequest = new ListAvailabilityConfigurationsRequest();
    $request->listAvailabilityConfigurationsRequest->maxResults = 512393;
    $request->listAvailabilityConfigurationsRequest->nextToken = 'odio';
    $request->listAvailabilityConfigurationsRequest->organizationId = 'occaecati';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = ListAvailabilityConfigurationsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_AVAILABILITY_CONFIGURATIONS;

    $response = $sdk->sdk->listAvailabilityConfigurations($request);

    if ($response->listAvailabilityConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupMembers

Returns an overview of the members of a group. Users and groups can be members of a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupMembersRequest();
    $request->listGroupMembersRequest = new ListGroupMembersRequest();
    $request->listGroupMembersRequest->groupId = 'vero';
    $request->listGroupMembersRequest->maxResults = 949319;
    $request->listGroupMembersRequest->nextToken = 'dignissimos';
    $request->listGroupMembersRequest->organizationId = 'hic';
    $request->maxResults = 'distinctio';
    $request->nextToken = 'quod';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = ListGroupMembersXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_GROUP_MEMBERS;

    $response = $sdk->sdk->listGroupMembers($request);

    if ($response->listGroupMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

Returns summaries of the organization's groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->listGroupsRequest = new ListGroupsRequest();
    $request->listGroupsRequest->maxResults = 848944;
    $request->listGroupsRequest->nextToken = 'sequi';
    $request->listGroupsRequest->organizationId = 'natus';
    $request->maxResults = 'impedit';
    $request->nextToken = 'aut';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListGroupsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_GROUPS;

    $response = $sdk->sdk->listGroups($request);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImpersonationRoles

Lists all the impersonation roles for the given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImpersonationRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImpersonationRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImpersonationRolesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImpersonationRolesRequest();
    $request->listImpersonationRolesRequest = new ListImpersonationRolesRequest();
    $request->listImpersonationRolesRequest->maxResults = 478370;
    $request->listImpersonationRolesRequest->nextToken = 'eligendi';
    $request->listImpersonationRolesRequest->organizationId = 'ducimus';
    $request->maxResults = 'alias';
    $request->nextToken = 'officia';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListImpersonationRolesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_IMPERSONATION_ROLES;

    $response = $sdk->sdk->listImpersonationRoles($request);

    if ($response->listImpersonationRolesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMailDomains

Lists the mail domains in a given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMailDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMailDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMailDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMailDomainsRequest();
    $request->listMailDomainsRequest = new ListMailDomainsRequest();
    $request->listMailDomainsRequest->maxResults = 189848;
    $request->listMailDomainsRequest->nextToken = 'ex';
    $request->listMailDomainsRequest->organizationId = 'laudantium';
    $request->maxResults = 'dicta';
    $request->nextToken = 'dolor';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = ListMailDomainsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_MAIL_DOMAINS;

    $response = $sdk->sdk->listMailDomains($request);

    if ($response->listMailDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMailboxExportJobs

Lists the mailbox export jobs started for the specified organization within the last seven days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMailboxExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMailboxExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMailboxExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMailboxExportJobsRequest();
    $request->listMailboxExportJobsRequest = new ListMailboxExportJobsRequest();
    $request->listMailboxExportJobsRequest->maxResults = 960835;
    $request->listMailboxExportJobsRequest->nextToken = 'quisquam';
    $request->listMailboxExportJobsRequest->organizationId = 'saepe';
    $request->maxResults = 'ea';
    $request->nextToken = 'impedit';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListMailboxExportJobsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_MAILBOX_EXPORT_JOBS;

    $response = $sdk->sdk->listMailboxExportJobs($request);

    if ($response->listMailboxExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMailboxPermissions

Lists the mailbox permissions associated with a user, group, or resource mailbox.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMailboxPermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMailboxPermissionsRequest();
    $request->listMailboxPermissionsRequest = new ListMailboxPermissionsRequest();
    $request->listMailboxPermissionsRequest->entityId = 'consectetur';
    $request->listMailboxPermissionsRequest->maxResults = 926213;
    $request->listMailboxPermissionsRequest->nextToken = 'aspernatur';
    $request->listMailboxPermissionsRequest->organizationId = 'minima';
    $request->maxResults = 'eaque';
    $request->nextToken = 'a';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = ListMailboxPermissionsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_MAILBOX_PERMISSIONS;

    $response = $sdk->sdk->listMailboxPermissions($request);

    if ($response->listMailboxPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMobileDeviceAccessOverrides

Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMobileDeviceAccessOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMobileDeviceAccessOverridesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMobileDeviceAccessOverridesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMobileDeviceAccessOverridesRequest();
    $request->listMobileDeviceAccessOverridesRequest = new ListMobileDeviceAccessOverridesRequest();
    $request->listMobileDeviceAccessOverridesRequest->deviceId = 'accusamus';
    $request->listMobileDeviceAccessOverridesRequest->maxResults = 79522;
    $request->listMobileDeviceAccessOverridesRequest->nextToken = 'non';
    $request->listMobileDeviceAccessOverridesRequest->organizationId = 'et';
    $request->listMobileDeviceAccessOverridesRequest->userId = 'dolorum';
    $request->maxResults = 'laborum';
    $request->nextToken = 'placeat';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListMobileDeviceAccessOverridesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_OVERRIDES;

    $response = $sdk->sdk->listMobileDeviceAccessOverrides($request);

    if ($response->listMobileDeviceAccessOverridesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMobileDeviceAccessRules

Lists the mobile device access rules for the specified WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMobileDeviceAccessRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMobileDeviceAccessRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMobileDeviceAccessRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMobileDeviceAccessRulesRequest();
    $request->listMobileDeviceAccessRulesRequest = new ListMobileDeviceAccessRulesRequest();
    $request->listMobileDeviceAccessRulesRequest->organizationId = 'voluptas';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListMobileDeviceAccessRulesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_RULES;

    $response = $sdk->sdk->listMobileDeviceAccessRules($request);

    if ($response->listMobileDeviceAccessRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizations

Returns summaries of the customer's organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOrganizationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationsRequest();
    $request->listOrganizationsRequest = new ListOrganizationsRequest();
    $request->listOrganizationsRequest->maxResults = 476477;
    $request->listOrganizationsRequest->nextToken = 'magnam';
    $request->maxResults = 'odio';
    $request->nextToken = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListOrganizationsXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_ORGANIZATIONS;

    $response = $sdk->sdk->listOrganizations($request);

    if ($response->listOrganizationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceDelegates

Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDelegatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceDelegatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDelegatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceDelegatesRequest();
    $request->listResourceDelegatesRequest = new ListResourceDelegatesRequest();
    $request->listResourceDelegatesRequest->maxResults = 283519;
    $request->listResourceDelegatesRequest->nextToken = 'eum';
    $request->listResourceDelegatesRequest->organizationId = 'suscipit';
    $request->listResourceDelegatesRequest->resourceId = 'assumenda';
    $request->maxResults = 'eos';
    $request->nextToken = 'praesentium';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListResourceDelegatesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_RESOURCE_DELEGATES;

    $response = $sdk->sdk->listResourceDelegates($request);

    if ($response->listResourceDelegatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResources

Returns summaries of the organization's resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesRequest();
    $request->listResourcesRequest = new ListResourcesRequest();
    $request->listResourcesRequest->maxResults = 847276;
    $request->listResourcesRequest->nextToken = 'quo';
    $request->listResourcesRequest->organizationId = 'fuga';
    $request->maxResults = 'eius';
    $request->nextToken = 'eos';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListResourcesXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_RESOURCES;

    $response = $sdk->sdk->listResources($request);

    if ($response->listResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags applied to an WorkMail organization resource.

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
    $request->listTagsForResourceRequest->resourceARN = 'aspernatur';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsers

Returns summaries of the organization's users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersRequest();
    $request->listUsersRequest = new ListUsersRequest();
    $request->listUsersRequest->maxResults = 490819;
    $request->listUsersRequest->nextToken = 'inventore';
    $request->listUsersRequest->organizationId = 'nihil';
    $request->maxResults = 'totam';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ListUsersXAmzTargetEnum::WORK_MAIL_SERVICE_LIST_USERS;

    $response = $sdk->sdk->listUsers($request);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccessControlRule

Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccessControlRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAccessControlRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlRuleEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAccessControlRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccessControlRuleRequest();
    $request->putAccessControlRuleRequest = new PutAccessControlRuleRequest();
    $request->putAccessControlRuleRequest->actions = [
        'accusantium',
        'porro',
    ];
    $request->putAccessControlRuleRequest->description = 'eum';
    $request->putAccessControlRuleRequest->effect = AccessControlRuleEffectEnum::DENY;
    $request->putAccessControlRuleRequest->impersonationRoleIds = [
        'consequuntur',
        'deleniti',
        'fugit',
    ];
    $request->putAccessControlRuleRequest->ipRanges = [
        'mollitia',
        'incidunt',
        'atque',
    ];
    $request->putAccessControlRuleRequest->name = 'Cathy Huel';
    $request->putAccessControlRuleRequest->notActions = [
        'ratione',
    ];
    $request->putAccessControlRuleRequest->notImpersonationRoleIds = [
        'saepe',
    ];
    $request->putAccessControlRuleRequest->notIpRanges = [
        'atque',
        'et',
        'esse',
    ];
    $request->putAccessControlRuleRequest->notUserIds = [
        'accusamus',
        'veritatis',
        'esse',
        'quod',
    ];
    $request->putAccessControlRuleRequest->organizationId = 'nam';
    $request->putAccessControlRuleRequest->userIds = [
        'aliquid',
        'quasi',
        'saepe',
        'vel',
    ];
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = PutAccessControlRuleXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_ACCESS_CONTROL_RULE;

    $response = $sdk->sdk->putAccessControlRule($request);

    if ($response->putAccessControlRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmailMonitoringConfiguration

Creates or updates the email monitoring configuration for a specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutEmailMonitoringConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEmailMonitoringConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmailMonitoringConfigurationRequest();
    $request->putEmailMonitoringConfigurationRequest = new PutEmailMonitoringConfigurationRequest();
    $request->putEmailMonitoringConfigurationRequest->logGroupArn = 'sit';
    $request->putEmailMonitoringConfigurationRequest->organizationId = 'culpa';
    $request->putEmailMonitoringConfigurationRequest->roleArn = 'tempore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = PutEmailMonitoringConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_EMAIL_MONITORING_CONFIGURATION;

    $response = $sdk->sdk->putEmailMonitoringConfiguration($request);

    if ($response->putEmailMonitoringConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInboundDmarcSettings

Enables or disables a DMARC policy for a given organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInboundDmarcSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutInboundDmarcSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutInboundDmarcSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInboundDmarcSettingsRequest();
    $request->putInboundDmarcSettingsRequest = new PutInboundDmarcSettingsRequest();
    $request->putInboundDmarcSettingsRequest->enforced = false;
    $request->putInboundDmarcSettingsRequest->organizationId = 'consectetur';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = PutInboundDmarcSettingsXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_INBOUND_DMARC_SETTINGS;

    $response = $sdk->sdk->putInboundDmarcSettings($request);

    if ($response->putInboundDmarcSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMailboxPermissions

Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutMailboxPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutMailboxPermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMailboxPermissionsRequest();
    $request->putMailboxPermissionsRequest = new PutMailboxPermissionsRequest();
    $request->putMailboxPermissionsRequest->entityId = 'quasi';
    $request->putMailboxPermissionsRequest->granteeId = 'a';
    $request->putMailboxPermissionsRequest->organizationId = 'error';
    $request->putMailboxPermissionsRequest->permissionValues = [
        PermissionTypeEnum::SEND_ON_BEHALF,
        PermissionTypeEnum::SEND_ON_BEHALF,
        PermissionTypeEnum::FULL_ACCESS,
    ];
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = PutMailboxPermissionsXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_MAILBOX_PERMISSIONS;

    $response = $sdk->sdk->putMailboxPermissions($request);

    if ($response->putMailboxPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMobileDeviceAccessOverride

Creates or updates a mobile device access override for the given WorkMail organization, user, and device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutMobileDeviceAccessOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceAccessRuleEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutMobileDeviceAccessOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMobileDeviceAccessOverrideRequest();
    $request->putMobileDeviceAccessOverrideRequest = new PutMobileDeviceAccessOverrideRequest();
    $request->putMobileDeviceAccessOverrideRequest->description = 'culpa';
    $request->putMobileDeviceAccessOverrideRequest->deviceId = 'aliquid';
    $request->putMobileDeviceAccessOverrideRequest->effect = MobileDeviceAccessRuleEffectEnum::DENY;
    $request->putMobileDeviceAccessOverrideRequest->organizationId = 'quae';
    $request->putMobileDeviceAccessOverrideRequest->userId = 'earum';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = PutMobileDeviceAccessOverrideXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_MOBILE_DEVICE_ACCESS_OVERRIDE;

    $response = $sdk->sdk->putMobileDeviceAccessOverride($request);

    if ($response->putMobileDeviceAccessOverrideResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRetentionPolicy

Puts a retention policy to the specified organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FolderConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RetentionActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FolderNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRetentionPolicyRequest();
    $request->putRetentionPolicyRequest = new PutRetentionPolicyRequest();
    $request->putRetentionPolicyRequest->description = 'aliquam';
    $request->putRetentionPolicyRequest->folderConfigurations = [
        new FolderConfiguration(),
        new FolderConfiguration(),
        new FolderConfiguration(),
        new FolderConfiguration(),
    ];
    $request->putRetentionPolicyRequest->id = '15756082-d68e-4a19-b1d1-7051339d0808';
    $request->putRetentionPolicyRequest->name = 'Iris Bernhard';
    $request->putRetentionPolicyRequest->organizationId = 'voluptatem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = PutRetentionPolicyXAmzTargetEnum::WORK_MAIL_SERVICE_PUT_RETENTION_POLICY;

    $response = $sdk->sdk->putRetentionPolicy($request);

    if ($response->putRetentionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerMailDomain

Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterMailDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterMailDomainRequest();
    $request->registerMailDomainRequest = new RegisterMailDomainRequest();
    $request->registerMailDomainRequest->clientToken = 'dignissimos';
    $request->registerMailDomainRequest->domainName = 'dicta';
    $request->registerMailDomainRequest->organizationId = 'maiores';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = RegisterMailDomainXAmzTargetEnum::WORK_MAIL_SERVICE_REGISTER_MAIL_DOMAIN;

    $response = $sdk->sdk->registerMailDomain($request);

    if ($response->registerMailDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerToWorkMail

<p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterToWorkMailRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterToWorkMailRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterToWorkMailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterToWorkMailRequest();
    $request->registerToWorkMailRequest = new RegisterToWorkMailRequest();
    $request->registerToWorkMailRequest->email = 'Carson_Sipes@gmail.com';
    $request->registerToWorkMailRequest->entityId = 'dignissimos';
    $request->registerToWorkMailRequest->organizationId = 'officia';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = RegisterToWorkMailXAmzTargetEnum::WORK_MAIL_SERVICE_REGISTER_TO_WORK_MAIL;

    $response = $sdk->sdk->registerToWorkMail($request);

    if ($response->registerToWorkMailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetPassword

Allows the administrator to reset the password for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetPasswordRequest();
    $request->resetPasswordRequest = new ResetPasswordRequest();
    $request->resetPasswordRequest->organizationId = 'ab';
    $request->resetPasswordRequest->password = 'adipisci';
    $request->resetPasswordRequest->userId = 'fuga';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ResetPasswordXAmzTargetEnum::WORK_MAIL_SERVICE_RESET_PASSWORD;

    $response = $sdk->sdk->resetPassword($request);

    if ($response->resetPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMailboxExportJob

Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMailboxExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartMailboxExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMailboxExportJobRequest();
    $request->startMailboxExportJobRequest = new StartMailboxExportJobRequest();
    $request->startMailboxExportJobRequest->clientToken = 'fugiat';
    $request->startMailboxExportJobRequest->description = 'vel';
    $request->startMailboxExportJobRequest->entityId = 'ducimus';
    $request->startMailboxExportJobRequest->kmsKeyArn = 'quos';
    $request->startMailboxExportJobRequest->organizationId = 'vel';
    $request->startMailboxExportJobRequest->roleArn = 'labore';
    $request->startMailboxExportJobRequest->s3BucketName = 'possimus';
    $request->startMailboxExportJobRequest->s3Prefix = 'facilis';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = StartMailboxExportJobXAmzTargetEnum::WORK_MAIL_SERVICE_START_MAILBOX_EXPORT_JOB;

    $response = $sdk->sdk->startMailboxExportJob($request);

    if ($response->startMailboxExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Applies the specified tags to the specified WorkMailorganization resource.

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
    $request->tagResourceRequest->resourceARN = 'recusandae';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::WORK_MAIL_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testAvailabilityConfiguration

<p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EwsAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Operations\TestAvailabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestAvailabilityConfigurationRequest();
    $request->testAvailabilityConfigurationRequest = new TestAvailabilityConfigurationRequest();
    $request->testAvailabilityConfigurationRequest->domainName = 'numquam';
    $request->testAvailabilityConfigurationRequest->ewsProvider = new EwsAvailabilityProvider();
    $request->testAvailabilityConfigurationRequest->ewsProvider->ewsEndpoint = 'doloribus';
    $request->testAvailabilityConfigurationRequest->ewsProvider->ewsPassword = 'suscipit';
    $request->testAvailabilityConfigurationRequest->ewsProvider->ewsUsername = 'reiciendis';
    $request->testAvailabilityConfigurationRequest->lambdaProvider = new LambdaAvailabilityProvider();
    $request->testAvailabilityConfigurationRequest->lambdaProvider->lambdaArn = 'quidem';
    $request->testAvailabilityConfigurationRequest->organizationId = 'saepe';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = TestAvailabilityConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_TEST_AVAILABILITY_CONFIGURATION;

    $response = $sdk->sdk->testAvailabilityConfiguration($request);

    if ($response->testAvailabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Untags the specified tags from the specified WorkMail organization resource.

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
    $request->untagResourceRequest->resourceARN = 'beatae';
    $request->untagResourceRequest->tagKeys = [
        'a',
        'debitis',
    ];
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::WORK_MAIL_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAvailabilityConfiguration

Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAvailabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EwsAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAvailabilityProvider;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAvailabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAvailabilityConfigurationRequest();
    $request->updateAvailabilityConfigurationRequest = new UpdateAvailabilityConfigurationRequest();
    $request->updateAvailabilityConfigurationRequest->domainName = 'vitae';
    $request->updateAvailabilityConfigurationRequest->ewsProvider = new EwsAvailabilityProvider();
    $request->updateAvailabilityConfigurationRequest->ewsProvider->ewsEndpoint = 'accusamus';
    $request->updateAvailabilityConfigurationRequest->ewsProvider->ewsPassword = 'similique';
    $request->updateAvailabilityConfigurationRequest->ewsProvider->ewsUsername = 'tempora';
    $request->updateAvailabilityConfigurationRequest->lambdaProvider = new LambdaAvailabilityProvider();
    $request->updateAvailabilityConfigurationRequest->lambdaProvider->lambdaArn = 'aspernatur';
    $request->updateAvailabilityConfigurationRequest->organizationId = 'voluptas';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = UpdateAvailabilityConfigurationXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_AVAILABILITY_CONFIGURATION;

    $response = $sdk->sdk->updateAvailabilityConfiguration($request);

    if ($response->updateAvailabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDefaultMailDomain

Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDefaultMailDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultMailDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDefaultMailDomainRequest();
    $request->updateDefaultMailDomainRequest = new UpdateDefaultMailDomainRequest();
    $request->updateDefaultMailDomainRequest->domainName = 'dolores';
    $request->updateDefaultMailDomainRequest->organizationId = 'blanditiis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = UpdateDefaultMailDomainXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_DEFAULT_MAIL_DOMAIN;

    $response = $sdk->sdk->updateDefaultMailDomain($request);

    if ($response->updateDefaultMailDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImpersonationRole

Updates an impersonation role for the given WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateImpersonationRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImpersonationRule;
use \OpenAPI\OpenAPI\Models\Shared\AccessEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImpersonationRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImpersonationRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImpersonationRoleRequest();
    $request->updateImpersonationRoleRequest = new UpdateImpersonationRoleRequest();
    $request->updateImpersonationRoleRequest->description = 'cum';
    $request->updateImpersonationRoleRequest->impersonationRoleId = 'blanditiis';
    $request->updateImpersonationRoleRequest->name = 'Moses Douglas';
    $request->updateImpersonationRoleRequest->organizationId = 'pariatur';
    $request->updateImpersonationRoleRequest->rules = [
        new ImpersonationRule(),
        new ImpersonationRule(),
        new ImpersonationRule(),
    ];
    $request->updateImpersonationRoleRequest->type = ImpersonationRoleTypeEnum::READ_ONLY;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = UpdateImpersonationRoleXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_IMPERSONATION_ROLE;

    $response = $sdk->sdk->updateImpersonationRole($request);

    if ($response->updateImpersonationRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMailboxQuota

Updates a user's current mailbox quota for a specified organization and user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMailboxQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMailboxQuotaRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMailboxQuotaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMailboxQuotaRequest();
    $request->updateMailboxQuotaRequest = new UpdateMailboxQuotaRequest();
    $request->updateMailboxQuotaRequest->mailboxQuota = 994401;
    $request->updateMailboxQuotaRequest->organizationId = 'facilis';
    $request->updateMailboxQuotaRequest->userId = 'voluptate';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UpdateMailboxQuotaXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_MAILBOX_QUOTA;

    $response = $sdk->sdk->updateMailboxQuota($request);

    if ($response->updateMailboxQuotaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMobileDeviceAccessRule

Updates a mobile device access rule for the specified WorkMail organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMobileDeviceAccessRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\MobileDeviceAccessRuleEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMobileDeviceAccessRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMobileDeviceAccessRuleRequest();
    $request->updateMobileDeviceAccessRuleRequest = new UpdateMobileDeviceAccessRuleRequest();
    $request->updateMobileDeviceAccessRuleRequest->description = 'commodi';
    $request->updateMobileDeviceAccessRuleRequest->deviceModels = [
        'explicabo',
        'voluptas',
        'unde',
    ];
    $request->updateMobileDeviceAccessRuleRequest->deviceOperatingSystems = [
        'suscipit',
    ];
    $request->updateMobileDeviceAccessRuleRequest->deviceTypes = [
        'debitis',
        'illo',
        'reiciendis',
        'perferendis',
    ];
    $request->updateMobileDeviceAccessRuleRequest->deviceUserAgents = [
        'maiores',
        'incidunt',
        'sed',
    ];
    $request->updateMobileDeviceAccessRuleRequest->effect = MobileDeviceAccessRuleEffectEnum::DENY;
    $request->updateMobileDeviceAccessRuleRequest->mobileDeviceAccessRuleId = 'eius';
    $request->updateMobileDeviceAccessRuleRequest->name = 'Nathan Jaskolski';
    $request->updateMobileDeviceAccessRuleRequest->notDeviceModels = [
        'tempora',
        'tempora',
        'voluptate',
        'reiciendis',
    ];
    $request->updateMobileDeviceAccessRuleRequest->notDeviceOperatingSystems = [
        'sit',
        'non',
    ];
    $request->updateMobileDeviceAccessRuleRequest->notDeviceTypes = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->updateMobileDeviceAccessRuleRequest->notDeviceUserAgents = [
        'debitis',
        'rem',
    ];
    $request->updateMobileDeviceAccessRuleRequest->organizationId = 'sit';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = UpdateMobileDeviceAccessRuleXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_MOBILE_DEVICE_ACCESS_RULE;

    $response = $sdk->sdk->updateMobileDeviceAccessRule($request);

    if ($response->updateMobileDeviceAccessRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePrimaryEmailAddress

Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePrimaryEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePrimaryEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePrimaryEmailAddressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePrimaryEmailAddressRequest();
    $request->updatePrimaryEmailAddressRequest = new UpdatePrimaryEmailAddressRequest();
    $request->updatePrimaryEmailAddressRequest->email = 'Amanda32@gmail.com';
    $request->updatePrimaryEmailAddressRequest->entityId = 'in';
    $request->updatePrimaryEmailAddressRequest->organizationId = 'officiis';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UpdatePrimaryEmailAddressXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_PRIMARY_EMAIL_ADDRESS;

    $response = $sdk->sdk->updatePrimaryEmailAddress($request);

    if ($response->updatePrimaryEmailAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResource

Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\BookingOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceRequest();
    $request->updateResourceRequest = new UpdateResourceRequest();
    $request->updateResourceRequest->bookingOptions = new BookingOptions();
    $request->updateResourceRequest->bookingOptions->autoAcceptRequests = false;
    $request->updateResourceRequest->bookingOptions->autoDeclineConflictingRequests = false;
    $request->updateResourceRequest->bookingOptions->autoDeclineRecurringRequests = false;
    $request->updateResourceRequest->name = 'Evan Welch';
    $request->updateResourceRequest->organizationId = 'neque';
    $request->updateResourceRequest->resourceId = 'dolorum';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = UpdateResourceXAmzTargetEnum::WORK_MAIL_SERVICE_UPDATE_RESOURCE;

    $response = $sdk->sdk->updateResource($request);

    if ($response->updateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
