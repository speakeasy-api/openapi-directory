package openapisdk.models.operations;



public class PrivateCollectionCreateResponse {
    public openapisdk.models.shared.CollectionComplete collectionComplete;
    public PrivateCollectionCreateResponse withCollectionComplete(openapisdk.models.shared.CollectionComplete collectionComplete) {
        this.collectionComplete = collectionComplete;
        return this;
    }
    public String contentType;
    public PrivateCollectionCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionCreateResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}