import { SpeakeasyBase } from "../../../internal/utils";
import { UserPermissions } from "./userpermissions";
export declare enum UserAttributesRoleEnum {
    User = "user",
    Admin = "admin",
    Master = "master"
}
/**
 * Attributes of the user including expiration, home directory, and permissions.
**/
export declare class UserAttributes extends SpeakeasyBase {
    accessTimestamp?: string;
    accountName: string;
    created: Date;
    email?: string;
    expiration?: string;
    firstLogin?: boolean;
    homePath?: string;
    locked?: boolean;
    modified: Date;
    nickname: string;
    onboarding: boolean;
    permissions: UserPermissions;
    role: UserAttributesRoleEnum;
    status: number;
    timeZone: string;
    username: string;
}
