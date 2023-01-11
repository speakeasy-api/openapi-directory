package openapisdk.models.operations;



public class ListDocumentResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public ListDocumentResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public ListDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public ListDocumentResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDocumentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public ListDocumentResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public ListDocumentResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}