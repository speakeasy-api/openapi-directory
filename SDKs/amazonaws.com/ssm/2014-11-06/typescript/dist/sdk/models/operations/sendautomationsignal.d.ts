import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendAutomationSignalXAmzTargetEnum {
    AmazonSSMSendAutomationSignal = "AmazonSSM.SendAutomationSignal"
}
export declare class SendAutomationSignalRequest extends SpeakeasyBase {
    sendAutomationSignalRequest: shared.SendAutomationSignalRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendAutomationSignalXAmzTargetEnum;
}
export declare class SendAutomationSignalResponse extends SpeakeasyBase {
    /**
     * AutomationExecutionNotFoundException
     */
    automationExecutionNotFoundException?: any;
    /**
     * AutomationStepNotFoundException
     */
    automationStepNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAutomationSignalException
     */
    invalidAutomationSignalException?: any;
    /**
     * Success
     */
    sendAutomationSignalResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
