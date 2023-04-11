import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://lakeformation.{region}.amazonaws.com", "https://lakeformation.{region}.amazonaws.com", "http://lakeformation.{region}.amazonaws.com.cn", "https://lakeformation.{region}.amazonaws.com.cn"];
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
 * <fullname>Lake Formation</fullname> <p>Defines the public endpoint for the Lake Formation service.</p>
 *
 * @see {@link https://docs.aws.amazon.com/lakeformation/} - Amazon Web Services documentation
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
     * Attaches one or more LF-tags to an existing resource.
     */
    addLFTagsToResource(req: operations.AddLFTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AddLFTagsToResourceResponse>;
    /**
     * <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
     */
    assumeDecoratedRoleWithSAML(req: operations.AssumeDecoratedRoleWithSAMLRequest, config?: AxiosRequestConfig): Promise<operations.AssumeDecoratedRoleWithSAMLResponse>;
    /**
     * Batch operation to grant permissions to the principal.
     */
    batchGrantPermissions(req: operations.BatchGrantPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGrantPermissionsResponse>;
    /**
     * Batch operation to revoke permissions from the principal.
     */
    batchRevokePermissions(req: operations.BatchRevokePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchRevokePermissionsResponse>;
    /**
     * Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
     */
    cancelTransaction(req: operations.CancelTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CancelTransactionResponse>;
    /**
     * Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
     */
    commitTransaction(req: operations.CommitTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CommitTransactionResponse>;
    /**
     * Creates a data cell filter to allow one to grant access to certain columns on certain rows.
     */
    createDataCellsFilter(req: operations.CreateDataCellsFilterRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataCellsFilterResponse>;
    /**
     * Creates an LF-tag with the specified name and values.
     */
    createLFTag(req: operations.CreateLFTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateLFTagResponse>;
    /**
     * Deletes a data cell filter.
     */
    deleteDataCellsFilter(req: operations.DeleteDataCellsFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataCellsFilterResponse>;
    /**
     * Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
     */
    deleteLFTag(req: operations.DeleteLFTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLFTagResponse>;
    /**
     * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
     */
    deleteObjectsOnCancel(req: operations.DeleteObjectsOnCancelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectsOnCancelResponse>;
    /**
     * <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
     */
    deregisterResource(req: operations.DeregisterResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterResourceResponse>;
    /**
     * Retrieves the current data access role for the given resource registered in Lake Formation.
     */
    describeResource(req: operations.DescribeResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceResponse>;
    /**
     * Returns the details of a single transaction.
     */
    describeTransaction(req: operations.DescribeTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTransactionResponse>;
    /**
     * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
     */
    extendTransaction(req: operations.ExtendTransactionRequest, config?: AxiosRequestConfig): Promise<operations.ExtendTransactionResponse>;
    /**
     * Returns a data cells filter.
     */
    getDataCellsFilter(req: operations.GetDataCellsFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetDataCellsFilterResponse>;
    /**
     * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.
     */
    getDataLakeSettings(req: operations.GetDataLakeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDataLakeSettingsResponse>;
    /**
     * Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
     */
    getEffectivePermissionsForPath(req: operations.GetEffectivePermissionsForPathRequest, config?: AxiosRequestConfig): Promise<operations.GetEffectivePermissionsForPathResponse>;
    /**
     * Returns an LF-tag definition.
     */
    getLFTag(req: operations.GetLFTagRequest, config?: AxiosRequestConfig): Promise<operations.GetLFTagResponse>;
    /**
     * Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
     */
    getQueryState(req: operations.GetQueryStateRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryStateResponse>;
    /**
     * Retrieves statistics on the planning and execution of a query.
     */
    getQueryStatistics(req: operations.GetQueryStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryStatisticsResponse>;
    /**
     * Returns the LF-tags applied to a resource.
     */
    getResourceLFTags(req: operations.GetResourceLFTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceLFTagsResponse>;
    /**
     * Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
     */
    getTableObjects(req: operations.GetTableObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetTableObjectsResponse>;
    /**
     * This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
     */
    getTemporaryGluePartitionCredentials(req: operations.GetTemporaryGluePartitionCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetTemporaryGluePartitionCredentialsResponse>;
    /**
     * Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
     */
    getTemporaryGlueTableCredentials(req: operations.GetTemporaryGlueTableCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetTemporaryGlueTableCredentialsResponse>;
    /**
     * Returns the work units resulting from the query. Work units can be executed in any order and in parallel.
     */
    getWorkUnitResults(req: operations.GetWorkUnitResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkUnitResultsResponse>;
    /**
     * Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
     */
    getWorkUnits(req: operations.GetWorkUnitsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkUnitsResponse>;
    /**
     * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    grantPermissions(req: operations.GrantPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GrantPermissionsResponse>;
    /**
     * Lists all the data cell filters on a table.
     */
    listDataCellsFilter(req: operations.ListDataCellsFilterRequest, config?: AxiosRequestConfig): Promise<operations.ListDataCellsFilterResponse>;
    /**
     * Lists LF-tags that the requester has permission to view.
     */
    listLFTags(req: operations.ListLFTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListLFTagsResponse>;
    /**
     * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    listPermissions(req: operations.ListPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * Lists the resources registered to be managed by the Data Catalog.
     */
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * Returns the configuration of all storage optimizers associated with a specified table.
     */
    listTableStorageOptimizers(req: operations.ListTableStorageOptimizersRequest, config?: AxiosRequestConfig): Promise<operations.ListTableStorageOptimizersResponse>;
    /**
     * <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
     */
    listTransactions(req: operations.ListTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
     */
    putDataLakeSettings(req: operations.PutDataLakeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutDataLakeSettingsResponse>;
    /**
     * <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
     */
    registerResource(req: operations.RegisterResourceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResourceResponse>;
    /**
     * Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
     */
    removeLFTagsFromResource(req: operations.RemoveLFTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLFTagsFromResourceResponse>;
    /**
     * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
     */
    revokePermissions(req: operations.RevokePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RevokePermissionsResponse>;
    /**
     * This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
     */
    searchDatabasesByLFTags(req: operations.SearchDatabasesByLFTagsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDatabasesByLFTagsResponse>;
    /**
     * This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
     */
    searchTablesByLFTags(req: operations.SearchTablesByLFTagsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTablesByLFTagsResponse>;
    /**
     * <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
     */
    startQueryPlanning(req: operations.StartQueryPlanningRequest, config?: AxiosRequestConfig): Promise<operations.StartQueryPlanningResponse>;
    /**
     * Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
     */
    startTransaction(req: operations.StartTransactionRequest, config?: AxiosRequestConfig): Promise<operations.StartTransactionResponse>;
    /**
     * Updates a data cell filter.
     */
    updateDataCellsFilter(req: operations.UpdateDataCellsFilterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataCellsFilterResponse>;
    /**
     * Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.
     */
    updateLFTag(req: operations.UpdateLFTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLFTagResponse>;
    /**
     * Updates the data access role used for vending access to the given (registered) resource in Lake Formation.
     */
    updateResource(req: operations.UpdateResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceResponse>;
    /**
     * Updates the manifest of Amazon S3 objects that make up the specified governed table.
     */
    updateTableObjects(req: operations.UpdateTableObjectsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTableObjectsResponse>;
    /**
     * Updates the configuration of the storage optimizers for a table.
     */
    updateTableStorageOptimizer(req: operations.UpdateTableStorageOptimizerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTableStorageOptimizerResponse>;
}
