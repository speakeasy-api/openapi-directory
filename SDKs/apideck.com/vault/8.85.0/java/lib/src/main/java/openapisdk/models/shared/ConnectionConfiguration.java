package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaults")
    public ConnectionConfigurationDefaults[] defaults;
    public ConnectionConfiguration withDefaults(ConnectionConfigurationDefaults[] defaults) {
        this.defaults = defaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public ConnectionConfiguration withResource(String resource) {
        this.resource = resource;
        return this;
    }
}