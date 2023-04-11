import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendTaskSuccessXAmzTargetEnum {
    AWSStepFunctionsSendTaskSuccess = "AWSStepFunctions.SendTaskSuccess"
}
export declare class SendTaskSuccessRequest extends SpeakeasyBase {
    sendTaskSuccessInput: shared.SendTaskSuccessInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTaskSuccessXAmzTargetEnum;
}
export declare class SendTaskSuccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidOutput
     */
    invalidOutput?: any;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    sendTaskSuccessOutput?: Record<string, any>;
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
