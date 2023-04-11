import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartNextPendingJobExecutionRequestBody extends SpeakeasyBase {
    /**
     * A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
     */
    statusDetails?: Record<string, string>;
    /**
     * Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).
     */
    stepTimeoutInMinutes?: number;
}
export declare class StartNextPendingJobExecutionRequest extends SpeakeasyBase {
    requestBody: StartNextPendingJobExecutionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the thing associated with the device.
     */
    thingName: string;
}
export declare class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startNextPendingJobExecutionResponse?: shared.StartNextPendingJobExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
