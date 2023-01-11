package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public String configs;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withConfigs(String configs) {
        this.configs = configs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public String environments;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withEnvironments(String environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String members;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withMembers(String members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission-groups")
    public String permissionGroups;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withPermissionGroups(String permissionGroups) {
        this.permissionGroups = permissionGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withSelf(String self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks withTags(String tags) {
        this.tags = tags;
        return this;
    }
}