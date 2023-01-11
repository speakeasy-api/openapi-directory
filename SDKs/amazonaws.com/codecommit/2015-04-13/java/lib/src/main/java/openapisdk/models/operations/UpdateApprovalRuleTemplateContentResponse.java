package openapisdk.models.operations;



public class UpdateApprovalRuleTemplateContentResponse {
    public Object approvalRuleTemplateContentRequiredException;
    public UpdateApprovalRuleTemplateContentResponse withApprovalRuleTemplateContentRequiredException(Object approvalRuleTemplateContentRequiredException) {
        this.approvalRuleTemplateContentRequiredException = approvalRuleTemplateContentRequiredException;
        return this;
    }
    public Object approvalRuleTemplateDoesNotExistException;
    public UpdateApprovalRuleTemplateContentResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public UpdateApprovalRuleTemplateContentResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public UpdateApprovalRuleTemplateContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApprovalRuleTemplateContentException;
    public UpdateApprovalRuleTemplateContentResponse withInvalidApprovalRuleTemplateContentException(Object invalidApprovalRuleTemplateContentException) {
        this.invalidApprovalRuleTemplateContentException = invalidApprovalRuleTemplateContentException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public UpdateApprovalRuleTemplateContentResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Object invalidRuleContentSha256Exception;
    public UpdateApprovalRuleTemplateContentResponse withInvalidRuleContentSha256Exception(Object invalidRuleContentSha256Exception) {
        this.invalidRuleContentSha256Exception = invalidRuleContentSha256Exception;
        return this;
    }
    public Long statusCode;
    public UpdateApprovalRuleTemplateContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateApprovalRuleTemplateContentOutput updateApprovalRuleTemplateContentOutput;
    public UpdateApprovalRuleTemplateContentResponse withUpdateApprovalRuleTemplateContentOutput(openapisdk.models.shared.UpdateApprovalRuleTemplateContentOutput updateApprovalRuleTemplateContentOutput) {
        this.updateApprovalRuleTemplateContentOutput = updateApprovalRuleTemplateContentOutput;
        return this;
    }
}