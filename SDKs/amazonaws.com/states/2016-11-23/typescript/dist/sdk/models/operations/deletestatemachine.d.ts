import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStateMachineXAmzTargetEnum {
    AWSStepFunctionsDeleteStateMachine = "AWSStepFunctions.DeleteStateMachine"
}
export declare class DeleteStateMachineRequest extends SpeakeasyBase {
    deleteStateMachineInput: shared.DeleteStateMachineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStateMachineXAmzTargetEnum;
}
export declare class DeleteStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteStateMachineOutput?: Record<string, any>;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
