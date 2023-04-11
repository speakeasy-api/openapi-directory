import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.detective.{region}.amazonaws.com", "https://api.detective.{region}.amazonaws.com", "http://api.detective.{region}.amazonaws.com.cn", "https://api.detective.{region}.amazonaws.com.cn"];
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
 * <p>Detective uses machine learning and purpose-built visualizations to help you to analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty.</p> <p>The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account.</p> <p>To add a member account to the behavior graph, the administrator account sends an invitation to the account. When the account accepts the invitation, it becomes a member account in the behavior graph.</p> <p>Detective is also integrated with Organizations. The organization management account designates the Detective administrator account for the organization. That account becomes the administrator account for the organization behavior graph. The Detective administrator account is also the delegated administrator account for Detective in Organizations.</p> <p>The Detective administrator account can enable any organization account as a member account in the organization behavior graph. The organization accounts do not receive invitations. The Detective administrator account can also invite other accounts to the organization behavior graph.</p> <p>Every behavior graph is specific to a Region. You can only use the API to manage behavior graphs that belong to the Region that is associated with the currently selected endpoint.</p> <p>The administrator account for a behavior graph can use the Detective API to do the following:</p> <ul> <li> <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p> </li> <li> <p>View the list of member accounts in a behavior graph.</p> </li> <li> <p>Add member accounts to a behavior graph.</p> </li> <li> <p>Remove member accounts from a behavior graph.</p> </li> <li> <p>Apply tags to a behavior graph.</p> </li> </ul> <p>The organization management account can use the Detective API to select the delegated administrator for Detective.</p> <p>The Detective administrator account for an organization can use the Detective API to do the following:</p> <ul> <li> <p>Perform all of the functions of an administrator account.</p> </li> <li> <p>Determine whether to automatically enable new organization accounts as member accounts in the organization behavior graph.</p> </li> </ul> <p>An invited member account can use the Detective API to do the following:</p> <ul> <li> <p>View the list of behavior graphs that they are invited to.</p> </li> <li> <p>Accept an invitation to contribute to a behavior graph.</p> </li> <li> <p>Decline an invitation to contribute to a behavior graph.</p> </li> <li> <p>Remove their account from a behavior graph.</p> </li> </ul> <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p> <note> <p>We replaced the term "master account" with the term "administrator account." An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph.</p> </note>
 *
 * @see {@link https://docs.aws.amazon.com/detective/} - Amazon Web Services documentation
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
     * <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
     */
    acceptInvitation(req: operations.AcceptInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptInvitationResponse>;
    /**
     * Gets data source package information for the behavior graph.
     */
    batchGetGraphMemberDatasources(req: operations.BatchGetGraphMemberDatasourcesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetGraphMemberDatasourcesResponse>;
    /**
     * Gets information on the data source package history for an account.
     */
    batchGetMembershipDatasources(req: operations.BatchGetMembershipDatasourcesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetMembershipDatasourcesResponse>;
    /**
     * <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
     */
    createGraph(req: operations.CreateGraphRequest, config?: AxiosRequestConfig): Promise<operations.CreateGraphResponse>;
    /**
     * <p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
     */
    createMembers(req: operations.CreateMembersRequest, config?: AxiosRequestConfig): Promise<operations.CreateMembersResponse>;
    /**
     * <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
     */
    deleteGraph(req: operations.DeleteGraphRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGraphResponse>;
    /**
     * <p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>
     */
    deleteMembers(req: operations.DeleteMembersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMembersResponse>;
    /**
     * <p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>
     */
    describeOrganizationConfiguration(req: operations.DescribeOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigurationResponse>;
    /**
     * <p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
     */
    disableOrganizationAdminAccount(req: operations.DisableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisableOrganizationAdminAccountResponse>;
    /**
     * <p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>
     */
    disassociateMembership(req: operations.DisassociateMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMembershipResponse>;
    /**
     * <p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>
     */
    enableOrganizationAdminAccount(req: operations.EnableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.EnableOrganizationAdminAccountResponse>;
    /**
     * Returns the membership details for specified member accounts for a behavior graph.
     */
    getMembers(req: operations.GetMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetMembersResponse>;
    /**
     * Lists data source packages in the behavior graph.
     */
    listDatasourcePackages(req: operations.ListDatasourcePackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasourcePackagesResponse>;
    /**
     * <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
     */
    listGraphs(req: operations.ListGraphsRequest, config?: AxiosRequestConfig): Promise<operations.ListGraphsResponse>;
    /**
     * <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
     */
    listInvitations(req: operations.ListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInvitationsResponse>;
    /**
     * <p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>
     */
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
     */
    listOrganizationAdminAccounts(req: operations.ListOrganizationAdminAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationAdminAccountsResponse>;
    /**
     * Returns the tag values that are assigned to a behavior graph.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>
     */
    rejectInvitation(req: operations.RejectInvitationRequest, config?: AxiosRequestConfig): Promise<operations.RejectInvitationResponse>;
    /**
     * <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
     */
    startMonitoringMember(req: operations.StartMonitoringMemberRequest, config?: AxiosRequestConfig): Promise<operations.StartMonitoringMemberResponse>;
    /**
     * Applies tag values to a behavior graph.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a behavior graph.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Starts a data source packages for the behavior graph.
     */
    updateDatasourcePackages(req: operations.UpdateDatasourcePackagesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatasourcePackagesResponse>;
    /**
     * Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.
     */
    updateOrganizationConfiguration(req: operations.UpdateOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigurationResponse>;
}
