package openapisdk.models.operations;



public class CollectionsAllResponse {
    public String contentType;
    public CollectionsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCollectionsResponse getCollectionsResponse;
    public CollectionsAllResponse withGetCollectionsResponse(openapisdk.models.shared.GetCollectionsResponse getCollectionsResponse) {
        this.getCollectionsResponse = getCollectionsResponse;
        return this;
    }
    public Long statusCode;
    public CollectionsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}