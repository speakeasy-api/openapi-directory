import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendTaskFailureXAmzTargetEnum {
    AWSStepFunctionsSendTaskFailure = "AWSStepFunctions.SendTaskFailure"
}
export declare class SendTaskFailureRequest extends SpeakeasyBase {
    sendTaskFailureInput: shared.SendTaskFailureInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskFailureXAmzTargetEnum;
}
export declare class SendTaskFailureResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    sendTaskFailureOutput?: Record<string, any>;
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
