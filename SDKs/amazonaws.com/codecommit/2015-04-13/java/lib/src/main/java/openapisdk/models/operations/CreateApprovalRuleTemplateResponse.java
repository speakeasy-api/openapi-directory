package openapisdk.models.operations;



public class CreateApprovalRuleTemplateResponse {
    public Object approvalRuleTemplateContentRequiredException;
    public CreateApprovalRuleTemplateResponse withApprovalRuleTemplateContentRequiredException(Object approvalRuleTemplateContentRequiredException) {
        this.approvalRuleTemplateContentRequiredException = approvalRuleTemplateContentRequiredException;
        return this;
    }
    public Object approvalRuleTemplateNameAlreadyExistsException;
    public CreateApprovalRuleTemplateResponse withApprovalRuleTemplateNameAlreadyExistsException(Object approvalRuleTemplateNameAlreadyExistsException) {
        this.approvalRuleTemplateNameAlreadyExistsException = approvalRuleTemplateNameAlreadyExistsException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public CreateApprovalRuleTemplateResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public CreateApprovalRuleTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApprovalRuleTemplateOutput createApprovalRuleTemplateOutput;
    public CreateApprovalRuleTemplateResponse withCreateApprovalRuleTemplateOutput(openapisdk.models.shared.CreateApprovalRuleTemplateOutput createApprovalRuleTemplateOutput) {
        this.createApprovalRuleTemplateOutput = createApprovalRuleTemplateOutput;
        return this;
    }
    public Object invalidApprovalRuleTemplateContentException;
    public CreateApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateContentException(Object invalidApprovalRuleTemplateContentException) {
        this.invalidApprovalRuleTemplateContentException = invalidApprovalRuleTemplateContentException;
        return this;
    }
    public Object invalidApprovalRuleTemplateDescriptionException;
    public CreateApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateDescriptionException(Object invalidApprovalRuleTemplateDescriptionException) {
        this.invalidApprovalRuleTemplateDescriptionException = invalidApprovalRuleTemplateDescriptionException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public CreateApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Object numberOfRuleTemplatesExceededException;
    public CreateApprovalRuleTemplateResponse withNumberOfRuleTemplatesExceededException(Object numberOfRuleTemplatesExceededException) {
        this.numberOfRuleTemplatesExceededException = numberOfRuleTemplatesExceededException;
        return this;
    }
    public Long statusCode;
    public CreateApprovalRuleTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}