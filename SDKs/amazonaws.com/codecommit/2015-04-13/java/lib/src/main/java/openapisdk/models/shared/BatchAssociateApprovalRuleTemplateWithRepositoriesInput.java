package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonProperty("repositoryNames")
    public String[] repositoryNames;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesInput withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
}