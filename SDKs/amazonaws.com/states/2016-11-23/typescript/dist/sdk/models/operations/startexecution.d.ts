import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartExecutionXAmzTargetEnum {
    AWSStepFunctionsStartExecution = "AWSStepFunctions.StartExecution"
}
export declare class StartExecutionRequest extends SpeakeasyBase {
    startExecutionInput: shared.StartExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExecutionXAmzTargetEnum;
}
export declare class StartExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExecutionAlreadyExists
     */
    executionAlreadyExists?: any;
    /**
     * ExecutionLimitExceeded
     */
    executionLimitExceeded?: any;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * InvalidExecutionInput
     */
    invalidExecutionInput?: any;
    /**
     * InvalidName
     */
    invalidName?: any;
    /**
     * Success
     */
    startExecutionOutput?: shared.StartExecutionOutput;
    /**
     * StateMachineDeleting
     */
    stateMachineDeleting?: any;
    /**
     * StateMachineDoesNotExist
     */
    stateMachineDoesNotExist?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
