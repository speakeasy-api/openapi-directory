package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MeToken {
    @JsonProperty("capabilities")
    public String[] capabilities;
    public MeToken withCapabilities(String[] capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public MeToken withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public MeToken withName(String name) {
        this.name = name;
        return this;
    }
}