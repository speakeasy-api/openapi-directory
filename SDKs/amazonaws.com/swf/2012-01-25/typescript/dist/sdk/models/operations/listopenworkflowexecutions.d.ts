import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOpenWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceListOpenWorkflowExecutions = "SimpleWorkflowService.ListOpenWorkflowExecutions"
}
export declare class ListOpenWorkflowExecutionsRequest extends SpeakeasyBase {
    listOpenWorkflowExecutionsInput: shared.ListOpenWorkflowExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpenWorkflowExecutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class ListOpenWorkflowExecutionsResponse extends SpeakeasyBase {
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
