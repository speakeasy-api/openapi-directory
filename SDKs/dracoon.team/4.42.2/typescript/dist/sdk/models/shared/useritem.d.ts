import { SpeakeasyBase } from "../../../internal/utils";
import { RoleList } from "./rolelist";
import { UserAttributes } from "./userattributes";
/**
 * User information
 */
export declare class UserItem extends SpeakeasyBase {
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Avatar UUID
     */
    avatarUuid: string;
    /**
     * Creation date
     */
    createdAt?: Date;
    /**
     * Email
     */
    email?: string;
    /**
     * Expiration date
     */
    expireAt?: Date;
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
     * &#128679; Deprecated since v4.27.0
     *
     * @remarks
     *
     * User has manageable rooms
     */
    hasManageableRooms?: boolean;
    /**
     * Homeroom ID
     */
    homeRoomId?: number;
    /**
     * Unique identifier for the user
     */
    id: number;
    /**
     * User has generated private key.
     *
     * @remarks
     *
     * Possible if client-side encryption is active for this customer
     */
    isEncryptionEnabled?: boolean;
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
    isLocked: boolean;
    /**
     * Last successful logon date
     */
    lastLoginSuccessAt?: Date;
    /**
     * User last name
     */
    lastName: string;
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
    lockStatus: number;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * User login name
     */
    login: string;
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
     * User custom attributes (list of key-value pairs)
     */
    userAttributes?: UserAttributes;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Username
     */
    userName: string;
    /**
     * List of roles
     */
    userRoles?: RoleList;
}
