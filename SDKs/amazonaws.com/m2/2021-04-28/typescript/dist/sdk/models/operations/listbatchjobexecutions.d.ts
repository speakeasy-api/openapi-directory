import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the batch job executions.
 */
export declare enum ListBatchJobExecutionsStatusEnum {
    Submitting = "Submitting",
    Holding = "Holding",
    Dispatching = "Dispatching",
    Running = "Running",
    Cancelling = "Cancelling",
    Cancelled = "Cancelled",
    Succeeded = "Succeeded",
    Failed = "Failed",
    SucceededWithWarning = "Succeeded With Warning"
}
export declare class ListBatchJobExecutionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the application.
     */
    applicationId: string;
    /**
     * The unique identifier of each batch job execution.
     */
    executionIds?: string[];
    /**
     * The name of each batch job execution.
     */
    jobName?: string;
    /**
     * The maximum number of batch job executions to return.
     */
    maxResults?: number;
    /**
     * A pagination token to control the number of batch job executions displayed in the list.
     */
    nextToken?: string;
    /**
     * The time after which the batch job executions started.
     */
    startedAfter?: Date;
    /**
     * The time before the batch job executions started.
     */
    startedBefore?: Date;
    /**
     * The status of the batch job executions.
     */
    status?: ListBatchJobExecutionsStatusEnum;
}
export declare class ListBatchJobExecutionsResponse extends SpeakeasyBase {
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
    listBatchJobExecutionsResponse?: shared.ListBatchJobExecutionsResponse;
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
