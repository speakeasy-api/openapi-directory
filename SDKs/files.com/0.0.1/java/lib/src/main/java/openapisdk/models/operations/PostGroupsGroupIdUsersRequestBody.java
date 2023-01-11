package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsGroupIdUsersRequestBody {
    @SpeakeasyMetadata("multipartForm:name=allowed_ips")
    public String allowedIps;
    public PostGroupsGroupIdUsersRequestBody withAllowedIps(String allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=announcements_read")
    public Boolean announcementsRead;
    public PostGroupsGroupIdUsersRequestBody withAnnouncementsRead(Boolean announcementsRead) {
        this.announcementsRead = announcementsRead;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=attachments_permission")
    public Boolean attachmentsPermission;
    public PostGroupsGroupIdUsersRequestBody withAttachmentsPermission(Boolean attachmentsPermission) {
        this.attachmentsPermission = attachmentsPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=authenticate_until")
    public OffsetDateTime authenticateUntil;
    public PostGroupsGroupIdUsersRequestBody withAuthenticateUntil(OffsetDateTime authenticateUntil) {
        this.authenticateUntil = authenticateUntil;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=authentication_method")
    public PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum authenticationMethod;
    public PostGroupsGroupIdUsersRequestBody withAuthenticationMethod(PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=avatar_delete")
    public Boolean avatarDelete;
    public PostGroupsGroupIdUsersRequestBody withAvatarDelete(Boolean avatarDelete) {
        this.avatarDelete = avatarDelete;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public PostGroupsGroupIdUsersRequestBodyAvatarFile avatarFile;
    public PostGroupsGroupIdUsersRequestBody withAvatarFile(PostGroupsGroupIdUsersRequestBodyAvatarFile avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=billing_permission")
    public Boolean billingPermission;
    public PostGroupsGroupIdUsersRequestBody withBillingPermission(Boolean billingPermission) {
        this.billingPermission = billingPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bypass_inactive_disable")
    public Boolean bypassInactiveDisable;
    public PostGroupsGroupIdUsersRequestBody withBypassInactiveDisable(Boolean bypassInactiveDisable) {
        this.bypassInactiveDisable = bypassInactiveDisable;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bypass_site_allowed_ips")
    public Boolean bypassSiteAllowedIps;
    public PostGroupsGroupIdUsersRequestBody withBypassSiteAllowedIps(Boolean bypassSiteAllowedIps) {
        this.bypassSiteAllowedIps = bypassSiteAllowedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=change_password")
    public String changePassword;
    public PostGroupsGroupIdUsersRequestBody withChangePassword(String changePassword) {
        this.changePassword = changePassword;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=change_password_confirmation")
    public String changePasswordConfirmation;
    public PostGroupsGroupIdUsersRequestBody withChangePasswordConfirmation(String changePasswordConfirmation) {
        this.changePasswordConfirmation = changePasswordConfirmation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=company")
    public String company;
    public PostGroupsGroupIdUsersRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=dav_permission")
    public Boolean davPermission;
    public PostGroupsGroupIdUsersRequestBody withDavPermission(Boolean davPermission) {
        this.davPermission = davPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=disabled")
    public Boolean disabled;
    public PostGroupsGroupIdUsersRequestBody withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public PostGroupsGroupIdUsersRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ftp_permission")
    public Boolean ftpPermission;
    public PostGroupsGroupIdUsersRequestBody withFtpPermission(Boolean ftpPermission) {
        this.ftpPermission = ftpPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=grant_permission")
    public String grantPermission;
    public PostGroupsGroupIdUsersRequestBody withGrantPermission(String grantPermission) {
        this.grantPermission = grantPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_ids")
    public String groupIds;
    public PostGroupsGroupIdUsersRequestBody withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=header_text")
    public String headerText;
    public PostGroupsGroupIdUsersRequestBody withHeaderText(String headerText) {
        this.headerText = headerText;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=language")
    public String language;
    public PostGroupsGroupIdUsersRequestBody withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostGroupsGroupIdUsersRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notes")
    public String notes;
    public PostGroupsGroupIdUsersRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notification_daily_send_time")
    public Integer notificationDailySendTime;
    public PostGroupsGroupIdUsersRequestBody withNotificationDailySendTime(Integer notificationDailySendTime) {
        this.notificationDailySendTime = notificationDailySendTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=office_integration_enabled")
    public Boolean officeIntegrationEnabled;
    public PostGroupsGroupIdUsersRequestBody withOfficeIntegrationEnabled(Boolean officeIntegrationEnabled) {
        this.officeIntegrationEnabled = officeIntegrationEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PostGroupsGroupIdUsersRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_confirmation")
    public String passwordConfirmation;
    public PostGroupsGroupIdUsersRequestBody withPasswordConfirmation(String passwordConfirmation) {
        this.passwordConfirmation = passwordConfirmation;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password_validity_days")
    public Integer passwordValidityDays;
    public PostGroupsGroupIdUsersRequestBody withPasswordValidityDays(Integer passwordValidityDays) {
        this.passwordValidityDays = passwordValidityDays;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=receive_admin_alerts")
    public Boolean receiveAdminAlerts;
    public PostGroupsGroupIdUsersRequestBody withReceiveAdminAlerts(Boolean receiveAdminAlerts) {
        this.receiveAdminAlerts = receiveAdminAlerts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_2fa")
    public PostGroupsGroupIdUsersRequestBodyRequire2faEnum require2fa;
    public PostGroupsGroupIdUsersRequestBody withRequire2fa(PostGroupsGroupIdUsersRequestBodyRequire2faEnum require2fa) {
        this.require2fa = require2fa;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_password_change")
    public Boolean requirePasswordChange;
    public PostGroupsGroupIdUsersRequestBody withRequirePasswordChange(Boolean requirePasswordChange) {
        this.requirePasswordChange = requirePasswordChange;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=restapi_permission")
    public Boolean restapiPermission;
    public PostGroupsGroupIdUsersRequestBody withRestapiPermission(Boolean restapiPermission) {
        this.restapiPermission = restapiPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=self_managed")
    public Boolean selfManaged;
    public PostGroupsGroupIdUsersRequestBody withSelfManaged(Boolean selfManaged) {
        this.selfManaged = selfManaged;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sftp_permission")
    public Boolean sftpPermission;
    public PostGroupsGroupIdUsersRequestBody withSftpPermission(Boolean sftpPermission) {
        this.sftpPermission = sftpPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_admin")
    public Boolean siteAdmin;
    public PostGroupsGroupIdUsersRequestBody withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=skip_welcome_screen")
    public Boolean skipWelcomeScreen;
    public PostGroupsGroupIdUsersRequestBody withSkipWelcomeScreen(Boolean skipWelcomeScreen) {
        this.skipWelcomeScreen = skipWelcomeScreen;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl_required")
    public PostGroupsGroupIdUsersRequestBodySslRequiredEnum sslRequired;
    public PostGroupsGroupIdUsersRequestBody withSslRequired(PostGroupsGroupIdUsersRequestBodySslRequiredEnum sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sso_strategy_id")
    public Integer ssoStrategyId;
    public PostGroupsGroupIdUsersRequestBody withSsoStrategyId(Integer ssoStrategyId) {
        this.ssoStrategyId = ssoStrategyId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=subscribe_to_newsletter")
    public Boolean subscribeToNewsletter;
    public PostGroupsGroupIdUsersRequestBody withSubscribeToNewsletter(Boolean subscribeToNewsletter) {
        this.subscribeToNewsletter = subscribeToNewsletter;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=time_zone")
    public String timeZone;
    public PostGroupsGroupIdUsersRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_root")
    public String userRoot;
    public PostGroupsGroupIdUsersRequestBody withUserRoot(String userRoot) {
        this.userRoot = userRoot;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PostGroupsGroupIdUsersRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}