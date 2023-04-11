import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
 */
export declare class User extends SpeakeasyBase {
    /**
     * The URL for this user's avatar image.
     */
    avatarUrl?: string;
    /**
     * The URL for the banner image that appears atop this user's profile page.
     */
    bannerUrl?: string;
    /**
     * The display name associated with this user (contains formatting the base username might not).
     */
    displayName?: string;
    /**
     * The URL for this user's profile.
     */
    profileUrl?: string;
    /**
     * The Twitter username associated with this user, if applicable.
     */
    twitter?: string;
    /**
     * The username associated with this user.
     */
    username?: string;
}
