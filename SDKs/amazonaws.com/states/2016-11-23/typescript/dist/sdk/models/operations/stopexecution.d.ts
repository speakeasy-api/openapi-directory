import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopExecutionXAmzTargetEnum {
    AWSStepFunctionsStopExecution = "AWSStepFunctions.StopExecution"
}
export declare class StopExecutionRequest extends SpeakeasyBase {
    stopExecutionInput: shared.StopExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopExecutionXAmzTargetEnum;
}
export declare class StopExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExecutionDoesNotExist
     */
    executionDoesNotExist?: any;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopExecutionOutput?: shared.StopExecutionOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
