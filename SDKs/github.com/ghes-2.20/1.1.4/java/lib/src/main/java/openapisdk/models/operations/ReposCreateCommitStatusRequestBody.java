package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateCommitStatusRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public ReposCreateCommitStatusRequestBody withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposCreateCommitStatusRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("state")
    public ReposCreateCommitStatusRequestBodyStateEnum state;
    public ReposCreateCommitStatusRequestBody withState(ReposCreateCommitStatusRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_url")
    public String targetUrl;
    public ReposCreateCommitStatusRequestBody withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}