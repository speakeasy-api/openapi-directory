package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbedded embedded;
    public SettingValueModelHaljsonEmbeddedEnvironment withEmbedded(SettingValueModelHaljsonEmbeddedEnvironmentEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonEmbeddedEnvironmentLinks links;
    public SettingValueModelHaljsonEmbeddedEnvironment withLinks(SettingValueModelHaljsonEmbeddedEnvironmentLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentId")
    public String environmentId;
    public SettingValueModelHaljsonEmbeddedEnvironment withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedEnvironment withName(String name) {
        this.name = name;
        return this;
    }
}