import { SpeakeasyBase } from "../../../internal/utils";
import { BatchJobExecutionStatusEnum } from "./batchjobexecutionstatusenum";
import { BatchJobIdentifier } from "./batchjobidentifier";
import { BatchJobTypeEnum } from "./batchjobtypeenum";
/**
 * A subset of the possible batch job attributes. Used in the batch job list.
 */
export declare class BatchJobExecutionSummary extends SpeakeasyBase {
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
    returnCode?: string;
    startTime: Date;
    status: BatchJobExecutionStatusEnum;
}
