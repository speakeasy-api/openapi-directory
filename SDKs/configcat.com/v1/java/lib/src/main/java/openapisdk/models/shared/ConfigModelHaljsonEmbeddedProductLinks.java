package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonEmbeddedProductLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public String configs;
    public ConfigModelHaljsonEmbeddedProductLinks withConfigs(String configs) {
        this.configs = configs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public String environments;
    public ConfigModelHaljsonEmbeddedProductLinks withEnvironments(String environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String members;
    public ConfigModelHaljsonEmbeddedProductLinks withMembers(String members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission-groups")
    public String permissionGroups;
    public ConfigModelHaljsonEmbeddedProductLinks withPermissionGroups(String permissionGroups) {
        this.permissionGroups = permissionGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public ConfigModelHaljsonEmbeddedProductLinks withSelf(String self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;
    public ConfigModelHaljsonEmbeddedProductLinks withTags(String tags) {
        this.tags = tags;
        return this;
    }
}