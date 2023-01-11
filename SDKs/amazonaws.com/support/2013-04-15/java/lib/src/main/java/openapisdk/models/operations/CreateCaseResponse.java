package openapisdk.models.operations;



public class CreateCaseResponse {
    public Object attachmentSetExpired;
    public CreateCaseResponse withAttachmentSetExpired(Object attachmentSetExpired) {
        this.attachmentSetExpired = attachmentSetExpired;
        return this;
    }
    public Object attachmentSetIdNotFound;
    public CreateCaseResponse withAttachmentSetIdNotFound(Object attachmentSetIdNotFound) {
        this.attachmentSetIdNotFound = attachmentSetIdNotFound;
        return this;
    }
    public Object caseCreationLimitExceeded;
    public CreateCaseResponse withCaseCreationLimitExceeded(Object caseCreationLimitExceeded) {
        this.caseCreationLimitExceeded = caseCreationLimitExceeded;
        return this;
    }
    public String contentType;
    public CreateCaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCaseResponse createCaseResponse;
    public CreateCaseResponse withCreateCaseResponse(openapisdk.models.shared.CreateCaseResponse createCaseResponse) {
        this.createCaseResponse = createCaseResponse;
        return this;
    }
    public Object internalServerError;
    public CreateCaseResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public CreateCaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}