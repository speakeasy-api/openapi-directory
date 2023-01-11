package openapisdk.models.operations;



public class CollectionDetailsResponse {
    public openapisdk.models.shared.CollectionComplete collectionComplete;
    public CollectionDetailsResponse withCollectionComplete(openapisdk.models.shared.CollectionComplete collectionComplete) {
        this.collectionComplete = collectionComplete;
        return this;
    }
    public String contentType;
    public CollectionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}