package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=allowed_ips")
    public String allowedIps;
    public PatchUsersIdRequestBody withAllowedIps(String allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=announcements_read")
    public Boolean announcementsRead;
    public PatchUsersIdRequestBody withAnnouncementsRead(Boolean announcementsRead) {
        this.announcementsRead = announcementsRead;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=attachments_permission")
    public Boolean attachmentsPermission;
    public PatchUsersIdRequestBody withAttachmentsPermission(Boolean attachmentsPermission) {
        this.attachmentsPermission = attachmentsPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=authenticate_until")
    public OffsetDateTime authenticateUntil;
    public PatchUsersIdRequestBody withAuthenticateUntil(OffsetDateTime authenticateUntil) {
        this.authenticateUntil = authenticateUntil;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=authentication_method")
    public PatchUsersIdRequestBodyAuthenticationMethodEnum authenticationMethod;
    public PatchUsersIdRequestBody withAuthenticationMethod(PatchUsersIdRequestBodyAuthenticationMethodEnum authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=avatar_delete")
    public Boolean avatarDelete;
    public PatchUsersIdRequestBody withAvatarDelete(Boolean avatarDelete) {
        this.avatarDelete = avatarDelete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PatchUsersIdRequestBodyAvatarFile avatarFile;
    public PatchUsersIdRequestBody withAvatarFile(PatchUsersIdRequestBodyAvatarFile avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=billing_permission")
    public Boolean billingPermission;
    public PatchUsersIdRequestBody withBillingPermission(Boolean billingPermission) {
        this.billingPermission = billingPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bypass_inactive_disable")
    public Boolean bypassInactiveDisable;
    public PatchUsersIdRequestBody withBypassInactiveDisable(Boolean bypassInactiveDisable) {
        this.bypassInactiveDisable = bypassInactiveDisable;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bypass_site_allowed_ips")
    public Boolean bypassSiteAllowedIps;
    public PatchUsersIdRequestBody withBypassSiteAllowedIps(Boolean bypassSiteAllowedIps) {
        this.bypassSiteAllowedIps = bypassSiteAllowedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=change_password")
    public String changePassword;
    public PatchUsersIdRequestBody withChangePassword(String changePassword) {
        this.changePassword = changePassword;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=change_password_confirmation")
    public String changePasswordConfirmation;
    public PatchUsersIdRequestBody withChangePasswordConfirmation(String changePasswordConfirmation) {
        this.changePasswordConfirmation = changePasswordConfirmation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=company")
    public String company;
    public PatchUsersIdRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=dav_permission")
    public Boolean davPermission;
    public PatchUsersIdRequestBody withDavPermission(Boolean davPermission) {
        this.davPermission = davPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disabled")
    public Boolean disabled;
    public PatchUsersIdRequestBody withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public PatchUsersIdRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ftp_permission")
    public Boolean ftpPermission;
    public PatchUsersIdRequestBody withFtpPermission(Boolean ftpPermission) {
        this.ftpPermission = ftpPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=grant_permission")
    public String grantPermission;
    public PatchUsersIdRequestBody withGrantPermission(String grantPermission) {
        this.grantPermission = grantPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public Integer groupId;
    public PatchUsersIdRequestBody withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_ids")
    public String groupIds;
    public PatchUsersIdRequestBody withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=header_text")
    public String headerText;
    public PatchUsersIdRequestBody withHeaderText(String headerText) {
        this.headerText = headerText;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=language")
    public String language;
    public PatchUsersIdRequestBody withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchUsersIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notes")
    public String notes;
    public PatchUsersIdRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notification_daily_send_time")
    public Integer notificationDailySendTime;
    public PatchUsersIdRequestBody withNotificationDailySendTime(Integer notificationDailySendTime) {
        this.notificationDailySendTime = notificationDailySendTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=office_integration_enabled")
    public Boolean officeIntegrationEnabled;
    public PatchUsersIdRequestBody withOfficeIntegrationEnabled(Boolean officeIntegrationEnabled) {
        this.officeIntegrationEnabled = officeIntegrationEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PatchUsersIdRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_confirmation")
    public String passwordConfirmation;
    public PatchUsersIdRequestBody withPasswordConfirmation(String passwordConfirmation) {
        this.passwordConfirmation = passwordConfirmation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_validity_days")
    public Integer passwordValidityDays;
    public PatchUsersIdRequestBody withPasswordValidityDays(Integer passwordValidityDays) {
        this.passwordValidityDays = passwordValidityDays;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=receive_admin_alerts")
    public Boolean receiveAdminAlerts;
    public PatchUsersIdRequestBody withReceiveAdminAlerts(Boolean receiveAdminAlerts) {
        this.receiveAdminAlerts = receiveAdminAlerts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_2fa")
    public PatchUsersIdRequestBodyRequire2faEnum require2fa;
    public PatchUsersIdRequestBody withRequire2fa(PatchUsersIdRequestBodyRequire2faEnum require2fa) {
        this.require2fa = require2fa;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_password_change")
    public Boolean requirePasswordChange;
    public PatchUsersIdRequestBody withRequirePasswordChange(Boolean requirePasswordChange) {
        this.requirePasswordChange = requirePasswordChange;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=restapi_permission")
    public Boolean restapiPermission;
    public PatchUsersIdRequestBody withRestapiPermission(Boolean restapiPermission) {
        this.restapiPermission = restapiPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=self_managed")
    public Boolean selfManaged;
    public PatchUsersIdRequestBody withSelfManaged(Boolean selfManaged) {
        this.selfManaged = selfManaged;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sftp_permission")
    public Boolean sftpPermission;
    public PatchUsersIdRequestBody withSftpPermission(Boolean sftpPermission) {
        this.sftpPermission = sftpPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_admin")
    public Boolean siteAdmin;
    public PatchUsersIdRequestBody withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=skip_welcome_screen")
    public Boolean skipWelcomeScreen;
    public PatchUsersIdRequestBody withSkipWelcomeScreen(Boolean skipWelcomeScreen) {
        this.skipWelcomeScreen = skipWelcomeScreen;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl_required")
    public PatchUsersIdRequestBodySslRequiredEnum sslRequired;
    public PatchUsersIdRequestBody withSslRequired(PatchUsersIdRequestBodySslRequiredEnum sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sso_strategy_id")
    public Integer ssoStrategyId;
    public PatchUsersIdRequestBody withSsoStrategyId(Integer ssoStrategyId) {
        this.ssoStrategyId = ssoStrategyId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=subscribe_to_newsletter")
    public Boolean subscribeToNewsletter;
    public PatchUsersIdRequestBody withSubscribeToNewsletter(Boolean subscribeToNewsletter) {
        this.subscribeToNewsletter = subscribeToNewsletter;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=time_zone")
    public String timeZone;
    public PatchUsersIdRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_root")
    public String userRoot;
    public PatchUsersIdRequestBody withUserRoot(String userRoot) {
        this.userRoot = userRoot;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PatchUsersIdRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}