import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TransactGetItemsXAmzTargetEnum {
    DynamoDB20120810TransactGetItems = "DynamoDB_20120810.TransactGetItems"
}
export declare class TransactGetItemsRequest extends SpeakeasyBase {
    transactGetItemsInput: shared.TransactGetItemsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransactGetItemsXAmzTargetEnum;
}
export declare class TransactGetItemsResponse extends SpeakeasyBase {
    contentType: string;
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
    transactGetItemsOutput?: shared.TransactGetItemsOutput;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
}
