package openapisdk.models.operations;



public class GetApprovalRuleTemplateResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public GetApprovalRuleTemplateResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public GetApprovalRuleTemplateResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public GetApprovalRuleTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApprovalRuleTemplateOutput getApprovalRuleTemplateOutput;
    public GetApprovalRuleTemplateResponse withGetApprovalRuleTemplateOutput(openapisdk.models.shared.GetApprovalRuleTemplateOutput getApprovalRuleTemplateOutput) {
        this.getApprovalRuleTemplateOutput = getApprovalRuleTemplateOutput;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public GetApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Long statusCode;
    public GetApprovalRuleTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}