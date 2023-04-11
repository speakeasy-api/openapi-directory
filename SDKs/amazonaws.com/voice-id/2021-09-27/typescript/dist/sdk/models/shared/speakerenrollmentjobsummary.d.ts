import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { JobProgress } from "./jobprogress";
import { SpeakerEnrollmentJobStatusEnum } from "./speakerenrollmentjobstatusenum";
/**
 * Contains a summary of information about a speaker enrollment job.
 */
export declare class SpeakerEnrollmentJobSummary extends SpeakeasyBase {
    createdAt?: Date;
    domainId?: string;
    endedAt?: Date;
    failureDetails?: FailureDetails;
    jobId?: string;
    jobName?: string;
    jobProgress?: JobProgress;
    jobStatus?: SpeakerEnrollmentJobStatusEnum;
}
