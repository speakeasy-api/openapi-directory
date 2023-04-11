import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateStateMachineXAmzTargetEnum {
    AWSStepFunctionsUpdateStateMachine = "AWSStepFunctions.UpdateStateMachine"
}
export declare class UpdateStateMachineRequest extends SpeakeasyBase {
    updateStateMachineInput: shared.UpdateStateMachineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStateMachineXAmzTargetEnum;
}
export declare class UpdateStateMachineResponse extends SpeakeasyBase {
    contentType: string;
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
     * InvalidTracingConfiguration
     */
    invalidTracingConfiguration?: any;
    /**
     * MissingRequiredParameter
     */
    missingRequiredParameter?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StateMachineDeleting
     */
    stateMachineDeleting?: any;
    /**
     * StateMachineDoesNotExist
     */
    stateMachineDoesNotExist?: any;
    /**
     * Success
     */
    updateStateMachineOutput?: shared.UpdateStateMachineOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
