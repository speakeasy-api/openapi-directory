package openapisdk.models.operations;



public class CreateDocumentFromProformaResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public CreateDocumentFromProformaResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public CreateDocumentFromProformaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Document document;
    public CreateDocumentFromProformaResponse withDocument(openapisdk.models.shared.Document document) {
        this.document = document;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDocumentFromProformaResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public CreateDocumentFromProformaResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateDocumentFromProformaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public CreateDocumentFromProformaResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}