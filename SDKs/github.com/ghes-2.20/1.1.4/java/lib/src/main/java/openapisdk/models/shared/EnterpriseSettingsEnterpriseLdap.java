package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseLdap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_group")
    public String adminGroup;
    public EnterpriseSettingsEnterpriseLdap withAdminGroup(String adminGroup) {
        this.adminGroup = adminGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public Object[] base;
    public EnterpriseSettingsEnterpriseLdap withBase(Object[] base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bind_dn")
    public String bindDn;
    public EnterpriseSettingsEnterpriseLdap withBindDn(String bindDn) {
        this.bindDn = bindDn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public EnterpriseSettingsEnterpriseLdap withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public EnterpriseSettingsEnterpriseLdap withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EnterpriseSettingsEnterpriseLdap withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public EnterpriseSettingsEnterpriseLdap withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posix_support")
    public Boolean posixSupport;
    public EnterpriseSettingsEnterpriseLdap withPosixSupport(Boolean posixSupport) {
        this.posixSupport = posixSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public EnterpriseSettingsEnterpriseLdapProfile profile;
    public EnterpriseSettingsEnterpriseLdap withProfile(EnterpriseSettingsEnterpriseLdapProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciliation")
    public EnterpriseSettingsEnterpriseLdapReconciliation reconciliation;
    public EnterpriseSettingsEnterpriseLdap withReconciliation(EnterpriseSettingsEnterpriseLdapReconciliation reconciliation) {
        this.reconciliation = reconciliation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive_group_search")
    public Boolean recursiveGroupSearch;
    public EnterpriseSettingsEnterpriseLdap withRecursiveGroupSearch(Boolean recursiveGroupSearch) {
        this.recursiveGroupSearch = recursiveGroupSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_strategy")
    public String searchStrategy;
    public EnterpriseSettingsEnterpriseLdap withSearchStrategy(String searchStrategy) {
        this.searchStrategy = searchStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sync_enabled")
    public Boolean syncEnabled;
    public EnterpriseSettingsEnterpriseLdap withSyncEnabled(Boolean syncEnabled) {
        this.syncEnabled = syncEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_sync_interval")
    public Long teamSyncInterval;
    public EnterpriseSettingsEnterpriseLdap withTeamSyncInterval(Long teamSyncInterval) {
        this.teamSyncInterval = teamSyncInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public EnterpriseSettingsEnterpriseLdap withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_groups")
    public Object[] userGroups;
    public EnterpriseSettingsEnterpriseLdap withUserGroups(Object[] userGroups) {
        this.userGroups = userGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sync_emails")
    public Boolean userSyncEmails;
    public EnterpriseSettingsEnterpriseLdap withUserSyncEmails(Boolean userSyncEmails) {
        this.userSyncEmails = userSyncEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sync_interval")
    public Long userSyncInterval;
    public EnterpriseSettingsEnterpriseLdap withUserSyncInterval(Long userSyncInterval) {
        this.userSyncInterval = userSyncInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sync_keys")
    public Boolean userSyncKeys;
    public EnterpriseSettingsEnterpriseLdap withUserSyncKeys(Boolean userSyncKeys) {
        this.userSyncKeys = userSyncKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_attribute_enabled")
    public Boolean virtualAttributeEnabled;
    public EnterpriseSettingsEnterpriseLdap withVirtualAttributeEnabled(Boolean virtualAttributeEnabled) {
        this.virtualAttributeEnabled = virtualAttributeEnabled;
        return this;
    }
}