import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Updated profile details.
 */
export declare class ProfileUpdateRequest extends SpeakeasyBase {
    /**
     * Sets the Hero row clip auto playback enabled
     */
    heroAutoplay?: boolean;
    /**
     * Sets the Hero row clip auto playback audio enabled
     */
    heroWithAudio?: boolean;
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
     * The unique name of the profile.
     */
    name?: string;
    /**
     * Whether an account pin is required to enter the profile.
     *
     * @remarks
     *
     * If no account pin is defined this has no impact.
     *
     */
    pinEnabled?: boolean;
    /**
     * Whether the profile can make purchases with the account payment options.
     */
    purchaseEnabled?: boolean;
    /**
     * The segments a profile should be placed under
     */
    segments?: string[];
}
