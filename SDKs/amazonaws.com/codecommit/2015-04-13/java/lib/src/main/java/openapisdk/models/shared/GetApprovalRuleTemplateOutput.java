package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApprovalRuleTemplateOutput {
    @JsonProperty("approvalRuleTemplate")
    public ApprovalRuleTemplate approvalRuleTemplate;
    public GetApprovalRuleTemplateOutput withApprovalRuleTemplate(ApprovalRuleTemplate approvalRuleTemplate) {
        this.approvalRuleTemplate = approvalRuleTemplate;
        return this;
    }
}