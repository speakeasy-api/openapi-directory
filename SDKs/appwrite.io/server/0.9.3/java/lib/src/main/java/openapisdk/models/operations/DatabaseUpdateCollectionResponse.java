package openapisdk.models.operations;



public class DatabaseUpdateCollectionResponse {
    public String contentType;
    public DatabaseUpdateCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseUpdateCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Collection collection;
    public DatabaseUpdateCollectionResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
}