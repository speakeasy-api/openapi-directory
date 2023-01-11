package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBuildInput
 * Represents the input for a request operation.
**/
public class DeleteBuildInput {
    @JsonProperty("BuildId")
    public String buildId;
    public DeleteBuildInput withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
}