package openapisdk.models.operations;



public class SendDocumentResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public SendDocumentResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public SendDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SendDocumentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SendDocument sendDocument;
    public SendDocumentResponse withSendDocument(openapisdk.models.shared.SendDocument sendDocument) {
        this.sendDocument = sendDocument;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public SendDocumentResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public SendDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public SendDocumentResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}