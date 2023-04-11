import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
import { PublicKeyContainer } from "./publickeycontainer";
import { UserInfo } from "./userinfo";
/**
 * User information
 */
export declare class RoomUser extends SpeakeasyBase {
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
     * Is user granted room permissions
     */
    isGranted: boolean;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * User login name
     */
    login: string;
    /**
     * Node permissions
     */
    permissions?: NodePermissions;
    /**
     * Public key container
     */
    publicKeyContainer?: PublicKeyContainer;
    /**
     * User information
     */
    userInfo: UserInfo;
}
