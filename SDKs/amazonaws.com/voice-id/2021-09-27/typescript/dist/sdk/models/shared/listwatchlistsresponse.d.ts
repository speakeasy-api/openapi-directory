import { SpeakeasyBase } from "../../../internal/utils";
import { WatchlistSummary } from "./watchlistsummary";
/**
 * Success
 */
export declare class ListWatchlistsResponse extends SpeakeasyBase {
    nextToken?: string;
    watchlistSummaries?: WatchlistSummary[];
}
