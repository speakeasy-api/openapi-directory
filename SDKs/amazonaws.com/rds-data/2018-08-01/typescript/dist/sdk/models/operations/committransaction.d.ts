import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommitTransactionRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: string;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: string;
    /**
     * The identifier of the transaction to end and commit.
     */
    transactionId: string;
}
export declare class CommitTransactionRequest extends SpeakeasyBase {
    requestBody: CommitTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CommitTransactionResponse extends SpeakeasyBase {
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
    commitTransactionResponse?: shared.CommitTransactionResponse;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
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
