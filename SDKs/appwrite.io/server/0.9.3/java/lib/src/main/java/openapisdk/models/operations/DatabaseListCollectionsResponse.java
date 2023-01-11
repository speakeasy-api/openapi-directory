package openapisdk.models.operations;



public class DatabaseListCollectionsResponse {
    public String contentType;
    public DatabaseListCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseListCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CollectionList collectionList;
    public DatabaseListCollectionsResponse withCollectionList(openapisdk.models.shared.CollectionList collectionList) {
        this.collectionList = collectionList;
        return this;
    }
}