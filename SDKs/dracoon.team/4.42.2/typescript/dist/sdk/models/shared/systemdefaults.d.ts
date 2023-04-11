import { SpeakeasyBase } from "../../../internal/utils";
/**
 * System defaults
 */
export declare class SystemDefaults extends SpeakeasyBase {
    /**
     * Default expiration period for Download Shares in days.
     */
    downloadShareDefaultExpirationPeriod?: number;
    /**
     * Default expiration period for all uploaded files in days.
     */
    fileDefaultExpirationPeriod?: number;
    /**
     * &#128679; Deprecated since v4.42.0
     *
     * @remarks
     *
     * Defines if login fields should be hidden
     */
    hideLoginInputFields?: boolean;
    /**
     * Define which language should be default.
     */
    languageDefault?: string;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * Defines if new users get the role Non Member Viewer by default
     */
    nonmemberViewerDefault?: boolean;
    /**
     * Default expiration period for Upload Shares in days.
     */
    uploadShareDefaultExpirationPeriod?: number;
}
