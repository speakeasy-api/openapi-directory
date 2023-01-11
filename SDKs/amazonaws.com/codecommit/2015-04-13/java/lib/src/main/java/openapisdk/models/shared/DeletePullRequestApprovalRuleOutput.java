package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePullRequestApprovalRuleOutput {
    @JsonProperty("approvalRuleId")
    public String approvalRuleId;
    public DeletePullRequestApprovalRuleOutput withApprovalRuleId(String approvalRuleId) {
        this.approvalRuleId = approvalRuleId;
        return this;
    }
}