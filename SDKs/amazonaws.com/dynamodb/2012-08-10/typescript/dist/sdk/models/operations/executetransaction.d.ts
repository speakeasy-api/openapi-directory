import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteTransactionXAmzTargetEnum {
    DynamoDB20120810ExecuteTransaction = "DynamoDB_20120810.ExecuteTransaction"
}
export declare class ExecuteTransactionRequest extends SpeakeasyBase {
    executeTransactionInput: shared.ExecuteTransactionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteTransactionXAmzTargetEnum;
}
export declare class ExecuteTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    executeTransactionOutput?: shared.ExecuteTransactionOutput;
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
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
    /**
     * TransactionInProgressException
     */
    transactionInProgressException?: any;
}
