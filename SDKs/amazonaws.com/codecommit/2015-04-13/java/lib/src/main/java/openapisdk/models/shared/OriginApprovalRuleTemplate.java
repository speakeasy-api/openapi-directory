package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OriginApprovalRuleTemplate
 * Returns information about the template that created the approval rule for a pull request.
**/
public class OriginApprovalRuleTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateId")
    public String approvalRuleTemplateId;
    public OriginApprovalRuleTemplate withApprovalRuleTemplateId(String approvalRuleTemplateId) {
        this.approvalRuleTemplateId = approvalRuleTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public OriginApprovalRuleTemplate withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
}