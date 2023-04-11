import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Output structure for the ListJobs operation.
 */
export declare class ListJobsOutput extends SpeakeasyBase {
    /**
     * Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.
     */
    isTruncated?: boolean;
    /**
     * A list container for Jobs returned by the ListJobs operation.
     */
    jobs?: Job[];
}
