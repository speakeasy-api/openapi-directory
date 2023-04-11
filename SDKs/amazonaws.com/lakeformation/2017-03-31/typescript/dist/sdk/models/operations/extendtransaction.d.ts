import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtendTransactionRequestBody extends SpeakeasyBase {
    /**
     * The transaction to extend.
     */
    transactionId?: string;
}
export declare class ExtendTransactionRequest extends SpeakeasyBase {
    requestBody: ExtendTransactionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExtendTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    extendTransactionResponse?: Record<string, any>;
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
    /**
     * TransactionCommitInProgressException
     */
    transactionCommitInProgressException?: any;
    /**
     * TransactionCommittedException
     */
    transactionCommittedException?: any;
}
