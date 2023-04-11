import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://redshift-serverless.{region}.amazonaws.com", "https://redshift-serverless.{region}.amazonaws.com", "http://redshift-serverless.{region}.amazonaws.com.cn", "https://redshift-serverless.{region}.amazonaws.com.cn"];
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
 * <p>This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless. </p> <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers. </p> <p> To learn more about Amazon Redshift Serverless, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/redshift-serverless/} - Amazon Web Services documentation
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
     * Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
     */
    convertRecoveryPointToSnapshot(req: operations.ConvertRecoveryPointToSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ConvertRecoveryPointToSnapshotResponse>;
    /**
     * Creates an Amazon Redshift Serverless managed VPC endpoint.
     */
    createEndpointAccess(req: operations.CreateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointAccessResponse>;
    /**
     * Creates a namespace in Amazon Redshift Serverless.
     */
    createNamespace(req: operations.CreateNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNamespaceResponse>;
    /**
     * Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
     */
    createSnapshot(req: operations.CreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotResponse>;
    /**
     * Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.
     */
    createUsageLimit(req: operations.CreateUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsageLimitResponse>;
    /**
     * Creates an workgroup in Amazon Redshift Serverless.
     */
    createWorkgroup(req: operations.CreateWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkgroupResponse>;
    /**
     * Deletes an Amazon Redshift Serverless managed VPC endpoint.
     */
    deleteEndpointAccess(req: operations.DeleteEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointAccessResponse>;
    /**
     * Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
     */
    deleteNamespace(req: operations.DeleteNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNamespaceResponse>;
    /**
     * Deletes the specified resource policy.
     */
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * Deletes a snapshot from Amazon Redshift Serverless.
     */
    deleteSnapshot(req: operations.DeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnapshotResponse>;
    /**
     * Deletes a usage limit from Amazon Redshift Serverless.
     */
    deleteUsageLimit(req: operations.DeleteUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsageLimitResponse>;
    /**
     * Deletes a workgroup.
     */
    deleteWorkgroup(req: operations.DeleteWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkgroupResponse>;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
     */
    getCredentials(req: operations.GetCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetCredentialsResponse>;
    /**
     * Returns information, such as the name, about a VPC endpoint.
     */
    getEndpointAccess(req: operations.GetEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointAccessResponse>;
    /**
     * Returns information about a namespace in Amazon Redshift Serverless.
     */
    getNamespace(req: operations.GetNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceResponse>;
    /**
     * Returns information about a recovery point.
     */
    getRecoveryPoint(req: operations.GetRecoveryPointRequest, config?: AxiosRequestConfig): Promise<operations.GetRecoveryPointResponse>;
    /**
     * Returns a resource policy.
     */
    getResourcePolicy(req: operations.GetResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePolicyResponse>;
    /**
     * Returns information about a specific snapshot.
     */
    getSnapshot(req: operations.GetSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetSnapshotResponse>;
    /**
     * Returns information about a <code>TableRestoreStatus</code> object.
     */
    getTableRestoreStatus(req: operations.GetTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetTableRestoreStatusResponse>;
    /**
     * Returns information about a usage limit.
     */
    getUsageLimit(req: operations.GetUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageLimitResponse>;
    /**
     * Returns information about a specific workgroup.
     */
    getWorkgroup(req: operations.GetWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupResponse>;
    /**
     * Returns an array of <code>EndpointAccess</code> objects and relevant information.
     */
    listEndpointAccess(req: operations.ListEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointAccessResponse>;
    /**
     * Returns information about a list of specified namespaces.
     */
    listNamespaces(req: operations.ListNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.ListNamespacesResponse>;
    /**
     * Returns an array of recovery points.
     */
    listRecoveryPoints(req: operations.ListRecoveryPointsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecoveryPointsResponse>;
    /**
     * Returns a list of snapshots.
     */
    listSnapshots(req: operations.ListSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListSnapshotsResponse>;
    /**
     * Returns information about an array of <code>TableRestoreStatus</code> objects.
     */
    listTableRestoreStatus(req: operations.ListTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListTableRestoreStatusResponse>;
    /**
     * Lists the tags assigned to a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists all usage limits within Amazon Redshift Serverless.
     */
    listUsageLimits(req: operations.ListUsageLimitsRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageLimitsResponse>;
    /**
     * Returns information about a list of specified workgroups.
     */
    listWorkgroups(req: operations.ListWorkgroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkgroupsResponse>;
    /**
     * Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
     */
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * Restore the data from a recovery point.
     */
    restoreFromRecoveryPoint(req: operations.RestoreFromRecoveryPointRequest, config?: AxiosRequestConfig): Promise<operations.RestoreFromRecoveryPointResponse>;
    /**
     * Restores a namespace from a snapshot.
     */
    restoreFromSnapshot(req: operations.RestoreFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.RestoreFromSnapshotResponse>;
    /**
     * Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
     */
    restoreTableFromSnapshot(req: operations.RestoreTableFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.RestoreTableFromSnapshotResponse>;
    /**
     * Assigns one or more tags to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag or set of tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an Amazon Redshift Serverless managed endpoint.
     */
    updateEndpointAccess(req: operations.UpdateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointAccessResponse>;
    /**
     * Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
     */
    updateNamespace(req: operations.UpdateNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNamespaceResponse>;
    /**
     * Updates a snapshot.
     */
    updateSnapshot(req: operations.UpdateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSnapshotResponse>;
    /**
     * Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
     */
    updateUsageLimit(req: operations.UpdateUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsageLimitResponse>;
    /**
     * Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
     */
    updateWorkgroup(req: operations.UpdateWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkgroupResponse>;
}
