import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Registration details.
 */
export declare class RegistrationRequest extends SpeakeasyBase {
    email: string;
    firstName?: string;
    /**
     * The code of the preferred language for the primary profile.
     *
     * @remarks
     * Must be a valid ISO language code e.g. "en-US" and must match the code of
     * one of the languages specified in the app config.
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    languageCode?: string;
    lastName?: string;
    /**
     * Whether to receive marketing material or not. Default to true.
     */
    marketing?: boolean;
    password: string;
    /**
     * The primary account pin.
     */
    pin?: string;
    /**
     * The segments to apply to the primary profile.
     */
    segments?: string[];
}
