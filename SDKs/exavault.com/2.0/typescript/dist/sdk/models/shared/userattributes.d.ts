import { SpeakeasyBase } from "../../../internal/utils";
import { UserPermissions } from "./userpermissions";
/**
 * User's access level
 */
export declare enum UserAttributesRoleEnum {
    User = "user",
    Admin = "admin",
    Master = "master"
}
/**
 * Indicates user activity status. `0` means the user is locked and cannot log in. `1` means the user is active and can log in.
 */
export declare enum UserAttributesStatusEnum {
    Zero = "0",
    One = "1"
}
/**
 * Attributes of the user including expiration, home directory, and permissions.
 */
export declare class UserAttributes extends SpeakeasyBase {
    /**
     * Timestamp of most recent successful user login.
     */
    accessTimestamp?: string;
    /**
     * Name of the account this user belongs to.
     */
    accountName: string;
    /**
     * Timestamp of user creation.
     */
    created: Date;
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Timestamp of user expiration.
     */
    expiration?: string;
    /**
     * `true` if the user has logged into the system.
     */
    firstLogin?: boolean;
    /**
     * Path to the user's home folder.
     */
    homePath?: string;
    /**
     * `true` if the user is locked and cannot log in.
     */
    locked?: boolean;
    /**
     * Timestamp of user modification.
     */
    modified: Date;
    /**
     * Nickname of the user.
     */
    nickname: string;
    /**
     * Whether the onboarding help system is enabled for this user. `true` means that additional help popups are displayed in the web application for this user.
     */
    onboarding: boolean;
    permissions: UserPermissions;
    /**
     * User's access level
     */
    role: UserAttributesRoleEnum;
    /**
     * Indicates user activity status. `0` means the user is locked and cannot log in. `1` means the user is active and can log in.
     */
    status: UserAttributesStatusEnum;
    /**
     * User's timezone. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.
     */
    timeZone: string;
    /**
     * Username of the user.
     */
    username: string;
}
