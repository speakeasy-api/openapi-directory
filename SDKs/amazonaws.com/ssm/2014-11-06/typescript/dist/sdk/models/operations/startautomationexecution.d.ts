import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartAutomationExecutionXAmzTargetEnum {
    AmazonSSMStartAutomationExecution = "AmazonSSM.StartAutomationExecution"
}
export declare class StartAutomationExecutionRequest extends SpeakeasyBase {
    startAutomationExecutionRequest: shared.StartAutomationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAutomationExecutionXAmzTargetEnum;
}
export declare class StartAutomationExecutionResponse extends SpeakeasyBase {
    /**
     * AutomationDefinitionNotFoundException
     */
    automationDefinitionNotFoundException?: any;
    /**
     * AutomationDefinitionVersionNotFoundException
     */
    automationDefinitionVersionNotFoundException?: any;
    /**
     * AutomationExecutionLimitExceededException
     */
    automationExecutionLimitExceededException?: any;
    contentType: string;
    /**
     * IdempotentParameterMismatch
     */
    idempotentParameterMismatch?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAutomationExecutionParametersException
     */
    invalidAutomationExecutionParametersException?: any;
    /**
     * InvalidTarget
     */
    invalidTarget?: any;
    /**
     * Success
     */
    startAutomationExecutionResult?: shared.StartAutomationExecutionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
