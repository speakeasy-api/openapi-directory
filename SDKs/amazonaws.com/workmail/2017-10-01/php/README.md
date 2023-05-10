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
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest->entityId = 'corrupti';
    $request->associateDelegateToResourceRequest->organizationId = 'provident';
    $request->associateDelegateToResourceRequest->resourceId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateDelegateToResourceXAmzTargetEnum::WORK_MAIL_SERVICE_ASSOCIATE_DELEGATE_TO_RESOURCE;

    $response = $sdk->associateDelegateToResource($request);

    if ($response->associateDelegateToResourceResponse !== null) {
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

* [associateDelegateToResource](docs/sdk/README.md#associatedelegatetoresource) - Adds a member (user or group) to the resource's set of delegates.
* [associateMemberToGroup](docs/sdk/README.md#associatemembertogroup) - Adds a member (user or group) to the group's set.
* [assumeImpersonationRole](docs/sdk/README.md#assumeimpersonationrole) - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* [cancelMailboxExportJob](docs/sdk/README.md#cancelmailboxexportjob) - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* [createAlias](docs/sdk/README.md#createalias) - Adds an alias to the set of a given member (user or group) of WorkMail.
* [createAvailabilityConfiguration](docs/sdk/README.md#createavailabilityconfiguration) - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [createGroup](docs/sdk/README.md#creategroup) - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [createImpersonationRole](docs/sdk/README.md#createimpersonationrole) - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* [createMobileDeviceAccessRule](docs/sdk/README.md#createmobiledeviceaccessrule) - Creates a new mobile device access rule for the specified WorkMail organization.
* [createOrganization](docs/sdk/README.md#createorganization) - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* [createResource](docs/sdk/README.md#createresource) - Creates a new WorkMail resource.
* [createUser](docs/sdk/README.md#createuser) - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [deleteAccessControlRule](docs/sdk/README.md#deleteaccesscontrolrule) - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteAlias](docs/sdk/README.md#deletealias) - Remove one or more specified aliases from a set of aliases for a given user.
* [deleteAvailabilityConfiguration](docs/sdk/README.md#deleteavailabilityconfiguration) - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [deleteEmailMonitoringConfiguration](docs/sdk/README.md#deleteemailmonitoringconfiguration) - Deletes the email monitoring configuration for a specified organization.
* [deleteGroup](docs/sdk/README.md#deletegroup) - Deletes a group from WorkMail.
* [deleteImpersonationRole](docs/sdk/README.md#deleteimpersonationrole) - Deletes an impersonation role for the given WorkMail organization.
* [deleteMailboxPermissions](docs/sdk/README.md#deletemailboxpermissions) - Deletes permissions granted to a member (user or group).
* [deleteMobileDeviceAccessOverride](docs/sdk/README.md#deletemobiledeviceaccessoverride) - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteMobileDeviceAccessRule](docs/sdk/README.md#deletemobiledeviceaccessrule) - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteOrganization](docs/sdk/README.md#deleteorganization) - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* [deleteResource](docs/sdk/README.md#deleteresource) - Deletes the specified resource.
* [deleteRetentionPolicy](docs/sdk/README.md#deleteretentionpolicy) - Deletes the specified retention policy from the specified organization.
* [deleteUser](docs/sdk/README.md#deleteuser) - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* [deregisterFromWorkMail](docs/sdk/README.md#deregisterfromworkmail) - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* [deregisterMailDomain](docs/sdk/README.md#deregistermaildomain) - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* [describeEmailMonitoringConfiguration](docs/sdk/README.md#describeemailmonitoringconfiguration) - Describes the current email monitoring configuration for a specified organization.
* [describeGroup](docs/sdk/README.md#describegroup) - Returns the data available for the group.
* [describeInboundDmarcSettings](docs/sdk/README.md#describeinbounddmarcsettings) - Lists the settings in a DMARC policy for a specified organization.
* [describeMailboxExportJob](docs/sdk/README.md#describemailboxexportjob) - Describes the current status of a mailbox export job.
* [describeOrganization](docs/sdk/README.md#describeorganization) - Provides more information regarding a given organization based on its identifier.
* [describeResource](docs/sdk/README.md#describeresource) - Returns the data available for the resource.
* [describeUser](docs/sdk/README.md#describeuser) - Provides information regarding the user.
* [disassociateDelegateFromResource](docs/sdk/README.md#disassociatedelegatefromresource) - Removes a member from the resource's set of delegates.
* [disassociateMemberFromGroup](docs/sdk/README.md#disassociatememberfromgroup) - Removes a member from a group.
* [getAccessControlEffect](docs/sdk/README.md#getaccesscontroleffect) - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* [getDefaultRetentionPolicy](docs/sdk/README.md#getdefaultretentionpolicy) - Gets the default retention policy details for the specified organization.
* [getImpersonationRole](docs/sdk/README.md#getimpersonationrole) - Gets the impersonation role details for the given WorkMail organization.
* [getImpersonationRoleEffect](docs/sdk/README.md#getimpersonationroleeffect) - Tests whether the given impersonation role can impersonate a target user.
* [getMailDomain](docs/sdk/README.md#getmaildomain) - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* [getMailboxDetails](docs/sdk/README.md#getmailboxdetails) - Requests a user's mailbox details for a specified organization and user.
* [getMobileDeviceAccessEffect](docs/sdk/README.md#getmobiledeviceaccesseffect) - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* [getMobileDeviceAccessOverride](docs/sdk/README.md#getmobiledeviceaccessoverride) - Gets the mobile device access override for the given WorkMail organization, user, and device.
* [listAccessControlRules](docs/sdk/README.md#listaccesscontrolrules) - Lists the access control rules for the specified organization.
* [listAliases](docs/sdk/README.md#listaliases) - Creates a paginated call to list the aliases associated with a given entity.
* [listAvailabilityConfigurations](docs/sdk/README.md#listavailabilityconfigurations) - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* [listGroupMembers](docs/sdk/README.md#listgroupmembers) - Returns an overview of the members of a group. Users and groups can be members of a group.
* [listGroups](docs/sdk/README.md#listgroups) - Returns summaries of the organization's groups.
* [listImpersonationRoles](docs/sdk/README.md#listimpersonationroles) - Lists all the impersonation roles for the given WorkMail organization.
* [listMailDomains](docs/sdk/README.md#listmaildomains) - Lists the mail domains in a given WorkMail organization.
* [listMailboxExportJobs](docs/sdk/README.md#listmailboxexportjobs) - Lists the mailbox export jobs started for the specified organization within the last seven days.
* [listMailboxPermissions](docs/sdk/README.md#listmailboxpermissions) - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* [listMobileDeviceAccessOverrides](docs/sdk/README.md#listmobiledeviceaccessoverrides) - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* [listMobileDeviceAccessRules](docs/sdk/README.md#listmobiledeviceaccessrules) - Lists the mobile device access rules for the specified WorkMail organization.
* [listOrganizations](docs/sdk/README.md#listorganizations) - Returns summaries of the customer's organizations.
* [listResourceDelegates](docs/sdk/README.md#listresourcedelegates) - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* [listResources](docs/sdk/README.md#listresources) - Returns summaries of the organization's resources.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags applied to an WorkMail organization resource.
* [listUsers](docs/sdk/README.md#listusers) - Returns summaries of the organization's users.
* [putAccessControlRule](docs/sdk/README.md#putaccesscontrolrule) - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* [putEmailMonitoringConfiguration](docs/sdk/README.md#putemailmonitoringconfiguration) - Creates or updates the email monitoring configuration for a specified organization.
* [putInboundDmarcSettings](docs/sdk/README.md#putinbounddmarcsettings) - Enables or disables a DMARC policy for a given organization.
* [putMailboxPermissions](docs/sdk/README.md#putmailboxpermissions) - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* [putMobileDeviceAccessOverride](docs/sdk/README.md#putmobiledeviceaccessoverride) - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* [putRetentionPolicy](docs/sdk/README.md#putretentionpolicy) - Puts a retention policy to the specified organization.
* [registerMailDomain](docs/sdk/README.md#registermaildomain) - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* [registerToWorkMail](docs/sdk/README.md#registertoworkmail) - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* [resetPassword](docs/sdk/README.md#resetpassword) - Allows the administrator to reset the password for a user.
* [startMailboxExportJob](docs/sdk/README.md#startmailboxexportjob) - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* [tagResource](docs/sdk/README.md#tagresource) - Applies the specified tags to the specified WorkMailorganization resource.
* [testAvailabilityConfiguration](docs/sdk/README.md#testavailabilityconfiguration) - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* [untagResource](docs/sdk/README.md#untagresource) - Untags the specified tags from the specified WorkMail organization resource.
* [updateAvailabilityConfiguration](docs/sdk/README.md#updateavailabilityconfiguration) - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [updateDefaultMailDomain](docs/sdk/README.md#updatedefaultmaildomain) - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* [updateImpersonationRole](docs/sdk/README.md#updateimpersonationrole) - Updates an impersonation role for the given WorkMail organization.
* [updateMailboxQuota](docs/sdk/README.md#updatemailboxquota) - Updates a user's current mailbox quota for a specified organization and user.
* [updateMobileDeviceAccessRule](docs/sdk/README.md#updatemobiledeviceaccessrule) - Updates a mobile device access rule for the specified WorkMail organization.
* [updatePrimaryEmailAddress](docs/sdk/README.md#updateprimaryemailaddress) - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* [updateResource](docs/sdk/README.md#updateresource) - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
