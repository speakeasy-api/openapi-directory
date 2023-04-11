import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare enum ExecuteStatementRequestBodyFormatRecordsAsEnum {
    None = "NONE",
    Json = "JSON"
}
/**
 * Options that control how the result set is returned.
 */
export declare class ExecuteStatementRequestBodyResultSetOptions extends SpeakeasyBase {
    decimalReturnType?: shared.DecimalReturnTypeEnum;
    longReturnType?: shared.LongReturnTypeEnum;
}
export declare class ExecuteStatementRequestBody extends SpeakeasyBase {
    /**
     * <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note>
     */
    continueAfterTimeout?: boolean;
    /**
     * The name of the database.
     */
    database?: string;
    /**
     * <p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    formatRecordsAs?: ExecuteStatementRequestBodyFormatRecordsAsEnum;
    /**
     * A value that indicates whether to include metadata in the results.
     */
    includeResultMetadata?: boolean;
    /**
     * <p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note>
     */
    parameters?: shared.SqlParameter[];
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: string;
    /**
     * Options that control how the result set is returned.
     */
    resultSetOptions?: ExecuteStatementRequestBodyResultSetOptions;
    /**
     * <p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>
     */
    schema?: string;
    /**
     * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
     */
    secretArn: string;
    /**
     * The SQL statement to run.
     */
    sql: string;
    /**
     * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
     */
    transactionId?: string;
}
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    requestBody: ExecuteStatementRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    executeStatementResponse?: shared.ExecuteStatementResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableError
     */
    serviceUnavailableError?: any;
    /**
     * StatementTimeoutException
     */
    statementTimeoutException?: any;
}
