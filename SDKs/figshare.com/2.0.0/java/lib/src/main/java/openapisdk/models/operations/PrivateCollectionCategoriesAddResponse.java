package openapisdk.models.operations;



public class PrivateCollectionCategoriesAddResponse {
    public String contentType;
    public PrivateCollectionCategoriesAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionCategoriesAddResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateCollectionCategoriesAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateCollectionCategoriesAddResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionCategoriesAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}