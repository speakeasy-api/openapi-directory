package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePullRequestApprovalRuleContentInput {
    @JsonProperty("approvalRuleName")
    public String approvalRuleName;
    public UpdatePullRequestApprovalRuleContentInput withApprovalRuleName(String approvalRuleName) {
        this.approvalRuleName = approvalRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingRuleContentSha256")
    public String existingRuleContentSha256;
    public UpdatePullRequestApprovalRuleContentInput withExistingRuleContentSha256(String existingRuleContentSha256) {
        this.existingRuleContentSha256 = existingRuleContentSha256;
        return this;
    }
    @JsonProperty("newRuleContent")
    public String newRuleContent;
    public UpdatePullRequestApprovalRuleContentInput withNewRuleContent(String newRuleContent) {
        this.newRuleContent = newRuleContent;
        return this;
    }
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public UpdatePullRequestApprovalRuleContentInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
}