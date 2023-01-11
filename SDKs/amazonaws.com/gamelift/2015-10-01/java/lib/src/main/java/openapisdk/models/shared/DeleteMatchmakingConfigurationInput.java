package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteMatchmakingConfigurationInput
 * Represents the input for a request operation.
**/
public class DeleteMatchmakingConfigurationInput {
    @JsonProperty("Name")
    public String name;
    public DeleteMatchmakingConfigurationInput withName(String name) {
        this.name = name;
        return this;
    }
}