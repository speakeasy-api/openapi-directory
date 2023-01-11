package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SiteEntity
 * Show site settings
**/
public class SiteEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_user_id")
    public Integer adminUserId;
    public SiteEntity withAdminUserId(Integer adminUserId) {
        this.adminUserId = adminUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_bundle_names")
    public Boolean allowBundleNames;
    public SiteEntity withAllowBundleNames(Boolean allowBundleNames) {
        this.allowBundleNames = allowBundleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_sms")
    public Boolean allowed2faMethodSms;
    public SiteEntity withAllowed2faMethodSms(Boolean allowed2faMethodSms) {
        this.allowed2faMethodSms = allowed2faMethodSms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_totp")
    public Boolean allowed2faMethodTotp;
    public SiteEntity withAllowed2faMethodTotp(Boolean allowed2faMethodTotp) {
        this.allowed2faMethodTotp = allowed2faMethodTotp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_u2f")
    public Boolean allowed2faMethodU2f;
    public SiteEntity withAllowed2faMethodU2f(Boolean allowed2faMethodU2f) {
        this.allowed2faMethodU2f = allowed2faMethodU2f;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_yubi")
    public Boolean allowed2faMethodYubi;
    public SiteEntity withAllowed2faMethodYubi(Boolean allowed2faMethodYubi) {
        this.allowed2faMethodYubi = allowed2faMethodYubi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_countries")
    public String allowedCountries;
    public SiteEntity withAllowedCountries(String allowedCountries) {
        this.allowedCountries = allowedCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_ips")
    public String allowedIps;
    public SiteEntity withAllowedIps(String allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_about_overwrites")
    public Boolean askAboutOverwrites;
    public SiteEntity withAskAboutOverwrites(Boolean askAboutOverwrites) {
        this.askAboutOverwrites = askAboutOverwrites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_expiration")
    public Integer bundleExpiration;
    public SiteEntity withBundleExpiration(Integer bundleExpiration) {
        this.bundleExpiration = bundleExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_password_required")
    public Boolean bundlePasswordRequired;
    public SiteEntity withBundlePasswordRequired(Boolean bundlePasswordRequired) {
        this.bundlePasswordRequired = bundlePasswordRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_require_share_recipient")
    public Boolean bundleRequireShareRecipient;
    public SiteEntity withBundleRequireShareRecipient(Boolean bundleRequireShareRecipient) {
        this.bundleRequireShareRecipient = bundleRequireShareRecipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color2_left")
    public String color2Left;
    public SiteEntity withColor2Left(String color2Left) {
        this.color2Left = color2Left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color2_link")
    public String color2Link;
    public SiteEntity withColor2Link(String color2Link) {
        this.color2Link = color2Link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color2_text")
    public String color2Text;
    public SiteEntity withColor2Text(String color2Text) {
        this.color2Text = color2Text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color2_top")
    public String color2Top;
    public SiteEntity withColor2Top(String color2Top) {
        this.color2Top = color2Top;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color2_top_text")
    public String color2TopText;
    public SiteEntity withColor2TopText(String color2TopText) {
        this.color2TopText = color2TopText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public SiteEntity withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SiteEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public SiteEntity withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_namespace")
    public Boolean customNamespace;
    public SiteEntity withCustomNamespace(Boolean customNamespace) {
        this.customNamespace = customNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("days_to_retain_backups")
    public Integer daysToRetainBackups;
    public SiteEntity withDaysToRetainBackups(Integer daysToRetainBackups) {
        this.daysToRetainBackups = daysToRetainBackups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_time_zone")
    public String defaultTimeZone;
    public SiteEntity withDefaultTimeZone(String defaultTimeZone) {
        this.defaultTimeZone = defaultTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktop_app")
    public Boolean desktopApp;
    public SiteEntity withDesktopApp(Boolean desktopApp) {
        this.desktopApp = desktopApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktop_app_session_ip_pinning")
    public Boolean desktopAppSessionIpPinning;
    public SiteEntity withDesktopAppSessionIpPinning(Boolean desktopAppSessionIpPinning) {
        this.desktopAppSessionIpPinning = desktopAppSessionIpPinning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktop_app_session_lifetime")
    public Integer desktopAppSessionLifetime;
    public SiteEntity withDesktopAppSessionLifetime(Integer desktopAppSessionLifetime) {
        this.desktopAppSessionLifetime = desktopAppSessionLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable_notifications")
    public Boolean disableNotifications;
    public SiteEntity withDisableNotifications(Boolean disableNotifications) {
        this.disableNotifications = disableNotifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable_password_reset")
    public Boolean disablePasswordReset;
    public SiteEntity withDisablePasswordReset(Boolean disablePasswordReset) {
        this.disablePasswordReset = disablePasswordReset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable_users_from_inactivity_period_days")
    public Integer disableUsersFromInactivityPeriodDays;
    public SiteEntity withDisableUsersFromInactivityPeriodDays(Integer disableUsersFromInactivityPeriodDays) {
        this.disableUsersFromInactivityPeriodDays = disableUsersFromInactivityPeriodDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowed_countries")
    public String disallowedCountries;
    public SiteEntity withDisallowedCountries(String disallowedCountries) {
        this.disallowedCountries = disallowedCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public SiteEntity withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SiteEntity withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder_permissions_groups_only")
    public Boolean folderPermissionsGroupsOnly;
    public SiteEntity withFolderPermissionsGroupsOnly(Boolean folderPermissionsGroupsOnly) {
        this.folderPermissionsGroupsOnly = folderPermissionsGroupsOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hipaa")
    public Boolean hipaa;
    public SiteEntity withHipaa(Boolean hipaa) {
        this.hipaa = hipaa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon128")
    public ImageEntity icon128;
    public SiteEntity withIcon128(ImageEntity icon128) {
        this.icon128 = icon128;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon16")
    public ImageEntity icon16;
    public SiteEntity withIcon16(ImageEntity icon16) {
        this.icon16 = icon16;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon32")
    public ImageEntity icon32;
    public SiteEntity withIcon32(ImageEntity icon32) {
        this.icon32 = icon32;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon48")
    public ImageEntity icon48;
    public SiteEntity withIcon48(ImageEntity icon48) {
        this.icon48 = icon48;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("immutable_files_set_at")
    public OffsetDateTime immutableFilesSetAt;
    public SiteEntity withImmutableFilesSetAt(OffsetDateTime immutableFilesSetAt) {
        this.immutableFilesSetAt = immutableFilesSetAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_password_in_welcome_email")
    public Boolean includePasswordInWelcomeEmail;
    public SiteEntity withIncludePasswordInWelcomeEmail(Boolean includePasswordInWelcomeEmail) {
        this.includePasswordInWelcomeEmail = includePasswordInWelcomeEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public SiteEntity withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_base_dn")
    public String ldapBaseDn;
    public SiteEntity withLdapBaseDn(String ldapBaseDn) {
        this.ldapBaseDn = ldapBaseDn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_domain")
    public String ldapDomain;
    public SiteEntity withLdapDomain(String ldapDomain) {
        this.ldapDomain = ldapDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_enabled")
    public Boolean ldapEnabled;
    public SiteEntity withLdapEnabled(Boolean ldapEnabled) {
        this.ldapEnabled = ldapEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_group_action")
    public String ldapGroupAction;
    public SiteEntity withLdapGroupAction(String ldapGroupAction) {
        this.ldapGroupAction = ldapGroupAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_group_exclusion")
    public String ldapGroupExclusion;
    public SiteEntity withLdapGroupExclusion(String ldapGroupExclusion) {
        this.ldapGroupExclusion = ldapGroupExclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_group_inclusion")
    public String ldapGroupInclusion;
    public SiteEntity withLdapGroupInclusion(String ldapGroupInclusion) {
        this.ldapGroupInclusion = ldapGroupInclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host")
    public String ldapHost;
    public SiteEntity withLdapHost(String ldapHost) {
        this.ldapHost = ldapHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host_2")
    public String ldapHost2;
    public SiteEntity withLdapHost2(String ldapHost2) {
        this.ldapHost2 = ldapHost2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host_3")
    public String ldapHost3;
    public SiteEntity withLdapHost3(String ldapHost3) {
        this.ldapHost3 = ldapHost3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_port")
    public Integer ldapPort;
    public SiteEntity withLdapPort(Integer ldapPort) {
        this.ldapPort = ldapPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_secure")
    public Boolean ldapSecure;
    public SiteEntity withLdapSecure(Boolean ldapSecure) {
        this.ldapSecure = ldapSecure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_type")
    public String ldapType;
    public SiteEntity withLdapType(String ldapType) {
        this.ldapType = ldapType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_user_action")
    public String ldapUserAction;
    public SiteEntity withLdapUserAction(String ldapUserAction) {
        this.ldapUserAction = ldapUserAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_user_include_groups")
    public String ldapUserIncludeGroups;
    public SiteEntity withLdapUserIncludeGroups(String ldapUserIncludeGroups) {
        this.ldapUserIncludeGroups = ldapUserIncludeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_username")
    public String ldapUsername;
    public SiteEntity withLdapUsername(String ldapUsername) {
        this.ldapUsername = ldapUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_username_field")
    public String ldapUsernameField;
    public SiteEntity withLdapUsernameField(String ldapUsernameField) {
        this.ldapUsernameField = ldapUsernameField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_help_text")
    public String loginHelpText;
    public SiteEntity withLoginHelpText(String loginHelpText) {
        this.loginHelpText = loginHelpText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public ImageEntity logo;
    public SiteEntity withLogo(ImageEntity logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_prior_passwords")
    public Integer maxPriorPasswords;
    public SiteEntity withMaxPriorPasswords(Integer maxPriorPasswords) {
        this.maxPriorPasswords = maxPriorPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile_app")
    public Boolean mobileApp;
    public SiteEntity withMobileApp(Boolean mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile_app_session_ip_pinning")
    public Boolean mobileAppSessionIpPinning;
    public SiteEntity withMobileAppSessionIpPinning(Boolean mobileAppSessionIpPinning) {
        this.mobileAppSessionIpPinning = mobileAppSessionIpPinning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile_app_session_lifetime")
    public Integer mobileAppSessionLifetime;
    public SiteEntity withMobileAppSessionLifetime(Integer mobileAppSessionLifetime) {
        this.mobileAppSessionLifetime = mobileAppSessionLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SiteEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_billing_amount")
    public Double nextBillingAmount;
    public SiteEntity withNextBillingAmount(Double nextBillingAmount) {
        this.nextBillingAmount = nextBillingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_billing_date")
    public String nextBillingDate;
    public SiteEntity withNextBillingDate(String nextBillingDate) {
        this.nextBillingDate = nextBillingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_sso_groups_allowed")
    public Boolean nonSsoGroupsAllowed;
    public SiteEntity withNonSsoGroupsAllowed(Boolean nonSsoGroupsAllowed) {
        this.nonSsoGroupsAllowed = nonSsoGroupsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_sso_users_allowed")
    public Boolean nonSsoUsersAllowed;
    public SiteEntity withNonSsoUsersAllowed(Boolean nonSsoUsersAllowed) {
        this.nonSsoUsersAllowed = nonSsoUsersAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_integration_available")
    public Boolean officeIntegrationAvailable;
    public SiteEntity withOfficeIntegrationAvailable(Boolean officeIntegrationAvailable) {
        this.officeIntegrationAvailable = officeIntegrationAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oncehub_link")
    public String oncehubLink;
    public SiteEntity withOncehubLink(String oncehubLink) {
        this.oncehubLink = oncehubLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_out_global")
    public Boolean optOutGlobal;
    public SiteEntity withOptOutGlobal(Boolean optOutGlobal) {
        this.optOutGlobal = optOutGlobal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("overage_notified_at")
    public OffsetDateTime overageNotifiedAt;
    public SiteEntity withOverageNotifiedAt(OffsetDateTime overageNotifiedAt) {
        this.overageNotifiedAt = overageNotifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overage_notify")
    public Boolean overageNotify;
    public SiteEntity withOverageNotify(Boolean overageNotify) {
        this.overageNotify = overageNotify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overdue")
    public Boolean overdue;
    public SiteEntity withOverdue(Boolean overdue) {
        this.overdue = overdue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_min_length")
    public Integer passwordMinLength;
    public SiteEntity withPasswordMinLength(Integer passwordMinLength) {
        this.passwordMinLength = passwordMinLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_require_letter")
    public Boolean passwordRequireLetter;
    public SiteEntity withPasswordRequireLetter(Boolean passwordRequireLetter) {
        this.passwordRequireLetter = passwordRequireLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_require_mixed")
    public Boolean passwordRequireMixed;
    public SiteEntity withPasswordRequireMixed(Boolean passwordRequireMixed) {
        this.passwordRequireMixed = passwordRequireMixed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_require_number")
    public Boolean passwordRequireNumber;
    public SiteEntity withPasswordRequireNumber(Boolean passwordRequireNumber) {
        this.passwordRequireNumber = passwordRequireNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_require_special")
    public Boolean passwordRequireSpecial;
    public SiteEntity withPasswordRequireSpecial(Boolean passwordRequireSpecial) {
        this.passwordRequireSpecial = passwordRequireSpecial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_require_unbreached")
    public Boolean passwordRequireUnbreached;
    public SiteEntity withPasswordRequireUnbreached(Boolean passwordRequireUnbreached) {
        this.passwordRequireUnbreached = passwordRequireUnbreached;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_requirements_apply_to_bundles")
    public Boolean passwordRequirementsApplyToBundles;
    public SiteEntity withPasswordRequirementsApplyToBundles(Boolean passwordRequirementsApplyToBundles) {
        this.passwordRequirementsApplyToBundles = passwordRequirementsApplyToBundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_validity_days")
    public Integer passwordValidityDays;
    public SiteEntity withPasswordValidityDays(Integer passwordValidityDays) {
        this.passwordValidityDays = passwordValidityDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public SiteEntity withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reply_to_email")
    public String replyToEmail;
    public SiteEntity withReplyToEmail(String replyToEmail) {
        this.replyToEmail = replyToEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_2fa")
    public Boolean require2fa;
    public SiteEntity withRequire2fa(Boolean require2fa) {
        this.require2fa = require2fa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("require_2fa_stop_time")
    public OffsetDateTime require2faStopTime;
    public SiteEntity withRequire2faStopTime(OffsetDateTime require2faStopTime) {
        this.require2faStopTime = require2faStopTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_2fa_user_type")
    public SiteEntityRequire2faUserTypeEnum require2faUserType;
    public SiteEntity withRequire2faUserType(SiteEntityRequire2faUserTypeEnum require2faUserType) {
        this.require2faUserType = require2faUserType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public SessionEntity session;
    public SiteEntity withSession(SessionEntity session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_expiry")
    public Double sessionExpiry;
    public SiteEntity withSessionExpiry(Double sessionExpiry) {
        this.sessionExpiry = sessionExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_pinned_by_ip")
    public Boolean sessionPinnedByIp;
    public SiteEntity withSessionPinnedByIp(Boolean sessionPinnedByIp) {
        this.sessionPinnedByIp = sessionPinnedByIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sftp_user_root_enabled")
    public Boolean sftpUserRootEnabled;
    public SiteEntity withSftpUserRootEnabled(Boolean sftpUserRootEnabled) {
        this.sftpUserRootEnabled = sftpUserRootEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing_enabled")
    public Boolean sharingEnabled;
    public SiteEntity withSharingEnabled(Boolean sharingEnabled) {
        this.sharingEnabled = sharingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_request_access_link")
    public Boolean showRequestAccessLink;
    public SiteEntity withShowRequestAccessLink(Boolean showRequestAccessLink) {
        this.showRequestAccessLink = showRequestAccessLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_footer")
    public String siteFooter;
    public SiteEntity withSiteFooter(String siteFooter) {
        this.siteFooter = siteFooter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_header")
    public String siteHeader;
    public SiteEntity withSiteHeader(String siteHeader) {
        this.siteHeader = siteHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smtp_address")
    public String smtpAddress;
    public SiteEntity withSmtpAddress(String smtpAddress) {
        this.smtpAddress = smtpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smtp_authentication")
    public String smtpAuthentication;
    public SiteEntity withSmtpAuthentication(String smtpAuthentication) {
        this.smtpAuthentication = smtpAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smtp_from")
    public String smtpFrom;
    public SiteEntity withSmtpFrom(String smtpFrom) {
        this.smtpFrom = smtpFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smtp_port")
    public Integer smtpPort;
    public SiteEntity withSmtpPort(Integer smtpPort) {
        this.smtpPort = smtpPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smtp_username")
    public String smtpUsername;
    public SiteEntity withSmtpUsername(String smtpUsername) {
        this.smtpUsername = smtpUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl_required")
    public Boolean sslRequired;
    public SiteEntity withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdomain")
    public String subdomain;
    public SiteEntity withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("switch_to_plan_date")
    public OffsetDateTime switchToPlanDate;
    public SiteEntity withSwitchToPlanDate(OffsetDateTime switchToPlanDate) {
        this.switchToPlanDate = switchToPlanDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_disabled")
    public Boolean tlsDisabled;
    public SiteEntity withTlsDisabled(Boolean tlsDisabled) {
        this.tlsDisabled = tlsDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trial_days_left")
    public Integer trialDaysLeft;
    public SiteEntity withTrialDaysLeft(Integer trialDaysLeft) {
        this.trialDaysLeft = trialDaysLeft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trial_until")
    public OffsetDateTime trialUntil;
    public SiteEntity withTrialUntil(OffsetDateTime trialUntil) {
        this.trialUntil = trialUntil;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SiteEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_provided_modified_at")
    public Boolean useProvidedModifiedAt;
    public SiteEntity withUseProvidedModifiedAt(Boolean useProvidedModifiedAt) {
        this.useProvidedModifiedAt = useProvidedModifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserEntity user;
    public SiteEntity withUser(UserEntity user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_lockout")
    public Boolean userLockout;
    public SiteEntity withUserLockout(Boolean userLockout) {
        this.userLockout = userLockout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_lockout_lock_period")
    public Integer userLockoutLockPeriod;
    public SiteEntity withUserLockoutLockPeriod(Integer userLockoutLockPeriod) {
        this.userLockoutLockPeriod = userLockoutLockPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_lockout_tries")
    public Integer userLockoutTries;
    public SiteEntity withUserLockoutTries(Integer userLockoutTries) {
        this.userLockoutTries = userLockoutTries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_lockout_within")
    public Integer userLockoutWithin;
    public SiteEntity withUserLockoutWithin(Integer userLockoutWithin) {
        this.userLockoutWithin = userLockoutWithin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_requests_enabled")
    public Boolean userRequestsEnabled;
    public SiteEntity withUserRequestsEnabled(Boolean userRequestsEnabled) {
        this.userRequestsEnabled = userRequestsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcome_custom_text")
    public String welcomeCustomText;
    public SiteEntity withWelcomeCustomText(String welcomeCustomText) {
        this.welcomeCustomText = welcomeCustomText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcome_email_cc")
    public String welcomeEmailCc;
    public SiteEntity withWelcomeEmailCc(String welcomeEmailCc) {
        this.welcomeEmailCc = welcomeEmailCc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcome_email_enabled")
    public Boolean welcomeEmailEnabled;
    public SiteEntity withWelcomeEmailEnabled(Boolean welcomeEmailEnabled) {
        this.welcomeEmailEnabled = welcomeEmailEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcome_screen")
    public SiteEntityWelcomeScreenEnum welcomeScreen;
    public SiteEntity withWelcomeScreen(SiteEntityWelcomeScreenEnum welcomeScreen) {
        this.welcomeScreen = welcomeScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windows_mode_ftp")
    public Boolean windowsModeFtp;
    public SiteEntity withWindowsModeFtp(Boolean windowsModeFtp) {
        this.windowsModeFtp = windowsModeFtp;
        return this;
    }
}