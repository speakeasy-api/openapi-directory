import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export declare class DestinyResponsesDestinyErrorProfileInfoCard extends SpeakeasyBase {
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
 * If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
 *
 * @remarks
 * Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
 */
export declare class DestinyResponsesDestinyErrorProfile extends SpeakeasyBase {
    /**
     * The error that we encountered. You should be able to look up localized text to show to the user for these failures.
     */
    errorCode?: number;
    /**
     * Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
     */
    infoCard?: DestinyResponsesDestinyErrorProfileInfoCard;
}
