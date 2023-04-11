import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Watched } from "./watched";
/**
 * Details of the active profile.
 */
export declare class ProfileDetail extends SpeakeasyBase {
    /**
     * A map of bookmarked itemIds => created date
     */
    bookmarked: Record<string, Date>;
    /**
     * Hex color value assigned to the profile.
     */
    color?: string;
    /**
     * Gets the Hero row clip auto playback enabled
     */
    heroAutoplay?: boolean;
    /**
     * Gets the Hero row clip auto playback audio enabled
     */
    heroWithAudio?: boolean;
    /**
     * The id of the profile.
     */
    id: string;
    /**
     * Whether the profile is active or not.
     *
     * @remarks
     *
     * **DEPRECATED** - Always true. Inactive profiles are no longer returned.
     *
     */
    isActive: boolean;
    /**
     * The code of the preferred language for the profile.
     *
     * @remarks
     * Must be a valid ISO language code e.g. "en-US" and must match the code of
     * one of the languages specified in the app config.
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    languageCode?: string;
    /**
     * Whether the profile has opted in or out of marketing material.
     *
     * @remarks
     *
     * **DEPRECATED** - Marketing material is no longer tied to profiles, only account. See `Account.marketingEnabled`.
     *
     */
    marketingEnabled: boolean;
    maxRatingContentFilter?: ClassificationSummary;
    minRatingPlaybackGuard?: ClassificationSummary;
    /**
     * The unique name of the profile.
     */
    name: string;
    /**
     * Whether a pin is required to enter the profile.
     */
    pinEnabled: boolean;
    /**
     * Whether the profile can make purchases with the account payment options.
     */
    purchaseEnabled: boolean;
    /**
     * A map of rated itemIds => rating out of 10
     */
    rated: Record<string, number>;
    /**
     * The segments a profile has been placed under
     */
    segments: string[];
    /**
     * A map of watched itemIds => last watched position
     */
    watched: Record<string, Watched>;
}
