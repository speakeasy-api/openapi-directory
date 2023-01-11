package openapisdk.models.operations;



public class PrivateCollectionArticlesAddResponse {
    public String contentType;
    public PrivateCollectionArticlesAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionArticlesAddResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateCollectionArticlesAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateCollectionArticlesAddResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionArticlesAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}