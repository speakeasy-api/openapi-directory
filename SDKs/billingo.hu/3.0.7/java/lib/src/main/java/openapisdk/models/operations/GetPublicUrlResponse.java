package openapisdk.models.operations;



public class GetPublicUrlResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public GetPublicUrlResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public GetPublicUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentPublicUrl documentPublicUrl;
    public GetPublicUrlResponse withDocumentPublicUrl(openapisdk.models.shared.DocumentPublicUrl documentPublicUrl) {
        this.documentPublicUrl = documentPublicUrl;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPublicUrlResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public GetPublicUrlResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetPublicUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public GetPublicUrlResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}