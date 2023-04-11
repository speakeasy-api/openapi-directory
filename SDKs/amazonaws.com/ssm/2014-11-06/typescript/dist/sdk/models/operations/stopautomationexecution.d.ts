import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopAutomationExecutionXAmzTargetEnum {
    AmazonSSMStopAutomationExecution = "AmazonSSM.StopAutomationExecution"
}
export declare class StopAutomationExecutionRequest extends SpeakeasyBase {
    stopAutomationExecutionRequest: shared.StopAutomationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAutomationExecutionXAmzTargetEnum;
}
export declare class StopAutomationExecutionResponse extends SpeakeasyBase {
    /**
     * AutomationExecutionNotFoundException
     */
    automationExecutionNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAutomationStatusUpdateException
     */
    invalidAutomationStatusUpdateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopAutomationExecutionResult?: Record<string, any>;
}
