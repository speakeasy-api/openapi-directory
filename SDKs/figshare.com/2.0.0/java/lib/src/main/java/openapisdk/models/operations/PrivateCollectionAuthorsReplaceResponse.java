package openapisdk.models.operations;



public class PrivateCollectionAuthorsReplaceResponse {
    public String contentType;
    public PrivateCollectionAuthorsReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionAuthorsReplaceResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateCollectionAuthorsReplaceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionAuthorsReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}