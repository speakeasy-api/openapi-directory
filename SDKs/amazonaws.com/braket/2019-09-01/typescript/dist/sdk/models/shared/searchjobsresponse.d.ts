import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
/**
 * Success
 */
export declare class SearchJobsResponse extends SpeakeasyBase {
    jobs: JobSummary[];
    nextToken?: string;
}
