package openapisdk.models.operations;



public class PrivateProjectArticlesCreateResponse {
    public String contentType;
    public PrivateProjectArticlesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectArticlesCreateResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateProjectArticlesCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateProjectArticlesCreateResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateProjectArticlesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}