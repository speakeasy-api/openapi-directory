package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateApprovalRuleTemplateWithRepositoryInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public AssociateApprovalRuleTemplateWithRepositoryInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public AssociateApprovalRuleTemplateWithRepositoryInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}