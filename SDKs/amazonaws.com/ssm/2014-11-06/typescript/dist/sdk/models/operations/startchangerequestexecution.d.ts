import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartChangeRequestExecutionXAmzTargetEnum {
    AmazonSSMStartChangeRequestExecution = "AmazonSSM.StartChangeRequestExecution"
}
export declare class StartChangeRequestExecutionRequest extends SpeakeasyBase {
    startChangeRequestExecutionRequest: shared.StartChangeRequestExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartChangeRequestExecutionXAmzTargetEnum;
}
export declare class StartChangeRequestExecutionResponse extends SpeakeasyBase {
    /**
     * AutomationDefinitionNotApprovedException
     */
    automationDefinitionNotApprovedException?: any;
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
     * Success
     */
    startChangeRequestExecutionResult?: shared.StartChangeRequestExecutionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
