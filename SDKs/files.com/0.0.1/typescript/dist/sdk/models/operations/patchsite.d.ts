import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchSiteRequestBodyBundleWatermarkAttachmentFile extends SpeakeasyBase {
    bundleWatermarkAttachmentFile: string;
    content: Uint8Array;
}
export declare class PatchSiteRequestBodyIcon128File extends SpeakeasyBase {
    content: Uint8Array;
    icon128File: string;
}
export declare class PatchSiteRequestBodyIcon16File extends SpeakeasyBase {
    content: Uint8Array;
    icon16File: string;
}
export declare class PatchSiteRequestBodyIcon32File extends SpeakeasyBase {
    content: Uint8Array;
    icon32File: string;
}
export declare class PatchSiteRequestBodyIcon48File extends SpeakeasyBase {
    content: Uint8Array;
    icon48File: string;
}
export declare class PatchSiteRequestBodyLogoFile extends SpeakeasyBase {
    content: Uint8Array;
    logoFile: string;
}
export declare class PatchSiteRequestBody extends SpeakeasyBase {
    /**
     * Id of the currently selected custom SFTP Host Key
     */
    activeSftpHostKeyId?: number;
    /**
     * Are manual Bundle names allowed?
     */
    allowBundleNames?: boolean;
    /**
     * Are users allowed to configure their two factor authentication to be bypassed for FTP/SFTP/WebDAV?
     */
    allowed2faMethodBypassForFtpSftpDav?: boolean;
    /**
     * Is SMS two factor authentication allowed?
     */
    allowed2faMethodSms?: boolean;
    /**
     * Is TOTP two factor authentication allowed?
     */
    allowed2faMethodTotp?: boolean;
    /**
     * Is U2F two factor authentication allowed?
     */
    allowed2faMethodU2f?: boolean;
    /**
     * Is WebAuthn two factor authentication allowed?
     */
    allowed2faMethodWebauthn?: boolean;
    /**
     * Is yubikey two factor authentication allowed?
     */
    allowed2faMethodYubi?: boolean;
    /**
     * Comma seperated list of allowed Country codes
     */
    allowedCountries?: string;
    /**
     * List of allowed IP addresses
     */
    allowedIps?: string;
    /**
     * If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.
     */
    askAboutOverwrites?: boolean;
    /**
     * Do Bundle owners receive activity notifications?
     */
    bundleActivityNotifications?: string;
    /**
     * Site-wide Bundle expiration in days
     */
    bundleExpiration?: number;
    /**
     * Do Bundles require password protection?
     */
    bundlePasswordRequired?: boolean;
    /**
     * Do Bundle owners receive registration notification?
     */
    bundleRegistrationNotifications?: string;
    /**
     * Do Bundles require recipients for sharing?
     */
    bundleRequireShareRecipient?: boolean;
    /**
     * Do Bundle uploaders receive upload confirmation notifications?
     */
    bundleUploadReceiptNotifications?: string;
    /**
     * If true, will delete the file stored in bundle_watermark_attachment
     */
    bundleWatermarkAttachmentDelete?: boolean;
    bundleWatermarkAttachmentFile?: PatchSiteRequestBodyBundleWatermarkAttachmentFile;
    /**
     * Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value
     */
    bundleWatermarkValue?: Record<string, any>;
    /**
     * Page link and button color
     */
    color2Left?: string;
    /**
     * Top bar link color
     */
    color2Link?: string;
    /**
     * Page link and button color
     */
    color2Text?: string;
    /**
     * Top bar background color
     */
    color2Top?: string;
    /**
     * Top bar text color
     */
    color2TopText?: string;
    /**
     * Is this site using a custom namespace for users?
     */
    customNamespace?: boolean;
    /**
     * Number of days to keep deleted files
     */
    daysToRetainBackups?: number;
    /**
     * Site default time zone
     */
    defaultTimeZone?: string;
    /**
     * Is the desktop app enabled?
     */
    desktopApp?: boolean;
    /**
     * Is desktop app session IP pinning enabled?
     */
    desktopAppSessionIpPinning?: boolean;
    /**
     * Desktop app session lifetime (in hours)
     */
    desktopAppSessionLifetime?: number;
    /**
     * If set to true, we will begin the process of disabling 2FA on this site.
     */
    disable2faWithDelay?: boolean;
    /**
     * If set, Files.com will not set the CAA records required to generate future SSL certificates for this domain.
     */
    disableFilesCertificateGeneration?: boolean;
    /**
     * Is password reset disabled?
     */
    disablePasswordReset?: boolean;
    /**
     * If greater than zero, users will unable to login if they do not show activity within this number of days.
     */
    disableUsersFromInactivityPeriodDays?: number;
    /**
     * Comma seperated list of disallowed Country codes
     */
    disallowedCountries?: string;
    /**
     * Custom domain
     */
    domain?: string;
    /**
     * Send HSTS (HTTP Strict Transport Security) header when visitors access the site via a custom domain?
     */
    domainHstsHeader?: boolean;
    /**
     * Letsencrypt chain to use when registering SSL Certificate for domain.
     */
    domainLetsencryptChain?: string;
    /**
     * Main email for this site
     */
    email?: string;
    /**
     * If true, permissions for this site must be bound to a group (not a user). Otherwise, permissions must be bound to a user.
     */
    folderPermissionsGroupsOnly?: boolean;
    /**
     * Is FTP enabled?
     */
    ftpEnabled?: boolean;
    /**
     * If true, will delete the file stored in icon128
     */
    icon128Delete?: boolean;
    icon128File?: PatchSiteRequestBodyIcon128File;
    /**
     * If true, will delete the file stored in icon16
     */
    icon16Delete?: boolean;
    icon16File?: PatchSiteRequestBodyIcon16File;
    /**
     * If true, will delete the file stored in icon32
     */
    icon32Delete?: boolean;
    icon32File?: PatchSiteRequestBodyIcon32File;
    /**
     * If true, will delete the file stored in icon48
     */
    icon48Delete?: boolean;
    icon48File?: PatchSiteRequestBodyIcon48File;
    /**
     * Are files protected from modification?
     */
    immutableFiles?: boolean;
    /**
     * Include password in emails to new users?
     */
    includePasswordInWelcomeEmail?: boolean;
    /**
     * Site default language
     */
    language?: string;
    /**
     * Base DN for looking up users in LDAP server
     */
    ldapBaseDn?: string;
    /**
     * Domain name that will be appended to usernames
     */
    ldapDomain?: string;
    /**
     * Main LDAP setting: is LDAP enabled?
     */
    ldapEnabled?: boolean;
    /**
     * Should we sync groups from LDAP server?
     */
    ldapGroupAction?: string;
    /**
     * Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.
     */
    ldapGroupExclusion?: string;
    /**
     * Comma or newline separated list of group names (with optional wildcards) to include when syncing.
     */
    ldapGroupInclusion?: string;
    /**
     * LDAP host
     */
    ldapHost?: string;
    /**
     * LDAP backup host
     */
    ldapHost2?: string;
    /**
     * LDAP backup host
     */
    ldapHost3?: string;
    /**
     * New LDAP password.
     */
    ldapPasswordChange?: string;
    /**
     * Confirm new LDAP password.
     */
    ldapPasswordChangeConfirmation?: string;
    /**
     * LDAP port
     */
    ldapPort?: number;
    /**
     * Use secure LDAP?
     */
    ldapSecure?: boolean;
    /**
     * LDAP type
     */
    ldapType?: string;
    /**
     * Should we sync users from LDAP server?
     */
    ldapUserAction?: string;
    /**
     * Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.
     */
    ldapUserIncludeGroups?: string;
    /**
     * Username for signing in to LDAP server.
     */
    ldapUsername?: string;
    /**
     * LDAP username field
     */
    ldapUsernameField?: string;
    /**
     * Login help text
     */
    loginHelpText?: string;
    /**
     * If true, will delete the file stored in logo
     */
    logoDelete?: boolean;
    logoFile?: PatchSiteRequestBodyLogoFile;
    /**
     * Number of prior passwords to disallow
     */
    maxPriorPasswords?: number;
    /**
     * Is the mobile app enabled?
     */
    mobileApp?: boolean;
    /**
     * Is mobile app session IP pinning enabled?
     */
    mobileAppSessionIpPinning?: boolean;
    /**
     * Mobile app session lifetime (in hours)
     */
    mobileAppSessionLifetime?: number;
    /**
     * A message to show users when they connect via FTP or SFTP.
     */
    motdText?: string;
    /**
     * Show message to users connecting via FTP
     */
    motdUseForFtp?: boolean;
    /**
     * Show message to users connecting via SFTP
     */
    motdUseForSftp?: boolean;
    /**
     * Site name
     */
    name?: string;
    /**
     * If true, groups can be manually created / modified / deleted by Site Admins. Otherwise, groups can only be managed via your SSO provider.
     */
    nonSsoGroupsAllowed?: boolean;
    /**
     * If true, users can be manually created / modified / deleted by Site Admins. Otherwise, users can only be managed via your SSO provider.
     */
    nonSsoUsersAllowed?: boolean;
    /**
     * Allow users to use Office for the web?
     */
    officeIntegrationAvailable?: boolean;
    /**
     * Office integration application used to edit and view the MS Office documents
     */
    officeIntegrationType?: string;
    /**
     * Use servers in the USA only?
     */
    optOutGlobal?: boolean;
    /**
     * Notify site email of overages?
     */
    overageNotify?: boolean;
    /**
     * Shortest password length for users
     */
    passwordMinLength?: number;
    /**
     * Require a letter in passwords?
     */
    passwordRequireLetter?: boolean;
    /**
     * Require lower and upper case letters in passwords?
     */
    passwordRequireMixed?: boolean;
    /**
     * Require a number in passwords?
     */
    passwordRequireNumber?: boolean;
    /**
     * Require special characters in password?
     */
    passwordRequireSpecial?: boolean;
    /**
     * Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)
     */
    passwordRequireUnbreached?: boolean;
    /**
     * Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?
     */
    passwordRequirementsApplyToBundles?: boolean;
    /**
     * Number of days password is valid
     */
    passwordValidityDays?: number;
    /**
     * If true, we will ensure that all internal communications with any remote server are made through the primary region of the site. This setting overrides individual remote server settings.
     */
    pinAllRemoteServersToSiteRegion?: boolean;
    /**
     * Reply-to email for this site
     */
    replyToEmail?: string;
    /**
     * Require two-factor authentication for all users?
     */
    require2fa?: boolean;
    /**
     * What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?
     */
    require2faUserType?: string;
    /**
     * Session expiry in hours
     */
    sessionExpiry?: number;
    /**
     * Session expiry in minutes
     */
    sessionExpiryMinutes?: number;
    /**
     * Are sessions locked to the same IP? (i.e. do users need to log in again if they change IPs?)
     */
    sessionPinnedByIp?: boolean;
    /**
     * Is SFTP enabled?
     */
    sftpEnabled?: boolean;
    /**
     * Sftp Host Key Type
     */
    sftpHostKeyType?: string;
    /**
     * Are Insecure Ciphers allowed for SFTP?  Note:  Settting TLS Disabled -> True will always allow insecure ciphers for SFTP as well.  Enabling this is insecure.
     */
    sftpInsecureCiphers?: boolean;
    /**
     * Use user FTP roots also for SFTP?
     */
    sftpUserRootEnabled?: boolean;
    /**
     * Allow bundle creation
     */
    sharingEnabled?: boolean;
    /**
     * Show request access link for users without access?  Currently unused.
     */
    showRequestAccessLink?: boolean;
    /**
     * Custom site footer text
     */
    siteFooter?: string;
    /**
     * Custom site header text
     */
    siteHeader?: string;
    /**
     * SMTP server hostname or IP
     */
    smtpAddress?: string;
    /**
     * SMTP server authentication type
     */
    smtpAuthentication?: string;
    /**
     * From address to use when mailing through custom SMTP
     */
    smtpFrom?: string;
    /**
     * Password for SMTP server.
     */
    smtpPassword?: string;
    /**
     * SMTP server port
     */
    smtpPort?: number;
    /**
     * SMTP server username
     */
    smtpUsername?: string;
    /**
     * Is SSL required?  Disabling this is insecure.
     */
    sslRequired?: boolean;
    /**
     * Site subdomain
     */
    subdomain?: string;
    /**
     * Are Insecure TLS and SFTP Ciphers allowed?  Enabling this is insecure.
     */
    tlsDisabled?: boolean;
    /**
     * Do incoming emails in the Inboxes require checking for SPF/DKIM/DMARC?
     */
    uploadsViaEmailAuthentication?: boolean;
    /**
     * Allow uploaders to set `provided_modified_at` for uploaded files?
     */
    useProvidedModifiedAt?: boolean;
    /**
     * Will users be locked out after incorrect login attempts?
     */
    userLockout?: boolean;
    /**
     * How many hours to lock user out for failed password?
     */
    userLockoutLockPeriod?: number;
    /**
     * Number of login tries within `user_lockout_within` hours before users are locked out
     */
    userLockoutTries?: number;
    /**
     * Number of hours for user lockout window
     */
    userLockoutWithin?: number;
    /**
     * Enable User Requests feature
     */
    userRequestsEnabled?: boolean;
    /**
     * Send email to site admins when a user request is received?
     */
    userRequestsNotifyAdmins?: boolean;
    /**
     * Custom text send in user welcome email
     */
    welcomeCustomText?: string;
    /**
     * Include this email in welcome emails if enabled
     */
    welcomeEmailCc?: string;
    /**
     * Will the welcome email be sent to new users?
     */
    welcomeEmailEnabled?: boolean;
    /**
     * Include this email subject in welcome emails if enabled
     */
    welcomeEmailSubject?: string;
    /**
     * Does the welcome screen appear?
     */
    welcomeScreen?: string;
    /**
     * Does FTP user Windows emulation mode?
     */
    windowsModeFtp?: boolean;
}
export declare class PatchSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Site object.
     */
    siteEntity?: shared.SiteEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
