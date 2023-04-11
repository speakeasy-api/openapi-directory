import { SpeakeasyBase } from "../../../internal/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRetryConfig } from "./jobexecutionsretryconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { JobProcessDetails } from "./jobprocessdetails";
import { JobStatusEnum } from "./jobstatusenum";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { ScheduledJobRollout } from "./scheduledjobrollout";
import { SchedulingConfig } from "./schedulingconfig";
import { TargetSelectionEnum } from "./targetselectionenum";
import { TimeoutConfig } from "./timeoutconfig";
/**
 * The <code>Job</code> object contains details about a job.
 */
export declare class Job extends SpeakeasyBase {
    abortConfig?: AbortConfig;
    comment?: string;
    completedAt?: Date;
    createdAt?: Date;
    description?: string;
    documentParameters?: Record<string, string>;
    forceCanceled?: boolean;
    isConcurrent?: boolean;
    jobArn?: string;
    jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    jobId?: string;
    jobProcessDetails?: JobProcessDetails;
    jobTemplateArn?: string;
    lastUpdatedAt?: Date;
    namespaceId?: string;
    presignedUrlConfig?: PresignedUrlConfig;
    reasonCode?: string;
    scheduledJobRollouts?: ScheduledJobRollout[];
    schedulingConfig?: SchedulingConfig;
    status?: JobStatusEnum;
    targetSelection?: TargetSelectionEnum;
    targets?: string[];
    timeoutConfig?: TimeoutConfig;
}
