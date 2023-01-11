package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostProjectUsernameProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_parameters")
    public java.util.Map<String, Object> buildParameters;
    public PostProjectUsernameProjectRequestBody withBuildParameters(java.util.Map<String, Object> buildParameters) {
        this.buildParameters = buildParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallel")
    public String parallel;
    public PostProjectUsernameProjectRequestBody withParallel(String parallel) {
        this.parallel = parallel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public PostProjectUsernameProjectRequestBody withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public PostProjectUsernameProjectRequestBody withTag(String tag) {
        this.tag = tag;
        return this;
    }
}