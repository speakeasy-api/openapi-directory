import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalWeaponStats } from "./destinyhistoricalstatsdestinyhistoricalweaponstats";
/**
 * Extended data extracted from the activity blob.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended extends SpeakeasyBase {
    /**
     * Collection of stats for the player in this activity.
     */
    values?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    /**
     * List of weapons and their perspective values.
     */
    weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[];
}
/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo extends SpeakeasyBase {
    /**
     * The list of Membership Types indicating the platforms on which this Membership can be used.
     *
     * @remarks
     *  Not in Cross Save = its original membership type. Cross Save Primary = Any membership types it is overridding, and its original membership type Cross Save Overridden = Empty list
     */
    applicableMembershipTypes?: number[];
    /**
     * The bungie global display name, if set.
     */
    bungieGlobalDisplayName?: string;
    /**
     * The bungie global display name code, if set.
     */
    bungieGlobalDisplayNameCode?: number;
    /**
     * If there is a cross save override in effect, this value will tell you the type that is overridding this one.
     */
    crossSaveOverride?: number;
    /**
     * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
     */
    displayName?: string;
    /**
     * URL the Icon if available.
     */
    iconPath?: string;
    /**
     * If True, this is a public user membership.
     */
    isPublic?: boolean;
    /**
     * Membership ID as they user is known in the Accounts service
     */
    membershipId?: number;
    /**
     * Type of the membership. Not necessarily the native type.
     */
    membershipType?: number;
    /**
     * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
     */
    supplementalDisplayName?: string;
}
/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo extends SpeakeasyBase {
    /**
     * The list of Membership Types indicating the platforms on which this Membership can be used.
     *
     * @remarks
     *  Not in Cross Save = its original membership type. Cross Save Primary = Any membership types it is overridding, and its original membership type Cross Save Overridden = Empty list
     */
    applicableMembershipTypes?: number[];
    /**
     * The bungie global display name, if set.
     */
    bungieGlobalDisplayName?: string;
    /**
     * The bungie global display name code, if set.
     */
    bungieGlobalDisplayNameCode?: number;
    /**
     * If there is a cross save override in effect, this value will tell you the type that is overridding this one.
     */
    crossSaveOverride?: number;
    /**
     * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
     */
    displayName?: string;
    /**
     * URL the Icon if available.
     */
    iconPath?: string;
    /**
     * If True, this is a public user membership.
     */
    isPublic?: boolean;
    /**
     * Membership ID as they user is known in the Accounts service
     */
    membershipId?: number;
    /**
     * Type of the membership. Not necessarily the native type.
     */
    membershipType?: number;
    /**
     * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
     */
    supplementalDisplayName?: string;
}
/**
 * Identity details of the player
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer extends SpeakeasyBase {
    /**
     * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
     */
    bungieNetUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo;
    /**
     * Class of the character if applicable and available.
     */
    characterClass?: string;
    /**
     * Level of the character if available. Zero if it is not available.
     */
    characterLevel?: number;
    /**
     * Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
     */
    clanName?: string;
    /**
     * Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
     */
    clanTag?: string;
    classHash?: number;
    /**
     * Details about the player as they are known in game (platform display name, Destiny emblem)
     */
    destinyUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo;
    /**
     * If we know the emblem's hash, this can be used to look up the player's emblem at the time of a match when receiving PGCR data, or otherwise their currently equipped emblem (if we are able to obtain it).
     */
    emblemHash?: number;
    genderHash?: number;
    /**
     * Light Level of the character if available. Zero if it is not available.
     */
    lightLevel?: number;
    raceHash?: number;
}
/**
 * Basic stat value.
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted extends SpeakeasyBase {
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
 * Score of the player if available
 */
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore extends SpeakeasyBase {
    /**
     * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
     */
    activityId?: number;
    /**
     * Basic stat value.
     */
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic;
    /**
     * Per game average for the statistic, if applicable
     */
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga;
    /**
     * Unique ID for this stat
     */
    statId?: string;
    /**
     * Weighted value of the stat if a weight greater than 1 has been assigned.
     */
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted;
}
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntry extends SpeakeasyBase {
    /**
     * ID of the player's character used in the activity.
     */
    characterId?: number;
    /**
     * Extended data extracted from the activity blob.
     */
    extended?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended;
    /**
     * Identity details of the player
     */
    player?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer;
    /**
     * Score of the player if available
     */
    score?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore;
    /**
     * Standing of the player
     */
    standing?: number;
    /**
     * Collection of stats for the player in this activity.
     */
    values?: Record<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
