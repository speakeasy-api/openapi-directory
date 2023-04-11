import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteItemXAmzTargetEnum {
    DynamoDB20111205DeleteItem = "DynamoDB_20111205.DeleteItem"
}
export declare class DeleteItemRequest extends SpeakeasyBase {
    deleteItemInput: shared.DeleteItemInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteItemXAmzTargetEnum;
}
export declare class DeleteItemResponse extends SpeakeasyBase {
    /**
     * ConditionalCheckFailedException
     */
    conditionalCheckFailedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteItemOutput?: shared.DeleteItemOutput;
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
