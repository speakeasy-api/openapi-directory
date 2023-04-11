import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
/**
 * First administrator user
 */
export declare class FirstAdminUser extends SpeakeasyBase {
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
     * User first name
     */
    firstName: string;
    /**
     * &#128679; Deprecated since v4.12.0
     *
     * @remarks
     *
     * Gender
     */
    gender?: string;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * Language ID or ISO 639-1 code
     */
    language?: string;
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
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * If `true`, the user must change the `userName` at the first login.
     */
    needsToChangeUserName?: boolean;
    /**
     * Notify user about his new account
     *
     * @remarks
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
