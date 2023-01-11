package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequestBody {
    @SpeakeasyMetadata("multipartForm:name=allow_bundle_names")
    public Boolean allowBundleNames;
    public PatchSiteRequestBody withAllowBundleNames(Boolean allowBundleNames) {
        this.allowBundleNames = allowBundleNames;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_2fa_method_sms")
    public Boolean allowed2faMethodSms;
    public PatchSiteRequestBody withAllowed2faMethodSms(Boolean allowed2faMethodSms) {
        this.allowed2faMethodSms = allowed2faMethodSms;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_2fa_method_totp")
    public Boolean allowed2faMethodTotp;
    public PatchSiteRequestBody withAllowed2faMethodTotp(Boolean allowed2faMethodTotp) {
        this.allowed2faMethodTotp = allowed2faMethodTotp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_2fa_method_u2f")
    public Boolean allowed2faMethodU2f;
    public PatchSiteRequestBody withAllowed2faMethodU2f(Boolean allowed2faMethodU2f) {
        this.allowed2faMethodU2f = allowed2faMethodU2f;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_2fa_method_yubi")
    public Boolean allowed2faMethodYubi;
    public PatchSiteRequestBody withAllowed2faMethodYubi(Boolean allowed2faMethodYubi) {
        this.allowed2faMethodYubi = allowed2faMethodYubi;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_countries")
    public String allowedCountries;
    public PatchSiteRequestBody withAllowedCountries(String allowedCountries) {
        this.allowedCountries = allowedCountries;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allowed_ips")
    public String allowedIps;
    public PatchSiteRequestBody withAllowedIps(String allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ask_about_overwrites")
    public Boolean askAboutOverwrites;
    public PatchSiteRequestBody withAskAboutOverwrites(Boolean askAboutOverwrites) {
        this.askAboutOverwrites = askAboutOverwrites;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bundle_expiration")
    public Integer bundleExpiration;
    public PatchSiteRequestBody withBundleExpiration(Integer bundleExpiration) {
        this.bundleExpiration = bundleExpiration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bundle_password_required")
    public Boolean bundlePasswordRequired;
    public PatchSiteRequestBody withBundlePasswordRequired(Boolean bundlePasswordRequired) {
        this.bundlePasswordRequired = bundlePasswordRequired;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bundle_require_share_recipient")
    public Boolean bundleRequireShareRecipient;
    public PatchSiteRequestBody withBundleRequireShareRecipient(Boolean bundleRequireShareRecipient) {
        this.bundleRequireShareRecipient = bundleRequireShareRecipient;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=color2_left")
    public String color2Left;
    public PatchSiteRequestBody withColor2Left(String color2Left) {
        this.color2Left = color2Left;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=color2_link")
    public String color2Link;
    public PatchSiteRequestBody withColor2Link(String color2Link) {
        this.color2Link = color2Link;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=color2_text")
    public String color2Text;
    public PatchSiteRequestBody withColor2Text(String color2Text) {
        this.color2Text = color2Text;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=color2_top")
    public String color2Top;
    public PatchSiteRequestBody withColor2Top(String color2Top) {
        this.color2Top = color2Top;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=color2_top_text")
    public String color2TopText;
    public PatchSiteRequestBody withColor2TopText(String color2TopText) {
        this.color2TopText = color2TopText;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom_namespace")
    public Boolean customNamespace;
    public PatchSiteRequestBody withCustomNamespace(Boolean customNamespace) {
        this.customNamespace = customNamespace;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=days_to_retain_backups")
    public Integer daysToRetainBackups;
    public PatchSiteRequestBody withDaysToRetainBackups(Integer daysToRetainBackups) {
        this.daysToRetainBackups = daysToRetainBackups;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=default_time_zone")
    public String defaultTimeZone;
    public PatchSiteRequestBody withDefaultTimeZone(String defaultTimeZone) {
        this.defaultTimeZone = defaultTimeZone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=desktop_app")
    public Boolean desktopApp;
    public PatchSiteRequestBody withDesktopApp(Boolean desktopApp) {
        this.desktopApp = desktopApp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=desktop_app_session_ip_pinning")
    public Boolean desktopAppSessionIpPinning;
    public PatchSiteRequestBody withDesktopAppSessionIpPinning(Boolean desktopAppSessionIpPinning) {
        this.desktopAppSessionIpPinning = desktopAppSessionIpPinning;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=desktop_app_session_lifetime")
    public Integer desktopAppSessionLifetime;
    public PatchSiteRequestBody withDesktopAppSessionLifetime(Integer desktopAppSessionLifetime) {
        this.desktopAppSessionLifetime = desktopAppSessionLifetime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disable_2fa_with_delay")
    public Boolean disable2faWithDelay;
    public PatchSiteRequestBody withDisable2faWithDelay(Boolean disable2faWithDelay) {
        this.disable2faWithDelay = disable2faWithDelay;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disable_password_reset")
    public Boolean disablePasswordReset;
    public PatchSiteRequestBody withDisablePasswordReset(Boolean disablePasswordReset) {
        this.disablePasswordReset = disablePasswordReset;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disable_users_from_inactivity_period_days")
    public Integer disableUsersFromInactivityPeriodDays;
    public PatchSiteRequestBody withDisableUsersFromInactivityPeriodDays(Integer disableUsersFromInactivityPeriodDays) {
        this.disableUsersFromInactivityPeriodDays = disableUsersFromInactivityPeriodDays;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disallowed_countries")
    public String disallowedCountries;
    public PatchSiteRequestBody withDisallowedCountries(String disallowedCountries) {
        this.disallowedCountries = disallowedCountries;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=domain")
    public String domain;
    public PatchSiteRequestBody withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public PatchSiteRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=folder_permissions_groups_only")
    public Boolean folderPermissionsGroupsOnly;
    public PatchSiteRequestBody withFolderPermissionsGroupsOnly(Boolean folderPermissionsGroupsOnly) {
        this.folderPermissionsGroupsOnly = folderPermissionsGroupsOnly;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon128_delete")
    public Boolean icon128Delete;
    public PatchSiteRequestBody withIcon128Delete(Boolean icon128Delete) {
        this.icon128Delete = icon128Delete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchSiteRequestBodyIcon128File icon128File;
    public PatchSiteRequestBody withIcon128File(PatchSiteRequestBodyIcon128File icon128File) {
        this.icon128File = icon128File;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon16_delete")
    public Boolean icon16Delete;
    public PatchSiteRequestBody withIcon16Delete(Boolean icon16Delete) {
        this.icon16Delete = icon16Delete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchSiteRequestBodyIcon16File icon16File;
    public PatchSiteRequestBody withIcon16File(PatchSiteRequestBodyIcon16File icon16File) {
        this.icon16File = icon16File;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon32_delete")
    public Boolean icon32Delete;
    public PatchSiteRequestBody withIcon32Delete(Boolean icon32Delete) {
        this.icon32Delete = icon32Delete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchSiteRequestBodyIcon32File icon32File;
    public PatchSiteRequestBody withIcon32File(PatchSiteRequestBodyIcon32File icon32File) {
        this.icon32File = icon32File;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon48_delete")
    public Boolean icon48Delete;
    public PatchSiteRequestBody withIcon48Delete(Boolean icon48Delete) {
        this.icon48Delete = icon48Delete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchSiteRequestBodyIcon48File icon48File;
    public PatchSiteRequestBody withIcon48File(PatchSiteRequestBodyIcon48File icon48File) {
        this.icon48File = icon48File;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=immutable_files")
    public Boolean immutableFiles;
    public PatchSiteRequestBody withImmutableFiles(Boolean immutableFiles) {
        this.immutableFiles = immutableFiles;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=include_password_in_welcome_email")
    public Boolean includePasswordInWelcomeEmail;
    public PatchSiteRequestBody withIncludePasswordInWelcomeEmail(Boolean includePasswordInWelcomeEmail) {
        this.includePasswordInWelcomeEmail = includePasswordInWelcomeEmail;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=language")
    public String language;
    public PatchSiteRequestBody withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_base_dn")
    public String ldapBaseDn;
    public PatchSiteRequestBody withLdapBaseDn(String ldapBaseDn) {
        this.ldapBaseDn = ldapBaseDn;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_domain")
    public String ldapDomain;
    public PatchSiteRequestBody withLdapDomain(String ldapDomain) {
        this.ldapDomain = ldapDomain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_enabled")
    public Boolean ldapEnabled;
    public PatchSiteRequestBody withLdapEnabled(Boolean ldapEnabled) {
        this.ldapEnabled = ldapEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_group_action")
    public String ldapGroupAction;
    public PatchSiteRequestBody withLdapGroupAction(String ldapGroupAction) {
        this.ldapGroupAction = ldapGroupAction;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_group_exclusion")
    public String ldapGroupExclusion;
    public PatchSiteRequestBody withLdapGroupExclusion(String ldapGroupExclusion) {
        this.ldapGroupExclusion = ldapGroupExclusion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_group_inclusion")
    public String ldapGroupInclusion;
    public PatchSiteRequestBody withLdapGroupInclusion(String ldapGroupInclusion) {
        this.ldapGroupInclusion = ldapGroupInclusion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_host")
    public String ldapHost;
    public PatchSiteRequestBody withLdapHost(String ldapHost) {
        this.ldapHost = ldapHost;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_host_2")
    public String ldapHost2;
    public PatchSiteRequestBody withLdapHost2(String ldapHost2) {
        this.ldapHost2 = ldapHost2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_host_3")
    public String ldapHost3;
    public PatchSiteRequestBody withLdapHost3(String ldapHost3) {
        this.ldapHost3 = ldapHost3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_password_change")
    public String ldapPasswordChange;
    public PatchSiteRequestBody withLdapPasswordChange(String ldapPasswordChange) {
        this.ldapPasswordChange = ldapPasswordChange;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_password_change_confirmation")
    public String ldapPasswordChangeConfirmation;
    public PatchSiteRequestBody withLdapPasswordChangeConfirmation(String ldapPasswordChangeConfirmation) {
        this.ldapPasswordChangeConfirmation = ldapPasswordChangeConfirmation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_port")
    public Integer ldapPort;
    public PatchSiteRequestBody withLdapPort(Integer ldapPort) {
        this.ldapPort = ldapPort;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_secure")
    public Boolean ldapSecure;
    public PatchSiteRequestBody withLdapSecure(Boolean ldapSecure) {
        this.ldapSecure = ldapSecure;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_type")
    public String ldapType;
    public PatchSiteRequestBody withLdapType(String ldapType) {
        this.ldapType = ldapType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_user_action")
    public String ldapUserAction;
    public PatchSiteRequestBody withLdapUserAction(String ldapUserAction) {
        this.ldapUserAction = ldapUserAction;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_user_include_groups")
    public String ldapUserIncludeGroups;
    public PatchSiteRequestBody withLdapUserIncludeGroups(String ldapUserIncludeGroups) {
        this.ldapUserIncludeGroups = ldapUserIncludeGroups;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_username")
    public String ldapUsername;
    public PatchSiteRequestBody withLdapUsername(String ldapUsername) {
        this.ldapUsername = ldapUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ldap_username_field")
    public String ldapUsernameField;
    public PatchSiteRequestBody withLdapUsernameField(String ldapUsernameField) {
        this.ldapUsernameField = ldapUsernameField;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=login_help_text")
    public String loginHelpText;
    public PatchSiteRequestBody withLoginHelpText(String loginHelpText) {
        this.loginHelpText = loginHelpText;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=logo_delete")
    public Boolean logoDelete;
    public PatchSiteRequestBody withLogoDelete(Boolean logoDelete) {
        this.logoDelete = logoDelete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchSiteRequestBodyLogoFile logoFile;
    public PatchSiteRequestBody withLogoFile(PatchSiteRequestBodyLogoFile logoFile) {
        this.logoFile = logoFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=max_prior_passwords")
    public Integer maxPriorPasswords;
    public PatchSiteRequestBody withMaxPriorPasswords(Integer maxPriorPasswords) {
        this.maxPriorPasswords = maxPriorPasswords;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mobile_app")
    public Boolean mobileApp;
    public PatchSiteRequestBody withMobileApp(Boolean mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mobile_app_session_ip_pinning")
    public Boolean mobileAppSessionIpPinning;
    public PatchSiteRequestBody withMobileAppSessionIpPinning(Boolean mobileAppSessionIpPinning) {
        this.mobileAppSessionIpPinning = mobileAppSessionIpPinning;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mobile_app_session_lifetime")
    public Integer mobileAppSessionLifetime;
    public PatchSiteRequestBody withMobileAppSessionLifetime(Integer mobileAppSessionLifetime) {
        this.mobileAppSessionLifetime = mobileAppSessionLifetime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchSiteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=non_sso_groups_allowed")
    public Boolean nonSsoGroupsAllowed;
    public PatchSiteRequestBody withNonSsoGroupsAllowed(Boolean nonSsoGroupsAllowed) {
        this.nonSsoGroupsAllowed = nonSsoGroupsAllowed;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=non_sso_users_allowed")
    public Boolean nonSsoUsersAllowed;
    public PatchSiteRequestBody withNonSsoUsersAllowed(Boolean nonSsoUsersAllowed) {
        this.nonSsoUsersAllowed = nonSsoUsersAllowed;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=office_integration_available")
    public Boolean officeIntegrationAvailable;
    public PatchSiteRequestBody withOfficeIntegrationAvailable(Boolean officeIntegrationAvailable) {
        this.officeIntegrationAvailable = officeIntegrationAvailable;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=opt_out_global")
    public Boolean optOutGlobal;
    public PatchSiteRequestBody withOptOutGlobal(Boolean optOutGlobal) {
        this.optOutGlobal = optOutGlobal;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=overage_notify")
    public Boolean overageNotify;
    public PatchSiteRequestBody withOverageNotify(Boolean overageNotify) {
        this.overageNotify = overageNotify;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_min_length")
    public Integer passwordMinLength;
    public PatchSiteRequestBody withPasswordMinLength(Integer passwordMinLength) {
        this.passwordMinLength = passwordMinLength;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_require_letter")
    public Boolean passwordRequireLetter;
    public PatchSiteRequestBody withPasswordRequireLetter(Boolean passwordRequireLetter) {
        this.passwordRequireLetter = passwordRequireLetter;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_require_mixed")
    public Boolean passwordRequireMixed;
    public PatchSiteRequestBody withPasswordRequireMixed(Boolean passwordRequireMixed) {
        this.passwordRequireMixed = passwordRequireMixed;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_require_number")
    public Boolean passwordRequireNumber;
    public PatchSiteRequestBody withPasswordRequireNumber(Boolean passwordRequireNumber) {
        this.passwordRequireNumber = passwordRequireNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_require_special")
    public Boolean passwordRequireSpecial;
    public PatchSiteRequestBody withPasswordRequireSpecial(Boolean passwordRequireSpecial) {
        this.passwordRequireSpecial = passwordRequireSpecial;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_require_unbreached")
    public Boolean passwordRequireUnbreached;
    public PatchSiteRequestBody withPasswordRequireUnbreached(Boolean passwordRequireUnbreached) {
        this.passwordRequireUnbreached = passwordRequireUnbreached;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_requirements_apply_to_bundles")
    public Boolean passwordRequirementsApplyToBundles;
    public PatchSiteRequestBody withPasswordRequirementsApplyToBundles(Boolean passwordRequirementsApplyToBundles) {
        this.passwordRequirementsApplyToBundles = passwordRequirementsApplyToBundles;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_validity_days")
    public Integer passwordValidityDays;
    public PatchSiteRequestBody withPasswordValidityDays(Integer passwordValidityDays) {
        this.passwordValidityDays = passwordValidityDays;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=reply_to_email")
    public String replyToEmail;
    public PatchSiteRequestBody withReplyToEmail(String replyToEmail) {
        this.replyToEmail = replyToEmail;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_2fa")
    public Boolean require2fa;
    public PatchSiteRequestBody withRequire2fa(Boolean require2fa) {
        this.require2fa = require2fa;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_2fa_user_type")
    public String require2faUserType;
    public PatchSiteRequestBody withRequire2faUserType(String require2faUserType) {
        this.require2faUserType = require2faUserType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=session_expiry")
    public Double sessionExpiry;
    public PatchSiteRequestBody withSessionExpiry(Double sessionExpiry) {
        this.sessionExpiry = sessionExpiry;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=session_pinned_by_ip")
    public Boolean sessionPinnedByIp;
    public PatchSiteRequestBody withSessionPinnedByIp(Boolean sessionPinnedByIp) {
        this.sessionPinnedByIp = sessionPinnedByIp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sftp_user_root_enabled")
    public Boolean sftpUserRootEnabled;
    public PatchSiteRequestBody withSftpUserRootEnabled(Boolean sftpUserRootEnabled) {
        this.sftpUserRootEnabled = sftpUserRootEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sharing_enabled")
    public Boolean sharingEnabled;
    public PatchSiteRequestBody withSharingEnabled(Boolean sharingEnabled) {
        this.sharingEnabled = sharingEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=show_request_access_link")
    public Boolean showRequestAccessLink;
    public PatchSiteRequestBody withShowRequestAccessLink(Boolean showRequestAccessLink) {
        this.showRequestAccessLink = showRequestAccessLink;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_footer")
    public String siteFooter;
    public PatchSiteRequestBody withSiteFooter(String siteFooter) {
        this.siteFooter = siteFooter;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_header")
    public String siteHeader;
    public PatchSiteRequestBody withSiteHeader(String siteHeader) {
        this.siteHeader = siteHeader;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_address")
    public String smtpAddress;
    public PatchSiteRequestBody withSmtpAddress(String smtpAddress) {
        this.smtpAddress = smtpAddress;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_authentication")
    public String smtpAuthentication;
    public PatchSiteRequestBody withSmtpAuthentication(String smtpAuthentication) {
        this.smtpAuthentication = smtpAuthentication;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_from")
    public String smtpFrom;
    public PatchSiteRequestBody withSmtpFrom(String smtpFrom) {
        this.smtpFrom = smtpFrom;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_password")
    public String smtpPassword;
    public PatchSiteRequestBody withSmtpPassword(String smtpPassword) {
        this.smtpPassword = smtpPassword;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_port")
    public Integer smtpPort;
    public PatchSiteRequestBody withSmtpPort(Integer smtpPort) {
        this.smtpPort = smtpPort;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=smtp_username")
    public String smtpUsername;
    public PatchSiteRequestBody withSmtpUsername(String smtpUsername) {
        this.smtpUsername = smtpUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl_required")
    public Boolean sslRequired;
    public PatchSiteRequestBody withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=subdomain")
    public String subdomain;
    public PatchSiteRequestBody withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tls_disabled")
    public Boolean tlsDisabled;
    public PatchSiteRequestBody withTlsDisabled(Boolean tlsDisabled) {
        this.tlsDisabled = tlsDisabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_provided_modified_at")
    public Boolean useProvidedModifiedAt;
    public PatchSiteRequestBody withUseProvidedModifiedAt(Boolean useProvidedModifiedAt) {
        this.useProvidedModifiedAt = useProvidedModifiedAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_lockout")
    public Boolean userLockout;
    public PatchSiteRequestBody withUserLockout(Boolean userLockout) {
        this.userLockout = userLockout;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_lockout_lock_period")
    public Integer userLockoutLockPeriod;
    public PatchSiteRequestBody withUserLockoutLockPeriod(Integer userLockoutLockPeriod) {
        this.userLockoutLockPeriod = userLockoutLockPeriod;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_lockout_tries")
    public Integer userLockoutTries;
    public PatchSiteRequestBody withUserLockoutTries(Integer userLockoutTries) {
        this.userLockoutTries = userLockoutTries;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_lockout_within")
    public Integer userLockoutWithin;
    public PatchSiteRequestBody withUserLockoutWithin(Integer userLockoutWithin) {
        this.userLockoutWithin = userLockoutWithin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_requests_enabled")
    public Boolean userRequestsEnabled;
    public PatchSiteRequestBody withUserRequestsEnabled(Boolean userRequestsEnabled) {
        this.userRequestsEnabled = userRequestsEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=welcome_custom_text")
    public String welcomeCustomText;
    public PatchSiteRequestBody withWelcomeCustomText(String welcomeCustomText) {
        this.welcomeCustomText = welcomeCustomText;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=welcome_email_cc")
    public String welcomeEmailCc;
    public PatchSiteRequestBody withWelcomeEmailCc(String welcomeEmailCc) {
        this.welcomeEmailCc = welcomeEmailCc;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=welcome_email_enabled")
    public Boolean welcomeEmailEnabled;
    public PatchSiteRequestBody withWelcomeEmailEnabled(Boolean welcomeEmailEnabled) {
        this.welcomeEmailEnabled = welcomeEmailEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=welcome_screen")
    public String welcomeScreen;
    public PatchSiteRequestBody withWelcomeScreen(String welcomeScreen) {
        this.welcomeScreen = welcomeScreen;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=windows_mode_ftp")
    public Boolean windowsModeFtp;
    public PatchSiteRequestBody withWindowsModeFtp(Boolean windowsModeFtp) {
        this.windowsModeFtp = windowsModeFtp;
        return this;
    }
}