package openapisdk.models.operations;



public class CollectionsOneResponse {
    public String contentType;
    public CollectionsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCollectionResponse getCollectionResponse;
    public CollectionsOneResponse withGetCollectionResponse(openapisdk.models.shared.GetCollectionResponse getCollectionResponse) {
        this.getCollectionResponse = getCollectionResponse;
        return this;
    }
    public Long statusCode;
    public CollectionsOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}