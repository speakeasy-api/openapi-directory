package openapisdk.models.operations;



public class AddCommunicationToCaseResponse {
    public openapisdk.models.shared.AddCommunicationToCaseResponse addCommunicationToCaseResponse;
    public AddCommunicationToCaseResponse withAddCommunicationToCaseResponse(openapisdk.models.shared.AddCommunicationToCaseResponse addCommunicationToCaseResponse) {
        this.addCommunicationToCaseResponse = addCommunicationToCaseResponse;
        return this;
    }
    public Object attachmentSetExpired;
    public AddCommunicationToCaseResponse withAttachmentSetExpired(Object attachmentSetExpired) {
        this.attachmentSetExpired = attachmentSetExpired;
        return this;
    }
    public Object attachmentSetIdNotFound;
    public AddCommunicationToCaseResponse withAttachmentSetIdNotFound(Object attachmentSetIdNotFound) {
        this.attachmentSetIdNotFound = attachmentSetIdNotFound;
        return this;
    }
    public Object caseIdNotFound;
    public AddCommunicationToCaseResponse withCaseIdNotFound(Object caseIdNotFound) {
        this.caseIdNotFound = caseIdNotFound;
        return this;
    }
    public String contentType;
    public AddCommunicationToCaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public AddCommunicationToCaseResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public AddCommunicationToCaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}