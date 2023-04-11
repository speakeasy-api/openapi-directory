import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List History Export Results
 */
export declare class HistoryExportResultEntity extends SpeakeasyBase {
    /**
     * What action was taken. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`
     */
    action?: string;
    /**
     * When the action happened
     */
    createdAt?: number;
    /**
     * When the action happened, in ISO8601 format.
     */
    createdAtIso8601?: number;
    /**
     * File moved to this destination folder
     */
    destination?: string;
    /**
     * The type of login failure, if applicable.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`, `country_mismatch`
     */
    failureType?: string;
    /**
     * File ID related to the action
     */
    fileId?: number;
    /**
     * Folder in which the action occurred
     */
    folder?: string;
    /**
     * Action ID
     */
    id?: number;
    /**
     * Inteface through which the action was taken. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`, `office`, `mobile`, `as2`, `inbound_email`, `remote`
     */
    interface?: string;
    /**
     * Client IP that performed the action
     */
    ip?: string;
    /**
     * ID of the parent folder
     */
    parentId?: number;
    /**
     * Path of the related action
     */
    path?: string;
    /**
     * File move originated from this path
     */
    src?: string;
    /**
     * If searching for Histories about API keys, this is when the API key will expire
     */
    targetExpiresAt?: number;
    /**
     * ID of the object (such as Users, or API Keys) on which the action was taken
     */
    targetId?: number;
    /**
     * Name of the User, Group or other object with a name related to this action
     */
    targetName?: string;
    /**
     * Permission level of the action
     */
    targetPermission?: string;
    /**
     * If searching for Histories about API keys, this represents the permission set of the associated  API key
     */
    targetPermissionSet?: string;
    /**
     * If searching for Histories about API keys, this is the platform on which the action was taken
     */
    targetPlatform?: string;
    /**
     * Whether or not the action was recursive
     */
    targetRecursive?: boolean;
    /**
     * If searching for Histories about API keys, this is the User ID on which the action was taken
     */
    targetUserId?: number;
    /**
     * If searching for Histories about API keys, this is the username on which the action was taken
     */
    targetUsername?: string;
    /**
     * User ID
     */
    userId?: number;
    /**
     * Username of the user that performed the action
     */
    username?: string;
}
