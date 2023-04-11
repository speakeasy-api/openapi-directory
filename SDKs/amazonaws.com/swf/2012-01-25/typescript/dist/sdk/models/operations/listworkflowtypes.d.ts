import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkflowTypesXAmzTargetEnum {
    SimpleWorkflowServiceListWorkflowTypes = "SimpleWorkflowService.ListWorkflowTypes"
}
export declare class ListWorkflowTypesRequest extends SpeakeasyBase {
    listWorkflowTypesInput: shared.ListWorkflowTypesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkflowTypesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class ListWorkflowTypesResponse extends SpeakeasyBase {
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
    workflowTypeInfos?: shared.WorkflowTypeInfos;
}
