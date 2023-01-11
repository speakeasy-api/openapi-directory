package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApprovalRuleTemplateContentInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public UpdateApprovalRuleTemplateContentInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingRuleContentSha256")
    public String existingRuleContentSha256;
    public UpdateApprovalRuleTemplateContentInput withExistingRuleContentSha256(String existingRuleContentSha256) {
        this.existingRuleContentSha256 = existingRuleContentSha256;
        return this;
    }
    @JsonProperty("newRuleContent")
    public String newRuleContent;
    public UpdateApprovalRuleTemplateContentInput withNewRuleContent(String newRuleContent) {
        this.newRuleContent = newRuleContent;
        return this;
    }
}