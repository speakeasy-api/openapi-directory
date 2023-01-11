package openapisdk.models.operations;



public class DeleteApprovalRuleTemplateResponse {
    public Object approvalRuleTemplateInUseException;
    public DeleteApprovalRuleTemplateResponse withApprovalRuleTemplateInUseException(Object approvalRuleTemplateInUseException) {
        this.approvalRuleTemplateInUseException = approvalRuleTemplateInUseException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public DeleteApprovalRuleTemplateResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public DeleteApprovalRuleTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApprovalRuleTemplateOutput deleteApprovalRuleTemplateOutput;
    public DeleteApprovalRuleTemplateResponse withDeleteApprovalRuleTemplateOutput(openapisdk.models.shared.DeleteApprovalRuleTemplateOutput deleteApprovalRuleTemplateOutput) {
        this.deleteApprovalRuleTemplateOutput = deleteApprovalRuleTemplateOutput;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public DeleteApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Long statusCode;
    public DeleteApprovalRuleTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}