import { SpeakeasyBase } from "../../../internal/utils";
import { MfaConfig } from "./mfaconfig";
import { ObjectExpiration } from "./objectexpiration";
import { UserAuthDataUpdateRequest } from "./userauthdataupdaterequest";
import { UserAuthMethod } from "./userauthmethod";
/**
 * Request model for updating user's metadata
 */
export declare class UpdateUserRequest extends SpeakeasyBase {
    /**
     * User Authentication Data Update Request
     */
    authData?: UserAuthDataUpdateRequest;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * Authentication methods:
     *
     * * `sql`
     *
     * * `active_directory`
     *
     * * `radius`
     *
     * * `openid`
     *
     * use `authData` instead
     */
    authMethods?: UserAuthMethod[];
    /**
     * Email
     */
    email?: string;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * User first name
     */
    firstName?: string;
    /**
     * &#128679; Deprecated since v4.12.0
     *
     * @remarks
     *
     * Gender
     *
     * Do NOT use `gender`! It will be ignored.
     */
    gender?: string;
    /**
     * User is locked:
     *
     * @remarks
     *
     * * `false` - unlocked
     *
     * * `true` - locked
     *
     *
     *
     * User is locked and can not login anymore.
     */
    isLocked?: boolean;
    /**
     * User last name
     */
    lastName?: string;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * User lock status:
     *
     * * `0` - locked
     *
     * * `1` - Web access allowed
     *
     * * `2` - Web and mobile access allowed
     *
     *
     *
     * Please use `isLocked` instead.
     */
    lockStatus?: number;
    /**
     * Multi-factor authentication configuration
     */
    mfaConfig?: MfaConfig;
    /**
     * Phone number
     */
    phone?: string;
    /**
     * IETF language tag
     */
    receiverLanguage?: string;
    /**
     * &#128679; Deprecated since v4.18.0
     *
     * @remarks
     *
     * Job title
     */
    title?: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Username
     */
    userName?: string;
}
