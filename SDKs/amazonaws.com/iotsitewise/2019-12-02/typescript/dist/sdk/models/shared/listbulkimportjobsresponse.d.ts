import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
/**
 * Success
 */
export declare class ListBulkImportJobsResponse extends SpeakeasyBase {
    jobSummaries: JobSummary[];
    nextToken?: string;
}
