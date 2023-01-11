package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public EnvironmentModelHaljsonEmbedded embedded;
    public EnvironmentModelHaljson withEmbedded(EnvironmentModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public EnvironmentModelHaljsonLinks links;
    public EnvironmentModelHaljson withLinks(EnvironmentModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentId")
    public String environmentId;
    public EnvironmentModelHaljson withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
}