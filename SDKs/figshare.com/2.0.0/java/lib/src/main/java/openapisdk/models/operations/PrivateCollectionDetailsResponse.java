package openapisdk.models.operations;



public class PrivateCollectionDetailsResponse {
    public openapisdk.models.shared.CollectionComplete collectionComplete;
    public PrivateCollectionDetailsResponse withCollectionComplete(openapisdk.models.shared.CollectionComplete collectionComplete) {
        this.collectionComplete = collectionComplete;
        return this;
    }
    public String contentType;
    public PrivateCollectionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}