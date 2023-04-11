import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TransactWriteItemsXAmzTargetEnum {
    DynamoDB20120810TransactWriteItems = "DynamoDB_20120810.TransactWriteItems"
}
export declare class TransactWriteItemsRequest extends SpeakeasyBase {
    transactWriteItemsInput: shared.TransactWriteItemsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransactWriteItemsXAmzTargetEnum;
}
export declare class TransactWriteItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    transactWriteItemsOutput?: shared.TransactWriteItemsOutput;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
    /**
     * TransactionInProgressException
     */
    transactionInProgressException?: any;
}
