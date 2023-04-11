import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
 */
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValueBasic extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValuePga extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted extends SpeakeasyBase {
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
 * Value of the stat for this player
 */
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValue extends SpeakeasyBase {
    /**
     * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
     */
    activityId?: number;
    /**
     * Basic stat value.
     */
    basic?: DestinyHistoricalStatsDestinyClanAggregateStatValueBasic;
    /**
     * Per game average for the statistic, if applicable
     */
    pga?: DestinyHistoricalStatsDestinyClanAggregateStatValuePga;
    /**
     * Unique ID for this stat
     */
    statId?: string;
    /**
     * Weighted value of the stat if a weight greater than 1 has been assigned.
     */
    weighted?: DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted;
}
export declare class DestinyHistoricalStatsDestinyClanAggregateStat extends SpeakeasyBase {
    /**
     * The id of the mode of stats (allPvp, allPvE, etc)
     */
    mode?: number;
    /**
     * The id of the stat
     */
    statId?: string;
    /**
     * Value of the stat for this player
     */
    value?: DestinyHistoricalStatsDestinyClanAggregateStatValue;
}
