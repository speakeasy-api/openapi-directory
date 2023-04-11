import { SpeakeasyBase } from "../../../internal/utils";
import { MfaConfig } from "./mfaconfig";
import { ObjectExpiration } from "./objectexpiration";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
/**
 * Request model for creating an user
 */
export declare class CreateUserRequest extends SpeakeasyBase {
    /**
     * User Authentication Data
     */
    authData?: UserAuthData;
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
    firstName: string;
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
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * Determines whether user has the role NONMEMBER_VIEWER
     */
    isNonmemberViewer?: boolean;
    /**
     * User last name
     */
    lastName: string;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * User login name
     */
    login?: string;
    /**
     * Multi-factor authentication configuration
     */
    mfaConfig?: MfaConfig;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * Determines whether user has to change his / her initial password.
     *
     * use `authDate.mustChangePassword` instead
     */
    needsToChangePassword?: boolean;
    /**
     * &#128640; Since v4.9.0
     *
     * @remarks
     *
     * Notify user about his new account
     *
     * * default: `true` for `basic` auth type
     *
     * * default: `false` for `active_directory`, `openid` and `radius` auth types
     */
    notifyUser?: boolean;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * An initial password may be preset
     *
     * use `authData` instead
     */
    password?: string;
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
