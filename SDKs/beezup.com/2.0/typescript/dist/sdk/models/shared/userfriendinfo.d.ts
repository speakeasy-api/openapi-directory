import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Get friend info
 */
export declare class UserFriendInfo extends SpeakeasyBase {
    /**
     * Your friend's user company name
     */
    company: string;
    /**
     * Your friend's user country iso code alpha 3
     */
    countryIsoCodeAlpha3: string;
    /**
     * Your friend's user email
     */
    email: string;
    /**
     * Your friend's user first name
     */
    firstName: string;
    /**
     * Your friend's user last name
     */
    lastName: string;
    /**
     * Your friend's user profile picture url
     */
    profilePictureUrl?: string;
    /**
     * Your friend's user id
     */
    userId: string;
    /**
     * Your friend's user occupation in his company
     */
    whatIDo?: string;
}
