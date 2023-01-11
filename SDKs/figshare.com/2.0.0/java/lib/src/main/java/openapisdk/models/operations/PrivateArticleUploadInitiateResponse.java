package openapisdk.models.operations;



public class PrivateArticleUploadInitiateResponse {
    public String contentType;
    public PrivateArticleUploadInitiateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleUploadInitiateResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateArticleUploadInitiateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateArticleUploadInitiateResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateArticleUploadInitiateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}