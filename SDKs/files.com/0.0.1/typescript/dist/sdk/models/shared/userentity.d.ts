import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How is this user authenticated?
 */
export declare enum UserEntityAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup",
    PasswordWithImportedHash = "password_with_imported_hash"
}
/**
 * 2FA required setting
 */
export declare enum UserEntityRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
/**
 * SSL required setting
 */
export declare enum UserEntitySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}
/**
 * Create User
 */
export declare class UserEntity extends SpeakeasyBase {
    /**
     * Is 2fa active for the user?
     */
    active2fa?: boolean;
    /**
     * List of group IDs of which this user is an administrator
     */
    adminGroupIds?: number[];
    /**
     * A list of allowed IPs if applicable.  Newline delimited
     */
    allowedIps?: string;
    /**
     * Number of api keys associated with this user
     */
    apiKeysCount?: number;
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
    authenticationMethod?: UserEntityAuthenticationMethodEnum;
    /**
     * URL holding the user's avatar
     */
    avatarUrl?: string;
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
     * User's company
     */
    company?: string;
    /**
     * When this user was created
     */
    createdAt?: Date;
    /**
     * Can the user connect with WebDAV?
     */
    davPermission?: boolean;
    /**
     * Number of days remaining until password expires
     */
    daysRemainingUntilPasswordExpire?: number;
    /**
     * Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
     */
    disabled?: boolean;
    /**
     * User email address
     */
    email?: string;
    /**
     * Is this user managed by a SsoStrategy?
     */
    externallyManaged?: boolean;
    /**
     * User's first login time
     */
    firstLoginAt?: Date;
    /**
     * Can the user access with FTP/FTPS?
     */
    ftpPermission?: boolean;
    /**
     * Comma-separated list of group IDs of which this user is a member
     */
    groupIds?: string;
    /**
     * Text to display to the user in the header of the UI
     */
    headerText?: string;
    /**
     * User ID
     */
    id?: number;
    /**
     * Preferred language
     */
    language?: string;
    /**
     * User's most recent activity time, which is the latest of most recent login, most recent API use, enablement, or creation
     */
    lastActiveAt?: Date;
    /**
     * User's most recent API use time
     */
    lastApiUseAt?: Date;
    /**
     * User's most recent login time via WebDAV
     */
    lastDavLoginAt?: Date;
    /**
     * User's most recent login time via Desktop app
     */
    lastDesktopLoginAt?: Date;
    /**
     * User's most recent login time via FTP
     */
    lastFtpLoginAt?: Date;
    /**
     * User's most recent login time via any protocol
     */
    lastLoginAt?: Date;
    /**
     * The most recent protocol and cipher used
     */
    lastProtocolCipher?: string;
    /**
     * User's most recent login time via Rest API
     */
    lastRestapiLoginAt?: Date;
    /**
     * User's most recent login time via SFTP
     */
    lastSftpLoginAt?: Date;
    /**
     * User's most recent login time via web
     */
    lastWebLoginAt?: Date;
    /**
     * Time in the future that the user will no longer be locked out if applicable
     */
    lockoutExpires?: Date;
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
     * Password expiration datetime
     */
    passwordExpireAt?: Date;
    /**
     * Is user's password expired?
     */
    passwordExpired?: boolean;
    /**
     * Last time the user's password was set
     */
    passwordSetAt?: Date;
    /**
     * Number of days to allow user to use the same password
     */
    passwordValidityDays?: number;
    /**
     * Number of public keys associated with this user
     */
    publicKeysCount?: number;
    /**
     * Should the user receive admin alerts such a certificate expiration notifications and overages?
     */
    receiveAdminAlerts?: boolean;
    /**
     * 2FA required setting
     */
    require2fa?: UserEntityRequire2faEnum;
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
    sslRequired?: UserEntitySslRequiredEnum;
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
     * Type(s) of 2FA methods in use.  Will be either `sms`, `totp`, `u2f`, `yubi`, or multiple values sorted alphabetically and joined by an underscore.
     */
    typeOf2fa?: string;
    /**
     * Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
     */
    userRoot?: string;
    /**
     * User's username
     */
    username?: string;
}
