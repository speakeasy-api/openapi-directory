package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApprovalRuleTemplateContentOutput {
    @JsonProperty("approvalRuleTemplate")
    public ApprovalRuleTemplate approvalRuleTemplate;
    public UpdateApprovalRuleTemplateContentOutput withApprovalRuleTemplate(ApprovalRuleTemplate approvalRuleTemplate) {
        this.approvalRuleTemplate = approvalRuleTemplate;
        return this;
    }
}