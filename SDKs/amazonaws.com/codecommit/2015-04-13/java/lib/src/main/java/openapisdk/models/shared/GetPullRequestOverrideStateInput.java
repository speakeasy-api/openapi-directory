package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPullRequestOverrideStateInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public GetPullRequestOverrideStateInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public GetPullRequestOverrideStateInput withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}