import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
export declare class DestinyHistoricalStatsDestinyAggregateActivityStats extends SpeakeasyBase {
    /**
     * Hash ID that can be looked up in the DestinyActivityTable.
     */
    activityHash?: number;
    /**
     * Collection of stats for the player in this activity.
     */
    values?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
