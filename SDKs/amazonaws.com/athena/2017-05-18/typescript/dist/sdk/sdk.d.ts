import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://athena.{region}.amazonaws.com", "https://athena.{region}.amazonaws.com", "http://athena.{region}.amazonaws.com.cn", "https://athena.{region}.amazonaws.com.cn"];
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
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/athena/} - Amazon Web Services documentation
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
     * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
     */
    batchGetNamedQuery(req: operations.BatchGetNamedQueryRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetNamedQueryResponse>;
    /**
     * Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
     */
    batchGetPreparedStatement(req: operations.BatchGetPreparedStatementRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetPreparedStatementResponse>;
    /**
     * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
     */
    batchGetQueryExecution(req: operations.BatchGetQueryExecutionRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetQueryExecutionResponse>;
    /**
     * Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
     */
    createDataCatalog(req: operations.CreateDataCatalogRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataCatalogResponse>;
    /**
     * <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    createNamedQuery(req: operations.CreateNamedQueryRequest, config?: AxiosRequestConfig): Promise<operations.CreateNamedQueryResponse>;
    /**
     * Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
     */
    createNotebook(req: operations.CreateNotebookRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotebookResponse>;
    /**
     * Creates a prepared statement for use with SQL queries in Athena.
     */
    createPreparedStatement(req: operations.CreatePreparedStatementRequest, config?: AxiosRequestConfig): Promise<operations.CreatePreparedStatementResponse>;
    /**
     * Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
     */
    createPresignedNotebookUrl(req: operations.CreatePresignedNotebookUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreatePresignedNotebookUrlResponse>;
    /**
     * Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
     */
    createWorkGroup(req: operations.CreateWorkGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkGroupResponse>;
    /**
     * Deletes a data catalog.
     */
    deleteDataCatalog(req: operations.DeleteDataCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataCatalogResponse>;
    /**
     * <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    deleteNamedQuery(req: operations.DeleteNamedQueryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNamedQueryResponse>;
    /**
     * Deletes the specified notebook.
     */
    deleteNotebook(req: operations.DeleteNotebookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotebookResponse>;
    /**
     * Deletes the prepared statement with the specified name from the specified workgroup.
     */
    deletePreparedStatement(req: operations.DeletePreparedStatementRequest, config?: AxiosRequestConfig): Promise<operations.DeletePreparedStatementResponse>;
    /**
     * Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
     */
    deleteWorkGroup(req: operations.DeleteWorkGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkGroupResponse>;
    /**
     * Exports the specified notebook and its metadata.
     */
    exportNotebook(req: operations.ExportNotebookRequest, config?: AxiosRequestConfig): Promise<operations.ExportNotebookResponse>;
    /**
     * Describes a previously submitted calculation execution.
     */
    getCalculationExecution(req: operations.GetCalculationExecutionRequest, config?: AxiosRequestConfig): Promise<operations.GetCalculationExecutionResponse>;
    /**
     * Retrieves the unencrypted code that was executed for the calculation.
     */
    getCalculationExecutionCode(req: operations.GetCalculationExecutionCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetCalculationExecutionCodeResponse>;
    /**
     * Gets the status of a current calculation.
     */
    getCalculationExecutionStatus(req: operations.GetCalculationExecutionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCalculationExecutionStatusResponse>;
    /**
     * Returns the specified data catalog.
     */
    getDataCatalog(req: operations.GetDataCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetDataCatalogResponse>;
    /**
     * Returns a database object for the specified database and data catalog.
     */
    getDatabase(req: operations.GetDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseResponse>;
    /**
     * Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
     */
    getNamedQuery(req: operations.GetNamedQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetNamedQueryResponse>;
    /**
     * Retrieves notebook metadata for the specified notebook ID.
     */
    getNotebookMetadata(req: operations.GetNotebookMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetNotebookMetadataResponse>;
    /**
     * Retrieves the prepared statement with the specified name from the specified workgroup.
     */
    getPreparedStatement(req: operations.GetPreparedStatementRequest, config?: AxiosRequestConfig): Promise<operations.GetPreparedStatementResponse>;
    /**
     * Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
     */
    getQueryExecution(req: operations.GetQueryExecutionRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryExecutionResponse>;
    /**
     * <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
     */
    getQueryResults(req: operations.GetQueryResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResultsResponse>;
    /**
     * Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
     */
    getQueryRuntimeStatistics(req: operations.GetQueryRuntimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryRuntimeStatisticsResponse>;
    /**
     * Gets the full details of a previously created session, including the session status and configuration.
     */
    getSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    /**
     * Gets the current status of a session.
     */
    getSessionStatus(req: operations.GetSessionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionStatusResponse>;
    /**
     * Returns table metadata for the specified catalog, database, and table.
     */
    getTableMetadata(req: operations.GetTableMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetTableMetadataResponse>;
    /**
     * Returns information about the workgroup with the specified name.
     */
    getWorkGroup(req: operations.GetWorkGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkGroupResponse>;
    /**
     * Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
     */
    importNotebook(req: operations.ImportNotebookRequest, config?: AxiosRequestConfig): Promise<operations.ImportNotebookResponse>;
    /**
     * Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>).
     */
    listApplicationDPUSizes(req: operations.ListApplicationDPUSizesRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationDPUSizesResponse>;
    /**
     * Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
     */
    listCalculationExecutions(req: operations.ListCalculationExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCalculationExecutionsResponse>;
    /**
     * <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
     */
    listDataCatalogs(req: operations.ListDataCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataCatalogsResponse>;
    /**
     * Lists the databases in the specified data catalog.
     */
    listDatabases(req: operations.ListDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabasesResponse>;
    /**
     * Returns a list of engine versions that are available to choose from, including the Auto option.
     */
    listEngineVersions(req: operations.ListEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListEngineVersionsResponse>;
    /**
     * Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
     */
    listExecutors(req: operations.ListExecutorsRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutorsResponse>;
    /**
     * <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    listNamedQueries(req: operations.ListNamedQueriesRequest, config?: AxiosRequestConfig): Promise<operations.ListNamedQueriesResponse>;
    /**
     * Displays the notebook files for the specified workgroup in paginated format.
     */
    listNotebookMetadata(req: operations.ListNotebookMetadataRequest, config?: AxiosRequestConfig): Promise<operations.ListNotebookMetadataResponse>;
    /**
     * Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
     */
    listNotebookSessions(req: operations.ListNotebookSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotebookSessionsResponse>;
    /**
     * Lists the prepared statements in the specified workgroup.
     */
    listPreparedStatements(req: operations.ListPreparedStatementsRequest, config?: AxiosRequestConfig): Promise<operations.ListPreparedStatementsResponse>;
    /**
     * <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    listQueryExecutions(req: operations.ListQueryExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListQueryExecutionsResponse>;
    /**
     * Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
     */
    listSessions(req: operations.ListSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsResponse>;
    /**
     * Lists the metadata for the tables in the specified data catalog database.
     */
    listTableMetadata(req: operations.ListTableMetadataRequest, config?: AxiosRequestConfig): Promise<operations.ListTableMetadataResponse>;
    /**
     * Lists the tags associated with an Athena workgroup or data catalog resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists available workgroups for the account.
     */
    listWorkGroups(req: operations.ListWorkGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkGroupsResponse>;
    /**
     * Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
     */
    startCalculationExecution(req: operations.StartCalculationExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartCalculationExecutionResponse>;
    /**
     * Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
     */
    startQueryExecution(req: operations.StartQueryExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartQueryExecutionResponse>;
    /**
     * Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
     */
    startSession(req: operations.StartSessionRequest, config?: AxiosRequestConfig): Promise<operations.StartSessionResponse>;
    /**
     * <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
     */
    stopCalculationExecution(req: operations.StopCalculationExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StopCalculationExecutionResponse>;
    /**
     * <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    stopQueryExecution(req: operations.StopQueryExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StopQueryExecutionResponse>;
    /**
     * Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
     */
    terminateSession(req: operations.TerminateSessionRequest, config?: AxiosRequestConfig): Promise<operations.TerminateSessionResponse>;
    /**
     * Removes one or more tags from a data catalog or workgroup resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the data catalog that has the specified name.
     */
    updateDataCatalog(req: operations.UpdateDataCatalogRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataCatalogResponse>;
    /**
     * Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
     */
    updateNamedQuery(req: operations.UpdateNamedQueryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNamedQueryResponse>;
    /**
     * Updates the contents of a Spark notebook.
     */
    updateNotebook(req: operations.UpdateNotebookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotebookResponse>;
    /**
     * Updates the metadata for a notebook.
     */
    updateNotebookMetadata(req: operations.UpdateNotebookMetadataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotebookMetadataResponse>;
    /**
     * Updates a prepared statement.
     */
    updatePreparedStatement(req: operations.UpdatePreparedStatementRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePreparedStatementResponse>;
    /**
     * Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.
     */
    updateWorkGroup(req: operations.UpdateWorkGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkGroupResponse>;
}
