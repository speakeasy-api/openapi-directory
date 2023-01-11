package openapisdk.models.operations;



public class ReposListPublicResponse {
    public String contentType;
    public ReposListPublicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListPublicResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListPublicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository[] minimalRepositories;
    public ReposListPublicResponse withMinimalRepositories(openapisdk.models.shared.MinimalRepository[] minimalRepositories) {
        this.minimalRepositories = minimalRepositories;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposListPublicResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}