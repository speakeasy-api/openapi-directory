# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceResponse;
import org.openapis.openapi.models.shared.AssociateDelegateToResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest() {{
                associateDelegateToResourceRequest = new AssociateDelegateToResourceRequest() {{
                    entityId = "corrupti";
                    organizationId = "provident";
                    resourceId = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "WorkMailService.AssociateDelegateToResource";
            }}            

            AssociateDelegateToResourceResponse res = sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateDelegateToResource` - Adds a member (user or group) to the resource's set of delegates.
* `associateMemberToGroup` - Adds a member (user or group) to the group's set.
* `assumeImpersonationRole` - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* `cancelMailboxExportJob` - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* `createAlias` - Adds an alias to the set of a given member (user or group) of WorkMail.
* `createAvailabilityConfiguration` - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `createGroup` - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `createImpersonationRole` - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* `createMobileDeviceAccessRule` - Creates a new mobile device access rule for the specified WorkMail organization.
* `createOrganization` - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* `createResource` - Creates a new WorkMail resource.
* `createUser` - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `deleteAccessControlRule` - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `deleteAlias` - Remove one or more specified aliases from a set of aliases for a given user.
* `deleteAvailabilityConfiguration` - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `deleteEmailMonitoringConfiguration` - Deletes the email monitoring configuration for a specified organization.
* `deleteGroup` - Deletes a group from WorkMail.
* `deleteImpersonationRole` - Deletes an impersonation role for the given WorkMail organization.
* `deleteMailboxPermissions` - Deletes permissions granted to a member (user or group).
* `deleteMobileDeviceAccessOverride` - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `deleteMobileDeviceAccessRule` - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `deleteOrganization` - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* `deleteResource` - Deletes the specified resource.
* `deleteRetentionPolicy` - Deletes the specified retention policy from the specified organization.
* `deleteUser` - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* `deregisterFromWorkMail` - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* `deregisterMailDomain` - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* `describeEmailMonitoringConfiguration` - Describes the current email monitoring configuration for a specified organization.
* `describeGroup` - Returns the data available for the group.
* `describeInboundDmarcSettings` - Lists the settings in a DMARC policy for a specified organization.
* `describeMailboxExportJob` - Describes the current status of a mailbox export job.
* `describeOrganization` - Provides more information regarding a given organization based on its identifier.
* `describeResource` - Returns the data available for the resource.
* `describeUser` - Provides information regarding the user.
* `disassociateDelegateFromResource` - Removes a member from the resource's set of delegates.
* `disassociateMemberFromGroup` - Removes a member from a group.
* `getAccessControlEffect` - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* `getDefaultRetentionPolicy` - Gets the default retention policy details for the specified organization.
* `getImpersonationRole` - Gets the impersonation role details for the given WorkMail organization.
* `getImpersonationRoleEffect` - Tests whether the given impersonation role can impersonate a target user.
* `getMailDomain` - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* `getMailboxDetails` - Requests a user's mailbox details for a specified organization and user.
* `getMobileDeviceAccessEffect` - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* `getMobileDeviceAccessOverride` - Gets the mobile device access override for the given WorkMail organization, user, and device.
* `listAccessControlRules` - Lists the access control rules for the specified organization.
* `listAliases` - Creates a paginated call to list the aliases associated with a given entity.
* `listAvailabilityConfigurations` - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* `listGroupMembers` - Returns an overview of the members of a group. Users and groups can be members of a group.
* `listGroups` - Returns summaries of the organization's groups.
* `listImpersonationRoles` - Lists all the impersonation roles for the given WorkMail organization.
* `listMailDomains` - Lists the mail domains in a given WorkMail organization.
* `listMailboxExportJobs` - Lists the mailbox export jobs started for the specified organization within the last seven days.
* `listMailboxPermissions` - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* `listMobileDeviceAccessOverrides` - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* `listMobileDeviceAccessRules` - Lists the mobile device access rules for the specified WorkMail organization.
* `listOrganizations` - Returns summaries of the customer's organizations.
* `listResourceDelegates` - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* `listResources` - Returns summaries of the organization's resources.
* `listTagsForResource` - Lists the tags applied to an WorkMail organization resource.
* `listUsers` - Returns summaries of the organization's users.
* `putAccessControlRule` - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* `putEmailMonitoringConfiguration` - Creates or updates the email monitoring configuration for a specified organization.
* `putInboundDmarcSettings` - Enables or disables a DMARC policy for a given organization.
* `putMailboxPermissions` - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* `putMobileDeviceAccessOverride` - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* `putRetentionPolicy` - Puts a retention policy to the specified organization.
* `registerMailDomain` - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* `registerToWorkMail` - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* `resetPassword` - Allows the administrator to reset the password for a user.
* `startMailboxExportJob` - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* `tagResource` - Applies the specified tags to the specified WorkMailorganization resource.
* `testAvailabilityConfiguration` - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* `untagResource` - Untags the specified tags from the specified WorkMail organization resource.
* `updateAvailabilityConfiguration` - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `updateDefaultMailDomain` - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* `updateImpersonationRole` - Updates an impersonation role for the given WorkMail organization.
* `updateMailboxQuota` - Updates a user's current mailbox quota for a specified organization and user.
* `updateMobileDeviceAccessRule` - Updates a mobile device access rule for the specified WorkMail organization.
* `updatePrimaryEmailAddress` - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* `updateResource` - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
