import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://rds-data.{region}.amazonaws.com", "https://rds-data.{region}.amazonaws.com", "http://rds-data.{region}.amazonaws.com.cn", "https://rds-data.{region}.amazonaws.com.cn"];
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
 * <p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these statements, you work with the Data Service API.</p> <note> <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p> </note> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p></p>
 *
 * @see {@link https://docs.aws.amazon.com/rds-data/} - Amazon Web Services documentation
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
     * <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
     */
    batchExecuteStatement(req: operations.BatchExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.BatchExecuteStatementResponse>;
    /**
     * <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
     */
    beginTransaction(req: operations.BeginTransactionRequest, config?: AxiosRequestConfig): Promise<operations.BeginTransactionResponse>;
    /**
     * Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
     */
    commitTransaction(req: operations.CommitTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CommitTransactionResponse>;
    /**
     * <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
     */
    executeSql(req: operations.ExecuteSqlRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSqlResponse>;
    /**
     * <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
     */
    executeStatement(req: operations.ExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteStatementResponse>;
    /**
     * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
     */
    rollbackTransaction(req: operations.RollbackTransactionRequest, config?: AxiosRequestConfig): Promise<operations.RollbackTransactionResponse>;
}
