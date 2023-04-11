import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { FraudsterRegistrationJobStatusEnum } from "./fraudsterregistrationjobstatusenum";
import { InputDataConfig } from "./inputdataconfig";
import { JobProgress } from "./jobprogress";
import { OutputDataConfig } from "./outputdataconfig";
import { RegistrationConfig } from "./registrationconfig";
/**
 * Contains all the information about a fraudster registration job.
 */
export declare class FraudsterRegistrationJob extends SpeakeasyBase {
    createdAt?: Date;
    dataAccessRoleArn?: string;
    domainId?: string;
    endedAt?: Date;
    failureDetails?: FailureDetails;
    inputDataConfig?: InputDataConfig;
    jobId?: string;
    jobName?: string;
    jobProgress?: JobProgress;
    jobStatus?: FraudsterRegistrationJobStatusEnum;
    outputDataConfig?: OutputDataConfig;
    registrationConfig?: RegistrationConfig;
}
