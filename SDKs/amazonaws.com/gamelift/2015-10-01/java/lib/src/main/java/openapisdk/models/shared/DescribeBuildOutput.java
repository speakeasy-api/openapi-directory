package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeBuildOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeBuildOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Build")
    public Build build;
    public DescribeBuildOutput withBuild(Build build) {
        this.build = build;
        return this;
    }
}