import { SpeakeasyBase } from "../../../internal/utils";
import { DailyStatsNestedJson } from "./dailystatsnestedjson";
/**
 * Data with Market averages and stats
 */
export declare class DailyStats extends SpeakeasyBase {
    /**
     * All nested JSON of stats
     */
    dom?: DailyStatsNestedJson;
    /**
     * All nested JSON of stats
     */
    milesStats?: DailyStatsNestedJson;
    /**
     * All nested JSON of stats
     */
    priceStats?: DailyStatsNestedJson;
    /**
     * Number of units of this car for sale on the market
     */
    unitsForSale?: number;
}
