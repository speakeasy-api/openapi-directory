import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAutomationExecutionXAmzTargetEnum {
    AmazonSSMGetAutomationExecution = "AmazonSSM.GetAutomationExecution"
}
export declare class GetAutomationExecutionRequest extends SpeakeasyBase {
    getAutomationExecutionRequest: shared.GetAutomationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutomationExecutionXAmzTargetEnum;
}
export declare class GetAutomationExecutionResponse extends SpeakeasyBase {
    /**
     * AutomationExecutionNotFoundException
     */
    automationExecutionNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    getAutomationExecutionResult?: shared.GetAutomationExecutionResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
