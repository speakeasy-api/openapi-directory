package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public ConfigModelHaljsonEmbedded embedded;
    public ConfigModelHaljson withEmbedded(ConfigModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ConfigModelHaljsonLinks links;
    public ConfigModelHaljson withLinks(ConfigModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public ConfigModelHaljson withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
}