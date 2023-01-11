package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionConfigurationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaults")
    public ConnectionConfigurationDefaultsInput[] defaults;
    public ConnectionConfigurationInput withDefaults(ConnectionConfigurationDefaultsInput[] defaults) {
        this.defaults = defaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public ConnectionConfigurationInput withResource(String resource) {
        this.resource = resource;
        return this;
    }
}