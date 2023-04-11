import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CountClosedWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceCountClosedWorkflowExecutions = "SimpleWorkflowService.CountClosedWorkflowExecutions"
}
export declare class CountClosedWorkflowExecutionsRequest extends SpeakeasyBase {
    countClosedWorkflowExecutionsInput: shared.CountClosedWorkflowExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountClosedWorkflowExecutionsXAmzTargetEnum;
}
export declare class CountClosedWorkflowExecutionsResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    workflowExecutionCount?: shared.WorkflowExecutionCount;
}
