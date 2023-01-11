package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMatchmakingConfigurationOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateMatchmakingConfigurationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public MatchmakingConfiguration configuration;
    public UpdateMatchmakingConfigurationOutput withConfiguration(MatchmakingConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}