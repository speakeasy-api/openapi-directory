import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSyncExecutionXAmzTargetEnum {
    AWSStepFunctionsStartSyncExecution = "AWSStepFunctions.StartSyncExecution"
}
export declare class StartSyncExecutionRequest extends SpeakeasyBase {
    startSyncExecutionInput: shared.StartSyncExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSyncExecutionXAmzTargetEnum;
}
export declare class StartSyncExecutionResponse extends SpeakeasyBase {
    contentType: string;
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
    startSyncExecutionOutput?: shared.StartSyncExecutionOutput;
    /**
     * StateMachineDeleting
     */
    stateMachineDeleting?: any;
    /**
     * StateMachineDoesNotExist
     */
    stateMachineDoesNotExist?: any;
    /**
     * StateMachineTypeNotSupported
     */
    stateMachineTypeNotSupported?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
