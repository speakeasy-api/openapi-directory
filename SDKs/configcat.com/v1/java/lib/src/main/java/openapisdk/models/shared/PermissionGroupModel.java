package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PermissionGroupModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessType")
    public AccessTypeEnum accessType;
    public PermissionGroupModel withAccessType(AccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateOrUpdateConfig")
    public Boolean canCreateOrUpdateConfig;
    public PermissionGroupModel withCanCreateOrUpdateConfig(Boolean canCreateOrUpdateConfig) {
        this.canCreateOrUpdateConfig = canCreateOrUpdateConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateOrUpdateEnvironment")
    public Boolean canCreateOrUpdateEnvironment;
    public PermissionGroupModel withCanCreateOrUpdateEnvironment(Boolean canCreateOrUpdateEnvironment) {
        this.canCreateOrUpdateEnvironment = canCreateOrUpdateEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateOrUpdateSetting")
    public Boolean canCreateOrUpdateSetting;
    public PermissionGroupModel withCanCreateOrUpdateSetting(Boolean canCreateOrUpdateSetting) {
        this.canCreateOrUpdateSetting = canCreateOrUpdateSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateOrUpdateTag")
    public Boolean canCreateOrUpdateTag;
    public PermissionGroupModel withCanCreateOrUpdateTag(Boolean canCreateOrUpdateTag) {
        this.canCreateOrUpdateTag = canCreateOrUpdateTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteConfig")
    public Boolean canDeleteConfig;
    public PermissionGroupModel withCanDeleteConfig(Boolean canDeleteConfig) {
        this.canDeleteConfig = canDeleteConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteEnvironment")
    public Boolean canDeleteEnvironment;
    public PermissionGroupModel withCanDeleteEnvironment(Boolean canDeleteEnvironment) {
        this.canDeleteEnvironment = canDeleteEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteSetting")
    public Boolean canDeleteSetting;
    public PermissionGroupModel withCanDeleteSetting(Boolean canDeleteSetting) {
        this.canDeleteSetting = canDeleteSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteTag")
    public Boolean canDeleteTag;
    public PermissionGroupModel withCanDeleteTag(Boolean canDeleteTag) {
        this.canDeleteTag = canDeleteTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageIntegrations")
    public Boolean canManageIntegrations;
    public PermissionGroupModel withCanManageIntegrations(Boolean canManageIntegrations) {
        this.canManageIntegrations = canManageIntegrations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageMembers")
    public Boolean canManageMembers;
    public PermissionGroupModel withCanManageMembers(Boolean canManageMembers) {
        this.canManageMembers = canManageMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageProductPreferences")
    public Boolean canManageProductPreferences;
    public PermissionGroupModel withCanManageProductPreferences(Boolean canManageProductPreferences) {
        this.canManageProductPreferences = canManageProductPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canManageWebhook")
    public Boolean canManageWebhook;
    public PermissionGroupModel withCanManageWebhook(Boolean canManageWebhook) {
        this.canManageWebhook = canManageWebhook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRotateSdkKey")
    public Boolean canRotateSdkKey;
    public PermissionGroupModel withCanRotateSDKKey(Boolean canRotateSdkKey) {
        this.canRotateSdkKey = canRotateSdkKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canTagSetting")
    public Boolean canTagSetting;
    public PermissionGroupModel withCanTagSetting(Boolean canTagSetting) {
        this.canTagSetting = canTagSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUseExportImport")
    public Boolean canUseExportImport;
    public PermissionGroupModel withCanUseExportImport(Boolean canUseExportImport) {
        this.canUseExportImport = canUseExportImport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canViewSdkKey")
    public Boolean canViewSdkKey;
    public PermissionGroupModel withCanViewSDKKey(Boolean canViewSdkKey) {
        this.canViewSdkKey = canViewSdkKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccesses")
    public EnvironmentAccessModel[] environmentAccesses;
    public PermissionGroupModel withEnvironmentAccesses(EnvironmentAccessModel[] environmentAccesses) {
        this.environmentAccesses = environmentAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PermissionGroupModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newEnvironmentAccessType")
    public EnvironmentAccessTypeEnum newEnvironmentAccessType;
    public PermissionGroupModel withNewEnvironmentAccessType(EnvironmentAccessTypeEnum newEnvironmentAccessType) {
        this.newEnvironmentAccessType = newEnvironmentAccessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionGroupId")
    public Long permissionGroupId;
    public PermissionGroupModel withPermissionGroupId(Long permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}