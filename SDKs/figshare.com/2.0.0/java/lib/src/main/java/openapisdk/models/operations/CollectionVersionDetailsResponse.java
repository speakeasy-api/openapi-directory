package openapisdk.models.operations;



public class CollectionVersionDetailsResponse {
    public openapisdk.models.shared.CollectionComplete collectionComplete;
    public CollectionVersionDetailsResponse withCollectionComplete(openapisdk.models.shared.CollectionComplete collectionComplete) {
        this.collectionComplete = collectionComplete;
        return this;
    }
    public String contentType;
    public CollectionVersionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionVersionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}