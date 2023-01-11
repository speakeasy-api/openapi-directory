package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApprovalRuleTemplateNameInput {
    @JsonProperty("newApprovalRuleTemplateName")
    public String newApprovalRuleTemplateName;
    public UpdateApprovalRuleTemplateNameInput withNewApprovalRuleTemplateName(String newApprovalRuleTemplateName) {
        this.newApprovalRuleTemplateName = newApprovalRuleTemplateName;
        return this;
    }
    @JsonProperty("oldApprovalRuleTemplateName")
    public String oldApprovalRuleTemplateName;
    public UpdateApprovalRuleTemplateNameInput withOldApprovalRuleTemplateName(String oldApprovalRuleTemplateName) {
        this.oldApprovalRuleTemplateName = oldApprovalRuleTemplateName;
        return this;
    }
}