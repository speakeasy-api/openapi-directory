import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenRestrictions } from "./authtokenrestrictions";
/**
 * General settings
 */
export declare class GeneralSettings extends SpeakeasyBase {
    /**
     * Auth token restrictions
     */
    authTokenRestrictions?: AuthTokenRestrictions;
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
     * &#128679; Deprecated since v4.42.0
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
     * Defines if S3 is used as storage backend
     */
    useS3Storage?: boolean;
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
     * Please use `GET /system/config/policies/passwords` API to get configured password policies.
     */
    weakPasswordEnabled?: boolean;
}
