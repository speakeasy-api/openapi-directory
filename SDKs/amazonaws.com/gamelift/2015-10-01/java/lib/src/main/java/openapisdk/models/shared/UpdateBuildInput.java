package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBuildInput
 * Represents the input for a request operation.
**/
public class UpdateBuildInput {
    @JsonProperty("BuildId")
    public String buildId;
    public UpdateBuildInput withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateBuildInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public UpdateBuildInput withVersion(String version) {
        this.version = version;
        return this;
    }
}