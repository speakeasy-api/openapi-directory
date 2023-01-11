package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApprovalRuleTemplateInput {
    @JsonProperty("approvalRuleTemplateContent")
    public String approvalRuleTemplateContent;
    public CreateApprovalRuleTemplateInput withApprovalRuleTemplateContent(String approvalRuleTemplateContent) {
        this.approvalRuleTemplateContent = approvalRuleTemplateContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateDescription")
    public String approvalRuleTemplateDescription;
    public CreateApprovalRuleTemplateInput withApprovalRuleTemplateDescription(String approvalRuleTemplateDescription) {
        this.approvalRuleTemplateDescription = approvalRuleTemplateDescription;
        return this;
    }
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public CreateApprovalRuleTemplateInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
}