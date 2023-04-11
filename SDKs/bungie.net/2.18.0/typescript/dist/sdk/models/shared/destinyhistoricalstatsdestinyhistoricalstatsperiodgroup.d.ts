import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
/**
 * Summary information about the activity that was played.
 */
export declare class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails extends SpeakeasyBase {
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played.
     */
    directorActivityHash?: number;
    /**
     * The unique identifier for this *specific* match that was played.
     *
     * @remarks
     * This value can be used to get additional data about this activity such as who else was playing via the GetPostGameCarnageReport endpoint.
     */
    instanceId?: number;
    /**
     * Whether or not the match was a private match.
     */
    isPrivate?: boolean;
    /**
     * The Membership Type indicating the platform on which this match was played.
     */
    membershipType?: number;
    /**
     * Indicates the most specific game mode of the activity that we could find.
     */
    mode?: number;
    /**
     * The list of all Activity Modes to which this activity applies, including aggregates. This will let you see, for example, whether the activity was both Clash and part of the Trials of the Nine event.
     */
    modes?: number[];
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played. If I had this to do over, it'd be named activityHash. Too late now.
     */
    referenceId?: number;
}
export declare class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup extends SpeakeasyBase {
    /**
     * If the period group is for a specific activity, this property will be set.
     */
    activityDetails?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails;
    /**
     * Period for the group. If the stat periodType is day, then this will have a specific day. If the type is monthly, then this value will be the first day of the applicable month. This value is not set when the periodType is 'all time'.
     */
    period?: Date;
    /**
     * Collection of stats for the period.
     */
    values?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
