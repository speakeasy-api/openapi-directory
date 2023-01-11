package openapisdk.models.operations;



public class GetV3CollectionsResponse {
    public openapisdk.models.shared.CollectionsList collectionsList;
    public GetV3CollectionsResponse withCollectionsList(openapisdk.models.shared.CollectionsList collectionsList) {
        this.collectionsList = collectionsList;
        return this;
    }
    public String contentType;
    public GetV3CollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV3CollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}