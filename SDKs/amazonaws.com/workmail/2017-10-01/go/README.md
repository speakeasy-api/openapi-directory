# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/workmail/2017-10-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateDelegateToResourceRequest{
        Headers: operations.AssociateDelegateToResourceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "WorkMailService.AssociateDelegateToResource",
        },
        Request: shared.AssociateDelegateToResourceRequest{
            EntityID: "nihil",
            OrganizationID: "fuga",
            ResourceID: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateDelegateToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateDelegateToResource` - Adds a member (user or group) to the resource's set of delegates.
* `AssociateMemberToGroup` - Adds a member (user or group) to the group's set.
* `AssumeImpersonationRole` - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* `CancelMailboxExportJob` - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* `CreateAlias` - Adds an alias to the set of a given member (user or group) of WorkMail.
* `CreateAvailabilityConfiguration` - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `CreateGroup` - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `CreateImpersonationRole` - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* `CreateMobileDeviceAccessRule` - Creates a new mobile device access rule for the specified WorkMail organization.
* `CreateOrganization` - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* `CreateResource` - Creates a new WorkMail resource.
* `CreateUser` - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `DeleteAccessControlRule` - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `DeleteAlias` - Remove one or more specified aliases from a set of aliases for a given user.
* `DeleteAvailabilityConfiguration` - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `DeleteEmailMonitoringConfiguration` - Deletes the email monitoring configuration for a specified organization.
* `DeleteGroup` - Deletes a group from WorkMail.
* `DeleteImpersonationRole` - Deletes an impersonation role for the given WorkMail organization.
* `DeleteMailboxPermissions` - Deletes permissions granted to a member (user or group).
* `DeleteMobileDeviceAccessOverride` - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `DeleteMobileDeviceAccessRule` - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* `DeleteOrganization` - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* `DeleteResource` - Deletes the specified resource.
* `DeleteRetentionPolicy` - Deletes the specified retention policy from the specified organization.
* `DeleteUser` - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* `DeregisterFromWorkMail` - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* `DeregisterMailDomain` - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* `DescribeEmailMonitoringConfiguration` - Describes the current email monitoring configuration for a specified organization.
* `DescribeGroup` - Returns the data available for the group.
* `DescribeInboundDmarcSettings` - Lists the settings in a DMARC policy for a specified organization.
* `DescribeMailboxExportJob` - Describes the current status of a mailbox export job.
* `DescribeOrganization` - Provides more information regarding a given organization based on its identifier.
* `DescribeResource` - Returns the data available for the resource.
* `DescribeUser` - Provides information regarding the user.
* `DisassociateDelegateFromResource` - Removes a member from the resource's set of delegates.
* `DisassociateMemberFromGroup` - Removes a member from a group.
* `GetAccessControlEffect` - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* `GetDefaultRetentionPolicy` - Gets the default retention policy details for the specified organization.
* `GetImpersonationRole` - Gets the impersonation role details for the given WorkMail organization.
* `GetImpersonationRoleEffect` - Tests whether the given impersonation role can impersonate a target user.
* `GetMailDomain` - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* `GetMailboxDetails` - Requests a user's mailbox details for a specified organization and user.
* `GetMobileDeviceAccessEffect` - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* `GetMobileDeviceAccessOverride` - Gets the mobile device access override for the given WorkMail organization, user, and device.
* `ListAccessControlRules` - Lists the access control rules for the specified organization.
* `ListAliases` - Creates a paginated call to list the aliases associated with a given entity.
* `ListAvailabilityConfigurations` - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* `ListGroupMembers` - Returns an overview of the members of a group. Users and groups can be members of a group.
* `ListGroups` - Returns summaries of the organization's groups.
* `ListImpersonationRoles` - Lists all the impersonation roles for the given WorkMail organization.
* `ListMailDomains` - Lists the mail domains in a given WorkMail organization.
* `ListMailboxExportJobs` - Lists the mailbox export jobs started for the specified organization within the last seven days.
* `ListMailboxPermissions` - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* `ListMobileDeviceAccessOverrides` - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* `ListMobileDeviceAccessRules` - Lists the mobile device access rules for the specified WorkMail organization.
* `ListOrganizations` - Returns summaries of the customer's organizations.
* `ListResourceDelegates` - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* `ListResources` - Returns summaries of the organization's resources.
* `ListTagsForResource` - Lists the tags applied to an WorkMail organization resource.
* `ListUsers` - Returns summaries of the organization's users.
* `PutAccessControlRule` - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* `PutEmailMonitoringConfiguration` - Creates or updates the email monitoring configuration for a specified organization.
* `PutInboundDmarcSettings` - Enables or disables a DMARC policy for a given organization.
* `PutMailboxPermissions` - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* `PutMobileDeviceAccessOverride` - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* `PutRetentionPolicy` - Puts a retention policy to the specified organization.
* `RegisterMailDomain` - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* `RegisterToWorkMail` - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* `ResetPassword` - Allows the administrator to reset the password for a user.
* `StartMailboxExportJob` - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* `TagResource` - Applies the specified tags to the specified WorkMailorganization resource.
* `TestAvailabilityConfiguration` - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* `UntagResource` - Untags the specified tags from the specified WorkMail organization resource.
* `UpdateAvailabilityConfiguration` - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* `UpdateDefaultMailDomain` - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* `UpdateImpersonationRole` - Updates an impersonation role for the given WorkMail organization.
* `UpdateMailboxQuota` - Updates a user's current mailbox quota for a specified organization and user.
* `UpdateMobileDeviceAccessRule` - Updates a mobile device access rule for the specified WorkMail organization.
* `UpdatePrimaryEmailAddress` - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* `UpdateResource` - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
