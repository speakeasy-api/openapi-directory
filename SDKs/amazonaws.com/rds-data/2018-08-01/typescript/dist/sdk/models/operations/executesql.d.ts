import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExecuteSqlRequestBody extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
     */
    awsSecretStoreArn: string;
    /**
     * The name of the database.
     */
    database?: string;
    /**
     * The ARN of the Aurora Serverless DB cluster.
     */
    dbClusterOrInstanceArn: string;
    /**
     * The name of the database schema.
     */
    schema?: string;
    /**
     * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
     */
    sqlStatements: string;
}
export declare class ExecuteSqlRequest extends SpeakeasyBase {
    requestBody: ExecuteSqlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExecuteSqlResponse extends SpeakeasyBase {
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
    executeSqlResponse?: shared.ExecuteSqlResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * ServiceUnavailableError
     */
    serviceUnavailableError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
