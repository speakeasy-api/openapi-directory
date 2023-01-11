package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RepositoryPreReceiveHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration_url")
    public String configurationUrl;
    public RepositoryPreReceiveHook withConfigurationUrl(String configurationUrl) {
        this.configurationUrl = configurationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement")
    public String enforcement;
    public RepositoryPreReceiveHook withEnforcement(String enforcement) {
        this.enforcement = enforcement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RepositoryPreReceiveHook withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RepositoryPreReceiveHook withName(String name) {
        this.name = name;
        return this;
    }
}