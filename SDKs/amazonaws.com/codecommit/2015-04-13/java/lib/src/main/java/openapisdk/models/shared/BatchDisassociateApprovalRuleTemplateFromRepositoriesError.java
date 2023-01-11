package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDisassociateApprovalRuleTemplateFromRepositoriesError
 * Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
**/
public class BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesError withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}