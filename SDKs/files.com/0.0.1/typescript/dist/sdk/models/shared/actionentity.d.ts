import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of action
 */
export declare enum ActionEntityActionEnum {
    Create = "create",
    Read = "read",
    Update = "update",
    Destroy = "destroy",
    Move = "move",
    Login = "login",
    Failedlogin = "failedlogin",
    Copy = "copy",
    UserCreate = "user_create",
    UserUpdate = "user_update",
    UserDestroy = "user_destroy",
    GroupCreate = "group_create",
    GroupUpdate = "group_update",
    GroupDestroy = "group_destroy",
    PermissionCreate = "permission_create",
    PermissionDestroy = "permission_destroy",
    ApiKeyCreate = "api_key_create",
    ApiKeyUpdate = "api_key_update",
    ApiKeyDestroy = "api_key_destroy"
}
/**
 * Failure type.  If action was a user login or session failure, why did it fail?
 */
export declare enum ActionEntityFailureTypeEnum {
    ExpiredTrial = "expired_trial",
    AccountOverdue = "account_overdue",
    LockedOut = "locked_out",
    IpMismatch = "ip_mismatch",
    PasswordMismatch = "password_mismatch",
    SiteMismatch = "site_mismatch",
    UsernameNotFound = "username_not_found",
    None = "none",
    NoFtpPermission = "no_ftp_permission",
    NoWebPermission = "no_web_permission",
    NoDirectory = "no_directory",
    ErrnoEnoent = "errno_enoent",
    NoSftpPermission = "no_sftp_permission",
    NoDavPermission = "no_dav_permission",
    NoRestapiPermission = "no_restapi_permission",
    KeyMismatch = "key_mismatch",
    RegionMismatch = "region_mismatch",
    ExpiredAccess = "expired_access",
    DesktopIpMismatch = "desktop_ip_mismatch",
    DesktopApiKeyNotUsedQuicklyEnough = "desktop_api_key_not_used_quickly_enough",
    Disabled = "disabled",
    CountryMismatch = "country_mismatch"
}
/**
 * Interface on which this action occurred.
 */
export declare enum ActionEntityInterfaceEnum {
    Web = "web",
    Ftp = "ftp",
    Robot = "robot",
    Jsapi = "jsapi",
    Webdesktopapi = "webdesktopapi",
    Sftp = "sftp",
    Dav = "dav",
    Desktop = "desktop",
    Restapi = "restapi",
    Scim = "scim",
    Office = "office",
    Mobile = "mobile",
    As2 = "as2",
    InboundEmail = "inbound_email",
    Remote = "remote"
}
/**
 * List site full action history.
 */
export declare class ActionEntity extends SpeakeasyBase {
    /**
     * Type of action
     */
    action?: ActionEntityActionEnum;
    /**
     * The destination path for this action, if applicable
     */
    destination?: string;
    /**
     * Friendly displayed output
     */
    display?: string;
    /**
     * Failure type.  If action was a user login or session failure, why did it fail?
     */
    failureType?: ActionEntityFailureTypeEnum;
    /**
     * Action ID
     */
    id?: number;
    /**
     * Interface on which this action occurred.
     */
    interface?: ActionEntityInterfaceEnum;
    /**
     * IP Address that performed this action
     */
    ip?: string;
    /**
     * Path
     */
    path?: string;
    /**
     * The source path for this action, if applicable
     */
    source?: string;
    /**
     * Targets
     */
    targets?: Record<string, any>[];
    /**
     * User ID
     */
    userId?: number;
    /**
     * Username
     */
    username?: string;
    /**
     * Action occurrence date/time
     */
    when?: Date;
}
