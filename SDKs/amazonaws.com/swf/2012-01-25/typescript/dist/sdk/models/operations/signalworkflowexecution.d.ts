import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SignalWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceSignalWorkflowExecution = "SimpleWorkflowService.SignalWorkflowExecution"
}
export declare class SignalWorkflowExecutionRequest extends SpeakeasyBase {
    signalWorkflowExecutionInput: shared.SignalWorkflowExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SignalWorkflowExecutionXAmzTargetEnum;
}
export declare class SignalWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
