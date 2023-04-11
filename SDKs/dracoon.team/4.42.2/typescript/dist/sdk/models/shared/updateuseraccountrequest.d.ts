import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating user account information
 */
export declare class UpdateUserAccountRequest extends SpeakeasyBase {
    /**
     * Accept EULA
     *
     * @remarks
     *
     * Present, if EULA is system global active.
     *
     * cf. `GET system/config/settings/general` - `eulaEnabled`
     *
     * If accepted can not be undone.
     */
    acceptEULA?: boolean;
    /**
     * Email
     */
    email?: string;
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
     * &#128640; Since v4.20.0
     *
     * @remarks
     *
     * IETF language tag
     */
    language?: string;
    /**
     * User last name
     */
    lastName?: string;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * User login name
     */
    login?: string;
    /**
     * Phone number
     */
    phone?: string;
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
