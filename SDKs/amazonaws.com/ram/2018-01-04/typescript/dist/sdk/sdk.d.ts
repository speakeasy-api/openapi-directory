import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ram.{region}.amazonaws.com", "https://ram.{region}.amazonaws.com", "http://ram.{region}.amazonaws.com.cn", "https://ram.{region}.amazonaws.com.cn"];
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
 * <p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources across Amazon Web Services accounts. If you have multiple Amazon Web Services accounts, you can use RAM to share those resources with other accounts. If you use Organizations to manage your accounts, then you share your resources with your organization or organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles an users. </p> <p>To learn more about RAM, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User Guide</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/ram/} - Amazon Web Services documentation
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
     * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
     */
    acceptResourceShareInvitation(req: operations.AcceptResourceShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptResourceShareInvitationResponse>;
    /**
     * Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share.
     */
    associateResourceShare(req: operations.AssociateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceShareResponse>;
    /**
     * Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
     */
    associateResourceSharePermission(req: operations.AssociateResourceSharePermissionRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceSharePermissionResponse>;
    /**
     * <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
     */
    createResourceShare(req: operations.CreateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceShareResponse>;
    /**
     * Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
     */
    deleteResourceShare(req: operations.DeleteResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceShareResponse>;
    /**
     * Disassociates the specified principals or resources from the specified resource share.
     */
    disassociateResourceShare(req: operations.DisassociateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceShareResponse>;
    /**
     * Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
     */
    disassociateResourceSharePermission(req: operations.DisassociateResourceSharePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceSharePermissionResponse>;
    /**
     * <p>Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles.</p> <p>You must call this operation from an IAM user or role in the organization's management account.</p>
     */
    enableSharingWithAwsOrganization(req: operations.EnableSharingWithAwsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.EnableSharingWithAwsOrganizationResponse>;
    /**
     * Gets the contents of an RAM permission in JSON format.
     */
    getPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * Retrieves the resource policies for the specified resources that you own and have shared.
     */
    getResourcePolicies(req: operations.GetResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePoliciesResponse>;
    /**
     * Retrieves the resource and principal associations for resource shares that you own.
     */
    getResourceShareAssociations(req: operations.GetResourceShareAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceShareAssociationsResponse>;
    /**
     * Retrieves details about invitations that you have received for resource shares.
     */
    getResourceShareInvitations(req: operations.GetResourceShareInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceShareInvitationsResponse>;
    /**
     * Retrieves details about the resource shares that you own or that are shared with you.
     */
    getResourceShares(req: operations.GetResourceSharesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceSharesResponse>;
    /**
     * Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
     */
    listPendingInvitationResources(req: operations.ListPendingInvitationResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListPendingInvitationResourcesResponse>;
    /**
     * Lists the available versions of the specified RAM permission.
     */
    listPermissionVersions(req: operations.ListPermissionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionVersionsResponse>;
    /**
     * Retrieves a list of available RAM permissions that you can use for the supported resource types.
     */
    listPermissions(req: operations.ListPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * Lists the principals that you are sharing resources with or that are sharing resources with you.
     */
    listPrincipals(req: operations.ListPrincipalsRequest, config?: AxiosRequestConfig): Promise<operations.ListPrincipalsResponse>;
    /**
     * Lists the RAM permissions that are associated with a resource share.
     */
    listResourceSharePermissions(req: operations.ListResourceSharePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceSharePermissionsResponse>;
    /**
     * Lists the resource types that can be shared by RAM.
     */
    listResourceTypes(req: operations.ListResourceTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceTypesResponse>;
    /**
     * Lists the resources that you added to a resource share or the resources that are shared with you.
     */
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * <p>When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM.</p> <p>You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p>
     */
    promoteResourceShareCreatedFromPolicy(req: operations.PromoteResourceShareCreatedFromPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PromoteResourceShareCreatedFromPolicyResponse>;
    /**
     * Rejects an invitation to a resource share from another Amazon Web Services account.
     */
    rejectResourceShareInvitation(req: operations.RejectResourceShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.RejectResourceShareInvitationResponse>;
    /**
     * Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tag key and value pairs from the specified resource share.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Modifies some of the properties of the specified resource share.
     */
    updateResourceShare(req: operations.UpdateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceShareResponse>;
}
