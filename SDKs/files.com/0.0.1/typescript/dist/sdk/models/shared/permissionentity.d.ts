import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Permission type
 */
export declare enum PermissionEntityPermissionEnum {
    Full = "full",
    Readonly = "readonly",
    Writeonly = "writeonly",
    List = "list",
    History = "history",
    Admin = "admin",
    Bundle = "bundle"
}
/**
 * List Permissions
 */
export declare class PermissionEntity extends SpeakeasyBase {
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Group name if applicable
     */
    groupName?: string;
    /**
     * Permission ID
     */
    id?: number;
    /**
     * Folder path
     */
    path?: string;
    /**
     * Permission type
     */
    permission?: PermissionEntityPermissionEnum;
    /**
     * Does this permission apply to subfolders?
     */
    recursive?: boolean;
    /**
     * User ID
     */
    userId?: number;
    /**
     * User's username
     */
    username?: string;
}
