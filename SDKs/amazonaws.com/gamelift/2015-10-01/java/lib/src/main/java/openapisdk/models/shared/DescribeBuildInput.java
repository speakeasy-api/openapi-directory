package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeBuildInput
 * Represents the input for a request operation.
**/
public class DescribeBuildInput {
    @JsonProperty("BuildId")
    public String buildId;
    public DescribeBuildInput withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
}