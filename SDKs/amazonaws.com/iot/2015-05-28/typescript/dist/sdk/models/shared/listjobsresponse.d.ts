import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
/**
 * Success
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: JobSummary[];
    nextToken?: string;
}
