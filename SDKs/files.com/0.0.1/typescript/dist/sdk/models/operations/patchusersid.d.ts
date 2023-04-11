import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How is this user authenticated?
 */
export declare enum PatchUsersIdRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup",
    PasswordWithImportedHash = "password_with_imported_hash"
}
export declare class PatchUsersIdRequestBodyAvatarFile extends SpeakeasyBase {
    avatarFile: string;
    content: Uint8Array;
}
/**
 * 2FA required setting
 */
export declare enum PatchUsersIdRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
/**
 * SSL required setting
 */
export declare enum PatchUsersIdRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
export declare class PatchUsersIdRequestBody extends SpeakeasyBase {
    /**
     * A list of allowed IPs if applicable.  Newline delimited
     */
    allowedIps?: string;
    /**
     * Signifies that the user has read all the announcements in the UI.
     */
    announcementsRead?: boolean;
    /**
     * DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.
     */
    attachmentsPermission?: boolean;
    /**
     * Scheduled Date/Time at which user will be deactivated
     */
    authenticateUntil?: Date;
    /**
     * How is this user authenticated?
     */
    authenticationMethod?: PatchUsersIdRequestBodyAuthenticationMethodEnum;
    /**
     * If true, the avatar will be deleted.
     */
    avatarDelete?: boolean;
    /**
     * An image file for your user avatar.
     */
    avatarFile?: PatchUsersIdRequestBodyAvatarFile;
    /**
     * Allow this user to perform operations on the account, payments, and invoices?
     */
    billingPermission?: boolean;
    /**
     * Exempt this user from being disabled based on inactivity?
     */
    bypassInactiveDisable?: boolean;
    /**
     * Allow this user to skip site-wide IP blacklists?
     */
    bypassSiteAllowedIps?: boolean;
    /**
     * Used for changing a password on an existing user.
     */
    changePassword?: string;
    /**
     * Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
     */
    changePasswordConfirmation?: string;
    /**
     * User's company
     */
    company?: string;
    /**
     * Can the user connect with WebDAV?
     */
    davPermission?: boolean;
    /**
     * Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
     */
    disabled?: boolean;
    /**
     * User's email.
     */
    email?: string;
    /**
     * Can the user access with FTP/FTPS?
     */
    ftpPermission?: boolean;
    /**
     * Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, or `history`.
     */
    grantPermission?: string;
    /**
     * Group ID to associate this user with.
     */
    groupId?: number;
    /**
     * A list of group ids to associate this user with.  Comma delimited.
     */
    groupIds?: string;
    /**
     * Text to display to the user in the header of the UI
     */
    headerText?: string;
    /**
     * Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.
     */
    importedPasswordHash?: string;
    /**
     * Preferred language
     */
    language?: string;
    /**
     * User's full name
     */
    name?: string;
    /**
     * Any internal notes on the user
     */
    notes?: string;
    /**
     * Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
     */
    notificationDailySendTime?: number;
    /**
     * Enable integration with Office for the web?
     */
    officeIntegrationEnabled?: boolean;
    /**
     * User password.
     */
    password?: string;
    /**
     * Optional, but if provided, we will ensure that it matches the value sent in `password`.
     */
    passwordConfirmation?: string;
    /**
     * Number of days to allow user to use the same password
     */
    passwordValidityDays?: number;
    /**
     * Should the user receive admin alerts such a certificate expiration notifications and overages?
     */
    receiveAdminAlerts?: boolean;
    /**
     * 2FA required setting
     */
    require2fa?: PatchUsersIdRequestBodyRequire2faEnum;
    /**
     * Is a password change required upon next user login?
     */
    requirePasswordChange?: boolean;
    /**
     * Can this user access the REST API?
     */
    restapiPermission?: boolean;
    /**
     * Does this user manage it's own credentials or is it a shared/bot user?
     */
    selfManaged?: boolean;
    /**
     * Can the user access with SFTP?
     */
    sftpPermission?: boolean;
    /**
     * Is the user an administrator for this site?
     */
    siteAdmin?: boolean;
    /**
     * Skip Welcome page in the UI?
     */
    skipWelcomeScreen?: boolean;
    /**
     * SSL required setting
     */
    sslRequired?: PatchUsersIdRequestBodySslRequiredEnum;
    /**
     * SSO (Single Sign On) strategy ID for the user, if applicable.
     */
    ssoStrategyId?: number;
    /**
     * Is the user subscribed to the newsletter?
     */
    subscribeToNewsletter?: boolean;
    /**
     * User time zone
     */
    timeZone?: string;
    /**
     * Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
     */
    userRoot?: string;
    /**
     * User's username
     */
    username?: string;
}
export declare class PatchUsersIdRequest extends SpeakeasyBase {
    requestBody?: PatchUsersIdRequestBody;
    /**
     * User ID.
     */
    id: number;
}
export declare class PatchUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Users object.
     */
    userEntity?: shared.UserEntity;
}
