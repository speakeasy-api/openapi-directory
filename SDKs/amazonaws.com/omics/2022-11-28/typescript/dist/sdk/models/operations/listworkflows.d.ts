import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The workflows' type.
 */
export declare enum ListWorkflowsTypeEnum {
    Private = "PRIVATE",
    Service = "SERVICE"
}
export declare class ListWorkflowsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of workflows to return in one page of results.
     */
    maxResults?: number;
    /**
     * The workflows' name.
     */
    name?: string;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: string;
    /**
     * The workflows' type.
     */
    type?: ListWorkflowsTypeEnum;
}
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listWorkflowsResponse?: shared.ListWorkflowsResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
