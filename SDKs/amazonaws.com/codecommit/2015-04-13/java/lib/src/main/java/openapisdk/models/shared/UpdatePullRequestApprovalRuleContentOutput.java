package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestApprovalRuleContentOutput {
    @JsonProperty("approvalRule")
    public ApprovalRule approvalRule;
    public UpdatePullRequestApprovalRuleContentOutput withApprovalRule(ApprovalRule approvalRule) {
        this.approvalRule = approvalRule;
        return this;
    }
}