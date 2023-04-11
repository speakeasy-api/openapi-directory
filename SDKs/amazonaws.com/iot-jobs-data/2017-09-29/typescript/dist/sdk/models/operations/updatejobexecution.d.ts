import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
 */
export declare enum UpdateJobExecutionRequestBodyStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}
export declare class UpdateJobExecutionRequestBody extends SpeakeasyBase {
    /**
     * Optional. A number that identifies a particular job execution on a particular device.
     */
    executionNumber?: number;
    /**
     * Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)
     */
    expectedVersion?: number;
    /**
     * Optional. When set to true, the response contains the job document. The default is false.
     */
    includeJobDocument?: boolean;
    /**
     * Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.
     */
    includeJobExecutionState?: boolean;
    /**
     * The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
     */
    status: UpdateJobExecutionRequestBodyStatusEnum;
    /**
     *  Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
     */
    statusDetails?: Record<string, string>;
    /**
     * Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).
     */
    stepTimeoutInMinutes?: number;
}
export declare class UpdateJobExecutionRequest extends SpeakeasyBase {
    requestBody: UpdateJobExecutionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier assigned to this job when it was created.
     */
    jobId: string;
    /**
     * The name of the thing associated with the device.
     */
    thingName: string;
}
export declare class UpdateJobExecutionResponse extends SpeakeasyBase {
    /**
     * CertificateValidationException
     */
    certificateValidationException?: any;
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateTransitionException
     */
    invalidStateTransitionException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateJobExecutionResponse?: shared.UpdateJobExecutionResponse;
}
