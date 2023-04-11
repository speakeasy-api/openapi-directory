import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted extends SpeakeasyBase {
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
 * Score earned by the team
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore extends SpeakeasyBase {
    /**
     * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
     */
    activityId?: number;
    /**
     * Basic stat value.
     */
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic;
    /**
     * Per game average for the statistic, if applicable
     */
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga;
    /**
     * Unique ID for this stat
     */
    statId?: string;
    /**
     * Weighted value of the stat if a weight greater than 1 has been assigned.
     */
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted;
}
/**
 * Basic stat value.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted extends SpeakeasyBase {
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
 * Team's standing relative to other teams.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding extends SpeakeasyBase {
    /**
     * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
     */
    activityId?: number;
    /**
     * Basic stat value.
     */
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic;
    /**
     * Per game average for the statistic, if applicable
     */
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga;
    /**
     * Unique ID for this stat
     */
    statId?: string;
    /**
     * Weighted value of the stat if a weight greater than 1 has been assigned.
     */
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted;
}
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry extends SpeakeasyBase {
    /**
     * Score earned by the team
     */
    score?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore;
    /**
     * Team's standing relative to other teams.
     */
    standing?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding;
    /**
     * Integer ID for the team.
     */
    teamId?: number;
    /**
     * Alpha or Bravo
     */
    teamName?: string;
}
