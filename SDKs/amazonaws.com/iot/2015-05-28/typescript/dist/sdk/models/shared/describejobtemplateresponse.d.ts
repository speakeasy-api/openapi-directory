import { SpeakeasyBase } from "../../../internal/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRetryConfig } from "./jobexecutionsretryconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { TimeoutConfig } from "./timeoutconfig";
/**
 * Success
 */
export declare class DescribeJobTemplateResponse extends SpeakeasyBase {
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    abortConfig?: AbortConfig;
    createdAt?: Date;
    description?: string;
    document?: string;
    documentSource?: string;
    jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    jobTemplateArn?: string;
    jobTemplateId?: string;
    maintenanceWindows?: MaintenanceWindow[];
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: PresignedUrlConfig;
    /**
     * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
     */
    timeoutConfig?: TimeoutConfig;
}
