import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * User information
 */
export declare class RoleUser extends SpeakeasyBase {
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
     * Unique identifier for the user
     *
     * use `id` from `UserInfo` instead
     */
    id: number;
    /**
     * Is user member of the role
     */
    isMember: boolean;
    /**
     * User information
     */
    userInfo: UserInfo;
}
