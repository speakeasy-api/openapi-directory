import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetItemXAmzTargetEnum {
    DynamoDB20111205GetItem = "DynamoDB_20111205.GetItem"
}
export declare class GetItemRequest extends SpeakeasyBase {
    getItemInput: shared.GetItemInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetItemXAmzTargetEnum;
}
export declare class GetItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getItemOutput?: shared.GetItemOutput;
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
