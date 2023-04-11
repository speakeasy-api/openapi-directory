import { SpeakeasyBase } from "../../../internal/utils";
import { SyncResourceSummary } from "./syncresourcesummary";
/**
 * Success
 */
export declare class ListSyncResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    syncResources?: SyncResourceSummary[];
}
