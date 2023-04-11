import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinyAdvancedAwaAuthorizationResult extends SpeakeasyBase {
    /**
     * Credential used to prove the user authorized an advanced write action.
     */
    actionToken?: string;
    /**
     * Message to the app developer to help understand the response.
     */
    developerNote?: string;
    /**
     * This token may be used to perform the requested action this number of times, at a maximum. If this value is 0, then there is no limit.
     */
    maximumNumberOfUses?: number;
    /**
     * MembershipType from the permission request.
     */
    membershipType?: number;
    responseReason?: number;
    /**
     * Advanced Write Action Type from the permission request.
     */
    type?: number;
    /**
     * Indication of how the user responded to the request. If the value is "Approved" the actionToken will contain the token that can be presented when performing the advanced write action.
     */
    userSelection?: number;
    /**
     * Time, UTC, when token expires.
     */
    validUntil?: Date;
}
