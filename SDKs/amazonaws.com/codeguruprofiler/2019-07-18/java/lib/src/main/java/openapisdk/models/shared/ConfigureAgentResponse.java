package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigureAgentResponse
 * The structure representing the configureAgentResponse.
**/
public class ConfigureAgentResponse {
    @JsonProperty("configuration")
    public AgentConfiguration configuration;
    public ConfigureAgentResponse withConfiguration(AgentConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}