import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStateMachineXAmzTargetEnum {
    AWSStepFunctionsCreateStateMachine = "AWSStepFunctions.CreateStateMachine"
}
export declare class CreateStateMachineRequest extends SpeakeasyBase {
    createStateMachineInput: shared.CreateStateMachineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStateMachineXAmzTargetEnum;
}
export declare class CreateStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStateMachineOutput?: shared.CreateStateMachineOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * InvalidDefinition
     */
    invalidDefinition?: any;
    /**
     * InvalidLoggingConfiguration
     */
    invalidLoggingConfiguration?: any;
    /**
     * InvalidName
     */
    invalidName?: any;
    /**
     * InvalidTracingConfiguration
     */
    invalidTracingConfiguration?: any;
    /**
     * StateMachineAlreadyExists
     */
    stateMachineAlreadyExists?: any;
    /**
     * StateMachineDeleting
     */
    stateMachineDeleting?: any;
    /**
     * StateMachineTypeNotSupported
     */
    stateMachineTypeNotSupported?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StateMachineLimitExceeded
     */
    stateMachineLimitExceeded?: any;
    /**
     * TooManyTags
     */
    tooManyTags?: any;
}
