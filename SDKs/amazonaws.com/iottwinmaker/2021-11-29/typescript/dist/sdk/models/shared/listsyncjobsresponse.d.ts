import { SpeakeasyBase } from "../../../internal/utils";
import { SyncJobSummary } from "./syncjobsummary";
/**
 * Success
 */
export declare class ListSyncJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    syncJobSummaries?: SyncJobSummary[];
}
