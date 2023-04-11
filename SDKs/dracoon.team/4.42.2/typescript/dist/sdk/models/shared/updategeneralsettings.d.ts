import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAuthTokenRestrictions } from "./updateauthtokenrestrictions";
/**
 * Request model for updating general settings
 */
export declare class UpdateGeneralSettings extends SpeakeasyBase {
    /**
     * Request model for updating auth token settings
     */
    authTokenRestrictions?: UpdateAuthTokenRestrictions;
    /**
     * Activation status of client-side encryption.
     *
     * @remarks
     *
     * Can only be enabled once; disabling is not possible.
     */
    cryptoEnabled?: boolean;
    /**
     * Enable email notification button
     */
    emailNotificationButtonEnabled?: boolean;
    /**
     * Each user has to confirm the EULA at first login.
     */
    eulaEnabled?: boolean;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * Defines if login fields should be hidden
     */
    hideLoginInputFields?: boolean;
    /**
     * &#128679; Deprecated since v4.12.0
     *
     * @remarks
     *
     * Determines if the media server is enabled
     */
    mediaServerEnabled?: boolean;
    /**
     * &#128640; Since v4.9.0
     *
     * @remarks
     *
     * Defines if S3 tags are enabled
     */
    s3TagsEnabled?: boolean;
    /**
     * Allow sending of share passwords via SMS
     */
    sharePasswordSmsEnabled?: boolean;
    /**
     * &#128679; Deprecated since v4.14.0
     *
     * @remarks
     *
     * Allow weak password
     *
     * * A weak password has to fulfill the following criteria:
     *
     *    * is at least 8 characters long
     *
     *    * contains letters and numbers
     *
     * * A strong password has to fulfill the following criteria in addition:
     *
     *    * contains at least one special character
     *
     *    * contains upper and lower case characters
     *
     * Please use `PUT /system/config/policies/passwords` API to change configured password policies.
     */
    weakPasswordEnabled?: boolean;
}
