package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePullRequestApprovalRuleInput {
    @JsonProperty("approvalRuleContent")
    public String approvalRuleContent;
    public CreatePullRequestApprovalRuleInput withApprovalRuleContent(String approvalRuleContent) {
        this.approvalRuleContent = approvalRuleContent;
        return this;
    }
    @JsonProperty("approvalRuleName")
    public String approvalRuleName;
    public CreatePullRequestApprovalRuleInput withApprovalRuleName(String approvalRuleName) {
        this.approvalRuleName = approvalRuleName;
        return this;
    }
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public CreatePullRequestApprovalRuleInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
}