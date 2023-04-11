import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendTaskHeartbeatXAmzTargetEnum {
    AWSStepFunctionsSendTaskHeartbeat = "AWSStepFunctions.SendTaskHeartbeat"
}
export declare class SendTaskHeartbeatRequest extends SpeakeasyBase {
    sendTaskHeartbeatInput: shared.SendTaskHeartbeatInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskHeartbeatXAmzTargetEnum;
}
export declare class SendTaskHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    sendTaskHeartbeatOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskDoesNotExist
     */
    taskDoesNotExist?: any;
    /**
     * TaskTimedOut
     */
    taskTimedOut?: any;
}
