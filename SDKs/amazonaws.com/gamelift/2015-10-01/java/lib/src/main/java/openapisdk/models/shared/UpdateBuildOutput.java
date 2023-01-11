package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBuildOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateBuildOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Build")
    public Build build;
    public UpdateBuildOutput withBuild(Build build) {
        this.build = build;
        return this;
    }
}