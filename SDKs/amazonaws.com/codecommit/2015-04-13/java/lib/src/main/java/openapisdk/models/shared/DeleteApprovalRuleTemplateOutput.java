package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApprovalRuleTemplateOutput {
    @JsonProperty("approvalRuleTemplateId")
    public String approvalRuleTemplateId;
    public DeleteApprovalRuleTemplateOutput withApprovalRuleTemplateId(String approvalRuleTemplateId) {
        this.approvalRuleTemplateId = approvalRuleTemplateId;
        return this;
    }
}