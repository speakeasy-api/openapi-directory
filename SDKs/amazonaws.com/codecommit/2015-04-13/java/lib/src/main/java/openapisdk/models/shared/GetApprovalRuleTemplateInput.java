package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApprovalRuleTemplateInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public GetApprovalRuleTemplateInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
}