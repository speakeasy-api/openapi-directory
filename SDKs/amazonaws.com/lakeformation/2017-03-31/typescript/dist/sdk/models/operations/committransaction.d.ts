import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommitTransactionRequestBody extends SpeakeasyBase {
    /**
     * The transaction to commit.
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
     * Success
     */
    commitTransactionResponse?: shared.CommitTransactionResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
}
