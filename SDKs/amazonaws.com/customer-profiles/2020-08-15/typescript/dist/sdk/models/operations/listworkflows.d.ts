import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of workflow execution.
 */
export declare enum ListWorkflowsRequestBodyStatusEnum {
    NotStarted = "NOT_STARTED",
    InProgress = "IN_PROGRESS",
    Complete = "COMPLETE",
    Failed = "FAILED",
    Split = "SPLIT",
    Retry = "RETRY",
    Cancelled = "CANCELLED"
}
/**
 * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
 */
export declare enum ListWorkflowsRequestBodyWorkflowTypeEnum {
    AppflowIntegration = "APPFLOW_INTEGRATION"
}
export declare class ListWorkflowsRequestBody extends SpeakeasyBase {
    /**
     * Retrieve workflows ended after timestamp.
     */
    queryEndDate?: Date;
    /**
     * Retrieve workflows started after timestamp.
     */
    queryStartDate?: Date;
    /**
     * Status of workflow execution.
     */
    status?: ListWorkflowsRequestBodyStatusEnum;
    /**
     * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
     */
    workflowType?: ListWorkflowsRequestBodyWorkflowTypeEnum;
}
export declare class ListWorkflowsRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: ListWorkflowsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: number;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: string;
}
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listWorkflowsResponse?: shared.ListWorkflowsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
