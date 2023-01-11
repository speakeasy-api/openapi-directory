package openapisdk.models.operations;



public class CollectionVersionsResponse {
    public openapisdk.models.shared.CollectionVersions[] collectionVersions;
    public CollectionVersionsResponse withCollectionVersions(openapisdk.models.shared.CollectionVersions[] collectionVersions) {
        this.collectionVersions = collectionVersions;
        return this;
    }
    public String contentType;
    public CollectionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}