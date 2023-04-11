import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CountOpenWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceCountOpenWorkflowExecutions = "SimpleWorkflowService.CountOpenWorkflowExecutions"
}
export declare class CountOpenWorkflowExecutionsRequest extends SpeakeasyBase {
    countOpenWorkflowExecutionsInput: shared.CountOpenWorkflowExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountOpenWorkflowExecutionsXAmzTargetEnum;
}
export declare class CountOpenWorkflowExecutionsResponse extends SpeakeasyBase {
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
