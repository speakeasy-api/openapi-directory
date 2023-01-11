package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteMatchmakingRuleSetInput
 * Represents the input for a request operation.
**/
public class DeleteMatchmakingRuleSetInput {
    @JsonProperty("Name")
    public String name;
    public DeleteMatchmakingRuleSetInput withName(String name) {
        this.name = name;
        return this;
    }
}