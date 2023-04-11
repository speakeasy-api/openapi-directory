import { SpeakeasyBase } from "../../../internal/utils";
import { JobListEntry } from "./joblistentry";
/**
 * Success
 */
export declare class ListClusterJobsResult extends SpeakeasyBase {
    jobListEntries?: JobListEntry[];
    nextToken?: string;
}
