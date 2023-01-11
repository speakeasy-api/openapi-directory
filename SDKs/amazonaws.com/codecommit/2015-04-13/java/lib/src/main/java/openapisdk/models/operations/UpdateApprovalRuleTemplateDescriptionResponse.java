package openapisdk.models.operations;



public class UpdateApprovalRuleTemplateDescriptionResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public UpdateApprovalRuleTemplateDescriptionResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public UpdateApprovalRuleTemplateDescriptionResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public UpdateApprovalRuleTemplateDescriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApprovalRuleTemplateDescriptionException;
    public UpdateApprovalRuleTemplateDescriptionResponse withInvalidApprovalRuleTemplateDescriptionException(Object invalidApprovalRuleTemplateDescriptionException) {
        this.invalidApprovalRuleTemplateDescriptionException = invalidApprovalRuleTemplateDescriptionException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public UpdateApprovalRuleTemplateDescriptionResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Long statusCode;
    public UpdateApprovalRuleTemplateDescriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateApprovalRuleTemplateDescriptionOutput updateApprovalRuleTemplateDescriptionOutput;
    public UpdateApprovalRuleTemplateDescriptionResponse withUpdateApprovalRuleTemplateDescriptionOutput(openapisdk.models.shared.UpdateApprovalRuleTemplateDescriptionOutput updateApprovalRuleTemplateDescriptionOutput) {
        this.updateApprovalRuleTemplateDescriptionOutput = updateApprovalRuleTemplateDescriptionOutput;
        return this;
    }
}