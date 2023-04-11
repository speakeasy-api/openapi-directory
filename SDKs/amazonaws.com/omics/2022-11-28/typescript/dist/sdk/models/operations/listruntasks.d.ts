import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter the list by status.
 */
export declare enum ListRunTasksStatusEnum {
    Pending = "PENDING",
    Starting = "STARTING",
    Running = "RUNNING",
    Stopping = "STOPPING",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED",
    Failed = "FAILED"
}
export declare class ListRunTasksRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The run's ID.
     */
    id: string;
    /**
     * The maximum number of run tasks to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: string;
    /**
     * Filter the list by status.
     */
    status?: ListRunTasksStatusEnum;
}
export declare class ListRunTasksResponse extends SpeakeasyBase {
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
    listRunTasksResponse?: shared.ListRunTasksResponse;
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
