package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
    @JsonProperty("associatedRepositoryNames")
    public String[] associatedRepositoryNames;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesOutput withAssociatedRepositoryNames(String[] associatedRepositoryNames) {
        this.associatedRepositoryNames = associatedRepositoryNames;
        return this;
    }
    @JsonProperty("errors")
    public BatchAssociateApprovalRuleTemplateWithRepositoriesError[] errors;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesOutput withErrors(BatchAssociateApprovalRuleTemplateWithRepositoriesError[] errors) {
        this.errors = errors;
        return this;
    }
}