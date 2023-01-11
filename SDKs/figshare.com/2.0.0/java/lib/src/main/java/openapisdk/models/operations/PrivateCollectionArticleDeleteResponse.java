package openapisdk.models.operations;



public class PrivateCollectionArticleDeleteResponse {
    public String contentType;
    public PrivateCollectionArticleDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionArticleDeleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionArticleDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}