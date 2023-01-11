package openapisdk.models.operations;



public class CollectionsSearchResponse {
    public openapisdk.models.shared.Collection[] collections;
    public CollectionsSearchResponse withCollections(openapisdk.models.shared.Collection[] collections) {
        this.collections = collections;
        return this;
    }
    public String contentType;
    public CollectionsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}