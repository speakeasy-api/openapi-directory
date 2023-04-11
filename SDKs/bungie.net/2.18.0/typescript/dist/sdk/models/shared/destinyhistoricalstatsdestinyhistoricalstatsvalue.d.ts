import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
 */
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValueBasic extends SpeakeasyBase {
    /**
     * Localized formated version of the value.
     */
    displayValue?: string;
    /**
     * Raw value of the statistic
     */
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
 */
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValuePga extends SpeakeasyBase {
    /**
     * Localized formated version of the value.
     */
    displayValue?: string;
    /**
     * Raw value of the statistic
     */
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
 */
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted extends SpeakeasyBase {
    /**
     * Localized formated version of the value.
     */
    displayValue?: string;
    /**
     * Raw value of the statistic
     */
    value?: number;
}
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValue extends SpeakeasyBase {
    /**
     * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
     */
    activityId?: number;
    /**
     * Basic stat value.
     */
    basic?: DestinyHistoricalStatsDestinyHistoricalStatsValueBasic;
    /**
     * Per game average for the statistic, if applicable
     */
    pga?: DestinyHistoricalStatsDestinyHistoricalStatsValuePga;
    /**
     * Unique ID for this stat
     */
    statId?: string;
    /**
     * Weighted value of the stat if a weight greater than 1 has been assigned.
     */
    weighted?: DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted;
}
