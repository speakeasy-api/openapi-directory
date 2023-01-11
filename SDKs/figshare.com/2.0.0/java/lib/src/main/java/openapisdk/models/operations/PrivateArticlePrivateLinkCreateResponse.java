package openapisdk.models.operations;



public class PrivateArticlePrivateLinkCreateResponse {
    public String contentType;
    public PrivateArticlePrivateLinkCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticlePrivateLinkCreateResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateArticlePrivateLinkCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateArticlePrivateLinkCreateResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateArticlePrivateLinkCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}