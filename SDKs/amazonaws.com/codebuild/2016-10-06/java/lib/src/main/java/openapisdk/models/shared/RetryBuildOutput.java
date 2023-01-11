package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetryBuildOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public Build build;
    public RetryBuildOutput withBuild(Build build) {
        this.build = build;
        return this;
    }
}