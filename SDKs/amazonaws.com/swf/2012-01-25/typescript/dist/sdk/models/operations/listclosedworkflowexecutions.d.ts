import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListClosedWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceListClosedWorkflowExecutions = "SimpleWorkflowService.ListClosedWorkflowExecutions"
}
export declare class ListClosedWorkflowExecutionsRequest extends SpeakeasyBase {
    listClosedWorkflowExecutionsInput: shared.ListClosedWorkflowExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClosedWorkflowExecutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class ListClosedWorkflowExecutionsResponse extends SpeakeasyBase {
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
    workflowExecutionInfos?: shared.WorkflowExecutionInfos;
}
