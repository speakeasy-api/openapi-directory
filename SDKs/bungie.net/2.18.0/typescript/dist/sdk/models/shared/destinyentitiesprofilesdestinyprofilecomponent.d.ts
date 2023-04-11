import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export declare class DestinyEntitiesProfilesDestinyProfileComponentUserInfo extends SpeakeasyBase {
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
 * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
 */
export declare class DestinyEntitiesProfilesDestinyProfileComponent extends SpeakeasyBase {
    /**
     * If populated, this is a reference to the event card that is currently active.
     */
    activeEventCardHash?: number;
    /**
     * A list of the character IDs, for further querying on your part.
     */
    characterIds?: number[];
    /**
     * The 'current' Guardian Rank value, which starts at rank 1.
     */
    currentGuardianRank?: number;
    /**
     * If populated, this is a reference to the season that is currently active.
     */
    currentSeasonHash?: number;
    /**
     * If populated, this is the reward power cap for the current season.
     */
    currentSeasonRewardPowerCap?: number;
    /**
     * The last time the user played with any character on this Profile.
     */
    dateLastPlayed?: Date;
    /**
     * A list of hashes for event cards that a profile owns. Unlike most values in versionsOwned, these stay with the profile across all platforms.
     */
    eventCardHashesOwned?: number[];
    /**
     * The 'lifetime highest' Guardian Rank value, which starts at rank 1.
     */
    lifetimeHighestGuardianRank?: number;
    /**
     * A list of seasons that this profile owns. Unlike versionsOwned, these stay with the profile across Platforms, and thus will be valid.
     *
     * @remarks
     *  It turns out that Stadia Pro subscriptions will give access to seasons but only while playing on Stadia and with an active subscription. So some users (users who have Stadia Pro but choose to play on some other platform) won't see these as available: it will be whatever seasons are available for the platform on which they last played.
     */
    seasonHashes?: number[];
    /**
     * If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
     */
    userInfo?: DestinyEntitiesProfilesDestinyProfileComponentUserInfo;
    /**
     * If you want to know what expansions they own, this will contain that data.
     *
     * @remarks
     *  IMPORTANT: This field may not return the data you're interested in for Cross-Saved users. It returns the last ownership data we saw for this account - which is to say, what they've purchased on the platform on which they last played, which now could be a different platform.
     *  If you don't care about per-platform ownership and only care about whatever platform it seems they are playing on most recently, then this should be "good enough." Otherwise, this should be considered deprecated. We do not have a good alternative to provide at this time with platform specific ownership data for DLC.
     */
    versionsOwned?: number;
}
