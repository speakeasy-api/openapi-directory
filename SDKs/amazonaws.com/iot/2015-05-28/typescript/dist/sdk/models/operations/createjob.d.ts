import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The criteria that determine when and how a job abort takes place.
 */
export declare class CreateJobRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * The configuration that determines how many retries are allowed for each failure type for a job.
 */
export declare class CreateJobRequestBodyJobExecutionsRetryConfig extends SpeakeasyBase {
    criteriaList?: shared.RetryCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
 */
export declare class CreateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
 */
export declare class CreateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
/**
 * Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.
 */
export declare class CreateJobRequestBodySchedulingConfig extends SpeakeasyBase {
    endBehavior?: shared.JobEndBehaviorEnum;
    endTime?: string;
    maintenanceWindows?: shared.MaintenanceWindow[];
    startTime?: string;
}
/**
 * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
 */
export declare enum CreateJobRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
 */
export declare class CreateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class CreateJobRequestBody extends SpeakeasyBase {
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    abortConfig?: CreateJobRequestBodyAbortConfig;
    /**
     * A short text description of the job.
     */
    description?: string;
    /**
     * The job document. Required if you don't specify a value for <code>documentSource</code>.
     */
    document?: string;
    /**
     * <p>Parameters of an Amazon Web Services managed template that you can specify to create the job document.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note>
     */
    documentParameters?: Record<string, string>;
    /**
     * <p>An S3 link to the job document. Required if you don't specify a value for <code>document</code>.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
     */
    documentSource?: string;
    /**
     * The configuration that determines how many retries are allowed for each failure type for a job.
     */
    jobExecutionsRetryConfig?: CreateJobRequestBodyJobExecutionsRetryConfig;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: CreateJobRequestBodyJobExecutionsRolloutConfig;
    /**
     * The ARN of the job template used to create the job.
     */
    jobTemplateArn?: string;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
     */
    namespaceId?: string;
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: CreateJobRequestBodyPresignedUrlConfig;
    /**
     * Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.
     */
    schedulingConfig?: CreateJobRequestBodySchedulingConfig;
    /**
     * Metadata which can be used to manage the job.
     */
    tags?: shared.Tag[];
    /**
     * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
     */
    targetSelection?: CreateJobRequestBodyTargetSelectionEnum;
    /**
     * A list of things and thing groups to which the job should be sent.
     */
    targets: string[];
    /**
     * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
     */
    timeoutConfig?: CreateJobRequestBodyTimeoutConfig;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    requestBody: CreateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A job identifier which must be unique for your Amazon Web Services account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
     */
    jobId: string;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createJobResponse?: shared.CreateJobResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
