package openapisdk.models.operations;



public class DatabaseCreateCollectionResponse {
    public String contentType;
    public DatabaseCreateCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseCreateCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Collection collection;
    public DatabaseCreateCollectionResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
}