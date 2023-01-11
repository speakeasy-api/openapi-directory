package openapisdk.models.operations;



public class PrivateCollectionAuthorsAddResponse {
    public String contentType;
    public PrivateCollectionAuthorsAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionAuthorsAddResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateCollectionAuthorsAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public PrivateCollectionAuthorsAddResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionAuthorsAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}