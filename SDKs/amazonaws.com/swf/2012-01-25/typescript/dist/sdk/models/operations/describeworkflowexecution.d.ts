import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceDescribeWorkflowExecution = "SimpleWorkflowService.DescribeWorkflowExecution"
}
export declare class DescribeWorkflowExecutionRequest extends SpeakeasyBase {
    describeWorkflowExecutionInput: shared.DescribeWorkflowExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowExecutionXAmzTargetEnum;
}
export declare class DescribeWorkflowExecutionResponse extends SpeakeasyBase {
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
    workflowExecutionDetail?: shared.WorkflowExecutionDetail;
}
