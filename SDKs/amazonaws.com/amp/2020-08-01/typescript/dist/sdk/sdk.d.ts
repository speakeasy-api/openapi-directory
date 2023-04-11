import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://aps.{region}.amazonaws.com", "https://aps.{region}.amazonaws.com", "http://aps.{region}.amazonaws.com.cn", "https://aps.{region}.amazonaws.com.cn"];
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
 * Amazon Managed Service for Prometheus
 *
 * @see {@link https://docs.aws.amazon.com/aps/} - Amazon Web Services documentation
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
     * Create an alert manager definition.
     */
    createAlertManagerDefinition(req: operations.CreateAlertManagerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlertManagerDefinitionResponse>;
    /**
     * Create logging configuration.
     */
    createLoggingConfiguration(req: operations.CreateLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoggingConfigurationResponse>;
    /**
     * Create a rule group namespace.
     */
    createRuleGroupsNamespace(req: operations.CreateRuleGroupsNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleGroupsNamespaceResponse>;
    /**
     * Creates a new AMP workspace.
     */
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * Deletes an alert manager definition.
     */
    deleteAlertManagerDefinition(req: operations.DeleteAlertManagerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertManagerDefinitionResponse>;
    /**
     * Delete logging configuration.
     */
    deleteLoggingConfiguration(req: operations.DeleteLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoggingConfigurationResponse>;
    /**
     * Delete a rule groups namespace.
     */
    deleteRuleGroupsNamespace(req: operations.DeleteRuleGroupsNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleGroupsNamespaceResponse>;
    /**
     * Deletes an AMP workspace.
     */
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * Describes an alert manager definition.
     */
    describeAlertManagerDefinition(req: operations.DescribeAlertManagerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlertManagerDefinitionResponse>;
    /**
     * Describes logging configuration.
     */
    describeLoggingConfiguration(req: operations.DescribeLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingConfigurationResponse>;
    /**
     * Describe a rule groups namespace.
     */
    describeRuleGroupsNamespace(req: operations.DescribeRuleGroupsNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuleGroupsNamespaceResponse>;
    /**
     * Describes an existing AMP workspace.
     */
    describeWorkspace(req: operations.DescribeWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceResponse>;
    /**
     * Lists rule groups namespaces.
     */
    listRuleGroupsNamespaces(req: operations.ListRuleGroupsNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.ListRuleGroupsNamespacesResponse>;
    /**
     * Lists the tags you have assigned to the resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists all AMP workspaces, including workspaces being created or deleted.
     */
    listWorkspaces(req: operations.ListWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * Update an alert manager definition.
     */
    putAlertManagerDefinition(req: operations.PutAlertManagerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutAlertManagerDefinitionResponse>;
    /**
     * Update a rule groups namespace.
     */
    putRuleGroupsNamespace(req: operations.PutRuleGroupsNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.PutRuleGroupsNamespaceResponse>;
    /**
     * Creates tags for the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update logging configuration.
     */
    updateLoggingConfiguration(req: operations.UpdateLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoggingConfigurationResponse>;
    /**
     * Updates an AMP workspace alias.
     */
    updateWorkspaceAlias(req: operations.UpdateWorkspaceAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceAliasResponse>;
}
