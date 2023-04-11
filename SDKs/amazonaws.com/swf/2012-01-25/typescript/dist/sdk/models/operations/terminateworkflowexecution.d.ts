import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceTerminateWorkflowExecution = "SimpleWorkflowService.TerminateWorkflowExecution"
}
export declare class TerminateWorkflowExecutionRequest extends SpeakeasyBase {
    terminateWorkflowExecutionInput: shared.TerminateWorkflowExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateWorkflowExecutionXAmzTargetEnum;
}
export declare class TerminateWorkflowExecutionResponse extends SpeakeasyBase {
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
