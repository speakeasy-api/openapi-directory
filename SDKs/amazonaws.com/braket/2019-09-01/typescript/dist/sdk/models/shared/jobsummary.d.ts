import { SpeakeasyBase } from "../../../internal/utils";
import { JobPrimaryStatusEnum } from "./jobprimarystatusenum";
/**
 * Provides summary information about an Amazon Braket job.
 */
export declare class JobSummary extends SpeakeasyBase {
    createdAt: Date;
    device: string;
    endedAt?: Date;
    jobArn: string;
    jobName: string;
    startedAt?: Date;
    status: JobPrimaryStatusEnum;
    tags?: Record<string, string>;
}
