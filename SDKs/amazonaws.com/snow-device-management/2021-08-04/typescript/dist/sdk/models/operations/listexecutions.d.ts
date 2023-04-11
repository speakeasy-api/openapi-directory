import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure used to filter the tasks by their current state.
 */
export declare enum ListExecutionsStateEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Rejected = "REJECTED",
    TimedOut = "TIMED_OUT"
}
export declare class ListExecutionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of tasks to list per page.
     */
    maxResults?: number;
    /**
     * A pagination token to continue to the next page of tasks.
     */
    nextToken?: string;
    /**
     * A structure used to filter the tasks by their current state.
     */
    state?: ListExecutionsStateEnum;
    /**
     * The ID of the task.
     */
    taskId: string;
}
export declare class ListExecutionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listExecutionsOutput?: shared.ListExecutionsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
