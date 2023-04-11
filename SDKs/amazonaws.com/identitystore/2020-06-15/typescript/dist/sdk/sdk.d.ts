import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://identitystore.{region}.amazonaws.com", "https://identitystore.{region}.amazonaws.com", "http://identitystore.{region}.amazonaws.com.cn", "https://identitystore.{region}.amazonaws.com.cn"];
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
 * <p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <pre><code> &lt;note&gt; &lt;p&gt;Although AWS Single Sign-On was renamed, the &lt;code&gt;sso&lt;/code&gt; and &lt;code&gt;identitystore&lt;/code&gt; API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed&quot;&gt;IAM Identity Center rename&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;This reference guide describes the identity store operations that you can call programatically and includes detailed information on data types and errors.&lt;/p&gt; </code></pre>
 *
 * @see {@link https://docs.aws.amazon.com/identitystore/} - Amazon Web Services documentation
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
     * Creates a group within the specified identity store.
     */
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
     */
    createGroupMembership(req: operations.CreateGroupMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupMembershipResponse>;
    /**
     * Creates a new user within the specified identity store.
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Delete a group within an identity store given <code>GroupId</code>.
     */
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * Delete a membership within a group given <code>MembershipId</code>.
     */
    deleteGroupMembership(req: operations.DeleteGroupMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupMembershipResponse>;
    /**
     * Deletes a user within an identity store given <code>UserId</code>.
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
     */
    describeGroup(req: operations.DescribeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupResponse>;
    /**
     * Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
     */
    describeGroupMembership(req: operations.DescribeGroupMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupMembershipResponse>;
    /**
     * Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
     */
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * Retrieves <code>GroupId</code> in an identity store.
     */
    getGroupId(req: operations.GetGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupIdResponse>;
    /**
     * Retrieves the <code>MembershipId</code> in an identity store.
     */
    getGroupMembershipId(req: operations.GetGroupMembershipIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupMembershipIdResponse>;
    /**
     * Retrieves the <code>UserId</code> in an identity store.
     */
    getUserId(req: operations.GetUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserIdResponse>;
    /**
     * Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
     */
    isMemberInGroups(req: operations.IsMemberInGroupsRequest, config?: AxiosRequestConfig): Promise<operations.IsMemberInGroupsResponse>;
    /**
     * For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
     */
    listGroupMemberships(req: operations.ListGroupMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupMembershipsResponse>;
    /**
     * For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
     */
    listGroupMembershipsForMember(req: operations.ListGroupMembershipsForMemberRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupMembershipsForMemberResponse>;
    /**
     * Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
     */
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
     */
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * For the specified group in the specified identity store, updates the group metadata and attributes.
     */
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
    /**
     * For the specified user in the specified identity store, updates the user metadata and attributes.
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
