package openapisdk.models.operations;



public class ListCollectionsResponse {
    public openapisdk.models.shared.Collection[] collections;
    public ListCollectionsResponse withCollections(openapisdk.models.shared.Collection[] collections) {
        this.collections = collections;
        return this;
    }
    public String contentType;
    public ListCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListCollectionsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}