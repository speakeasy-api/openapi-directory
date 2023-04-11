import { SpeakeasyBase } from "../../../internal/utils";
import { BatchJobExecutionStatusEnum } from "./batchjobexecutionstatusenum";
import { BatchJobIdentifier } from "./batchjobidentifier";
import { BatchJobTypeEnum } from "./batchjobtypeenum";
/**
 * Success
 */
export declare class GetBatchJobExecutionResponse extends SpeakeasyBase {
    applicationId: string;
    /**
     * Identifies a specific batch job.
     */
    batchJobIdentifier?: BatchJobIdentifier;
    endTime?: Date;
    executionId: string;
    jobId?: string;
    jobName?: string;
    jobType?: BatchJobTypeEnum;
    jobUser?: string;
    returnCode?: string;
    startTime: Date;
    status: BatchJobExecutionStatusEnum;
    statusReason?: string;
}
