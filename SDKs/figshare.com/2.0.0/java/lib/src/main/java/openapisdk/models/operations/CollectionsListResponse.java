package openapisdk.models.operations;



public class CollectionsListResponse {
    public openapisdk.models.shared.Collection[] collections;
    public CollectionsListResponse withCollections(openapisdk.models.shared.Collection[] collections) {
        this.collections = collections;
        return this;
    }
    public String contentType;
    public CollectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}