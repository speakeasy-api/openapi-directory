package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EvaluatePullRequestApprovalRulesInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public EvaluatePullRequestApprovalRulesInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public EvaluatePullRequestApprovalRulesInput withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}