import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for reseting user's login password
 */
export declare class ResetPasswordRequest extends SpeakeasyBase {
    /**
     * IETF language tag
     */
    creatorLanguage?: string;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * Language ID or ISO 639-1 code
     */
    language?: string;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * User login name
     */
    login?: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Username
     */
    userName?: string;
}
