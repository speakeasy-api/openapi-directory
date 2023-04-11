import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://grafana.{region}.amazonaws.com", "https://grafana.{region}.amazonaws.com", "http://grafana.{region}.amazonaws.com.cn", "https://grafana.{region}.amazonaws.com.cn"];
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
 * <p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support.</p> <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers. </p>
 *
 * @see {@link https://docs.aws.amazon.com/grafana/} - Amazon Web Services documentation
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
     * Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
     */
    associateLicense(req: operations.AssociateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.AssociateLicenseResponse>;
    /**
     * <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
     */
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
     */
    createWorkspaceApiKey(req: operations.CreateWorkspaceApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceApiKeyResponse>;
    /**
     * Deletes an Amazon Managed Grafana workspace.
     */
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * Deletes a Grafana API key for the workspace.
     */
    deleteWorkspaceApiKey(req: operations.DeleteWorkspaceApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceApiKeyResponse>;
    /**
     * Displays information about one Amazon Managed Grafana workspace.
     */
    describeWorkspace(req: operations.DescribeWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceResponse>;
    /**
     * Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
     */
    describeWorkspaceAuthentication(req: operations.DescribeWorkspaceAuthenticationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceAuthenticationResponse>;
    /**
     * Gets the current configuration string for the given workspace.
     */
    describeWorkspaceConfiguration(req: operations.DescribeWorkspaceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceConfigurationResponse>;
    /**
     * Removes the Grafana Enterprise license from a workspace.
     */
    disassociateLicense(req: operations.DisassociateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateLicenseResponse>;
    /**
     * Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
     */
    listPermissions(req: operations.ListPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
     */
    listWorkspaces(req: operations.ListWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
     */
    updatePermissions(req: operations.UpdatePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionsResponse>;
    /**
     * <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
     */
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
    /**
     * <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
     */
    updateWorkspaceAuthentication(req: operations.UpdateWorkspaceAuthenticationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceAuthenticationResponse>;
    /**
     * Updates the configuration string for the given workspace
     */
    updateWorkspaceConfiguration(req: operations.UpdateWorkspaceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceConfigurationResponse>;
}
