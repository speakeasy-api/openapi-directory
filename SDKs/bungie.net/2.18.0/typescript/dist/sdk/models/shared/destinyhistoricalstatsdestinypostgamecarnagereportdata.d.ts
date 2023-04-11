import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportentry";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportteamentry";
/**
 * Summary information about the activity that was played.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportData extends SpeakeasyBase {
    /**
     * Details about the activity.
     */
    activityDetails?: DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails;
    /**
     * True if the activity was started from the beginning, if that information is available and the activity was played post Witch Queen release.
     */
    activityWasStartedFromBeginning?: boolean;
    /**
     * Collection of players and their data for this activity.
     */
    entries?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry[];
    /**
     * Date and time for the activity.
     */
    period?: Date;
    /**
     * If this activity has "phases", this is the phase at which the activity was started. This value is only valid for activities before the Beyond Light expansion shipped. Subsequent activities will not have a valid value here.
     */
    startingPhaseIndex?: number;
    /**
     * Collection of stats for the player in this activity.
     */
    teams?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry[];
}
