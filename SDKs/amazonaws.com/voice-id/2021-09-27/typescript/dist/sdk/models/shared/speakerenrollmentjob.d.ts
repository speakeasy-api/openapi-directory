import { SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentConfig } from "./enrollmentconfig";
import { FailureDetails } from "./failuredetails";
import { InputDataConfig } from "./inputdataconfig";
import { JobProgress } from "./jobprogress";
import { OutputDataConfig } from "./outputdataconfig";
import { SpeakerEnrollmentJobStatusEnum } from "./speakerenrollmentjobstatusenum";
/**
 * Contains all the information about a speaker enrollment job.
 */
export declare class SpeakerEnrollmentJob extends SpeakeasyBase {
    createdAt?: Date;
    dataAccessRoleArn?: string;
    domainId?: string;
    endedAt?: Date;
    enrollmentConfig?: EnrollmentConfig;
    failureDetails?: FailureDetails;
    inputDataConfig?: InputDataConfig;
    jobId?: string;
    jobName?: string;
    jobProgress?: JobProgress;
    jobStatus?: SpeakerEnrollmentJobStatusEnum;
    outputDataConfig?: OutputDataConfig;
}
