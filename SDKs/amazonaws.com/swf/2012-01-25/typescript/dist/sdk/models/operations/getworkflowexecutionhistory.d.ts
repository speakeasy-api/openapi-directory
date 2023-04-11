import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWorkflowExecutionHistoryXAmzTargetEnum {
    SimpleWorkflowServiceGetWorkflowExecutionHistory = "SimpleWorkflowService.GetWorkflowExecutionHistory"
}
export declare class GetWorkflowExecutionHistoryRequest extends SpeakeasyBase {
    getWorkflowExecutionHistoryInput: shared.GetWorkflowExecutionHistoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowExecutionHistoryXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class GetWorkflowExecutionHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    history?: shared.History;
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
