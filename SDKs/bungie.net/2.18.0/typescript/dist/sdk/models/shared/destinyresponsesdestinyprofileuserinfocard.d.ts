import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
/**
 * This is the silver available on this Profile across any platforms on which they have purchased silver.
 *
 * @remarks
 *  This is only available if you are requesting yourself.
 */
export declare class DestinyResponsesDestinyProfileUserInfoCardPlatformSilver extends SpeakeasyBase {
    /**
     * If a Profile is played on multiple platforms, this is the silver they have for each platform, keyed by Membership Type.
     */
    platformSilver?: Record<string, DestinyEntitiesItemsDestinyItemComponent>;
}
/**
 * If this profile is not in a cross save pairing, this will return the game versions that we believe this profile has access to.
 *
 * @remarks
 *  For the time being, we will not return this information for any membership that is in a cross save pairing. The gist is that, once the pairing occurs, we do not currently have a consistent way to get that information for the profile's original Platform, and thus gameVersions would be too inconsistent (based on the last platform they happened to play on) for the info to be useful.
 *  If we ever can get this data, this field will be deprecated and replaced with data on the DestinyLinkedProfileResponse itself, with game versions per linked Platform. But since we can't get that, we have this as a stop-gap measure for getting the data in the only situation that we currently need it.
 */
export declare enum DestinyResponsesDestinyProfileUserInfoCardUnpairedGameVersionsEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Four = "4",
    Eight = "8",
    Sixteen = "16",
    ThirtyTwo = "32",
    SixtyFour = "64",
    OneHundredAndTwentyEight = "128",
    TwoHundredAndFiftySix = "256",
    FiveHundredAndTwelve = "512"
}
export declare class DestinyResponsesDestinyProfileUserInfoCard extends SpeakeasyBase {
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
    dateLastPlayed?: Date;
    /**
     * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
     */
    displayName?: string;
    /**
     * URL the Icon if available.
     */
    iconPath?: string;
    /**
     * If true, this account is hooked up as the "Primary" cross save account for one or more platforms.
     */
    isCrossSavePrimary?: boolean;
    /**
     * If this profile is being overridden/obscured by Cross Save, this will be set to true. We will still return the profile for display purposes where users need to know the info: it is up to any given area of the app/site to determine if this profile should still be shown.
     */
    isOverridden?: boolean;
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
     * This is the silver available on this Profile across any platforms on which they have purchased silver.
     *
     * @remarks
     *  This is only available if you are requesting yourself.
     */
    platformSilver?: DestinyResponsesDestinyProfileUserInfoCardPlatformSilver;
    /**
     * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
     */
    supplementalDisplayName?: string;
    /**
     * If this profile is not in a cross save pairing, this will return the game versions that we believe this profile has access to.
     *
     * @remarks
     *  For the time being, we will not return this information for any membership that is in a cross save pairing. The gist is that, once the pairing occurs, we do not currently have a consistent way to get that information for the profile's original Platform, and thus gameVersions would be too inconsistent (based on the last platform they happened to play on) for the info to be useful.
     *  If we ever can get this data, this field will be deprecated and replaced with data on the DestinyLinkedProfileResponse itself, with game versions per linked Platform. But since we can't get that, we have this as a stop-gap measure for getting the data in the only situation that we currently need it.
     */
    unpairedGameVersions?: DestinyResponsesDestinyProfileUserInfoCardUnpairedGameVersionsEnum;
}
