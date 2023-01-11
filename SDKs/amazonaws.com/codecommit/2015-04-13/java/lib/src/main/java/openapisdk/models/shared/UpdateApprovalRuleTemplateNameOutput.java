package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApprovalRuleTemplateNameOutput {
    @JsonProperty("approvalRuleTemplate")
    public ApprovalRuleTemplate approvalRuleTemplate;
    public UpdateApprovalRuleTemplateNameOutput withApprovalRuleTemplate(ApprovalRuleTemplate approvalRuleTemplate) {
        this.approvalRuleTemplate = approvalRuleTemplate;
        return this;
    }
}