import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutItemXAmzTargetEnum {
    DynamoDB20111205PutItem = "DynamoDB_20111205.PutItem"
}
export declare class PutItemRequest extends SpeakeasyBase {
    putItemInput: shared.PutItemInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutItemXAmzTargetEnum;
}
export declare class PutItemResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * Success
     */
    putItemOutput?: shared.PutItemOutput;
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
