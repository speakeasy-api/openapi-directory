package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePullRequestApprovalRuleOutput {
    @JsonProperty("approvalRule")
    public ApprovalRule approvalRule;
    public CreatePullRequestApprovalRuleOutput withApprovalRule(ApprovalRule approvalRule) {
        this.approvalRule = approvalRule;
        return this;
    }
}