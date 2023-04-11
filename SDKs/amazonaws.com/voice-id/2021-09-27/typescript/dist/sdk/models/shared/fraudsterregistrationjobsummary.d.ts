import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { FraudsterRegistrationJobStatusEnum } from "./fraudsterregistrationjobstatusenum";
import { JobProgress } from "./jobprogress";
/**
 * Contains a summary of information about a fraudster registration job.
 */
export declare class FraudsterRegistrationJobSummary extends SpeakeasyBase {
    createdAt?: Date;
    domainId?: string;
    endedAt?: Date;
    failureDetails?: FailureDetails;
    jobId?: string;
    jobName?: string;
    jobProgress?: JobProgress;
    jobStatus?: FraudsterRegistrationJobStatusEnum;
}
