package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApprovalRuleTemplateInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public DeleteApprovalRuleTemplateInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
}