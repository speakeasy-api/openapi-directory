import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
/**
 *  Describes the summary for an execution job for an Amplify app.
 */
export declare class JobSummary extends SpeakeasyBase {
    commitId: string;
    commitMessage: string;
    commitTime: Date;
    endTime?: Date;
    jobArn: string;
    jobId: string;
    jobType: JobTypeEnum;
    startTime: Date;
    status: JobStatusEnum;
}
