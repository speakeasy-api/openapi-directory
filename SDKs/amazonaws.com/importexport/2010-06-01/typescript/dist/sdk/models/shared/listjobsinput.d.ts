import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input structure for the ListJobs operation.
 */
export declare class ListJobsInput extends SpeakeasyBase {
    /**
     * Specifies the version of the client tool.
     */
    apiVersion?: string;
    /**
     * Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.
     */
    marker?: string;
    /**
     * Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.
     */
    maxJobs?: number;
}
