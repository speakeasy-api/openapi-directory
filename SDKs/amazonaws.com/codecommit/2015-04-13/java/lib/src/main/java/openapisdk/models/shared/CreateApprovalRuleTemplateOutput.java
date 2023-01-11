package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateApprovalRuleTemplateOutput {
    @JsonProperty("approvalRuleTemplate")
    public ApprovalRuleTemplate approvalRuleTemplate;
    public CreateApprovalRuleTemplateOutput withApprovalRuleTemplate(ApprovalRuleTemplate approvalRuleTemplate) {
        this.approvalRuleTemplate = approvalRuleTemplate;
        return this;
    }
}