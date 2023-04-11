import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
/**
 * Success
 */
export declare class ListClassificationJobsResponse extends SpeakeasyBase {
    items?: JobSummary[];
    nextToken?: string;
}
