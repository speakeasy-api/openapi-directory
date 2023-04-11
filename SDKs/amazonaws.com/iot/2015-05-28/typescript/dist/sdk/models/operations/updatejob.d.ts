import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The criteria that determine when and how a job abort takes place.
 */
export declare class UpdateJobRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * The configuration that determines how many retries are allowed for each failure type for a job.
 */
export declare class UpdateJobRequestBodyJobExecutionsRetryConfig extends SpeakeasyBase {
    criteriaList?: shared.RetryCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
 */
export declare class UpdateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
 */
export declare class UpdateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
 */
export declare class UpdateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class UpdateJobRequestBody extends SpeakeasyBase {
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    abortConfig?: UpdateJobRequestBodyAbortConfig;
    /**
     * A short text description of the job.
     */
    description?: string;
    /**
     * The configuration that determines how many retries are allowed for each failure type for a job.
     */
    jobExecutionsRetryConfig?: UpdateJobRequestBodyJobExecutionsRetryConfig;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: UpdateJobRequestBodyJobExecutionsRolloutConfig;
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: UpdateJobRequestBodyPresignedUrlConfig;
    /**
     * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
     */
    timeoutConfig?: UpdateJobRequestBodyTimeoutConfig;
}
export declare class UpdateJobRequest extends SpeakeasyBase {
    requestBody: UpdateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the job to be updated.
     */
    jobId: string;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
     */
    namespaceId?: string;
}
export declare class UpdateJobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
