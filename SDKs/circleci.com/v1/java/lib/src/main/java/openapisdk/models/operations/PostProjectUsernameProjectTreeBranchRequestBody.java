package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostProjectUsernameProjectTreeBranchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_parameters")
    public java.util.Map<String, Object> buildParameters;
    public PostProjectUsernameProjectTreeBranchRequestBody withBuildParameters(java.util.Map<String, Object> buildParameters) {
        this.buildParameters = buildParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallel")
    public String parallel;
    public PostProjectUsernameProjectTreeBranchRequestBody withParallel(String parallel) {
        this.parallel = parallel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public PostProjectUsernameProjectTreeBranchRequestBody withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}