import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { LastRunErrorStatus } from "./lastrunerrorstatus";
import { S3BucketCriteriaForJob } from "./s3bucketcriteriaforjob";
import { S3BucketDefinitionForJob } from "./s3bucketdefinitionforjob";
import { UserPausedDetails } from "./userpauseddetails";
/**
 * Provides information about a classification job, including the current status of the job.
 */
export declare class JobSummary extends SpeakeasyBase {
    bucketCriteria?: S3BucketCriteriaForJob;
    bucketDefinitions?: S3BucketDefinitionForJob[];
    createdAt?: Date;
    jobId?: string;
    jobStatus?: JobStatusEnum;
    jobType?: JobTypeEnum;
    lastRunErrorStatus?: LastRunErrorStatus;
    name?: string;
    userPausedDetails?: UserPausedDetails;
}
