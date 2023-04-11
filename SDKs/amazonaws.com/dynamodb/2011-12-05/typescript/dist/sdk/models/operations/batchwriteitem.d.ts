import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchWriteItemXAmzTargetEnum {
    DynamoDB20111205BatchWriteItem = "DynamoDB_20111205.BatchWriteItem"
}
export declare class BatchWriteItemRequest extends SpeakeasyBase {
    batchWriteItemInput: shared.BatchWriteItemInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchWriteItemXAmzTargetEnum;
}
export declare class BatchWriteItemResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchWriteItemOutput?: shared.BatchWriteItemOutput;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
}
