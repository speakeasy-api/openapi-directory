package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchAssociateApprovalRuleTemplateWithRepositoriesError
 * Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
**/
public class BatchAssociateApprovalRuleTemplateWithRepositoriesError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesError withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}