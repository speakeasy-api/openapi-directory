import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://workmail.{region}.amazonaws.com", "https://workmail.{region}.amazonaws.com", "http://workmail.{region}.amazonaws.com.cn", "https://workmail.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>
 *
 * @see {@link https://docs.aws.amazon.com/workmail/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Adds a member (user or group) to the resource's set of delegates.
     */
    associateDelegateToResource(req: operations.AssociateDelegateToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDelegateToResourceResponse>;
    /**
     * Adds a member (user or group) to the group's set.
     */
    associateMemberToGroup(req: operations.AssociateMemberToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberToGroupResponse>;
    /**
     * Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
     */
    assumeImpersonationRole(req: operations.AssumeImpersonationRoleRequest, config?: AxiosRequestConfig): Promise<operations.AssumeImpersonationRoleResponse>;
    /**
     * <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
     */
    cancelMailboxExportJob(req: operations.CancelMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelMailboxExportJobResponse>;
    /**
     * Adds an alias to the set of a given member (user or group) of WorkMail.
     */
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
     */
    createAvailabilityConfiguration(req: operations.CreateAvailabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAvailabilityConfigurationResponse>;
    /**
     * Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
     */
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
     */
    createImpersonationRole(req: operations.CreateImpersonationRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateImpersonationRoleResponse>;
    /**
     * Creates a new mobile device access rule for the specified WorkMail organization.
     */
    createMobileDeviceAccessRule(req: operations.CreateMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateMobileDeviceAccessRuleResponse>;
    /**
     * <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
     */
    createOrganization(req: operations.CreateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationResponse>;
    /**
     * Creates a new WorkMail resource.
     */
    createResource(req: operations.CreateResourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceResponse>;
    /**
     * Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
     */
    deleteAccessControlRule(req: operations.DeleteAccessControlRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessControlRuleResponse>;
    /**
     * Remove one or more specified aliases from a set of aliases for a given user.
     */
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
     */
    deleteAvailabilityConfiguration(req: operations.DeleteAvailabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAvailabilityConfigurationResponse>;
    /**
     * Deletes the email monitoring configuration for a specified organization.
     */
    deleteEmailMonitoringConfiguration(req: operations.DeleteEmailMonitoringConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailMonitoringConfigurationResponse>;
    /**
     * Deletes a group from WorkMail.
     */
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * Deletes an impersonation role for the given WorkMail organization.
     */
    deleteImpersonationRole(req: operations.DeleteImpersonationRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImpersonationRoleResponse>;
    /**
     * Deletes permissions granted to a member (user or group).
     */
    deleteMailboxPermissions(req: operations.DeleteMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMailboxPermissionsResponse>;
    /**
     * <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
     */
    deleteMobileDeviceAccessOverride(req: operations.DeleteMobileDeviceAccessOverrideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMobileDeviceAccessOverrideResponse>;
    /**
     * <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
     */
    deleteMobileDeviceAccessRule(req: operations.DeleteMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMobileDeviceAccessRuleResponse>;
    /**
     * Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
     */
    deleteOrganization(req: operations.DeleteOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationResponse>;
    /**
     * Deletes the specified resource.
     */
    deleteResource(req: operations.DeleteResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceResponse>;
    /**
     * Deletes the specified retention policy from the specified organization.
     */
    deleteRetentionPolicy(req: operations.DeleteRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRetentionPolicyResponse>;
    /**
     * <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
     */
    deregisterFromWorkMail(req: operations.DeregisterFromWorkMailRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterFromWorkMailResponse>;
    /**
     * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
     */
    deregisterMailDomain(req: operations.DeregisterMailDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterMailDomainResponse>;
    /**
     * Describes the current email monitoring configuration for a specified organization.
     */
    describeEmailMonitoringConfiguration(req: operations.DescribeEmailMonitoringConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEmailMonitoringConfigurationResponse>;
    /**
     * Returns the data available for the group.
     */
    describeGroup(req: operations.DescribeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupResponse>;
    /**
     * Lists the settings in a DMARC policy for a specified organization.
     */
    describeInboundDmarcSettings(req: operations.DescribeInboundDmarcSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInboundDmarcSettingsResponse>;
    /**
     * Describes the current status of a mailbox export job.
     */
    describeMailboxExportJob(req: operations.DescribeMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMailboxExportJobResponse>;
    /**
     * Provides more information regarding a given organization based on its identifier.
     */
    describeOrganization(req: operations.DescribeOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationResponse>;
    /**
     * Returns the data available for the resource.
     */
    describeResource(req: operations.DescribeResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceResponse>;
    /**
     * Provides information regarding the user.
     */
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * Removes a member from the resource's set of delegates.
     */
    disassociateDelegateFromResource(req: operations.DisassociateDelegateFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDelegateFromResourceResponse>;
    /**
     * Removes a member from a group.
     */
    disassociateMemberFromGroup(req: operations.DisassociateMemberFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberFromGroupResponse>;
    /**
     * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
     */
    getAccessControlEffect(req: operations.GetAccessControlEffectRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessControlEffectResponse>;
    /**
     * Gets the default retention policy details for the specified organization.
     */
    getDefaultRetentionPolicy(req: operations.GetDefaultRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultRetentionPolicyResponse>;
    /**
     * Gets the impersonation role details for the given WorkMail organization.
     */
    getImpersonationRole(req: operations.GetImpersonationRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetImpersonationRoleResponse>;
    /**
     * Tests whether the given impersonation role can impersonate a target user.
     */
    getImpersonationRoleEffect(req: operations.GetImpersonationRoleEffectRequest, config?: AxiosRequestConfig): Promise<operations.GetImpersonationRoleEffectResponse>;
    /**
     * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
     */
    getMailDomain(req: operations.GetMailDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetMailDomainResponse>;
    /**
     * Requests a user's mailbox details for a specified organization and user.
     */
    getMailboxDetails(req: operations.GetMailboxDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetMailboxDetailsResponse>;
    /**
     * Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
     */
    getMobileDeviceAccessEffect(req: operations.GetMobileDeviceAccessEffectRequest, config?: AxiosRequestConfig): Promise<operations.GetMobileDeviceAccessEffectResponse>;
    /**
     * Gets the mobile device access override for the given WorkMail organization, user, and device.
     */
    getMobileDeviceAccessOverride(req: operations.GetMobileDeviceAccessOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetMobileDeviceAccessOverrideResponse>;
    /**
     * Lists the access control rules for the specified organization.
     */
    listAccessControlRules(req: operations.ListAccessControlRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessControlRulesResponse>;
    /**
     * Creates a paginated call to list the aliases associated with a given entity.
     */
    listAliases(req: operations.ListAliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListAliasesResponse>;
    /**
     * List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
     */
    listAvailabilityConfigurations(req: operations.ListAvailabilityConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailabilityConfigurationsResponse>;
    /**
     * Returns an overview of the members of a group. Users and groups can be members of a group.
     */
    listGroupMembers(req: operations.ListGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupMembersResponse>;
    /**
     * Returns summaries of the organization's groups.
     */
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * Lists all the impersonation roles for the given WorkMail organization.
     */
    listImpersonationRoles(req: operations.ListImpersonationRolesRequest, config?: AxiosRequestConfig): Promise<operations.ListImpersonationRolesResponse>;
    /**
     * Lists the mail domains in a given WorkMail organization.
     */
    listMailDomains(req: operations.ListMailDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListMailDomainsResponse>;
    /**
     * Lists the mailbox export jobs started for the specified organization within the last seven days.
     */
    listMailboxExportJobs(req: operations.ListMailboxExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListMailboxExportJobsResponse>;
    /**
     * Lists the mailbox permissions associated with a user, group, or resource mailbox.
     */
    listMailboxPermissions(req: operations.ListMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListMailboxPermissionsResponse>;
    /**
     * Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
     */
    listMobileDeviceAccessOverrides(req: operations.ListMobileDeviceAccessOverridesRequest, config?: AxiosRequestConfig): Promise<operations.ListMobileDeviceAccessOverridesResponse>;
    /**
     * Lists the mobile device access rules for the specified WorkMail organization.
     */
    listMobileDeviceAccessRules(req: operations.ListMobileDeviceAccessRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListMobileDeviceAccessRulesResponse>;
    /**
     * Returns summaries of the customer's organizations.
     */
    listOrganizations(req: operations.ListOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationsResponse>;
    /**
     * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
     */
    listResourceDelegates(req: operations.ListResourceDelegatesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceDelegatesResponse>;
    /**
     * Returns summaries of the organization's resources.
     */
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * Lists the tags applied to an WorkMail organization resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns summaries of the organization's users.
     */
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
     */
    putAccessControlRule(req: operations.PutAccessControlRuleRequest, config?: AxiosRequestConfig): Promise<operations.PutAccessControlRuleResponse>;
    /**
     * Creates or updates the email monitoring configuration for a specified organization.
     */
    putEmailMonitoringConfiguration(req: operations.PutEmailMonitoringConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailMonitoringConfigurationResponse>;
    /**
     * Enables or disables a DMARC policy for a given organization.
     */
    putInboundDmarcSettings(req: operations.PutInboundDmarcSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutInboundDmarcSettingsResponse>;
    /**
     * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
     */
    putMailboxPermissions(req: operations.PutMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutMailboxPermissionsResponse>;
    /**
     * Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
     */
    putMobileDeviceAccessOverride(req: operations.PutMobileDeviceAccessOverrideRequest, config?: AxiosRequestConfig): Promise<operations.PutMobileDeviceAccessOverrideResponse>;
    /**
     * Puts a retention policy to the specified organization.
     */
    putRetentionPolicy(req: operations.PutRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutRetentionPolicyResponse>;
    /**
     * Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
     */
    registerMailDomain(req: operations.RegisterMailDomainRequest, config?: AxiosRequestConfig): Promise<operations.RegisterMailDomainResponse>;
    /**
     * <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
     */
    registerToWorkMail(req: operations.RegisterToWorkMailRequest, config?: AxiosRequestConfig): Promise<operations.RegisterToWorkMailResponse>;
    /**
     * Allows the administrator to reset the password for a user.
     */
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
     */
    startMailboxExportJob(req: operations.StartMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartMailboxExportJobResponse>;
    /**
     * Applies the specified tags to the specified WorkMailorganization resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
     */
    testAvailabilityConfiguration(req: operations.TestAvailabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.TestAvailabilityConfigurationResponse>;
    /**
     * Untags the specified tags from the specified WorkMail organization resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
     */
    updateAvailabilityConfiguration(req: operations.UpdateAvailabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAvailabilityConfigurationResponse>;
    /**
     * Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
     */
    updateDefaultMailDomain(req: operations.UpdateDefaultMailDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultMailDomainResponse>;
    /**
     * Updates an impersonation role for the given WorkMail organization.
     */
    updateImpersonationRole(req: operations.UpdateImpersonationRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImpersonationRoleResponse>;
    /**
     * Updates a user's current mailbox quota for a specified organization and user.
     */
    updateMailboxQuota(req: operations.UpdateMailboxQuotaRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMailboxQuotaResponse>;
    /**
     * Updates a mobile device access rule for the specified WorkMail organization.
     */
    updateMobileDeviceAccessRule(req: operations.UpdateMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMobileDeviceAccessRuleResponse>;
    /**
     * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
     */
    updatePrimaryEmailAddress(req: operations.UpdatePrimaryEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePrimaryEmailAddressResponse>;
    /**
     * Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
     */
    updateResource(req: operations.UpdateResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceResponse>;
}
