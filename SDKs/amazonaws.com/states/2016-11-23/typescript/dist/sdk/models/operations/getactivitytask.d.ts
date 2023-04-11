import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetActivityTaskXAmzTargetEnum {
    AWSStepFunctionsGetActivityTask = "AWSStepFunctions.GetActivityTask"
}
export declare class GetActivityTaskRequest extends SpeakeasyBase {
    getActivityTaskInput: shared.GetActivityTaskInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetActivityTaskXAmzTargetEnum;
}
export declare class GetActivityTaskResponse extends SpeakeasyBase {
    /**
     * ActivityDoesNotExist
     */
    activityDoesNotExist?: any;
    /**
     * ActivityWorkerLimitExceeded
     */
    activityWorkerLimitExceeded?: any;
    contentType: string;
    /**
     * Success
     */
    getActivityTaskOutput?: shared.GetActivityTaskOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
