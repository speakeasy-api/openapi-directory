import { SpeakeasyBase } from "../../../internal/utils";
import { RoleList } from "./rolelist";
import { UserAttributes } from "./userattributes";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { UserGroup } from "./usergroup";
/**
 * User information
 */
export declare class UserAccount extends SpeakeasyBase {
    /**
     * User Authentication Data
     */
    authData: UserAuthData;
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
     * User has manageable rooms
     */
    hasManageableRooms: boolean;
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
     * &#128640; Since v4.20.0
     *
     * @remarks
     *
     * IETF language tag
     */
    language: string;
    /**
     * Last failed logon date
     */
    lastLoginFailAt?: Date;
    /**
     * &#128679; Deprecated since v4.6.0
     *
     * @remarks
     *
     * Last failed logon IP address
     */
    lastLoginFailIp?: string;
    /**
     * Last successful logon date
     */
    lastLoginSuccessAt?: Date;
    /**
     * &#128679; Deprecated since v4.6.0
     *
     * @remarks
     *
     * Last successful logon IP address
     */
    lastLoginSuccessIp?: string;
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
    login?: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * If `true`, the user must set the `email` at the first login.
     */
    mustSetEmail?: boolean;
    /**
     * User has accepted EULA.
     *
     * @remarks
     *
     * Present, if EULA is system global active.
     *
     * cf. `GET system/config/settings/general` - `eulaEnabled`
     */
    needsToAcceptEULA?: boolean;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * Determines whether user has to change his / her password
     */
    needsToChangePassword: boolean;
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * If `true`, the user must change the `userName` at the first login.
     */
    needsToChangeUserName?: boolean;
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
     * All groups the user is member of
     */
    userGroups?: UserGroup[];
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
    userRoles: RoleList;
}
