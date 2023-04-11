import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BeginTransactionRequestBody extends SpeakeasyBase {
    /**
     * The name of the database.
     */
    database?: string;
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: string;
    /**
     * The name of the database schema.
     */
    schema?: string;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: string;
}
export declare class BeginTransactionRequest extends SpeakeasyBase {
    requestBody: BeginTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BeginTransactionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * Success
     */
    beginTransactionResponse?: shared.BeginTransactionResponse;
    contentType: string;
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
