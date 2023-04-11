import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTimeToLiveXAmzTargetEnum {
    DynamoDB20120810UpdateTimeToLive = "DynamoDB_20120810.UpdateTimeToLive"
}
export declare class UpdateTimeToLiveRequest extends SpeakeasyBase {
    updateTimeToLiveInput: shared.UpdateTimeToLiveInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTimeToLiveXAmzTargetEnum;
}
export declare class UpdateTimeToLiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateTimeToLiveOutput?: shared.UpdateTimeToLiveOutput;
}
