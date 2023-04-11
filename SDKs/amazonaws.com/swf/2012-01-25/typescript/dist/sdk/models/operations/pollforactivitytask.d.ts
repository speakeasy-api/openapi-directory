import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PollForActivityTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForActivityTask = "SimpleWorkflowService.PollForActivityTask"
}
export declare class PollForActivityTaskRequest extends SpeakeasyBase {
    pollForActivityTaskInput: shared.PollForActivityTaskInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForActivityTaskXAmzTargetEnum;
}
export declare class PollForActivityTaskResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activityTask?: shared.ActivityTask;
    contentType: string;
    /**
     * LimitExceededFault
     */
    limitExceededFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
