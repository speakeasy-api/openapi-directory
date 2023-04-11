import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Representation of a job returned by the ListJobs operation.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".
     */
    creationDate?: Date;
    /**
     * Indicates whether the job was canceled.
     */
    isCanceled?: boolean;
    /**
     * A unique identifier which refers to a particular job.
     */
    jobId?: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType?: JobTypeEnum;
}
