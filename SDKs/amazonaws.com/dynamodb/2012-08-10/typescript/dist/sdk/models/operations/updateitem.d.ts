import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateItemXAmzTargetEnum {
    DynamoDB20120810UpdateItem = "DynamoDB_20120810.UpdateItem"
}
export declare class UpdateItemRequest extends SpeakeasyBase {
    updateItemInput: shared.UpdateItemInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateItemXAmzTargetEnum;
}
export declare class UpdateItemResponse extends SpeakeasyBase {
    /**
     * ConditionalCheckFailedException
     */
    conditionalCheckFailedException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ItemCollectionSizeLimitExceededException
     */
    itemCollectionSizeLimitExceededException?: any;
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
     * TransactionConflictException
     */
    transactionConflictException?: any;
    /**
     * Success
     */
    updateItemOutput?: shared.UpdateItemOutput;
}
