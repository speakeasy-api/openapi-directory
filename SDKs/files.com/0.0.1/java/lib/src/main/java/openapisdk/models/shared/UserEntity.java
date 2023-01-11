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
 * UserEntity
 * Create User
**/
public class UserEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_2fa")
    public Boolean active2fa;
    public UserEntity withActive2fa(Boolean active2fa) {
        this.active2fa = active2fa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_group_ids")
    public Integer[] adminGroupIds;
    public UserEntity withAdminGroupIds(Integer[] adminGroupIds) {
        this.adminGroupIds = adminGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_ips")
    public String allowedIps;
    public UserEntity withAllowedIps(String allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_keys_count")
    public Integer apiKeysCount;
    public UserEntity withApiKeysCount(Integer apiKeysCount) {
        this.apiKeysCount = apiKeysCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments_permission")
    public Boolean attachmentsPermission;
    public UserEntity withAttachmentsPermission(Boolean attachmentsPermission) {
        this.attachmentsPermission = attachmentsPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("authenticate_until")
    public OffsetDateTime authenticateUntil;
    public UserEntity withAuthenticateUntil(OffsetDateTime authenticateUntil) {
        this.authenticateUntil = authenticateUntil;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_method")
    public UserEntityAuthenticationMethodEnum authenticationMethod;
    public UserEntity withAuthenticationMethod(UserEntityAuthenticationMethodEnum authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public UserEntity withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_permission")
    public Boolean billingPermission;
    public UserEntity withBillingPermission(Boolean billingPermission) {
        this.billingPermission = billingPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bypass_inactive_disable")
    public Boolean bypassInactiveDisable;
    public UserEntity withBypassInactiveDisable(Boolean bypassInactiveDisable) {
        this.bypassInactiveDisable = bypassInactiveDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bypass_site_allowed_ips")
    public Boolean bypassSiteAllowedIps;
    public UserEntity withBypassSiteAllowedIps(Boolean bypassSiteAllowedIps) {
        this.bypassSiteAllowedIps = bypassSiteAllowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public UserEntity withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UserEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dav_permission")
    public Boolean davPermission;
    public UserEntity withDavPermission(Boolean davPermission) {
        this.davPermission = davPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public UserEntity withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserEntity withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externally_managed")
    public Boolean externallyManaged;
    public UserEntity withExternallyManaged(Boolean externallyManaged) {
        this.externallyManaged = externallyManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ftp_permission")
    public Boolean ftpPermission;
    public UserEntity withFtpPermission(Boolean ftpPermission) {
        this.ftpPermission = ftpPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_ids")
    public String groupIds;
    public UserEntity withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header_text")
    public String headerText;
    public UserEntity withHeaderText(String headerText) {
        this.headerText = headerText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UserEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UserEntity withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_login_at")
    public OffsetDateTime lastLoginAt;
    public UserEntity withLastLoginAt(OffsetDateTime lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_protocol_cipher")
    public String lastProtocolCipher;
    public UserEntity withLastProtocolCipher(String lastProtocolCipher) {
        this.lastProtocolCipher = lastProtocolCipher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lockout_expires")
    public OffsetDateTime lockoutExpires;
    public UserEntity withLockoutExpires(OffsetDateTime lockoutExpires) {
        this.lockoutExpires = lockoutExpires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public UserEntity withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_daily_send_time")
    public Integer notificationDailySendTime;
    public UserEntity withNotificationDailySendTime(Integer notificationDailySendTime) {
        this.notificationDailySendTime = notificationDailySendTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_integration_enabled")
    public Boolean officeIntegrationEnabled;
    public UserEntity withOfficeIntegrationEnabled(Boolean officeIntegrationEnabled) {
        this.officeIntegrationEnabled = officeIntegrationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("password_set_at")
    public OffsetDateTime passwordSetAt;
    public UserEntity withPasswordSetAt(OffsetDateTime passwordSetAt) {
        this.passwordSetAt = passwordSetAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_validity_days")
    public Integer passwordValidityDays;
    public UserEntity withPasswordValidityDays(Integer passwordValidityDays) {
        this.passwordValidityDays = passwordValidityDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_keys_count")
    public Integer publicKeysCount;
    public UserEntity withPublicKeysCount(Integer publicKeysCount) {
        this.publicKeysCount = publicKeysCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_admin_alerts")
    public Boolean receiveAdminAlerts;
    public UserEntity withReceiveAdminAlerts(Boolean receiveAdminAlerts) {
        this.receiveAdminAlerts = receiveAdminAlerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_2fa")
    public UserEntityRequire2faEnum require2fa;
    public UserEntity withRequire2fa(UserEntityRequire2faEnum require2fa) {
        this.require2fa = require2fa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_change")
    public Boolean requirePasswordChange;
    public UserEntity withRequirePasswordChange(Boolean requirePasswordChange) {
        this.requirePasswordChange = requirePasswordChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restapi_permission")
    public Boolean restapiPermission;
    public UserEntity withRestapiPermission(Boolean restapiPermission) {
        this.restapiPermission = restapiPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self_managed")
    public Boolean selfManaged;
    public UserEntity withSelfManaged(Boolean selfManaged) {
        this.selfManaged = selfManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sftp_permission")
    public Boolean sftpPermission;
    public UserEntity withSftpPermission(Boolean sftpPermission) {
        this.sftpPermission = sftpPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public UserEntity withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_welcome_screen")
    public Boolean skipWelcomeScreen;
    public UserEntity withSkipWelcomeScreen(Boolean skipWelcomeScreen) {
        this.skipWelcomeScreen = skipWelcomeScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl_required")
    public UserEntitySslRequiredEnum sslRequired;
    public UserEntity withSslRequired(UserEntitySslRequiredEnum sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sso_strategy_id")
    public Integer ssoStrategyId;
    public UserEntity withSsoStrategyId(Integer ssoStrategyId) {
        this.ssoStrategyId = ssoStrategyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribe_to_newsletter")
    public Boolean subscribeToNewsletter;
    public UserEntity withSubscribeToNewsletter(Boolean subscribeToNewsletter) {
        this.subscribeToNewsletter = subscribeToNewsletter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_zone")
    public String timeZone;
    public UserEntity withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_of_2fa")
    public String typeOf2fa;
    public UserEntity withTypeOf2fa(String typeOf2fa) {
        this.typeOf2fa = typeOf2fa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_root")
    public String userRoot;
    public UserEntity withUserRoot(String userRoot) {
        this.userRoot = userRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}