package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApprovalRuleTemplateDescriptionOutput {
    @JsonProperty("approvalRuleTemplate")
    public ApprovalRuleTemplate approvalRuleTemplate;
    public UpdateApprovalRuleTemplateDescriptionOutput withApprovalRuleTemplate(ApprovalRuleTemplate approvalRuleTemplate) {
        this.approvalRuleTemplate = approvalRuleTemplate;
        return this;
    }
}