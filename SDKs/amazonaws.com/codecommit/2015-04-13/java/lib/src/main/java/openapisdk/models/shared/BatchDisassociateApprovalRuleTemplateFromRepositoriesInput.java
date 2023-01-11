package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonProperty("repositoryNames")
    public String[] repositoryNames;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesInput withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
}