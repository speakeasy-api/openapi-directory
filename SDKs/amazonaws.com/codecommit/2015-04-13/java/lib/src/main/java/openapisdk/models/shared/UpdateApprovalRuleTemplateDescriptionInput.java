package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApprovalRuleTemplateDescriptionInput {
    @JsonProperty("approvalRuleTemplateDescription")
    public String approvalRuleTemplateDescription;
    public UpdateApprovalRuleTemplateDescriptionInput withApprovalRuleTemplateDescription(String approvalRuleTemplateDescription) {
        this.approvalRuleTemplateDescription = approvalRuleTemplateDescription;
        return this;
    }
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public UpdateApprovalRuleTemplateDescriptionInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
}