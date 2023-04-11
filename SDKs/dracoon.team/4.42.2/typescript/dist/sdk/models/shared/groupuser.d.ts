import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * User information
 */
export declare class GroupUser extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Display name
     *
     * use information from `UserInfo` instead to combine a display name
     */
    displayName: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Email
     *
     * use `email` from `UserInfo` instead
     */
    email: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Unique identifier for the user
     *
     * use `id` from `UserInfo` instead
     */
    id: number;
    /**
     * Determines whether user is a member of the group or not
     */
    isMember: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * User login name
     */
    login: string;
    /**
     * User information
     */
    userInfo: UserInfo;
}
