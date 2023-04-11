import { SpeakeasyBase } from "../../../internal/utils";
export declare class AboutApiVersion extends SpeakeasyBase {
    /**
     * This API version major number.
     */
    majorNumber?: number;
    /**
     * This API version minor number.
     */
    minorNumber?: number;
}
/**
 * **This API version number**.
 *
 * @remarks
 *
 */
export declare class About extends SpeakeasyBase {
    /**
     * **The release date of this API, ISO 8601 format.**
     *
     * @remarks
     *
     */
    apiReleaseDateIso8601?: string;
    apiVersion?: AboutApiVersion;
    /**
     * **The list of available languages.**
     *
     * @remarks
     *
     * Each language is identified by its ISO 639-1, two-letter code.
     *
     * The list elements are comma-separated and sorted in ascending order.
     *
     */
    availableLanguagesIso6391?: string;
}
