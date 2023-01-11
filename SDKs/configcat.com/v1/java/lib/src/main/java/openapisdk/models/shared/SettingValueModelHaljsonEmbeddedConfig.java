package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingValueModelHaljsonEmbeddedConfigEmbedded embedded;
    public SettingValueModelHaljsonEmbeddedConfig withEmbedded(SettingValueModelHaljsonEmbeddedConfigEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonEmbeddedConfigLinks links;
    public SettingValueModelHaljsonEmbeddedConfig withLinks(SettingValueModelHaljsonEmbeddedConfigLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public SettingValueModelHaljsonEmbeddedConfig withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedConfig withName(String name) {
        this.name = name;
        return this;
    }
}