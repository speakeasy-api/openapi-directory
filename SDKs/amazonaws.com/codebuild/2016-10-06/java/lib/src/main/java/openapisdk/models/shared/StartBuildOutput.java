package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBuildOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public Build build;
    public StartBuildOutput withBuild(Build build) {
        this.build = build;
        return this;
    }
}