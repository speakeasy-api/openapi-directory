import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RequestCancelWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceRequestCancelWorkflowExecution = "SimpleWorkflowService.RequestCancelWorkflowExecution"
}
export declare class RequestCancelWorkflowExecutionRequest extends SpeakeasyBase {
    requestCancelWorkflowExecutionInput: shared.RequestCancelWorkflowExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestCancelWorkflowExecutionXAmzTargetEnum;
}
export declare class RequestCancelWorkflowExecutionResponse extends SpeakeasyBase {
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
