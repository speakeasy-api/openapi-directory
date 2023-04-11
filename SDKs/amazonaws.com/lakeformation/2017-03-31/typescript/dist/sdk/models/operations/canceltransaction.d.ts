import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelTransactionRequestBody extends SpeakeasyBase {
    /**
     * The transaction to cancel.
     */
    transactionId: string;
}
export declare class CancelTransactionRequest extends SpeakeasyBase {
    requestBody: CancelTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelTransactionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelTransactionResponse?: Record<string, any>;
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
     * TransactionCommitInProgressException
     */
    transactionCommitInProgressException?: any;
    /**
     * TransactionCommittedException
     */
    transactionCommittedException?: any;
}
