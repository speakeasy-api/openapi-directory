package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionConfiguration
 * Represents information about an action configuration.
**/
public class ActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public java.util.Map<String, String> configuration;
    public ActionConfiguration withConfiguration(java.util.Map<String, String> configuration) {
        this.configuration = configuration;
        return this;
    }
}