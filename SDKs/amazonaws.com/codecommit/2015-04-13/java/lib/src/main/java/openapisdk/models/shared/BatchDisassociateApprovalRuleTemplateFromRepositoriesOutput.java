package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
    @JsonProperty("disassociatedRepositoryNames")
    public String[] disassociatedRepositoryNames;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput withDisassociatedRepositoryNames(String[] disassociatedRepositoryNames) {
        this.disassociatedRepositoryNames = disassociatedRepositoryNames;
        return this;
    }
    @JsonProperty("errors")
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] errors;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput withErrors(BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] errors) {
        this.errors = errors;
        return this;
    }
}