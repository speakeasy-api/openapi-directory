import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetItemXAmzTargetEnum {
    DynamoDB20120810BatchGetItem = "DynamoDB_20120810.BatchGetItem"
}
export declare class BatchGetItemRequest extends SpeakeasyBase {
    batchGetItemInput: shared.BatchGetItemInput;
    /**
     * Pagination token
     */
    requestItems?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetItemXAmzTargetEnum;
}
export declare class BatchGetItemResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetItemOutput?: shared.BatchGetItemOutput;
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
