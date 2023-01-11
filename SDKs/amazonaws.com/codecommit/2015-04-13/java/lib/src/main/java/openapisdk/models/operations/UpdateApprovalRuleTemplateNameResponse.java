package openapisdk.models.operations;



public class UpdateApprovalRuleTemplateNameResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public UpdateApprovalRuleTemplateNameResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameAlreadyExistsException;
    public UpdateApprovalRuleTemplateNameResponse withApprovalRuleTemplateNameAlreadyExistsException(Object approvalRuleTemplateNameAlreadyExistsException) {
        this.approvalRuleTemplateNameAlreadyExistsException = approvalRuleTemplateNameAlreadyExistsException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public UpdateApprovalRuleTemplateNameResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public UpdateApprovalRuleTemplateNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public UpdateApprovalRuleTemplateNameResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Long statusCode;
    public UpdateApprovalRuleTemplateNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateApprovalRuleTemplateNameOutput updateApprovalRuleTemplateNameOutput;
    public UpdateApprovalRuleTemplateNameResponse withUpdateApprovalRuleTemplateNameOutput(openapisdk.models.shared.UpdateApprovalRuleTemplateNameOutput updateApprovalRuleTemplateNameOutput) {
        this.updateApprovalRuleTemplateNameOutput = updateApprovalRuleTemplateNameOutput;
        return this;
    }
}