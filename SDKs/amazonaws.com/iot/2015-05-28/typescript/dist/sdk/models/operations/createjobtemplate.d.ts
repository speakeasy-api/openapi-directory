import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The criteria that determine when and how a job abort takes place.
 */
export declare class CreateJobTemplateRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * The configuration that determines how many retries are allowed for each failure type for a job.
 */
export declare class CreateJobTemplateRequestBodyJobExecutionsRetryConfig extends SpeakeasyBase {
    criteriaList?: shared.RetryCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
 */
export declare class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
 */
export declare class CreateJobTemplateRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
 */
export declare class CreateJobTemplateRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class CreateJobTemplateRequestBody extends SpeakeasyBase {
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    abortConfig?: CreateJobTemplateRequestBodyAbortConfig;
    /**
     * A description of the job document.
     */
    description: string;
    /**
     * The job document. Required if you don't specify a value for <code>documentSource</code>.
     */
    document?: string;
    /**
     * <p>An S3 link to the job document to use in the template. Required if you don't specify a value for <code>document</code>.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
     */
    documentSource?: string;
    /**
     * The ARN of the job to use as the basis for the job template.
     */
    jobArn?: string;
    /**
     * The configuration that determines how many retries are allowed for each failure type for a job.
     */
    jobExecutionsRetryConfig?: CreateJobTemplateRequestBodyJobExecutionsRetryConfig;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;
    /**
     * Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job.
     */
    maintenanceWindows?: shared.MaintenanceWindow[];
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: CreateJobTemplateRequestBodyPresignedUrlConfig;
    /**
     * Metadata that can be used to manage the job template.
     */
    tags?: shared.Tag[];
    /**
     * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
     */
    timeoutConfig?: CreateJobTemplateRequestBodyTimeoutConfig;
}
export declare class CreateJobTemplateRequest extends SpeakeasyBase {
    requestBody: CreateJobTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the job template. We recommend using a UUID. Alpha-numeric characters, "-", and "_" are valid for use here.
     */
    jobTemplateId: string;
}
export declare class CreateJobTemplateResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createJobTemplateResponse?: shared.CreateJobTemplateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
