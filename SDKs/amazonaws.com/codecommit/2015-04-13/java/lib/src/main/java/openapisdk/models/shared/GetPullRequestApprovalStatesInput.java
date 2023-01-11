package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPullRequestApprovalStatesInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public GetPullRequestApprovalStatesInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public GetPullRequestApprovalStatesInput withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}