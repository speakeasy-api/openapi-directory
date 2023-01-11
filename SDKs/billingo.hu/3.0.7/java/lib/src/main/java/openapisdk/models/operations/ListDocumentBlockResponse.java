package openapisdk.models.operations;



public class ListDocumentBlockResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public ListDocumentBlockResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public ListDocumentBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentBlockList documentBlockList;
    public ListDocumentBlockResponse withDocumentBlockList(openapisdk.models.shared.DocumentBlockList documentBlockList) {
        this.documentBlockList = documentBlockList;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDocumentBlockResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public ListDocumentBlockResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public ListDocumentBlockResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}